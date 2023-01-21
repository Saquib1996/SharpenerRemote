const fs = require('fs')
fs.writeFileSync('hello.txt','code step by step');
console.log(__dirname); // Tells about in which directory are you in ?
fs.writeFileSync('code.txt','some code')