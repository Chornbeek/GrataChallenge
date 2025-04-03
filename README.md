# Task Management System Frontend

This is a scaffolded Angular application for the Task Management System. It provides the basic structure and components needed to build a full-featured task management application.

## Prerequisites

- Node.js (v16 or later)
- Angular CLI (v17 or later)
- npm (v8 or later)

## Setup Instructions

1. Clone the repository
   git clone https://github.com/Chornbeek/GrataChallenge.git
   cd GrataChallenge
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   cd TaskManagementFrontend
   npm install
   ng serve
   ```
5. Navigate to `http://localhost:4200` in your browser

## Project Structure

```
src/
├── app/
│   ├── components/         # Shared components
│   │   └── layout/        # Main layout component
│   ├── features/          # Feature modules
│   │   └── tasks/        # Tasks feature module
│   ├── models/           # Shared interfaces and models
│   └── services/         # Shared services
├── environments/         # Environment configurations
└── assets/             # Static assets
```

## Development Tasks

1. Create the following components in the tasks feature:
   - Task List View
   - Task Detail View
   - Task Form (Create/Edit)

2. Implement the task service to communicate with the API

3. Add form validation and error handling

4. Implement sorting and filtering in the task list

## Available Scripts

- `ng serve` - Start the development server
- `ng build` - Build the application for production
- `ng test` - Run unit tests
- `ng lint` - Run linting

  ## Task Management System Backend
  1. Clone repo.
    git clone https://github.com/Chornbeek/GrataChallenge.git
    cd GrataChallenge
2. Navigate to backend project:
   cd TaskManagementAPI
3. Build project
   dotnet build
4. Run Project
   dotnet run
5. Access backend with:
   http://localhost:5115

   ##Database Migrations
   cd TaskManagementAPI
   dotnet ef database update

   ## Deployment Instructions:
   Prerequisites:
   - Docker and Docker Compose Installed
   1. CLone repo.
      git clone https://github.com/Chornbeek/GrataChallenge.git
      cd GrataChallenge
   2. Build and run containers
      docker-compose up --build
   3. Access applications
      -Frontend: http://localhost:4200
      -Backend: http://localhost:5115/swagger

=======
# GrataChallenge
Grata Software Coding Challenge
