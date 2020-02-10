import React from 'react';
import Navigation from './components/Navigation/Navigation';
//import Login from './components/Login/Login';
import Signin from './components/Signin/Signin';
import Register from './components/Signin/Register';
import AdminRegistration from './components/Admin/AdminRegistration';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      route: 'Signin',
      isSignedIn: false,//if true , appear SignOut button
      users: '',
      user: {
        id: '',
        name: '',
        email: ''
      }
    }
  }

  loadUser = (user) => {
    this.setState({
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    })
  }

  getDBUsers = (users) => {
    this.setState({ users: users })
  }

  getUsers() {
    return this.state.users
  }

  onRouteChange = (route) => {
    if (route === 'SignOut' || route === 'Signin' || route === 'Register') {
      this.setState({ isSignedIn: false })
    } else {
      this.setState({ isSignedIn: true })
    }

    this.setState({ route: route })
  }

  render() {
    return (
      <div className="App">
        <Navigation
          isSignedIn={this.state.isSignedIn}
          onRouteChange={this.onRouteChange} />
        {
          this.state.route === 'Signin'
            ? <Signin onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
            : (
              this.state.route === 'Register'
                ? <Register onRouteChange={this.onRouteChange} />
                : (
                  this.state.route === 'AdminRegistration'
                    ? <AdminRegistration />
                    : <Signin />
                )
            )
        }
      </div>
    );
  }

}

export default App;
