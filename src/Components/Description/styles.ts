import React from "react";
import styled from "styled-components";

export interface IPropsDesc {
    children: React.ReactNode;
}

export const StyledDescription = styled.p<IPropsDesc>`
    font-size: 1.3em;
    width: 70%;
    margin: 1rem auto;
`;