import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'
import Header from './Header'

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pb-20 md:pb-4">
        <Outlet />
      </main>
      <Navigation />
    </div>
  )
}

export default Layout
