import React from "react";
import { Block } from '../../styled-components/Block';
import { Title } from '../../styled-components/Headline';
import { Button } from '../../styled-components/Button';
import { FlexBlock } from '../../styled-components/FlexBlock';

const FeaturesList = () => (
    <Block direction="column">
        <Title>Історія фітчей</Title>
        <FlexBlock direction="column" justify="center" grow="1">
            <Button margin="0 0 8px 0">Нова рамка</Button>
            <Button margin="0 0 8px 0">Чай для персонажа</Button>
            <Button margin="0 0 8px 0">Нова рамка</Button>
            <Button>Змінити фон</Button>
        </FlexBlock>
    </Block>
)

export default FeaturesList;