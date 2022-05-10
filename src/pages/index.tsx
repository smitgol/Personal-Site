import type { NextPage } from "next";
import NavBar from "../components/Nav/NavBar";
import { Layout } from "../layout/Layout";
import Hero from "../components/Hero/Hero";
import Project from "../components/Project/Project";
import Technologies from "../components/Technologies/Technologies";
import { SectionTitleRow, SectionTitle } from "../styles/generalComponent";
import Footer from "../components/Footer/Footer";

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
        <SectionTitle>Technologies That I Know</SectionTitle>
      </SectionTitleRow>
      <Technologies />
      <Footer />
    </Layout>
  );
};

export default Home;
