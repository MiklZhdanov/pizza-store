export interface ActionType<T> {
  // Uniq key to connect flow actions;
  key?: string;
  payload?: T;
  meta?: {
    key?: string;
  };
  type: string;
}
