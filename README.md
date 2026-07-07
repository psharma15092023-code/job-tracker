# Job Tracker

A full-stack Job Tracker application built using React, Express.js, Node.js, and MongoDB. The application helps users manage and track their job applications efficiently.

## Features

* Add new job applications
* View all saved jobs
* Edit existing job details
* Delete job applications
* Search jobs by company name
* Filter jobs by location
* Track application status
* Responsive user interface

## Tech Stack

### Frontend

* React.js
* CSS
* React Toastify

### Backend

* Node.js
* Express.js

### Database

* MongoDB

## Project Structure

```bash
job-tracker/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── index.js
│   ├── models/
│   ├── routes/
│   └── package.json
│
└── README.md
```

## Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/job-tracker.git
```

Move into the project folder:

```bash
cd job-tracker
```

Install dependencies:

```bash
npm install
```

Start the frontend:

```bash
npm start
```

Start the backend:

```bash
nodemon server.js
```

## API Endpoints

### Get all jobs

```http
GET /jobs
```

### Add a job

```http
POST /jobs
```

### Update a job

```http
PUT /jobs/:id
```

### Delete a job

```http
DELETE /jobs/:id
```

## Screenshots

### Dashboard

![Dashboard](screenshorts/dashboard.png)

### Add Job

![Add Job](screenshorts/addjob.png)

### Job List

![Job List](screenshorts/joblist.png)


## Future Improvements

* User authentication
* Pagination
* Sorting functionality
* Dashboard analytics
* Dark mode

## Author

Pooja Sharma

## License

This project is created for learning and portfolio purposes.
