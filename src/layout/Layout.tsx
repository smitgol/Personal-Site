import { Container } from "./LayoutStyles";
import type {Children} from "../interfaces/index";


export const Layout:React.FC<Children> = ({ children }) => {
  return (
    <Container>
      <main>{children}</main>
    </Container>
  );
};