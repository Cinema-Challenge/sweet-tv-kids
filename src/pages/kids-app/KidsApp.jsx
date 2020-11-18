import React from "react";
import Character from '../../components/character/Character';
import { Button } from '../../styled-components/Button';
import ChallengeList from './challenge-list/ChallengeList';
import { FlexBlock } from '../../styled-components/FlexBlock';

const mainChallenges = [
    'Поліглот'
];

const dailyChallenges = [
    'Переглянути стрічку французською'
];

const KidsApp = () => (
    <section className="section">
        <Character />
        <Button>cdsklcms</Button>

        <FlexBlock>
            <ChallengeList title="Загальні Challenges" items={mainChallenges} />
            <ChallengeList title="Щоденні Challenges" items={dailyChallenges} />
        </FlexBlock>
    </section> 
)

export default KidsApp;