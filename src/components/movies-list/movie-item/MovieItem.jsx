import React from "react";
import styled from 'styled-components';
import { MovieItemLi } from '../../../styled-components/MovieItem';
import { FlexBlock } from '../../../styled-components/FlexBlock';

const Title = styled.h4`
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    transition: .3s;

    &:hover {
        color: #20bec6;
    }
`;

const Desc = styled.p`
    margin: 0;
    color: #E7BD53;
    font-size: 12px;
`;

const ImageContainer = styled.div`
    height: 250px;
    border: 2px solid transparent;
    border-radius: 10px;
    overflow: hidden;
    transition: .5s;
    margin-bottom: 8px;

    &:hover {
        border: 2px solid #20bec6;
    }
`;

const Image = styled.img`
    height: 100%;
    background: #000;
`;

const MovieItem = ({ imgSrc, title, desc }) => (
    <MovieItemLi>
        <ImageContainer>
            <Image src={imgSrc} />
        </ImageContainer>
        <Title>{title}</Title>
        <FlexBlock>
            <Desc>{desc}</Desc>
        </FlexBlock>
    </MovieItemLi>
)

export default MovieItem;