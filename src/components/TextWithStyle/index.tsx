  interface ITextWithStyleProps {
    text?: string;
    styleClass?: string;
  }

export  const TextWithStyle:React.FC<ITextWithStyleProps> = ({ text, styleClass }) => {
    return <span className={styleClass}>{text}</span>;
};

export default TextWithStyle;
