import React from 'react';
import PropTypes from 'prop-types';
import './styles.less';
import { Card, Icon, List, Container, Divider, Header } from '../../../node_modules/semantic-ui-react';
import { Link } from 'react-router-dom';

const propTypes = {
  companies: PropTypes.array,
};

function CompanyList({ companies, selectCompany }) {
  return (
    <React.Fragment>
      <Container>
        <Header as="h3" dividing>Companies</Header>
        {companies.map(company =>
          (
            <Link to="/details">
              <Card key={company.name} onClick={() => selectCompany(company)} >
                <Card.Content header={company.name} />
                <Card.Content>
                  <List>
                    <List.Item icon="map marker alternate" content={company.address} />
                    <List.Item icon="money bill alternate" content={company.revenue} />
                    <List.Item icon="phone" content={company.phone} />
                    <List.Item />
                  </List>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="users" />
                  {company.employees.length} Employees
                </Card.Content>
              </Card>
            </Link>

            ))}
      </Container>


    </React.Fragment>
  );
}

CompanyList.propTypes = propTypes;
export default CompanyList;
