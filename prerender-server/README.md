# Prerender App

Implements a minimal prerender on port 3000.

## Run

```bash
$ node server.js
```

## Test this server
Navigate [http://localhost:3000/render?url=https://angular.io/](http://localhost:3000/render?url=https://angular.io/) and the view source. You should see the `aio-shell` tag in the body populated with the page content, compared to navigating to [https://angular.io/](https://angular.io/) and viewing source, where we find the `aio-shell` tag contents empty.
