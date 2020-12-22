// @packages
import React from "react";
import ReactDOM from "react-dom";

// @scripts
import { App } from "./app";

describe("App component test", () => {
  it("renders without crash", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App authenticated />, div);
  });
});
