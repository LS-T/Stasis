import React from "react";
import{
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';



function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route path='/'exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
