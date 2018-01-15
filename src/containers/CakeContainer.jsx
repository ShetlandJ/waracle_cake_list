import React from 'react';

class CakeContainer extends React.Component {

  constructor(super){
    super(props);
    this.state = {
      cakes_data: [];
    }
  }

  render() {
    return(
      <div>Cake list goes here</div>
    )
  }
}

export default CakeContainer;
