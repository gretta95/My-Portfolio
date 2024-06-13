import ImageWithOverlay from "@/components/pages/layout/imageWithOverlay";
import {ImageWithStyle} from "@/components";

import Avatar from "../../public/images/avatar.jpg"
import TextWithStyle from "../components/TextWithStyle";
import {NavigationMenu, SocialButtonsMenu} from "@/components/pages/layout";


export default function Home() {


    return (
        <main>
            <div className="flex min-h-screen justify-between w-full">
                <div className="w-full max-w-[600px] bg-[#040c15] p-[30px] flex flex-col justify-between">
                    <div>
                        <div className="flex flex-col gap-[20px] justify-center items-center">
                            <ImageWithStyle src={Avatar} alt="Avatar"
                                            styleClass="w-full max-w-[250px] object-cover h-full rounded-full border-4 "/>
                            <TextWithStyle text="Gretta Margaryan" styleClass="text-[#fff] text-[20px] "/>
                            <SocialButtonsMenu/>
                        </div>
                        <NavigationMenu/>
                    </div>
                    <p className="text-[#646464] text-center pt-[12px] border-t border-[#646464]">1 Years Experience jobs</p>
                </div>
                <ImageWithOverlay/>
            </div>
        </main>
    );
}
