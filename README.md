## GDG EPITA - Site web

Site marketing pour le Google Developer Group EPITA, construit avec Next.js (App Router), Tailwind et shadcn/ui.

## Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS + shadcn/ui

## Architecture

Objectif: un front rapide et un back evolutif. Le contenu est isole dans `content/`, expose par des endpoints API, et consomme par les pages server-side.

```
gdg/
├── app/
│   ├── api/                     # API routes (futur backend)
│   │   ├── events/route.ts
│   │   └── newsletter/route.ts
│   ├── events/                  # Pages events
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── layout.tsx
│   └── page.tsx                 # Home
├── content/
│   └── events.json              # Donnees events
├── components/
│   ├── ui/                      # shadcn/ui
│   ├── navbar.tsx
│   ├── footer.tsx
│   └── event-card.tsx
├── lib/
│   └── data/
│       └── events.ts            # Lecture content
└── types/
    └── event.ts
```

## Flux de donnees

- `content/events.json` = source de verite.
- `lib/data/events.ts` lit les fichiers et fournit `getEvents()`.
- `app/api/events` expose les events en JSON.
- `app/events` et la home consomment la meme source de donnees.

## Backend (next step)

Cette architecture est prete pour brancher un vrai backend:

- Remplacer `content/events.json` par une base (PostgreSQL, Mongo, etc.).
- Remplacer `lib/data/events.ts` par une couche d'acces DB.
- Garder `app/api/*` comme facade API (ou basculer vers un backend separe).
- Ajouter auth et admin dashboard si besoin.

## Demarrer

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)
