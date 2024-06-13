import Image, {StaticImageData} from 'next/image';
import React from "react";



 interface IImageLayoutProps {
        images: StaticImageData[];
 }

const ImageLayout:React.FC<IImageLayoutProps> = ({ images }) => {
    return (
        <div className="flex flex-wrap gap-[20px] justify-center ">
            {images.map((src, index) => (
                <div className="w-full max-w-[220px]">
                    <Image
                        key={index}
                        src={src}
                        alt={`Image ${index + 1}`}
                        width={220}
                        height={220}
                        className="object-cover  w-full "
                    />
                </div>

            ))}
        </div>
    );
};

export default ImageLayout;
