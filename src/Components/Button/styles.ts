import React from "react";
import styled from "styled-components";

export interface IPropsButton {
    children: React.ReactNode;
    onClick?: () => void;
    isActive?: boolean; 
}

export const StyledButton = styled.button<IPropsButton> `
    border-radius: 5px;
    border: 1px solid darkgray;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    padding: 1rem;
    margin: 1rem;
    font-family: "Homer Simpson Revised", sans-serif;
    font-size: 1.4rem;
    background-color: ${props => props.isActive ?  "#fdd835" : ""};
    color: ${props => props.isActive ?  "whitesmoke" : ""};
    text-shadow: ${props => props.isActive ?  "2px 2px 0 #000000, 2px -2px 0 #000000, -2px 2px 0 #000000,-2px -2px 0 #000000, 2px 0px 0 #000000, 0px 2px 0 #000000,-2px 0px 0 #000000, 0px -2px 0 #000000" : ""};
    :hover{
        cursor: pointer;
    }
`;