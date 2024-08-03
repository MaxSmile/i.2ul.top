import Head from 'next/head';
import Link from 'next/link';
import Layout from '../_layout';

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      <Head>
        <title>Privacy Policy</title>
        <meta
          name="description"
          content="Learn how 2ul.top prioritizes your privacy, detailing our practices regarding data collection and use."
        />
      </Head>
      <section className="py-24" id="privacy">
        <div className="container mx-auto max-w-4xl p-4">
          <article className="py-20">
            <h1 className="mb-5 text-3xl font-bold text-secondary">Privacy Policy</h1>
            <p className="mb-5">Last updated: August 3, 2024</p>

            <div className="space-y-4">
              <p>
                This Privacy Policy applies to your use of the 2ul.top website
                (hereinafter, the "Service"), developed and supported by <a href="https://vasilkoff.com/portfolio/2ul-top" className='underline' target="_blank">Vasilkoff
                Ltd</a> (referred to as "we", "us", or "our"). We are committed to
                protecting your privacy and ensuring that your personal information
                is handled responsibly.
              </p>

              <p>
                By using the Service, you agree to the collection and use of data in
                accordance with this Privacy Policy.
              </p>

              <h2>Information We Collect</h2>
              {/* Adapt this section based on the data actually collected by 2ul.top */}
              <p>
                We may collect limited information to understand how users interact
                with the Service. This might include:
              </p>
              <ul>
                <li>
                  {/* 
                Only include relevant data points. 
                Consider removing unnecessary ones like IP address if not used.
              */}
                  Your browser type and version
                </li>
                <li>The pages you visit on the Service</li>
                <li>The time you spend on each page</li>
              </ul>

              <h2>Purpose of Using Your Data</h2>
              <ul>
                <li>
                  {/* Adapt this section based on how the collected data is used */}
                  To improve the user experience and functionality of the Service
                </li>
              </ul>

              {/* Remove the Google Analytics section if not used */}
              {/* <h2>Google Analytics</h2>
          <p>
            We may use Google Analytics to analyze how users interact with the
            Service. Google Analytics collects information through cookies about
            your use of the Service, including your IP address. This information
            is transmitted to and stored by Google on servers in the United
            States. Google uses this information to evaluate your use of the
            Service, compile reports on website activity for us, and provide other
            services related to website activity and internet usage.
          </p> */}

              <h2>Mobile Applications</h2>
              <p>
                2ul.top is currently a web-based service and does not have a mobile
                application.
              </p>

              <h2>Data Security</h2>
              <p>
                We take reasonable steps to protect your information from loss,
                unauthorized access, disclosure, alteration, or destruction. However,
                no internet transmission or electronic storage method is 100% secure.
                While we strive to protect your personal information, we cannot
                guarantee its absolute security.
              </p>

              <h2>Privacy Policy Updates</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify
                you of any changes by posting the new Privacy Policy on this page.
                You are advised to review this Privacy Policy periodically for any
                modifications.
              </p>

              <h2>Your Entitlements</h2>
              <p>
                {/* Adapt this section based on how users can access their data */}
                Currently, 2ul.top does not collect any personal information that
                requires specific access or deletion rights. However, if you have any
                questions or concerns about your data, please feel free to contact us
                at <Link href="mailto:support@2ul.top">support@2ul.top</Link>.
              </p>

              <h2>Reach Out</h2>
              <p>
                For any inquiries or concerns about this Privacy Policy, feel free
                to connect with us via our email address above.
              </p>
            </div>
          </article>
        </div>
      </section>
    </Layout>
  );
}
