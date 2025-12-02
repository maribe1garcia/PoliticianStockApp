-- Enable uuid generation (usually on by default in Supabase)
create extension if not exists "pgcrypto";

-- =========================
-- POLITICIAN TABLE
-- =========================
create table if not exists public.politician (
  politician_id uuid primary key default gen_random_uuid(),
  politician_full_name text not null,
  party text,
  chamber text,
  state text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- =========================
-- STOCK TABLE
-- =========================
create table if not exists public.stock (
  stock_id uuid primary key default gen_random_uuid(),
  ticker_symbol text not null unique,
  company_name text,
  sector text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- =========================
-- DATA_SOURCE TABLE
-- =========================
create table if not exists public.data_source (
  data_source_id uuid primary key default gen_random_uuid(),
  source_name text not null,
  source_type text,
  source_url text,
  description text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- =========================
-- TRADE TABLE
-- =========================
create table if not exists public.trade (
  trade_id uuid primary key default gen_random_uuid(),
  politician_id uuid not null references public.politician(politician_id) on delete cascade,
  stock_id uuid not null references public.stock(stock_id),
  data_source_id uuid not null references public.data_source(data_source_id),
  transaction_type text not null check (transaction_type in ('buy', 'sell')),
  amount_range text,
  transaction_date date not null,
  reported_date date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
