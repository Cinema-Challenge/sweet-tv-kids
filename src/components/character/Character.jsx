import React from "react";
import styled from 'styled-components';
import robotImage from "./img/robot-1.png";

const CharacterBlock = styled.div`
    height: 60vh;

    img {
        max-height: 60vh;
    }
`;

const Character = () => (
    <CharacterBlock>
        <img src={robotImage} alt="character" />
    </CharacterBlock> 
);

export default Character;