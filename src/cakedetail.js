import React from 'react';
import request from 'request';
import {Link} from 'react-router';
import Settings from './settings';

module.exports = React.createClass({
  getInitialState() {
    return { cake: { name: "", comment: "", imageUrl: "", yumFactor: 0 } }
  },

  componentWillMount() {
      request(Settings.apiUrl + this.props.params.id, function(error, response, body) {
            var result = JSON.parse(body);
            this.setState({cake: result});
        }.bind(this));
  },

  render() {

    var stars = "";
    for (var i = 1; i <= this.state.cake.yumFactor; i++) {
       stars += "<span class='glyphicon glyphicon-star'></span>";
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3"><img src={this.state.cake.imageUrl} alt={this.state.cake.name} width="200" /></div>
          <div className="col-md-9">
              <h4>{this.state.cake.name}</h4>
              <p>{this.state.cake.comment}</p>
              <p dangerouslySetInnerHTML={{__html: stars}}></p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3"><Link to="/">&lt; Back</Link></div>
        </div>
      </div>
    );
  }
});