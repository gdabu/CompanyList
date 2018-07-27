import React from 'react';
import PropTypes from 'prop-types';
import './styles.less';

const propTypes = {
  number: PropTypes.number,
};

function CompanyList({ companies }) {
  return (
    <React.Fragment>
      <ul>
        {companies.map(company => <li key={company.name}>{company.name} - {company.address}</li>)}
      </ul>
    </React.Fragment>
  );
}

CompanyList.propTypes = propTypes;
export default CompanyList;
