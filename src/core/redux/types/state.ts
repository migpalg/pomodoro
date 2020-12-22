/**
 * Represents an async state
 */
export interface AsyncState<TE, TD> {
  isFetching: boolean;
  error: TE | null;
  data: TD | null;
}
