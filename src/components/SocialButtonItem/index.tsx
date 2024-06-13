import Link from "next/link";

interface ISocialButtonProps {
    icon: React.ReactNode;
    link: string;
}

export const SocialButtonItem: React.FC<ISocialButtonProps> = ({ icon, link }) => {
    return (
        <Link href={link}
              target='_blank'
              className='w-10 h-10 flex items-center justify-center rounded-full bg-[#456270] hover:bg-[#27a4c545] transition-all'>
                {icon}
        </Link>
    )
}

export  default SocialButtonItem;