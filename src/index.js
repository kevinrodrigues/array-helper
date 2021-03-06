const isFunction = (func) => {
    if (typeof func === 'function') {
        return true;
    }

    return false;
};

/**
 * @flatten: flatten arrays going only one level deep. If `isDeep`
 * is set to true then deep nested arrays will flatten too.
 * e.g [1, 2, 3, [[[10]]]] => [1, 2, 3, 10]
 * @param  {} array @type array: [1, 2, 3]
 * @param  {} isDeep @type boolean: passing `true` will result in:
 * flatten([1, 2, [[3]]], true) => [1, 2, 3]
 * 
 */
const flatten = (array, isDeep) => {
    return array.reduce((a, b) => {
        if (Array.isArray(b) && isDeep) {
            return a.concat(flatten(b, isDeep));
        }

        return a.concat(b);
    }, []);
};

/**
 * @filter: Filter out array elements. If `isDeep` is set to true
 * then deep nested arrays will be flattened and then filtered.
 * e.g ([1, 2, 3], 3) => [1, 2]
 * e.g ([1, 2, [[[3]]], 3, true) // `isDeep` set to true
 * 
 * @param  {} array @type array: [1, 2, 3]
 * @param  {} filterItem @type element: filter([1, 2, 3], 3) => [1, 2]
 * @param  {} isDeep @type boolean: true = calls `flatten` before filtering.
 */
const filter = (array, filterItem, isDeep) => {
    let filterArray = array;

    if (isDeep) {
        filterArray = flatten(filterArray, true);
    }

    for (let i = filterArray.length; i--;) {
        if (filterArray[i] === filterItem) {
            filterArray.splice(i, 1);
        }
    }

    return filterArray;
};

/**
 * @compact: Remove falsy values from a given array.
 * e.g [1, 2, 10, 0, null] => [1, 2, 10]
 * 
 * @param  {} array
 */
const compact = (array) => {
    return array.filter((value) => {
        return !!value;
    });
};

/**
 * @partial: Call a function as a parameter with given arguments in it's place.
 * 
 * @param  {} func
 * @param  {} arguments
 */
const partial = (func, arg) => {
    if (isFunction(func)) {
        return func.apply(this, arg);
    }

    throw new Error('Error: Please pass in a function.');
};

/**
 * Executes the provided callback function once for each element present
 * in the array until it finds one where the callback returns a falsy value.
 * 
 * @param {*} func 
 * @param {*} array 
 */
const every = (func, array) => {
    if (isFunction(func) && Array.isArray(array)) {
        return array.every(func);
    }

    throw new Error('Error: Please pass in a function.');
};

/**
 * Converts a given array element to a key value pair object.
 * 
 * @param {*} array
 */
const object = (array) => {
    if (Array.isArray(array)) {
        return array.reduce((acc, cur, i) => {
            acc[i] = cur;

            return acc;
        }, {});
    }

    throw new Error('Error: Please pass in an array.');
};

/**
 * Map and return a `new` array set.
 * 
 * @param {*} array 
 * @param {*} iteratee 
 */
const map = (array, func) => {
    let newArrayInstance;

    if (Array.isArray(array) && isFunction(func)) {
        newArrayInstance = [];

        array.forEach((el) => {
            newArrayInstance.push(func.call(this, el));
        });

        return newArrayInstance;
    }

    throw new Error('Error: Please pass in valid arguments');
};

const mainExport = {
    isFunction,
    flatten,
    filter,
    compact,
    partial,
    every,
    object,
    map
};

// export default mainExport; // need to fix
module.exports = mainExport; // for commonJS compatibility
