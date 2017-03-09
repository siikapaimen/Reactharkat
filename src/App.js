import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    
    constructor(props){
        super(props);
        this.state={name:''}
    }
    
    componentDidMount(){
        this.setState({
        name:'Suzan'
        });
    }
    
    
  render() {
    return (
      <div className="App">
        
            <h1>Hello, {this.state.name}</h1>    
    
      </div>
    );
  }
    
   
}

export default App;
