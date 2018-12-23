import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };

  handleChange = e => {
    e.preventDefault();
    this.props.countrySearch(e.target.value);
    this.setState({ term: e.target.value });
  };

  render() {
    return (
      <div>
        <form name="searchCountry">
          <input
            type="text"
            onChange={e => this.handleChange(e)}
            name="countryName"
            value={this.state.term}
          />
        </form>
        Search for: {this.state.term}
      </div>
    );
  }
}

export default SearchBar;
