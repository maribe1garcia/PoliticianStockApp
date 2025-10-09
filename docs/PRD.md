# Product Requirements Document (PRD)
## Politician Stock Tracker

### 1. Overview

**Product Name**: Politician Stock Tracker  
**Version**: 0.1.0  
**Last Updated**: 2025-10-08

#### 1.1 Purpose
The Politician Stock Tracker is a mobile-first web application designed to increase government transparency by making elected officials' stock trading activities easily accessible and understandable to the public.

#### 1.2 Target Audience
- General public interested in government transparency
- Journalists and researchers
- Investors seeking insights
- Civic engagement organizations

### 2. Goals and Objectives

#### 2.1 Primary Goals
- **Transparency**: Make political stock trading data accessible to everyone
- **Clarity**: Transform complex disclosure documents into visual insights
- **Accessibility**: Provide a mobile-first experience for on-the-go access
- **Timeliness**: Update data regularly as new disclosures are filed

#### 2.2 Success Metrics
- User engagement (daily/monthly active users)
- Data freshness (time between disclosure and availability)
- Mobile usage percentage
- User retention rate

### 3. Features and Requirements

#### 3.1 Core Features (MVP)

##### 3.1.1 Home Dashboard
- **Summary Statistics**: Total trades, politicians tracked, total volume
- **Recent Activity**: Latest trades and updates
- **Quick Links**: Navigation to key sections
- **Data Source Information**: Transparency about data origins

##### 3.1.2 Politicians Directory
- **List View**: All tracked politicians with filtering
- **Search**: By name, state, party, chamber
- **Filters**: Party affiliation, chamber, state
- **Sort Options**: By name, trade count, recent activity

##### 3.1.3 Politician Detail Page
- **Profile Information**: Name, party, chamber, state, photo
- **Trade Statistics**: Total trades, total volume
- **Recent Trades**: Chronological list of transactions
- **Trade History Chart**: Visual representation over time

##### 3.1.4 Trades Feed
- **Chronological List**: All trades across politicians
- **Filters**: Buy/Sell, date range, ticker, politician
- **Trade Details**: Ticker, type, amount range, date
- **Politician Context**: Link to politician profile

##### 3.1.5 Analytics Dashboard
- **Trades by Month**: Bar chart showing trading volume over time
- **Buy vs Sell**: Pie chart showing transaction type distribution
- **Top Tickers**: Most frequently traded stocks
- **Top Traders**: Politicians with most trading activity
- **Key Insights**: Automated insights and trends

##### 3.1.6 About Page
- **Mission Statement**: Project purpose and goals
- **Data Sources**: Official disclosure sources
- **Technology Stack**: Technical details
- **Disclaimer**: Legal and accuracy disclaimers

#### 3.2 Technical Requirements

##### 3.2.1 Frontend (Client)
- **Framework**: React 18+
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Icons**: Lucide React
- **Charts**: Recharts
- **Routing**: React Router v6
- **PWA**: Service Worker, offline support, installable
- **Responsive**: Mobile-first design, works on all devices

##### 3.2.2 Backend (API)
- **Framework**: Express.js
- **Runtime**: Node.js 18+
- **API Style**: RESTful
- **Security**: Helmet, CORS, Rate Limiting
- **Logging**: Morgan
- **Environment**: dotenv for configuration

##### 3.2.3 Database
- **Platform**: Supabase (PostgreSQL)
- **Tables**: Politicians, Trades
- **Security**: Row Level Security (RLS)
- **Performance**: Indexes on key columns
- **Search**: Full-text search with pg_trgm

##### 3.2.4 API Endpoints

**Politicians**
- `GET /api/politicians` - List all politicians (with pagination, filters)
- `GET /api/politicians/:id` - Get politician details
- `GET /api/politicians/:id/trades` - Get trades for a politician

**Trades**
- `GET /api/trades` - List all trades (with pagination, filters)
- `GET /api/trades/:id` - Get trade details

**Analytics**
- `GET /api/analytics/summary` - Overall statistics
- `GET /api/analytics/top-tickers` - Most traded stocks
- `GET /api/analytics/trades-by-month` - Monthly trade volume
- `GET /api/analytics/top-traders` - Most active traders

### 4. User Experience

#### 4.1 Navigation
- **Bottom Navigation Bar** (Mobile): Home, Politicians, Trades, Analytics, About
- **Top Navigation Bar** (Desktop): Horizontal menu with same sections
- **Header**: App branding and title

