# Rick and Morty Explorer 🛸

A responsive web app for browsing characters, episodes, and locations from the *Rick and Morty* universe, powered by the [Rick and Morty API](https://rickandmortyapi.com/).

## ✨ Features

- **Characters** — Browse all characters with filters by name, status, species, and gender
- **Episodes** — Explore every episode with search by name or episode code, plus a detail modal
- **Locations** — Discover locations with filters by name, type, and dimension, plus a detail modal
- **Featured Character** — Random featured character spotlight on the home page
- **Pagination** — Full pagination across all listing pages
- **404 Page** — Custom "lost in the multiverse" error page
- **Responsive Design** — Works on desktop, tablet, and mobile

## 🧱 Tech Stack

| Category | Technology |
|----------|------------|
| Framework | [React 19](https://react.dev/) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Bundler | [Vite 7](https://vite.dev/) |
| Routing | [React Router 7](https://reactrouter.com/) |
| Data Fetching | [TanStack Query](https://tanstack.com/query) + custom hooks |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/) + [Sass](https://sass-lang.com/) |
| Linting | [ESLint](https://eslint.org/) with TypeScript & React plugins |
| API | [Rick and Morty API](https://rickandmortyapi.com/) (proxied via Vite) |

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- npm (ships with Node)

### Installation

```bash
git clone https://github.com/torgeronimo/rick-and-morty-explorer.git
cd rick-and-morty-explorer
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173` with HMR (hot module replacement).

### Production Build

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/          # Layout, NavBar, Footer
│   ├── ui/              # Pagination, Spinner
│   ├── CharacterCard.tsx
│   ├── CharacterList.tsx
│   ├── EpisodeCard.tsx
│   ├── EpisodeList.tsx
│   ├── EpisodeModal.tsx
│   ├── LocationCard.tsx
│   ├── LocationList.tsx
│   └── LocationModal.tsx
├── hooks/               # useCharacters, useEpisode, useLocation
├── pages/
│   ├── Home.tsx
│   ├── Characters.tsx
│   ├── Episodes.tsx
│   ├── Locations.tsx
│   ├── NotFound.tsx
│   └── sections/        # Hero, FeaturedCharacter, About
├── services/
│   └── api.ts           # API service layer
├── styles/              # Global styles (Tailwind + Sass)
├── types.ts             # Shared TypeScript interfaces
└── router.tsx           # Route definitions
```

## 🔌 API Proxy

API requests are proxied through Vite's dev server (`/api` → `https://rickandmortyapi.com/api`) to avoid CORS issues during development. No API key is required.


Built with ☕ and a love for dimension C-137.