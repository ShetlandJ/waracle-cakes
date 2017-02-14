import React from 'react';
import request from 'request';
import {browserHistory} from 'react-router';
import Settings from './settings';

class AddCake extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {name: '', comment: '', imageUrl: '', yumFactor: 3};

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const id = target.id;

    this.setState({
      [id]: value
    });
  }

  handleSubmit(event) {
    if (this.state.name.length > 0 && this.state.comment.length > 0 && this.state.imageUrl.length > 0) {
        var options = {
            method: 'post',
            body: this.state,
            json: true,
            url: Settings.apiUrl
        }
        request(options, function(err, response, body) { 
            if (err) {
                alert('A problem occurred adding the cake:' + err);
                return;
            }

            // Successful POST, redirect to home page
            browserHistory.push('/');
        });
    } else {
       alert('Please fill in all the form elements'); 
    }
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
          <h1>Add Cake</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="row form-group">
                <div className="col-md-2"><label htmlFor="name">Name: </label></div>
                <div className="col-md-10"><input type="text" value={this.state.name} onChange={this.handleInputChange} className="form-control" id="name" placeholder="Name" size="50" /></div>
            </div>
            <div className="row form-group">
                <div className="col-md-2"><label htmlFor="comment">Comment: </label></div>
                <div className="col-md-10"><textarea type="text" value={this.state.comment} onChange={this.handleInputChange} className="form-control" id="comment" placeholder="Comment" rows="6" cols="50" /></div>
            </div>
            <div className="row form-group">
                <div className="col-md-2"><label htmlFor="imageUrl">Image URL: </label></div>
                <div className="col-md-10"><input type="text" value={this.state.imageUrl} onChange={this.handleInputChange} className="form-control" id="imageUrl" placeholder="Image URL" size="50" /></div>
            </div>
            <div className="row form-group">
                <div className="col-md-2"><label htmlFor="imageUrl">Yum Factor: </label></div>
                <div className="col-md-10"><select className="form-control" id="yumFactor" value={this.state.yumFactor} onChange={this.handleInputChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select></div>
            </div>
            <div className="row form-group">
                <div className="col-md-2"></div>
                <div className="col-md-10"><input type="submit" value="Add" className="btn btn-default"></input></div>
            </div> 
          </form>
      </div>
    );
  }
};

export default AddCake;