import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import Routess from './config/Routes';

function App() {
  return (
    <>
      <BrowserRouter>
          <Routess/>
      </BrowserRouter>
    </>
  );
}

export default App;