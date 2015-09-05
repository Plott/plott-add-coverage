var addCoverage = require('../'),
    test = require('tape'),
    fs = require('fs');

    test('addCoverage', function (t){
      var rs = fs.createReadStream('tests/fixtures/in/scan.json');
      var s;
          rs.on('data', function (chunk){
            // dataLength += chunk.length;

            s += chunk;
            // console.log(typeof s)
          });
          rs.on('end', function () {
            // console.log('The length was:', dataLength);

            // s = JSON.parse(s);
            console.log(s)
            // j = JSON.parse(s)
            // console.log(j.type)
          })
          rs.on('error', function (err){
            console.log(err);
          });



      t.end();
    });
