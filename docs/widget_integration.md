---
title: "Widget Integration Guide"
description: "Learn how to integrate 2ul.top URL shortener widgets into your website or application."
keywords:
  - "Widget Integration"
  - "URL Shortener Widget"
  - "HTML Integration"
  - "2ul.top Widgets"
date: "2024-08-27T00:00:00Z"
---

# Widget Integration Guide

## Overview

2ul.top offers customizable widgets that allow you to integrate URL shortening and click-tracking features directly into your website or application. This guide provides the necessary HTML code snippets and instructions to help you seamlessly embed these widgets.

## Available Widgets

### 1. Basic URL Shortening Widget

This widget allows users to shorten URLs directly from your website.

**HTML Code:**

```html
<form action="https://api.2ul.top/urls" method="POST" target="_blank">
  <label for="url-input">Enter URL:</label>
  <input type="url" id="url-input" name="originalURL" required placeholder="https://example.com">
  <button type="submit">Shorten URL</button>
</form>
```

**Usage:**
- Paste the above HTML code into your webpage where you want the URL shortening form to appear.
- Users will enter their long URLs and click "Shorten URL" to receive a shortened link.

### 2. Custom Short Link Widget

This widget allows users to create a custom short link directly from your site.

**HTML Code:**

```html
<form action="https://api.2ul.top/urls/auth" method="POST" target="_blank">
  <label for="url-input">Enter URL:</label>
  <input type="url" id="url-input" name="originalURL" required placeholder="https://example.com">
  <label for="custom-slug">Custom Slug:</label>
  <input type="text" id="custom-slug" name="mappingID" placeholder="custom-name">
  <button type="submit">Create Custom Link</button>
</form>
```

**Usage:**
- Integrate this form into your page to let users create custom URLs.
- Ensure that users are authenticated when using this form.

### 3. Click-Tracking Widget

This widget provides a clickable link with a counter image to track how many times the link has been clicked.

**HTML Code:**

```html
<a href="https://2ul.top/XYZ">
  Shared link title
  <img src="https://img.2ul.top/XYZ" alt="Click counter">
</a>
```

**Usage:**
- Replace `"XYZ"` with your actual mapping ID.
- Embed this code on your page to display the clickable link with a click counter image.

## Customization

You can style these widgets using CSS or customize them further by integrating them with JavaScript for dynamic behavior. Ensure the forms are placed within a secure environment, especially when dealing with user authentication.

## Troubleshooting

- **Form Action URL**: Ensure the form action URLs point to the correct endpoints (`https://api.2ul.top/urls` or `https://api.2ul.top/urls/auth`).
- **CORS Issues**: If integrating within a web application, make sure that your CORS settings allow requests from your domain.

## Conclusion

By integrating 2ul.top widgets, you can enhance your website's functionality, allowing users to shorten URLs and track clicks without leaving your site. For advanced customization or issues, feel free to reach out to us at [support@2ul.top](mailto:support@2ul.top).
