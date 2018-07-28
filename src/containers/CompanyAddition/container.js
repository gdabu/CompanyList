import { connect } from 'react-redux';
import CompanyAddition from 'components/CompanyAddition';
import actions from 'store/features/companyDirectory/actions';

const mapStateToProps = state => ({
  companies: state.companyDirectory.companies,
});

const mapDispatchToProps = dispatch => ({
  addCompany: newCompany => dispatch(actions.addCompany(newCompany)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyAddition);

