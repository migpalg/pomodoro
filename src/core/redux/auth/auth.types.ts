// @scripts
import { User } from "@app/core/models/user.model";
import {
  AsyncState,
  ReduxAction,
  ReduxActionWithData,
  ReduxError,
} from "@redux/types";

// Reducer state type
export interface AuthState extends AsyncState<string, User> {
  isAuthenticated: boolean;
}

// Redux action types
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

// Export action types
export type LoginRequestAction = ReduxAction<typeof LOGIN_REQUEST>;
export type LoginFailureAction = ReduxError<typeof LOGIN_FAILURE, string>;
export type LoginSuccessAction = ReduxActionWithData<
  typeof LOGIN_SUCCESS,
  User
>;

/**
 * Authentication actions
 */
export type AuthActionType =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction;
