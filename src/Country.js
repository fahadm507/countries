import React, { Component } from "react";

class Country extends Component {
  render() {
    console.log("props for country ", this.props);
    const { country } = this.props;
    return (
      //country details blub here
      <div className="row">
        <div className="col-md-4">
          <img src={country.flag} title={`${country.name} flag`} />
        </div>
        <div className="col-md-6">
          <h3>{country.name}</h3>
          <p>Region: {country.region} </p>
          <p>subregion: {country.subregion}</p>
          <p>Popluation: {country.population}</p>
          <button>LEARN MORE</button>
        </div>
      </div>
    );
  }
}

export default Country;
