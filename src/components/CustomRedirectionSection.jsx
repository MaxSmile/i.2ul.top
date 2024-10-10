// src/components/CustomRedirectionSection.jsx

const CustomRedirectionSection = () => {
  return (
    <section className="py-12 lg:py-24">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl lg:text-4xl mb-8">The Power of Custom Redirection Pages</h2>
        <p className="text-lg mb-12">
          Take full control over your links with custom redirection pages. Customize the experience, display your own ads, and keep users engaged while redirecting them to their destination.
        </p>

        {/* Visual Explanation */}
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img src="/path/to/custom-redirect-screenshot.png" alt="Custom Redirection Page" className="w-full h-auto" />
          <div className="absolute inset-0 bg-teal-500 bg-opacity-75 flex items-center justify-center text-white">
            <p className="text-xl font-bold">Create Your Own Ads and Branding</p>
          </div>
        </div>

        {/* Benefits of Custom Redirection Pages */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Monetize Your Links</h3>
            <p className="text-gray-600">Use custom HTML to display ads or promotions on your redirection page, allowing you to earn revenue from every click.</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Personalized Branding</h3>
            <p className="text-gray-600">Add your logo, brand colors, and messaging to keep users engaged with your content, even while redirecting them to external sites.</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Custom User Experience</h3>
            <p className="text-gray-600">Choose how long users stay on your redirect page, display countdowns, or guide them through a specific message before sending them to the final URL.</p>
          </div>
        </div>

        <div className="mt-12">
          <a
            href="#"
            className="px-6 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-500 duration-300"
          >
            Explore Custom Redirection Pages
          </a>
        </div>
      </div>
    </section>
  );
};

export default CustomRedirectionSection;
