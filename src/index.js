import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import SimpleLineChart from "./App"
// import BiaxialLineChart from './biaxiallinechart';
import OffcanvasExample from "./navBar";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OffcanvasExample />
    {/* <SimpleLineChart /> */}
    {/* <BiaxialLineChart /> */}
  </React.StrictMode>
);