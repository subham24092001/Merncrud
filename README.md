# Shopping Portal

This is a simple shopping portal project with RESTful API built using Node.js, Express, and MongoDB. The API enables basic CRUD (Create, Read, Update, Delete) operations for managing tasks. Each task has a title, description, status, and timestamps for creation and last update.

## Features

- Implement endpoints for adding, fetching, updating, and deleting tasks.
- Use MongoDB for data storage.
- Ensure input validation and error handling.
- User-friendly interface for managing tasks.

## Setup

1. Clone the repository:

git clone https://github.com/subham24092001/Merncrud.git
 
2. Install dependencies:
cd Merncrud
npm i

3. Set up MongoDB:
   - Install MongoDB locally or use MongoDB Atlas.
   - Update the MongoDB connection string in `src/db/connection.js`.

4. Start the server:
npm start

5. Access the shopping portal at [http://localhost:3000].



## API Documentation

### Get All Tasks

- **URL:** `/tasks`
- **Method:** `GET`
- **Description:** Get a list of all tasks.
- **Response:** JSON array containing task objects.

### Create a Task

- **URL:** `/tasks/create`
- **Method:** `POST`
- **Description:** Create a new task.
- **Request Body:** JSON object with `title` and `description` fields.
- **Response:** JSON object representing the newly created task.

### Update a Task

- **URL:** `/tasks/:id/update`
- **Method:** `POST`
- **Description:** Update an existing task.
- **Request Body:** JSON object with `title`, `description`, and `status` fields.
- **Response:** JSON object representing the updated task.

### Delete a Task

- **URL:** `/tasks/:id/delete`
- **Method:** `POST`
- **Description:** Delete an existing task.
- **Response:** JSON object indicating success or failure.




