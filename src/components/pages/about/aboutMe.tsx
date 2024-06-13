import Link from 'next/link';
import {TextWithStyle} from "@/components";

export const AboutMe = () => (
    <div>
        <TextWithStyle text="About Me" styleClass="text-white text-[30px] w-full"/>
        <p className="text-white text-[16px] mt-[24px]">
            Welcome! As a frontend developer, I specialize in creating interactive,
            responsive, and visually engaging web experiences. My expertise in HTML,
            CSS, JavaScript, and jQuery allows me to craft seamless user interfaces that
            are both functional and attractive. With Next.js and React, I build scalable
            applications designed for performance and usability. I believe in the power
            of collaboration and work closely with UX/UI designers and backend developers
            to ensure cohesive project execution. My approach combines creativity with
            technical expertise, ensuring every project aligns with the client's vision
            and business goals. From building websites from scratch to updating existing
            applications, I'm committed to delivering high-quality results.
            Explore my portfolio to see the projects I've contributed to, and let's discuss
            how I can help you achieve your digital objectives. Together, we can create
            something amazing.
        </p>
        {/*TODO*/}
        <Link href="/portfolio" className="inline-block mt-6 bg-[#456270] text-white rounded px-[60px] py-[12px] hover:bg-[#0b2c35]">
            Portfolio
        </Link>
    </div>
);
export default AboutMe;

