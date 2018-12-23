import React, { Component } from "react";
import Country from "./Country";
import "./Countries.css";

class Countries extends Component {
  render() {
    const countryData = this.props.currentCountries.map((country, index) => (
      <Country country={country} key={index} />
    ));
    return <div className="countries-container">{countryData}</div>;
  }
}
export default Countries;
