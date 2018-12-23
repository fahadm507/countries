import React, { Component } from "react";
import NavBar from "./NavBar.js";
import Countries from "./Countries";

const baseURL = "https://restcountries.eu/rest/v2";

class App extends Component {
  state = {
    currentRegion: "All",
    allCountries: [],
    filteredCountries: []
  };

  filterRegions = currentRegion => {
    console.log("state filterRegions is: ", this.state);
    /*
    given a region, update state of the application
    to only show the countries that belongs to that region.
    */

    //deep-copy all countries so that we can filter countries without changing
    //state of allCountries.
    const countries = [...this.state.allCountries];

    //get the countries that match the region that's been clicked.
    // const currentRegion = region.toLowerCase();

    const filteredCountries = countries.filter(
      country => country.region === currentRegion
    );
    this.setState({ filteredCountries, currentRegion });
  };

  componentDidMount() {
    console.log("state of my application", this.state);
    fetch(`${baseURL}/all`)
      .then(response => {
        return response.json();
      })
      .then(countriesData => {
        //update state with the returned data
        if (countriesData) {
          this.setState({ allCountries: countriesData });
        }
      })
      .catch(errorResponse => {
        // Todo: handle error errorResponse for real
      });
  }

  render() {
    const { allCountries, filteredCountries } = this.state;
    const countries =
      filteredCountries.length > 0 ? filteredCountries : allCountries;
    return (
      <div class="container">
        <div className="myNav">
          <NavBar countriesByRegion={this.filterRegions} />
        </div>
        <div className="myCountries">
          <Countries
            currentCountries={countries}
            currentRegion={this.state.currentRegion}
          />
        </div>
      </div>
    );
  }
}

export default App;
