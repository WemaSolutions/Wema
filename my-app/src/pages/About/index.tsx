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
const ShowBlock = lazy(() => import("../../components/ShowBlock"));
const PurposeDrivenComponent = lazy(
  () => import("../../components/PurposeDrivenComponent"),
);
const TeamHighlightComponent = lazy(
  () => import("../../components/TeamInfoBlock"),
);
const TestimonialsComponent = lazy(
  () => import("../../components/ReviewsBlock"),
);
const InteractiveBlock = lazy(
  () => import("../../components/InteractiveBlock"),
);
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
const About = () => {
  return (
    <Container>
      <ScrollToTop />

      <InteractiveBlock />

      <ContentBlock
        type="left"
        title={FirstAboutContent.title}
        content={FirstAboutContent.text}
        icon="team-building.png"
        id="intro"
      />
      <Flip data={servicesData} />
      <ShowBlock />
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
