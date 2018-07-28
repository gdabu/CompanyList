import React from 'react';
import PropTypes from 'prop-types';
import { Card, Icon, List, Container, Divider, Header } from '../../../node_modules/semantic-ui-react';

const propTypes = {
  selectedCompany: PropTypes.object,
};

function EmployeeList({ selectedCompany }) {
  if (selectedCompany !== null && selectedCompany.employees !== undefined) {
    return (
      <React.Fragment>
        <Container>
          <Header as="h3" dividing>Employees</Header>
          {selectedCompany.employees.map(employee =>
          (
            <Card key={employee.name} >
              <Card.Content header={employee.name} />
              <Card.Content>
                <List>
                  <List.Item icon="map marker alternate" content={employee.address} />
                </List>
              </Card.Content>
            </Card>
            ))}
        </Container>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment />
  );
}

EmployeeList.propTypes = propTypes;
export default EmployeeList;
