import styled from "styled-components";

export interface IPropsContainer {
    children: React.ReactNode;
}

export const StyledButtonContainer = styled.div<IPropsContainer>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 1rem;
`;