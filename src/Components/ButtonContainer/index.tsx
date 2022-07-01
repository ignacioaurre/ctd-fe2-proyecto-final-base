import { StyledButtonContainer, IPropsContainer } from "./styles";

const ButtonContainer: React.FC<IPropsContainer> = ({children}) => {
    return (
        <StyledButtonContainer>{children}</StyledButtonContainer>
    )
}

export default ButtonContainer;