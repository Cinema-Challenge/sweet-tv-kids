import React from "react";
import Character from '../../components/character/Character';
import ChallengeList from './challenge-list/ChallengeList';
import { FlexBlock } from '../../styled-components/FlexBlock';
import MoviesList from '../../components/movies-list/MoviesList';
import { Container } from '../../styled-components/Container';
import CharacterTasks from '../../components/character-tasks/CharacterTasks';
import styled from 'styled-components';
import FeaturesList from '../../components/features-history/FeatutesHistory';
import UpdateCharacter from '../../components/update-character/UpdateCharacter';

const mainChallenges = [
    {
        title: 'Поліглот',
        desc: 'Переглянути 5 стрічок англ мовою',
        donutsAmount: '200'
    },
    {
        title: 'В десятку',
        desc: 'Пройти 10 тестів після перегляду стрічки',
        donutsAmount: '300'
    },
    {
        title: 'Разом веселіше',
        desc: 'Запросити друга на сайт',
        donutsAmount: '50'
    },
    {
        title: 'Популярність',
        desc: 'Розмістити посилання на свого героя в соцмережі',
        donutsAmount: '100'
    }
];

const dailyChallenges = [
    {
        title: 'Переглянути стрічку французською',
        donutsAmount: '100'
    },
    {
        title: 'Історія: стрічка “Стів Джобс”',
        donutsAmount: '80'
    },
    {
        title: 'Зробити домашнє завдання!',
        donutsAmount: '50'
    },
    {
        title: 'Зробити зарядку',
        donutsAmount: '200'
    },
    {
        title: 'Переглянути стрічку англійською',
        donutsAmount: '300'
    },
];

const moviesListData = [
    {
        title: 'Новинки',
        items: [
            {
                imgSrc: 'https://pm1.narvii.com/6752/455a0dee3bc52b47907f60451eed1d4306c8b754v2_00.jpg',
                title: 'Мулан',
                desc: 'Мультфільм'
            },
            {
                imgSrc: 'https://pm1.narvii.com/6752/455a0dee3bc52b47907f60451eed1d4306c8b754v2_00.jpg',
                title: 'Мулан 2',
                desc: 'Мультфільм'
            },  
            {
                imgSrc: 'https://pm1.narvii.com/6752/455a0dee3bc52b47907f60451eed1d4306c8b754v2_00.jpg',
                title: 'Мулан 2',
                desc: 'Мультфільм'
            },  
            {
                imgSrc: 'https://pm1.narvii.com/6752/455a0dee3bc52b47907f60451eed1d4306c8b754v2_00.jpg',
                title: 'Мулан 2',
                desc: 'Мультфільм'
            },
            {
                imgSrc: 'https://pm1.narvii.com/6752/455a0dee3bc52b47907f60451eed1d4306c8b754v2_00.jpg',
                title: 'Мулан 2',
                desc: 'Мультфільм'
            },  
            {
                imgSrc: 'https://pm1.narvii.com/6752/455a0dee3bc52b47907f60451eed1d4306c8b754v2_00.jpg',
                title: 'Мулан 2',
                desc: 'Мультфільм'
            }
        ]
    },
    {
        title: 'Улюбене',
        items: [
            {
                imgSrc: 'https://pm1.narvii.com/6752/455a0dee3bc52b47907f60451eed1d4306c8b754v2_00.jpg',
                title: 'Мулан',
                desc: 'Мультфільм'
            },
            {
                imgSrc: 'https://pm1.narvii.com/6752/455a0dee3bc52b47907f60451eed1d4306c8b754v2_00.jpg',
                title: 'Мулан 2',
                desc: 'Мультфільм'
            },  
            {
                imgSrc: 'https://pm1.narvii.com/6752/455a0dee3bc52b47907f60451eed1d4306c8b754v2_00.jpg',
                title: 'Мулан 2',
                desc: 'Мультфільм'
            },  
            {
                imgSrc: 'https://pm1.narvii.com/6752/455a0dee3bc52b47907f60451eed1d4306c8b754v2_00.jpg',
                title: 'Мулан 2',
                desc: 'Мультфільм'
            },
            {
                imgSrc: 'https://pm1.narvii.com/6752/455a0dee3bc52b47907f60451eed1d4306c8b754v2_00.jpg',
                title: 'Мулан 2',
                desc: 'Мультфільм'
            },  
            {
                imgSrc: 'https://pm1.narvii.com/6752/455a0dee3bc52b47907f60451eed1d4306c8b754v2_00.jpg',
                title: 'Мулан 2',
                desc: 'Мультфільм'
            }
        ]
    },
];

const CharacterBlock = styled(FlexBlock)`
    margin-bottom: 16px;
`;

const SubHeader = styled.div`
    padding: 24px 0;
`;

const KidsApp = () => (
    <Container>
        <SubHeader>
            <p>Головна / Кабінет</p>
        </SubHeader>
        <CharacterBlock>
            <Character />
            <CharacterTasks />
        </CharacterBlock>

        <FlexBlock padding="8px 0">
            <UpdateCharacter />
            <FeaturesList />
        </FlexBlock>

        <FlexBlock padding="8px 0">
            <ChallengeList title="Загальні завдання" items={mainChallenges} marginRight="24px" />
            <ChallengeList title="Щоденні завдання" items={dailyChallenges} />
        </FlexBlock>



        {moviesListData.map(list => <MoviesList title={list.title} items={list.items} />)}
        
    </Container>
)

export default KidsApp;