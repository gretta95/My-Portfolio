import React from "react";
import {ISubSection} from "@/types";

interface ISubSectionProps {
    item:ISubSection
}

const SubSectionItem: React.FC<ISubSectionProps> = ({item}) => {
    return (
        <> {
            item.icon ? (
                <div>
                    {item.icon}
                </div>
            ) : (
                <div className="flex w-full gap-[25px]">
                    <div
                        className="w-full max-w-[200px]  mb-[25px]">
                        <p className="font-bold text-[14px]">{item.profession}</p>
                        <span
                            className="text-[12px] mt-[10px]">{item.years}</span>
                    </div>
                    <div className="w-full ">
                        <p className="text-[14px]">{item.where}</p>
                    </div>
                </div>
            )
        }</>

    )
}
export default SubSectionItem