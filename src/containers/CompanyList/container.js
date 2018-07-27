import { connect } from 'react-redux';
import CompanyList from 'components/CompanyList';
import actions from 'store/features/companyDirectory/actions';

const mapStateToProps = state => ({
  companies: state.companyDirectory.companies,
});

const mapDispatchToProps = dispatch => ({
  selectCompany: selectedCompany => dispatch(actions.selectCompany(selectedCompany)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyList);

