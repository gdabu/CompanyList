import React from 'react';
import PropTypes from 'prop-types';
import { Header, Icon, Container, Card, List } from 'semantic-ui-react';
import './styles.less';

function CompanyDetails({ selectedCompany }) {
  if (selectedCompany != null) {
    return (
      <React.Fragment>
        <Container>
          <Header as="h3" dividing>Profile Overview</Header>

          <Card >
            <Card.Content header={selectedCompany.name} />
            <Card.Content>
              <List>
                <List.Item icon="map marker alternate" content={selectedCompany.address} />
                <List.Item icon="money bill alternate" content={selectedCompany.revenue} />
                <List.Item icon="phone" content={selectedCompany.phone} />
              </List>
            </Card.Content>
            <Card.Content extra>
              <Icon name="users" />
              {selectedCompany.employees.length} Employees
            </Card.Content>
          </Card>
        </Container>

      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <Container textAlign="center" >
        <Header as="h2" icon>
          <Icon name="warning sign" />
    No Company Selected
    <Header.Subheader>Go to Home page and select a company</Header.Subheader>
        </Header>
      </Container>
    </React.Fragment>
  );
}

export default CompanyDetails;
