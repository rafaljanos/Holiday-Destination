{"filter":false,"title":"scripts.js","tooltip":"/assets/JS/scripts.js","undoManager":{"mark":9,"position":9,"stack":[[{"start":{"row":0,"column":0},"end":{"row":49,"column":7},"action":"insert","lines":["function initMap() {","","        var map = new google.maps.Map(document.getElementById('map'), {","          zoom: 3,","          center: {lat: -28.024, lng: 140.887}","        });","","        // Create an array of alphabetical characters used to label the markers.","        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';","","        // Add some markers to the map.","        // Note: The code uses the JavaScript Array.prototype.map() method to","        // create an array of markers based on a given \"locations\" array.","        // The map() method here has nothing to do with the Google Maps API.","        var markers = locations.map(function(location, i) {","          return new google.maps.Marker({","            position: location,","            label: labels[i % labels.length]","          });","        });","","        // Add a marker clusterer to manage the markers.","        var markerCluster = new MarkerClusterer(map, markers,","            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});","      }","      var locations = [","        {lat: -31.563910, lng: 147.154312},","        {lat: -33.718234, lng: 150.363181},","        {lat: -33.727111, lng: 150.371124},","        {lat: -33.848588, lng: 151.209834},","        {lat: -33.851702, lng: 151.216968},","        {lat: -34.671264, lng: 150.863657},","        {lat: -35.304724, lng: 148.662905},","        {lat: -36.817685, lng: 175.699196},","        {lat: -36.828611, lng: 175.790222},","        {lat: -37.750000, lng: 145.116667},","        {lat: -37.759859, lng: 145.128708},","        {lat: -37.765015, lng: 145.133858},","        {lat: -37.770104, lng: 145.143299},","        {lat: -37.773700, lng: 145.145187},","        {lat: -37.774785, lng: 145.137978},","        {lat: -37.819616, lng: 144.968119},","        {lat: -38.330766, lng: 144.695692},","        {lat: -39.927193, lng: 175.053218},","        {lat: -41.330162, lng: 174.865694},","        {lat: -42.734358, lng: 147.439506},","        {lat: -42.734358, lng: 147.501315},","        {lat: -42.735258, lng: 147.438000},","        {lat: -43.999792, lng: 170.463352}","      ]"],"id":1}],[{"start":{"row":3,"column":16},"end":{"row":3,"column":17},"action":"remove","lines":["3"],"id":2}],[{"start":{"row":3,"column":16},"end":{"row":3,"column":17},"action":"insert","lines":["5"],"id":3}],[{"start":{"row":23,"column":115},"end":{"row":24,"column":0},"action":"insert","lines":["",""],"id":4},{"start":{"row":24,"column":0},"end":{"row":24,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":3,"column":16},"end":{"row":3,"column":17},"action":"remove","lines":["5"],"id":18}],[{"start":{"row":3,"column":16},"end":{"row":3,"column":17},"action":"insert","lines":["3"],"id":19}],[{"start":{"row":0,"column":0},"end":{"row":25,"column":7},"action":"remove","lines":["function initMap() {","","        var map = new google.maps.Map(document.getElementById('map'), {","          zoom: 3,","          center: {lat: -28.024, lng: 140.887}","        });","","        // Create an array of alphabetical characters used to label the markers.","        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';","","        // Add some markers to the map.","        // Note: The code uses the JavaScript Array.prototype.map() method to","        // create an array of markers based on a given \"locations\" array.","        // The map() method here has nothing to do with the Google Maps API.","        var markers = locations.map(function(location, i) {","          return new google.maps.Marker({","            position: location,","            label: labels[i % labels.length]","          });","        });","","        // Add a marker clusterer to manage the markers.","        var markerCluster = new MarkerClusterer(map, markers,","            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});","            ","      }"],"id":20},{"start":{"row":0,"column":0},"end":{"row":24,"column":7},"action":"insert","lines":["function initMap() {","","        var map = new google.maps.Map(document.getElementById('map'), {","          zoom: 3,","          center: {lat: -28.024, lng: 140.887}","        });","","        // Create an array of alphabetical characters used to label the markers.","        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';","","        // Add some markers to the map.","        // Note: The code uses the JavaScript Array.prototype.map() method to","        // create an array of markers based on a given \"locations\" array.","        // The map() method here has nothing to do with the Google Maps API.","        var markers = locations.map(function(location, i) {","          return new google.maps.Marker({","            position: location,","            label: labels[i % labels.length]","          });","        });","","        // Add a marker clusterer to manage the markers.","        var markerCluster = new MarkerClusterer(map, markers,","            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});","      }"]}],[{"start":{"row":0,"column":0},"end":{"row":49,"column":7},"action":"remove","lines":["function initMap() {","","        var map = new google.maps.Map(document.getElementById('map'), {","          zoom: 3,","          center: {lat: -28.024, lng: 140.887}","        });","","        // Create an array of alphabetical characters used to label the markers.","        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';","","        // Add some markers to the map.","        // Note: The code uses the JavaScript Array.prototype.map() method to","        // create an array of markers based on a given \"locations\" array.","        // The map() method here has nothing to do with the Google Maps API.","        var markers = locations.map(function(location, i) {","          return new google.maps.Marker({","            position: location,","            label: labels[i % labels.length]","          });","        });","","        // Add a marker clusterer to manage the markers.","        var markerCluster = new MarkerClusterer(map, markers,","            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});","      }","      var locations = [","        {lat: -31.563910, lng: 147.154312},","        {lat: -33.718234, lng: 150.363181},","        {lat: -33.727111, lng: 150.371124},","        {lat: -33.848588, lng: 151.209834},","        {lat: -33.851702, lng: 151.216968},","        {lat: -34.671264, lng: 150.863657},","        {lat: -35.304724, lng: 148.662905},","        {lat: -36.817685, lng: 175.699196},","        {lat: -36.828611, lng: 175.790222},","        {lat: -37.750000, lng: 145.116667},","        {lat: -37.759859, lng: 145.128708},","        {lat: -37.765015, lng: 145.133858},","        {lat: -37.770104, lng: 145.143299},","        {lat: -37.773700, lng: 145.145187},","        {lat: -37.774785, lng: 145.137978},","        {lat: -37.819616, lng: 144.968119},","        {lat: -38.330766, lng: 144.695692},","        {lat: -39.927193, lng: 175.053218},","        {lat: -41.330162, lng: 174.865694},","        {lat: -42.734358, lng: 147.439506},","        {lat: -42.734358, lng: 147.501315},","        {lat: -42.735258, lng: 147.438000},","        {lat: -43.999792, lng: 170.463352}","      ]"],"id":21}],[{"start":{"row":0,"column":0},"end":{"row":49,"column":7},"action":"insert","lines":["function initMap() {","","        var map = new google.maps.Map(document.getElementById('map'), {","          zoom: 3,","          center: {lat: -28.024, lng: 140.887}","        });","","        // Create an array of alphabetical characters used to label the markers.","        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';","","        // Add some markers to the map.","        // Note: The code uses the JavaScript Array.prototype.map() method to","        // create an array of markers based on a given \"locations\" array.","        // The map() method here has nothing to do with the Google Maps API.","        var markers = locations.map(function(location, i) {","          return new google.maps.Marker({","            position: location,","            label: labels[i % labels.length]","          });","        });","","        // Add a marker clusterer to manage the markers.","        var markerCluster = new MarkerClusterer(map, markers,","            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});","      }","      var locations = [","        {lat: -31.563910, lng: 147.154312},","        {lat: -33.718234, lng: 150.363181},","        {lat: -33.727111, lng: 150.371124},","        {lat: -33.848588, lng: 151.209834},","        {lat: -33.851702, lng: 151.216968},","        {lat: -34.671264, lng: 150.863657},","        {lat: -35.304724, lng: 148.662905},","        {lat: -36.817685, lng: 175.699196},","        {lat: -36.828611, lng: 175.790222},","        {lat: -37.750000, lng: 145.116667},","        {lat: -37.759859, lng: 145.128708},","        {lat: -37.765015, lng: 145.133858},","        {lat: -37.770104, lng: 145.143299},","        {lat: -37.773700, lng: 145.145187},","        {lat: -37.774785, lng: 145.137978},","        {lat: -37.819616, lng: 144.968119},","        {lat: -38.330766, lng: 144.695692},","        {lat: -39.927193, lng: 175.053218},","        {lat: -41.330162, lng: 174.865694},","        {lat: -42.734358, lng: 147.439506},","        {lat: -42.734358, lng: 147.501315},","        {lat: -42.735258, lng: 147.438000},","        {lat: -43.999792, lng: 170.463352}","      ]"],"id":22}],[{"start":{"row":0,"column":0},"end":{"row":49,"column":7},"action":"remove","lines":["function initMap() {","","        var map = new google.maps.Map(document.getElementById('map'), {","          zoom: 3,","          center: {lat: -28.024, lng: 140.887}","        });","","        // Create an array of alphabetical characters used to label the markers.","        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';","","        // Add some markers to the map.","        // Note: The code uses the JavaScript Array.prototype.map() method to","        // create an array of markers based on a given \"locations\" array.","        // The map() method here has nothing to do with the Google Maps API.","        var markers = locations.map(function(location, i) {","          return new google.maps.Marker({","            position: location,","            label: labels[i % labels.length]","          });","        });","","        // Add a marker clusterer to manage the markers.","        var markerCluster = new MarkerClusterer(map, markers,","            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});","      }","      var locations = [","        {lat: -31.563910, lng: 147.154312},","        {lat: -33.718234, lng: 150.363181},","        {lat: -33.727111, lng: 150.371124},","        {lat: -33.848588, lng: 151.209834},","        {lat: -33.851702, lng: 151.216968},","        {lat: -34.671264, lng: 150.863657},","        {lat: -35.304724, lng: 148.662905},","        {lat: -36.817685, lng: 175.699196},","        {lat: -36.828611, lng: 175.790222},","        {lat: -37.750000, lng: 145.116667},","        {lat: -37.759859, lng: 145.128708},","        {lat: -37.765015, lng: 145.133858},","        {lat: -37.770104, lng: 145.143299},","        {lat: -37.773700, lng: 145.145187},","        {lat: -37.774785, lng: 145.137978},","        {lat: -37.819616, lng: 144.968119},","        {lat: -38.330766, lng: 144.695692},","        {lat: -39.927193, lng: 175.053218},","        {lat: -41.330162, lng: 174.865694},","        {lat: -42.734358, lng: 147.439506},","        {lat: -42.734358, lng: 147.501315},","        {lat: -42.735258, lng: 147.438000},","        {lat: -43.999792, lng: 170.463352}","      ]"],"id":23}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":0,"column":0},"end":{"row":0,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1564055360121,"hash":"da39a3ee5e6b4b0d3255bfef95601890afd80709"}