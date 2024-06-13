

interface INameWriterProps {
    name: string;
}

export const NameWriter: React.FC<INameWriterProps> = ({name,}) => {

    return <span className="text-[#b6f0ff] text-[30px] block">I am <span className="text-[#4c93b0]">{name}</span><span></span></span>;
};