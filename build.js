var doc = require('nodoc'),
    fs = require('fs');

// nodoc js lang parse is not ready
// just use coffee temp
doc.parser.setRule('coffee', {
    commentReg: /\/\*\*?([\s\S]+?)\*\/\s+[\w]+\s([\w\.]+)/g
});

doc.generate('index.js', {
    moduleName: 'api',
    language: 'coffee'
}).then(function(markdown) {
    var readme = fs.readFileSync('_README.md');
    fs.writeFileSync('README.md', readme + markdown);
});
