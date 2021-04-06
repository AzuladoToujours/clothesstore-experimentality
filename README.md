# Clothes Store Experimentality :tw-1f454:

## Features

- Products list
- Hot products
- Search products by name
- Product details
- Create new product

### Full swagger documentation [here](http://3.236.125.125:8080/api-docs/ "here") :tw-1f440:

## Development Requirements :fa-linux:

- Node JSv12^
- PostgreSQL
- npm v 7.x
- Docker

### Environment Variables :tw-1f30d:
Should create a **.env** file in the root of the project with the following required values.

```shell
ENV={dev-prod}
NODE_ENV= {test-development-production}
DEV_HOST=0.0.0.0 
PROD_HOST=0.0.0.0
DEV_DATABASE_URL=postgres://{postgres_dev_user}:{postgres_dev_pwd}@{postgres_dev_host}:5432/clothesstoredev
TEST_DATABASE_URL=postgres://{postgres_test_user}:{postgres_test_pwd}@{postgres_test_host}:5432/clothesstoretest
PROD_DATABASE_URL=postgres://{postgres_prod_user}:{postgres_prod_pwd}@{postgres_prod_host}:5432/clothesstoreprod
PORT=8080
AWS_ACCESS_KEY={aws_IAM_key}
AWS_SECRET_ACCESS_KEY={aws_secret_IAM_key}
REGION={aws_region}
DEV_BUCKET={dev_s3_bucket}
PROD_BUCKET={prod_s3_bucket}
```


## Docker Deployment  :tw-1f433: 

In the **deployment** folder, you should see a docker-compose.yml file; this is the configuration file to deploy the application in docker, you must change the environment variables (specified with {}) in order to execute the file, whereas docker-compose or docker in swarm mode.

### Docker-compose

#### Requirements

- Docker
- docker-compose

Execute in the **deployment** folder.

- Option 1
```shell
sh runcompose.sh
```
- Option 2
```shell
docker-compose up -d
```

### Docker Swarm

#### Requirements

- Docker
- Docker in swarm mode.

Execute in the **deployment** folder.

- Option 1
```shell
sh runstack.sh
```
- Option 2
```shell
docker stack deploy -c docker-compose.yml clothes_store
```

## Database Architecture

![](https://clothes-store-test.s3.amazonaws.com/readme/PRODUCTS.png)
> Database relational architecture.

## Infrastructure
![](https://clothes-store-test.s3.amazonaws.com/readme/INFRASTRUCTURE.png)
> AWS infrastructure

## CI/CD Pipeline
![](https://clothes-store-test.s3.amazonaws.com/readme/CICD.png)
> CI/CD life cicle.