import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    
    constructor(props){
        super(props);
        this.state={name:'', value:'', count:0}
        this.handleChange = this.handleChange.bind(this);
        //button?
       this.handleSubmit = this.handleSubmit.bind(this);

    }
    
    //inputinyritystähandlechangeeventilläää
      handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    //submittiaaa?
     handleSubmit(event) {
        //alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        this.setState({count: this.state.count +1});
  }
    
    componentDidMount(){
        this.setState({
        name:'Suzan'//,
        //count:0
        });
    }
    
    
  render() {
    return (
      <div className="App">
        
            <h1>Hello, {this.state.name}</h1> 
        
            <h1>Terve, {this.state.value}</h1>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
        
    <form onSubmit={this.handleSubmit}>   
        <p>Painiketta klikattu {this.state.count} kertaa</p>
        <button onClick={this.handleSubmit}>klikken</button>
    </form>
    
      </div>
    );
  }
    
   
}

export default App;
