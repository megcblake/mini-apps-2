/* eslint-disable class-methods-use-this */
import React from 'react';

class SearchEvents extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  handleSearchSubmit(event) {
    const { searchChange } = this.props;
    searchChange();
    event.preventDefault();
  }

  handleSearchChange(event) {
    const { queryChange } = this.props;
    queryChange(event.target.value);
  }

  render() {
    const { term } = this.props;
    return (
      <form onSubmit={this.handleSearchSubmit}>
        <label>
          Search historical events by keyword:
          <input type="text" value={term} onChange={this.handleSearchChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SearchEvents;
