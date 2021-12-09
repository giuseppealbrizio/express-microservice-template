import _ from 'lodash';

// const keyValueArray = [{ a: 1 }, { b: 2 }, { c: 3 }];
// const valuesArray = [a, b, c];

/**
 * This function convert an array of key/values into object
 * This return an object {a: 1, b: 2, c: 3}
 * @param keyValuesArray
 */
export const keyValuesArrayToObject = (keyValuesArray) => {
  _.reduce(
    keyValuesArray,
    (result, item) => {
      const key = Object.keys(item)[0]; // first property: a, b, c
      // eslint-disable-next-line no-param-reassign
      result[key] = item[key];
      return result;
    },
    {},
  );
};

/**
 * Native JS reduce function
 * @param keyValuesArray
 */
// export const keyValuesArrayToObject = (keyValuesArray) => {
//   keyValuesArray.reduce((result, item) => {
//     const key = Object.keys(item)[0]; //first property: a, b, c
//     result[key] = item[key];
//     return result;
//   }, {});
// };

/**
 * This function convert an array of key/values into object
 * This return an object {"0": "a", "1": "b", "2": "c"}
 * @param valuesArray
 */
export const valuesArrayToObject = (valuesArray) => {
  _.reduce(
    valuesArray,
    (result, item, index, array) => {
      console.log(array);
      // eslint-disable-next-line no-param-reassign
      result[index] = item;
      return result;
    },
    {},
  );
};

/**
 * Native JS reduce
 * @param valuesArray
 */
// export const valueArrayToObject = (valuesArray) => {
//   valuesArray.reduce(function (result, item, index, array) {
//     // eslint-disable-next-line no-param-reassign
//     result[index] = item; // a, b, c
//     return result;
//   }, {}); // watch out the empty {}, which is passed as "result"
// };