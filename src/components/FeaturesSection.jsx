import React from "react";
import Feature from "./Feature";  // Import the Feature component

const featuresData = [
  {
    title: "Unlimited Free Links",
    desc: "Create as many short links as you need with no limits on the free plan.",
  },
  {
    title: "Customizable Redirect Pages",
    desc: "Take full control of your redirect pages with HTML customization, adding your own ads or promotions.",
  },
  {
    title: "Monetize Your Links",
    desc: "Earn revenue by showing ads or promotions on your redirect pages before sending users to the final destination.",
  },
  {
    title: "Advanced Analytics",
    desc: "Track every click with deep analytics integration including Google Tag Manager and Facebook Pixel.",
  },
  {
    title: "Custom Domains",
    desc: "Use your own domain for branded links and professional appearance.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-12 lg:py-24 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-2xl lg:text-4xl font-light text-center mb-8">
          Why Choose 2ul.top?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, idx) => (
            <Feature
              key={idx}
              title={feature.title}
              desc={feature.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
