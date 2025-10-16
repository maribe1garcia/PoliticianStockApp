Epic: Explore Politician Trades

Task: Build Politician Profile View (Frontend)

User Story: As a Citizen, I want to view a politician’s trading history so I can understand their financial activity over time.

Acceptance Criteria: Profile shows name, role, recent trades, and total portfolio value; data fetched via GET /politicians/:id.

Task: Create GET /politicians and GET /politicians/:id API Endpoints

Acceptance Criteria:

GET /politicians returns a list of all tracked politicians with name, party, and last trade date.

GET /politicians/:id returns trade history, net worth trend, and legislative flags.

Returns 200 OK for success; 500 for errors.

Task: Build Trade Timeline Chart (Frontend)

User Story: As a Researcher, I want to visualize a politician’s trades over time so I can identify trends.

Acceptance Criteria: Displays trades on a line or bar chart with hover details (ticker, date, buy/sell, amount).

Task: Create GET /trades?politician_id=X API Endpoint

Acceptance Criteria: Returns all trades for a given politician with ticker, amount, type, date, and link to disclosure form.

Epic: View Analytics & Trends

Task: Build Analytics Dashboard (Frontend)

User Story: As a Citizen, I want to see trade patterns across politicians to identify trends and outliers.

Acceptance Criteria: Displays charts for most active traders, sectors traded, and performance comparisons.

Task: Create GET /analytics/trends API Endpoint

Acceptance Criteria: Returns aggregate trade data grouped by date, sector, and politician; status 200 for success.

Task: Implement Legislative Alignment Feature (Frontend)

User Story: As a Citizen, I want to see which trades align with recent legislative actions.

Acceptance Criteria: Trades are flagged when they occur within 30 days of a related bill; data from /analytics/flags.

Task: Create GET /analytics/flags API Endpoint

Acceptance Criteria: Returns flagged trades with metadata: bill ID, trade date, and conflict confidence score.

Epic: Comparison & Discovery

Task: Build Compare Politicians View (Frontend)

User Story: As an Investor, I want to compare multiple politicians’ trades side-by-side to find overlaps.

Acceptance Criteria: Comparison table or chart shows overlapping tickers, trade frequency, and performance metrics.

Task: Create GET /compare?ids=1,2,3 API Endpoint

Acceptance Criteria: Returns a structured dataset comparing selected politicians’ trades and performance.

Task: Implement “Most Active Traders” List (Frontend)

User Story: As a Citizen, I want to see the politicians who trade most frequently.

Acceptance Criteria: List sorted by trade count over the last 30 days; links to each profile.

Task: Create GET /analytics/active API Endpoint

Acceptance Criteria: Returns list of politicians ranked by trade volume and value; supports time filters.

Epic: Community Engagement

Task: Build Comment & Discussion Section (Frontend)

User Story: As a Community Member, I want to comment on politicians’ trades and discuss with others.

Acceptance Criteria: Users can post comments, reply to others, and sort by most recent or most liked.

Task: Create POST /comments and GET /comments?trade_id=X API Endpoints

Acceptance Criteria:

POST saves comment linked to user and trade.

GET returns thread of comments for a trade.

Authentication required for posting.

Task: Build Share to Social (Frontend)

User Story: As a User, I want to share graphs or flagged trades on social media.

Acceptance Criteria: Generates shareable links or images for X (Twitter) or LinkedIn posts.

Epic: Notifications & Alerts

Task: Alerts Settings UI (Frontend)

User Story: As an Activist, I want to receive alerts when a politician makes a large trade.

Acceptance Criteria: Toggle for alert types; thresholds configurable by trade size or ticker.

Task: Create POST /alerts and GET /alerts?user_id=X API Endpoints

Acceptance Criteria:

POST creates alert preferences for a user.

GET returns configured alert rules.

Alerts triggered when trade exceeds threshold.

Task: Create Notification Service (Backend)

Acceptance Criteria:

Monitors new trades.

Sends push or email notifications for configured alerts.

Supports throttling and batching.

Epic: Authentication & Access

Task: Authentication (Frontend + API)

User Story: As a User, I want to sign up and log in securely.

Acceptance Criteria: Auth flow with email/password and JWT token; tokens required for posting or alerts.

Task: Create POST /auth/signup and POST /auth/login API Endpoints

Acceptance Criteria:

Signup creates user in Supabase (or similar) and returns token.

Login validates credentials and returns token.

Protected routes require valid token.

Shared / Supporting

Task: Set Up Database Schema

Acceptance Criteria: Tables for users, politicians, trades, comments, alerts, and analytics summaries created and indexed.

Task: Implement Role-Based Access Control (RBAC)

Acceptance Criteria: Admins can moderate comments and flag trades; users can only manage their own alerts or comments.

Task: Set Up CI/CD Pipeline

Acceptance Criteria: Automatic testing, linting, and deployment to staging on pull request merge.