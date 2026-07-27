export type NovaTaskType =
  | "research"
  | "strategy"
  | "writing"
  | "editing"
  | "reasoning"
  | "visual-brief"
  | "classification";

export type NovaMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

export type NovaModelRequest = {
  projectId: string;
  executiveId: string;
  taskType: NovaTaskType;
  messages: NovaMessage[];
  preferredProvider?: string;
  preferredModel?: string;
  requireStructuredOutput?: boolean;
  maxCostGbp?: number;
};

export type NovaModelResponse = {
  provider: string;
  model: string;
  content: string;
  inputTokens?: number;
  outputTokens?: number;
  latencyMs: number;
  estimatedCostGbp?: number;
};

export interface NovaProviderAdapter {
  id: string;
  generate(request: NovaModelRequest): Promise<NovaModelResponse>;
  healthCheck(): Promise<boolean>;
}
