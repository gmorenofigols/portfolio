import React from 'react';
import './App.css';
import Header from './components/Header'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const App = () => {
  return (
    <div>
      <Header/>
      <CssBaseline />
      <Container disableGutters = "true" maxWidth ="false">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '50vh'}} />
      </Container>
      <Container disableGutters = "true" maxWidth ="false">
        <Typography component="div" style={{ backgroundColor: '#f000ff', height: '50vh'}} />
      </Container>
      <Container disableGutters = "true" maxWidth ="false">
        <Typography component="div" style={{ backgroundColor: '#123456', height: '50vh'}} />
      </Container>
    </div>
  );
}

export default App;
