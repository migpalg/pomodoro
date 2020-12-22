import { User } from "@app/core/models/user.model";
import {
  AuthActionType,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "./auth.types";

/**
 * Handles when user request login
 */
export function loginRequest(): AuthActionType {
  return {
    type: LOGIN_REQUEST,
  };
}

/**
 * Handles when a user logs in
 * @param user Current authenticated user
 */
export function loginSuccess(data: User): AuthActionType {
  return {
    type: LOGIN_SUCCESS,
    data,
  };
}

/**
 * Handles when login fails
 * @param error Current authentication error
 */
export function loginFailure(error: string): AuthActionType {
  return {
    type: LOGIN_FAILURE,
    error,
  };
}
