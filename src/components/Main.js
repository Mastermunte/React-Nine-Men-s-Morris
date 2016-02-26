require('normalize.css');
require('styles/App.css');

import React from 'react';
import Board from './Board';

class App extends React.Component{

  render() {
    return (
      <div>
      	<Board />
      </div>
    );
  }

}

export default App;
