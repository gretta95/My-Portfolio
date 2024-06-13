"use client"
import Link from 'next/link';
import ImageLayout from "@/components/pages/portfolio/imageLayout";
import {StaticImageData} from "next/image";
import {useState} from "react";

interface ICardDataProps {
    images: StaticImageData[];
    gitHubLink: string;
}

 interface ICardDatasProps {
     data:ICardDataProps
 }


const Card:React.FC<ICardDatasProps> = ({ data }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="bg-[#89898945] rounded-[12px] cursor-pointer h-[300px] flex justify-center items-center "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {!isHovered ? (
                <ImageLayout images={data.images} />
            ) : (
                <div className="flex justify-center items-center h-[300px] ">
                    <Link className="text-[#fff] text-[18px] block  text-center" href={data.gitHubLink}>
                        {data.gitHubLink}
                    </Link>
                </div>

            )}

        </div>
    );
};

export default Card;
