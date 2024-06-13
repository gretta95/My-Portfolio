import Image, {StaticImageData} from "next/image";


 interface IImageWithStyleProps {
    src: StaticImageData;
    alt: string;
    styleClass: string;
 }
export const ImageWithStyle:React.FC<IImageWithStyleProps> = ({ src, alt, styleClass }) => {
    return (
        <Image priority  src={src} alt={alt} className={styleClass} />
    )
}
export default ImageWithStyle;
