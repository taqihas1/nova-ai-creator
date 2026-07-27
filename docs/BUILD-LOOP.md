# Nova Continuous Product Loop

## Operating loop

Idea → Design → Build → Automated checks → GitHub preview → Cloudflare preview → Founder review → Revise → Production → Measure → Repeat

## Release rules

- Main is always releasable.
- Features remain small and reversible.
- A visible user benefit ships with every release.
- No feature is considered complete without responsive behaviour and a basic failure state.
- Each deployment receives a short changelog entry.

## Branch naming

- `feature/<name>`
- `fix/<name>`
- `experiment/<name>`

## Definition of done

- Works on desktop and mobile
- TypeScript passes
- Production build passes
- No secrets committed
- User-facing value is clear
- Rollback path exists
