import styled from "styled-components";

export interface IPropsImage {
    alt: string;
    src: string;
}

export const StyledImage = styled.img<IPropsImage>`
    max-width: 200px;
    max-height: 300px;
    margin-bottom: 1rem;
`;