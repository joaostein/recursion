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

    if (arr) {
      for (var i = 0; i < obj.length; i++) {
        json.push(stringifyJSON(obj[i]));
      }
    } else {
      for (var key in obj) {
        if (typeof(obj[key]) !== "function" && obj[key] !== undefined) {
          json.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
        }
      }
    }

    return (arr ? "[" : "{") + json + (arr ? "]" : "}");
  }
};
