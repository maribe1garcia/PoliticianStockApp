-- Seed sample trades data
-- This is sample data for development/testing purposes
-- Note: Replace politician IDs with actual UUIDs from your database

-- First, let's create a temporary function to get politician IDs by name
DO $$
DECLARE
    pelosi_id UUID;
    mccarthy_id UUID;
    schumer_id UUID;
BEGIN
    -- Get politician IDs
    SELECT id INTO pelosi_id FROM politicians WHERE name = 'Nancy Pelosi' LIMIT 1;
    SELECT id INTO mccarthy_id FROM politicians WHERE name = 'Kevin McCarthy' LIMIT 1;
    SELECT id INTO schumer_id FROM politicians WHERE name = 'Chuck Schumer' LIMIT 1;

    -- Insert sample trades for Nancy Pelosi
    IF pelosi_id IS NOT NULL THEN
        INSERT INTO trades (politician_id, ticker, transaction_type, transaction_date, amount_min, amount_max, disclosure_date, asset_description) VALUES
            (pelosi_id, 'AAPL', 'Buy', '2024-01-15', 15000, 50000, '2024-01-30', 'Apple Inc. - Common Stock'),
            (pelosi_id, 'MSFT', 'Buy', '2024-01-10', 50000, 100000, '2024-01-25', 'Microsoft Corporation - Common Stock'),
            (pelosi_id, 'GOOGL', 'Sell', '2024-01-05', 100000, 250000, '2024-01-20', 'Alphabet Inc. - Class A Common Stock'),
            (pelosi_id, 'NVDA', 'Buy', '2023-12-20', 15000, 50000, '2024-01-10', 'NVIDIA Corporation - Common Stock'),
            (pelosi_id, 'TSLA', 'Sell', '2023-12-15', 50000, 100000, '2024-01-05', 'Tesla Inc. - Common Stock');
    END IF;

    -- Insert sample trades for Kevin McCarthy
    IF mccarthy_id IS NOT NULL THEN
        INSERT INTO trades (politician_id, ticker, transaction_type, transaction_date, amount_min, amount_max, disclosure_date, asset_description) VALUES
            (mccarthy_id, 'XOM', 'Buy', '2024-01-12', 15000, 50000, '2024-01-27', 'Exxon Mobil Corporation - Common Stock'),
            (mccarthy_id, 'CVX', 'Buy', '2024-01-08', 15000, 50000, '2024-01-23', 'Chevron Corporation - Common Stock'),
            (mccarthy_id, 'BA', 'Sell', '2023-12-28', 50000, 100000, '2024-01-15', 'Boeing Company - Common Stock'),
            (mccarthy_id, 'LMT', 'Buy', '2023-12-18', 15000, 50000, '2024-01-08', 'Lockheed Martin Corporation - Common Stock');
    END IF;

    -- Insert sample trades for Chuck Schumer
    IF schumer_id IS NOT NULL THEN
        INSERT INTO trades (politician_id, ticker, transaction_type, transaction_date, amount_min, amount_max, disclosure_date, asset_description) VALUES
            (schumer_id, 'JPM', 'Buy', '2024-01-18', 15000, 50000, '2024-02-02', 'JPMorgan Chase & Co. - Common Stock'),
            (schumer_id, 'BAC', 'Buy', '2024-01-14', 15000, 50000, '2024-01-29', 'Bank of America Corporation - Common Stock'),
            (schumer_id, 'GS', 'Sell', '2024-01-09', 50000, 100000, '2024-01-24', 'Goldman Sachs Group Inc. - Common Stock'),
            (schumer_id, 'V', 'Buy', '2023-12-22', 15000, 50000, '2024-01-12', 'Visa Inc. - Class A Common Stock');
    END IF;
END $$;
