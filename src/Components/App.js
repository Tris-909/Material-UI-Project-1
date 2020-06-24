import React, {useState} from 'react';
import {ThemeProvider} from '@material-ui/styles';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import theme from '../Components/UI/Theme';
import Header from '../Components/UI/header';
import Footer from '../Components/UI/footer';
import LandingPage from '../Components/LandingPage';
import Services from './Services';
import CustomSoftware from './CustomSoftware';
import MobileApps from './MobileApps';
import WebsitesDev from './WebsitesDev';
import Revolution from  './Revolution';

function App() {
  const [isActive,setIsActive] = useState(0); // This control which tab is actived and add CSS to it
  const [selectedIndex, setSelectedIndex] = useState(0); // Control which MenuItem inside Menu is actived and add CSS to it

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header isActive={isActive} setIsActive={setIsActive} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        <Switch>
          <Route exact path="/" render={(props) => <LandingPage {...props} setIsActive={setIsActive} setSelectedIndex={setSelectedIndex}/>}/>
          <Route exact path="/services" render={(props) => <Services {...props} setIsActive={setIsActive} setSelectedIndex={setSelectedIndex} />}/>
          <Route exact path="/customsoftware" render={(props) => <CustomSoftware {...props} setIsActive={setIsActive} setSelectedIndex={setSelectedIndex} />}/>
          <Route exact path="/mobileapps" render={(props) => <MobileApps {...props} setIsActive={setIsActive} setSelectedIndex={setSelectedIndex}/>} />
          <Route exact path="/websites" render={(props) => <WebsitesDev {...props} setIsActive={setIsActive} setSelectedIndex={setSelectedIndex}/>} />
          <Route exact path="/revolution" render={(props) => <Revolution {...props} setIsActive={setIsActive} setSelectedIndex={setSelectedIndex}/>} />
          <Route exact path="/about" component={() => <div>About Us</div>}/>
          <Route exact path="/contact" component={() => <div>Contact</div>}/>
          <Route exact path="/estimate" component={() => <div>Estimate</div>}/>
        </Switch>
        <Footer isActive={isActive} setIsActive={setIsActive} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
