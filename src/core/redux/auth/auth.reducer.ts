import {
  AuthActionType,
  AuthState,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "./auth.types";

export const authInitialState: AuthState = {
  isFetching: false,
  data: null,
  error: null,
  isAuthenticated: false,
};

/**
 * Current authentication state
 * @param state Current authentication state
 * @param action Action
 */
export function authReducer(
  state = authInitialState,
  action?: AuthActionType
): AuthState {
  switch (action?.type) {
    case LOGIN_REQUEST:
      return {
        ...authInitialState,
        isFetching: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...authInitialState,
        data: action.data,
        isAuthenticated: true,
      };

    case LOGIN_FAILURE:
      return {
        ...authInitialState,
        error: action.error,
      };

    default:
      return state;
  }
}
