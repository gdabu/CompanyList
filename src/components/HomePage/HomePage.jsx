import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.less';
import CompanyList from '../../containers/CompanyList';
import CompanyAddition from '../../containers/CompanyAddition';
import CompanyDetails from '../../containers/CompanyDetails';
import { Grid } from '../../../node_modules/semantic-ui-react';

const propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  resetNumberToZero: PropTypes.func.isRequired,
};

class HomePage extends Component {
  render() {
    const {	increment, decrement, resetNumberToZero } = this.props;
    return (
      <React.Fragment>
        <div className="home__wrapper">


          <div className="ui stackable mobile reversed twelve column centered grid">
            <div className="nine wide column" ><CompanyList /></div>
            <div className="three wide column" ><CompanyAddition /></div>
          </div>

        </div>
      </React.Fragment>
    );
  }
}

HomePage.propTypes = propTypes;
export default HomePage;
