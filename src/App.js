import React, { Component, Fragment } from 'react';
import './App.css';

import RegisterForm from './components/RegisterForm/RegisterForm';

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>Register form</h1>
        <RegisterForm/>
      </Fragment>
    );
  }
}

export default App;
