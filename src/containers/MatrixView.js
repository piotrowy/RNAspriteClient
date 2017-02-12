import { connect } from 'react-redux';
import MatrixView from './../components/MatrixView';

export default connect(state => state)(MatrixView);