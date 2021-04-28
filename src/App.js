import React, { lazy, Suspense } from 'react';
import './App.scss';
import OffersComponent from './OffersComponent';

function App() {
  return (
    <div>
      <div className="welcome">
        <p>
          Welcome to Olx Parser {' '}
          <span style={{ color: '#61dafb' }}> New react hooks!</span>
          <br />
          Clean Code for Rapid Development
        </p>
        <div className="content">
          Built in <div id="heart" /> with React
        </div>
        <div>
          To get started, edit: <pre>src/App.js</pre>
        </div>
        <div>
          <Suspense fallback={<div>Loading...</div>} />
          <OffersComponent />
        </div>
      </div>

      <div className="footer">
        Orchestrated by:{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/hansiemithun/">
          Mithun
        </a>{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.npmjs.com/package/generator-ozone-ui">
          &copy; Copyright 2018 - {new Date().getFullYear()}
        </a>
      </div>
    </div>
  );
}

export default App;
