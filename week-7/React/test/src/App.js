import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
class App extends Component {

  personContainer(name, email) {

   let greatName = `The Great ${name}`

   return (
      <div className='person'>
        <h4>{greatName}</h4>
        <p>Contact at: <a href={email}>email</a></p>
      </div>
    )
  }

  render() {
    // return [
    //   this.getMorningGreeting(),
    //   this.getEveningGreeting(),
    //   <p>some text</p>
    // ]
    return <div>uuuuuuu</div>
  }
}

export default App;
