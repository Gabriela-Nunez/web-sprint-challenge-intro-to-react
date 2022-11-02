// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledCharacter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: "sienna";

`;

const Character = (props) => {

  const { character } = props;

  return (
    <StyledCharacter>
      <h2>{character.name}</h2>
      <p>{character.birth_year}</p>
      <p>{character.gender}</p>
      <p>{character.hair_color}</p>
      <p>{character.eye_color}</p>
    </StyledCharacter>
  )
}


export default Character;