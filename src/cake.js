import React, { Component } from 'react';

class Cake extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-3"><img src={this.props.imageUrl} alt={this.props.name} width="200" /></div>
        <div className="col-md-9"><h4>{this.props.name}</h4></div>
    </div>
    );
  }
}

export default Cake;