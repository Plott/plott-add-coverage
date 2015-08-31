# plott-add-coverage

[![build status](https://secure.travis-ci.org/Plott/plott-add-coverage.png)](http://travis-ci.org/Plott/plott-add-coverage)

Adds coverage sample to database


### `plott.addCoverage(geojson)`

Adds coverage point to the FingerPrints collection


### Parameters

| parameter | type | description  |
| --------- | ---- | ------------ |
| `geojson` | body | dBm RSSI dBm |


### Example

```js
router.get('/', plott.addCoverage);

//=route
```


**Returns** `geojson`, Coveage point

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install plott-add-coverage
```

## Tests

```sh
$ npm test
```


