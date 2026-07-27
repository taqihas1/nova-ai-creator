import { getProvider, listProviders } from "./registry";
import type { NovaModelRequest, NovaProviderAdapter } from "./types";

export async function routeModelRequest(request: NovaModelRequest): Promise<NovaProviderAdapter> {
  if (request.preferredProvider) {
    const preferred = getProvider(request.preferredProvider);
    if (preferred && (await preferred.healthCheck())) return preferred;
  }

  const healthyProviders: NovaProviderAdapter[] = [];
  for (const provider of listProviders()) {
    if (await provider.healthCheck()) healthyProviders.push(provider);
  }

  if (!healthyProviders.length) {
    throw new Error("No healthy AI provider is currently available.");
  }

  // v0.2 routing baseline. Future versions will score providers by task type,
  // quality, latency, context size, cost and historical user feedback.
  return healthyProviders[0];
}
