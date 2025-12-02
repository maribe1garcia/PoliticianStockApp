-- Seed Politicians
insert into public.politician (politician_full_name, party, chamber, state)
values
  ('Jane Doe', 'D', 'Senate', 'CA'),
  ('John Smith', 'R', 'House', 'TX'),
  ('Alex Johnson', 'I', 'House', 'NY');

-- Seed Stocks
insert into public.stock (ticker_symbol, company_name, sector)
values
  ('AAPL', 'Apple Inc.', 'Technology'),
  ('MSFT', 'Microsoft Corporation', 'Technology'),
  ('XOM', 'Exxon Mobil Corp', 'Energy');

-- Seed Data Sources
insert into public.data_source (source_name, source_type, source_url, description)
values
  ('House STOCK Act Feed', 'API', 'https://example.com/house', 'House disclosures'),
  ('Senate Financial Disclosures', 'CSV', 'https://example.com/senate', 'Senate disclosures');

-- Seed Trades
insert into public.trade (
  politician_id,
  stock_id,
  data_source_id,
  transaction_type,
  amount_range,
  transaction_date,
  reported_date
)
values
(
  (select politician_id from public.politician where politician_full_name='Jane Doe'),
  (select stock_id from public.stock where ticker_symbol='AAPL'),
  (select data_source_id from public.data_source where source_name='House STOCK Act Feed'),
  'buy',
  '$15,001 - $50,000',
  '2025-01-15',
  '2025-01-20'
),
(
  (select politician_id from public.politician where politician_full_name='John Smith'),
  (select stock_id from public.stock where ticker_symbol='MSFT'),
  (select data_source_id from public.data_source where source_name='House STOCK Act Feed'),
  'sell',
  '$1,001 - $15,000',
  '2025-02-05',
  '2025-02-10'
);
