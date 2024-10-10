// src/components/FinalCTASection.jsx

const FinalCTASection = () => {
  return (
    <section className="py-12 lg:py-24 bg-gray-100 text-center">
      <div className="container mx-auto">
        <h2 className="text-2xl lg:text-4xl font-light mb-8">Ready to Take Your Links to the Next Level?</h2>
        <p className="text-lg mb-12">
          Start for free or explore our premium options for complete control and monetization. 2ul.top gives you the power to make every click count.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            href="/pricing"
            className="inline-block px-6 py-3 bg-white text-blue-600 font-bold rounded-md hover:bg-gray-100 duration-300"
          >
            View Pricing Plans
          </a>
          <a
            href="https://2ul.top"
            className="inline-block px-6 py-3 bg-teal-500 font-bold rounded-md hover:bg-teal-600 duration-300"
          >
            Start Now for Free
          </a>
        </div>

        <div className="mt-12">
          <p className="text-sm">
            Have questions? <a href="/contact" className="underline">Contact us</a> for more information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
