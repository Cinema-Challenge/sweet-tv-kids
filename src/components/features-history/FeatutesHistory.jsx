import React from "react";
import { Block } from '../../styled-components/Block';
import { Title } from '../../styled-components/Headline';
import { Button } from '../../styled-components/Button';

const FeaturesList = () => (
    <Block direction="column">
        <Title>Історія фітчей</Title>
        <Button>Нова рамка</Button>
        <Button>Змінити фон</Button>
    </Block>
)

export default FeaturesList;