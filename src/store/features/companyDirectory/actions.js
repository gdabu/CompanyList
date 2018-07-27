import types from './types';

function addCompany(newCompany) {
  return {
    type: types.ADD_COMPANY,
    payload: newCompany,
  };
}

export default {
  addCompany,
};
