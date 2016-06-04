'use strict';

var React = require('react');
var Header = require('./common/Header');

var App = React.createClass({
  
  render: function () {
    
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
    
  }
  
});

module.exports = App;
