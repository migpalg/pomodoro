import { CombinedState } from "redux";
import { loginRequest } from "../auth/auth.actions";
import { AuthState } from "../auth/auth.types";
import { store } from "./store";

describe("RootStore tests", () => {
  const requiredReducers = ["auth"];
  let currentState: CombinedState<{ auth: AuthState }>;

  beforeEach(() => {
    currentState = store.getState();
  });

  it("should have required reducers", () => {
    const reducerKeys = Object.keys(currentState);

    expect(
      requiredReducers.every((reducer) => reducerKeys.includes(reducer))
    ).toBeTruthy();
  });

  it("should mutate nested reducers", () => {
    const lastState = { ...store.getState() };

    store.dispatch(loginRequest());

    const nextState = store.getState();

    expect(lastState.auth.isFetching).not.toEqual(nextState.auth.isFetching);
  });
});
