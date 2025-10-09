-- Enable Row Level Security
ALTER TABLE politicians ENABLE ROW LEVEL SECURITY;
ALTER TABLE trades ENABLE ROW LEVEL SECURITY;

-- Create policies for politicians table
-- Allow public read access
CREATE POLICY "Allow public read access to politicians"
    ON politicians
    FOR SELECT
    TO public
    USING (true);

-- Allow authenticated users to insert/update (for admin operations)
CREATE POLICY "Allow authenticated insert on politicians"
    ON politicians
    FOR INSERT
    TO authenticated
    WITH CHECK (true);

CREATE POLICY "Allow authenticated update on politicians"
    ON politicians
    FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- Create policies for trades table
-- Allow public read access
CREATE POLICY "Allow public read access to trades"
    ON trades
    FOR SELECT
    TO public
    USING (true);

-- Allow authenticated users to insert (for admin operations)
CREATE POLICY "Allow authenticated insert on trades"
    ON trades
    FOR INSERT
    TO authenticated
    WITH CHECK (true);

CREATE POLICY "Allow authenticated update on trades"
    ON trades
    FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- Add comments
COMMENT ON POLICY "Allow public read access to politicians" ON politicians IS 
    'Public can view all politician data';
COMMENT ON POLICY "Allow public read access to trades" ON trades IS 
    'Public can view all trade data';
