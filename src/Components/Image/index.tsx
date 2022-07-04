import { StyledImage, IPropsImage } from "./styles";

const Image: React.FC<IPropsImage> = ({
    alt,
    src,
}) => {
    return (
        <StyledImage src={src} alt={alt} />
    )
}

export default Image;