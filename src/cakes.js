import React from 'react';
import request from 'request';
import Cake from './cake';

module.exports = React.createClass({
  getInitialState() {
    return { cakes: [] }
  },

  componentWillMount() {
      request(this.props.url, function(error, response, body) {
            var result = JSON.parse(body);
            this.setState({cakes: result});
        }.bind(this));
  },

  render() {
      var cakes = this.state.cakes.map(function(cake) {
            return <Cake key={cake.id} id={cake.id} name={cake.name} comment={cake.comment} imageUrl={cake.imageUrl} yumFactor={cake.yumFactor} />;
        });

    return (
        <div className="container">
            <h3>Cakes</h3>
            {cakes}
        </div>
    );
  }
});
