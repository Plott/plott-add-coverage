var FingerPrints = require('plott-mongo-models').FingerPrints,
    wifiscanner = require('plott-wifi-scanner');

/**
 * Adds coverage point to the FingerPrints collection
 *
 * @module plott/addCoverage
 * @category controller
 * @param {body} geojson FingerPrints Model
 * @return {geojson} Coveage point
 * @example
 * router.get('/', plott.addCoverage);
 *
 * //=route
 */


module.exports = function (req, res) {
  var geojson = req.body;
  wifiscanner(function(err, aps){
    if (err) {return handleError(res, err);}
    geojson.properties.wifi = aps;
    FingerPrints.create(geojson, function(err, data) {
      if(err) { return handleError(res, err); }
      return res.json(201, data);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
