import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./modules/makeStore";

import Header from '#components/Header';
import Home from '#pages/Home';

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

function App() {
  return (
    <ReduxProvider store={reduxStore}>
      <div className="App">
        <Header />
        <Home />
      </div>
    </ReduxProvider>
  );
}

export default App;
