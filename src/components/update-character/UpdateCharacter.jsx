import React from "react";
import styled from 'styled-components';
import { Block } from '../../styled-components/Block';
import { Title } from '../../styled-components/Headline';
import { Button } from '../../styled-components/Button';
import { FlexBlock } from '../../styled-components/FlexBlock';
import FirstRobotSrc from './img/robot-2.png';
import SecondRobotSrc from './img/robot-3.png';

const RobotLeft = styled.img`
    position: absolute;
    bottom: 0;
    left: 70px;
`;

const RobotRight = styled.img`
    position: absolute;
    bottom: 0;
    left: 300px;
`;

const UpdateCharacter = () => (
    <Block direction="column" marginRight="2em" grow="4">
        <Title>Прокачуй персонажа</Title>
        
        <RobotLeft src={FirstRobotSrc} />
        <RobotRight src={SecondRobotSrc} />

        <FlexBlock justify="flex-end">
            <Button>Ще</Button>
        </FlexBlock>
    </Block>
)

export default UpdateCharacter;