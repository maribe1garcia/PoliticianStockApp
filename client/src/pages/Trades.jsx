import { useState } from 'react'
import { TrendingUp, TrendingDown, Filter } from 'lucide-react'

function Trades() {
  const [filter, setFilter] = useState('all')

  // Mock data - will be replaced with API call
  const trades = [
    { id: 1, politician: 'John Doe', ticker: 'AAPL', type: 'Buy', amount: '$15,000 - $50,000', date: '2024-01-15' },
    { id: 2, politician: 'Jane Smith', ticker: 'TSLA', type: 'Sell', amount: '$50,000 - $100,000', date: '2024-01-14' },
    { id: 3, politician: 'Bob Johnson', ticker: 'MSFT', type: 'Buy', amount: '$1,000 - $15,000', date: '2024-01-13' },
    { id: 4, politician: 'John Doe', ticker: 'GOOGL', type: 'Buy', amount: '$15,000 - $50,000', date: '2024-01-12' },
    { id: 5, politician: 'Jane Smith', ticker: 'AMZN', type: 'Sell', amount: '$100,000 - $250,000', date: '2024-01-11' },
  ]

  const filteredTrades = filter === 'all' 
    ? trades 
    : trades.filter(t => t.type.toLowerCase() === filter)

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Recent Trades</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === 'all' 
                ? 'bg-primary-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('buy')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === 'buy' 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Buys
          </button>
          <button
            onClick={() => setFilter('sell')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === 'sell' 
                ? 'bg-red-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Sells
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {filteredTrades.map((trade) => (
          <div key={trade.id} className="card">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3 flex-1">
                {trade.type === 'Buy' ? (
                  <div className="bg-green-100 p-2 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                ) : (
                  <div className="bg-red-100 p-2 rounded-lg">
                    <TrendingDown className="w-5 h-5 text-red-600" />
                  </div>
                )}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-lg">{trade.ticker}</span>
                    <span className={`text-sm font-medium ${
                      trade.type === 'Buy' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {trade.type}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{trade.politician}</p>
                  <p className="text-sm font-medium">{trade.amount}</p>
                </div>
              </div>
              <div className="text-right text-sm text-gray-600">
                {trade.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Trades
