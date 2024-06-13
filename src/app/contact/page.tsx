import {Breadcrumbs, TextWithStyle} from "@/components";
import {ContactMeData} from "@/mockData/contactMe";
import IconContainer from "@/components/pages/resume/iconContainer";

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="container">
                <Breadcrumbs title="Contact"/>
                <div className="mt-[50px]">
                    <div className="w-full max-w-[500px] bg-[#000]  rounded-[16px] p-[24px]">
                        <TextWithStyle text="Contact Me" styleClass="text-[#fff] text-[30px]"/>
                        <ul>
                            {
                                ContactMeData.map((item, index) => {
                                    return (
                                        <li key={index} className="flex items-center mt-[22px] gap-[15px] border-b border-dashed border-slate-300  py-[12px]">
                                            <IconContainer icon={item.icon}  />
                                            <TextWithStyle text={item.title} styleClass="text-[#fff] text-[16px]"/>
                                        </li>
                                    )
                                })
                            }
                        </ul>

                    </div>


                </div>

            </div>
        </div>
    )
}
export default Contact;