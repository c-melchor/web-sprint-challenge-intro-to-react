// Write your Character component here

import React from "react";

import styled from "styled-components";
//need to install and import styled components

const StyledCharDiv = styled.div`
  background-color: ${pr => pr.theme.darkestColor};
  padding: ${pr => pr.theme.padding.small};
  color: ${pr => pr.theme.lightestColor};
  margin: ${pr => pr.theme.margin};
  width: ${pr => pr.theme.width.large};
  display: ${pr => pr.theme.display.flex};
  height: ${pr => pr.theme.extraSmall};
  opacity: ${pr => pr.theme.opacity.little};
`;

const StyledDiv = styled.div`
  display: ${pr => pr.theme.display.flex};
  height: ${pr => pr.theme.height.medium};
  flex-wrap: ${pr => pr.theme.display.wrap};
  font-size: ${pr => pr.theme.fontSize.medium};
`;

const BirthDiv = styled.div`
  width: ${pr => pr.theme.width.small};
  background-color: ${pr => pr.theme.primaryColor};
  color: ${pr => pr.theme.darkestColor};
`;

const NameDiv = styled.div`
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
      <StyledDiv>
        <StyledCharDiv>
          <NameDiv>{item.name}</NameDiv>
          <BirthDiv>Birth Year: {item.birth_year}</BirthDiv>
        </StyledCharDiv>
      </StyledDiv>
    );
  });
  //   return <div></div>;
}