#### 4.2 Design Principles
- **Mobile-First**: Optimized for small screens, enhanced for larger
- **Clean and Modern**: Minimal clutter, focus on data
- **Accessible**: High contrast, readable fonts, semantic HTML
- **Fast**: Optimized loading, lazy loading, caching

#### 4.3 Color Scheme
- **Primary**: Blue (#2563eb) - Trust, government
- **Success**: Green (#10b981) - Buy transactions
- **Danger**: Red (#ef4444) - Sell transactions
- **Neutral**: Gray scale for text and backgrounds

### 5. Data Model

#### 5.1 Politicians Table
```
- id: UUID (Primary Key)
- name: Text
- party: Text (Democrat, Republican, Independent)
- chamber: Text (Senate, House)
- state: Text (2-letter code)
- photo_url: Text (optional)
- bio: Text (optional)
- website_url: Text (optional)
- created_at: Timestamp
- updated_at: Timestamp
```

#### 5.2 Trades Table
```
- id: UUID (Primary Key)
- politician_id: UUID (Foreign Key)
- ticker: Text
- transaction_type: Text (Buy, Sell, Exchange)
- transaction_date: Date
- amount_min: Numeric
- amount_max: Numeric
- disclosure_date: Date
- asset_description: Text (optional)
- source_url: Text (optional)
- created_at: Timestamp
```

### 6. Future Enhancements

#### 6.1 Phase 2 Features
- **Email Alerts**: Notify users of new trades by specific politicians
- **Watchlists**: Save favorite politicians or tickers
- **Advanced Analytics**: Correlation analysis, sector trends
- **Export Data**: Download trades as CSV/JSON
- **API Access**: Public API for developers

#### 6.2 Phase 3 Features
- **Historical Data**: Import years of historical disclosures
- **Automated Scraping**: Auto-fetch new disclosures
- **Social Features**: Comments, discussions, sharing
- **Mobile Apps**: Native iOS and Android apps
- **Advanced Visualizations**: Network graphs, heat maps

### 7. Constraints and Assumptions

#### 7.1 Constraints
- Data is limited to what's legally disclosed
- Trade amounts are reported in ranges, not exact values
- Disclosure timing varies (30-45 days after trade)
- Manual data entry required initially

#### 7.2 Assumptions
- Users have internet connectivity
- Users understand basic stock market concepts
- Official disclosure sources remain accessible
- Legal framework for disclosures remains stable

### 8. Risks and Mitigation

#### 8.1 Risks
- **Data Accuracy**: Errors in manual data entry
- **Legal Issues**: Misinterpretation of disclosure requirements
- **Scalability**: High traffic during news events
- **Data Freshness**: Delays in obtaining new disclosures

#### 8.2 Mitigation Strategies
- Implement data validation and verification processes
- Include clear disclaimers and source citations
- Use scalable infrastructure (Supabase, CDN)
- Automate data collection where possible

### 9. Success Criteria

#### 9.1 Launch Criteria
- ✅ All MVP features implemented
- ✅ Mobile-responsive design
- ✅ PWA capabilities enabled
- ✅ Database populated with sample data
- ✅ API fully functional
- ✅ Documentation complete

#### 9.2 Post-Launch Metrics
- 1,000+ unique visitors in first month
- 60%+ mobile usage
- Average session duration > 2 minutes
- Bounce rate < 50%
- 90%+ uptime

### 10. Timeline

#### 10.1 Development Phases
- **Phase 1 (MVP)**: Weeks 1-4
  - Week 1: Project setup, database design
  - Week 2: API development
  - Week 3: Frontend development
  - Week 4: Testing, deployment, documentation

- **Phase 2 (Enhancements)**: Weeks 5-8
  - Advanced features, user feedback integration

- **Phase 3 (Scale)**: Weeks 9-12
  - Performance optimization, additional features

### 11. Appendix

#### 11.1 References
- Senate Financial Disclosure: https://efdsearch.senate.gov/
- House Periodic Transaction Reports: https://disclosures-clerk.house.gov/
- STOCK Act: https://www.congress.gov/bill/112th-congress/senate-bill/2038

#### 11.2 Glossary
- **PTR**: Periodic Transaction Report
- **STOCK Act**: Stop Trading on Congressional Knowledge Act
- **Disclosure**: Required financial report filed by officials
- **Ticker**: Stock symbol (e.g., AAPL for Apple)
