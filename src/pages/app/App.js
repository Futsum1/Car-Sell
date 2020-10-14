import React, { Component } from 'react';
import './App.css';
import { Route, Switch, NavLink } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
// import MainPage from '../MainPage/MainPage';
import * as carAPI from "../../services/cars-api";
import CarListPage from "../../components/CarListPage/CarListPage";
import AddCarPage from "../../components/AddCarPage/AddCarPage";
import CarDetailPage from "../../components/CarDetailPage/CarDetailPage";

class App extends Component {
  constructor() {
    super();
    this.state = {
    user: userService.getUser(),
    cars: [],
  };
}

async componentDidMount() {
  const cars = await carAPI.getAll();
  this.setState({ cars });
}

handleAddCar = async newCrData => {
  const newCr = await carAPI.create(newCrData);
  this.setState(state => ({
    cars: [...state.cars, newCr]
  }),
  () => this.props.history.push('/'));
 }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          CAR RENT
      <nav>
      <NavLink exact to="/">
        CARS LIST
      </NavLink>
      <NavLink exact to="/add">
        ADD CAR
      </NavLink>
      <NavBar user={this.state.user}
        handleLogout={this.handleLogout}
         />
      </nav>
      </header>

      <Switch>
      <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
      <Route exact path='/login' render={({ history }) => 
            <LoginPage
              handleSignupOrLogin={this.handleSignupOrLogin}
              history={history}
            />
           }/>
        <main>
          <Route 
          exact 
          path='/' 
          render={() => <CarListPage cars={this.state.cars}
            />
          } />
      <Route 
      exact 
      path='/add' 
      render={() => <AddCarPage handleAddCar={this.handleAddCar}
      />
      } />
      <Route 
      exact 
      path='/details' 
      render={({location}) => <CarDetailPage location={location}/>
       } />
      </main>
      </Switch>
      </div>
    );
  }
}
export default App;