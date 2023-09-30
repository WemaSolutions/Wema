
import { OfferingsList, OfferingItem } from "./styles";
import Container from "../Container";
import { MinTitle } from "../../components/ContentBlock/LeftContentBlock/styles";

interface KeyOfferingsProps {
    offerings: string[];
    t: (key: any) => string;
}

const KeyOfferings = ({ offerings, t }: KeyOfferingsProps) => (
  <Container>
    <MinTitle>{t('What We Can Do')}</MinTitle>
    <OfferingsList>
      {offerings.map((offering, index) => (
          <OfferingItem key={index}>{t(offering)}</OfferingItem>
      ))}
    </OfferingsList>
  </Container>
);

export default (KeyOfferings);
