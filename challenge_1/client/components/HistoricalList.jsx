import React from 'react';
import ReactPaginate from 'react-paginate';
import HistoricalEvent from './HistoricalEvent.jsx';

class HistoricalList extends React.Component {
  constructor(props) {
    super(props);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handlePageClick(data) {
    const { pageChange } = this.props;
    const pageClicked = data.selected + 1;
    pageChange(pageClicked);
  }

  render() {
    const { data, pageCount } = this.props;
    return (
      <div className="historical-list">
        <table id="list-tb">
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Language</th>
              <th>Category</th>
              <th>Granularity</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {data.map(event => (
              <HistoricalEvent event={event} />
            ))}
          </tbody>
        </table>
        <div id="react-paginate">
          <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
          />
        </div>
      </div>
    );
  }
}

export default HistoricalList;
