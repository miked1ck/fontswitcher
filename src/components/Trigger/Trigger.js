import React from 'react';
import {connect} from 'react-redux';


// Component
///////////////////////////

class Trigger extends React.Component {
  _handleOnClick(e) {
    this.props._toggleMenu();
  }

  render() {
    return (
      <button type="button" onClick={(e) => this._handleOnClick(e)} className={(this.props.isMenuToggled) ? 'Trigger toggled' : 'Trigger'}>Aa</button>
    );
  }
}


// Store
///////////////////////////

const triggerState = (state) => {
  return { isMenuToggled: state.isMenuToggled };
};

const triggerDispatch = (dispatch) => {
  return {
    _toggleMenu: () => {
      dispatch({ type: 'TOGGLE_MENU' });
    }
  }
};


// Export
///////////////////////////

export default connect(triggerState, triggerDispatch)(Trigger);
