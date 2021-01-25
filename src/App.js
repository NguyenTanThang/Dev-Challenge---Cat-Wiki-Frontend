import './App.css';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Top from "./pages/Top";
import Details from "./pages/Details";
import Navbar from "./components/partials/Navbar";
import Footer from "./components/partials/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/top" component={Top}/>
          <Route path="/breed-details/:breedID" component={Details}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
