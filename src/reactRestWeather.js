import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.fetchWeather = this.fetchWeather.bind(this);
    this.state = {
        weather: [],
        temp: 0,
        url: '',
    };
  }

  handleChange(event) {
    this.setState({city: event.target.value});
  }

fetchWeather() {
  console.log('fetching...');
  fetch('http://api.openweathermap.org/data/2.5/weather?q=Helsinki&APPID=YOUR_APPID&units=metric')
    .then(result => result.json())
    .then(result => this.setState({
          city: 'type city...', 
          weather: result.weather[0],
          temp: result.main.temp,
          url : 'http://openweathermap.org/img/w/' + result.weather[0].icon + '.png',
      })
  );

  console.log(this.state.items);
}

 render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <button onClick={this.fetchWeather}>Send</button>
        <p>Temperature: {this.state.temp} Celsius</p>
        <p>Weather:  {this.state.weather.main}</p>
        <img alt="weathericon" src={this.state.url}/>
      </div>
    );
  }
}

export default App;
