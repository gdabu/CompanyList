import types from './types';
import { createDefaultReducer } from '../../helpers';

const initialState = {
  companies: [
    {
      name: 'google',
      address: '999 homer dr.',
      revenue: '10000',
      phone: '(604) 654-1234',
      employees: [
        {
          name: 'Geoff Dabu',
          address: '12345 Longlake Dr.',
        },
      ],
    },
  ],
  selectedCompany: null,
};

const addCompany = (state, payload) => ({
  ...state,
  companies: state.companies.concat(payload),
});

const addEmployee = (state, payload) => ({
  ...state,
  companies: state.companies.map((company) => {
    if (company.name !== payload.company) {
      return company;
    }
    return { ...company, employees: company.employees.concat(payload.employee) };
  }),
});

const selectCompany = (state, payload) => ({
  ...state,
  selectedCompany: payload,
});

const actionMap = {
  [types.ADD_COMPANY]: addCompany,
  [types.SELECT_COMPANY]: selectCompany,
  [types.ADD_EMPLOYEE]: addEmployee,
};

export default createDefaultReducer(actionMap, initialState);
