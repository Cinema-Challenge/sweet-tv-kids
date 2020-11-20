import React from "react";
import styled from 'styled-components';
import { Button } from '../../styled-components/Button';
import imageSrc from './img/donut.png';

const BtnDonut = styled(Button)`
    display: flex;
    justify-content: space-between;

    span {
        margin-right: 5px;
    }
`;

const ImgBlock = styled.div`
    max-height: 18px;

    img {
        max-height: 18px;
    }
`;

const ButtonDonut = ({text}) => (
    <BtnDonut>
        <span>{text}</span>
        <ImgBlock>
            <img src={imageSrc} alt='donut' />
        </ImgBlock>
    </BtnDonut> 
)

export default ButtonDonut;