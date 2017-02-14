import React from 'react';
import {browserHistory} from 'react-router';
import './cakelistitem.css';

var CakeListItem = React.createClass({
  handleClick() {
    var detailLink = "/detail/" + this.props.id;
    browserHistory.push(detailLink);
  },

  render() {
    return (
        <div className="row cakelistitemrow" onClick={this.handleClick}>
          <div className="col-md-3"><img src={this.props.imageUrl} alt={this.props.name} width="200" /></div>
          <div className="col-md-9"><h4>{this.props.name}</h4></div>
        </div>
    );
  }
});

export default CakeListItem;