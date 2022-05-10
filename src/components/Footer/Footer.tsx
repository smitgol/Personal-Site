import React from "react";
import { Connect, ConnectText, ConnectLink, PersonalSiteLink } from "./FooterStyles";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
import { links } from "../../data/sociallinks";

const Footer: React.FC = () => {
  return (
    <>
      <Connect>
        <ConnectText>connect with me:-</ConnectText>
        <ConnectLink href={links['github']} target="__blank">
          <AiFillGithub size="2.5rem"></AiFillGithub>
        </ConnectLink>
        <ConnectLink href={links['instagram']} target="__blank">
          <AiFillInstagram size="2.5rem"></AiFillInstagram>
        </ConnectLink>
        <ConnectLink href={links['linkedin']} target="__blank">
          <AiFillLinkedin size="2.5rem"></AiFillLinkedin>
        </ConnectLink>
        <ConnectLink href={links['twitter']} target="__blank">
          <AiOutlineTwitter size="2.5rem"></AiOutlineTwitter>
        </ConnectLink>
        <ConnectLink href={links['discord']} target="__blank">
          <SiDiscord size="2.5rem"></SiDiscord>
        </ConnectLink>
      </Connect>
      <PersonalSiteLink>
        <ConnectText>Find This Website Gihub Link here :-</ConnectText>
        <ConnectLink href={links['personal_site_link']} target="__blank">
          <AiFillGithub size="2.5rem"></AiFillGithub>
        </ConnectLink>
      </PersonalSiteLink>
    </>
  );
};

export default Footer;
