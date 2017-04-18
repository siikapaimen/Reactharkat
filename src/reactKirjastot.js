import React, { Component } from 'react';
import './App.css';

var KIRJASTOT = [];

class App extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.fetchKirjasto = this.fetchKirjasto.bind(this);
    this.state = {
        
    };
      this.fetchKirjasto();
  }

  handleChange(event) {
    this.setState({city: event.target.value});
  }
    

fetchKirjasto() {
  console.log('fetching...');
  fetch('https://api.kirjastot.fi/v3/organisation?city.name=' + this.state.city)
    .then(result => result.json())
    .then(result => {
      var num = result.items.length;
      KIRJASTOT=[];
      for(var i =0;i<num;i++){
          KIRJASTOT.push({name:result.items[i].short_name.fi,url:result.items[i].homepage.fi});
      }
      this.setState({kirjasto:'Kirjasto'});
  })
}
          
    


 render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <button onClick={this.fetchKirjasto}>Hae Kirjastot</button>
        <KirjastoTable data={KIRJASTOT}/>
        </div>
        
    );
  }
}


// Component for student table
class KirjastoTable extends Component {
  render() {    
   var rows = this.props.data.map(item =>
        <Kirjasto item={item}/>
    );

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

// Component for one table row
class Kirjasto extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.item.name}</td>
        <td>{this.props.item.url}</td>
        
      </tr>);
  }
}

export default App;
