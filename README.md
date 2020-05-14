# Sentry Demo
An Angular application which throws an Error and sends it to locally set-up Sentry on-premises server 

## Running Sentry on Docker
Follow: https://hub.docker.com/_/sentry/
```
# initialize sentry
docker run -d --name sentry-redis redis
docker run -d --name sentry-postgres -e POSTGRES_PASSWORD=secret -e POSTGRES_USER=sentry postgres
docker run --rm sentry config generate-secret-key
docker run -it --rm -e SENTRY_SECRET_KEY='<secret-key>' --link sentry-postgres:postgres --link sentry-redis:redis sentry upgrade
docker run -d --name my-sentry -p 9000:9000 -e SENTRY_SECRET_KEY='<secret-key>' --link sentry-redis:redis --link sentry-postgres:postgres sentry

# add user
docker run -it --rm -e SENTRY_SECRET_KEY='<secret-key>' --link sentry-redis:redis --link sentry-postgres:postgres sentry createuser

# start workers
docker run -d --name sentry-cron -e SENTRY_SECRET_KEY='<secret-key>' --link sentry-postgres:postgres --link sentry-redis:redis sentry run cron
docker run -d --name sentry-worker-1 -e SENTRY_SECRET_KEY='<secret-key>' --link sentry-postgres:postgres --link sentry-redis:redis sentry run worker

```
