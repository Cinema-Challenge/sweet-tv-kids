import React from "react";
import styled from 'styled-components';
import { Button } from '../../styled-components/Button';
import imageSrc from './img/donut.png';

const BtnDonut = styled(Button)`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;

    span {
        margin-right: 5px;
    }

    &:hover span {
        color: #fff;
    }
`;

const ImgBlock = styled.div`
    max-height: 18px;

    img {
        max-height: 18px;
    }
`;

const DonutsAmount = styled.span`
    color: #2EBEC5;
    margin-left: 8px;
`;

const ButtonDonut = ({text, donuts, onClickFunc}) => (
    <BtnDonut onClick={onClickFunc}>
        <span>{text}</span>
        <DonutsAmount>{donuts}</DonutsAmount>
        <ImgBlock>
            <img src={imageSrc} alt='donut' />
        </ImgBlock>
    </BtnDonut> 
)

export default ButtonDonut;