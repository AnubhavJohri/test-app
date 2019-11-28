import {React , Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router , Redirect ,Switch , Route} from 'react-dom';
import Home from "./components/Home";
import './App.css';

function App() {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route exact path='/**' render={()=><Redirect to="/home"/>} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
