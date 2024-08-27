---
title: "API Documentation"
description: "Comprehensive API documentation for the 2ul.top URL shortening service."
keywords:
  - "API"
  - "URL Shortener API"
  - "2ul.top API"
date: "2024-08-27T00:00:00Z"
---

# API Documentation

## Overview
The 2ul.top API allows you to programmatically shorten URLs, manage your links, and retrieve link information. This documentation provides details on available endpoints, authentication, and request/response formats.

## Base URL
All API requests are made to the following base URL:
```
https://api.2ul.top/
```

## Authentication
Some API endpoints require authentication using Firebase ID tokens. Include the token in the `Authorization` header as a Bearer token:
```
Authorization: Bearer <ID_TOKEN>
```

## Rate Limits
- **No Account**: 1 request per minute
- **Account**: 10 requests per minute
- **Paid**: 200 requests per minute

## Endpoints

### 1. Create a Short URL (Public)
**Endpoint:**
```
POST /urls
```

**Description:**
Shortens a given URL.

**Request Body:**
```json
{
  "originalURL": "https://example.com"
}
```

**Response:**
```json
{
  "message": "URL saved successfully",
  "mappingID": "abc123"
}
```

### 2. Create a Short URL (Authenticated)
**Endpoint:**
```
POST /urls/auth
```

**Description:**
Shortens a given URL with additional data (for authenticated users).

**Request Body:**
```json
{
  "originalURL": "https://example.com",
  "mappingID": "customID",
  "extraDATA": "Additional information"
}
```

**Response:**
```json
{
  "message": "URL saved successfully",
  "mappingID": "customID"
}
```

### 3. Retrieve URL Information
**Endpoint:**
```
GET /urls/:id
```

**Description:**
Fetches information about a shortened URL by its ID.

**Response:**
```json
{
  "originalURL": "https://example.com",
  "mappingID": "abc123",
  "extraDATA": "Additional information"
}
```

### 4. Update a Short URL (Authenticated)
**Endpoint:**
```
PUT /urls/:id
```

**Description:**
Updates the original URL and additional data associated with a shortened URL.

**Request Body:**
```json
{
  "originalURL": "https://newexample.com",
  "extraDATA": "Updated information"
}
```

**Response:**
```json
{
  "message": "URL updated successfully"
}
```

### 5. Delete a Short URL (Authenticated)
**Endpoint:**
```
DELETE /urls/:id
```

**Description:**
Deletes a shortened URL.

**Response:**
```json
{
  "message": "URL deleted successfully"
}
```

## Error Handling
In case of errors, the API returns a JSON response with an appropriate HTTP status code and an error message:
```json
{
  "error": "Description of the error"
}
```

## Support
For further assistance, please contact us at [support@2ul.top](mailto:support@2ul.top).
