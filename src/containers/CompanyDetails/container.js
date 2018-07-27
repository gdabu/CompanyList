import { connect } from 'react-redux';
import CompanyDetails from 'components/CompanyDetails';

const mapStateToProps = state => ({
  selectedCompany: state.companyDirectory.selectedCompany,
});

export default connect(mapStateToProps)(CompanyDetails);

