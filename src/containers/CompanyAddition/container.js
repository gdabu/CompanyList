import { connect } from 'react-redux';
import CompanyAddition from 'components/CompanyAddition';
import actions from 'store/features/companyDirectory/actions';

const mapDispatchToProps = dispatch => ({
  addCompany: () => dispatch(actions.addCompany()),
});

export default connect(null, mapDispatchToProps)(CompanyAddition);

