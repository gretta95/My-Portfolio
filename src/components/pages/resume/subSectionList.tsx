import React from 'react';
import IconContainer from "@/components/pages/resume/iconContainer";
import {IPersonalDataFirstPartItem, ISubSection} from "@/types";
import Link from "next/link";


interface ISubSectionListProp {
    item:IPersonalDataFirstPartItem
}

const SubSectionList:React.FC<ISubSectionListProp> = ({ item }) => {
    const isMultiColumn = item.subSections.length > 3;

    return (
        <ul
            className={`mt-[20px] grid ${isMultiColumn ? 'grid-cols-2' : 'grid-cols-1'} gap-[8px]`}
        >
            {item.subSections.map((subItem: ISubSection, ind: number) => (
                <li key={ind} className="flex gap-[8px] items-center">
                    {subItem.link ? (
                        <Link href={subItem.link}  className="flex gap-[8px] items-center">
                                <IconContainer icon={subItem.icon} />
                                {subItem.title}
                        </Link>
                    ) : (
                        <>
                            <IconContainer icon={subItem.icon} />
                            {subItem.title}
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default SubSectionList;
