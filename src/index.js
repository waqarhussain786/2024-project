import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SimpleLineChart from "./App"
import BiaxialLineChart from './biaxiallinechart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SimpleLineChart />
    <BiaxialLineChart />
  </React.StrictMode>
);