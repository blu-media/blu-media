import React from 'react';


class Header extends React.Component {
  render(){
    return (
      <header style = {{border: "1px solid black"}}>
        <div>
          <input type="text" placeholder = "Search"/>
        </div>
        <div>
          <button>Sign Up</button>
          <button>Login</button>
        </div>
      </header>
      );
  }
}

export default Header;
