import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      words: ""
    }
  }

  componentDidMount(){
    let ip = location.host;
    
    fetch("http://51.145.4.86:5000/api").then(res => res.json()).then(jsonString => {
      this.setState({
        words: jsonString.word
      });
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.words}

      </div>
    );
  }
}

export default App;
