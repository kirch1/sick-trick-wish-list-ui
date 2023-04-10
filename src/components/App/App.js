import { Component } from 'react';
import getTricks from '../../api';
import CardContainer from '../CardContainer/CardContainer';
import './App.css';
import Form from '../Form/Form';

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
      .then(data => this.setState({tricks: data, errorMsg: ''}))
      .catch(error => this.setState({tricks: [], errorMsg: error.toString()}));
  }
  
  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Form />
        {this.state.errorMsg ? <p>{this.state.errorMsg}</p> : <CardContainer tricks={this.state.tricks}/>}
      </div>
    );
  }
}

export default App;
