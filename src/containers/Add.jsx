import React from 'react';
import {Link} from 'react-router-dom';


class Add extends React.Component {
  render() {
    return(
      <div id="add-new-cake-container">
      <button id="add-btn"><Link to="/add">Add a new cake</Link></button>
    </div>
    )
  }
}

export default Add;
