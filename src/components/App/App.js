import { Component } from 'react';
import { getTricks, postTrick, deleteTrick } from '../../api';
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

  loadTricks = () => {
    getTricks()
      .then(data => this.setState({tricks: data, errorMsg: ''}))
      .catch(error => this.setState({tricks: [], errorMsg: error.toString()}));
  }

  addTrick = (newTrick) => {
    postTrick(newTrick)
      .then(data => this.setState({tricks: [...this.state.tricks, data]}))
      .catch(error => this.setState({tricks: [], errorMsg: error.toString()}));
  }

  deleteTrick = (id) => {
    deleteTrick(id).then(() => this.loadTricks())
  }

  componentDidMount() {
    this.loadTricks();
  }
  
  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Form addTrick={this.addTrick}/>
        {this.state.errorMsg ? <p className='error'>{this.state.errorMsg}</p> : <CardContainer tricks={this.state.tricks} deleteTrick={this.deleteTrick}/>}
      </div>
    );
  }
}

export default App;
