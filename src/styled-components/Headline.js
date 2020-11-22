import styled from 'styled-components';

export const Headline = styled.h1`
    font-family: Lato,sans-serif;
    font-size: ${props => (props.fz || '28px')};
    font-weight: 600;
    color: #fff;
`;

export const Title = styled.h1`
    margin-bottom: 8px;
    font-family: Lato,sans-serif;
    font-size: ${props => (props.fz || '24px')};
    line-height: 34px;
    font-weight: 600;
    color: #fff;
`;