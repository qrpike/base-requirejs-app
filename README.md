# Base Require.js Application

Base setup for a RequireJS app with all the grunt stuff.

To get setup:

- Check out this repo.
- run `npm install` to install grunt packages.

Once you have done this, you can now do the following:

--

##Serve HTTP

Serves the static files locally with auto reloading on less/css/js/html changes.

	grunt serve

Will host the app on port 7701. Should automatically open your browser to the running app.


--
##Build App

This will actually compile/compress all of your css files, and requirejs modules into 1 file.

	grunt build

The results will live in the `build/` directory. 

The build process compiles into the `building/` directory and then when complete will delete the `build/` and move the `building/ -> build/`. This way you can build while still serving the previously built version.