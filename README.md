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

* Git commit any pending changes
* `heroku create <make up a name>`
* `heroku addons:create heroku-postgresql`
* `git push heroku <local branch name here>:master`
* `heroku run rake db:migrate`
* If necessary, run `figaro heroku:set -e production` to push secret keys to Heroku. [1]
* `heroku config:set MAX_THREADS=1` Reference [2] on what values to set based on server specs.
* Run `heroku run bash` to bring up bash shell on Heroku
* Run `bundle exec puma -C config/puma.rb` in bash shell on Heroku to start puma server according to configs in puma.rb [2]
* Run `heroku run rake spree_auth:admin:create` to set up admin user for Solidus.
* Reference [3] for everything else.

References:
[1] https://github.com/laserlemon/figaro

[2] https://devcenter.heroku.com/articles/deploying-rails-applications-with-the-puma-web-server

[3] https://guides.spreecommerce.com/developer/heroku.html
## Git Feature Branch Naming
Follow format of: `<initials>/<issue#>/<branch-title>` … example: `git checkout -b JJH/6/front-end-scaffolding`

## URLs for external store, blog, any APIs
Add URLs here that other developers need to be aware of
