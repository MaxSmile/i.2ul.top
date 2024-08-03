import Head from 'next/head';
import Layout from '../_layout';

export default function AboutPage() {
  return (
    <Layout>
      <Head>
        <title>About 2ul.top</title>
        <meta
          name="description"
          content="Learn more about 2ul.top, the most cost-effective URL shortener with premium features (free!)"
        />
      </Head>
      <section className="py-24" id="about">
        <div className="container mx-auto max-w-4xl p-4">
          <article className="py-20">
            <h1 className="mb-5 text-3xl font-bold text-secondary">About 2ul.top</h1>

            <div className="prose">
              <p>
                The Most Cost-Effective URL Shortener with Premium Features (Free!)
              </p>
              <p>
                2ul.top is a powerful URL shortener that offers a unique
                combination of free basic features and advanced functionalities
                typically found in paid services. Here's what sets us apart:
              </p>

              <h2>Free Features:</h2>

              <ul>
                <li>
                  Shorten Long URLs: Easily transform lengthy URLs into concise,
                  shareable links perfect for social media, emails, and other
                  platforms.
                </li>
                <li>
                  QR Code Generation: Generate QR codes for your shortened URLs,
                  allowing for easy scanning and access on mobile devices.
                </li>
                <li>
                  No Account Required: Shorten URLs and generate QR codes without
                  creating an account – ideal for quick and simple needs.
                </li>
              </ul>

              <h2>Free Account Benefits (Even Better!):</h2>

              <ul>
                <li>
                  Custom Short Links: Create memorable and brand-specific short
                  links for a professional touch.
                </li>
                <li>
                  Link Editing: Modify and update your short links even after
                  creation, ensuring they remain relevant.
                </li>
                <li>
                  Detailed Analytics: Gain valuable insights into your shortened
                  URLs' performance with detailed click counters and analytics.
                  This data helps you understand user engagement, traffic
                  sources, and overall link performance.
                </li>
              </ul>

              <h2>Designed for Simplicity and Efficiency:</h2>

              <p>
                2ul.top streamlines your link management process. Simply paste
                your long URL, click the "Shorten URL and Generate QR Code" button,
                and instantly receive a shortened link and QR code. Integrate these
                shortened links seamlessly into websites, emails, messages, or
                anywhere you need to share them.
              </p>

              <h2>Benefits for Everyone:</h2>

              <ul>
                <li>
                  Effortless Sharing: Shorten, share, and track your URLs with
                  ease. Shortened links are perfect for various platforms like
                  publications, documents, ads, blogs, forums, and more.
                </li>
                <li>
                  Enhanced Tracking: Monitor the number of clicks your shortened
                  URLs receive using our built-in analytics. This information is
                  valuable for businesses and personal use, allowing you to track
                  engagement and optimize your link strategy.
                </li>
              </ul>

              <h2>Why Choose 2ul.top?</h2>

              <ul>
                <li>
                  Free URL Shortening: Everyone has access to essential URL
                  shortening tools, even without an account.
                </li>
                <li>
                  Advanced Features: Upgrade your experience with a free account
                  and unlock powerful features like custom links, editing, and
                  detailed analytics.
                </li>
              </ul>

              <h2>The Perfect Solution for All Your URL Shortening Needs</h2>

              <p>
                Whether you're a business, individual, or simply need a convenient
                way to manage long URLs, 2ul.top is the perfect solution. Our
                combination of free basic features and advanced functionalities
                with a free account caters to all requirements.
              </p>

              <p>
                Get started today and experience the benefits of 2ul.top - your
                one-stop shop for free, efficient, and powerful URL shortening!
              </p>
            </div>
          </article>
        </div>
      </section>
    </Layout>
  );
}
