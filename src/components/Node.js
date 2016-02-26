require('normalize.css');
require('styles/App.css');

import React from 'react';
var Node = React.createClass({

  onNodeClick: function() {
    this.props.nodeIsClicked(this.props.nodeNumber);
  },

  render: function() {
    var position = this.props.position;
    var player = this.props.controllingPlayer;
    var playerStyle = {};
    if (player == 0) {
      playerStyle.width = 20;
      playerStyle.height = 20;
      playerStyle.bkg = "#b79054";
    } else if (player == 1) {
      playerStyle.width = 30;
      playerStyle.height = 30;
      playerStyle.bkg = "#ffffff";
    } else if (player == 2) {
      playerStyle.width = 30;
      playerStyle.height = 30;
      playerStyle.bkg = "#666666";
    }
    var style = {left: position.xPos + '%', top: position.yPos + '%', width: playerStyle.width + 'px', height: playerStyle.height + 'px', backgroundColor: playerStyle.bkg};

    return (
      <div className="node" style={style} onClick={this.onNodeClick}/>
    );
  }
});

export default Node;
