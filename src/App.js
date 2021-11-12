import React, { Component } from 'react';
import './App.css';

import RegisterForm from './components/RegisterForm/RegisterForm';
import 'fontsource-roboto';
import { Container, Typography } from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">Register form</Typography>
        <RegisterForm onSubmit={onSubmit}/>
      </Container>
    );
  }
}

function onSubmit(data) {
  console.log(data);
}

export default App;
