

# Middleman Project Template: with Frameless adaptive grid
------

##Basics
Just your basic blank slate of a [Middleman](http://middlemanapp.com/) --rack project, including Bourbon and Neat from Thoughbot..

[Middleman](http://middlemanapp.com/) is a static site generator based on Sinatra. Providing dozens of templating languages (Haml, Sass, Compass, Slim, CoffeeScript, and more). Makes minification, compression, cache busting, Yaml data (and more) an easy part of your development cycle.

## Usage

Download and install into ~/.middleman (you'll have to create this directory if it's not already there). You can then use it with the `--template` flag on `middleman init`. For example: `middleman init your-project --template=neatness`

For more help follow [Middleman's project template instructions](http://middlemanapp.com/getting-started/welcome/).

## Installing Bourbon and Neat

Run these in the stylesheets directory:
bourbon install
neat install

## Heroku Deploy

heroku create --stack cedar --buildpack http://github.com/indirect/heroku-buildpack-middleman.git
heroku open
git push heroku master

