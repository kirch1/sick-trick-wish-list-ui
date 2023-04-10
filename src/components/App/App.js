import { Component } from 'react';
import getTricks from '../../api';
import CardContainer from '../CardContainer/CardContainer';
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
    getTricks()
      .then(data => this.setState({tricks: data}))
      .catch(error => this.setState({errorMsg: error.toString()}));
  }
  
  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        {this.state.errorMsg ? <p>{this.state.errorMsg}</p> : <CardContainer tricks={this.state.tricks}/>}
      </div>
    );
  }
}

export default App;
