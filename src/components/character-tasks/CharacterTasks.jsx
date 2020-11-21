import React from "react";
import styled from 'styled-components';
import ButtonDonut from '../button-donut/ButtonDonut';
import { FlexBlock } from '../../styled-components/FlexBlock';
import { Headline } from '../../styled-components/Headline';
import { BlueButton } from '../../styled-components/Button';
import DonutsAmount from '../../components/donuts-amount/DonutsAmount';
import { useDispatch, useSelector } from "react-redux";
import { spendDonuts } from '../../store/actions/spendDonuts';

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

const ButtonsList = [
    {
        text: "Змінити фон",
        donuts: 200
    },
    {
        text: "Нова рамка",
        donuts: 300
    },
    {
        text: "Анімація для персонажа",
        donuts: 200
    },
    {
        text: "Шапка для персонажа",
        donuts: 100
    },
    {
        text: "Змінити фон",
        donuts: 200
    },
    {
        text: "Нова рамка",
        donuts: 300
    },
    {
        text: "Анімація для персонажа",
        donuts: 200
    },
    {
        text: "Шапка для персонажа",
        donuts: 100
    },

];

const CharacterTasks = () => {
    const dispatch = useDispatch();
    const { donuts } = useSelector((state) => state.featuresHistory);

    return(
        <CharacterBlock>
        <FlexBlock>
            <Headline>Артем</Headline>
            <DonutsAmount donuts={donuts} />
        </FlexBlock>
        
        <ButtonsBlock>
            {ButtonsList.map(item => <ButtonDonut {...item} onClickFunc={() => dispatch(spendDonuts(item.donuts, item.text))} />)}
        </ButtonsBlock>

        <SecondButtonsBlock>
            <BlueButton>Підживити робота</BlueButton>
            <BlueButton>Поділитися з друзями</BlueButton>
        </SecondButtonsBlock>
    </CharacterBlock>
)}

export default CharacterTasks;