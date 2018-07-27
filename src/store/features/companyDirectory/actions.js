import types from './types';

function addCompany() {
  return {
    type: types.INCREMENT_NUMBER,
  };
}

export default {
  addCompany,
};
