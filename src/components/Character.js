// Write your Character component here

import React from "react";

import styled from "styled-components";
//need to install and import styled components

const StyledDiv = styled.div`
  background-color: ${pr => pr.theme.darkestColor};
  padding: ${pr => pr.theme.padding.small};
  color: ${pr => pr.theme.lightestColor};
  margin: ${pr => pr.theme.margin};
  width: ${pr => pr.theme.width.small};
`;

export default function Character(props) {
  const people = props.people;
  console.log(people);

  if (people === []) {
    return <p>Loading ...</p>;
  }
  return people.map(item => {
    return (
      <div>
        <StyledDiv>{item.name}</StyledDiv>
      </div>
    );
  });
  //   return <div></div>;
}
