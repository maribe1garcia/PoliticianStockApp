# Supabase Database Setup

This directory contains SQL migrations and seed data for the Politician Stock Tracker database.

## Setup Instructions

1. **Create a Supabase Project**
   - Go to https://supabase.com
   - Create a new project
   - Note your project URL and API keys

2. **Run Migrations**
   - Open the Supabase SQL Editor
   - Run the migration files in order:
     1. `migrations/001_create_politicians_table.sql`
     2. `migrations/002_create_trades_table.sql`
     3. `migrations/003_create_indexes.sql`
     4. `migrations/004_enable_rls.sql`

3. **Seed Data (Optional)**
   - Run `seeds/001_seed_politicians.sql`
   - Run `seeds/002_seed_trades.sql`

## Database Schema

### Politicians Table
- `id`: UUID (Primary Key)
- `name`: Text (Required)
- `party`: Text (Democrat, Republican, Independent)
- `chamber`: Text (Senate, House)
- `state`: Text (2-letter state code)
- `created_at`: Timestamp
- `updated_at`: Timestamp

### Trades Table
- `id`: UUID (Primary Key)
- `politician_id`: UUID (Foreign Key)
- `ticker`: Text (Stock ticker symbol)
- `transaction_type`: Text (Buy, Sell)
- `transaction_date`: Date
- `amount_min`: Numeric (Minimum trade amount)
- `amount_max`: Numeric (Maximum trade amount)
- `disclosure_date`: Date
- `created_at`: Timestamp

## Row Level Security (RLS)

RLS is enabled on all tables with public read access. Write access is restricted to authenticated service roles.
