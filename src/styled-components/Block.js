import styled from 'styled-components';

export const Block = styled.div`
    position: relative;
    display: flex;
    justify-content: ${props => (props.justify || 'space-between')};
    flex-direction: ${props => (props.direction || 'row')};
    align-item: ${props => (props.align || 'flex-start')};
    flex-grow: ${props => (props.grow || '1')};
    padding: 16px;
    margin-bottom: 15px;
    margin-right: ${props => (props.marginRight || '')};
    background: #15394C;
    border-radius: 10px;
    color: #fff;
    min-height: 280px;
    
`;

export const MediumBlock = styled(Block)`
    width: 44%;
`;

export const LargeBlock = styled(Block)`
    flex-grow: 3
`;