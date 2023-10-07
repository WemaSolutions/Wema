import { lazy } from "react";
import MiddleAboutContent from "../../content/MiddleAboutContent.json";
import FirstAboutContent from "../../content/FirstAboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
const ValuesComponent = lazy(() => import("../../components/ValuesBlock"));
const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const ValuesIntroComponent = lazy(
  () => import("../../components/ValuesIntroBlock"),
);
const PurposeDrivenComponent = lazy(
  () => import("../../components/PurposeDrivenComponent"),
);
const TeamHighlightComponent = lazy(
  () => import("../../components/TeamInfoBlock"),
);
const TestimonialsComponent = lazy(
  () => import("../../components/ReviewsBlock"),
);
const About = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="left"
        title={FirstAboutContent.title}
        content={FirstAboutContent.text}
        icon="team-building.png"
        id="intro"
      />
      <ContentBlock
        type="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="developer.svg"
        id="product"
      />
      <ValuesIntroComponent />
      <ValuesComponent />
      <PurposeDrivenComponent />
      <ContentBlock
        type="left"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="product-launch.svg"
        id="mission"
      />
      <TeamHighlightComponent />
      <MiddleBlock
        title={MiddleAboutContent.title}
        content={MiddleAboutContent.text}
        button={MiddleAboutContent.button}
      />
      <TestimonialsComponent />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default About;
