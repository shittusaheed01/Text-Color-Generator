import React from 'react';

import {Link} from "react-router-dom"

function ColorGen(props) {
  return (
    <div>
      ColorGen
      <div className="nav">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/textgen">
          <button>Text Gen</button>
        </Link>
      </div>
    </div>
  );
}

export default ColorGen;