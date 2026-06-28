import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  type?: 'website' | 'article';
  publishedAt?: string;
  updatedAt?: string;
}

const SITE_URL = 'https://stingerisrael.co.il/class';
const SITE_NAME = 'סטינגר ישראל';

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = [],
  path = '',
  type = 'website',
  publishedAt,
  updatedAt,
}) => {
  const fullTitle = title.includes('סטינגר') ? title : `${title} | ${SITE_NAME}`;
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="he_IL" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      {type === 'article' && publishedAt && (
        <meta property="article:published_time" content={publishedAt} />
      )}
      {type === 'article' && updatedAt && (
        <meta property="article:modified_time" content={updatedAt} />
      )}
    </Helmet>
  );
};

export default SEO;
