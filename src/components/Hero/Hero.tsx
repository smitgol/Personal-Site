import {
  Container,
  HiiText,
  NameText,
  BuildText,
  DescriptionText,
  Button,
  ButtonGroup,
} from "./HeroStyles";
import { links } from "../../data/sociallinks";

const Hero: React.FC = () => {
  return (
    <Container>
      <HiiText>Hii, this is</HiiText>
      <NameText>Smit Gol.</NameText>
      <BuildText>I build things for web.</BuildText>
      <DescriptionText>
        I am passionate software developer with ready to learn new skills.I can
        work on both frontend and backend.currently looking for opportunity in
        web2 and web3 development role.
      </DescriptionText>
      <ButtonGroup>
        <Button href={`mailto:${links["email"]}`} target="__blank">
          Contact Me
        </Button>
        <Button href={links["resume"]} target="__blank">
          Resume
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default Hero;
