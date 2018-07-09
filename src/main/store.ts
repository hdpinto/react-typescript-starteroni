// import * as localForage from "localforage";
import { applyMiddleware, compose, createStore, Middleware } from "redux";
// import { autoRehydrate, persistStore } from "redux-persist";
import thunk from "redux-thunk";

// Remove for prod
const composeEnhancers =  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Remove for dev
// const composeEnhancers = compose;

import reducers from "./reducers";
const middlewares: Middleware[] = [thunk];

export const store = (prefix: string) => {

    const localStore = createStore(
      reducers,
      undefined,
      composeEnhancers(
      applyMiddleware(...middlewares),
      // autoRehydrate(),
      ),
    );
    /*
  persistStore(localStore, {
    whitelist: [""], // don't persist anything yet, add reducers here as you want them to be persisted
    keyPrefix: `${prefix}_`,
    storage: localForage },
  );
  */

  return localStore;
};