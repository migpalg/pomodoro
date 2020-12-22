// @packages
import React, { useEffect } from "react";
import { connect } from "react-redux";

// @scripts
import { RootState } from "@redux/reducer";

export interface AppStateProps {
  authenticated: boolean;
}

export interface AppProps {}

export const App: React.FC<AppStateProps & AppProps> = (props) => {
  useEffect(() => {
    console.log(props.authenticated);
  }, [props.authenticated]);

  return (
    <div>
      <h1>{props.authenticated ? "Logged in" : "Logged out"}</h1>
    </div>
  );
};

const mapState = (state: RootState): AppStateProps => ({
  authenticated: state.auth.isAuthenticated,
});

export default connect<AppStateProps, {}, AppProps>(mapState as any)(App);
