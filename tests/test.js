var wifiscanner = require('../'),
    test = require('tape');

    test('scanner', function (t){
      wifiscanner(function(err, data){
        t.ok(Array.isArray(data));
      });

      t.end();
    });
