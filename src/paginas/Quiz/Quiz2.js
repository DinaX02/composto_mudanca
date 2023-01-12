import React from "react";
import Quiz1 from "./Quiz1";
import { useState } from "react";
const Quiz2 = ({
  username
}) => {

 
    return (
      <div>
<h1>Quiz2</h1>
<h1 className="heading">You reached the end of the game, {username}</h1>
</div>

    );
  };
  
  export default Quiz2;