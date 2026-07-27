import type { NovaProviderAdapter } from "./types";

const providers = new Map<string, NovaProviderAdapter>();

export function registerProvider(provider: NovaProviderAdapter) {
  providers.set(provider.id, provider);
}

export function getProvider(id: string) {
  return providers.get(id);
}

export function listProviders() {
  return Array.from(providers.values());
}
