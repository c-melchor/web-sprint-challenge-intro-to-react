// Write your Character component here

import React from "react";

//need to install and import styled components

export default function Character(props) {
  //   const { name, height } = props;
  console.log(props, "characters");

  return (
    <div>
      {/* {props.map(item => {
        return (
          <div>
            Name : {item.name}
            height:{item.height}
          </div>
        );
      })} */}
    </div>
  );
}
