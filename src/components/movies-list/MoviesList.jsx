import React from "react";
// import Character from '../../components/character/Character';
// import { Button } from '../../styled-components/Button';
import { Block } from '../../../styled-components/Block';
import { Title } from '../../../styled-components/Headline';

const MoviesList = ({title, items}) => (
    <Block direction="column" justify="center">
        <Title>{title}</Title>
        <ul>
            {items.map(item => <li key={title}>{item}</li>)}
        </ul>
    </Block>
)

export default MoviesList;