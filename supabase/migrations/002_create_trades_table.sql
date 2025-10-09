-- Create trades table
CREATE TABLE IF NOT EXISTS trades (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    politician_id UUID NOT NULL REFERENCES politicians(id) ON DELETE CASCADE,
    ticker TEXT NOT NULL,
    transaction_type TEXT NOT NULL CHECK (transaction_type IN ('Buy', 'Sell', 'Exchange')),
    transaction_date DATE NOT NULL,
    amount_min NUMERIC(15, 2),
    amount_max NUMERIC(15, 2),
    disclosure_date DATE NOT NULL,
    asset_description TEXT,
    source_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add comments
COMMENT ON TABLE trades IS 'Stores stock trade transactions by politicians';
COMMENT ON COLUMN trades.politician_id IS 'Foreign key to politicians table';
COMMENT ON COLUMN trades.ticker IS 'Stock ticker symbol (e.g., AAPL, TSLA)';
COMMENT ON COLUMN trades.transaction_type IS 'Type of transaction (Buy, Sell, Exchange)';
COMMENT ON COLUMN trades.transaction_date IS 'Date when the trade occurred';
COMMENT ON COLUMN trades.amount_min IS 'Minimum amount of the trade range';
COMMENT ON COLUMN trades.amount_max IS 'Maximum amount of the trade range';
COMMENT ON COLUMN trades.disclosure_date IS 'Date when the trade was disclosed';
COMMENT ON COLUMN trades.source_url IS 'URL to the original disclosure document';
