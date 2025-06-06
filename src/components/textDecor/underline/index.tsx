import { UnderlineStyle } from "./styles.css";

const Underline: React.FC<React.ComponentPropsWithoutRef<"span">> = ({
  children,
  ...props
}) => (
  <span className={UnderlineStyle} {...props}>
    {children}
  </span>
);

export default Underline;
