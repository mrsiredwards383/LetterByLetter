import React, { Component } from 'react';
import './App.css';
import Word from './Word/Word';

class App extends Component {
  state = {
    userInput: ''
  }

addLetterHandler = (event) => {
 const letters = event.target.value;
 this.setState({userInput: letters})
 console.log(this.state.userInput);
}

 render () {
  return (
    <div>
     <h1>Enter a word:</h1>
     <Word 
     changed= {(event) => this.addLetterHandler(event)}
     userInput = {this.state.userInput}
     />
    </div>
  );
 }
}

export default App;
