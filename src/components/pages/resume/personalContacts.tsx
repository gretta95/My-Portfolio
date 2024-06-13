import { PersonalContact } from "@/mockData/personaldata";
import IconContainer from "@/components/pages/resume/iconContainer";
import {TextWithStyle} from "@/components";
import React from "react";

export const PersonalContacts = () => {
    return (
        <div className="flex gap-[30px] mt-[30px]">
            {PersonalContact.map((item, ind) => (
                <div key={ind} className="flex flex-col gap-[8px] justify-center items-center">
                    <IconContainer  icon={item.icon} style="flex items-center justify-center p-[6px] border-t border border-[#000] w-fit-content" />
                    <TextWithStyle text={item.title} styleClass="text-[#000] text-[14px]" />
                </div>
            ))}
        </div>
    );
};

export default PersonalContacts
