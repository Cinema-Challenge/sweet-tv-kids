import React from "react";
import styled from "styled-components";
import { FlexBlock } from "../../styled-components/FlexBlock";
import imageSrc from "./img/donut.png";

const DonutsAmountBlock = styled(FlexBlock)`
  align-items: center;

  span {
    font-size: ${(props) => props.size || "60px"};
    font-weight: 600;
    margin-right: 8px;
  }

  img {
    max-height: ${(props) => props.size || "60px"};
  }
`;

const DonutsAmount = ({ donuts, size }) => (
  <DonutsAmountBlock className="donut">
    <span className="donut__text">{donuts}</span>
    <img size={size} src={imageSrc} alt="donuts" className="donut__img" />
  </DonutsAmountBlock>
);

export default DonutsAmount;
