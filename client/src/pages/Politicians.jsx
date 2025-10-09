import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, ChevronRight } from 'lucide-react'

function Politicians() {
  const [searchTerm, setSearchTerm] = useState('')

  // Mock data - will be replaced with API call
  const politicians = [
    { id: 1, name: 'John Doe', party: 'Democrat', chamber: 'Senate', state: 'CA', trades: 45 },
    { id: 2, name: 'Jane Smith', party: 'Republican', chamber: 'House', state: 'TX', trades: 32 },
    { id: 3, name: 'Bob Johnson', party: 'Democrat', chamber: 'Senate', state: 'NY', trades: 28 },
  ]

  const filteredPoliticians = politicians.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.state.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-6">Politicians</h2>
      
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by name or state..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="space-y-3">
        {filteredPoliticians.map((politician) => (
          <Link
            key={politician.id}
            to={`/politicians/${politician.id}`}
            className="card hover:shadow-lg transition-shadow flex items-center justify-between"
          >
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{politician.name}</h3>
              <div className="flex gap-4 text-sm text-gray-600 mt-1">
                <span>{politician.party}</span>
                <span>•</span>
                <span>{politician.chamber}</span>
                <span>•</span>
                <span>{politician.state}</span>
              </div>
              <p className="text-sm text-primary-600 mt-2">
                {politician.trades} trades reported
              </p>
            </div>
            <ChevronRight className="w-6 h-6 text-gray-400" />
          </Link>
        ))}
      </div>

      {filteredPoliticians.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No politicians found matching your search.
        </div>
      )}
    </div>
  )
}

export default Politicians
