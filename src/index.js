import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home'
import Wods from './pages/wods'
import Wodgirl from './pages/wodgirl'
import Wodhero from './pages/wodhero.jsx'
import Scores from './pages/scores'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const NoMatchRoute = () => <div>404 Page</div>;

ReactDOM.render(
  <Router>
    <Switch>
       <Route path="/" exact component = {Home} />
       <Route path="/wods" exact component={Wods}/>
       <Route path="/wodgirl" exact component={Wodgirl}/>
       <Route path="/wodhero" exact component={Wodhero}/>
       <Route path="/scores" exact component={Scores}/>
       <Route component={NoMatchRoute} />     
    </Switch>  
  </Router>,
    
  
  document.getElementById('root')
);
