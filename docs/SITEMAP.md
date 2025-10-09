# Site Map
## Politician Stock Tracker

### Application Structure

```
Politician Stock Tracker
│
├── Home (/)
│   ├── Summary Statistics
│   │   ├── Total Trades
│   │   ├── Politicians Tracked
│   │   └── Total Volume
│   ├── Data Information Banner
│   └── Quick Links
│       ├── Browse Politicians
│       ├── Recent Trades
│       ├── Analytics
│       └── About
│
├── Politicians (/politicians)
│   ├── Search Bar
│   ├── Filter Options
│   │   ├── Party
│   │   ├── Chamber
│   │   └── State
│   ├── Politicians List
│   │   └── Politician Card
│   │       ├── Name
│   │       ├── Party Badge
│   │       ├── Chamber & State
│   │       └── Trade Count
│   │
│   └── Politician Detail (/politicians/:id)
│       ├── Profile Header
│       │   ├── Photo/Avatar
│       │   ├── Name
│       │   ├── Party Badge
│       │   ├── Chamber Badge
│       │   └── State Badge
│       ├── Statistics
│       │   ├── Total Trades
│       │   └── Total Volume
│       └── Recent Trades List
│           └── Trade Card
│               ├── Ticker
│               ├── Type (Buy/Sell)
│               ├── Amount Range
│               └── Date
│
├── Trades (/trades)
│   ├── Filter Buttons
│   │   ├── All
│   │   ├── Buys
│   │   └── Sells
│   └── Trades List
│       └── Trade Card
│           ├── Ticker Symbol
│           ├── Transaction Type
│           ├── Politician Name
│           ├── Amount Range
│           └── Transaction Date
│
├── Analytics (/analytics)
│   ├── Trades by Month Chart
│   │   └── Bar Chart (6 months)
│   ├── Buy vs Sell Chart
│   │   └── Pie Chart
│   ├── Top Traded Tickers
│   │   └── Ranked List (Top 5)
│   └── Key Insights
│       └── Bullet Points
│
├── About (/about)
│   ├── Mission Statement
│   ├── Data Sources
│   │   ├── Senate Disclosures
│   │   └── House Reports
│   ├── Technology Stack
│   │   ├── Frontend
│   │   ├── Backend
│   │   └── Database
│   ├── Disclaimer
│   └── Links
│       └── GitHub Repository
│
└── Navigation
    ├── Header (Top)
    │   ├── Logo/Icon
    │   └── App Title
    └── Bottom Navigation (Mobile) / Top Navigation (Desktop)
        ├── Home
        ├── Politicians
        ├── Trades
        ├── Analytics
        └── About
```

### Page Hierarchy

#### Level 1: Main Navigation
1. **Home** - Landing page with overview
2. **Politicians** - Directory of elected officials
3. **Trades** - Feed of all transactions
4. **Analytics** - Data visualizations and insights
5. **About** - Information about the project

#### Level 2: Detail Pages
1. **Politician Detail** - Individual politician profile with trades
   - Accessed from: Politicians list, Trade cards

#### Level 3: External Links
1. **GitHub Repository** - Source code
   - Accessed from: About page

### User Flows

#### Flow 1: Browse Politicians and View Trades
```
Home → Politicians → Search/Filter → Select Politician → View Profile → See Trades
```

#### Flow 2: Explore Recent Trades
```
Home → Trades → Filter by Type → View Trade Details → Click Politician Name → View Profile
```

#### Flow 3: Analyze Trading Patterns
```
Home → Analytics → View Charts → Identify Trends → Navigate to Politicians/Trades
```

#### Flow 4: Learn About the Project
```
Home → About → Read Mission → Check Data Sources → Visit GitHub
```

#### Flow 5: Quick Access from Home
```
Home → Click Quick Link Card → Navigate to Section
```

### Navigation Patterns

#### Mobile Navigation
- **Bottom Tab Bar**: Fixed at bottom of screen
- **5 Tabs**: Home, Politicians, Trades, Analytics, About
- **Active State**: Highlighted tab with color change
- **Icons**: Each tab has a descriptive icon

#### Desktop Navigation
- **Top Horizontal Menu**: Below header
- **Same 5 Sections**: Consistent with mobile
- **Hover States**: Visual feedback on hover
- **Active State**: Underline or background highlight

### Information Architecture Principles

1. **Flat Hierarchy**: Maximum 2-3 levels deep
2. **Clear Labels**: Self-explanatory navigation items
3. **Consistent Layout**: Similar pages use same structure
4. **Breadcrumbs**: Back navigation on detail pages
5. **Cross-Linking**: Related content is linked

### Content Organization

#### Home Page
- **Purpose**: Overview and entry point
- **Content**: Statistics, information, navigation
- **Actions**: Navigate to main sections

#### Politicians Page
- **Purpose**: Browse and search officials
- **Content**: Searchable, filterable list
- **Actions**: View profiles, search, filter

#### Politician Detail Page
- **Purpose**: Deep dive into individual official
- **Content**: Profile, statistics, trade history
- **Actions**: View trades, navigate back

#### Trades Page
- **Purpose**: Browse all transactions
- **Content**: Filterable feed of trades
- **Actions**: Filter by type, view details

#### Analytics Page
- **Purpose**: Understand patterns and trends
- **Content**: Charts, graphs, insights
- **Actions**: Explore data visually

#### About Page
- **Purpose**: Project information and transparency
- **Content**: Mission, sources, tech stack
- **Actions**: Learn more, visit GitHub

### Responsive Behavior

#### Mobile (< 768px)
- Bottom navigation bar
- Single column layouts
- Stacked cards
- Simplified charts

#### Tablet (768px - 1024px)
- Bottom or top navigation
- 2-column grids where appropriate
- Larger touch targets

#### Desktop (> 1024px)
- Top navigation bar
- Multi-column layouts
- Enhanced charts and visualizations
- Hover interactions

### Accessibility Considerations

1. **Semantic HTML**: Proper heading hierarchy
2. **ARIA Labels**: Screen reader support
3. **Keyboard Navigation**: Tab order, focus states
4. **Color Contrast**: WCAG AA compliance
5. **Alt Text**: Images and icons described
6. **Focus Indicators**: Visible focus states

### Future Sitemap Additions

#### Phase 2
- User Accounts (/login, /register, /profile)
- Watchlists (/watchlists)
- Alerts (/alerts)
- Settings (/settings)

#### Phase 3
- Advanced Search (/search)
- Comparisons (/compare)
- Reports (/reports)
- API Documentation (/api-docs)
