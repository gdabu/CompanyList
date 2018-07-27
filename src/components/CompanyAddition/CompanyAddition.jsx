import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.less';

const propTypes = {
  addCompany: PropTypes.func.isRequired,
};

class CompanyAddition extends Component {
  render() {
    const {	addCompany } = this.props;
    return (
      <button onClick={() => addCompany({ name: 'amazon', address: 'argyle st.' })} >add company</button>
    );
  }
}


CompanyAddition.propTypes = propTypes;
export default CompanyAddition;
