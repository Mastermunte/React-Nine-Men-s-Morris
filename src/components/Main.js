require('normalize.css');
require('styles/App.css');

import React from 'react';
import Board from './Board';

var App = React.createClass({

  render: function() {
    return (
      <div>
      <Board />
      </div>
    );
  }

});

export default App;
