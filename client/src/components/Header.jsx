import { Landmark } from 'lucide-react'

function Header() {
  return (
    <header className="bg-primary-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-3">
          <Landmark className="w-8 h-8" />
          <div>
            <h1 className="text-xl font-bold">Politician Stock Tracker</h1>
            <p className="text-xs text-primary-100">Transparency in Trading</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
