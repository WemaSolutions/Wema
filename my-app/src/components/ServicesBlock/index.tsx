import React from "react";
import { Row, Col } from "antd";
import { withTranslation, WithTranslation } from "react-i18next";
import KeyOfferings from "../../common/List";
import ExpandableList from "../Expandable List";
import { SvgIcon } from "../../common/SvgIcon";
import {
  MinTitle,
  Content,
  ContentWrapper,
  ExpandableListWrapper,
} from "../ServicesBlock/styles";
import { ServicesBlockWrapper } from "../ServicesBlock/styles";

interface ServicesProps extends WithTranslation {
  title: string;
  description: string;
  iconSrc: string;
  offerings: string[];
  Exp: { title: string; content: string }[]; // Adding expertise as a prop
}

// ... (other imports)
const ServicesBlock: React.FC<ServicesProps> = ({
  title,
  description,
  iconSrc,
  offerings,
  Exp,
  t,
}) => {
  return (
    <ServicesBlockWrapper>
      <Row justify="center" align="middle" gutter={32}>
        <Col lg={12} md={12} sm={24} xs={24}>
          <MinTitle>{t(title)}</MinTitle>
          <Content>{t(description)}</Content>
          <KeyOfferings offerings={offerings} t={t} />
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <SvgIcon src={iconSrc} width="100%" height="100%" />
          <ExpandableListWrapper>
            <ExpandableList data={Exp} />
          </ExpandableListWrapper>
        </Col>
      </Row>
    </ServicesBlockWrapper>
  );
};

export default withTranslation()(ServicesBlock);
