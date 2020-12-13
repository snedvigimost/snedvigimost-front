# RealEstate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Deploy
#### locally

```
docker-compose build
docker tag snedvigimost-front_snedvigimost-prod:latest registry.digitalocean.com/snedvigemost/snedvigimost-front_snedvigimost-prod:latest
docker push registry.digitalocean.com/snedvigemost/snedvigimost-front_snedvigimost-prod:latest    
```

#### remote
```
docker pull registry.digitalocean.com/snedvigemost/snedvigimost-front_snedvigimost-prod
docker run --name snedvigimost-front -d -p 80:80 registry.digitalocean.com/snedvigemost/snedvigimost-front_snedvigimost-prod:latest
docker run --name snedvigimost-front -d -p 80:80 -p 443:443 -p 2019:2019 registry.digitalocean.com/snedvigemost/snedvigimost-front_snedvigimost-prod:latest
```

localhost {
  root dist/real-estate
  file_server
  reverse_proxy /api/* 188.166.80.5:4222
}
