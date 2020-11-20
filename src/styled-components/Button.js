import styled from 'styled-components';

export const Button = styled.button`
  min-width: 200px;
  display: block;
  font-size: ${props => props.fz || '16px'};
  margin: ${props => (props.margin)};
  padding: ${props => props.padding || '5px 10px'};
  color: #fff;
  border: 2px solid #20BEC6;
  background: transparent;
  box-sizing: border-box;
  border-radius: 25px;
  cursor: pointer;
  transition: .3s;
  outline: none;

  :hover {
    background: #20BEC6;
  }
`;

export const BlueButton = styled(Button)`
  background: #2EBEC5;

  :hover {
    background: ##007bff;
  }
`;