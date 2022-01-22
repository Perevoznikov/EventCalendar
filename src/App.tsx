import React, {useEffect} from 'react';
import './App.scss';
import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";
import {Provider, useDispatch} from "react-redux";
import {store} from "./store";
import {AuthActionCreators} from "./store/reducers/auth/actionCreators";

function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <AppRouter />
          </BrowserRouter>
      </Provider>
  );
}

export default App;
