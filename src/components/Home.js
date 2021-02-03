import React from 'react';

import { Link } from "react-router-dom";

function home(props) {
  return (
    <section className="home">
      <h3 className="app-title">
        Text/Color <span>Generator</span>
      </h3>
      <div className="generator-div-con">
        <div className="generator-div">
          <p>
            Te<span>xt Ge</span>nerator?
          </p>
          <Link to="/textgen">
          <button>Text Gen</button>
          </Link>
        </div>
        <div className="generator-div">
          <p>
            Col<span>or Ge</span>nerator?
          </p>
          <Link to="/colorgen">
          <button>Color Gen</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default home;