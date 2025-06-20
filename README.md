[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19823897&assignment_repo_type=AssignmentRepo)
# Express.js RESTful API Assignment

This assignment focuses on building a RESTful API using Express.js, implementing proper routing, middleware, and error handling.

## Assignment Overview

You will:
1. Set up an Express.js server
2. Create RESTful API routes for a product resource
3. Implement custom middleware for logging, authentication, and validation
4. Add comprehensive error handling
5. Develop advanced features like filtering, pagination, and search

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Install dependencies:
   ```
   npm install
   ```
4. Run the server:
   ```
   npm start
   ```

## Files Included

- `Week2-Assignment.md`: Detailed assignment instructions
- `server.js`: Starter Express.js server file
- `.env.example`: Example environment variables file

## Requirements

- Node.js (v18 or higher)
- npm or yarn
- Postman, Insomnia, or curl for API testing

# Product API

A simple Express.js REST API for managing products with API key authentication.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone or download this repository.
2. Open a terminal in the project directory.
3. Install dependencies:

   ```
   npm install
   ```

### Running the Server

Start the server with:

```
node server.js
```

The server will run on [http://localhost:3000](http://localhost:3000) by default.

---

## API Key Authentication

All `/api/products` endpoints require an API key in the request header:

```
x-api-key: secret-api-key-123
```

---

## API Endpoints

### 1. Get All Products

**Request:**
```
GET /api/products
Headers:
  x-api-key: secret-api-key-123
```

**Response:**
```json
{
  "id": "uuid",
  "name": "Laptop",
  "description": "High-performance laptop with 16GB RAM",
  "price": 1200,
  "category": "electronics",
  "inStock": true
}
```

---

### 2. Get Product by ID

**Request:**
```
GET /api/products/{id}
Headers:
  x-api-key: secret-api-key-123
```

**Response (200):**
```json
{
  "id": "uuid",
  "name": "Laptop",
  "description": "High-performance laptop with 16GB RAM",
  "price": 1200,
  "category": "electronics",
  "inStock": true
}
```

**Response (404):**
```json
{ "message": "Product not found" }
```

---

### 3. Create a Product

**Request:**
```
POST /api/products
Headers:
  x-api-key: secret-api-key-123
Body (JSON):
{
  "name": "Phone",
  "description": "Latest smartphone",
  "price": 800,
  "category": "electronics",
  "inStock": true
}
```

**Response (201):**
```json
{
  "id": "uuid",
  "name": "Phone",
  "description": "Latest smartphone",
  "price": 800,
  "category": "electronics",
  "inStock": true
}
```

**Response (400):**
```json
{ "message": "Missing required fields" }
```

---

### 4. Update a Product

**Request:**
```
PUT /api/products/{id}
Headers:
  x-api-key: secret-api-key-123
Body (JSON):
{
  "name": "Updated Name",
  "price": 1000
}
```

**Response (200):**
```json
{
  "id": "uuid",
  "name": "Updated Name",
  "description": "High-performance laptop with 16GB RAM",
  "price": 1000,
  "category": "electronics",
  "inStock": true
}
```

**Response (404):**
```json
{ "message": "Product not found" }
```

---

### 5. Delete a Product

**Request:**
```
DELETE /api/products/{id}
Headers:
  x-api-key: secret-api-key-123
```

**Response (204):**
No content.

**Response (404):**
```json
{ "message": "Product not found" }
```

---

## Error Handling

- `401 Unauthorized` if API key is missing or invalid.
- `404 Not Found` for unknown endpoints or missing products.
- `400 Bad Request` for validation errors.
- `500 Internal Server Error` for unexpected errors.

---

## Example cURL Requests

**Get all products:**
```sh
curl -H "x-api-key: secret-api-key-123" http://localhost:3000/api/products
```

**Create a product:**
```sh
curl -X POST -H "Content-Type: application/json" -H "x-api-key: secret-api-key-123" -d '{"name":"Phone","description":"Latest smartphone","price":800,"category":"electronics","inStock":true}' http://localhost:3000/api/products
```