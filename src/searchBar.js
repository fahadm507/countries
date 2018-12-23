import React, { Component } from "react";
import "./SearchBar.css";
class SearchBar extends Component {
  state = { term: "" };

  handleChange = e => {
    e.preventDefault();
    this.props.countrySearch(e.target.value);
    this.setState({ term: e.target.value });
  };

  render() {
    return (
      <div class="search-bar-container">
        <form name="searchCountry" class="search-form">
          <input
            type="text"
            className="search-bar-input"
            onChange={e => this.handleChange(e)}
            name="countryName"
            placeholder="search for country or region"
            value={this.state.term}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
