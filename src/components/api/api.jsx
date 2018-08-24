import React, { Component } from 'react';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      inputValue: ''
    }

    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(e) {
    this.setState({ inputValue: e.target.value});
    let Location = this.state.inputValue;
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
    
    console.log(this.state.inputValue);
  }


  render() {
    console.log(this.state.data);
    return (
      <div>
        <input type='text'
          onChange={this.onSearchChange}
          value={this.state.inputValue} />
        {this.state.data.map(({ name, index }) => (<span key={index} className="file-list-container__wrapper">{name}</span>))}
      </div>
    );
  }
}


export default Results;