import React from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "ציפי מסינג - מפעילה מקצועית לילדות | הפעלות וחוויות בלתי נשכחות",
  description = "ציפי מסינג - מפעילה מקצועית לילדות באזור המרכז. מתנפחים, סדנאות שוקולד, פיתות בטאבון, בלונאות ועוד. יחס אישי לכל ילדה עם אנרגיות חיוביות ומקצועיות אמיתית.",
  keywords = "ציפי מסינג, מפעילה לילדות, הפעלות ילדים, מתנפחים, סדנאות שוקולד, פיתות בטאבון, בלונאות, הפעלות במרכז, אירועי ילדים, קייטנות, בתי ספר",
  canonicalUrl = "https://tzipimessing.com/"
}) => {
  React.useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Update canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonicalUrl);
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', canonicalUrl);
    }
    
    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title);
    }
    
    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description);
    }
    
    const twitterUrl = document.querySelector('meta[property="twitter:url"]');
    if (twitterUrl) {
      twitterUrl.setAttribute('content', canonicalUrl);
    }
  }, [title, description, keywords, canonicalUrl]);

  return null; // This component doesn't render anything
};

export default SEOHead;