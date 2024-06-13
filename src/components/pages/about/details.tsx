import {SocialButtonsMenu} from "@/components/pages/layout";
import {TextWithStyle} from "@/components";

export const Details = () => {
    const nowDate = new Date();
    const myBirthday = new Date(1995, 11, 18);

    return (
        <div className="w-full max-w-[150px]">
            <TextWithStyle text="Details" styleClass="text-white text-[30px]" />
            <ul className="text-white text-[16px] my-[24px] flex flex-col gap-[24px]">
                <li>
                    <span className="block font-bold">Name:</span>
                    Gretta Margaryan
                </li>
                <li>
                    <span className="block font-bold">Age:</span>
                    {nowDate.getFullYear() - myBirthday.getFullYear() - (nowDate.getMonth() < myBirthday.getMonth() || (nowDate.getMonth() === myBirthday.getMonth() && nowDate.getDate() < myBirthday.getDate()) ? 1 : 0)}
                </li>
                <li>
                    <span className="block font-bold">Location:</span>
                    Yerevan, Armenia
                </li>
            </ul>
            <SocialButtonsMenu />
        </div>
    );
};

export default Details;