import React from "react";
// import {username, city} from "../data/user" 

function Home(props) {
  return (
    <div id="home">
      <h1>
        {props.username} is a Web Developer from {props.city}
      </h1>
    </div>
  );
}

export default Home;