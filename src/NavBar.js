import React, { Component } from "react";
import "./NavBar.css";

class NavBar extends Component {
  handleClick = (region, e) => {
    e.preventDefault();
    this.props.countriesByRegion(region);
  };
  render() {
    const REGIONS = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];
    const navItems = REGIONS.map((region, index) => {
      return (
        <li className="nav-item" key={index}>
          <a href="#" onClick={e => this.handleClick(region, e)}>
            {region}
          </a>
        </li>
      );
    });

    return (
      <nav class="nav nav-bar">
        <ul className="nav-list">{navItems}</ul>
      </nav>
    );
  }
}

export default NavBar;
