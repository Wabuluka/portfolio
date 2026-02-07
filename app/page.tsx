import Portfolio from "@/components/Portfolio";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Davies Wabuluka",
  jobTitle: "Senior Software Engineer",
  url: "https://davieswabuluka.com",
  sameAs: [
    "https://github.com/wabuluka",
    "https://www.linkedin.com/in/dwabuluka",
  ],
  email: "davieswabuluka6@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dracut",
    addressRegion: "MA",
    addressCountry: "US",
  },
  knowsAbout: [
    "React",
    "TypeScript",
    "Node.js",
    "GraphQL",
    "AWS",
    "React Native",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "Kubernetes",
  ],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Maharishi International University",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Makerere University",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Portfolio />
    </>
  );
}
