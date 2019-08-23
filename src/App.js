import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./modules/makeStore";

import Home from '../src/pages/Home.js';


const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

function App() {
  return (
    <ReduxProvider store={reduxStore}>
      <div className="App">
        <header className="App-header">
          {/* The Header */}
        </header>
        <Home />
      </div>
    </ReduxProvider>
  );
}

export default App;
