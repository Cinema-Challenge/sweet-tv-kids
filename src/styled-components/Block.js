import styled from 'styled-components';

export const Block = styled.div`
    display: flex;
    justify-content: ${props => (props.justify || 'space-between')};
    flex-direction: ${props => (props.direction || 'row')};
    flex-grow: ${props => (props.grow || '1')};
    background: #15394C;
    border-radius: 10px;
    padding: 16px;
    margin-bottom: 15px;
    color: #fff;
    min-height: 280px;
    margin-right: ${props => (props.marginRight || '')};
`;

export const MediumBlock = styled(Block)`
    width: 44%;
`;

export const LargeBlock = styled(Block)`
    flex-grow: 3
`;