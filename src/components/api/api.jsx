import React, { Component } from 'react';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      inputValue: ''
    }

    this.onSearchChange = this.onSearchChange.bind(this);
    this.updateBox = this.updateBox.bind(this);
  }

  onSearchChange(e) {
    this.setState({ inputValue: e.target.value});
    let Location = this.state.inputValue;

    if(this.state.inputValue.length >= 2) {
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

    if(this.state.inputValue.length <= 1 ) {
      this.setState({ data: [] });
    }

    if(this.state.inputValue.length === 0 || this.state.inputValue.length < 1 || this.state.inputValue.length === '' ) {
      this.setState({ data: ['No search Results'] });
    }
  }

  updateBox(name) {
    console.log(name);
    this.setState({ inputValue: name });
  }


  render() {
    console.log(this.state.inputValue.length);
    console.log(this.state.data);
    return (
      <div className='search'>
        <input type='text'
          placeholder='city, airport, station, region, district…'
          onChange={this.onSearchChange}
          value={this.state.inputValue} />
        {this.state.data.map(({ name, index }) => (<span onClick={() => this.updateBox(name)} key={index} value={name} className="result">{name}</span>))}
      </div>
    );
  }
}


export default Results;