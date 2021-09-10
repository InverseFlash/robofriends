import React from "react";

const Header = React.memo((props) => {
  console.log("Header update");
  return <h1 className="f2">Robofriends</h1>;
});

export default Header;
