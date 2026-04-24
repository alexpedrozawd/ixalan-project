# Ixalan News

A fan site dedicated to Magic: The Gathering's **Ixalan** and **Rivals of Ixalan** blocks.  
Originally created in 2018 by [Alexandre Pedroza](https://github.com/alexpedrozawd), rebuilt with modern stack.

---

## Stack

| Layer     | Technology                                    |
|-----------|-----------------------------------------------|
| Frontend  | React 18 + TypeScript + Bootstrap 5 + React-Bootstrap |
| Backend   | Python 3.12 + FastAPI                         |
| Database  | Supabase (PostgreSQL)                         |
| Tests     | Vitest + React Testing Library (FE) · Pytest (BE) |
| Build     | Vite 5                                        |

---

## Prerequisites

- Node.js >= 20
- Python >= 3.12
- A [Supabase](https://supabase.com) project

---

## Getting started

### 1. Clone and configure environment

```bash
git clone https://github.com/alexpedrozawd/ixalan-project.git
cd ixalan-project
cp .env.example backend/.env
# Edit backend/.env with your Supabase credentials
```

### 2. Backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate        # Windows: .venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

API will be available at `http://localhost:8000`.  
Interactive docs: `http://localhost:8000/docs`

### 3. Frontend

```bash
cd frontend
npm install
npm run dev
```

App will be available at `http://localhost:5173`.

---

## Supabase schema

Run this SQL in your Supabase SQL editor to create the `articles` table:

```sql
create table articles (
  id          serial primary key,
  title       text        not null,
  description text        not null,
  image_url   text        not null,
  slug        text        not null unique,
  date        date        not null default current_date
);

-- Seed data
insert into articles (title, description, image_url, slug, date) values
  ('Rampaging Ferocidon Banned',
   'New banned and restricted update added Rampaging Ferocidon to Standard.',
   'https://api.scryfall.com/cards/xln/154?format=image&version=normal',
   'rampaging-ferocidon-banned',
   '2018-01-15'),
  ('River Sneak: Best Merfolk of Ixalan',
   'Dive deep into the Merfolk tribe and discover why River Sneak dominates.',
   'https://api.scryfall.com/cards/xln/67?format=image&version=normal',
   'river-sneak-best-merfolk',
   '2018-01-10'),
  ('Rivals of Ixalan — Full Spoiler',
   'The complete card gallery for Rivals of Ixalan is here.',
   'https://api.scryfall.com/cards/rix/90?format=image&version=normal',
   'rivals-of-ixalan-full-spoiler',
   '2018-01-05'),
  ('Top 5 Dinosaurs in Standard',
   'From Ripjaw Raptor to Ghalta, which dinosaurs dominate Standard?',
   'https://api.scryfall.com/cards/xln/203?format=image&version=normal',
   'top-5-dinosaurs-standard',
   '2018-01-02');
```

---

## Running tests

### Frontend

```bash
cd frontend
npm run test              # single run
npm run test:coverage     # with coverage report
```

### Backend

```bash
cd backend
source .venv/bin/activate
pytest app/tests/ -v --cov=app --cov-report=term-missing
```

---

## Project structure

```
ixalan-project/
├── frontend/
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   │   ├── Navbar/
│   │   │   ├── HeroSection/
│   │   │   ├── NewsCard/
│   │   │   ├── NewsSection/
│   │   │   ├── AboutSection/
│   │   │   └── Footer/
│   │   ├── pages/
│   │   │   └── Home/
│   │   ├── assets/styles/    # Global CSS variables
│   │   ├── types/            # Shared TypeScript interfaces
│   │   └── tests/            # Vitest test suites
│   ├── index.html
│   ├── vite.config.ts
│   └── package.json
├── backend/
│   ├── app/
│   │   ├── routers/          # FastAPI route handlers
│   │   ├── models/           # Domain dataclasses
│   │   ├── schemas/          # Pydantic request/response schemas
│   │   ├── services/         # Business logic
│   │   └── tests/            # Pytest test suites
│   ├── main.py
│   └── requirements.txt
├── .env.example
└── README.md
```

---

## Upcoming pages

- **Articles** — full list of news articles with pagination
- **Card Database** — searchable card database for Ixalan and Rivals of Ixalan
- **Contact** — contact form

---

## Credits

- Card images: [Scryfall](https://scryfall.com) — Wizards of the Coast
- Magic: The Gathering is a trademark of Wizards of the Coast LLC
- This is a fan project and is not affiliated with Wizards of the Coast
