require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Gallery from './Gallery'


class AppComponent extends React.Component {
  render() {
    return (
      <Gallery/>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
