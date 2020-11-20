import React from "react";
import { Block } from '../../../styled-components/Block';
import { Title } from '../../../styled-components/Headline';

const ChallengeList = ({title, items, align}) => (
    <Block direction="column" align="center" marginRight={align}>
        <Title>{title}</Title>
        <ul>
            {items.map(item => <li>{item}</li>)}
        </ul>
    </Block>
)

export default ChallengeList;