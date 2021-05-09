import React, { lazy, Suspense } from 'react';
import './App.scss';
import OffersComponent from './OffersComponent';

function App() {
  return (
    <div>
      <div className="welcome">
        <p className="title">
          Welcome to Olx Parser {' '}
        </p>
        <div className="content">
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
