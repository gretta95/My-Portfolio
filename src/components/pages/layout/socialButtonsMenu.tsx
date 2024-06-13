import {SOCIAL_LINKS} from "@/utils";
import {SocialButtonItem} from "@/components";

export const SocialButtonsMenu = () => {
    return (
        <div className="flex gap-[15px]">
            {
                SOCIAL_LINKS.map((item,ind)=>{
                    return(
                        <SocialButtonItem key = {ind} icon = {item.icon} link={item.link}/>
                    )

                })
            }

        </div>
    )
}