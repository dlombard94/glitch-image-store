Welcome to the PictureStore
===========================

A project to demonstrate Cloudinary API + a simplified accounts system.

This is an Express.js project, designed to work well with the Glitch development environment. It includes basic express setup, templating, routing and session support + rudimentary user accounts. It is backed by a simple lowdb json database.

The app is part of the course material for an introductory web development course running in WIT:

- <https://wit-web-dev-2016.github.io/web-app-1/>

This topic here reviews the Cloudinary service + this app in more detail:

- <https://wit-web-dev-2016.github.io/web-app-1/topic-10-gomix-images/index.html>

In order to run, you will need to place a Cloudinary credentials file in the .data folder called .env.json:

### .data/.env.json

~~~
{
  "cloudinary": {
    "cloud_name": "YOURID",
    "api_key": "YOURKEY",
    "api_secret": "YOURSECRET"
  }
}
~~~

The following user accouts (on the local app only) have been pre-loaded, so you can log in with either:

~~~
    {
      "firstName": "homer",
      "lastName": "simpson",
      "email": "homer@simpson.com",
      "password": "secret",
    },
    {
      "firstName": "marge",
      "lastName": "simpson",
      "email": "marge@simpson.com",
      "password": "secret",
    }
~~~

The Lowdb database is used to provide a local datastore:

- <https://github.com/typicode/lowdb>

