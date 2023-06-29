const os = require('os');

console.log(os.freemem());
console.log(os.cpus()[0].model);
console.log(os.version);