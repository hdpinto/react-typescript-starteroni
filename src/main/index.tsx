import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { store } from "./store";

import "../../style/src/main.scss";

import AppContainer from "./AppContainer.React";

ReactDOM.render(
  <Provider store={store("react-starter")} >
     <BrowserRouter>
      <Switch>
        <Route path="/:path?" component={AppContainer}/>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("react-mount"),
);