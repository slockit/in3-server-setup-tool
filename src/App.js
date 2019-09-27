import React from 'react';
import './App.css';
import 'typeface-roboto';
import AppBar from './Components/AppBar'
import PaperComp from './Components/PaperComp'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import SettingsContainer from './Containers/SettingsContainer';
import InfoFancyCard from './Components/InfoFancyCard'

function App() {
  return (
    <div className="App">
      <AppBar />

      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <br />
          <InfoFancyCard></InfoFancyCard>
          <br />
          <SettingsContainer></SettingsContainer>
        </Container>
      </React.Fragment>

    </div>
  );
}

export default App;
