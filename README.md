# Prerender POC

A repo to validate usage of Prerender with various clientside driven application

Inspired by [Setup SEO Friendly Angular Apps with Prerender.io](http://evanjmg.com/code/2015/10/18/SEO-Friendly-Angular-with-Prerender.html). Great article to start reading about Prerender.io & how to integrate with it/

## Client Apps

* Angular 1.x - [ng-1x-app](#ng-1x-app)


## Usage
* To test the setup, make sure you have depencies listed in each folder installed, follow the readme in each folder for this.
* Once dependencies are installed, first start the prerender server app from prerender-server folder.
* Finally open another terminal/prompt and launch the app of your choice.

## ng-1x-app
Launch
```bash
$ node server.js
```

Navigate to [http://localhost:3001](http://localhost:3001) & the typical NG 1.x app would be rendered. And navigate to [http://localhost:3001/?_escaped_fragment_=](http://localhost:3001/?_escaped_fragment_=) to view the prerendered page.

## License
Copyright (c) 2018 Arvind Ravulavaru