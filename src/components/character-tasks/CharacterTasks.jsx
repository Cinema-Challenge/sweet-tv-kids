import React from "react";
import styled from 'styled-components';
import ButtonDonut from '../button-donut/ButtonDonut';
import { FlexBlock } from '../../styled-components/FlexBlock';
import { Headline } from '../../styled-components/Headline';
import { BlueButton } from '../../styled-components/Button';
import DonutsAmount from '../../components/donuts-amount/DonutsAmount';


const CharacterBlock = styled(FlexBlock)`
    flex-direction: column;
    flex-grow: 1;
    padding: 16px;
    margin-left: 24px;
`;

const ButtonsBlock = styled(FlexBlock)`
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 60%;

    button { 
        margin-right: 8px;
    }
`;

const SecondButtonsBlock = styled(FlexBlock)`
    justify-content: flex-end;

    button { 
        margin-left: 8px;
    }
`;

const CharacterTasks = () => (
    <CharacterBlock>
        <FlexBlock>
            <Headline>Артем</Headline>
            <DonutsAmount donuts="300" />
        </FlexBlock>
        
        <ButtonsBlock>
            <ButtonDonut text="Змінити фон" donuts="200" />
            <ButtonDonut text="Нова рамка" donuts="200" />
            <ButtonDonut text="Анімація для персонажа" donuts="200" />
            <ButtonDonut text="Шапка для персонажа" donuts="200" />
            <ButtonDonut text="Змінити фон" donuts="200" />
            <ButtonDonut text="Нова рамка" donuts="200" />
            <ButtonDonut text="Анімація для персонажа" donuts="200" />
            <ButtonDonut text="Шапка для персонажа" donuts="200" />

        </ButtonsBlock>

        <SecondButtonsBlock>
            <BlueButton>Підживити робота</BlueButton>
            <BlueButton>Поділитися з друзями</BlueButton>
        </SecondButtonsBlock>
    </CharacterBlock>
)

export default CharacterTasks;