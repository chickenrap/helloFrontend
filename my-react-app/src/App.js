import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageComponent from './Component/Index/images';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <ul>
            <li>Logo.png</li>
            <li>Front-End</li>
            <li>Design</li>
            <li>Game</li>
            <li>Infra</li>
            <li>Register</li>
        </ul>  
        


        <h1>Hello World</h1>
        <ImageComponent />

        <h1>Front-End</h1>
        <p>#HelloWorld #Beaver #helloBeaver #HelloFrontEnd</p>

        <h1>Design</h1>
        <p>#HelloWorld #Beaver #helloBeaver #HelloFrontEnd</p>

        <h1>Game</h1>
        <p>#HelloWorld #Beaver #helloBeaver #HelloFrontEnd</p>

        <h1>Infra</h1>
        <p>#HelloWorld #Beaver #helloBeaver #HelloFrontEnd</p>

        <p>This is footer</p>



      </div>
    );
  }
}

export default App;
