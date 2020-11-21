import React from "react";
import { Block } from '../../styled-components/Block';
import { Title } from '../../styled-components/Headline';
import { Button } from '../../styled-components/Button';
import { FlexBlock } from '../../styled-components/FlexBlock';
import { useSelector } from "react-redux";

const FeaturesList = () => {
    const { features } = useSelector((state) => state.featuresHistory);

    return(
        <Block direction="column">
            <Title>Історія фітчей</Title>
            <FlexBlock direction="column" justify="center" grow="1">
                {features.map(feature => <Button margin="0 0 8px 0">{feature}</Button>)}
                {/* <Button margin="0 0 8px 0">Нова рамка</Button>
                <Button margin="0 0 8px 0">Чай для персонажа</Button>
                <Button margin="0 0 8px 0">Нова рамка</Button> */}
                <Button>Змінити фон</Button>
            </FlexBlock>
        </Block>
)}

export default FeaturesList;