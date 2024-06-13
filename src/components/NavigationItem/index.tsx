import Link from 'next/link';
import React from "react";

interface INavigationItemProps {
    href: string;
    children: React.ReactNode;
    icon?: React.ReactNode;
    styleClass?: string;

}

export const NavigationItem:React.FC<INavigationItemProps> = ({ href, children,icon ,styleClass}) => {
    return (
        <li className="flex gap-[10px]">
            {icon && icon}
            <Link href={href} className={styleClass}>{children}</Link>
        </li>
    );
};

export default NavigationItem;
