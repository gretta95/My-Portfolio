import {Breadcrumbs, ImageWithStyle, TextWithStyle} from "@/components";

import avatar from "../../../public/images/avatar.jpg";
import {PersonalDataFirstPart, PersonalDataSecondPart} from "@/mockData/personaldata";
import SectionWithIcon from "@/components/pages/resume/sectionWithIcon";
import {IPersonalDataFirstPartItem, ISubSection} from "@/types";
import SubSectionList from "@/components/pages/resume/subSectionList";
import {PersonalContacts} from "@/components/pages/resume";
import SubSectionItem from "@/components/pages/resume/subSectionItem";


const Resume = () => {

    return (
        <div className="resume-container">
            <div className="container">
                <Breadcrumbs title="Resume"/>
                <div className="w-full max-w-[800px]  mt-[30px] ">
                    <div className="resume-banner">
                        <div className="p-[24px]">
                            <TextWithStyle text="Gretta Margaryan"
                                           styleClass="text-white text-[30px] text-center mt-[30px]   block"/>
                            <TextWithStyle text="Developer"
                                           styleClass="text-[#838383] text-[20px] text-center   block"/>
                        </div>
                    </div>
                    <div className="relative bg-[#ffffff] ">
                        <ImageWithStyle src={avatar} alt="Avatar Image"
                                        styleClass="w-full max-w-[200px] object-cover rounded-full  border-4  absolute top-[-110px] ml-[24px] "/>
                        <div className=" flex">
                            <div
                                className="text-white w-full  max-w-[300px] bg-[#262f37] border-t-4 rounded-tr-[80px] ">
                                <div className="pt-[70px]  mb-[70px]">
                                    <div className="p-[24px] mt-[15px] flex  flex-col gap-[30px]">
                                        {
                                            PersonalDataFirstPart.map((item: IPersonalDataFirstPartItem, ind: number) => {
                                                return (
                                                    <div key={ind}>
                                                        <SectionWithIcon item={item}/>
                                                        <SubSectionList item={item}/>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="w-full  px-[24px]">
                                <PersonalContacts/>
                                <div>
                                    {PersonalDataSecondPart.map((item, ind) => {
                                        return (
                                            <div className="mt-[30px] ">
                                                <SectionWithIcon item={item} type="dark"/>
                                                {/*@ts-ignore*/}
                                                <div className={`mt-[25px] ${(!item.subSections.some(subItem => subItem.icon) ? '' : 'flex gap-[20px]')}`}>
                                                    {item.subSections.map((item: ISubSection, ind: number) => {
                                                        return (
                                                            <div  key={ind}>
                                                                <SubSectionItem  item={item}/>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
export default Resume;