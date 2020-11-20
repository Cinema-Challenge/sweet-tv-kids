import styled from 'styled-components';

export const Block = styled.div`
    display: flex;
    justify-content: ${props => (props.justify || 'space-between')};
    flex-direction: ${props => (props.direction || 'row')};
    background: #15394C;
    border-radius: 10px;
    padding: 24px;
    margin-bottom: 15px;
    color: #fff;
`;

export const MediumBlock = styled(Block)`
    width: 44%;
`;