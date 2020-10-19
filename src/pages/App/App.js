import React, { Component } from 'react';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import * as carAPI from "../../services/cars-api";
import CarListPage from "../../components/CarListPage/CarListPage";
import AddCarPage from "../../components/AddCarPage/AddCarPage";
import CarDetailPage from "../../components/CarDetailPage/CarDetailPage";
import EditCarPage from "../../components/EditCarPage/EditCarPage";
import CheckOut from '../../components/CheckOut/CheckOut';
import SuccessPage from '../../components/SuccessPage/SuccessPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      cars: [],
    };
  }

  async componentDidMount() {
    const cars = await carAPI.getAllCars();
    this.setState({ cars });
  }

  handleAddCar = async newCrData => {
    const newCr = await carAPI.create(newCrData);
    this.setState(state => ({
      cars: [...state.cars, newCr]
    }),
      () => this.props.history.push('/'));
  }

  handleDeleteCar = async id => {
    await carAPI.deleteOne(id);
    this.setState(
      state => ({
        // Yay, filter returns a NEW array
        cars: state.cars.filter(p => p._id !== id),
      }),
      () => this.props.history.push("/")
    );
  };

  handleUpdateCar = async updatedCrData => {
    const updatedCar = await carAPI.update(updatedCrData);
    const newCarsArray = this.state.cars.map(p =>
      p._id === updatedCar._id ? updatedCar : p
    );
    this.setState(
      { cars: newCarsArray },
      () => this.props.history.push("/")
    );
  };

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null, cars: [] });
  }

  handleSignupOrLogin = async () => {
    const user = await userService.getUser()
    const cars = await carAPI.getAllUserCars(user && user._id);
    this.setState({ user, cars });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          CAR SELL
      <nav>
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
          } />
          <Route exact path='/login' render={({ history }) =>
            <LoginPage
              handleSignupOrLogin={this.handleSignupOrLogin}
              history={history}
            />
          } />
          <main className="main-App">
            <Route
              exact
              path='/'
              render={({history}) => this.state.user ? <CarListPage cars={this.state.cars} user={this.state.user}
                handleDeleteCar={this.handleDeleteCar}
              /> :
              <LoginPage handleSignupOrLogin={this.handleSignupOrLogin}
              history={history} />
              } />
            <Route
              exact
              path='/add'
              render={() => this.state.user.isAdmin ? <AddCarPage
                user={this.state.user}
                handleAddCar={this.handleAddCar}
              /> : <Redirect to='/' />
              } />
            <Route
              exact
              path='/details'
              render={({ location, history }) => this.state.user ? <CarDetailPage location={location} /> :
              <LoginPage handleSignupOrLogin={this.handleSignupOrLogin}
              history={history} />
              } />
            <Route
              exact
              path='/checkout'
              render={({ location, history}) => this.state.user ? <CheckOut location={location} /> :
              <LoginPage handleSignupOrLogin={this.handleSignupOrLogin}
              history={history} /> } />
            <Route
              exact
              path='/success'
              render={({ location }) => <SuccessPage location={location} />
              } />
            <Route
              exact
              path="/edit"
              render={({ location }) => (
                this.state.user.isAdmin ?
                  <EditCarPage
                    handleUpdateCar={this.handleUpdateCar}
                    location={location}
                  /> : <Redirect to='/' />
              )}
            />
          </main>
        </Switch>
      </div>
    );
  }
}
export default App;