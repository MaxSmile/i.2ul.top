# 2ul.top URL Shortener 

This is the official web project for [2ul.top](https://2ul.top), an open-source URL shortening service developed by Vasilkoff CY Ltd. The project is designed to showcase DevOps best practices and is structured for easy understanding and contribution.

## DevOps Best Practices

The 2ul.top project exemplifies several DevOps best practices, showcasing efficient software development and deployment processes. Key practices include:

1. **Continuous Integration and Continuous Deployment (CI/CD)**:
   - Leveraging GitHub Actions, the project automates testing and deployment workflows. This ensures that every commit or pull request is automatically tested, and successful builds are deployed directly to the production server, maintaining a steady flow of updates without service interruption.

2. **Infrastructure as Code (IaC)**:
   - Although currently running on a small-scale OCI instance, the project's infrastructure setup, including server configuration and environment settings, is codified. This approach allows for reproducible environments and streamlined infrastructure management.

3. **Monitoring and Logging**:
   - The application is equipped with monitoring tools to track its performance and health in real-time. Logging mechanisms are in place to record and analyze the application's operational data, aiding in proactive issue detection and resolution.

4. **Scalable and Resilient Architecture**:
   - Designed with scalability in mind, the application's architecture supports scaling up to accommodate increased traffic. Its resilience is ensured through robust error handling and failover mechanisms.

5. **Containerization**:
   - Given the current resource constraints of a 1GB RAM OCI instance, containerization is not implemented at this stage. However, the project is structured in a way that allows for easy adoption of container technologies like Docker in the future, especially when scaling or migrating to more powerful infrastructure.

6. **Security Best Practices**:
   - Security is a priority, with regular code reviews and automated security scans integrated into the CI/CD pipeline. The application adheres to secure coding standards, ensuring data protection and system integrity.

7. **Collaboration and Agile Development**:
   - Emphasizing an open-source and collaborative approach, the project welcomes contributions and fosters an agile development environment. This ensures a continuous and adaptive improvement process, aligning with modern software development methodologies.

## Features

- ReactJS for a dynamic, single-page application experience.
- Integration with a Node.js/Express backend.
- SQLite database for efficient and lightweight data storage.
- Styled-components for styling.
- Open-source MIT license.

## Business Model

### Free Tier
- Basic URL shortening
- QR code generation
- Custom links
- Standard analytics (basic click tracking)
- Ads displayed for 5 seconds before redirect
- Links remain active for one month after the last hit

### Premium Tier
- No ads
- Custom redirection page delay with custom content or immediate redirection
- Bulk URL shortening
- Custom analytics (detailed insights into user behavior, geographic data, device data, etc.)
- Priority support

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or later)
- Yarn package manager

## Installation

**Install Dependencies**

```sh
yarn
```

**Running the Application Locally**

```sh
yarn start
```

This will start the development server on `http://localhost:3000`.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Vasilkoff CY Ltd - [maxim@vasilkoff.com](mailto:maxim@vasilkoff.com)

Project page: [https://vasilkoff.com/portfolio/2ul-top](https://vasilkoff.com/portfolio/2ul-top)
