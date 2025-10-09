import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, TrendingUp, TrendingDown } from 'lucide-react'

function PoliticianDetail() {
  const { id } = useParams()

  // Mock data - will be replaced with API call
  const politician = {
    id,
    name: 'John Doe',
    party: 'Democrat',
    chamber: 'Senate',
    state: 'CA',
    photoUrl: null,
    totalTrades: 45,
    totalVolume: '$2.3M'
  }

  const recentTrades = [
    { id: 1, ticker: 'AAPL', type: 'Buy', amount: '$15,000 - $50,000', date: '2024-01-15' },
    { id: 2, ticker: 'TSLA', type: 'Sell', amount: '$50,000 - $100,000', date: '2024-01-10' },
    { id: 3, ticker: 'MSFT', type: 'Buy', amount: '$1,000 - $15,000', date: '2024-01-05' },
  ]

  return (
    <div className="container mx-auto px-4 py-6">
      <Link to="/politicians" className="flex items-center gap-2 text-primary-600 mb-6 hover:text-primary-700">
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Politicians</span>
      </Link>

      <div className="card mb-6">
        <div className="flex items-start gap-4">
          <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-bold text-gray-600">
            {politician.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-2">{politician.name}</h1>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full">
                {politician.party}
              </span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                {politician.chamber}
              </span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                {politician.state}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-200">
          <div>
            <p className="text-sm text-gray-600">Total Trades</p>
            <p className="text-2xl font-bold">{politician.totalTrades}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Total Volume</p>
            <p className="text-2xl font-bold">{politician.totalVolume}</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="text-xl font-bold mb-4">Recent Trades</h2>
        <div className="space-y-3">
          {recentTrades.map((trade) => (
            <div key={trade.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                {trade.type === 'Buy' ? (
                  <TrendingUp className="w-5 h-5 text-green-600" />
                ) : (
                  <TrendingDown className="w-5 h-5 text-red-600" />
                )}
                <div>
                  <p className="font-semibold">{trade.ticker}</p>
                  <p className="text-sm text-gray-600">{trade.amount}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-medium ${trade.type === 'Buy' ? 'text-green-600' : 'text-red-600'}`}>
                  {trade.type}
                </p>
                <p className="text-sm text-gray-600">{trade.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PoliticianDetail
