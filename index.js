const error = require("./src/errors");

const handle = require("./src/handling");

handle.errorFirstCallbackWrong();

// try {
//     error.standardErr.range();
// } catch (err) {
//     console.log('Ha ocurrido un error', err);
// }

// console.log("hola");

error.standardErr.range();
