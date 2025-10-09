import express from 'express'
import { supabase } from '../config/supabase.js'

const router = express.Router()

// GET /api/trades - Get all trades
router.get('/', async (req, res, next) => {
  try {
    const { 
      ticker, 
      type, 
      politician_id,
      start_date,
      end_date,
      limit = 50, 
      offset = 0 
    } = req.query

    let query = supabase
      .from('trades')
      .select(`
        *,
        politicians (
          id,
          name,
          party,
          chamber,
          state
        )
      `, { count: 'exact' })
      .order('transaction_date', { ascending: false })
      .range(offset, offset + limit - 1)

    if (ticker) {
      query = query.eq('ticker', ticker.toUpperCase())
    }
    if (type) {
      query = query.eq('transaction_type', type)
    }
    if (politician_id) {
      query = query.eq('politician_id', politician_id)
    }
    if (start_date) {
      query = query.gte('transaction_date', start_date)
    }
    if (end_date) {
      query = query.lte('transaction_date', end_date)
    }

    const { data, error, count } = await query

    if (error) throw error

    res.json({
      data,
      pagination: {
        total: count,
        limit: parseInt(limit),
        offset: parseInt(offset)
      }
    })
  } catch (error) {
    next(error)
  }
})

// GET /api/trades/:id - Get trade by ID
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params

    const { data, error } = await supabase
      .from('trades')
      .select(`
        *,
        politicians (
          id,
          name,
          party,
          chamber,
          state
        )
      `)
      .eq('id', id)
      .single()

    if (error) throw error
    if (!data) {
      return res.status(404).json({ error: 'Trade not found' })
    }

    res.json(data)
  } catch (error) {
    next(error)
  }
})

export default router
