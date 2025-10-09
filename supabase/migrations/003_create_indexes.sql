-- Create indexes for better query performance

-- Politicians table indexes
CREATE INDEX IF NOT EXISTS idx_politicians_name ON politicians(name);
CREATE INDEX IF NOT EXISTS idx_politicians_party ON politicians(party);
CREATE INDEX IF NOT EXISTS idx_politicians_chamber ON politicians(chamber);
CREATE INDEX IF NOT EXISTS idx_politicians_state ON politicians(state);

-- Trades table indexes
CREATE INDEX IF NOT EXISTS idx_trades_politician_id ON trades(politician_id);
CREATE INDEX IF NOT EXISTS idx_trades_ticker ON trades(ticker);
CREATE INDEX IF NOT EXISTS idx_trades_transaction_type ON trades(transaction_type);
CREATE INDEX IF NOT EXISTS idx_trades_transaction_date ON trades(transaction_date DESC);
CREATE INDEX IF NOT EXISTS idx_trades_disclosure_date ON trades(disclosure_date DESC);

-- Composite indexes for common query patterns
CREATE INDEX IF NOT EXISTS idx_trades_politician_date ON trades(politician_id, transaction_date DESC);
CREATE INDEX IF NOT EXISTS idx_trades_ticker_date ON trades(ticker, transaction_date DESC);

-- Full-text search index for politician names
CREATE INDEX IF NOT EXISTS idx_politicians_name_trgm ON politicians USING gin(name gin_trgm_ops);

-- Enable pg_trgm extension for fuzzy text search
CREATE EXTENSION IF NOT EXISTS pg_trgm;
