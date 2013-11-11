// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {

  var type = typeof(obj);

  if (type !== "object" || obj === null) {
    
    if (type === "string") {
      obj = '"' + obj + '"';
    }

    return obj + '';

  } else {
    var value;
    var json = [];
    var arr = Array.isArray(obj);

    for (var key in obj) {
      value = obj[key];
      
      if (typeof(value) !== "function" && value !== undefined) {
        if (type === "string") {
          value = '"' + value + '"';
        } else if (type === "object" && value !== null) {
          value = stringifyJSON(value);
        }
        json.push((arr ? "" : '"' + key + '":') + String(value));
      }
    }

    return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
  }
};
