import { lazy } from "react";
import MiddleAboutContent from "../../content/MiddleAboutContent.json";

import MissionContent from "../../content/MissionContent.json";
import ThreeColumnContainer from "../../components/ContentBlock/TwoColumnContainer";

import ServicesContainer from "../../components/ServicesContainer/container";
import testContent from "../../content/testContent.json";
import FirstAboutContent from "../../content/FirstAboutContent.json";
const Container = lazy(() => import("../../common/Container"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const InteractiveBlock = lazy(
  () => import("../../components/InteractiveBlock"),
);
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));


const servicesData = [
  {
    name: "Web Development",
    description: "Building responsive and scalable websites.",
    color: "#FF5733",
  },
  {
    name: "SEO",
    description: "Optimizing your online presence.",
    color: "#5733FF",
  },
  {
    name: "Digital Marketing",
    description: "Boosting your brand's digital footprint.",
    color: "#FF33A6",
  },
];

const Flip = lazy(() => import("../../components/FlipCard"));
const Services = () => {
  return (
    <Container>
     
      <MiddleBlock
        title={MiddleAboutContent.title}
        content={MiddleAboutContent.text}
        button={MiddleAboutContent.button}
      />
      <InteractiveBlock />
      <Flip data={servicesData} />
      <ThreeColumnContainer
        WebDesignDevelopment={testContent.WebDesignDevelopment}
        DigitalMarketing={testContent.DigitalMarketing}
        SEO={testContent.SEO}
        button={testContent.SEO.button}
      />
      <ContentBlock
        type="left"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="product-launch.svg"
        id="mission"
      />
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
