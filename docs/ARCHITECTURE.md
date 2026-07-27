# Nova Architecture

## Project boundary

Every campaign, conversation, task, deliverable, asset, executive run and model run is scoped by `projectId`.

## Model Gateway

Application features do not call AI providers directly.

```text
Feature → Executive Agent → Model Gateway → Router → Provider Adapter
```

Initial adapter targets:

- OpenAI
- Anthropic
- Google Gemini
- OpenRouter

The gateway provides one internal request/response contract, routing, provider health checks, fallback handling, latency capture and cost estimates.

## Current v0.2 foundation

The repository includes provider-neutral types, a provider registry, a baseline router and a gateway. Real provider adapters and encrypted credential storage will be introduced after authentication and server-side persistence are in place.
