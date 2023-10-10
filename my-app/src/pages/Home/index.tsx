import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import HeroComponent from "../../components/ContentBlock/HeroContentBlock";
const FloatBlock = lazy(() => import("../../components/FloatBlock"));
const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const PurposeDrivenComponent = lazy(
  () => import("../../components/PurposeDrivenComponent"),
);
const TeamHighlightComponent = lazy(
  () => import("../../components/TeamInfoBlock"),
);
const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="Normal"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="handshake.png"
        id="intro"
      />
      <FloatBlock />
      <HeroComponent />
      <ContentBlock
        type="Normal"
        title={ProductContent.title}
        content={ProductContent.text}
        button={ProductContent.button}
        icon="developer.svg"
        id="Intro"
      />

      <PurposeDrivenComponent />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />

      <TeamHighlightComponent />
      <MiddleBlock
        title={ContactContent.title}
        content={ContactContent.text}
        button={ContactContent.button}
      />
    </Container>
  );
};

export default Home;
