import {
  Container,
  PortfolioDiv,
  PortfolioText,
  PortfolioLinks,
  PortfolioSocial,
  SocialIcons,
  PortfolioLink,
  PortfolioSymbolAndText,
} from "./NavBarStyles";
import Link from "next/link";
import { DiCssdeck } from "react-icons/di";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { useState, useCallback, useEffect } from "react";
import { SiDiscord } from "react-icons/si";
import { links } from "../../data/sociallinks";

const NavBar: React.FC = () => {
  const [navigationClass, setNavigationClass] = useState<string>("");

  const handleNavigation = useCallback(
    (e: any) => {
      const window = e.currentTarget;
      if (window.scrollY > 2) {
        setNavigationClass("nav-scroll");
      } else if (window.scrollY < 2) {
        setNavigationClass("");
      }
    },
    [navigationClass]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <Container className={navigationClass}>
      <PortfolioDiv>
        <Link href="/">
          <PortfolioSymbolAndText>
            <DiCssdeck size="3rem" color="#64ffda" /> <span>Portfolio</span>
          </PortfolioSymbolAndText>
        </Link>
      </PortfolioDiv>
      <PortfolioLinks>
        <PortfolioText>
          <Link href="#about">
            <PortfolioLink>
              <span>About Me</span>
            </PortfolioLink>
          </Link>
        </PortfolioText>
        <PortfolioText>
          <Link href="#projects">
            <PortfolioLink>
              <span>Projects</span>
            </PortfolioLink>
          </Link>
        </PortfolioText>
        <PortfolioText>
          <Link href="#technologies">
            <PortfolioLink>
              <span>Technologies</span>
            </PortfolioLink>
          </Link>
        </PortfolioText>
      </PortfolioLinks>
      <PortfolioSocial>
        <SocialIcons href={links['github']} target="__blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href={links['linkedin']} target="__blank">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href={links['instagram']} target="__blank">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
        <SocialIcons href={links['twitter']} target="__blank">
          <AiOutlineTwitter size="3rem"></AiOutlineTwitter>
        </SocialIcons>
        <SocialIcons href={links['discord']} target="__blank">
          <SiDiscord size="3rem"></SiDiscord>
        </SocialIcons>
      </PortfolioSocial>
    </Container>
  );
};

export default NavBar;
