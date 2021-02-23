export interface ContextModel {
  subscribe: (event: string, callback: (args: any) => void) => () => void;
  publish: (event: string, data?: any) => void;
  useSubscribe: (eventType: string, callback: (args: any) => void) => void;
  unsubscribeAll: () => void;
}

export const createEmptyContextModel = (): ContextModel => ({
  subscribe: null,
  publish: null,
  useSubscribe: null,
  unsubscribeAll: null,
});
