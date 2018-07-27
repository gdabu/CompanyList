import { connect } from 'react-redux';
import CompanyAddition from 'components/CompanyAddition';
import actions from 'store/features/companyDirectory/actions';

const mapDispatchToProps = dispatch => ({
  addCompany: newCompany => dispatch(actions.addCompany(newCompany)),
});

export default connect(null, mapDispatchToProps)(CompanyAddition);

