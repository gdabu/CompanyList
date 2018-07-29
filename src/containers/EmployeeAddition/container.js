import { connect } from 'react-redux';
import EmployeeAddition from 'components/EmployeeAddition';
import actions from 'store/features/companyDirectory/actions';


const mapDispatchToProps = dispatch => ({
  addEmployee: (newEmployee, selectedCompany) => dispatch(actions.addEmployee(newEmployee, selectedCompany)),
});

const mapStateToProps = state => ({
  companies: state.companyDirectory.companies,
});


export default connect(mapStateToProps, mapDispatchToProps)(EmployeeAddition);

