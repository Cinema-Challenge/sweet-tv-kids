import React from "react";
// import Character from '../../components/character/Character';
// import { Button } from '../../styled-components/Button';
import { Block } from '../../../styled-components/Block';
import { Title } from '../../../styled-components/Headline';

const ChallengeList = ({title, items}) => (
    <Block direction="column">
        <Title>{title}</Title>
        <ul>
            {items.map(item => <li>{item}</li>)}
        </ul>
    </Block>
)

export default ChallengeList;