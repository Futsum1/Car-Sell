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
import EditCarPage from "../../components/EditCarPage/EditCarPage";

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
  // Using map to replace just the puppy that was updated
  const newCarsArray = this.state.cars.map(p =>
    p._id === updatedCar._id ? updatedCar : p
  );
  this.setState(
    { cars: newCarsArray },
    // This cb function runs after state is updated
    () => this.props.history.push("/")
  );
};

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
          handleDeleteCar={this.handleDeleteCar}
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
       <Route
            exact
            path="/edit"
            render={({ location }) => (
              <EditCarPage
                handleUpdateCar={this.handleUpdateCar}
                location={location}
              />
            )}
            />
      </main>
      </Switch>
      </div>
    );
  }
}
export default App;