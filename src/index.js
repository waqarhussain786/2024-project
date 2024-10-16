import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import SimpleLineChart from "./App"
// import BiaxialLineChart from './biaxiallinechart';
import OffcanvasExample from "./navBar";
import Counter from './counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OffcanvasExample />
    <Counter />
    {/* <SimpleLineChart /> */}
    {/* <BiaxialLineChart /> */}
  </React.StrictMode>
);