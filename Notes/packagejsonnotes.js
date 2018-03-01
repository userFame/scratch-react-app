{
  "name": "scratch-react-app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "babel": {
    // you can make a .babel.rc file and put this in to make es6 work
    // *** for react, you need to add the react babel preset like "presets": ['es2015', 'react']
    "presets": [
      "es2015"
    ],
    // lookup why we need babel-plugin-transform-runtime and babel-runtime is needed
    "plugins": [
      "transform-runtime"
    ]
  },
  // adding --watch means its in watch mode
  "build": "webpack --watch",
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.2",
    "babel-plugin-transform-runtime": "^6.23.0",
    "babel-preset-es2015": "^6.24.1",
    "webpack": "^3.11.0",
    "webpack-dev-server": "^2.11.1"
  },
  "dependencies": {
    "babel-runtime": "^6.11.6"
  }
}

// in package.json in scripts, use webpack --watch to watch js files and bundles automatically without calling npm start everytime
// npm i -S babel-runtime
// npm i -D babel-plugin-transform