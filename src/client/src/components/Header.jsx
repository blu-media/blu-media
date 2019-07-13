import React from 'react';
import '../styles/main.css';
import '../styles/Header.css';
import logo from '../assets/cubal-logo.png';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
    };

    this.handleSearchQueryUpdate = this.handleSearchQueryUpdate.bind(this)
    this.searchBarKeyPress = this.searchBarKeyPress.bind(this)
    this.handleOnClickLogIn = this.handleOnClickLogIn.bind(this)
    this.handleOnClickSignUp = this.handleOnClickSignUp.bind(this)
  }

  handleOnClickLogIn(event) {
    console.log("Clicked to log in...")
  }

  handleOnClickSignUp(event) {
    console.log("Clicked to sign up...")
  }

  handleSearchQueryUpdate(event) {
    this.setState({ searchQuery: event.target.value })
  }

  searchBarKeyPress(event) {
    if (event.key === 'Enter') {
      console.log(`Pressed Enter; Searching: '${this.state.searchQuery}'`);
    }
  }

  render() {
    return (
      <header class="display-flex flex-space-between flex-align-center">
        <a href="/">
          <img src={logo} alt="" class="width-75px height-75px" />
        </a>

        <div>
          <img src={logo} alt="" class="width-75px height-75px" />
        </div>


        {/* <section id="header-left-wrapper">
          <div id="header-search-bar">
            <svg width="18px" height="18px" viewBox="0 0 18 18" fill="darkgray">
              <g id="search-icon" transform="translate(-11.000000, -11.000000)">
                <path d="M23.0733726,24.4447312 C21.8075531,25.4199921 20.2215106,26 18.5,26 C14.3578644,26 11,22.6421356 11,18.5 C11,14.3578644 14.3578644,11 18.5,11 C22.6421356,11 26,14.3578644 26,18.5 C26,20.2215106 25.4199921,21.8075531 24.4447312,23.0733726 L28.1425948,26.7712362 L26.7712362,28.1425948 L23.0733726,24.4447312 Z M18.5,24 C21.5375661,24 24,21.5375661 24,18.5 C24,15.4624339 21.5375661,13 18.5,13 C15.4624339,13 13,15.4624339 13,18.5 C13,21.5375661 15.4624339,24 18.5,24 Z" id="Combined-Shape"></path>
              </g>
            </svg>
            <input type="text" placeholder="Search ..."
              class="fnt-nov fnt-11"
              onKeyPress={this.searchBarKeyPress}
              onChange={this.handleSearchQueryUpdate}
              value={this.state.searchQuery} />
          </div>
        </section>

        <section id="header-right-wrapper">
          <nav>
            <ul>
              <li class="fnt-nov fnt-12">Home</li>
              <li class="fnt-nov fnt-12">Events</li>
              <li class="fnt-nov fnt-12">Organizations</li>
            </ul>
          </nav>

          <div id="search-bar"
            class="fnt-12 dsp-flx crsr-ptr trns-eio no-outline
            brdr-1px-cbldark brdr-rad-8px text-uppercase">
            <button class="fnt-nov fnt-cbldark"
              onClick={this.handleOnClickLogIn}>
              Log In
            </button>

            <button class="fnt-nov fnt-wht bg-cbldark"
              onClick={this.handleOnClickSignUp}>
              Sign Up
            </button>
          </div>

        </section> */}
      </header>
    );
  }
}

export default Header;
