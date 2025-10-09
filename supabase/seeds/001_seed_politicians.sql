-- Seed sample politicians data
-- This is sample data for development/testing purposes

INSERT INTO politicians (name, party, chamber, state) VALUES
    ('Nancy Pelosi', 'Democrat', 'House', 'CA'),
    ('Kevin McCarthy', 'Republican', 'House', 'CA'),
    ('Chuck Schumer', 'Democrat', 'Senate', 'NY'),
    ('Mitch McConnell', 'Republican', 'Senate', 'KY'),
    ('Alexandria Ocasio-Cortez', 'Democrat', 'House', 'NY'),
    ('Marjorie Taylor Greene', 'Republican', 'House', 'GA'),
    ('Bernie Sanders', 'Independent', 'Senate', 'VT'),
    ('Ted Cruz', 'Republican', 'Senate', 'TX'),
    ('Elizabeth Warren', 'Democrat', 'Senate', 'MA'),
    ('Josh Hawley', 'Republican', 'Senate', 'MO'),
    ('Katie Porter', 'Democrat', 'House', 'CA'),
    ('Dan Crenshaw', 'Republican', 'House', 'TX'),
    ('Ro Khanna', 'Democrat', 'House', 'CA'),
    ('Matt Gaetz', 'Republican', 'House', 'FL'),
    ('Cory Booker', 'Democrat', 'Senate', 'NJ')
ON CONFLICT DO NOTHING;
