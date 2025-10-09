import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

function Analytics() {
  // Mock data - will be replaced with API call
  const tradesByMonth = [
    { month: 'Jan', trades: 45 },
    { month: 'Feb', trades: 52 },
    { month: 'Mar', trades: 48 },
    { month: 'Apr', trades: 61 },
    { month: 'May', trades: 55 },
    { month: 'Jun', trades: 67 },
  ]

  const tradesByType = [
    { name: 'Buy', value: 156, color: '#10b981' },
    { name: 'Sell', value: 98, color: '#ef4444' },
  ]

  const topTickers = [
    { ticker: 'AAPL', trades: 23 },
    { ticker: 'TSLA', trades: 18 },
    { ticker: 'MSFT', trades: 15 },
    { ticker: 'GOOGL', trades: 12 },
    { ticker: 'AMZN', trades: 10 },
  ]

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-6">Analytics</h2>

      <div className="card mb-6">
        <h3 className="text-lg font-semibold mb-4">Trades by Month</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={tradesByMonth}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="trades" fill="#2563eb" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Buy vs Sell</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={tradesByType}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {tradesByType.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Top Traded Tickers</h3>
          <div className="space-y-3">
            {topTickers.map((item, index) => (
              <div key={item.ticker} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-lg font-bold text-gray-400">#{index + 1}</span>
                  <span className="font-semibold">{item.ticker}</span>
                </div>
                <span className="text-primary-600 font-medium">{item.trades} trades</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card">
        <h3 className="text-lg font-semibold mb-4">Key Insights</h3>
        <ul className="space-y-3 text-sm">
          <li className="flex gap-2">
            <span className="text-primary-600">•</span>
            <span>Trading activity increased 23% in the last quarter</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary-600">•</span>
            <span>Technology stocks account for 45% of all trades</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary-600">•</span>
            <span>Senate members trade 2x more frequently than House members</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary-600">•</span>
            <span>Average trade value ranges from $15,000 to $50,000</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Analytics
