import React from 'react';
import {connect} from 'react-redux';


// Data
///////////////////////////

import {fonts} from '../../data/fonts.json';


// Component
///////////////////////////

class Menu extends React.Component {
  _handleClick(e) {
    this.props._switchFont(e.target.value);
    this.props._toggleMenu();
  }

  render() {
    return (
      <ul className="Menu" hidden={!this.props.isMenuToggled}>
        {
          fonts.map(function(item, index) {
            return (
              <li key={index} className={(item.name === this.props.font) ? 'Menu__font selected' : 'Menu__font'}>
                <label for="font" style={{'fontFamily': item.css_name}}>
                  <input type="radio" name="font" value={item.name} checked={item.name === this.props.font} onClick={(e) => this._handleClick(e)} />
                  <span className="Menu__fontName">{item.name}</span>
                </label>
              </li>
            )
          }.bind(this))
        }
      </ul>
    );
  }
}


// Store
///////////////////////////

const menuState = (state) => {
  return { font: state.font, isMenuToggled: state.isMenuToggled };
};

const menuDispatch = (dispatch) => {
  return {
    _switchFont: (font) => {
      dispatch({ type: 'SWITCH_FONT', font: font });
    },
    _toggleMenu: () => {
      dispatch({ type: 'TOGGLE_MENU' });
    }
  }
};


// Export
///////////////////////////

export default connect(menuState, menuDispatch)(Menu);
