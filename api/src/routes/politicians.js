import express from 'express'
import { supabase } from '../config/supabase.js'

const router = express.Router()

// GET /api/politicians - Get all politicians
router.get('/', async (req, res, next) => {
  try {
    const { search, party, chamber, state, limit = 50, offset = 0 } = req.query

    let query = supabase
      .from('politicians')
      .select('*', { count: 'exact' })
      .order('name', { ascending: true })
      .range(offset, offset + limit - 1)

    if (search) {
      query = query.or(`name.ilike.%${search}%,state.ilike.%${search}%`)
    }
    if (party) {
      query = query.eq('party', party)
    }
    if (chamber) {
      query = query.eq('chamber', chamber)
    }
    if (state) {
      query = query.eq('state', state)
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

// GET /api/politicians/:id - Get politician by ID
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params

    const { data, error } = await supabase
      .from('politicians')
      .select('*')
      .eq('id', id)
      .single()

    if (error) throw error
    if (!data) {
      return res.status(404).json({ error: 'Politician not found' })
    }

    res.json(data)
  } catch (error) {
    next(error)
  }
})

// GET /api/politicians/:id/trades - Get trades for a politician
router.get('/:id/trades', async (req, res, next) => {
  try {
    const { id } = req.params
    const { limit = 50, offset = 0 } = req.query

    const { data, error, count } = await supabase
      .from('trades')
      .select('*', { count: 'exact' })
      .eq('politician_id', id)
      .order('transaction_date', { ascending: false })
      .range(offset, offset + limit - 1)

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

export default router
