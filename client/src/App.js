import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Fib from './Fib';
import OtherPage from './OtherPage';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other Page</Link>
          <Route exact path="/" component={Fib} />
          <Route path="/otherpage" component={OtherPage} />
        </>
      </Router>
    );
  }
}

export default App;
