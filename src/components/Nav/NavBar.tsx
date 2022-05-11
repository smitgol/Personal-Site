import {
  Container,
  PortfolioDiv,
  PortfolioText,
  PortfolioLinks,
  PortfolioSocial,
  SocialIcons,
  PortfolioLink,
  PortfolioSymbolAndText,
  NavigationButton,
} from "./NavBarStyles";
import Link from "next/link";
import { DiCssdeck } from "react-icons/di";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiOutlineAlignLeft,
} from "react-icons/ai";
import { useState, useCallback, useEffect } from "react";
import { SiDiscord } from "react-icons/si";
import { links } from "../../data/sociallinks";

const NavBar: React.FC = () => {
  const [navigationClass, setNavigationClass] = useState<string>("");
  const [activeNav, setActiveNav] = useState<boolean>(false);

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

  const handleResize = useCallback(() => {
    if (window.innerWidth > 768) {
      setActiveNav(false);
    }
    console.log(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleNavigation);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  const scrollToY = (value: number) => {
    window.scrollTo({ top: value, left: 0, behavior: "smooth" });
  };
  const responsive_nav_class_links = activeNav === true ? "nav__sm" : "";

  const responsive_nav_class_btns = activeNav === true ? "nav__btn__sm" : "";

  const handleNavigationResponsive = () => {
    setActiveNav(!activeNav);
  };

  return (
    <Container className={navigationClass}>
      <PortfolioDiv>
        <div
          onClick={() => {
            scrollToY(1);
          }}
        >
          <PortfolioSymbolAndText>
            <DiCssdeck size="3rem" color="#64ffda" /> <span>Portfolio</span>
          </PortfolioSymbolAndText>
        </div>
        <NavigationButton
          onClick={() => {
            handleNavigationResponsive();
          }}
        >
          <AiOutlineAlignLeft size="3rem" />
        </NavigationButton>
      </PortfolioDiv>
      <PortfolioLinks className={responsive_nav_class_links}>
        <PortfolioText>
          <div
            onClick={() => {
              scrollToY(5);
            }}
          >
            <PortfolioLink>
              <span>About Me</span>
            </PortfolioLink>
          </div>
        </PortfolioText>
        <PortfolioText>
          <div
            onClick={() => {
              scrollToY(550);
            }}
          >
            <PortfolioLink>
              <span>Projects</span>
            </PortfolioLink>
          </div>
        </PortfolioText>
        <PortfolioText>
          <div
            onClick={() => {
              scrollToY(3550);
            }}
          >
            <PortfolioLink>
              <span>Technologies</span>
            </PortfolioLink>
          </div>
        </PortfolioText>
      </PortfolioLinks>
      <PortfolioSocial className={responsive_nav_class_btns}>
        <SocialIcons href={links["github"]} target="__blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href={links["linkedin"]} target="__blank">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href={links["instagram"]} target="__blank">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
        <SocialIcons href={links["twitter"]} target="__blank">
          <AiOutlineTwitter size="3rem"></AiOutlineTwitter>
        </SocialIcons>
        <SocialIcons href={links["discord"]} target="__blank">
          <SiDiscord size="3rem"></SiDiscord>
        </SocialIcons>
      </PortfolioSocial>
    </Container>
  );
};

export default NavBar;
