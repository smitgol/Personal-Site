import type { NextPage } from "next";
import NavBar from "../components/Nav/NavBar";
import { Layout } from "../layout/Layout";
import Hero from "../components/Hero/Hero";
import { SectionTitleRow, SectionTitle } from "../styles/generalComponent";
import Footer from "../components/Footer/Footer";
import dynamic from 'next/dynamic'




const Project = dynamic(()=> import("../components/Project/Project"))

const Technologies = dynamic(()=> import("../components/Technologies/Technologies"))
const Home: NextPage = () => {
  return (
    <Layout>
      <NavBar />
      <Hero />
      <SectionTitleRow>
        <SectionTitle>Some Things I’ve Built</SectionTitle>
      </SectionTitleRow>
      <Project />
      <SectionTitleRow>
        <SectionTitle>Technologies</SectionTitle>
      </SectionTitleRow>
      <Technologies />
      <Footer />
    </Layout>
  );
};

export default Home;
