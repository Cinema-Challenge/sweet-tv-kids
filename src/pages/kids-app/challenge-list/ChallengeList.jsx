import React from "react";
// import Character from '../../components/character/Character';
// import { Button } from '../../styled-components/Button';
import { MediumBlock } from '../../../styled-components/Block';
import { Title } from '../../../styled-components/Headline';

const ChallengeList = ({title, items}) => (
    <MediumBlock direction="column">
        <Title>{title}</Title>
        <ul>
            {items.map(item => <li>{item}</li>)}
        </ul>
    </MediumBlock>
)

export default ChallengeList;