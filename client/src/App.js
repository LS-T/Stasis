import React from "react";
import{
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Signup from './pages/Signup/index.jsx';



function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route path='/'exact component={Home} />
          <Route path='/signup' exact component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
