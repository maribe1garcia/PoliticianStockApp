# Politician Stock App

A mobile-first web application that tracks and visualizes stock trades of elected officials, providing transparency by organizing legally required disclosures into clear, visual insights.

## 🏗️ Architecture

- **Client**: React Progressive Web App (PWA) built with Vite
- **API**: Express.js REST API
- **Database**: Supabase (PostgreSQL)

## 📁 Project Structure

```
/client/        # React PWA (local dev: Vite)
/api/           # Express API (local dev: Node)
/supabase/      # SQL migrations + seeds
/docs/          # PRD, site map, OpenAPI, deployment notes
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Supabase account and project
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/maribe1garcia/PoliticianStockApp.git
   cd PoliticianStockApp
   ```

2. **Set up the API**
   ```bash
   cd api
   npm install
   cp .env.example .env
   # Edit .env with your Supabase credentials
   npm run dev
   ```

3. **Set up the Client**
   ```bash
   cd client
   npm install
   cp .env.example .env
   # Edit .env with your API endpoint
   npm run dev
   ```

4. **Set up Supabase**
   - Create a Supabase project at https://supabase.com
   - Run migrations from `/supabase/migrations/`
   - Seed initial data with `/supabase/seeds/`

## 🛠️ Development

### Client (React PWA)
```bash
cd client
npm run dev          # Start dev server (http://localhost:5173)
npm run build        # Build for production
npm run preview      # Preview production build
```

### API (Express)
```bash
cd api
npm run dev          # Start dev server with hot reload
npm start            # Start production server
npm test             # Run tests
```

## 📚 Documentation

See the `/docs` folder for detailed documentation:
- **PRD.md**: Product Requirements Document
- **SITEMAP.md**: Application structure and navigation
- **API.md**: OpenAPI specification
- **DEPLOYMENT.md**: Deployment guides and notes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🔗 Links

- **Repository**: https://github.com/maribe1garcia/PoliticianStockApp
- **Issues**: https://github.com/maribe1garcia/PoliticianStockApp/issues

---

Built with transparency in mind 🏛️
