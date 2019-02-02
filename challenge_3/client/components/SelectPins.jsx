import React from 'react';

class SelectPins extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstRoll: null,
    };
    this.handlePinClick = this.handlePinClick.bind(this);
    this.handleStrikeClick = this.handleStrikeClick.bind(this);
  }

  handlePinClick(e) {
    const { firstRoll } = this.state;
    const { handleFrame } = this.props;
    e.preventDefault();
    if (firstRoll === null) {
      this.setState({
        firstRoll: Number(e.target.value),
      });
    } else if (firstRoll + Number(e.target.value) > 10) {
      alert('Please select a valid input');
    } else {
      const secondRoll = Number(e.target.value);
      handleFrame([firstRoll, secondRoll]);
      this.setState({
        firstRoll: null,
      });
    }
  }

  handleStrikeClick(e) {
    const { handleFrame } = this.props;
    e.preventDefault();
    handleFrame([null, 10]);
  }

  render() {
    return (
      <div className="pins">
        <button type="button" value="0" onClick={this.handlePinClick}>0</button>
        <button type="button" value="1" onClick={this.handlePinClick}>1</button>
        <button type="button" value="2" onClick={this.handlePinClick}>2</button>
        <button type="button" value="3" onClick={this.handlePinClick}>3</button>
        <button type="button" value="4" onClick={this.handlePinClick}>4</button>
        <button type="button" value="5" onClick={this.handlePinClick}>5</button>
        <button type="button" value="6" onClick={this.handlePinClick}>6</button>
        <button type="button" value="7" onClick={this.handlePinClick}>7</button>
        <button type="button" value="8" onClick={this.handlePinClick}>8</button>
        <button type="button" value="9" onClick={this.handlePinClick}>9</button>
        <button type="button" value="10" onClick={this.handleStrikeClick}>10</button>
      </div>
    );
  }
}

export default SelectPins;
