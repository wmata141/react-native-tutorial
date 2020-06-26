import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        this.setState({
          list: myJson
        });
      });
  }

  render() {
    let { list } = this.state;
    console.log(list);

    return (
      <div>
        {
          list.map((item, i) => {
            return (
              <li key={i}>{item.name}</li>
            )
          })
        }
      </div>
    );
  }
}

export default App;
