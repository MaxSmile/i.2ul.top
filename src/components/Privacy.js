import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const Privacy = () => {
  return (
    <Container>
      <h1>Privacy Policy</h1>
      <p>
        Welcome to 2ul.top. We value your privacy and are committed to protecting your personal information.
        This privacy policy explains how we collect, use, and disclose your information when you use our website.
      </p>
      
      <h2>Information We Collect</h2>
      <p>
        We collect information that you provide directly to us when you use our services, such as when you create
        or shorten URLs. The types of information we may collect include your IP address, browser type, and other
        technical information.
      </p>
      
      <h2>How We Use Your Information</h2>
      <p>
        We use the information we collect to:
        <ul>
          <li>Provide, maintain, and improve our services</li>
          <li>Monitor and analyze usage and trends</li>
          <li>Personalize and improve user experience</li>
          <li>Comply with legal obligations</li>
        </ul>
      </p>
      
      <h2>Google Analytics</h2>
      <p>
        We use Google Analytics to collect information about your use of our website. Google Analytics collects
        information such as how often users visit the website, what pages they visit, and what other sites they used
        prior to coming to our website. We use the information from Google Analytics to improve our website and services.
        Google Analytics collects only the IP address assigned to you on the date you visit our website, rather than your
        name or other identifying information. We do not combine the information collected through the use of Google Analytics
        with personally identifiable information.
      </p>
      <p>
        Although Google Analytics plants a persistent cookie on your web browser to identify you as a unique user the next
        time you visit the site, the cookie cannot be used by anyone but Google. Google's ability to use and share information
        collected by Google Analytics about your visits to this site is restricted by the Google Analytics Terms of Use and
        the Google Privacy Policy.
      </p>
      
      <h2>Data Sharing</h2>
      <p>
        We do not share your personal information with third parties except as necessary to provide our services or as required
        by law.
      </p>
      
      <h2>Data Security</h2>
      <p>
        We implement security measures to protect your information from unauthorized access, use, or disclosure. However, no
        method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee its
        absolute security.
      </p>
      
      <h2>Changes to This Privacy Policy</h2>
      <p>
        We may update this privacy policy from time to time. If we make changes, we will notify you by revising the date at the
        top of the policy and, in some cases, we may provide you with additional notice (such as adding a statement to our homepage
        or sending you an email notification).
      </p>
      
      <h2>Contact Us</h2>
      <p>
        If you have any questions about this privacy policy, please contact us at <a href="mailto:privacy@2ul.top">privacy@2ul.top</a>.
      </p>
    </Container>
  );
};

export default Privacy;
