/**
 * Represents a redux action
 */
export interface ReduxAction<TA> {
  type: TA;
}

/**
 * Represents redux action with data
 */
export interface ReduxActionWithData<TA, TD> extends ReduxAction<TA> {
  data: TD;
}

/**
 * Redux error
 */
export interface ReduxError<TA, TE> extends ReduxAction<TA> {
  error: TE;
}
