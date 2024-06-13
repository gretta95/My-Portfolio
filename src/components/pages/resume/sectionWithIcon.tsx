import React from 'react';
import IconContainer from "@/components/pages/resume/iconContainer";
import {TextWithStyle} from "@/components";
import {IPersonalDataFirstPartItem} from "@/types";

interface ISectionWithIconProps {
    item:IPersonalDataFirstPartItem
    type?: "dark" | "light"
}

const SectionWithIcon:React.FC<ISectionWithIconProps> = ({ item ,type="light" }) => {
    return (
        <div className={`flex gap-[15px] border-b ${type === "dark" ? 'border-[#000]' : 'border-[#fff]'}`}>
            <IconContainer
                icon={item.icon}
                style={`flex items-center justify-center p-[8px] border-t border-r border-l ${type === "dark" ? 'border-[#000]' : 'border-[#fff]'}`}
            />
            <TextWithStyle text={item.section} styleClass={`text-[16px] ${type === "dark" ? 'text-[#000]' : 'text-[#fff]'}`} />
        </div>
    );
};

export default SectionWithIcon;
