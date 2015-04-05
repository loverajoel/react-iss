var React = require('react');
var Distance = require('../utils/Distance');
var IssApi = require('../utils/IssAPI');

var Item = React.createClass({
    render: function() {
        return(
            <li><span>{this.props.data.name}</span><span>{this.props.data.distance}</span></li>
            )
    }
});

var ListISS = React.createClass({
    getInitialState: function() {
        return {data: []};
    },
    loadData: function() {
        var self = this;
        IssApi.get(function(resp) {
            self.setState({data: Distance.getDistances(resp)});
        });
    },
    componentDidMount: function() {
        setInterval(this.loadData, 2000);
    },
    render: function() {
        var listNodes = this.state.data.map(function(item) {
            return (
                <Item data={item}/>
                )
        })
        return (<ul>{listNodes}</ul>
        )
    }
});

module.exports = ListISS;