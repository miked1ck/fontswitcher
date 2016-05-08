import {fonts} from './data/fonts.json';


// Init state
///////////////////////////

const init = {
  'font': fonts[0].name,
  'isMenuToggled': false
};


// Actions
///////////////////////////

const actions = {
  switch_font: function(state, action) {
    return { ...state, font: action.font };
  },

  toggle_menu: function(state, action) {
    return {...state, isMenuToggled: !state.isMenuToggled};
  }
};


// Reducer
///////////////////////////

function reducer(state = init, action) {
  switch (action.type) {
    case 'SWITCH_FONT':
      return actions.switch_font(state, action);
    case 'TOGGLE_MENU':
      return actions.toggle_menu(state, action);
    default:
      return state;
  }
}


// Export
///////////////////////////

export default reducer;
