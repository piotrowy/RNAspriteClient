import { connect } from 'react-redux';
import Input from './../components/Input';

export default connect(state => state.tabs)(Input);