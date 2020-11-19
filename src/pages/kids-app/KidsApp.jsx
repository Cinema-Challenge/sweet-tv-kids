import React from "react";
import Character from '../../components/character/Character';
import { Button } from '../../styled-components/Button';
import ChallengeList from './challenge-list/ChallengeList';
import { FlexBlock } from '../../styled-components/FlexBlock';
import MoviesList from '../../components/movies-list/MoviesList';

const mainChallenges = [
    'Поліглот'
];

const dailyChallenges = [
    'Переглянути стрічку французською'
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
            }
        ]
    },
];

const KidsApp = () => (
    <section className="section">
        <Character />
        <Button>cdsklcms</Button>

        <FlexBlock>
            <ChallengeList title="Загальні Challenges" items={mainChallenges} />
            <ChallengeList title="Щоденні Challenges" items={dailyChallenges} />
        </FlexBlock>

        {moviesListData.map(list => <MoviesList title={list.title} items={list.items} />)}
        
    </section> 
)

export default KidsApp;