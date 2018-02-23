izi-travel-api
=========

A small library that makes the izi-travel-api a little easier

## Installation

  `npm install izi-travel-api`

## Usage

  var izi = require('izi-travel-api');

  var clientObject = {};

  /* Objects are rendered and manipulated here */
  function iziCallback(iziObject) {
    /* the iziObject stores information that was difficult to find in the api */
    console.log("CLIENT CODE: " + iziObject.iziTitle[0]);
    clientObject = iziObject;
  }

  /* This call will store one Amsterdam tour object in iziObject */
  izi.iziCall("Amsterdam", "ded2b49e-e1f0-4917-a0c9-aeea61529c75", iziCallback);
  


## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.