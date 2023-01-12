import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Quiz1 = ({
  username,setUsername,
}) => {



    return (
      <div>
<h1>Quiz1</h1>

<input
        type="text"
        placeholder="Username"
        className="username_input"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />

        <div>
          <Link to={"/quiz2"}><button>
            quiz2
          </button></Link>
        </div>
</div>

    );
  };
  
  export default Quiz1;