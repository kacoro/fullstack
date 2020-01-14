
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.


> [typeorm]()
> [pggresql]()
> [typegraphql](https://typegraphql.ml/docs/introduction.html)
> [apollographql] (https://typegraphql.ml/docs/introduction.html)

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run dev:admin

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## add an module and control
```
nest g mo -p admin demo
nest g co -p admin demo
```


## add a lib

```bash
$ nest g lib common
```


# Write your query or mutation here
query{
  signup(signupInput:{
    userName:"sam",
    email:"sam@sam.com",
    password:"sam"
  }){
    path
    message
  }
}