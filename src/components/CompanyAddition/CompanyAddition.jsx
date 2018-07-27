import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.less';

const propTypes = {
  addCompany: PropTypes.func.isRequired,
};

class CompanyAddition extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();

    const formData = {};
    for (const field in this.refs) {
      formData[field] = this.refs[field].value;
    }

    this.props.addCompany(formData);
  }

  render() {
    // const {	addCompany } = this.props;
    return (
      <React.Fragment>
        {/* Look into redux form */}
        <form onSubmit={this.handleSubmit}>
          <input ref="name" type="text" name="name" />
          <input ref="address" type="text" name="address" />
          <input ref="revenue" type="text" name="revenue" />
          <input ref="phone" type="tel" name="phone" />

          <input type="submit" value="Submit" />
        </form>
      </React.Fragment>
    );
  }
}

CompanyAddition.propTypes = propTypes;
export default CompanyAddition;
