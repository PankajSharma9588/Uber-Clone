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

### Example Response

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
