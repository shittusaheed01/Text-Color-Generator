import React from 'react';

import {Link} from "react-router-dom"

function ErrorPage(props) {
  return (
    <div>
      <div className="nav">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/textgen">
          <button>Text Gen</button>
        </Link>
        <Link to="/colorgen">
          <button>Color Gen</button>
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;