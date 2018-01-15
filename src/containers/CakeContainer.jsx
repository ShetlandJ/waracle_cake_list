import React from 'react';

class CakeContainer extends React.Component {

  constructor(super){
    super(props);
    this.state = {
      cakes_data: [];
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
        this.setState({ countries: data }, () => {
          this.buildCountryArray(this.state.randomNumber)
        });
      }
    });
    request.send();
  }


  render() {
    return(
      <div>Cake list goes here</div>
    )
  }
}

export default CakeContainer;
