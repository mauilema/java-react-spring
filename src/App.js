import logo from './logo.svg';
import './App.css';
// import FirstClassComponent from './components/FirstClassComponent';
// import FirstFunctionComponent from './components/FirstFunctionComponent';
import React, { Component } from 'react';
import Counter from './components/counter/Counter';


class App extends Component {
  render() {
    return (
      <div className='App'>
         <img src={logo} className="App-logo" alt="logo" />
         <Counter />

      </div>
    );
  }
}

// class LearningComponents extends Component {
//   render() {
//     return (
//       <div className="App">
//         <img src={logo} className="App-logo" alt="logo" />
//       <div>Hello World :)</div>
//       <FirstClassComponent />
//       <FirstFunctionComponent />
//   </div>
//     )
//   }
// }

export default App;



