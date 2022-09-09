import React from 'react';
import { Counter } from './features/counter/Counter';
import { Routes, Route, Link } from "react-router-dom";

import 'antd/dist/antd.min.css';


function App() {
  return (
    <div className="App">
        <Counter />

        <Link to={`/`}>
          home
        </Link>
        <Link to={`/about`}>
          about
        </Link>

        <Routes>
          <Route path={`/`} element={<div>home</div>} />
          <Route path={`/about`} element={<div>about</div>} />
        </Routes>
    </div>
  );
}

export default App;
