# User Registration Endpoint

## Endpoint

`POST /user/register`

## Description

This endpoint registers a new user by accepting their first name, last name, email, and password. It validates the input data and returns a JWT token upon successful registration.

## Request Body

The request body should be a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "string",
    "lastname": "string"
  },
  "email": "string",
  "password": "string"
}
```

### Example

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

## Validation Rules

- `email`: Must be a valid email address.
- `fullname.firstname`: Must be at least 3 characters long.
- `password`: Must be at least 6 characters long.

## Responses

### Success

- **Status Code**: `201 Created`
- **Body**:
  ```json
  {
    "token": "jwt_token",
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

### Validation Error

- **Status Code**: `400 Bad Request`
- **Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Error message",
        "param": "parameter_name",
        "location": "body"
      }
    ]
  }
  ```

### Server Error

- **Status Code**: `500 Internal Server Error`
- **Body**:
  ```json
  {
    "error": "Internal Server Error"
  }
  ```

# User Login Endpoint

## Endpoint

`POST /user/login`

## Description

This endpoint logs in an existing user by accepting their email and password. It validates the input data and returns a JWT token upon successful authentication.

## Request Body

The request body should be a JSON object with the following structure:

```json
{
  "email": "string",
  "password": "string"
}
```

### Example

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

## Validation Rules

- `email`: Must be a valid email address.
- `password`: Must be at least 6 characters long.

## Responses

### Success

- **Status Code**: `200 OK`
- **Body**:
  ```json
  {
    "token": "jwt_token",
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

### Validation Error

- **Status Code**: `400 Bad Request`
- **Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Error message",
        "param": "parameter_name",
        "location": "body"
      }
    ]
  }
  ```

### Authentication Error

- **Status Code**: `401 Unauthorized`
- **Body**:
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

### Server Error

- **Status Code**: `500 Internal Server Error`
- **Body**:
  ```json
  {
    "error": "Internal Server Error"
  }
  ```

# User Profile Endpoint

## Endpoint

`GET /user/profile`

## Description

This endpoint retrieves the profile information of the currently authenticated user. It requires a valid JWT token to be included in the request.

## Authentication

Requires a valid JWT token in one of:

- Cookie named 'token'
- Authorization header: `Bearer <token>`

## Responses

### Success

- **Status Code**: `200 OK`
- **Body**:
  ```json
  {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
  ```

### Authentication Error

- **Status Code**: `401 Unauthorized`
- **Body**:
  ```json
  {
    "message": "Authentication required"
  }
  ```

# User Logout Endpoint

## Endpoint

`GET /user/logout`

## Description

This endpoint logs out the current user by clearing their authentication token cookie and blacklisting the token to prevent future use.

## Authentication

Requires a valid JWT token in one of:

- Cookie named 'token'
- Authorization header: `Bearer <token>`

## Responses

### Success

- **Status Code**: `200 OK`
- **Body**:
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

### Authentication Error

- **Status Code**: `401 Unauthorized`
- **Body**:
  ```json
  {
    "message": "Authentication required"
  }
  ```

### Server Error

- **Status Code**: `500 Internal Server Error`
- **Body**:
  ```json
  {
    "error": "Internal Server Error"
  }
  ```
