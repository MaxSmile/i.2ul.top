import React from "react";
import { FaBlogger, FaChartLine, FaUsers, FaBusinessTime } from "react-icons/fa";

const useCases = [
  {
    icon: <FaBlogger className="text-teal-500 text-4xl" />,
    title: "Content Creators",
    desc: "Bloggers, vloggers, and influencers who want to monetize clicks by showing their own ads or promotional content.",
  },
  {
    icon: <FaChartLine className="text-teal-500 text-4xl" />,
    title: "Affiliate Marketers",
    desc: "Simplify and monetize affiliate links, increasing conversion rates with tracking and monetization options.",
  },
  {
    icon: <FaUsers className="text-teal-500 text-4xl" />,
    title: "Forum Posters & Community Builders",
    desc: "Share resources while subtly promoting your own content, and track every click.",
  },
  {
    icon: <FaBusinessTime className="text-teal-500 text-4xl" />,
    title: "Small Businesses and Marketers",
    desc: "Track campaign performance with advanced analytics and customize redirect pages to promote your business.",
  },
];

const UseCasesSection = () => {
  return (
    <section className="py-12 lg:py-24">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl lg:text-4xl font-light mb-12">Who Is 2ul.top For?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, idx) => (
            <div key={idx} className="bg-white p-6 rounded-md shadow-lg text-center">
              {useCase.icon}
              <h3 className="text-xl font-semibold mt-4">{useCase.title}</h3>
              <p className="text-gray-600 mt-2">{useCase.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
