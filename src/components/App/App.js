import { Component } from 'react';
import './App.css';
import getTricks from '../../api';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tricks: [],
      errorMsg: ''
    }
  }

  componentDidMount() {
    getTricks().then(data => this.setState({tricks: data}))
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
