import React from 'react';
import Results from './api/api';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Where are you going?',
      pickUp: 'Pick-up Location'
    };

  }
  
  render() {
    return (
      <form className='search-form'>
        <h2 className='search-form__header'>{this.state.title}</h2>
        <label className='search-form__pickup'>{this.state.pickUp}</label>
        <Results />

      </form>
    );
  }
}


export default App;