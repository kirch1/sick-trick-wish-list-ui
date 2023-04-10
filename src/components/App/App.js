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
    getTricks()
      .then(data => this.setState({tricks: data}))
      .catch(error => {
        console.log(error.toString())
        this.setState({errorMsg: error.toString()})
      });
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
