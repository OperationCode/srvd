# srvd
The future home of SRVD (http://iserved.co).

## Built With:

* HTML5
* CSS3
* SASS
* Ruby on Rails

## Install / Development

* Install Ruby locally
* Install Rails locally
* Install PostgreSQL locally
* `git clone` this repository
* `bundle install` to install dependencies
* `rake db:create` to create database
* `rake db:migrate` to migrate db schema
* `rails server` to start WEBrick server
* View your app in your local browser at http://localhost:3000.




## Deployment:
Instructions for deploying Git master branch to production server go here

* git commit any pending changes
* `heroku create <make up a name>`
* `heroku addons:create heroku-postgresql`
* `git push heroku <local branch name here>:master`
* `heroku run rake db:migrate`
* if necessary `figaro heroku:set -e production` #Push secret keys to Heroku. [2]
* `heroku config:set MAX_THREADS=1` #Not really sure about this. Reference [1]
* `heroku run bash` #Bring up bash shell on Heroku
* `bundle exec puma -C config/puma.rb` #Starts puma server according to configs in puma.rb [1]

References:
[1] https://devcenter.heroku.com/articles/deploying-rails-applications-with-the-puma-web-server
[2] https://github.com/laserlemon/figaro

## Git Feature Branch Naming
Follow format of: `<initials>/<issue#>/<branch-title>` … example: `git checkout -b JJH/6/front-end-scaffolding`

## URLs for external store, blog, any APIs
Add URLs here that other developers need to be aware of
