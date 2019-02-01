import React from 'react';
import ReactDOM from 'react-dom';

const LineChart = require('react-chartjs').Line;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      start: '2018-12-01',
      end: '2019-01-01',
    };
    this.retrieveCurrencyData = this.retrieveCurrencyData.bind(this);
  }

  componentDidMount() {
    this.retrieveCurrencyData();
  }

  retrieveCurrencyData() {
    const { start, end } = this.state;
    fetch(`/coins?start=${start}&end=${end}`)
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        this.setState({
          data: myJson,
        });
      })
      .catch(err => console.error('ERROR:', err));
  }

  retrieveCacheData() {
    const { start, end } = this.state;
    fetch(`/cache?start=${start}&end=${end}`)
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        this.setState({
          data: myJson,
        });
      })
      .catch(err => console.error('ERROR:', err));
  }

  render() {
    const { data } = this.state;
    const dates = Object.keys(data).sort();
    const prices = dates.map(date => data[date]);
    const chartData = {
      labels: dates,
      datasets: [
        {
          label: 'BitCoin Closing Prices',
          fillColor: 'rgba(220,220,220,0.2)',
          strokeColor: 'rgba(220,220,220,1)',
          pointColor: 'rgba(220,220,220,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(220,220,220,1)',
          data: prices,
        },
      ],
    };
    return (
      <div className="bit-coin-data">
        <h1>BitCoin Closing Prices (USD)</h1>
        <LineChart data={chartData} width="1100" height="500" />
        <h3>Powered by CoinDesk</h3>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
