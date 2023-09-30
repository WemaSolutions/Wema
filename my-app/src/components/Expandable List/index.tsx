import React, { useState } from 'react';
import { SvgIcon } from '../../common/SvgIcon';
import { Container, ContentWrapper, MinTitle, Content, IconWrapper, FullWidthRow } from './styles';
import { Row, Col } from 'antd';

interface DataItem {
  title: string;
  content: string;
}

interface ExpandableListProps {
  data: DataItem[];
}

const ExpandableList: React.FC<ExpandableListProps> = ({ data }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <Container>
      {data.map((item, index) => (
        <ContentWrapper
          key={index}
          onClick={() => toggleExpand(index)}
        >
          <FullWidthRow style={{ alignSelf: "center" }}>

            <Col span={22}>
              <MinTitle>{item.title}</MinTitle>
            </Col>
            <Col span={2}>
              <IconWrapper>
                <div>
                  <SvgIcon
                    src={expandedIndex === index ? "up-arrow.png" : "down-arrow.png"}
                    width="32px"
                    height="30px"
                  />
                </div>
              </IconWrapper>

            </Col>
            {expandedIndex === index && <Content>{item.content}</Content>}

          </FullWidthRow>
        </ContentWrapper>
      ))}
    </Container>
  );
}

export default ExpandableList;
