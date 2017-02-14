import React from 'react';
import {Link} from 'react-router';

var CakeListItem = React.createClass({

  render() {
    var detailLink = "/detail/" + this.props.id;

    return (
        <div className="row">
          <div className="col-md-3"><Link to={detailLink}><img src={this.props.imageUrl} alt={this.props.name} width="200" /></Link></div>
          <div className="col-md-9"><Link to={detailLink}><h4>{this.props.name}</h4></Link></div>
        </div>
    );
  }
});

export default CakeListItem;