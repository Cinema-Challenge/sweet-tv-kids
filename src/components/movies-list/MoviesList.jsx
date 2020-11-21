import React from "react";
import { FlexBlock } from '../../styled-components/FlexBlock';
import { Title } from '../../styled-components/Headline';
import MovieItem from './movie-item/MovieItem';

const MoviesList = ({title, items}) => (
    <FlexBlock padding="8px 0" direction="column" justify="center">
        <Title>{title}</Title>
        <FlexBlock>
            {items.map(movie => <MovieItem key={movie.title+movie.desc} {...movie} />)}
        </FlexBlock>
    </FlexBlock>
)

export default MoviesList;