import LeftContentBlock from "./LeftContentBlock";
import RightContentBlock from "./RightContentBlock";
import NormBlock from "./NormBlock";
import { ContentBlockProps } from "./types";

const ContentBlock = (props: ContentBlockProps) => {
  if (props.type === "left") return <LeftContentBlock {...props} />;
  if (props.type === "right") return <RightContentBlock {...props} />;
  if (props.type === "Normal") return <NormBlock {...props} />;
  return null;
};

export default ContentBlock;
