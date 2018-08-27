import React from 'react';
import Results from './api/api';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Let’s find your ideal car',
    };

  }
  
  render() {
    return (
      <div className='search-form'>
        <h2 className='search-form__header'>{this.state.title}</h2>
        <Results />
      </div>
    );
  }
}


export default App;