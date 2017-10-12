# simpleApp

> Note: This app uses postgres database with Sequelize ORM. So install, start postgres and edit the config file as below

### Sequelize config

simpleApp > server > config > config.json

Sample
```
{
  "development": {
    "username": "postgres",
    "password": "loremIpsum",
    "database": "simpleapp",
    "host": "localhost",
    "port": "5432",
    "dialect": "postgres",
    "maxIdleTime": 30
  },
}
```

### Installation

Install the dependencies and start the server.

```sh
$ cd simpleApp
$ npm install
$ npm start:dev
```
- - -

### List of APIs

* Signin
* Save token
* Get token
* Querystring


### API endpoints

- - -

#### Signin
```
POST /api/signin
```
##### parameters
1. username: string
2. password: string

##### response (200)
```
OK
```
###### response (401):
```
Unauthorized
```

#### Save token
```
POST /api/save_token
```
##### parameters
1. token_id: string

##### response (201 Created)
```
{
    "id": 2,
    "token_id": "secretKitty",
    "updatedAt": "2017-10-11T04:32:01.947Z",
    "createdAt": "2017-10-11T04:32:01.947Z"
}
```

> Note: The following route is api protected. Include token_id in header for authorization
```
{
	Authorization: Bearer <token_id>
}
```

#### Get token
```
GET /api/get_token
```

##### response (200)
```
Authorized
```

##### Querystring
```
GET /api/querystring

```
##### parameters
1. id: string

##### response (200)
```
id
```

- - -

### Testing and coverage
This app uses MochaJS and IstanbulJS for Testing and coverage respectively. To test the API end points,


```sh
$  npm run test
```

You should see something like this if the tests pass

![TerminalOp](https://tppr.me/6M9Tk)

- - -

Happy Hacking !
