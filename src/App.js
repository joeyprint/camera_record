import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import CameraRecord from './pages/camera_record'
import Test from './pages/test'
import NotFound from './pages/error/not_found.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Test} />
          <Route exact path="/camera" component={CameraRecord} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
