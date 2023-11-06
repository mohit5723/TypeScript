"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(value) {
    return value + 2;
}
addTwo(2);
//! passing default values
function user(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}
user("mohit", "mohit@gamil");
//! arrow fun
var arr = function (name, email) {
    return "";
};
arr("mohit", "mohit@gam");
//! return typesafety
function addOne(value) {
    return value + 1;
}
addOne(1);
//! mapping
var heros = ["thor", 'spiderman', "ironman"];
// const heros = [1,2,3]
heros.map(function (hero) {
    return "hero is ".concat(heros);
});
//! consoling error void,never
function consoleError(errMsg) {
    console.log(errMsg);
}
function handleError(msg) {
    throw new Error(msg);
}
