import React from 'react';

interface IIconContainerProps {
    icon: React.ReactNode;
    style?: string;
}

const IconContainer:React.FC<IIconContainerProps> = ({ icon,style }) => {
    return (
        <div className={style}>
            {icon}
        </div>
    );
};

export default IconContainer;
