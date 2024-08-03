import Head from 'next/head';
import Layout from '../_layout';

export default function TermsPage() {
  return (
    <Layout>
      <Head>
        <title>Terms of Service</title>
        <meta
          name="description"
          content="Terms of Service for 2ul.top"
        />
      </Head>
      <section className="py-24" id="terms">
        <div className="container mx-auto max-w-4xl p-4">
          <article className="py-20">
            <h1 className="mb-5 text-3xl font-bold text-secondary">Terms of Service</h1>

            <div className="prose">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using our website, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, please do not use our website.
              </p>

              <h2>2. Service Description</h2>
              <p>
                2ul.top provides a URL shortening service. We reserve the right to modify or discontinue the service at any time without notice.
              </p>

              <h2>3. User Conduct</h2>
              <p>
                You agree not to use our service for any illegal or unauthorized purpose. You are responsible for all content you submit or share through our service.
              </p>

              <h2>4. Intellectual Property</h2>
              <p>
                The content on our website, including but not limited to text, images, and logos, is protected by copyright and other intellectual property laws.
              </p>

              <h2>5. Disclaimer of Warranties</h2>
              <p>
                Our service is provided "as is" without warranties of any kind, either express or implied. We make no guarantees about the reliability, availability, or accuracy of our service.
              </p>

              <h2>6. Limitation of Liability</h2>
              <p>
                In no event shall we be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of our service.
              </p>

              <h2>7. Indemnification</h2>
              <p>
                You agree to indemnify and hold us harmless from any claims, damages, or expenses arising from your use of our service.
              </p>

              <h2>8. Changes to Terms</h2>
              <p>
                We reserve the right to update or modify these Terms of Service at any time without prior notice.
              </p>

              <h2>9. Contact Us</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at <a href="mailto:support@2ul.top">support@2ul.top</a>.
              </p>
            </div>
          </article>
        </div>
      </section>
    </Layout>
  );
}
