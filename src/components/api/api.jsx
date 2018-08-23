import React, { Component } from 'react';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {

    const url = 'https://codepen.io/jobs.json';
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({ data: res.jobs });
        return res;
      })
      .catch(err => {
        console.log('Error happened during fetching!', err);
      });
  }

  render() {
    return (
      <div>
        <ul id="file-list-container" className="file-list-container">
          {this.state.data.map(({ company_name, index }) => (<li key={index} className="file-list-container__wrapper">{company_name}</li>))}
        </ul>
      </div>
    );
  }
}


export default Results;