import {NAV_LINKS} from "@/utils";
import {NavigationItem} from "@/components";

export const NavigationMenu = ()=>{
    return(
        <nav className="mt-[50px]">
            <ul className="flex flex-col gap-[30px]">
                {NAV_LINKS.map((item,ind)=>{
                    return(
                        <NavigationItem key = {ind} href={item.path} icon = {item.icon} styleClass = "text-[#646464] hover:text-[#4c93b0]">{item.linkName}</NavigationItem>
                    )
                })}

            </ul>
        </nav>
    )
  }
  export default NavigationMenu;