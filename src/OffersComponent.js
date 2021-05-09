import React from 'react';
import axios from 'axios';
import envConfig from './core/env-config.json';
import './offersComponent.scss';

const { apiUrl } = envConfig;

class OffersComponent extends React.Component {
  constructor(props) {
    super(props);

    this.intervalId = null;
    this.offersSyncInterval = 1000 * 60 * 60;
    this.state = {
      offers: [],
      isFirstDataFetch: false,
      searchString: "",
      inputQuery: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  async componentDidMount() {
    await this.fetchOffers(apiUrl);
    this.intervalId = setInterval(this.fetchOffers.bind(this), this.offersSyncInterval);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  get url() {
      return `http://localhost:8080/?offer=${this.state.inputQuery}`;
  }

  handleInputChange(event) {
      const inputValue = event.target.value;
      this.setState({inputQuery: inputValue});
  }

  async fetchOffersFromInputForm() {
      return this.fetchOffers(this.url);
  }

  async fetchOffers(url) {
    const {data} = await axios.get(url);
    this.setState({offers: data, isFirstDataFetch: true});
    return data;
  }

  render() {
    return (
        [
            React.createElement("form", {onSubmit: this.fetchOffersFromInputForm.bind(this), onChange: this.handleInputChange.bind(this)},
                  React.createElement("p", {},
                    React.createElement("input", {
                      placeholder: "Введите запрос",
                      name: "offer",
                      value: this.state.inputQuery
                    })),
                    React.createElement("p", {},
                      React.createElement("input", {
                      type: "submit",
                    })),
            ),
            this.state.offers?.map((offer, i) => React.createElement("div", {key: i, className: 'offers'},
              React.createElement("p", {}, `Название: ${offer.name}`),
              React.createElement("a", {href: offer.link, target: "_blank"}, `${offer.name}`),
              React.createElement("p", {}, `Цена: ${offer.price}`),
              React.createElement("p", {}, `Адрес: ${offer.address}`),
              React.createElement("p", {}, `Дата: ${offer.timestamp}`),
                <br/>
            ))
        ]
    )
  }
}

export default OffersComponent;
