// src/components/AdvancedAnalyticsSection.jsx

const AdvancedAnalyticsSection = () => {
  return (
    <section className="py-12 lg:py-24 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl lg:text-4xl font-light mb-8">Advanced Analytics and Tracking</h2>
        <p className="text-lg mb-12">
          Integrate Google Tag Manager and Facebook Pixel to track detailed behaviors and gain insights into your audience.
        </p>

        {/* Visual: Placeholder for Analytics Screenshot */}
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img src="/path/to/analytics-dashboard-screenshot.png" alt="Analytics Dashboard" className="w-full h-auto" />
          <div className="absolute inset-0 bg-teal-500 bg-opacity-75 flex items-center justify-center text-white">
            <p className="text-xl font-bold">See How Easy It Is to Track Performance</p>
          </div>
        </div>

        <div className="mt-8">
          <a
            href="#"
            className="px-6 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-500 duration-300"
          >
            Learn More About Analytics Integration
          </a>
        </div>
      </div>
    </section>
  );
};

export default AdvancedAnalyticsSection;
