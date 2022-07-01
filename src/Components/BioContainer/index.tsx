import { StyledBioContainer, IPropsContainer } from "./styles";

const BioContainer: React.FC<IPropsContainer> = ({children}) => {
    return (
        <StyledBioContainer>{children}</StyledBioContainer>
    )
}

export default BioContainer;