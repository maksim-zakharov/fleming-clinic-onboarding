import * as React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Index from './pages/Register';
import './assets/fleming.less';
import ThanksPage from './pages/ThanksPage';

const App = () => {

  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/thanks" component={ThanksPage} />
        </Switch>
      </Router>
  );
};

export default App;
