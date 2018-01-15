import React from 'react';
import Add from "./Add";

class CakeContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      cakes_data: []
    }
  }

  componentDidMount(){
    const url = 'http://ec2-52-209-201-89.eu-west-1.compute.amazonaws.com:5000/api/cakes';
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.addEventListener('load', () => {
      if (request.status === 200) {
        const jsonString = request.responseText;
        const data = JSON.parse(jsonString);
        this.setState({ cakes_data: data })
      };
    });
    request.send();
  }

  render() {


    const cakes = this.state.cakes_data.map((cake, index) => {
      return <div className="cake">
        <img alt="Picture of a cake!" src={cake.imageUrl}></img>
        <div className="cake-details">
          <h2>{cake.name}</h2>
          <h2>{cake.comment}</h2>
          <h2>Yum rating: {cake.yumFactor}</h2>

        </div>
      </div>
    });


    return(
      <div id="main">
        <Add />
        <div id="cake-list">{cakes}</div>
      </div>
    )
  }
}

export default CakeContainer;
