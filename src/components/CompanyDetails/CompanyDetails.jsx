import React from 'react';
import PropTypes from 'prop-types';
import './styles.less';

function CompanyDetails({ selectedCompany }) {
  if (selectedCompany != null) {
    return (
      <React.Fragment>
        <div className="number__wrapper">
          <div className="number__result-title">
            <h1>The Number is:</h1>
          </div>
          <div className="number__result">
            <p>{selectedCompany.name}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment />
  );
}

export default CompanyDetails;
