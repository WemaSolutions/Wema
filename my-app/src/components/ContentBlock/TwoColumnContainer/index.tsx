import { Row } from 'antd';
import { ServiceContentProps } from '../types';
import { Container, StyledColumn } from '../../ContentBlock/TwoColumnContainer/styles';
import { Button } from "../../../common/Button";
import { withTranslation } from "react-i18next";



function ThreeColumnContainer(props: ServiceContentProps) {
    const { WebDesignDevelopment, DigitalMarketing, SEO, button } = props;

    return (
      <Container>
        <Row gutter={32}>
          <StyledColumn xs={24} md={8} >
            <img src={WebDesignDevelopment.icon} alt="Web Design & Development Icon" />
            <h2>{WebDesignDevelopment.title}</h2>
            <p>{WebDesignDevelopment.subtitle}</p>
            <Button name="submit">
                  {(button)}
            </Button>
          </StyledColumn>
          <StyledColumn xs={24} md={8} >
            <img src={DigitalMarketing.icon} alt="Digital Marketing Icon" />
            <h2>{DigitalMarketing.title}</h2>
            <p>{DigitalMarketing.subtitle}</p>
            <Button name="submit">
                  {(button)}
            </Button>
          </StyledColumn>
          <StyledColumn xs={24} md={8} >
            <img src={SEO.icon} alt="SEO Icon" />
            <h2>{SEO.title}</h2>
            <p>{SEO.subtitle}</p>
            <Button name="submit">
                  {(button)}
            </Button>
          </StyledColumn>
          
        </Row>
      </Container>
    );
}

export default withTranslation()(ThreeColumnContainer);
