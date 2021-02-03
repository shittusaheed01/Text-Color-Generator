import './App.css';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom"


import Home from "./components/Home"
import TextGen from "./components/TextGen"
import ColorGen from "./components/ColorGen"
import Error from "./components/ErrorPage"

function App() {
  return (
    <Router>
      <Switch>
      
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/textgen">
        <TextGen />
      </Route>

      <Route path="/colorgen">
        <ColorGen />
      </Route>

      <Route path="/colorgen">
        <ColorGen />
      </Route>

      <Route path="*">
        <Error/>
      </Route>
      
      </Switch>

    </Router>
  );
}

export default App;
