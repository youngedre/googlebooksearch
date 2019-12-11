import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from './components/Container';
import Navbar from "./components/Navbar";
import "./App.css"
import Search from "./pages/Search";
import Saved from "./pages/Saved";

function App() {
  return (
    
      <div className="App">
          <Navbar />
          <Container>
            <Router>
              <Switch>
                <Route exact path="/" component={Search} />
                <Route exact path="/books" component={Saved} />
                <Route exact path="/books/:id" component={null} />
              </Switch>
            </Router>
          </Container>
      </div>    
  );
}

export default App;