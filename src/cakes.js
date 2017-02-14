import React from 'react';
import request from 'request';
import {Link} from 'react-router';
import CakeListItem from './cakelistitem';
import Settings from './settings';

module.exports = React.createClass({
  getInitialState() {
    return { cakes: [] }
  },

  componentWillMount() {
      request(Settings.apiUrl, function(error, response, body) {
            var result = JSON.parse(body);
            this.setState({cakes: result});
        }.bind(this));
  },

  render() {
    var cakes = this.state.cakes.map(function(cake) {
        return <CakeListItem key={cake.id} id={cake.id} name={cake.name} comment={cake.comment} imageUrl={cake.imageUrl} yumFactor={cake.yumFactor} />;
    });

    return (
        <div className="container">
            <h3>Cakes</h3>
            <Link to="/add">Add Cake</Link>
            {cakes}
        </div>
    );
  }
});
