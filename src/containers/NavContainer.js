/**
 * Created by piotrowy on 11.02.2017.
 */
import {connect} from 'react-redux';
import { switchTabAction } from '../actions/TabActions';
import MainNav from './../components/MainNav'

export default connect(
  state => state.tabs,
  dispatch => ({
    switchTab: (tab) => dispatch(switchTabAction(tab))
  })
)(MainNav)