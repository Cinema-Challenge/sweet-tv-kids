import React from "react";
import styled from 'styled-components';
import { FlexBlock } from '../../styled-components/FlexBlock';
import imageSrc from './img/donut.png';

const DonutsAmountBlock = styled(FlexBlock)`
    align-items: center;    

    span { 
        font-size: 60px;
        margin-right: 8px;
    }

    img {
        max-height: 60px;
    }
`;

const DonutsAmount = ({donuts}) => (
    <DonutsAmountBlock>
        <span>{donuts}</span>
        <img src={imageSrc} alt="donuts" />
    </DonutsAmountBlock>
)

export default DonutsAmount;