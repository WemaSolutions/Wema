import React from 'react';
import { Row, Col } from "antd";
import { withTranslation, WithTranslation } from "react-i18next";
import KeyOfferings from "../../common/List";
import { SvgIcon } from "../../common/SvgIcon";
import {  MinTitle,Content, ContentWrapper } from '../ServicesBlock/styles';
import { ServicesBlockWrapper } from '../ServicesBlock/styles';
interface ServicesProps extends WithTranslation {
  title: string;
  description: string;
  iconSrc: string;
  Offerings: string[];
}


const ServicesBlock: React.FC<ServicesProps> = ({
  title,
  description,
  iconSrc,
  Offerings,
  t
}) => {
  return (
    <ServicesBlockWrapper>
      
        <Row justify="center" align="middle">
          <ContentWrapper>

            <Col lg={16} md={16} sm={24} xs={24}>
              <MinTitle>{t(title)}</MinTitle>
              <Content>{t(description)}</Content>
              <KeyOfferings
                offerings={Offerings} // Pass Offerings prop to the KeyOfferings component
                t={t}
              />
            </Col>
          </ContentWrapper>
          <Col lg={11} md={11} sm={12} xs={24}>
            <SvgIcon src={iconSrc} width="100%" height="100%" />
          </Col>
        </Row>
      
    </ServicesBlockWrapper>
  );
}

export default withTranslation()(ServicesBlock);
