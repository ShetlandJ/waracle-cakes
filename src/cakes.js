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
          if (error) {
              alert('A problem occurred fetching the data');
              return;
          }
          
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
            <div className="row">
                <div className="col-md-2"><Link to="/add" className="btn btn-primary">Add Cake</Link></div>
                <div className="col-md-10"><h1>Cakes</h1></div>
            </div>

            {cakes}
        </div>
    );
  }
});
