function classNames(classObject) {
  return Object.keys(classObject).reduce((classes, className) => {
    if (classObject[className] === true) {
      return classes === "" ? className : `${classes} ${className}`;
    }
    return `${classes}`;
  }, "");
}

function fillArray(max) {
  return new Array(max).fill().map((e, i) => {
    return i + 1;
  });
}

module.exports = {
  classNames,
  fillArray
};
