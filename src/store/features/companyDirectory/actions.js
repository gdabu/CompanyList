import types from './types';

function addCompany(newCompany) {
  return {
    type: types.ADD_COMPANY,
    payload: newCompany,
  };
}

function selectCompany(company) {
  return {
    type: types.SELECT_COMPANY,
    payload: company,
  };
}

export default {
  addCompany,
  selectCompany,
};
