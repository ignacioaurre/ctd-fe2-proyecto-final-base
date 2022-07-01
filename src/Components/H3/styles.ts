import React from "react";
import styled from "styled-components";

export interface IPropsH3 {
    children: React.ReactNode;
}

export const StyledH3 = styled.h3<IPropsH3>`
    font-size: 2em;
    margin-bottom: 1rem;
`;