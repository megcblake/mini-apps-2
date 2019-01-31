/* eslint-disable class-methods-use-this */
import React from 'react';
import SearchEvents from './SearchEvents.jsx';
import HistoricalList from './HistoricalList.jsx';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      pageCount: 0,
      limit: 10,
      term: '',
    };
    this.getData = this.getData.bind(this);
    this.queryChange = this.queryChange.bind(this);
    this.searchChange = this.searchChange.bind(this);
    this.pageChange = this.pageChange.bind(this);
  }

  componentDidMount() {
    this.getData('', 1);
  }

  getData(term, pageNum) {
    const { limit } = this.state;
    fetch(`/events?q=${term}&_page=${pageNum}&_limit=${limit}`)
      .then((response) => {
        this.setState(state => ({
          pageCount: Number(response.headers.get('X-Total-Count')) / state.limit,
        }));
        return response.json();
      })
      .then((myJson) => {
        this.setState({
          data: myJson,
        });
      });
  }

  searchChange() {
    const { term } = this.state;
    this.getData(term, 1);
  }

  queryChange(term) {
    this.setState({
      term,
    });
  }

  pageChange(num) {
    const { term } = this.state;
    this.getData(term, num);
  }

  render() {
    const { data, pageCount, term } = this.state;
    return (
      <div className="main-app">
        <SearchEvents searchChange={this.searchChange} queryChange={this.queryChange} term={term} />
        <HistoricalList data={data} pageCount={pageCount} pageChange={this.pageChange} />
      </div>
    );
  }
}

export default Main;
