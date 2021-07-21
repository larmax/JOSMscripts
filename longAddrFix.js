//creates addr:units for messy long housenumbers
 var layer = josm.layers.get("{LAYER}");
  var ds = layer.data;
var addr = ds.query('"addr:housenumber":";"');


Object.keys(addr).forEach(function(key) {

var h = "addr:housenumber";
var u = "addr:unit";
 var addr2 = (addr[key]);
var hn = addr[key].tags[h];
var au = addr[key].tags[h].split(hn[0]).join("");

if(au[0] == ";"){
 au=au.substring(1);
}
var aus = au.split(";");

if(aus.length > 1){
au = aus[0].trim()+"-"+ aus[aus.length-1].trim();
}
addr[key].tags[u] = au;

addr[key].tags[h] = hn.match(/([0-9]+)([^0-9]+)/).splice(1)[0] ;
});
var n = "addr:housenumber";
josm.alert("success?");
