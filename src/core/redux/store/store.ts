// @packages
import { createStore } from "redux";

// @scripts
import { rootReducer } from "../reducer";

/**
 * Application root store
 */
export const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
