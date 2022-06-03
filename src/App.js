import './App.css';
import Header from './Header';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Exhibitions from './Exhibitions';
import Home from './Home/Home';
import AddOwn from './AddOwn';

function App() {
  return (

    <Router>
    <div className="app">
      
        <Header/>
        <Switch>
           <Route exact path='/exhibitions'>
            <Exhibitions />
          </Route>

          <Route exact path='/'>
            <Home />
            
            </Route>

          <Route exact path='/addown'>
            <AddOwn />
          </Route>
        </Switch>
        
        </div>
        </Router>
  
  
  );
}

export default App;
