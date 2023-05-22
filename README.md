# Project: Phase 4 (Full Stack Software Engineer Student @Flatiron School)

## Description

For this project we were required to build an app using a Rails API backend with a React frontend. We used proper RESTful routing, did not rely on redirects and reloads to refresh data
(No document.reload or window.reload). I used three models on the backend, one which includes a one many-to-many relationship.

## About My Application 
# FELP 
Felp is a review site for FOOD TRUCKS only. Living in Los Angeles, food trucks are very popular. I don't know of a site or mobile app that reviews only food trucks, so I decided I would use the knowledge that I've gained so far to attemp it. In this application: a new user can sign up, an existing user can log in and out. A logged in user can add a food truck,  add reviews, and edit/delete their own reviews. Of course, I would like for my application to have many more features, like working with food trucks to help users find their traveling location (like GPS), and star ratings. I will probably add on to this as I learn more, or if you're a food truck foodie and want to collaborate, let me know! 


## Requirements

- Ruby 2.7.4
- NodeJS (v16), and npm
- Render account
- Postgresql

## Set up
bundle install
rails db:create
npm install --prefix client
```

You can use the following commands to run the application:

- `rails s`: run the backend on [http://localhost:3000](http://localhost:3000)
- `npm start --prefix client`: run the frontend on
  [http://localhost:4000](http://localhost:4000)



## Troubleshooting

If you ran into any errors along the way, here are some things you can try to
troubleshoot:

- If you're on a Mac and got a server connection error when you tried to run
  `rails db:create`, one option for solving this problem for Mac users is to
  install the Postgres app. To do this, first uninstall `postgresql` by running
  `brew remove postgresql`. Next, download the app from the
  [Postgres downloads page][] and install it. Launch the app and click
  "Initialize" to create a new server. You should now be able to run
  `rails db:create`.

- If you're using WSL and got the following error running `rails db:create`:

  ```txt
  PG::ConnectionBad: FATAL:  role "yourusername" does not exist
  ```

  The issue is that you did not create a role in Postgres for the default user
  account. Check [this video](https://www.youtube.com/watch?v=bQC5izDzOgE) for
  one possible fix.

- If your app failed to deploy at the build stage, make sure your local
  environment is set up correctly by following the steps at the beginning of
  this lesson. Check that you have the latest versions of Ruby and Bundler, and
  ensure that PostgreSQL was installed successfully.

- If you deployed successfully, but you ran into issues when you visited the
  site, make sure you migrated and seeded the database. Also, make sure that
  your application works locally and try to debug any issues on your local
  machine before re-deploying. You can also check the deployment log on the
  app's page in the Render dashboard.

[postgres downloads page]: https://postgresapp.com/downloads.html

## Resources

- [Render Databases Guide](https://render.com/docs/databases)
