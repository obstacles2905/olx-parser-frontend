import React, { useState, useEffect } from 'react';
import axios from 'axios';
import envConfig from './core/env-config.json';
import './otherComponent.scss';

const { environment, apiUrl } = envConfig;

const OtherComponent = function() {
  const [data, dataSet] = useState('Loading...');

  async function fetchMyAPI(url) {
    const response = await axios(url);
    const offersData = response.data;

    dataSet(offersData);
  }

  useEffect(() => {
    fetchMyAPI(apiUrl);
  }, []);

  return (
    <div className="environment">
      <ul>
        <li>
          Environment: <pre>{environment}</pre>
        </li>
        <li>
          API url:{' '}
          <span>
            <a href={apiUrl} target="_blank" rel="noopener noreferrer">
              {apiUrl}
            </a>
          </span>
        </li>
        <li>
          Data Fetched:{' '}
          <span>
            <a href={apiUrl} target="_blank" rel="noopener noreferrer">
              {data}
            </a>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default OtherComponent;
