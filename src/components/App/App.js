import { Component } from 'react';
import './App.css';
import getTricks from '../../api';
import CardContainer from '../CardContainer/CardContainer';

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
        <CardContainer tricks={this.state.tricks}/>
      </div>
    );
  }
}

export default App;
