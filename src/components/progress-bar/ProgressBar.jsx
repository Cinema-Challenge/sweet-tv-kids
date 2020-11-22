import React from "react";
import styled from 'styled-components';
import { useSelector } from "react-redux";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Title } from '../../styled-components/Headline';
import { FlexBlock } from '../../styled-components/FlexBlock';
import './style.css';

let progress = 0;
let level = 1;

const ProgressContainer = styled.div`
    width: 40%;
`;

const LevelText = styled.span`
    margin-bottom: 8px;
    font-family: Lato,sans-serif;
    font-size: 14px;
    line-height: 34px;
    font-weight: 600;
    color: #fff;
    opacity: ${props => (props.opacity)};
`;

const ProgressBarBlock = () => {
    const { challenges } = useSelector((state) => state.featuresHistory);
    
    if(challenges.length > 0 && challenges.length < 10) {
        progress = challenges.length;
    } else if (challenges.length >= 10) {
        progress = challenges.length % 10;
        if(progress === 0) {
            level = (challenges.length / 10) + 1;
        }
    }

    return(
        <ProgressContainer>
            <ProgressBar variant="info" now={progress * 10} label={`${progress * 10}%`} />
            <FlexBlock>
                <LevelText>{level} рівень</LevelText>
                <LevelText opacity="0.2">{level + 1} рівень</LevelText>
            </FlexBlock>
        </ProgressContainer>
    )
}

export default ProgressBarBlock;