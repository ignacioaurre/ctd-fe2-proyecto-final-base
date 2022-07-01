import { StyledDescription, IPropsDesc } from "./styles";

const Description: React.FC<IPropsDesc> = ({children}) => {
    return (
        <StyledDescription>{children}</StyledDescription>
    )
}

export default Description;