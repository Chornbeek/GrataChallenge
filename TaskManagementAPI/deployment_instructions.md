# Deployment Instructions

## Prerequisites
- Docker and Docker Compose installed

## Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/Chornbeek/GrataChallenge.git
    cd GrataChallenge
    ```

2. Build and run the containers:
    ```bash
    docker-compose up --build
    ```

3. Access the applications:
    - Frontend: [http://localhost:4200](http://localhost:4200)
    - Backend: [http://localhost:5115/swagger](http://localhost:5115/swagger)

## Notes
- Ensure ports 4200 and 5115 are not in use.
- Modify Dockerfiles or nginx.conf if custom configuration is needed.
