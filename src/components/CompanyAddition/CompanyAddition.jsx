import React, { Component } from 'react';
import { Button, Form, Header, Container } from 'semantic-ui-react';
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
        <Container>
          <Header as="h3" dividing>Create New Company</Header>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Name:</label>
              <input ref="name" type="text" name="name" />
            </Form.Field>
            <Form.Field>
              <label>Address:</label>
              <input ref="address" type="text" name="address" />
            </Form.Field>
            <Form.Field>
              <label>Revenue:</label>
              <input ref="revenue" type="text" name="revenue" />
            </Form.Field>
            <Form.Field>
              <label>Phone:</label>
              <input ref="phone" type="tel" name="phone" />
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
