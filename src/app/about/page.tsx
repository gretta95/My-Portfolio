import {Breadcrumbs, ImageWithStyle, TextWithStyle} from "@/components";
import Avatar from "../../../public/images/avatar.jpg";
import {SocialButtonsMenu} from "@/components/pages/layout";
import AboutMe from "@/components/pages/about/aboutMe";
import {Details} from "@/components/pages/about";


const AboutPage = () => {
    return (
        <div className="about-container">
            <div className="container">
                <Breadcrumbs title="About"/>
                <TextWithStyle text="Hello!" styleClass="text-center text-[60px] text-white mt-[80px] block"/>
                <div className="flex mt-[60px]  gap-[80px] w-full">
                    <ImageWithStyle src={Avatar} alt="Avatar"
                                    styleClass="w-full max-w-[300px] object-cover rounded-full  border-4 rounded-br-lg "/>
                    <div className="flex gap-[80px] w-full">
                        <AboutMe/>
                        <Details />
                    </div>

                </div>
            </div>
        </div>
    )
}
export default AboutPage;