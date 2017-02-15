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
        <tr className="cakelistitemrow" onClick={this.handleClick}>
          <td><img src={this.props.imageUrl} alt={this.props.name} width="100" /></td>
          <td className="col-md-10"><h4>{this.props.name}</h4></td>
        </tr>
    );
  }
});

export default CakeListItem;