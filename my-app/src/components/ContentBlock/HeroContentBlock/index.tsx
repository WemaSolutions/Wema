import * as S from './styles';
import HeroContent from '../../../content/HeroContent.json';
import  {HeroContentProps}  from "../types";

const HeroComponent = (props: HeroContentProps) => {
 
  return (
    <S.HeroSection>
      <S.HeroTitle>{HeroContent.title}</S.HeroTitle>
      <S.HeroSubTitle>{HeroContent.subtitle}</S.HeroSubTitle>
     
    </S.HeroSection>
    
  );
}

export default HeroComponent;

