-- Summary Statistics View
create or replace view public.v_summary_statistics as
select
  (select count(*) from public.trade) as total_trades,
  (select count(*) from public.politician) as total_politicians;

-- Trades by Month
create or replace view public.v_trades_by_month as
select
  date_trunc('month', transaction_date)::date as month,
  count(*) as trade_count
from public.trade
group by month
order by month;

-- Buy/Sell Ratio
create or replace view public.v_buy_sell_ratio as
select transaction_type, count(*) 
from public.trade
group by transaction_type;

-- Top Tickers
create or replace view public.v_top_traded_tickers as
select s.ticker_symbol, count(*) as trade_count
from public.trade t
join public.stock s on t.stock_id = s.stock_id
group by s.ticker_symbol
order by trade_count desc;
