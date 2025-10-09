import express from 'express'
import { supabase } from '../config/supabase.js'

const router = express.Router()

// GET /api/analytics/summary - Get overall statistics
router.get('/summary', async (req, res, next) => {
  try {
    // Get total trades count
    const { count: totalTrades } = await supabase
      .from('trades')
      .select('*', { count: 'exact', head: true })

    // Get total politicians count
    const { count: totalPoliticians } = await supabase
      .from('politicians')
      .select('*', { count: 'exact', head: true })

    // Get buy/sell breakdown
    const { data: tradeTypes } = await supabase
      .from('trades')
      .select('transaction_type')

    const buys = tradeTypes?.filter(t => t.transaction_type === 'Buy').length || 0
    const sells = tradeTypes?.filter(t => t.transaction_type === 'Sell').length || 0

    res.json({
      totalTrades,
      totalPoliticians,
      tradesByType: {
        buy: buys,
        sell: sells
      }
    })
  } catch (error) {
    next(error)
  }
})

// GET /api/analytics/top-tickers - Get most traded tickers
router.get('/top-tickers', async (req, res, next) => {
  try {
    const { limit = 10 } = req.query

    const { data, error } = await supabase
      .from('trades')
      .select('ticker')

    if (error) throw error

    // Count occurrences of each ticker
    const tickerCounts = data.reduce((acc, trade) => {
      acc[trade.ticker] = (acc[trade.ticker] || 0) + 1
      return acc
    }, {})

    // Convert to array and sort
    const topTickers = Object.entries(tickerCounts)
      .map(([ticker, count]) => ({ ticker, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, parseInt(limit))

    res.json(topTickers)
  } catch (error) {
    next(error)
  }
})

// GET /api/analytics/trades-by-month - Get trades grouped by month
router.get('/trades-by-month', async (req, res, next) => {
  try {
    const { months = 6 } = req.query

    const { data, error } = await supabase
      .from('trades')
      .select('transaction_date')
      .order('transaction_date', { ascending: false })

    if (error) throw error

    // Group by month
    const monthlyData = data.reduce((acc, trade) => {
      const date = new Date(trade.transaction_date)
      const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`
      acc[monthKey] = (acc[monthKey] || 0) + 1
      return acc
    }, {})

    // Convert to array and sort
    const tradesByMonth = Object.entries(monthlyData)
      .map(([month, count]) => ({ month, count }))
      .sort((a, b) => b.month.localeCompare(a.month))
      .slice(0, parseInt(months))
      .reverse()

    res.json(tradesByMonth)
  } catch (error) {
    next(error)
  }
})

// GET /api/analytics/top-traders - Get politicians with most trades
router.get('/top-traders', async (req, res, next) => {
  try {
    const { limit = 10 } = req.query

    const { data, error } = await supabase
      .from('trades')
      .select(`
        politician_id,
        politicians (
          id,
          name,
          party,
          chamber,
          state
        )
      `)

    if (error) throw error

    // Count trades per politician
    const traderCounts = data.reduce((acc, trade) => {
      const politicianId = trade.politician_id
      if (!acc[politicianId]) {
        acc[politicianId] = {
          politician: trade.politicians,
          count: 0
        }
      }
      acc[politicianId].count++
      return acc
    }, {})

    // Convert to array and sort
    const topTraders = Object.values(traderCounts)
      .sort((a, b) => b.count - a.count)
      .slice(0, parseInt(limit))

    res.json(topTraders)
  } catch (error) {
    next(error)
  }
})

export default router
