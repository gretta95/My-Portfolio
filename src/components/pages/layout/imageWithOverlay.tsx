"use client"
import ImageWithStyle from "../../ImageWithStyle";

import TextWithStyle from "@/components/TextWithStyle";
import {NameWriter} from "@/components/pages/layout/nameWriter";

import BackCover from '../../../../public/images/backCover.webp';



const ImageWithOverlay = () => {

    return (
        <div className="relative w-full h-screen">
            <ImageWithStyle src={BackCover} alt = "Back Cover" styleClass = "w-full object-cover h-full"/>
            <div className="absolute top-[40%]  p-[50px] ">
                <TextWithStyle text="Gretta Margaryan" styleClass="text-[#b6f0ff] text-[50px] "/>
                <NameWriter name="Developer"  />
            </div>

        </div>
    );
};

export default ImageWithOverlay;
