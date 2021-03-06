import styled from 'styled-components';

export const FlexBlock = styled.div`
    display: flex;
    justify-content: ${props => (props.justify || 'space-between')};
    flex-direction: ${props => (props.direction || 'row')};
    margin: ${props => (props.margin)};
    padding: ${props => (props.padding)};
    flex-grow:  ${props => (props.grow)};
    height:  ${props => (props.height)};
`;