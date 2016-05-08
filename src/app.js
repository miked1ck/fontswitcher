import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import WebFont from 'webfontloader';


// Load fonts
///////////////////////////

import {fonts} from './data/fonts.json';


// Components
///////////////////////////

import Trigger from './components/Trigger/Trigger.js';
import Menu from './components/Menu/Menu.js';
import Demo from './components/Demo/Demo.js';


// App Reducer
///////////////////////////

import AppReducer from './app.reducer.js';


// App Component
///////////////////////////

class App extends React.Component {
  constructor() {
    super();

    const fonts_to_load = fonts.filter(function(font) {
      return font.needs_loaded;
    }).map(function(font) {
      return font.name.replace(' ', '+') + '::latin';
    });

    WebFont.load({
     google: { families: fonts_to_load }
   });
  }

  render() {
    return (
      <Provider store={createStore(AppReducer)}>
        <div>
          <div className="switcher">
            <Trigger />
            <Menu />
          </div>

          <Demo />
        </div>
      </Provider>
    );
  }
}


// Bind to DOM
///////////////////////////

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
