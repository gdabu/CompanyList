import React, { Component } from 'react';
import { Container, Header, Form, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const propTypes = {
  addEmployee: PropTypes.func.isRequired,
};

class EmployeeAddition extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const newEmployee = {};
    let selectedCompany = {};
    for (const field in this.refs) {
      if (field !== 'company') {
        newEmployee[field] = this.refs[field].value;
      } else {
        selectedCompany = this.refs[field].value;
      }
    }


    this.props.addEmployee(newEmployee, selectedCompany);
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <Header as="h3" dividing>Add New Employee</Header>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Name:</label>
              <input ref="name" type="text" name="employeeName" />
            </Form.Field>
            <Form.Field>
              <label>Address:</label>
              <input ref="address" type="text" name="employeeAddress" />
            </Form.Field>
            <Form.Field>
              <label>Phone:</label>
              <select ref="company" name="company">
                <option data-value={{ name: 'google' }}>google</option>
                <option data-value={{ name: 'amazon' }}>amazon</option>
              </select>
            </Form.Field>
            <Button type="submit">Add</Button>
          </Form>
        </Container>
      </React.Fragment>
    );
  }
}

EmployeeAddition.propTypes = propTypes;
export default EmployeeAddition;
