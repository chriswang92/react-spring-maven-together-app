import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NavBar from '../components/NavBar';
import { setSelectedBlogId } from '../../blog/actions/RecordViewActions/recordViewAction';
import { selectedBlogIdSelector } from '../../blog/selectors/index';

const mapStateToProps = (state, props) => ({
  selectedBlogId: selectedBlogIdSelector(state)
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ setSelectedBlogId }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
