import React from 'react';
import './App.css';
import Header from './components/Header'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import axios from 'axios';

const App = () => {

  axios
    .get('http://localhost:3001/notes')
    .then( response => {
      console.log(response.data);
    })

  return (
    <div className = "main-wrapper">
      <Header className = "header" name = "header"/>
      <CssBaseline />
      <Container disableGutters = {true} maxWidth = {false}>
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '50vh'}} />
      </Container>
      <CssBaseline />
      <Container disableGutters = {true} maxWidth = {false}>
        <Typography component="div" style={{ backgroundColor: '#f000ff', height: '50vh'}} />
      </Container>
      <CssBaseline />
      <Container disableGutters = {true} maxWidth = {false}>
        <Typography component="div" style={{ backgroundColor: '#123456', height: '50vh'}} />
      </Container>
      <Container disableGutters = {true} maxWidth = {false}>
        <Typography component="div" style={{ backgroundColor: '#f000ff', height: '50vh'}} />
      </Container>
    </div>  
  );
}

export default App;
