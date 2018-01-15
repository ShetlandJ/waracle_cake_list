import React from 'react';
import {Redirect} from 'react-router-dom';
import request from 'request';


class AddCake extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      comment: '',
      imageUrl: '',
      yumFactor: 1
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
  if (this.state.name.length < 0 && this.state.comment.length < 0 && this.state.imageUrl.length < 0) {
      var options = {
          method: 'post',
          body: this.state,
          json: true,
          url: "http://ec2-52-209-201-89.eu-west-1.compute.amazonaws.com:5000/api/cakes"
      }
      request(options, function(err, response, body) {
          if (err) {
              alert('Your cake could not be added for the following reason:' + err);
              return;
          }

          <Redirect to="/"/>
      });
  } else {
     alert('Please fill in all the form elements');
  }
  event.preventDefault();
}



  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        Name: <input name="name" value={this.state.name} type="text" placeholder="Cake name..."/>
        Comment: <textarea name="Comment..." value={this.state.comment} />
        Cake pic url URL: <input type="text" value={this.state.imageUrl} placeholder="Image URL"/>

        <div className="radio">
          <label><input type="radio" value="yum1" name="yumRating" />1</label>
        </div>
        <div className="radio">
          <label><input type="radio" value="yum2" name="yumRating" />2</label>
        </div>
        <div className="radio">
          <label><input type="radio" value="yum3" name="yumRating" />3</label>
        </div>
        <div className="radio">
          <label><input type="radio" value="yum4" name="yumRating" />4</label>
        </div>
        <div className="radio">
          <label><input type="radio" value="yum5" name="yumRating" />5</label>
        </div>
        <button type="submit" value="Add">Submit</button>

      </form>
    );
  }
};

export default AddCake;
