import { User } from "@app/core/models/user.model";
import { loginFailure, loginRequest, loginSuccess } from "./auth.actions";
import { authReducer, authInitialState } from "./auth.reducer";
import { AuthState } from "./auth.types";

describe("AuthReducer tests", () => {
  let state: AuthState;

  beforeEach(() => {
    state = authReducer();
  });

  it("should have initial value", () => {
    expect(state).toEqual(authInitialState);
  });

  it("should be loading when user request login", () => {
    state = authReducer(state, loginRequest());

    expect(state.isFetching).toBeTruthy();
    expect(state.isAuthenticated).toBeFalsy();
  });

  it("should have an user when login success", () => {
    const mockUser: User = {
      name: "John Doe",
      email: "john.doe@fake.net",
    };

    state = authReducer(state, loginSuccess(mockUser));

    expect(state.data).toEqual(mockUser);
    expect(state.isFetching).toBeFalsy();
    expect(state.error).toBeNull();
    expect(state.isAuthenticated).toBeTruthy();
  });

  it("should have an error when login fails", () => {
    const mockError = "Unvalid credentials";

    state = authReducer(state, loginFailure(mockError));

    expect(state.error).toEqual(mockError);
    expect(state.isFetching).toBeFalsy();
    expect(state.data).toBeNull();
    expect(state.isAuthenticated).toBeFalsy();
  });
});
