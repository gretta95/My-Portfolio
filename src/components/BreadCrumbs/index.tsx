import React from 'react';
import Link from "next/link";


interface IBreadcrumbsProps {
    title?: string

}

export const Breadcrumbs: React.FC<IBreadcrumbsProps> = ({title}) => {

    return (
        <div className="flex gap-[20px]">

            <Link href="/">
                <div className="flex gap-[15px]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="svg-icon"
                         viewBox="0 0 1024 1024" version="1.1" width="20" height="20">
                        <path
                            d="M 949.082 519.343 L 508.704 107.59 L 68.327 518.134 c -8.616 8.032 -9.097 21.538 -1.044 30.144 c 8.043 8.6 21.566 9.086 30.175 1.036 l 411.215 -383.338 l 411.233 384.505 a 21.298 21.298 0 0 0 14.59 5.76 c 5.69 0 11.384 -2.26 15.584 -6.757 c 8.058 -8.6 7.615 -22.096 -0.998 -30.14 Z m 0 0"
                            fill="#fff"/>
                        <path
                            d="M 814.7 527.8 c -11.788 0 -21.35 9.557 -21.35 21.329 v 327.037 H 622.552 V 648.663 H 394.825 v 227.503 H 224.033 V 549.129 c 0 -11.772 -9.552 -21.328 -21.348 -21.328 c -11.803 0 -21.354 9.556 -21.354 21.328 V 918.82 h 256.195 V 691.318 h 142.33 V 918.82 h 256.189 V 549.13 c 0 -11.772 -9.563 -21.328 -21.345 -21.328 Z m 0 0 M 665.255 222.095 H 793.35 v 113.749 c 0 11.79 9.563 21.333 21.35 21.333 c 11.783 0 21.346 -9.544 21.346 -21.333 V 179.44 H 665.255 c -11.79 0 -21.353 9.538 -21.353 21.328 c -0.001 11.786 9.562 21.327 21.353 21.327 Z m 0 0"
                            fill="#fff"/>
                    </svg>
                    <span className="text-white">Home / </span><span className="text-white">{title}</span>
                </div>
            </Link>


        </div>
    );
};

