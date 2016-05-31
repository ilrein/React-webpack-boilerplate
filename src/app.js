import React from 'react';
import { render } from 'react-dom';

// vendor libraries
require('../vendor/normalize.css');
// added jquery directly to the file below to solve dependencies
// and hammerjs as well
require ('../vendor/material/js/bin/materialize.min.js');
// require ('../vendor/material/fonts/roboto/materialize.scss');
require ('../vendor/material/sass/materialize.scss');

class App extends React.Component {
  render() {
    return (
      <div>app</div>
    )
  }
}

render(<App />, document.getElementById('app'));
