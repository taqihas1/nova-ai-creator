import { routeModelRequest } from "./router";
import type { NovaModelRequest, NovaModelResponse } from "./types";

export async function generateWithNova(request: NovaModelRequest): Promise<NovaModelResponse> {
  const provider = await routeModelRequest(request);
  return provider.generate(request);
}
