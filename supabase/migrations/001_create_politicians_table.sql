-- Create politicians table
CREATE TABLE IF NOT EXISTS politicians (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    party TEXT NOT NULL CHECK (party IN ('Democrat', 'Republican', 'Independent')),
    chamber TEXT NOT NULL CHECK (chamber IN ('Senate', 'House')),
    state TEXT NOT NULL CHECK (length(state) = 2),
    photo_url TEXT,
    bio TEXT,
    website_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for politicians table
CREATE TRIGGER update_politicians_updated_at 
    BEFORE UPDATE ON politicians
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Add comments
COMMENT ON TABLE politicians IS 'Stores information about elected officials';
COMMENT ON COLUMN politicians.party IS 'Political party affiliation';
COMMENT ON COLUMN politicians.chamber IS 'Legislative chamber (Senate or House)';
COMMENT ON COLUMN politicians.state IS 'Two-letter state code';
