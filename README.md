# Multi-Docker

multi-docker is a test project showing how to build a multi-container application.

## Features
* Docker, docker-compose
* Travis-ci CI/CD configuration
* Deployment with AWS Elastic Beanstalk
* Redis image
* Postgres image
* Nginx (For routing & web server)
* React client app
* Node api app
* Node worker service

## Usage

* In dev environment
```bash
docker-compose -f docker-compose-dev.yml up --build
```
* Server up on port 3050 in the dev environment.

## Description
* It contains a bootstraped React app using create-react-app
* Conatins a React component that reaches out to the node api to calculate the fibonacci sequence, and displays the indexes and the calculated fibonacci numbers.
* It contains a Dockerfile, Dockerfile.dev for each of the React client, Node api, Node worker service and nginx (for routing) projects.
* The repo also includes a travis-ci yml configuration file and docker-compose.yml file.
* The parameters should be changed accordingly for the elasticbeanstalk config.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
