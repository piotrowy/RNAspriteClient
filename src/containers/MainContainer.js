/**
 * Created by piotrowy on 11.02.2017.
 */
import { connect } from 'react-redux';
import Main from './../components/Main';

export default connect(state => state.tabs)(Main);