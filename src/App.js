import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { TraditionalApp } from "./approach/TraditionalApp";
import { RouterApp } from './approach/RouterApp'

function App() {
  return (
    <div className="flex flex-grow w-full justify-center">
        <TraditionalApp />
        <BrowserRouter>
          <Routes>
            <Route path='*' element={<RouterApp />}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
