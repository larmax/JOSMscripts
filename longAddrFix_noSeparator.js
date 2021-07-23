//creates addr:units for messy long housenumbers without separator
var layer = josm.layers.get("Data Layer 1");
var ds = layer.data;
var addr = ds.query('"addr:housenumber"');


Object.keys(addr).forEach(function(key) {

  var h = "addr:housenumber";
  var u = "addr:unit";

  var hn = addr[key].tags[h];
  var aus = "";

  if(addr[key].tags[h].length >= 4){
    aus = hn.split(" ")[1].split("");

    if(aus.length > 1){
      addr[key].tags[u] = aus[0].trim()+"-"+ aus[aus.length-1].trim();


      addr[key].tags[h] =hn.split(" ")[0] ;
    }
  }
});
var n = "addr:housenumber";
josm.alert("success?");
