# Luggage-App

[![Build Status](https://travis-ci.org/missvicki/Luggage-App.svg?branch=develop)](https://travis-ci.org/missvicki/Luggage-App)
[![Test Coverage](https://api.codeclimate.com/v1/badges/c1f5ff7657641e53afc2/test_coverage)](https://codeclimate.com/github/missvicki/Luggage-App/test_coverage)

A passenger luggage Identifying system for buses with extensive functionality to book trips

###### Functionalities

- Authentication.
- Admin can create a trip
- Admin can remove a trip
- Admin can update a trip
- Admin and user can both see trips available
- User can book a trip, delete a trip, and update the trip they booked
- User can specify that they have luggage while booking the trip
- Admin can add user luggage while user is boarding
- Users can also pay for their trips

###### How to run the project locally.

- Clone the project. run `git clone https://github.com/missvicki/Luggage-App.git`.
- Install dependencies. run `npm install`.
- start the app. run `npm start`
- run the app in postman. (Base url `http://localhost:{port}/api/v1`).

###### Project dependencies

- NodeJS.
- Express Js Framework.
- MongoDB
- Mocha, chai Testing Framework.

###### Application Features

| EndPoint                          | Function                             | Protected |
| --------------------------------- | ------------------------------------ | --------- |
| POST /auth/signup                 | create a user                        | No        |
| POST /auth/signin                 | login a user and return token        | No        |
| PATCH /auth/confirmation/:token   | Confirm user email                   | No        |
| GET /users/                       | Fetch users                          | Yes       |
| GET /users/:email                 | Get a single user                    | Yes       |
| Delete /users/:email              | Delete a single user                 | Yes       |
| PATCH /users/:email               | Update a single user                 | Yes       |
| POST /auth/forgot-password        | Send reset password link to email    | No        |
| PATCH /auth/reset-password/:token | Reset user password                  | No        |
| PUT /users/change-password        | Allows user to change their password | Yes       |

###### Tools Used

- ExpressJS [Javascript Backend Framework]
- Joi for Validation
- Mocha and chai for Testing

###### Programming language

- Javascript

## Authors

- [Victor Nomwesigwa](https://github.com/missvicki)
