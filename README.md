# Obyte Landing

## If PHP is configured on your host machine:

```
git clone git@github.com:ipavlenko/org.obyte.landing.git
./bin/grav install
chown -R www-data:www-data ./docroot/cache
chown -R www-data:www-data ./docroot/user
```
and then setup Apache or Nginx to ./docroot

## If PHP is not configured on your host machine:

Install Docker, then run:

```
docker-compose up -d
```

Navigate to http://localhost:8080 to see the results.

To connect to your running container, execute:
```
docker exec -it obyte.landing /bin/bash
```
To install grav dependencies inside the container:
```
cd /var/www/html
./bin/grav install
```

Wait until the end of installation process, then exit from the container shell using command:

```
exit
```

To stop the container:

```
docker-compose down
```

## CSS-recompiling

### Installing packages
```
cd docroot/user/themes/obyte/
npm install

```

### Recompiling SCSS to CSS
```
npm run build
```