import React from 'react';
import { lazy } from "react";
import ThreeColumnContainer from "../../components/ContentBlock/TwoColumnContainer";
import HeroComponent from "../../components/ContentBlock/HeroContentBlock";
import HeroContent from "../../content/HeroContent.json"
import ServicesContainer from "../../components/ServicesContainer/container";
import testContent from "../../content/testContent.json";




const Container = lazy(() => import("../../common/Container"));



const Services = () => {
  return (
    <Container>
      <HeroComponent
        title={HeroContent.title}
        subtitle={HeroContent.subtitle}
      />
      <ThreeColumnContainer
        WebDesignDevelopment={testContent.WebDesignDevelopment}
        DigitalMarketing={testContent.DigitalMarketing}
        SEO={testContent.SEO}
        button={testContent.SEO.button}
      />
      <ServicesContainer />
    </Container>
  );
}

export default Services;
