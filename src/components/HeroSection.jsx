import React from "react";

const HeroSection = () => {
  return (
    <section className="py-8 lg:py-24" id="clarification">
      <div className="container mx-auto">
        {/* Headline */}
        <h1 className="text-xl lg:text-3xl font-light mt-16">
          Choose the Plan That Suits You Best
        </h1>

        {/* Subheadline */}
        <h2 className="tracking-4 py-4 lg:py-8 font-light text-sm lg:text-2xl">
          Whether you’re looking to shorten links or unlock full customization and monetization options, we have a plan for you.
        </h2>

        {/* Question Text */}
        <h3 className="tracking-4 font-normal text-xl">
          Ready to take control of your links and maximize your earnings?
        </h3>

        {/* Call to Action Links */}
        <div className="mt-6 max-w-2xl mx-auto">
          <a
            href="/pricing"
            className="text-teal-700 text-xl pl-8 hover:underline hover:text-teal-500 duration-300 mr-6"
          >
            View Pricing
          </a>
          <a
            href="https://2ul.top"
            className="button-teal mt-4 inline-block px-6 py-3 bg-teal-500 text-white rounded-md hover:bg-teal-600 duration-300"
          >
            Start Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
