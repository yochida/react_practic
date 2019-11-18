import React from 'react';
import Comment from './components/Comment';
import Show from './components/Show';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route path="/comment">
              <Comment />
            </Route>
            <Route path="/">
              <Show />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
