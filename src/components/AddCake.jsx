import React from 'react';

class AddCake extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      comment: '',
      imageUrl: '',
      yumFactor: 1
    };
  }


  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        Name: <input name="name" type="text" placeholder="Cake name..."/>
        Comment: <textarea name="Comment..."/>
        Cake pic url URL: <input type="text" placeholder="Image URL"/>

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
