import React from 'react';
import { Link  } from "react-router-dom";
import './style.css';

const home = () => {


    return (
      <div class="home-body">
        <div class="home-header" to="/Exercise1" target="_blank">
          <p>Ian Jason C. Etruiste Assessment</p>
        </div>
        <Link class="exercise1-button" to="/Exercise1" target="_blank">
          Exercise 1
        </Link>
        <Link class="exercise2-button" to="/Exercise2" target="_blank">
          Exercise 2
        </Link>
      </div>
    )
}

export default home;
