import { ExternalLink, Github } from 'lucide-react'

function About() {
  return (
    <div className="container mx-auto px-4 py-6 max-w-3xl">
      <h2 className="text-2xl font-bold mb-6">About This Project</h2>

      <div className="card mb-6">
        <h3 className="text-lg font-semibold mb-3">Mission</h3>
        <p className="text-gray-700 leading-relaxed">
          The Politician Stock Tracker aims to increase transparency in government by making 
          legally required financial disclosures more accessible and understandable to the public. 
          We transform complex disclosure documents into clear, visual insights that help citizens 
          understand the trading activities of their elected officials.
        </p>
      </div>

      <div className="card mb-6">
        <h3 className="text-lg font-semibold mb-3">Data Sources</h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          All data is sourced from official financial disclosure reports filed by elected officials 
          as required by law:
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2">
            <span className="text-primary-600">•</span>
            <span>Senate: Financial Disclosure Reports (via Senate Office of Public Records)</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary-600">•</span>
            <span>House: Periodic Transaction Reports (via House Clerk)</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary-600">•</span>
            <span>Updates: Data is refreshed as new disclosures are filed</span>
          </li>
        </ul>
      </div>

      <div className="card mb-6">
        <h3 className="text-lg font-semibold mb-3">Technology Stack</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <p className="font-medium text-primary-600 mb-1">Frontend</p>
            <ul className="space-y-1 text-gray-700">
              <li>React</li>
              <li>Vite</li>
              <li>TailwindCSS</li>
              <li>PWA Support</li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-primary-600 mb-1">Backend</p>
            <ul className="space-y-1 text-gray-700">
              <li>Express.js</li>
              <li>Node.js</li>
              <li>REST API</li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-primary-600 mb-1">Database</p>
            <ul className="space-y-1 text-gray-700">
              <li>Supabase</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card mb-6">
        <h3 className="text-lg font-semibold mb-3">Disclaimer</h3>
        <p className="text-sm text-gray-700 leading-relaxed">
          This project is for informational and educational purposes only. While we strive for 
          accuracy, we cannot guarantee the completeness or timeliness of the data. Trade amounts 
          are reported in ranges as specified in official disclosures. This is not financial advice.
        </p>
      </div>

      <div className="card">
        <h3 className="text-lg font-semibold mb-3">Links</h3>
        <div className="space-y-3">
          <a
            href="https://github.com/maribe1garcia/PoliticianStockApp"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary-600 hover:text-primary-700"
          >
            <Github className="w-5 h-5" />
            <span>View on GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
