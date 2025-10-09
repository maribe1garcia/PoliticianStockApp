import { TrendingUp, Users, DollarSign, AlertCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="container mx-auto px-4 py-6">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-primary-100 p-2 rounded-lg">
                <TrendingUp className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">1,234</p>
                <p className="text-sm text-gray-600">Total Trades</p>
              </div>
            </div>
          </div>
          
          <div className="card">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-green-100 p-2 rounded-lg">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">156</p>
                <p className="text-sm text-gray-600">Politicians Tracked</p>
              </div>
            </div>
          </div>
          
          <div className="card">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-blue-100 p-2 rounded-lg">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">$45M</p>
                <p className="text-sm text-gray-600">Total Volume</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex gap-3">
          <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-blue-900 mb-1">About This Data</h3>
            <p className="text-sm text-blue-800">
              All trading data is sourced from legally required financial disclosures 
              filed by elected officials. Data is updated regularly as new disclosures 
              become available.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link to="/politicians" className="card hover:shadow-lg transition-shadow">
            <Users className="w-8 h-8 text-primary-600 mb-2" />
            <h3 className="font-semibold text-lg mb-1">Browse Politicians</h3>
            <p className="text-sm text-gray-600">
              View all tracked elected officials and their trading activity
            </p>
          </Link>
          
          <Link to="/trades" className="card hover:shadow-lg transition-shadow">
            <TrendingUp className="w-8 h-8 text-primary-600 mb-2" />
            <h3 className="font-semibold text-lg mb-1">Recent Trades</h3>
            <p className="text-sm text-gray-600">
              See the latest stock trades filed by politicians
            </p>
          </Link>
          
          <Link to="/analytics" className="card hover:shadow-lg transition-shadow">
            <DollarSign className="w-8 h-8 text-primary-600 mb-2" />
            <h3 className="font-semibold text-lg mb-1">Analytics</h3>
            <p className="text-sm text-gray-600">
              Explore trends and patterns in political trading
            </p>
          </Link>
          
          <Link to="/about" className="card hover:shadow-lg transition-shadow">
            <AlertCircle className="w-8 h-8 text-primary-600 mb-2" />
            <h3 className="font-semibold text-lg mb-1">About</h3>
            <p className="text-sm text-gray-600">
              Learn more about this project and data sources
            </p>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
