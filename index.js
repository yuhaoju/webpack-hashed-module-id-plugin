'use strict';

var createHash = require("crypto").createHash;

function HashedModuleIdsPlugin(options) {
    this.options = extend(true, {
        hashFunction: "md5",
        hashDigest: "base64",
        hashDigestLength: 4
    }, options)
}

HashedModuleIdsPlugin.prototype.apply = function (compiler) {
    var options = this.options;
    compiler.plugin("compilation", function (compilation) {
        var usedIds = new Set();
        compilation.plugin("before-module-ids", function (modules) {
            modules.forEach(function (module, index) {
                if (module.id === null && module.libIdent && options) {
                    var id = module.libIdent({
                        context: options.context || compiler.options.context
                    });
                    var hash = createHash(options.hashFunction);
                    hash.update(id);
                    var hashId = hash.digest(options.hashDigest);
                    var len = options.hashDigestLength;
                    while (usedIds.has(hashId.substr(0, len)))
                        len++;

                    // Webpack 1 can't take character as id, so transform hash to ascii code here.
                    var shortenedHashId = hashId.substr(0, len);
                    console.log(shortenedHashId);
                    module.id = 0;
                    for(var i = 0; i < len; i++) {
                        module.id += shortenedHashId[i].charCodeAt(0) * Math.pow(10, 2 * (len - i) - 2);
                    }

                    usedIds.add(module.id);
                }
            });
        });
    });
}

module.exports = HashedModuleIdsPlugin;
