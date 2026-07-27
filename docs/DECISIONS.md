# Product Decisions

## Decision 001 — Everything belongs to a Project

**Status:** Adopted

Projects are Nova’s primary context boundary. Workspaces are intentionally excluded to keep the mental model simple.

## Decision 002 — Nova is an AI company, not a toolbox

**Status:** Adopted

The product is organized around coordinated executive teams that own outcomes, delegate tasks, and return finished deliverables.

## Decision 003 — Multi-LLM through one gateway

**Status:** Adopted

Product features and executives never call providers directly. All model use passes through Nova’s provider-neutral model gateway.
