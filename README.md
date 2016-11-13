# movie-search
Generated with [generator-gulp-angular](https://github.com/Swiip/generator-gulp-angular).

Simple application to search movie and see details of it. Using two diferents API, 
http://imdb.wemakesites.net/ for movie search and http://www.omdbapi.com/ to get the movies details

##Dependencies

To run this project you need to have:

* NodeJS ([link](https://nodejs.org/))
* Bower ([link](http://bower.io/))
* Gulp ([link](http://gulpjs.com/))


##Setup the project

1.Install the depedencies above.

2.Clone the project.

```
git clone https://github.com/picheli20/movie-search.git
```

3.Go into the project folder

```
cd movie-search
```

4.Install the gulp dependencies

```
npm install
```
5.Install the bower dependencies

```
bower install
```

## Use Gulp tasks

* `gulp` or `gulp build` to build an optimized version of your application in `/dist`
* `gulp serve` to launch a browser sync server on your source files
* `gulp serve:dist` to launch a server on your optimized application
* `gulp test` to launch your unit tests with Karma
* `gulp test:auto` to launch your unit tests with Karma in watch mode
* `gulp protractor` to launch your e2e tests with Protractor
* `gulp protractor:dist` to launch your e2e tests with Protractor on the dist files

##Test Coverage

This project has `karma-coverage`, you can check the `/coverage` folder after running the `gulp test` command

