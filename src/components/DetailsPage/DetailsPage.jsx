import React from 'react';
import CompanyDetails from 'containers/CompanyDetails';
import EmployeeList from 'containers/EmployeeList';
import { Container, Header } from 'semantic-ui-react';

function DetailsPage() {
  return (
    <span>
      <CompanyDetails />
      <EmployeeList />
    </span>
  );
}

export default DetailsPage;
