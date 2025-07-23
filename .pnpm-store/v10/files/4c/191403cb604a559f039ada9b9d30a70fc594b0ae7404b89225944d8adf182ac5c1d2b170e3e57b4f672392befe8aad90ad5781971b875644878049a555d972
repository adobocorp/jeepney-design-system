/**
 * @name getHasAttribute
 * @type filter
 * @description only returns tokens of that have any of the specified attributes
 * @param attributes one more multiple attributes (`strings`)
 * @returns filter function
 */
export const getHasAttribute = (...attributes) => (token) => attributes.some(attr => Object.prototype.hasOwnProperty.call(token, attr));
