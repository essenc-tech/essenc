
interface ToolStructuredDataProps {
  name: string;
  description: string;
  url: string;
  category: string;
  faqs: {
    question: string;
    answer: string;
  }[];
}

export default function ToolStructuredData({
  name,
  description,
  url,
  category,
  faqs,
}: ToolStructuredDataProps) {
  const graph = [
    {
      "@type": "WebApplication",
      name,
      description,
      url,
      applicationCategory: category,
      operatingSystem: "Any",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Essenc",
          item: "https://essenc.tech/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "College",
          item: "https://essenc.tech/college",
        },
        {
          "@type": "ListItem",
          position: 3,
          name,
          item: url,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        }),
      }}
    />
  );
}