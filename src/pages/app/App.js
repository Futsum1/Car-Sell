import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, NavLink } from "react-router-dom";

class App extends Component {
  state = {
    cars: [],
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
             Car Rent
          <nav>
            <NavLink exact to='/'>CARS LIST</NavLink>
          </nav>
        </header>
        <main>
          <Route exact path='/' render={() => 
            
              <> </>
           
          } />
        </main>
      </div>
    );
  }
}
export default App;