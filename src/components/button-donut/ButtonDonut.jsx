import React from "react";
import { Button } from '../../styled-components/Button';

const ButtonDonut = ({text}) => (
    <Button>
        {text}
        <img src="./img/donut.png" />
    </Button> 
)

export default ButtonDonut;