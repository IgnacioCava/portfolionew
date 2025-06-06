import { BoldStyle } from "./styles.css";

const Bold = ({ children }: { children: string }) => (
  <span className={BoldStyle}>{children}</span>
);
export default Bold;
