var React = require('react');
var ListISS = require('./components/ListISS.react');

var data = [];

React.render(
    <ListISS data={data}/>,
    document.getElementById('content')
);