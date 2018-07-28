import React, { Component } from 'react';
import { Button, Form, Header, Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './styles.less';


const propTypes = {
  companies: PropTypes.array.isRequired,
  addCompany: PropTypes.func.isRequired,
};

class CompanyAddition extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();


    const newCompany = {};
    for (const field in this.refs) {
      newCompany[field] = this.refs[field].value;
    }
    newCompany.employees = [];

    let companyExists = false;
    for (let i = 0; i < this.props.companies.length; i++) {
      if (this.props.companies[i].name === newCompany.name) {
        companyExists = true;
      }
    }

    if (companyExists === false) {
      this.props.addCompany(newCompany);
    } else {
      window.alert('Company already exists');
    }
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <Header as="h3" dividing>Create New Company</Header>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Name:</label>
              <input ref="name" type="text" name="name" required />
            </Form.Field>
            <Form.Field>
              <label>Address:</label>
              <input ref="address" type="text" name="address" required />
            </Form.Field>
            <Form.Field>
              <label>Revenue:</label>
              <input ref="revenue" type="text" name="revenue" required />
            </Form.Field>
            <Form.Field>
              <label>Phone:</label>
              <input ref="phone" type="tel" name="phone" required />
            </Form.Field>
            <Button type="submit">Add</Button>
          </Form>
        </Container>
      </React.Fragment>
    );
  }
}

CompanyAddition.propTypes = propTypes;
export default CompanyAddition;
