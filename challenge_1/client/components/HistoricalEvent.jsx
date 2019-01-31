import React from 'react';

class HistoricalEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editClicked: false,
      date: '',
      description: '',
      lang: '',
      categories: '',
      granularity: '',
    };
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
  }

  handleEditClick() {
    this.setState({
      editClicked: true,
    });
  }

  handleInputChange(text, name) {
    this.setState({
      [name]: text,
    });
  }

  handleSaveClick() {
    const {
      date, description, lang, categories, granularity,
    } = this.state;
    const { event } = this.props;
    const update = {
      date: date.length ? date : event.date,
      description: description.length ? description : event.description,
      lang: lang.length ? lang : event.lang,
      category1: categories.length ? categories.split(' / ')[0] : event.category1,
      category2: categories.length ? categories.split(' / ')[1] : event.category2,
      granularity: granularity.length ? granularity : event.granularity,
    };
    // call function for put request
  }

  render() {
    const { editClicked } = this.state;
    const { event } = this.props;
    const categories = event.category2 ? (`${event.category1} / ${event.category2}`) : event.category1;
    const clickHandler = editClicked
      ? (
        <button type="button" onClick={this.handleSaveClick}>
          Save
        </button>
      )
      : (
        <button type="button" onClick={this.handleEditClick}>
          Edit
        </button>
      );
    return (
      <tr>
        <td contentEditable={editClicked} onInput={(e) => { this.handleInputChange(e.currentTarget.textContent, 'date'); }}>
          <div style={{ width: '100px' }}>
            {event.date}
          </div>
        </td>
        <td contentEditable={editClicked} onInput={(e) => { this.handleInputChange(e.currentTarget.textContent, 'description'); }}>
          <div style={{ width: '700px' }}>
            {event.description}
          </div>
        </td>
        <td contentEditable={editClicked} onInput={(e) => { this.handleInputChange(e.currentTarget.textContent, 'lang'); }}>
          <div style={{ width: '50px' }}>
            {event.lang}
          </div>
        </td>
        <td contentEditable={editClicked} onInput={(e) => { this.handleInputChange(e.currentTarget.textContent, 'categories'); }}>
          <div style={{ width: '200px' }}>
            {categories}
          </div>
        </td>
        <td contentEditable={editClicked} onInput={(e) => { this.handleInputChange(e.currentTarget.textContent, 'granularity'); }}>
          <div style={{ width: '50px' }}>
            {event.granularity}
          </div>
        </td>
        <td>
          <div style={{ width: '50px' }}>
            {clickHandler}
          </div>
        </td>
      </tr>
    );
  }
}

export default HistoricalEvent;
