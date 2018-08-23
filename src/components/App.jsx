import React from 'react';
import Results from './api/api';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'App form',
    };

  }
  
  render() {
    return (
      <div>
        hello
        <Results />
      </div>
    );
  }
}


export default App;