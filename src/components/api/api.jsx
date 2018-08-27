import React, { Component } from 'react';
require('es6-promise').polyfill();
require('isomorphic-fetch');

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      inputValue: ''
    }

    this.onSearchChange = this.onSearchChange.bind(this);
    this.updateBox = this.updateBox.bind(this);
    this.checkValue = this.checkValue.bind(this);
  }

  onSearchChange(e) {
    this.setState({ inputValue: e.target.value});
    let Location = this.state.inputValue;

    if(this.state.inputValue.length >= 1) {
      const url = 'https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=%7b5%7d&solrTerm=%7b' + Location + '%7d';
      fetch(url)
        .then(res => res.json())
        .then(res => {
          this.setState({ data: res.results.docs });
          return res;
        })
        .catch(err => {
          console.log('Error happened during fetching!', err);
        });
    }

    if(this.state.inputValue.length <= 0 ) {
      this.setState({ data: [] });
    }
  }

  updateBox(name) {
    this.setState({ inputValue: name });
    this.setState({ data: [] });
  }

  checkValue() {
    this.setState({ data: [] });
  }


  render() {
    return (
      <div className='search-form__search'>
        <input type='text'
          className='search-form__search-input'
          placeholder='city, airport, station, region, district…'
          onChange={this.onSearchChange}
          onClick={this.checkValue}
          value={this.state.inputValue} />
        <div className='search-form__results'>
          {this.state.data.map(({ name, placeKey, country, city }) => (<div onClick={() => this.updateBox(name)} key={placeKey} value={name} className="search-form__results-name">{name}
            <div className='search-form__results-details'><span>{city} </span><span>{country}</span></div>
          </div>))}
        </div>
      </div>
    );
  }
}


export default Results;