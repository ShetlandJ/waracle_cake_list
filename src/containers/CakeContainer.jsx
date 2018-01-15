import React from 'react';

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
      return <div className="flag"><img alt="" src={cake.name} value={cake.comment} key={index}></img>
    </div>
  });



    return(
      <div>{this.state.cakes_data.children}</div>
    )
  }
}

export default CakeContainer;
