import React from 'react';
import PropTypes from 'prop-types';
import './styles.less';

const propTypes = {
  companies: PropTypes.array,
};

function CompanyList({ companies, selectCompany }) {
  return (
    <React.Fragment>
      <ul>
        {companies.map(company => <li onClick={() => selectCompany(company)} key={company.name}>{company.name} - {company.address}</li>)}
      </ul>
    </React.Fragment>
  );
}

CompanyList.propTypes = propTypes;
export default CompanyList;
