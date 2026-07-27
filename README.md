# Nova AI Creator

**Your AI executive team for research, creativity, marketing and growth.**

This repository contains the first deployable Nova product foundation. The initial experience focuses on the **Nova Daily Executive Intelligence Brief**, a personalised, actionable summary of trends, tools, opportunities, projects and learning.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy to Cloudflare Workers

```bash
npm install
npm run cf:deploy
```

Authenticate Wrangler when prompted. For continuous deployment, connect the GitHub repository to Cloudflare Workers Builds and use:

- Build command: `npm run cf:build`
- Deploy command: `npx wrangler deploy`

## Release workflow

1. Create a small `feature/*` branch.
2. Build one releasable increment.
3. Run `npm run build`.
4. Open a pull request.
5. Deploy a Cloudflare preview.
6. Review and test.
7. Merge to `main` for production.

## First product slice

- Responsive Nova dashboard
- Nova Daily Executive Intelligence Brief hero
- Overnight trend, tool and opportunity cards
- AI executive team panel
- Daily learning card
- Cloudflare/OpenNext configuration
- GitHub CI workflow

See `docs/BUILD-LOOP.md` and `docs/ROADMAP.md`.
