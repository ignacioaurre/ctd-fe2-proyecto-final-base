import { IPropsButton, StyledButton } from "./styles";

const Button: React.FC<IPropsButton> = ({
    children,
    onClick = () => {},
    isActive = false,
}) => {
    return (
        <StyledButton  onClick={onClick} isActive={isActive} >
            {children}
        </StyledButton>
    )
}

export default Button;