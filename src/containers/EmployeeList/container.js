import { connect } from 'react-redux';
import EmployeeList from 'components/EmployeeList';
import actions from 'store/features/companyDirectory/actions';

const mapStateToProps = state => ({
  selectedCompany: state.companyDirectory.selectedCompany,
});

export default connect(mapStateToProps)(EmployeeList);

