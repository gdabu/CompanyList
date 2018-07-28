import React from 'react';
import PropTypes from 'prop-types';
import './styles.less';
import { Card, Icon, List, Container, Divider, Header } from '../../../node_modules/semantic-ui-react';

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
            <Card key={company.name} onClick={() => selectCompany(company)} >
              <Card.Content header={company.name} />
              <Card.Content>
                <List>
                  <List.Item icon="map marker alternate" content={company.address} />
                  <List.Item icon="money bill alternate" content={company.revenue} />
                  <List.Item icon="phone" content={company.phone} />
                </List>
              </Card.Content>
              <Card.Content extra>
                <Icon name="users" />
              4 Friends
              </Card.Content>
            </Card>

            ))}
      </Container>


    </React.Fragment>
  );
}

CompanyList.propTypes = propTypes;
export default CompanyList;
