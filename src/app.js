import React from 'react';
import { render } from 'react-dom';

// sheets
require('../vendor/normalize.css');

class App extends React.Component {
  render() {
    return (
      <div>app</div>
    )
  }
}

render(<App />, document.getElementById('app'));
