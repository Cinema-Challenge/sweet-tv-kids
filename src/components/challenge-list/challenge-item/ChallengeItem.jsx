import React from "react";
import styled from 'styled-components';
import { FlexBlock } from "../../../styled-components/FlexBlock";
import { Title } from '../../../styled-components/Headline';
import DonutsAmount from '../../donuts-amount/DonutsAmount';
import { useDispatch } from "react-redux";
import { earnDonuts } from '../../../store/actions/earnDonuts';

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


const ChallengeItem = ({title, desc, donutsAmount}) => {
    const dispatch = useDispatch();
    
    return(
        <Item onClick={() => dispatch(earnDonuts(donutsAmount, title))}>
            <FlexBlock direction="column" margin="0 0 8px 0">
                <ItemTitle fz="16px">{title}</ItemTitle>
                <Desc>{desc}</Desc>
            </FlexBlock>

            <DonutsAmount donuts={donutsAmount} donutSize="24px"/>
        </Item>
)}

export default ChallengeItem;