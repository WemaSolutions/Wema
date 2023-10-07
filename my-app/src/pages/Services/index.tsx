import { lazy } from "react";
import ThreeColumnContainer from "../../components/ContentBlock/TwoColumnContainer";
import HeroComponent from "../../components/ContentBlock/HeroContentBlock";
import ServicesContainer from "../../components/ServicesContainer/container";
import testContent from "../../content/testContent.json";
import FirstAboutContent from "../../content/FirstAboutContent.json";
const Container = lazy(() => import("../../common/Container"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const FloatBlock = lazy(() => import("../../components/FloatBlock"));

const Services = () => {
  return (
    <Container>
      <HeroComponent />
      <ThreeColumnContainer
        WebDesignDevelopment={testContent.WebDesignDevelopment}
        DigitalMarketing={testContent.DigitalMarketing}
        SEO={testContent.SEO}
        button={testContent.SEO.button}
      />
      <FloatBlock />
      <ContentBlock
        type="left"
        title={FirstAboutContent.title}
        content={FirstAboutContent.text}
        icon="team-building.png"
        id="intro"
      />

      <ServicesContainer />
    </Container>
  );
};

export default Services;
