import { lazy } from "react";
import FirstAboutContent from "../../content/FirstAboutContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";

const ValuesComponent = lazy(() => import("../../components/ValuesBlock"));
const Contact = lazy(() => import("../../components/ContactForm"));

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const ValuesIntroComponent = lazy(
  () => import("../../components/ValuesIntroBlock"),
);
const ShowBlock = lazy(() => import("../../components/ShowBlock"));

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

      <ShowBlock />
      <ContentBlock
        type="Normal"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="developer.svg"
        id="product"
      />
      <ValuesIntroComponent />
      <ValuesComponent />

      <TestimonialsComponent />
      <TeamHighlightComponent />

      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default About;
