import React from "react";
import Character from '../../components/character/Character';
import ChallengeList from '../../components/challenge-list/ChallengeList';
import { FlexBlock } from '../../styled-components/FlexBlock';
import { Block } from '../../styled-components/Block';
import MoviesList from '../../components/movies-list/MoviesList';
import { Container } from '../../styled-components/Container';
import { Title } from '../../styled-components/Headline';
import CharacterTasks from '../../components/character-tasks/CharacterTasks';
import styled from 'styled-components';
import FeaturesList from '../../components/features-history/FeatutesHistory';
import UpdateCharacter from '../../components/update-character/UpdateCharacter';

const mainChallenges = [
    {
        title: 'Поліглот',
        desc: 'Переглянути 5 стрічок англ мовою',
        donutsAmount: 200
    },
    {
        title: 'В десятку',
        desc: 'Пройти 10 тестів після перегляду стрічки',
        donutsAmount: 300
    },
    {
        title: 'Разом веселіше',
        desc: 'Запросити друга на сайт',
        donutsAmount: 50
    },
    {
        title: 'Популярність',
        desc: 'Розмістити посилання на свого героя в соцмережі',
        donutsAmount: 100
    }
];

const dailyChallenges = [
    {
        title: 'Переглянути стрічку французською',
        donutsAmount: 100
    },
    {
        title: 'Історія: стрічка “Стів Джобс”',
        donutsAmount: 80
    },
    {
        title: 'Зробити домашнє завдання!',
        donutsAmount: 50
    },
    {
        title: 'Зробити зарядку',
        donutsAmount: 100
    },
    {
        title: 'Переглянути стрічку англійською',
        donutsAmount: 200
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
                imgSrc: 'https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/234c7c011ba026e66d29567e1be1d1f7/i/m/img396_1_19.jpg',
                title: 'Тролі',
                desc: 'Мультфільм'
            },  
            {
                imgSrc: 'https://kino-teatr.ua/public/main/films/2020-09/x4_poster_5f5711737910e.jpg',
                title: 'Cats vs Dogs 3',
                desc: 'Фільм'
            },  
            {
                imgSrc: 'https://upload.wikimedia.org/wikipedia/ru/e/e8/Shrek_Forever_After.jpg',
                title: 'Шрек 3',
                desc: 'Мультфільм'
            },
            {
                imgSrc: 'https://lh3.googleusercontent.com/proxy/ZeRyQTxAspVT2iQTriPZeND9QL4h20nqUNeGkGlqua13LQ5oisvoE6kxLpizs4QGWb1gxmOImqh6ogiuionUniHnRNUr1RAQFvfKSrT8CR0gQg',
                title: 'Antz',
                desc: 'Мультфільм'
            },  
            {
                imgSrc: 'https://posters.hurtom.com/albums/cartoons/the-secret-life-of-pets-2-2019-.jpg',
                title: 'Секрети домашніх тварин 2',
                desc: 'Мультфільм'
            }
        ]
    },
    {
        title: 'Улюбене',
        items: [
            {
                imgSrc: 'https://kinoafisha.ua/upload/2019/06/films/8879/1zptd6n1nepriyatnost.jpg',
                title: 'Халепа',
                desc: 'Мультфільм'
            },
            {
                imgSrc: 'https://upload.wikimedia.org/wikipedia/ru/3/39/Shrek.jpg',
                title: 'Шрек',
                desc: 'Мультфільм'
            },
            {
                imgSrc: 'https://lh3.googleusercontent.com/proxy/xWNWXGpTct6Ox8XcNYgqz0FZBEEkq95JyXwFns4LaQ7cNrrywzBaUWoH1zSTKQrbgk09WgYB7nWR7O4PLZZE3KTn4gR0862X6S3frIM-91G8-9p8idRSJ9FQ7Qd49lLytTuY1pXyjkq1AmZP05PngG0-NK8s7ipOtHj1Xl8H',
                title: 'Жирафа',
                desc: 'Мультфільм'
            },  
            {
                imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/51MHgrDiAXL.jpg',
                title: 'Ugly Dolls',
                desc: 'Мультфільм'
            },
            {
                imgSrc: 'https://kinoafisha.ua/upload/2017/06/films/7858/1501756674straji-djunglei.jpg',
                title: 'Вартові джунглів',
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

const AddBlock = styled(Block)`
    height: 300px;
    max-width: 400px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    background: #0F1C26;


    h1 {
        transition: .3s;
    }

    :hover h1 {
        color: #2EBEC5;
    }
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
        
        <FlexBlock justify="center" align="center">
            <AddBlock>
                <Title>+ Додати список</Title>
            </AddBlock>
        </FlexBlock>

    </Container>
)

export default KidsApp;