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
      <div>hello world</div>
    );
  }
};

export default AddCake;
