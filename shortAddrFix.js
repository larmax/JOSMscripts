// moves letter from housenumber to unit where toChange=yes tag is present
var layer = josm.layers.get("{LAYER}");
  var ds = layer.data;
var addr = ds.query('toChange=yes');
var objs=[];


Object.keys(addr).forEach(function(key) {

var h = "addr:housenumber";
var u = "addr:unit";
 var addr2 = (addr[key]);
var hn = addr[key].tags[h];

var au = hn.match(/([0-9]+)([^0-9]+)/).splice(2)[0] ;

addr[key].tags[u] = au.trim();

addr[key].tags[h] = hn.match(/([0-9]+)([^0-9]+)/).splice(1)[0] ;
});
var n = "addr:housenumber";
josm.alert("success?");
