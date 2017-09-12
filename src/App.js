import React, { Component } from 'react';
import './App.css';
import CreateKPI from './CreateKPI';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>KPI-as-a-Service</h1>
        </div>
        <table>
          <tr>
            <td><CreateKPI /></td>
            <td><CreateKPI /></td>
            <td><CreateKPI /></td>
            <td><CreateKPI /></td>
          </tr>         
        </table>        
      </div>
    );
  }
}

export default App;
