import React, { Component } from 'react';
import Results from './api/api';

interface Istate {
  title?: string;
  pickUp?: String;
}
export class App extends Component<{}, Istate>  {  
  public constructor(props: {}) {
    super(props);
    this.state = {
      title: 'Where are you going?',
      pickUp: 'Pick-up Location'
    };
  }
  
  public render() {
    return (
      <form className='search-form'>
        <h2 className='search-form__header'>{this.state.title}</h2>
        <label className='search-form__pickup'>{this.state.pickUp}</label>
        <Results />

      </form>
    );
  }
}
