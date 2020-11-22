import React from "react";
import { Block } from '../../styled-components/Block';
import { Title } from '../../styled-components/Headline';
import ChallengeItem from './challenge-item/ChallengeItem';


const ChallengeList = ({title, items, marginRight}) => {
    return (
        <Block direction="column" align="center" justify="flex-start" marginRight={marginRight}>
            <Title>{title}</Title>
            <ul>
                {items.map(item => <ChallengeItem {...item} />)}
            </ul>
        </Block>
)}

export default ChallengeList;