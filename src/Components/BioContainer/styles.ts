import React from "react";
import styled from "styled-components";

export interface IPropsContainer {
    children: React.ReactNode;
}

export const StyledBioContainer = styled.div<IPropsContainer>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
`;