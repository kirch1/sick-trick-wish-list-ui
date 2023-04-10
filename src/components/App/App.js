import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tricks: [],
      errorMsg: ''
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/tricks')
      .then(response => {
        if(!response.ok) {
          throw new Error(response)
        }else {
          return response.json();
        }
      })
      .then(data => console.log(data))
      .catch(error => console.log(error))
  }
  
  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
      </div>
    );
  }
}

export default App;
