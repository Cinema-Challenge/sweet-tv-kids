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
    'Поліглот',
    'Мандрівник',
    'Поліглот',
    'Поліглот',
    'Поліглот'
];

const dailyChallenges = [
    'Переглянути стрічку французською',
    'Переглянути стрічку французською',
    'Переглянути стрічку французською',
    'Переглянути стрічку французською',
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

const KidsApp = () => (
    <Container>
        <p>Головна / Кабінет</p>
        <CharacterBlock>
            <Character />
            <CharacterTasks />
        </CharacterBlock>

        <FlexBlock>
            <UpdateCharacter />
            <FeaturesList />
        </FlexBlock>

        <FlexBlock>
            <ChallengeList title="Загальні Challenges" items={mainChallenges} />
            <ChallengeList title="Щоденні Challenges" items={dailyChallenges} />
        </FlexBlock>



        {moviesListData.map(list => <MoviesList title={list.title} items={list.items} />)}
        
    </Container>
)

export default KidsApp;