import React from "react";
import { Block } from '../../styled-components/Block';
import { Title } from '../../styled-components/Headline';
import { Button } from '../../styled-components/Button';
import { FlexBlock } from '../../styled-components/FlexBlock';

const UpdateCharacter = () => (
    <Block direction="column" marginRight="2em" grow="4">
        <Title>Прокачуй персонажа</Title>
        
        <FlexBlock justify="flex-end">
            <Button>Ще</Button>
        </FlexBlock>
    </Block>
)

export default UpdateCharacter;