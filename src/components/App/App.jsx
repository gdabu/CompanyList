import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import HomePage from 'containers/HomePage';
import DetailsPage from 'components/DetailsPage';
import NumberPage from 'containers/NumberPage';
import './styles.less';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Menu stackable>
            
            <Menu.Item>
              <img src={require('../../../public/wellin5_logo.png')} />
            </Menu.Item>
            
            <Menu.Item name="features">
              <Link to="/">Home</Link>
            </Menu.Item>

            <Menu.Item name="testimonials">
              <Link to="/details">Details</Link>
            </Menu.Item>
          </Menu>

          <Route exact path="/" component={HomePage} />
          <Route path="/details" component={DetailsPage} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
