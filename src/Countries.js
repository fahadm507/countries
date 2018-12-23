import React, { Component } from "react";
import Country from "./Country";

class Countries extends Component {
  render() {
    const countryData = this.props.currentCountries.map((country, index) => (
      <Country country={country} key={index} />
    ));
    return (
      <div>
        <p>Current countries: {this.props.currentRegion} </p>
        {countryData}
      </div>
    );
  }
}
export default Countries;
