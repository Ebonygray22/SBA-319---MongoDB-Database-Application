Event Management System
Overview
The Event Management System is a simple web application built with Node.js, Express, and MongoDB. It allows users to manage events, register for them, and add comments.

Features
Event Management: Create, read, update, and delete events.
User Management: Register users and link them to events.
Comment System: Users can comment on events.


Technologies
Backend: Node.js, Express
Database: MongoDB, Mongoose
Middleware: Cors, Body-Parser


Installation
Clone the repository:

git clone https://github.com/yourusername/event-management-system.git
cd event-management-system

Install dependencies:
npm install

Start MongoDB (ensure MongoDB is running locally).

Run the server:
npm run dev

Access the API at http://localhost:5000.

API Endpoints

Events
 POST /api/events: Create a new event.
 GET /api/events: Retrieve all events.
 GET /api/events/
    : Retrieve a specific event.
PATCH /api/events/
    : Update an event.
DELETE /api/events/
    : Delete an event.
Users
POST /api/users: Create a new user.
GET /api/users: Retrieve all users.
GET /api/users/
    : Retrieve a specific user.
PATCH /api/users/
    : Update a user.
DELETE /api/users/
    : Delete a user.

Comments
POST /api/comments: Create a new comment.
GET /api/comments: Retrieve all comments.
GET /api/comments/
    : Retrieve a specific comment.
PATCH /api/comments/
    : Update a comment.
DELETE /api/comments/
    : Delete a comment.

Notes
Ensure MongoDB is running before starting the server.
Use Postman or cURL to interact with the API.
