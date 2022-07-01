import { StyledH3, IPropsH3 } from "./styles";

const H3: React.FC<IPropsH3> = ({children}) => {
    return (
        <StyledH3>{children}</StyledH3>
    )
}

export default H3;