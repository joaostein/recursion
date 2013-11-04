// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className, node, result) {
  // document.body, element.childNodes, and element.classList

  node = node || document.body;
  result = result || [];
  var children = node.children;

  if (node.classList.length > 0) {
    for (var i = 0; i < node.classList.length; i++) {
      if (node.classList[i] === className) {
        result.push(node);
      }
    }
  }

  if (children) {
    for (var i = 0; i < children.length; i++) {
      if (children[i].nodeType === 1) {
        getElementsByClassName(className, children[i], result);
      }
    }
  }

  return result;
};