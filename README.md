# 2ul.top URL Shortener - Free URL Shortener Service

![License](https://img.shields.io/github/license/MaxSmile/2ul.top)

## Project Overview

This is the official web app project repo for [2ul.top](https://2ul.top), an open-source URL shortening service developed by Vasilkoff CY Ltd.

The 2ul.top URL Shortener is an open-source project designed to provide a simple, efficient, and customizable URL shortening service. Developed by Vasilkoff CY Ltd, the project aims to demonstrate best practices in DevOps, including Continuous Integration/Continuous Deployment (CI/CD), Infrastructure as Code (IaC), and secure, scalable architecture. The service offers both free and premium tiers, catering to different user needs, from basic URL shortening and analytics to advanced features like custom redirection and detailed insights. The project is built using modern web technologies ;)

## Table of Contents
- [Project Overview](#2ultop-url-shortener)
- [Why NextJS](#why-nextjs)
- [Features](#features)
- [Installation](#installation)
- [DevOps Best Practices](#devops-best-practices)
- [Business Model](#business-model)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Why NextJS

The primary reason for choosing Next.js for the 2ul.top project is its ability to deliver a lightweight and fast solution for URL shortening. After evaluating various static site generators, Next.js stood out due to its optimal balance between development speed and performance. It allows for the creation of a fully static website, which is crucial for delivering the fastest possible user experience. Additionally, while Nginx is currently used, there is potential to switch to LSWS for even better performance in the future.

## Features

- **Free URL Shortening**: Easily convert long URLs into short, shareable links without needing an account.
- **QR Code Generation**: Automatically generate QR codes for your shortened URLs for quick access on mobile devices.
- **Custom Short Links**: With a free account, create memorable and branded short links to enhance your professional presence.
- **Custom Analytics**: Users with accounts can embed their own analytics tools into the redirection page, giving full control over tracking.
- **Widget Sharing**: Share your shortened URLs with a dynamic widget that includes a real-time click counter image. Example usage:
  
  ```html
  <a href="https://2ul.top/XYZ">Shared link title<img src="https://img.2ul.top/XYZ"/></a>
  ```
  This allows you to display a small image showing the current click count for the link.


### Installation

To set up the 2ul.top project, follow these steps, with options for both Yarn and NPM:

### Prerequisites

Ensure you have the following installed:
- **Node.js (v16 or later)**
- **Yarn or NPM**

### Install Dependencies

Using Yarn:

```sh
yarn install
```

Using NPM:

```sh
npm install
```

### Running the Application Locally

Start the development server:

- **Yarn**:
  ```sh
  yarn dev
  ```

- **NPM**:
  ```sh
  npm run dev
  ```

Access the application at `http://localhost:3000`.

### Additional Scripts

- **Build the project**:
  - Yarn: `yarn build`
  - NPM: `npm run build`

- **Start the production server**:
  - Yarn: `yarn start`
  - NPM: `npm run start`

- **Versioning and Building**:
  - **Patch**:
    - Yarn: `yarn build-patch`
    - NPM: `npm run build-patch`
  - **Minor**:
    - Yarn: `yarn build-minor`
    - NPM: `npm run build-minor`
  - **Major**:
    - Yarn: `yarn build-major`
    - NPM: `npm run build-major`


### DevOps Best Practices

The 2ul.top project exemplifies several DevOps best practices that ensure efficient, reliable, and scalable development and deployment processes:

1. **Continuous Integration/Continuous Deployment (CI/CD)**: Automated testing and deployment through GitHub Actions for smooth and uninterrupted updates.

2. **Infrastructure as Code (IaC)**: Codified server configurations and environment settings allow for reproducible setups and streamlined infrastructure management.

3. **Monitoring and Logging**: Real-time monitoring and logging tools to track performance and health, enabling proactive issue detection.

4. **Scalable Architecture**: Designed for scalability, the architecture can handle increased traffic while maintaining performance.

5. **Security Best Practices**: Security is a priority, with regular code reviews and automated security scans integrated into the CI/CD pipeline, ensuring data protection and system integrity.

6. **Collaboration and Agile Development**: The project encourages open-source collaboration and follows agile methodologies to ensure continuous improvement and adaptability.


You're correct that the license is typically placed in the root of the project, and it's best to leave it there. Here's an updated **Documentation** section without the license:

### Documentation

All documentation for the 2ul.top project is located in the `/docs` folder and can be accessed through the following links:

- **[API Documentation](https://2ul.top/i/api)** (`/docs/api.md`)
- **[FAQ](https://2ul.top/i/faq)** (`/docs/faq.md`)
- **[Privacy Policy](https://2ul.top/i/privacy)** (`/docs/privacy.md`)
- **[Terms of Service](https://2ul.top/i/terms)** (`/docs/terms.md`)
- **[User Guide](https://2ul.top/i/user_guide)** (`/docs/user_guide.md`)
- **[Widget Integration Guide](https://2ul.top/i/widget_integration)** (`/docs/widget_integration.md`)


## Contributing

- **[Contribution Guide](/CONTRIBUTING.md)** (`/CONTRIBUTING.md`)

### TODO

- [ ] Deployment script must be reliable and trustworthy 
- [ ] Top menu reorganized
- [ ] Add footer menu
- [ ] Make working Pricing page
- [ ] Add validations to the form (empty entry, too long, invalid URL)
- [ ] Add Google Analytics
- [ ] Add Google Tag Manager
- [ ] Make redirect page to have ads
- [ ] Make QR code dedicated page
- [ ] Add QR explanation to about and user guide pages


### License

This project is distributed under the MIT License, a permissive license that allows for reuse within proprietary software, provided that all copies of the licensed software include a copy of the MIT License terms. This means you can freely use, modify, and distribute the code as long as you include the original license. It's ideal for open-source projects because it promotes collaboration and wide usage.

For the full text of the MIT License, please see the `LICENSE` file in the root of the project.

## Contact

[maxim@vasilkoff.com](mailto:maxim@vasilkoff.com)

Vasilkoff CY Ltd - Project page: [https://vasilkoff.com/portfolio/2ul-top](https://vasilkoff.com/portfolio/2ul-top)

The project is designed to showcase DevOps best practices and is structured for easy understanding and contribution.


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




## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.


