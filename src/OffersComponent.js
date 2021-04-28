import React, { useState, useEffect } from 'react';
import axios from 'axios';
import envConfig from './core/env-config.json';
import './offersComponent.scss';

const { apiUrl } = envConfig;

class OffersComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      offers: []
    }
  }

  async componentDidMount() {
    const {data} = await axios.get(apiUrl);
    this.setState({offers: data});
  }

  render() {
    return (
        "ul",
        {className: "offers"},
        this.state.offers?.map((offer, i) => React.createElement("li", {key: i}, offer.name))
    );
  }
}

export default OffersComponent;
