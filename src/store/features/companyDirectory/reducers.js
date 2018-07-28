import types from './types';
import { createDefaultReducer } from '../../helpers';

const initialState = {
  companies: [
    {
      name: 'google', address: '999 homer dr.', revenue: '10000', phone: '(604) 654-1234',
    },
  ],
  selectedCompany: null,
};

const addCompany = (state, payload) => ({
  ...state,
  companies: state.companies.concat(payload),
});

const selectCompany = (state, payload) => ({
  ...state,
  selectedCompany: payload,
});

const actionMap = {
  [types.ADD_COMPANY]: addCompany,
  [types.SELECT_COMPANY]: selectCompany,
};

export default createDefaultReducer(actionMap, initialState);
