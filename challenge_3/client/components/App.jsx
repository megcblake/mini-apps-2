import React from 'react';
import SelectPins from './SelectPins.jsx';
import ScoreCard from './ScoreCard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rolls: [],
    };
    this.handleFrame = this.handleFrame.bind(this);
  }

  handleFrame(values) {
    this.setState(state => ({
      rolls: state.rolls.concat(values),
    }));
  }

  render() {
    const { rolls } = this.state;
    return (
      <div className="bowling-main">
        <SelectPins handleFrame={this.handleFrame} />
        <ScoreCard rolls={rolls} />
      </div>
    );
  }
}

export default App;
