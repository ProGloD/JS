function jsonModify(json, key, value) {
  let obj = JSON.parse(json);
  for (let k in obj) {
    if (k === key) {
      obj.k = value;
    } else if (isObject(obj.k)) {

    }
  }
}

// Returns if a value is an object
function isObject(value) {
  return value && typeof value === 'object' && value.constructor === Object;
}