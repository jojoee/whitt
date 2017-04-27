import React, { PropTypes } from 'react';
import {
  Link,
  IndexLink,
} from 'react-router';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
      <div>
        <ol>
          <li><IndexLink to="/">Home</IndexLink></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/about">AboutPage</Link></li>
          <li><Link to="/404">NotFoundPage</Link></li>
        </ol>
        <br/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
