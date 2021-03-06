# Habit Tracker

Habit tracking app that provides a visual representation of your progress

## Summary

  - [Getting Started](#getting-started)
  - [Running the tests](#running-the-tests)
  - [Deployment](#deployment)
  - [Built With](#built-with)
  - [Contributing](#contributing)
  - [Authors](#authors)
  - [License](#license)
  - [Acknowledgments](#acknowledgments)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- [NodeJs](https://nodejs.org/en/download/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable)
- [Docker](https://docs.docker.com/get-docker/)
- [Docker-Compose](https://docs.docker.com/compose/install/)

### Installing

* Clone this repo into local workspace
* Create `dev.env` file in `/backend/env` directory with the following properties
```
PORT=                Ex: PORT=8080
MONGO_HOSTNAME=      Ex: MONGO_HOSTNAME=localhost
MONGO_DB=            Ex: MONGO_DB=habittracker
MONGO_PORT=          Ex: MONGO_PORT=27017
```

### Running only backend for development

1. Start Docker container for MongoDB
  * In project root directory, run the command: `docker-compose -f docker-compose.db.yml up -d`
  * Run command :`docker ps` to verify mongodb is running
  * Command for stopping mongodb container: `docker-compose down`
2. Run the Express server (*See instructions [here](backend/README.md)*)

### Running backend and frontend
1. Start Docker container
  * In project root directory, run: `docker-compose -f docker-compose.yml up`
  * To exit, press `CTRL-C`
    * Then shutdown containers: `docker-compose down`

## Running the tests

*Not implemented yet...*

## Deployment

*Not implemented yet...*

## Built With

- NodeJs
- ExpressJs
- MongoDB
- React
- Docker

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

*Not implemented yet...*

## License

*Not implemented yet...*

## Acknowledgements

*Not implemented yet...*
