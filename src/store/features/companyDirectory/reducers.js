import types from './types';
import { createDefaultReducer } from '../../helpers';

const initialState = {
  companies: [
    { name: 'google', address: '999 homer dr.' },
  ],
};

const addCompany = (state, payload) => ({
  ...state,
  companies: state.companies.concat({ name: 'amazon', address: 'argyle st.' }),
});

const actionMap = {
  [types.ADD_COMPANY]: addCompany,
};

export default createDefaultReducer(actionMap, initialState);
