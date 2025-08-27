import React from "react";

function TitleText() {
  return (
    <pre>
{String.raw`
  _____ _                                
 |_   _| |__   ___  _ __ ___    __ _ ___ 
   | | | '_ \ / _ \| '_ ◝ _ \ / _◝ / __|
   | | | | | | (_) | | | | | | (_|  \__ \
   |_| |_| |_|\___/|_| |_| |_|\__,_|____/ 
`}
    </pre>
  );
}

function NavBar() {
  return (
    <nav-bar>
      <TitleText />
    </nav-bar>
  );
}

export default NavBar;
