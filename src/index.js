// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = propName => {
  return propName;
};
const createNotEnumerableProperty = propName => {
  return Symbol(propName);
};
const createProtoMagicObject = () => {};
const incrementor = () => {};
const asyncIncrementor = () => {};
const createIncrementer = () => {
  return {
    value: 0,
    next: function() {
      this.value += 1;
      return this;
    },
    [Symbol.iterator]: function() {
      return this;
    }
  };
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = input => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(input);
    }, 1001);
  });
};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = () => {};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
