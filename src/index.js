import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import playersAvailabilityReducer from "./store/reducers/playersAvailabilityRed";
import teamsReducer from "./store/reducers/teamsRed";
import newTeamReducer from "./store/reducers/createTeamRed";
import newPlayerReducer from "./store/reducers/createPlayerRed";
import modalReducer from "./store/reducers/modalRed";


import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  players: playersAvailabilityReducer,
  teams: teamsReducer,
  newTeam: newTeamReducer,
  newPlayer: newPlayerReducer,
  modal: modalReducer,

});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
