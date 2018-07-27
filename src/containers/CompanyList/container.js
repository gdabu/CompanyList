import { connect } from 'react-redux';
import CompanyList from 'components/CompanyList';

const mapStateToProps = state => ({
  companies: state.companyDirectory.companies,
});

export default connect(mapStateToProps)(CompanyList);

