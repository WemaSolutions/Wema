export interface ContentBlockProps {
  icon: string;
  title: string;
  content: string;
  section?: any;
  button?: any;
  t?: any;
  id: string;
  type?: string;
}


export interface ServiceContentProps {
  WebDesignDevelopment: ServiceItem;
  DigitalMarketing: ServiceItem;
  SEO: ServiceItem;
  button?: string; // marked as optional
}

interface ServiceItem {
  icon: string;
  title: string;
  subtitle: string;
}


export interface HeroContentProps  {
    title: string;
    subtitle: string;
    
  }
  


export{}