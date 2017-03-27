Welcome to the PictureStore
===========================

A project to demonstrate Cloudinary API + a simplified accounts system.

THis is an Express.js project, designed to work well with the Glitch development environment. It includes basic express setup, templating, routing and session support + rudimentary user accounts. It is backed by a simple lowdb json database.

The app part of the course material for an introductory web development course running in WIT:

- <https://wit-web-dev-2016.github.io/web-app-1/>

In order to run, you will need to place a Cloudinary credentials file in the root folder:

## .env.json

~~~
{
  "cloudinary": {
    "cloud_name": "YOURID",
    "api_key": "YOURKEY",
    "api_secret": "YOURSECRET"
  }
}
~~~