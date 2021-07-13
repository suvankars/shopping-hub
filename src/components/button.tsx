import React from "react";
import styled from "styled-components";

interface ButtonProp {
  children: React.ReactNode;
  type: 'button'|'submit';
}
const Button = ({ children, ...otherProps }: ButtonProp) => {
  return <ButtonWraper {...otherProps}>{children}</ButtonWraper>;
};

const ButtonWraper = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
export default Button;
