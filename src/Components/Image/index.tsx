import { StyledImage, IPropsImage } from "./styles";

const Image: React.FC<IPropsImage> = ({
    alt,
    src,
}) => {
    return (
        <img src={src} alt={alt} />
    )
}

export default Image;