import React from 'react';
import Add from "./Add";
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';

class CakeContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      cakes_data: [],
      display: "none"
    };
    this.handleClick = this.handleClick.bind(this);
    this.clickCake = this.clickCake.bind(this);
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

  handleClick() {
    var cakeLink = "/add";
    return <Redirect to={cakeLink} />
  }

  clickCake(event){
    this.setState({display: "block"})
  }

  render() {

    const cakes = this.state.cakes_data.map((cake, index) => {
      return <div className="cake">
        <img alt="Picture of a cake!" src={cake.imageUrl}></img>
        <div className="cake-details">

          <h2>{cake.name}</h2>
          <button onClick={this.clickCake}>Show details!</button>
          <p style={{display: this.state.display}}>{cake.comment}</p>
          <p style={{display: this.state.display}}>Yum rating: {cake.yumFactor}</p>
        </div>
      </div>
    });

    const cakes_details = this.state.cakes_data.map((cake, index) => {
      return <div className="cake">
        <img alt="Picture of a cake!" src={cake.imageUrl} onClick={this.clickCake}></img>
        <div className="cake-details">

          <h2 onClick={this.handleClick}>{cake.name}</h2>
          <p>{cake.comment}</p>
          <p>Yum rating: {cake.yumFactor}</p>
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
