import React from "react";
import styled from 'styled-components';
import { FlexBlock } from "../../../../styled-components/FlexBlock";
import { Title } from '../../../../styled-components/Headline';
import DonutsAmount from '../../../../components/donuts-amount/DonutsAmount';

const Item = styled.ol`
    display: flex;
    justify-content: space-between;

`;

const Desc = styled.p`
    display: inline-block;
    color: #2EBEC5;
    font-style: italic;
    font-size: 14px;
`;

const ItemTitle = styled(Title)`
    cursor: pointer;
    transition: .3s;

    &:hover {
        color: #2EBEC5;
    }
`;


const ChallengeItem = ({title, desc, donutsAmount}) => (
    <Item>
        <FlexBlock direction="column" margin="0 0 8px 0">
            <ItemTitle fz="16px">{title}</ItemTitle>
            <Desc>{desc}</Desc>
        </FlexBlock>

        <DonutsAmount donuts={donutsAmount} size="18px"/>
    </Item>
)

export default ChallengeItem;