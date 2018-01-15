import React from 'react';
import {Redirect} from 'react-router-dom';
import request from 'request';
import {Link} from 'react-router-dom';


class AddCake extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      comment: '',
      imageUrl: '',
      yumFactor: 1,
      confirmation: '',
      redirect: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
  }

  handleCancel(event){
    <Redirect to="/"/>
  }

  handleSubmit(event) {
    if (this.state.name.length > 0 && this.state.comment.length > 0 && this.state.imageUrl.length > 0) {
      var options = {
        method: 'POST',
        body: this.state,
        json: true,
        url: "http://ec2-52-209-201-89.eu-west-1.compute.amazonaws.com:5000/api/cakes"
      }

      request(options, function(err, response, body) {

        if (err) {
          alert('Your cake could not be added for the following reason:' + err);
          return;
        }
      });
    } else {
      alert('Please fill in all the form elements');
    }
    this.setState({confirmation: "Cake added!"})

    event.preventDefault();
  }

  handleNameChange(event){
    this.setState({name: event.target.value})
  }

  handleCommentChange(event){
    this.setState({comment: event.target.value})
  }

  handleImageChange(event){
    this.setState({imageUrl: event.target.value})
  }

  render() {

    if (this.state.confirmation.length > 0){
      
      return <Redirect to='/' />;
    }

    return (
      <React.Fragment>

        <form onSubmit={this.handleSubmit}>

          Name: <input name="name" value={this.state.name} type="text" placeholder="Cake name..." onChange={this.handleNameChange} />

          Comment: <textarea name="Comment..." value={this.state.comment} onChange={this.handleCommentChange} />

          Cake pic url URL: <input type="text" value={this.state.imageUrl} placeholder="Image URL" onChange={this.handleImageChange}/>

          <div className="radio">
            <label><input type="radio" value={this.state.yumFactor} name="yumRating" />1</label>
          </div>
          <div className="radio">
            <label><input type="radio" value={this.state.yumFactor} name="yumRating" />2</label>
          </div>
          <div className="radio">
            <label><input type="radio" value={this.state.yumFactor} name="yumRating" />3</label>
          </div>
          <div className="radio">
            <label><input type="radio" value={this.state.yumFactor} name="yumRating" />4</label>
          </div>
          <div className="radio">
            <label><input type="radio" value={this.state.yumFactor} name="yumRating" />5</label>
          </div>

          <input type="submit" value="Add" onClick={this.handleSubmit} />

        </form>
        <button><Link to="/">Cancel</Link></button>      <div>{this.state.confirmation}</div>
      </React.Fragment>
    );
  }
};

export default AddCake;
