var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../frugal/node_modules/crypto-js/core.js
var require_core = __commonJS({
  "../frugal/node_modules/crypto-js/core.js"(exports2, module2) {
    (function(root, factory) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory();
      } else if (typeof define === "function" && define.amd) {
        define([], factory);
      } else {
        root.CryptoJS = factory();
      }
    })(exports2, function() {
      var CryptoJS = CryptoJS || function(Math2, undefined2) {
        var crypto2;
        if (typeof window !== "undefined" && window.crypto) {
          crypto2 = window.crypto;
        }
        if (typeof self !== "undefined" && self.crypto) {
          crypto2 = self.crypto;
        }
        if (typeof globalThis !== "undefined" && globalThis.crypto) {
          crypto2 = globalThis.crypto;
        }
        if (!crypto2 && typeof window !== "undefined" && window.msCrypto) {
          crypto2 = window.msCrypto;
        }
        if (!crypto2 && typeof global !== "undefined" && global.crypto) {
          crypto2 = global.crypto;
        }
        if (!crypto2 && typeof require === "function") {
          try {
            crypto2 = require("crypto");
          } catch (err) {
          }
        }
        var cryptoSecureRandomInt = function() {
          if (crypto2) {
            if (typeof crypto2.getRandomValues === "function") {
              try {
                return crypto2.getRandomValues(new Uint32Array(1))[0];
              } catch (err) {
              }
            }
            if (typeof crypto2.randomBytes === "function") {
              try {
                return crypto2.randomBytes(4).readInt32LE();
              } catch (err) {
              }
            }
          }
          throw new Error("Native crypto module could not be used to get secure random number.");
        };
        var create3 = Object.create || /* @__PURE__ */ function() {
          function F() {
          }
          return function(obj) {
            var subtype;
            F.prototype = obj;
            subtype = new F();
            F.prototype = null;
            return subtype;
          };
        }();
        var C = {};
        var C_lib = C.lib = {};
        var Base = C_lib.Base = /* @__PURE__ */ function() {
          return {
            /**
             * Creates a new object that inherits from this object.
             *
             * @param {Object} overrides Properties to copy into the new object.
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         field: 'value',
             *
             *         method: function () {
             *         }
             *     });
             */
            extend: function(overrides) {
              var subtype = create3(this);
              if (overrides) {
                subtype.mixIn(overrides);
              }
              if (!subtype.hasOwnProperty("init") || this.init === subtype.init) {
                subtype.init = function() {
                  subtype.$super.init.apply(this, arguments);
                };
              }
              subtype.init.prototype = subtype;
              subtype.$super = this;
              return subtype;
            },
            /**
             * Extends this object and runs the init method.
             * Arguments to create() will be passed to init().
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var instance = MyType.create();
             */
            create: function() {
              var instance = this.extend();
              instance.init.apply(instance, arguments);
              return instance;
            },
            /**
             * Initializes a newly created object.
             * Override this method to add some logic when your objects are created.
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         init: function () {
             *             // ...
             *         }
             *     });
             */
            init: function() {
            },
            /**
             * Copies properties into this object.
             *
             * @param {Object} properties The properties to mix in.
             *
             * @example
             *
             *     MyType.mixIn({
             *         field: 'value'
             *     });
             */
            mixIn: function(properties) {
              for (var propertyName in properties) {
                if (properties.hasOwnProperty(propertyName)) {
                  this[propertyName] = properties[propertyName];
                }
              }
              if (properties.hasOwnProperty("toString")) {
                this.toString = properties.toString;
              }
            },
            /**
             * Creates a copy of this object.
             *
             * @return {Object} The clone.
             *
             * @example
             *
             *     var clone = instance.clone();
             */
            clone: function() {
              return this.init.prototype.extend(this);
            }
          };
        }();
        var WordArray = C_lib.WordArray = Base.extend({
          /**
           * Initializes a newly created word array.
           *
           * @param {Array} words (Optional) An array of 32-bit words.
           * @param {number} sigBytes (Optional) The number of significant bytes in the words.
           *
           * @example
           *
           *     var wordArray = CryptoJS.lib.WordArray.create();
           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
           */
          init: function(words, sigBytes) {
            words = this.words = words || [];
            if (sigBytes != undefined2) {
              this.sigBytes = sigBytes;
            } else {
              this.sigBytes = words.length * 4;
            }
          },
          /**
           * Converts this word array to a string.
           *
           * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
           *
           * @return {string} The stringified word array.
           *
           * @example
           *
           *     var string = wordArray + '';
           *     var string = wordArray.toString();
           *     var string = wordArray.toString(CryptoJS.enc.Utf8);
           */
          toString: function(encoder) {
            return (encoder || Hex).stringify(this);
          },
          /**
           * Concatenates a word array to this word array.
           *
           * @param {WordArray} wordArray The word array to append.
           *
           * @return {WordArray} This word array.
           *
           * @example
           *
           *     wordArray1.concat(wordArray2);
           */
          concat: function(wordArray) {
            var thisWords = this.words;
            var thatWords = wordArray.words;
            var thisSigBytes = this.sigBytes;
            var thatSigBytes = wordArray.sigBytes;
            this.clamp();
            if (thisSigBytes % 4) {
              for (var i = 0; i < thatSigBytes; i++) {
                var thatByte = thatWords[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                thisWords[thisSigBytes + i >>> 2] |= thatByte << 24 - (thisSigBytes + i) % 4 * 8;
              }
            } else {
              for (var j = 0; j < thatSigBytes; j += 4) {
                thisWords[thisSigBytes + j >>> 2] = thatWords[j >>> 2];
              }
            }
            this.sigBytes += thatSigBytes;
            return this;
          },
          /**
           * Removes insignificant bits.
           *
           * @example
           *
           *     wordArray.clamp();
           */
          clamp: function() {
            var words = this.words;
            var sigBytes = this.sigBytes;
            words[sigBytes >>> 2] &= 4294967295 << 32 - sigBytes % 4 * 8;
            words.length = Math2.ceil(sigBytes / 4);
          },
          /**
           * Creates a copy of this word array.
           *
           * @return {WordArray} The clone.
           *
           * @example
           *
           *     var clone = wordArray.clone();
           */
          clone: function() {
            var clone = Base.clone.call(this);
            clone.words = this.words.slice(0);
            return clone;
          },
          /**
           * Creates a word array filled with random bytes.
           *
           * @param {number} nBytes The number of random bytes to generate.
           *
           * @return {WordArray} The random word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.lib.WordArray.random(16);
           */
          random: function(nBytes) {
            var words = [];
            for (var i = 0; i < nBytes; i += 4) {
              words.push(cryptoSecureRandomInt());
            }
            return new WordArray.init(words, nBytes);
          }
        });
        var C_enc = C.enc = {};
        var Hex = C_enc.Hex = {
          /**
           * Converts a word array to a hex string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The hex string.
           *
           * @static
           *
           * @example
           *
           *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
           */
          stringify: function(wordArray) {
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var hexChars = [];
            for (var i = 0; i < sigBytes; i++) {
              var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              hexChars.push((bite >>> 4).toString(16));
              hexChars.push((bite & 15).toString(16));
            }
            return hexChars.join("");
          },
          /**
           * Converts a hex string to a word array.
           *
           * @param {string} hexStr The hex string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
           */
          parse: function(hexStr) {
            var hexStrLength = hexStr.length;
            var words = [];
            for (var i = 0; i < hexStrLength; i += 2) {
              words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << 24 - i % 8 * 4;
            }
            return new WordArray.init(words, hexStrLength / 2);
          }
        };
        var Latin1 = C_enc.Latin1 = {
          /**
           * Converts a word array to a Latin1 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The Latin1 string.
           *
           * @static
           *
           * @example
           *
           *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
           */
          stringify: function(wordArray) {
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var latin1Chars = [];
            for (var i = 0; i < sigBytes; i++) {
              var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              latin1Chars.push(String.fromCharCode(bite));
            }
            return latin1Chars.join("");
          },
          /**
           * Converts a Latin1 string to a word array.
           *
           * @param {string} latin1Str The Latin1 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
           */
          parse: function(latin1Str) {
            var latin1StrLength = latin1Str.length;
            var words = [];
            for (var i = 0; i < latin1StrLength; i++) {
              words[i >>> 2] |= (latin1Str.charCodeAt(i) & 255) << 24 - i % 4 * 8;
            }
            return new WordArray.init(words, latin1StrLength);
          }
        };
        var Utf8 = C_enc.Utf8 = {
          /**
           * Converts a word array to a UTF-8 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-8 string.
           *
           * @static
           *
           * @example
           *
           *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
           */
          stringify: function(wordArray) {
            try {
              return decodeURIComponent(escape(Latin1.stringify(wordArray)));
            } catch (e) {
              throw new Error("Malformed UTF-8 data");
            }
          },
          /**
           * Converts a UTF-8 string to a word array.
           *
           * @param {string} utf8Str The UTF-8 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
           */
          parse: function(utf8Str) {
            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
          }
        };
        var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
          /**
           * Resets this block algorithm's data buffer to its initial state.
           *
           * @example
           *
           *     bufferedBlockAlgorithm.reset();
           */
          reset: function() {
            this._data = new WordArray.init();
            this._nDataBytes = 0;
          },
          /**
           * Adds new data to this block algorithm's buffer.
           *
           * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
           *
           * @example
           *
           *     bufferedBlockAlgorithm._append('data');
           *     bufferedBlockAlgorithm._append(wordArray);
           */
          _append: function(data) {
            if (typeof data == "string") {
              data = Utf8.parse(data);
            }
            this._data.concat(data);
            this._nDataBytes += data.sigBytes;
          },
          /**
           * Processes available data blocks.
           *
           * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
           *
           * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
           *
           * @return {WordArray} The processed data.
           *
           * @example
           *
           *     var processedData = bufferedBlockAlgorithm._process();
           *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
           */
          _process: function(doFlush) {
            var processedWords;
            var data = this._data;
            var dataWords = data.words;
            var dataSigBytes = data.sigBytes;
            var blockSize = this.blockSize;
            var blockSizeBytes = blockSize * 4;
            var nBlocksReady = dataSigBytes / blockSizeBytes;
            if (doFlush) {
              nBlocksReady = Math2.ceil(nBlocksReady);
            } else {
              nBlocksReady = Math2.max((nBlocksReady | 0) - this._minBufferSize, 0);
            }
            var nWordsReady = nBlocksReady * blockSize;
            var nBytesReady = Math2.min(nWordsReady * 4, dataSigBytes);
            if (nWordsReady) {
              for (var offset = 0; offset < nWordsReady; offset += blockSize) {
                this._doProcessBlock(dataWords, offset);
              }
              processedWords = dataWords.splice(0, nWordsReady);
              data.sigBytes -= nBytesReady;
            }
            return new WordArray.init(processedWords, nBytesReady);
          },
          /**
           * Creates a copy of this object.
           *
           * @return {Object} The clone.
           *
           * @example
           *
           *     var clone = bufferedBlockAlgorithm.clone();
           */
          clone: function() {
            var clone = Base.clone.call(this);
            clone._data = this._data.clone();
            return clone;
          },
          _minBufferSize: 0
        });
        var Hasher2 = C_lib.Hasher = BufferedBlockAlgorithm.extend({
          /**
           * Configuration options.
           */
          cfg: Base.extend(),
          /**
           * Initializes a newly created hasher.
           *
           * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
           *
           * @example
           *
           *     var hasher = CryptoJS.algo.SHA256.create();
           */
          init: function(cfg) {
            this.cfg = this.cfg.extend(cfg);
            this.reset();
          },
          /**
           * Resets this hasher to its initial state.
           *
           * @example
           *
           *     hasher.reset();
           */
          reset: function() {
            BufferedBlockAlgorithm.reset.call(this);
            this._doReset();
          },
          /**
           * Updates this hasher with a message.
           *
           * @param {WordArray|string} messageUpdate The message to append.
           *
           * @return {Hasher} This hasher.
           *
           * @example
           *
           *     hasher.update('message');
           *     hasher.update(wordArray);
           */
          update: function(messageUpdate) {
            this._append(messageUpdate);
            this._process();
            return this;
          },
          /**
           * Finalizes the hash computation.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} messageUpdate (Optional) A final message update.
           *
           * @return {WordArray} The hash.
           *
           * @example
           *
           *     var hash = hasher.finalize();
           *     var hash = hasher.finalize('message');
           *     var hash = hasher.finalize(wordArray);
           */
          finalize: function(messageUpdate) {
            if (messageUpdate) {
              this._append(messageUpdate);
            }
            var hash = this._doFinalize();
            return hash;
          },
          blockSize: 512 / 32,
          /**
           * Creates a shortcut function to a hasher's object interface.
           *
           * @param {Hasher} hasher The hasher to create a helper for.
           *
           * @return {Function} The shortcut function.
           *
           * @static
           *
           * @example
           *
           *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
           */
          _createHelper: function(hasher) {
            return function(message, cfg) {
              return new hasher.init(cfg).finalize(message);
            };
          },
          /**
           * Creates a shortcut function to the HMAC's object interface.
           *
           * @param {Hasher} hasher The hasher to use in this HMAC helper.
           *
           * @return {Function} The shortcut function.
           *
           * @static
           *
           * @example
           *
           *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
           */
          _createHmacHelper: function(hasher) {
            return function(message, key) {
              return new C_algo.HMAC.init(hasher, key).finalize(message);
            };
          }
        });
        var C_algo = C.algo = {};
        return C;
      }(Math);
      return CryptoJS;
    });
  }
});

// ../frugal/node_modules/crypto-js/enc-hex.js
var require_enc_hex = __commonJS({
  "../frugal/node_modules/crypto-js/enc-hex.js"(exports2, module2) {
    (function(root, factory) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      return CryptoJS.enc.Hex;
    });
  }
});

// ../frugal/node_modules/crypto-js/sha1.js
var require_sha1 = __commonJS({
  "../frugal/node_modules/crypto-js/sha1.js"(exports2, module2) {
    (function(root, factory) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher2 = C_lib.Hasher;
        var C_algo = C.algo;
        var W = [];
        var SHA1 = C_algo.SHA1 = Hasher2.extend({
          _doReset: function() {
            this._hash = new WordArray.init([
              1732584193,
              4023233417,
              2562383102,
              271733878,
              3285377520
            ]);
          },
          _doProcessBlock: function(M, offset) {
            var H = this._hash.words;
            var a = H[0];
            var b = H[1];
            var c = H[2];
            var d = H[3];
            var e = H[4];
            for (var i = 0; i < 80; i++) {
              if (i < 16) {
                W[i] = M[offset + i] | 0;
              } else {
                var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
                W[i] = n << 1 | n >>> 31;
              }
              var t = (a << 5 | a >>> 27) + e + W[i];
              if (i < 20) {
                t += (b & c | ~b & d) + 1518500249;
              } else if (i < 40) {
                t += (b ^ c ^ d) + 1859775393;
              } else if (i < 60) {
                t += (b & c | b & d | c & d) - 1894007588;
              } else {
                t += (b ^ c ^ d) - 899497514;
              }
              e = d;
              d = c;
              c = b << 30 | b >>> 2;
              b = a;
              a = t;
            }
            H[0] = H[0] + a | 0;
            H[1] = H[1] + b | 0;
            H[2] = H[2] + c | 0;
            H[3] = H[3] + d | 0;
            H[4] = H[4] + e | 0;
          },
          _doFinalize: function() {
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8;
            dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(nBitsTotal / 4294967296);
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
            data.sigBytes = dataWords.length * 4;
            this._process();
            return this._hash;
          },
          clone: function() {
            var clone = Hasher2.clone.call(this);
            clone._hash = this._hash.clone();
            return clone;
          }
        });
        C.SHA1 = Hasher2._createHelper(SHA1);
        C.HmacSHA1 = Hasher2._createHmacHelper(SHA1);
      })();
      return CryptoJS.SHA1;
    });
  }
});

// ../frugal/node_modules/@upstash/redis/chunk-SMBYCQIJ.js
var require_chunk_SMBYCQIJ = __commonJS({
  "../frugal/node_modules/@upstash/redis/chunk-SMBYCQIJ.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _nullishCoalesce(lhs, rhsFn) {
      if (lhs != null) {
        return lhs;
      } else {
        return rhsFn();
      }
    }
    function _optionalChain(ops) {
      let lastAccessLHS = void 0;
      let value = ops[0];
      let i = 1;
      while (i < ops.length) {
        const op = ops[i];
        const fn2 = ops[i + 1];
        i += 2;
        if ((op === "optionalAccess" || op === "optionalCall") && value == null) {
          return void 0;
        }
        if (op === "access" || op === "optionalAccess") {
          lastAccessLHS = value;
          value = fn2(value);
        } else if (op === "call" || op === "optionalCall") {
          value = fn2((...args) => value.call(lastAccessLHS, ...args));
          lastAccessLHS = void 0;
        }
      }
      return value;
    }
    var _class;
    var _class2;
    var c = class extends Error {
      constructor(n) {
        super(n), this.name = "UpstashError";
      }
    };
    var ce = class {
      constructor(n) {
        this.options = { backend: _optionalChain([n, "access", (_2) => _2.options, "optionalAccess", (_3) => _3.backend]), agent: n.agent, responseEncoding: _nullishCoalesce(n.responseEncoding, () => "base64"), cache: n.cache }, this.baseUrl = n.baseUrl.replace(/\/$/, ""), this.headers = { "Content-Type": "application/json", ...n.headers }, this.options.responseEncoding === "base64" && (this.headers["Upstash-Encoding"] = "base64"), typeof _optionalChain([n, "optionalAccess", (_4) => _4.retry]) == "boolean" && _optionalChain([n, "optionalAccess", (_5) => _5.retry]) === false ? this.retry = { attempts: 1, backoff: () => 0 } : this.retry = { attempts: _nullishCoalesce(_optionalChain([n, "optionalAccess", (_6) => _6.retry, "optionalAccess", (_7) => _7.retries]), () => 5), backoff: _nullishCoalesce(_optionalChain([n, "optionalAccess", (_8) => _8.retry, "optionalAccess", (_9) => _9.backoff]), () => (t) => Math.exp(t) * 50) };
      }
      mergeTelemetry(n) {
        function t(o, m, r) {
          return r && (o[m] ? o[m] = [o[m], r].join(",") : o[m] = r), o;
        }
        this.headers = t(this.headers, "Upstash-Telemetry-Runtime", n.runtime), this.headers = t(this.headers, "Upstash-Telemetry-Platform", n.platform), this.headers = t(this.headers, "Upstash-Telemetry-Sdk", n.sdk);
      }
      async request(n) {
        let t = { cache: this.options.cache, method: "POST", headers: this.headers, body: JSON.stringify(n.body), keepalive: true, agent: _optionalChain([this, "access", (_10) => _10.options, "optionalAccess", (_11) => _11.agent]), backend: _optionalChain([this, "access", (_12) => _12.options, "optionalAccess", (_13) => _13.backend]) }, o = null, m = null;
        for (let a = 0; a <= this.retry.attempts; a++)
          try {
            o = await fetch([this.baseUrl, ..._nullishCoalesce(n.path, () => [])].join("/"), t);
            break;
          } catch (i) {
            m = i, await new Promise((p) => setTimeout(p, this.retry.backoff(a)));
          }
        if (!o)
          throw _nullishCoalesce(m, () => new Error("Exhausted all retries"));
        let r = await o.json();
        if (!o.ok)
          throw new c(`${r.error}, command was: ${JSON.stringify(n.body)}`);
        return _optionalChain([this, "access", (_14) => _14.options, "optionalAccess", (_15) => _15.responseEncoding]) === "base64" ? Array.isArray(r) ? r.map(({ result: i, error: p }) => ({ result: pe(i), error: p })) : { result: pe(r.result), error: r.error } : r;
      }
    };
    function ue(s) {
      let n = "";
      try {
        let t = atob(s), o = t.length, m = new Uint8Array(o);
        for (let r = 0; r < o; r++)
          m[r] = t.charCodeAt(r);
        n = new TextDecoder().decode(m);
      } catch (e2) {
        n = s;
      }
      return n;
    }
    function pe(s) {
      let n;
      switch (typeof s) {
        case "undefined":
          return s;
        case "number": {
          n = s;
          break;
        }
        case "object": {
          Array.isArray(s) ? n = s.map((t) => typeof t == "string" ? ue(t) : Array.isArray(t) ? t.map(pe) : t) : n = null;
          break;
        }
        case "string": {
          n = s === "OK" ? "OK" : ue(s);
          break;
        }
        default:
          break;
      }
      return n;
    }
    function he(s) {
      let n = Array.isArray(s) ? s.map((t) => {
        try {
          return he(t);
        } catch (e3) {
          return t;
        }
      }) : JSON.parse(s);
      return typeof n == "number" && n.toString() !== s ? s : n;
    }
    function Ce(s) {
      try {
        return he(s);
      } catch (e4) {
        return s;
      }
    }
    var ge = (s) => {
      switch (typeof s) {
        case "string":
        case "number":
        case "boolean":
          return s;
        default:
          return JSON.stringify(s);
      }
    };
    var e = class {
      constructor(n, t) {
        this.serialize = ge, this.deserialize = typeof _optionalChain([t, "optionalAccess", (_16) => _16.automaticDeserialization]) > "u" || t.automaticDeserialization ? _nullishCoalesce(_optionalChain([t, "optionalAccess", (_17) => _17.deserialize]), () => Ce) : (o) => o, this.command = n.map((o) => this.serialize(o));
      }
      async exec(n) {
        let { result: t, error: o } = await n.request({ body: this.command });
        if (o)
          throw new c(o);
        if (typeof t > "u")
          throw new Error("Request did not return a result");
        return this.deserialize(t);
      }
    };
    var C = class extends e {
      constructor(n, t) {
        super(["append", ...n], t);
      }
    };
    var l = class extends e {
      constructor([n, t, o], m) {
        let r = ["bitcount", n];
        typeof t == "number" && r.push(t), typeof o == "number" && r.push(o), super(r, m);
      }
    };
    var g = class extends e {
      constructor(n, t) {
        super(["bitop", ...n], t);
      }
    };
    var x = class extends e {
      constructor(n, t) {
        super(["bitpos", ...n], t);
      }
    };
    var f = class extends e {
      constructor([n, t, o], m) {
        super(["COPY", n, t, ..._optionalChain([o, "optionalAccess", (_18) => _18.replace]) ? ["REPLACE"] : []], { ...m, deserialize(r) {
          return r > 0 ? "COPIED" : "NOT_COPIED";
        } });
      }
    };
    var y = class extends e {
      constructor(n) {
        super(["dbsize"], n);
      }
    };
    var b = class extends e {
      constructor(n, t) {
        super(["decr", ...n], t);
      }
    };
    var O = class extends e {
      constructor(n, t) {
        super(["decrby", ...n], t);
      }
    };
    var T = class extends e {
      constructor(n, t) {
        super(["del", ...n], t);
      }
    };
    var w = class extends e {
      constructor(n, t) {
        super(["echo", ...n], t);
      }
    };
    var D = class extends e {
      constructor([n, t, o], m) {
        super(["eval", n, t.length, ...t, ..._nullishCoalesce(o, () => [])], m);
      }
    };
    var A = class extends e {
      constructor([n, t, o], m) {
        super(["evalsha", n, t.length, ...t, ..._nullishCoalesce(o, () => [])], m);
      }
    };
    var k = class extends e {
      constructor(n, t) {
        super(["exists", ...n], t);
      }
    };
    var S = class extends e {
      constructor(n, t) {
        super(["expire", ...n], t);
      }
    };
    var R = class extends e {
      constructor(n, t) {
        super(["expireat", ...n], t);
      }
    };
    var M = class extends e {
      constructor(n, t) {
        let o = ["flushall"];
        n && n.length > 0 && n[0].async && o.push("async"), super(o, t);
      }
    };
    var v = class extends e {
      constructor([n], t) {
        let o = ["flushdb"];
        _optionalChain([n, "optionalAccess", (_19) => _19.async]) && o.push("async"), super(o, t);
      }
    };
    var E = class extends e {
      constructor([n, t, ...o], m) {
        let r = ["geoadd", n];
        "nx" in t && t.nx ? r.push("nx") : "xx" in t && t.xx && r.push("xx"), "ch" in t && t.ch && r.push("ch"), "latitude" in t && t.latitude && r.push(t.longitude, t.latitude, t.member), r.push(...o.flatMap(({ latitude: a, longitude: i, member: p }) => [i, a, p])), super(r, m);
      }
    };
    var P = class extends e {
      constructor([n, t, o, m = "M"], r) {
        super(["GEODIST", n, t, o, m], r);
      }
    };
    var z = class extends e {
      constructor(n, t) {
        let [o] = n, m = Array.isArray(n[1]) ? n[1] : n.slice(1);
        super(["GEOPOS", o, ...m], { deserialize: (r) => xe(r), ...t });
      }
    };
    function xe(s) {
      let n = [];
      for (let t of s)
        !_optionalChain([t, "optionalAccess", (_20) => _20[0]]) || !_optionalChain([t, "optionalAccess", (_21) => _21[1]]) || n.push({ lng: parseFloat(t[0]), lat: parseFloat(t[1]) });
      return n;
    }
    var J = class extends e {
      constructor(n, t) {
        let [o] = n, m = Array.isArray(n[1]) ? n[1] : n.slice(1);
        super(["GEOHASH", o, ...m], t);
      }
    };
    var K = class extends e {
      constructor([n, t, o, m, r], a) {
        let i = ["GEOSEARCH", n];
        (t.type === "FROMMEMBER" || t.type === "frommember") && i.push(t.type, t.member), (t.type === "FROMLONLAT" || t.type === "fromlonlat") && i.push(t.type, t.coordinate.lon, t.coordinate.lat), (o.type === "BYRADIUS" || o.type === "byradius") && i.push(o.type, o.radius, o.radiusType), (o.type === "BYBOX" || o.type === "bybox") && i.push(o.type, o.rect.width, o.rect.height, o.rectType), i.push(m), _optionalChain([r, "optionalAccess", (_22) => _22.count]) && i.push(r.count.limit, ...r.count.any ? ["ANY"] : []);
        let p = (de) => !_optionalChain([r, "optionalAccess", (_23) => _23.withCoord]) && !_optionalChain([r, "optionalAccess", (_24) => _24.withDist]) && !_optionalChain([r, "optionalAccess", (_25) => _25.withHash]) ? de.map((d) => {
          try {
            return { member: JSON.parse(d) };
          } catch (e5) {
            return { member: d };
          }
        }) : de.map((d) => {
          let me = 1, h = {};
          try {
            h.member = JSON.parse(d[0]);
          } catch (e6) {
            h.member = d[0];
          }
          return r.withDist && (h.dist = parseFloat(d[me++])), r.withHash && (h.hash = d[me++].toString()), r.withCoord && (h.coord = { long: parseFloat(d[me][0]), lat: parseFloat(d[me][1]) }), h;
        });
        super([...i, ..._optionalChain([r, "optionalAccess", (_26) => _26.withCoord]) ? ["WITHCOORD"] : [], ..._optionalChain([r, "optionalAccess", (_27) => _27.withDist]) ? ["WITHDIST"] : [], ..._optionalChain([r, "optionalAccess", (_28) => _28.withHash]) ? ["WITHHASH"] : []], { ...a, deserialize: p });
      }
    };
    var I = class extends e {
      constructor([n, t, o, m, r, a], i) {
        let p = ["GEOSEARCHSTORE", n, t];
        (o.type === "FROMMEMBER" || o.type === "frommember") && p.push(o.type, o.member), (o.type === "FROMLONLAT" || o.type === "fromlonlat") && p.push(o.type, o.coordinate.lon, o.coordinate.lat), (m.type === "BYRADIUS" || m.type === "byradius") && p.push(m.type, m.radius, m.radiusType), (m.type === "BYBOX" || m.type === "bybox") && p.push(m.type, m.rect.width, m.rect.height, m.rectType), p.push(r), _optionalChain([a, "optionalAccess", (_29) => _29.count]) && p.push(a.count.limit, ...a.count.any ? ["ANY"] : []), super([...p, ..._optionalChain([a, "optionalAccess", (_30) => _30.storeDist]) ? ["STOREDIST"] : []], i);
      }
    };
    var L = class extends e {
      constructor(n, t) {
        super(["get", ...n], t);
      }
    };
    var Z = class extends e {
      constructor(n, t) {
        super(["getbit", ...n], t);
      }
    };
    var N = class extends e {
      constructor(n, t) {
        super(["getdel", ...n], t);
      }
    };
    var G = class extends e {
      constructor(n, t) {
        super(["getrange", ...n], t);
      }
    };
    var B = class extends e {
      constructor(n, t) {
        super(["getset", ...n], t);
      }
    };
    var U = class extends e {
      constructor(n, t) {
        super(["hdel", ...n], t);
      }
    };
    var H = class extends e {
      constructor(n, t) {
        super(["hexists", ...n], t);
      }
    };
    var F = class extends e {
      constructor(n, t) {
        super(["hget", ...n], t);
      }
    };
    function fe(s) {
      if (s.length === 0)
        return null;
      let n = {};
      for (; s.length >= 2; ) {
        let t = s.shift(), o = s.shift();
        try {
          !Number.isNaN(Number(o)) && !Number.isSafeInteger(o) ? n[t] = o : n[t] = JSON.parse(o);
        } catch (e7) {
          n[t] = o;
        }
      }
      return n;
    }
    var q = class extends e {
      constructor(n, t) {
        super(["hgetall", ...n], { deserialize: (o) => fe(o), ...t });
      }
    };
    var $ = class extends e {
      constructor(n, t) {
        super(["hincrby", ...n], t);
      }
    };
    var X = class extends e {
      constructor(n, t) {
        super(["hincrbyfloat", ...n], t);
      }
    };
    var j = class extends e {
      constructor([n], t) {
        super(["hkeys", n], t);
      }
    };
    var Y = class extends e {
      constructor(n, t) {
        super(["hlen", ...n], t);
      }
    };
    function ye(s, n) {
      if (n.length === 0 || n.every((o) => o === null))
        return null;
      let t = {};
      for (let o = 0; o < s.length; o++)
        try {
          t[s[o]] = JSON.parse(n[o]);
        } catch (e8) {
          t[s[o]] = n[o];
        }
      return t;
    }
    var W = class extends e {
      constructor([n, ...t], o) {
        super(["hmget", n, ...t], { deserialize: (m) => ye(t, m), ...o });
      }
    };
    var V = class extends e {
      constructor([n, t], o) {
        super(["hmset", n, ...Object.entries(t).flatMap(([m, r]) => [m, r])], o);
      }
    };
    function be(s) {
      if (s.length === 0)
        return null;
      let n = {};
      for (; s.length >= 2; ) {
        let t = s.shift(), o = s.shift();
        try {
          n[t] = JSON.parse(o);
        } catch (e9) {
          n[t] = o;
        }
      }
      return n;
    }
    var _ = class extends e {
      constructor(n, t) {
        let o = ["hrandfield", n[0]];
        typeof n[1] == "number" && o.push(n[1]), n[2] && o.push("WITHVALUES"), super(o, { deserialize: n[2] ? (m) => be(m) : _optionalChain([t, "optionalAccess", (_31) => _31.deserialize]), ...t });
      }
    };
    var Q = class extends e {
      constructor([n, t, o], m) {
        let r = ["hscan", n, t];
        _optionalChain([o, "optionalAccess", (_32) => _32.match]) && r.push("match", o.match), typeof _optionalChain([o, "optionalAccess", (_33) => _33.count]) == "number" && r.push("count", o.count), super(r, m);
      }
    };
    var nn = class extends e {
      constructor([n, t], o) {
        super(["hset", n, ...Object.entries(t).flatMap(([m, r]) => [m, r])], o);
      }
    };
    var tn = class extends e {
      constructor(n, t) {
        super(["hsetnx", ...n], t);
      }
    };
    var en = class extends e {
      constructor(n, t) {
        super(["hstrlen", ...n], t);
      }
    };
    var on = class extends e {
      constructor(n, t) {
        super(["hvals", ...n], t);
      }
    };
    var sn = class extends e {
      constructor(n, t) {
        super(["incr", ...n], t);
      }
    };
    var mn = class extends e {
      constructor(n, t) {
        super(["incrby", ...n], t);
      }
    };
    var rn = class extends e {
      constructor(n, t) {
        super(["incrbyfloat", ...n], t);
      }
    };
    var an = class extends e {
      constructor(n, t) {
        super(["JSON.ARRAPPEND", ...n], t);
      }
    };
    var pn = class extends e {
      constructor(n, t) {
        super(["JSON.ARRINDEX", ...n], t);
      }
    };
    var dn = class extends e {
      constructor(n, t) {
        super(["JSON.ARRINSERT", ...n], t);
      }
    };
    var cn = class extends e {
      constructor(n, t) {
        super(["JSON.ARRLEN", n[0], _nullishCoalesce(n[1], () => "$")], t);
      }
    };
    var un = class extends e {
      constructor(n, t) {
        super(["JSON.ARRPOP", ...n], t);
      }
    };
    var hn = class extends e {
      constructor(n, t) {
        let o = _nullishCoalesce(n[1], () => "$"), m = _nullishCoalesce(n[2], () => 0), r = _nullishCoalesce(n[3], () => 0);
        super(["JSON.ARRTRIM", n[0], o, m, r], t);
      }
    };
    var Cn = class extends e {
      constructor(n, t) {
        super(["JSON.CLEAR", ...n], t);
      }
    };
    var ln = class extends e {
      constructor(n, t) {
        super(["JSON.DEL", ...n], t);
      }
    };
    var gn = class extends e {
      constructor(n, t) {
        super(["JSON.FORGET", ...n], t);
      }
    };
    var xn = class extends e {
      constructor(n, t) {
        let o = ["JSON.GET"];
        typeof n[1] == "string" ? o.push(...n) : (o.push(n[0]), n[1] && (n[1].indent && o.push("INDENT", n[1].indent), n[1].newline && o.push("NEWLINE", n[1].newline), n[1].space && o.push("SPACE", n[1].space)), o.push(...n.slice(2))), super(o, t);
      }
    };
    var fn = class extends e {
      constructor(n, t) {
        super(["JSON.MGET", ...n[0], n[1]], t);
      }
    };
    var yn = class extends e {
      constructor(n, t) {
        super(["JSON.NUMINCRBY", ...n], t);
      }
    };
    var bn = class extends e {
      constructor(n, t) {
        super(["JSON.NUMMULTBY", ...n], t);
      }
    };
    var On = class extends e {
      constructor(n, t) {
        super(["JSON.OBJKEYS", ...n], t);
      }
    };
    var Tn = class extends e {
      constructor(n, t) {
        super(["JSON.OBJLEN", ...n], t);
      }
    };
    var wn = class extends e {
      constructor(n, t) {
        super(["JSON.RESP", ...n], t);
      }
    };
    var Dn = class extends e {
      constructor(n, t) {
        let o = ["JSON.SET", n[0], n[1], n[2]];
        n[3] && (n[3].nx ? o.push("NX") : n[3].xx && o.push("XX")), super(o, t);
      }
    };
    var An = class extends e {
      constructor(n, t) {
        super(["JSON.STRAPPEND", ...n], t);
      }
    };
    var kn = class extends e {
      constructor(n, t) {
        super(["JSON.STRLEN", ...n], t);
      }
    };
    var Sn = class extends e {
      constructor(n, t) {
        super(["JSON.TOGGLE", ...n], t);
      }
    };
    var Rn = class extends e {
      constructor(n, t) {
        super(["JSON.TYPE", ...n], t);
      }
    };
    var Mn = class extends e {
      constructor(n, t) {
        super(["keys", ...n], t);
      }
    };
    var vn = class extends e {
      constructor(n, t) {
        super(["lindex", ...n], t);
      }
    };
    var En = class extends e {
      constructor(n, t) {
        super(["linsert", ...n], t);
      }
    };
    var Pn = class extends e {
      constructor(n, t) {
        super(["llen", ...n], t);
      }
    };
    var zn = class extends e {
      constructor(n, t) {
        super(["lmove", ...n], t);
      }
    };
    var Jn = class extends e {
      constructor(n, t) {
        super(["lpop", ...n], t);
      }
    };
    var Kn = class extends e {
      constructor(n, t) {
        let o = ["lpos", n[0], n[1]];
        typeof _optionalChain([n, "access", (_34) => _34[2], "optionalAccess", (_35) => _35.rank]) == "number" && o.push("rank", n[2].rank), typeof _optionalChain([n, "access", (_36) => _36[2], "optionalAccess", (_37) => _37.count]) == "number" && o.push("count", n[2].count), typeof _optionalChain([n, "access", (_38) => _38[2], "optionalAccess", (_39) => _39.maxLen]) == "number" && o.push("maxLen", n[2].maxLen), super(o, t);
      }
    };
    var In = class extends e {
      constructor(n, t) {
        super(["lpush", ...n], t);
      }
    };
    var Ln = class extends e {
      constructor(n, t) {
        super(["lpushx", ...n], t);
      }
    };
    var Zn = class extends e {
      constructor(n, t) {
        super(["lrange", ...n], t);
      }
    };
    var Nn = class extends e {
      constructor(n, t) {
        super(["lrem", ...n], t);
      }
    };
    var Gn = class extends e {
      constructor(n, t) {
        super(["lset", ...n], t);
      }
    };
    var Bn = class extends e {
      constructor(n, t) {
        super(["ltrim", ...n], t);
      }
    };
    var Un = class extends e {
      constructor(n, t) {
        let o = Array.isArray(n[0]) ? n[0] : n;
        super(["mget", ...o], t);
      }
    };
    var Hn = class extends e {
      constructor([n], t) {
        super(["mset", ...Object.entries(n).flatMap(([o, m]) => [o, m])], t);
      }
    };
    var Fn = class extends e {
      constructor([n], t) {
        super(["msetnx", ...Object.entries(n).flatMap((o) => o)], t);
      }
    };
    var qn = class extends e {
      constructor(n, t) {
        super(["persist", ...n], t);
      }
    };
    var $n = class extends e {
      constructor(n, t) {
        super(["pexpire", ...n], t);
      }
    };
    var Xn = class extends e {
      constructor(n, t) {
        super(["pexpireat", ...n], t);
      }
    };
    var jn = class extends e {
      constructor(n, t) {
        super(["pfadd", ...n], t);
      }
    };
    var Yn = class extends e {
      constructor(n, t) {
        super(["pfcount", ...n], t);
      }
    };
    var Wn = class extends e {
      constructor(n, t) {
        super(["pfmerge", ...n], t);
      }
    };
    var Vn = class extends e {
      constructor(n, t) {
        let o = ["ping"];
        typeof n < "u" && typeof n[0] < "u" && o.push(n[0]), super(o, t);
      }
    };
    var _n = class extends e {
      constructor(n, t) {
        super(["psetex", ...n], t);
      }
    };
    var Qn = class extends e {
      constructor(n, t) {
        super(["pttl", ...n], t);
      }
    };
    var nt = class extends e {
      constructor(n, t) {
        super(["publish", ...n], t);
      }
    };
    var tt = class extends e {
      constructor(n) {
        super(["randomkey"], n);
      }
    };
    var et = class extends e {
      constructor(n, t) {
        super(["rename", ...n], t);
      }
    };
    var ot = class extends e {
      constructor(n, t) {
        super(["renamenx", ...n], t);
      }
    };
    var st = class extends e {
      constructor(n, t) {
        super(["rpop", ...n], t);
      }
    };
    var mt = class extends e {
      constructor(n, t) {
        super(["rpush", ...n], t);
      }
    };
    var rt = class extends e {
      constructor(n, t) {
        super(["rpushx", ...n], t);
      }
    };
    var at = class extends e {
      constructor(n, t) {
        super(["sadd", ...n], t);
      }
    };
    var it = class extends e {
      constructor([n, t], o) {
        let m = ["scan", n];
        _optionalChain([t, "optionalAccess", (_40) => _40.match]) && m.push("match", t.match), typeof _optionalChain([t, "optionalAccess", (_41) => _41.count]) == "number" && m.push("count", t.count), _optionalChain([t, "optionalAccess", (_42) => _42.type]) && t.type.length > 0 && m.push("type", t.type), super(m, o);
      }
    };
    var pt = class extends e {
      constructor(n, t) {
        super(["scard", ...n], t);
      }
    };
    var dt = class extends e {
      constructor(n, t) {
        super(["script", "exists", ...n], { deserialize: (o) => o, ...t });
      }
    };
    var ct = class extends e {
      constructor([n], t) {
        let o = ["script", "flush"];
        _optionalChain([n, "optionalAccess", (_43) => _43.sync]) ? o.push("sync") : _optionalChain([n, "optionalAccess", (_44) => _44.async]) && o.push("async"), super(o, t);
      }
    };
    var ut = class extends e {
      constructor(n, t) {
        super(["script", "load", ...n], t);
      }
    };
    var ht = class extends e {
      constructor(n, t) {
        super(["sdiff", ...n], t);
      }
    };
    var Ct = class extends e {
      constructor(n, t) {
        super(["sdiffstore", ...n], t);
      }
    };
    var lt = class extends e {
      constructor([n, t, o], m) {
        let r = ["set", n, t];
        o && ("nx" in o && o.nx ? r.push("nx") : "xx" in o && o.xx && r.push("xx"), "get" in o && o.get && r.push("get"), "ex" in o && typeof o.ex == "number" ? r.push("ex", o.ex) : "px" in o && typeof o.px == "number" ? r.push("px", o.px) : "exat" in o && typeof o.exat == "number" ? r.push("exat", o.exat) : "pxat" in o && typeof o.pxat == "number" ? r.push("pxat", o.pxat) : "keepTtl" in o && o.keepTtl && r.push("keepTtl")), super(r, m);
      }
    };
    var gt = class extends e {
      constructor(n, t) {
        super(["setbit", ...n], t);
      }
    };
    var xt = class extends e {
      constructor(n, t) {
        super(["setex", ...n], t);
      }
    };
    var ft = class extends e {
      constructor(n, t) {
        super(["setnx", ...n], t);
      }
    };
    var yt = class extends e {
      constructor(n, t) {
        super(["setrange", ...n], t);
      }
    };
    var bt = class extends e {
      constructor(n, t) {
        super(["sinter", ...n], t);
      }
    };
    var Ot = class extends e {
      constructor(n, t) {
        super(["sinterstore", ...n], t);
      }
    };
    var Tt = class extends e {
      constructor(n, t) {
        super(["sismember", ...n], t);
      }
    };
    var wt = class extends e {
      constructor(n, t) {
        super(["smembers", ...n], t);
      }
    };
    var Dt = class extends e {
      constructor(n, t) {
        super(["smismember", n[0], ...n[1]], t);
      }
    };
    var At = class extends e {
      constructor(n, t) {
        super(["smove", ...n], t);
      }
    };
    var kt = class extends e {
      constructor([n, t], o) {
        let m = ["spop", n];
        typeof t == "number" && m.push(t), super(m, o);
      }
    };
    var St = class extends e {
      constructor([n, t], o) {
        let m = ["srandmember", n];
        typeof t == "number" && m.push(t), super(m, o);
      }
    };
    var Rt = class extends e {
      constructor(n, t) {
        super(["srem", ...n], t);
      }
    };
    var Mt = class extends e {
      constructor([n, t, o], m) {
        let r = ["sscan", n, t];
        _optionalChain([o, "optionalAccess", (_45) => _45.match]) && r.push("match", o.match), typeof _optionalChain([o, "optionalAccess", (_46) => _46.count]) == "number" && r.push("count", o.count), super(r, m);
      }
    };
    var vt = class extends e {
      constructor(n, t) {
        super(["strlen", ...n], t);
      }
    };
    var Et = class extends e {
      constructor(n, t) {
        super(["sunion", ...n], t);
      }
    };
    var Pt = class extends e {
      constructor(n, t) {
        super(["sunionstore", ...n], t);
      }
    };
    var zt = class extends e {
      constructor(n) {
        super(["time"], n);
      }
    };
    var Jt = class extends e {
      constructor(n, t) {
        super(["touch", ...n], t);
      }
    };
    var Kt = class extends e {
      constructor(n, t) {
        super(["ttl", ...n], t);
      }
    };
    var It = class extends e {
      constructor(n, t) {
        super(["type", ...n], t);
      }
    };
    var Lt = class extends e {
      constructor(n, t) {
        super(["unlink", ...n], t);
      }
    };
    var re = class extends e {
      constructor([n, t, o, m], r) {
        let a = ["XADD", n];
        m && (m.nomkStream && a.push("NOMKSTREAM"), m.trim && (a.push(m.trim.type, m.trim.comparison, m.trim.threshold), typeof m.trim.limit < "u" && a.push("LIMIT", m.trim.limit))), a.push(t);
        for (let [i, p] of Object.entries(o))
          a.push(i, p);
        super(a, r);
      }
    };
    function Oe(s) {
      let n = {};
      for (let t of s)
        for (; t.length >= 2; ) {
          let o = t.shift(), m = t.shift();
          for ((o in n) || (n[o] = {}); m.length >= 2; ) {
            let r = m.shift(), a = m.shift();
            try {
              n[o][r] = JSON.parse(a);
            } catch (e10) {
              n[o][r] = a;
            }
          }
        }
      return n;
    }
    var ae = class extends e {
      constructor([n, t, o, m], r) {
        let a = ["XRANGE", n, t, o];
        typeof m == "number" && a.push("COUNT", m), super(a, { deserialize: (i) => Oe(i), ...r });
      }
    };
    var u = class extends e {
      constructor([n, t, ...o], m) {
        let r = ["zadd", n];
        "nx" in t && t.nx ? r.push("nx") : "xx" in t && t.xx && r.push("xx"), "ch" in t && t.ch && r.push("ch"), "incr" in t && t.incr && r.push("incr"), "score" in t && "member" in t && r.push(t.score, t.member), r.push(...o.flatMap(({ score: a, member: i }) => [a, i])), super(r, m);
      }
    };
    var Zt = class extends e {
      constructor(n, t) {
        super(["zcard", ...n], t);
      }
    };
    var Nt = class extends e {
      constructor(n, t) {
        super(["zcount", ...n], t);
      }
    };
    var Gt = class extends e {
      constructor(n, t) {
        super(["zincrby", ...n], t);
      }
    };
    var Bt = class extends e {
      constructor([n, t, o, m], r) {
        let a = ["zinterstore", n, t];
        Array.isArray(o) ? a.push(...o) : a.push(o), m && ("weights" in m && m.weights ? a.push("weights", ...m.weights) : "weight" in m && typeof m.weight == "number" && a.push("weights", m.weight), "aggregate" in m && a.push("aggregate", m.aggregate)), super(a, r);
      }
    };
    var Ut = class extends e {
      constructor(n, t) {
        super(["zlexcount", ...n], t);
      }
    };
    var Ht = class extends e {
      constructor([n, t], o) {
        let m = ["zpopmax", n];
        typeof t == "number" && m.push(t), super(m, o);
      }
    };
    var Ft = class extends e {
      constructor([n, t], o) {
        let m = ["zpopmin", n];
        typeof t == "number" && m.push(t), super(m, o);
      }
    };
    var qt = class extends e {
      constructor([n, t, o, m], r) {
        let a = ["zrange", n, t, o];
        _optionalChain([m, "optionalAccess", (_47) => _47.byScore]) && a.push("byscore"), _optionalChain([m, "optionalAccess", (_48) => _48.byLex]) && a.push("bylex"), _optionalChain([m, "optionalAccess", (_49) => _49.rev]) && a.push("rev"), typeof _optionalChain([m, "optionalAccess", (_50) => _50.count]) < "u" && typeof _optionalChain([m, "optionalAccess", (_51) => _51.offset]) < "u" && a.push("limit", m.offset, m.count), _optionalChain([m, "optionalAccess", (_52) => _52.withScores]) && a.push("withscores"), super(a, r);
      }
    };
    var $t = class extends e {
      constructor(n, t) {
        super(["zrank", ...n], t);
      }
    };
    var Xt = class extends e {
      constructor(n, t) {
        super(["zrem", ...n], t);
      }
    };
    var jt = class extends e {
      constructor(n, t) {
        super(["zremrangebylex", ...n], t);
      }
    };
    var Yt = class extends e {
      constructor(n, t) {
        super(["zremrangebyrank", ...n], t);
      }
    };
    var Wt = class extends e {
      constructor(n, t) {
        super(["zremrangebyscore", ...n], t);
      }
    };
    var Vt = class extends e {
      constructor(n, t) {
        super(["zrevrank", ...n], t);
      }
    };
    var _t = class extends e {
      constructor([n, t, o], m) {
        let r = ["zscan", n, t];
        _optionalChain([o, "optionalAccess", (_53) => _53.match]) && r.push("match", o.match), typeof _optionalChain([o, "optionalAccess", (_54) => _54.count]) == "number" && r.push("count", o.count), super(r, m);
      }
    };
    var Qt = class extends e {
      constructor(n, t) {
        super(["zscore", ...n], t);
      }
    };
    var ne = class extends e {
      constructor([n, t, o], m) {
        let r = ["zunion", n];
        Array.isArray(t) ? r.push(...t) : r.push(t), o && ("weights" in o && o.weights ? r.push("weights", ...o.weights) : "weight" in o && typeof o.weight == "number" && r.push("weights", o.weight), "aggregate" in o && r.push("aggregate", o.aggregate), _optionalChain([o, "optionalAccess", (_55) => _55.withScores]) && r.push("withscores")), super(r, m);
      }
    };
    var te = class extends e {
      constructor([n, t, o, m], r) {
        let a = ["zunionstore", n, t];
        Array.isArray(o) ? a.push(...o) : a.push(o), m && ("weights" in m && m.weights ? a.push("weights", ...m.weights) : "weight" in m && typeof m.weight == "number" && a.push("weights", m.weight), "aggregate" in m && a.push("aggregate", m.aggregate)), super(a, r);
      }
    };
    var ee = class extends e {
      constructor(n, t) {
        super(["zdiffstore", ...n], t);
      }
    };
    var oe = class extends e {
      constructor(n, t) {
        let [o, m] = n;
        super(["zmscore", o, ...m], t);
      }
    };
    var se = (_class = class {
      constructor(n) {
        ;
        _class.prototype.__init.call(this);
        _class.prototype.__init2.call(this);
        _class.prototype.__init3.call(this);
        _class.prototype.__init4.call(this);
        _class.prototype.__init5.call(this);
        _class.prototype.__init6.call(this);
        _class.prototype.__init7.call(this);
        _class.prototype.__init8.call(this);
        _class.prototype.__init9.call(this);
        _class.prototype.__init10.call(this);
        _class.prototype.__init11.call(this);
        _class.prototype.__init12.call(this);
        _class.prototype.__init13.call(this);
        _class.prototype.__init14.call(this);
        _class.prototype.__init15.call(this);
        _class.prototype.__init16.call(this);
        _class.prototype.__init17.call(this);
        _class.prototype.__init18.call(this);
        _class.prototype.__init19.call(this);
        _class.prototype.__init20.call(this);
        _class.prototype.__init21.call(this);
        _class.prototype.__init22.call(this);
        _class.prototype.__init23.call(this);
        _class.prototype.__init24.call(this);
        _class.prototype.__init25.call(this);
        _class.prototype.__init26.call(this);
        _class.prototype.__init27.call(this);
        _class.prototype.__init28.call(this);
        _class.prototype.__init29.call(this);
        _class.prototype.__init30.call(this);
        _class.prototype.__init31.call(this);
        _class.prototype.__init32.call(this);
        _class.prototype.__init33.call(this);
        _class.prototype.__init34.call(this);
        _class.prototype.__init35.call(this);
        _class.prototype.__init36.call(this);
        _class.prototype.__init37.call(this);
        _class.prototype.__init38.call(this);
        _class.prototype.__init39.call(this);
        _class.prototype.__init40.call(this);
        _class.prototype.__init41.call(this);
        _class.prototype.__init42.call(this);
        _class.prototype.__init43.call(this);
        _class.prototype.__init44.call(this);
        _class.prototype.__init45.call(this);
        _class.prototype.__init46.call(this);
        _class.prototype.__init47.call(this);
        _class.prototype.__init48.call(this);
        _class.prototype.__init49.call(this);
        _class.prototype.__init50.call(this);
        _class.prototype.__init51.call(this);
        _class.prototype.__init52.call(this);
        _class.prototype.__init53.call(this);
        _class.prototype.__init54.call(this);
        _class.prototype.__init55.call(this);
        _class.prototype.__init56.call(this);
        _class.prototype.__init57.call(this);
        _class.prototype.__init58.call(this);
        _class.prototype.__init59.call(this);
        _class.prototype.__init60.call(this);
        _class.prototype.__init61.call(this);
        _class.prototype.__init62.call(this);
        _class.prototype.__init63.call(this);
        _class.prototype.__init64.call(this);
        _class.prototype.__init65.call(this);
        _class.prototype.__init66.call(this);
        _class.prototype.__init67.call(this);
        _class.prototype.__init68.call(this);
        _class.prototype.__init69.call(this);
        _class.prototype.__init70.call(this);
        _class.prototype.__init71.call(this);
        _class.prototype.__init72.call(this);
        _class.prototype.__init73.call(this);
        _class.prototype.__init74.call(this);
        _class.prototype.__init75.call(this);
        _class.prototype.__init76.call(this);
        _class.prototype.__init77.call(this);
        _class.prototype.__init78.call(this);
        _class.prototype.__init79.call(this);
        _class.prototype.__init80.call(this);
        _class.prototype.__init81.call(this);
        _class.prototype.__init82.call(this);
        _class.prototype.__init83.call(this);
        _class.prototype.__init84.call(this);
        _class.prototype.__init85.call(this);
        _class.prototype.__init86.call(this);
        _class.prototype.__init87.call(this);
        _class.prototype.__init88.call(this);
        _class.prototype.__init89.call(this);
        _class.prototype.__init90.call(this);
        _class.prototype.__init91.call(this);
        _class.prototype.__init92.call(this);
        _class.prototype.__init93.call(this);
        _class.prototype.__init94.call(this);
        _class.prototype.__init95.call(this);
        _class.prototype.__init96.call(this);
        _class.prototype.__init97.call(this);
        _class.prototype.__init98.call(this);
        _class.prototype.__init99.call(this);
        _class.prototype.__init100.call(this);
        _class.prototype.__init101.call(this);
        _class.prototype.__init102.call(this);
        _class.prototype.__init103.call(this);
        _class.prototype.__init104.call(this);
        _class.prototype.__init105.call(this);
        _class.prototype.__init106.call(this);
        _class.prototype.__init107.call(this);
        _class.prototype.__init108.call(this);
        _class.prototype.__init109.call(this);
        _class.prototype.__init110.call(this);
        _class.prototype.__init111.call(this);
        _class.prototype.__init112.call(this);
        _class.prototype.__init113.call(this);
        _class.prototype.__init114.call(this);
        _class.prototype.__init115.call(this);
        _class.prototype.__init116.call(this);
        _class.prototype.__init117.call(this);
        _class.prototype.__init118.call(this);
        _class.prototype.__init119.call(this);
        _class.prototype.__init120.call(this);
        _class.prototype.__init121.call(this);
        _class.prototype.__init122.call(this);
        _class.prototype.__init123.call(this);
        _class.prototype.__init124.call(this);
        _class.prototype.__init125.call(this);
        _class.prototype.__init126.call(this);
        this.client = n.client, this.commands = [], this.commandOptions = n.commandOptions, this.multiExec = _nullishCoalesce(n.multiExec, () => false);
      }
      __init() {
        this.exec = async () => {
          if (this.commands.length === 0)
            throw new Error("Pipeline is empty");
          let n = this.multiExec ? ["multi-exec"] : ["pipeline"];
          return (await this.client.request({ path: n, body: Object.values(this.commands).map((o) => o.command) })).map(({ error: o, result: m }, r) => {
            if (o)
              throw new c(`Command ${r + 1} [ ${this.commands[r].command[0]} ] failed: ${o}`);
            return this.commands[r].deserialize(m);
          });
        };
      }
      length() {
        return this.commands.length;
      }
      chain(n) {
        return this.commands.push(n), this;
      }
      __init2() {
        this.append = (...n) => this.chain(new C(n, this.commandOptions));
      }
      __init3() {
        this.bitcount = (...n) => this.chain(new l(n, this.commandOptions));
      }
      __init4() {
        this.bitop = (n, t, o, ...m) => this.chain(new g([n, t, o, ...m], this.commandOptions));
      }
      __init5() {
        this.bitpos = (...n) => this.chain(new x(n, this.commandOptions));
      }
      __init6() {
        this.copy = (...n) => this.chain(new f(n, this.commandOptions));
      }
      __init7() {
        this.zdiffstore = (...n) => this.chain(new ee(n, this.commandOptions));
      }
      __init8() {
        this.dbsize = () => this.chain(new y(this.commandOptions));
      }
      __init9() {
        this.decr = (...n) => this.chain(new b(n, this.commandOptions));
      }
      __init10() {
        this.decrby = (...n) => this.chain(new O(n, this.commandOptions));
      }
      __init11() {
        this.del = (...n) => this.chain(new T(n, this.commandOptions));
      }
      __init12() {
        this.echo = (...n) => this.chain(new w(n, this.commandOptions));
      }
      __init13() {
        this.eval = (...n) => this.chain(new D(n, this.commandOptions));
      }
      __init14() {
        this.evalsha = (...n) => this.chain(new A(n, this.commandOptions));
      }
      __init15() {
        this.exists = (...n) => this.chain(new k(n, this.commandOptions));
      }
      __init16() {
        this.expire = (...n) => this.chain(new S(n, this.commandOptions));
      }
      __init17() {
        this.expireat = (...n) => this.chain(new R(n, this.commandOptions));
      }
      __init18() {
        this.flushall = (n) => this.chain(new M(n, this.commandOptions));
      }
      __init19() {
        this.flushdb = (...n) => this.chain(new v(n, this.commandOptions));
      }
      __init20() {
        this.get = (...n) => this.chain(new L(n, this.commandOptions));
      }
      __init21() {
        this.getbit = (...n) => this.chain(new Z(n, this.commandOptions));
      }
      __init22() {
        this.getdel = (...n) => this.chain(new N(n, this.commandOptions));
      }
      __init23() {
        this.getrange = (...n) => this.chain(new G(n, this.commandOptions));
      }
      __init24() {
        this.getset = (n, t) => this.chain(new B([n, t], this.commandOptions));
      }
      __init25() {
        this.hdel = (...n) => this.chain(new U(n, this.commandOptions));
      }
      __init26() {
        this.hexists = (...n) => this.chain(new H(n, this.commandOptions));
      }
      __init27() {
        this.hget = (...n) => this.chain(new F(n, this.commandOptions));
      }
      __init28() {
        this.hgetall = (...n) => this.chain(new q(n, this.commandOptions));
      }
      __init29() {
        this.hincrby = (...n) => this.chain(new $(n, this.commandOptions));
      }
      __init30() {
        this.hincrbyfloat = (...n) => this.chain(new X(n, this.commandOptions));
      }
      __init31() {
        this.hkeys = (...n) => this.chain(new j(n, this.commandOptions));
      }
      __init32() {
        this.hlen = (...n) => this.chain(new Y(n, this.commandOptions));
      }
      __init33() {
        this.hmget = (...n) => this.chain(new W(n, this.commandOptions));
      }
      __init34() {
        this.hmset = (n, t) => this.chain(new V([n, t], this.commandOptions));
      }
      __init35() {
        this.hrandfield = (n, t, o) => this.chain(new _([n, t, o], this.commandOptions));
      }
      __init36() {
        this.hscan = (...n) => this.chain(new Q(n, this.commandOptions));
      }
      __init37() {
        this.hset = (n, t) => this.chain(new nn([n, t], this.commandOptions));
      }
      __init38() {
        this.hsetnx = (n, t, o) => this.chain(new tn([n, t, o], this.commandOptions));
      }
      __init39() {
        this.hstrlen = (...n) => this.chain(new en(n, this.commandOptions));
      }
      __init40() {
        this.hvals = (...n) => this.chain(new on(n, this.commandOptions));
      }
      __init41() {
        this.incr = (...n) => this.chain(new sn(n, this.commandOptions));
      }
      __init42() {
        this.incrby = (...n) => this.chain(new mn(n, this.commandOptions));
      }
      __init43() {
        this.incrbyfloat = (...n) => this.chain(new rn(n, this.commandOptions));
      }
      __init44() {
        this.keys = (...n) => this.chain(new Mn(n, this.commandOptions));
      }
      __init45() {
        this.lindex = (...n) => this.chain(new vn(n, this.commandOptions));
      }
      __init46() {
        this.linsert = (n, t, o, m) => this.chain(new En([n, t, o, m], this.commandOptions));
      }
      __init47() {
        this.llen = (...n) => this.chain(new Pn(n, this.commandOptions));
      }
      __init48() {
        this.lmove = (...n) => this.chain(new zn(n, this.commandOptions));
      }
      __init49() {
        this.lpop = (...n) => this.chain(new Jn(n, this.commandOptions));
      }
      __init50() {
        this.lpos = (...n) => this.chain(new Kn(n, this.commandOptions));
      }
      __init51() {
        this.lpush = (n, ...t) => this.chain(new In([n, ...t], this.commandOptions));
      }
      __init52() {
        this.lpushx = (n, ...t) => this.chain(new Ln([n, ...t], this.commandOptions));
      }
      __init53() {
        this.lrange = (...n) => this.chain(new Zn(n, this.commandOptions));
      }
      __init54() {
        this.lrem = (n, t, o) => this.chain(new Nn([n, t, o], this.commandOptions));
      }
      __init55() {
        this.lset = (n, t, o) => this.chain(new Gn([n, t, o], this.commandOptions));
      }
      __init56() {
        this.ltrim = (...n) => this.chain(new Bn(n, this.commandOptions));
      }
      __init57() {
        this.mget = (...n) => this.chain(new Un(n, this.commandOptions));
      }
      __init58() {
        this.mset = (n) => this.chain(new Hn([n], this.commandOptions));
      }
      __init59() {
        this.msetnx = (n) => this.chain(new Fn([n], this.commandOptions));
      }
      __init60() {
        this.persist = (...n) => this.chain(new qn(n, this.commandOptions));
      }
      __init61() {
        this.pexpire = (...n) => this.chain(new $n(n, this.commandOptions));
      }
      __init62() {
        this.pexpireat = (...n) => this.chain(new Xn(n, this.commandOptions));
      }
      __init63() {
        this.pfadd = (...n) => this.chain(new jn(n, this.commandOptions));
      }
      __init64() {
        this.pfcount = (...n) => this.chain(new Yn(n, this.commandOptions));
      }
      __init65() {
        this.pfmerge = (...n) => this.chain(new Wn(n, this.commandOptions));
      }
      __init66() {
        this.ping = (n) => this.chain(new Vn(n, this.commandOptions));
      }
      __init67() {
        this.psetex = (n, t, o) => this.chain(new _n([n, t, o], this.commandOptions));
      }
      __init68() {
        this.pttl = (...n) => this.chain(new Qn(n, this.commandOptions));
      }
      __init69() {
        this.publish = (...n) => this.chain(new nt(n, this.commandOptions));
      }
      __init70() {
        this.randomkey = () => this.chain(new tt(this.commandOptions));
      }
      __init71() {
        this.rename = (...n) => this.chain(new et(n, this.commandOptions));
      }
      __init72() {
        this.renamenx = (...n) => this.chain(new ot(n, this.commandOptions));
      }
      __init73() {
        this.rpop = (...n) => this.chain(new st(n, this.commandOptions));
      }
      __init74() {
        this.rpush = (n, ...t) => this.chain(new mt([n, ...t], this.commandOptions));
      }
      __init75() {
        this.rpushx = (n, ...t) => this.chain(new rt([n, ...t], this.commandOptions));
      }
      __init76() {
        this.sadd = (n, ...t) => this.chain(new at([n, ...t], this.commandOptions));
      }
      __init77() {
        this.scan = (...n) => this.chain(new it(n, this.commandOptions));
      }
      __init78() {
        this.scard = (...n) => this.chain(new pt(n, this.commandOptions));
      }
      __init79() {
        this.scriptExists = (...n) => this.chain(new dt(n, this.commandOptions));
      }
      __init80() {
        this.scriptFlush = (...n) => this.chain(new ct(n, this.commandOptions));
      }
      __init81() {
        this.scriptLoad = (...n) => this.chain(new ut(n, this.commandOptions));
      }
      __init82() {
        this.sdiff = (...n) => this.chain(new ht(n, this.commandOptions));
      }
      __init83() {
        this.sdiffstore = (...n) => this.chain(new Ct(n, this.commandOptions));
      }
      __init84() {
        this.set = (n, t, o) => this.chain(new lt([n, t, o], this.commandOptions));
      }
      __init85() {
        this.setbit = (...n) => this.chain(new gt(n, this.commandOptions));
      }
      __init86() {
        this.setex = (n, t, o) => this.chain(new xt([n, t, o], this.commandOptions));
      }
      __init87() {
        this.setnx = (n, t) => this.chain(new ft([n, t], this.commandOptions));
      }
      __init88() {
        this.setrange = (...n) => this.chain(new yt(n, this.commandOptions));
      }
      __init89() {
        this.sinter = (...n) => this.chain(new bt(n, this.commandOptions));
      }
      __init90() {
        this.sinterstore = (...n) => this.chain(new Ot(n, this.commandOptions));
      }
      __init91() {
        this.sismember = (n, t) => this.chain(new Tt([n, t], this.commandOptions));
      }
      __init92() {
        this.smembers = (...n) => this.chain(new wt(n, this.commandOptions));
      }
      __init93() {
        this.smismember = (n, t) => this.chain(new Dt([n, t], this.commandOptions));
      }
      __init94() {
        this.smove = (n, t, o) => this.chain(new At([n, t, o], this.commandOptions));
      }
      __init95() {
        this.spop = (...n) => this.chain(new kt(n, this.commandOptions));
      }
      __init96() {
        this.srandmember = (...n) => this.chain(new St(n, this.commandOptions));
      }
      __init97() {
        this.srem = (n, ...t) => this.chain(new Rt([n, ...t], this.commandOptions));
      }
      __init98() {
        this.sscan = (...n) => this.chain(new Mt(n, this.commandOptions));
      }
      __init99() {
        this.strlen = (...n) => this.chain(new vt(n, this.commandOptions));
      }
      __init100() {
        this.sunion = (...n) => this.chain(new Et(n, this.commandOptions));
      }
      __init101() {
        this.sunionstore = (...n) => this.chain(new Pt(n, this.commandOptions));
      }
      __init102() {
        this.time = () => this.chain(new zt(this.commandOptions));
      }
      __init103() {
        this.touch = (...n) => this.chain(new Jt(n, this.commandOptions));
      }
      __init104() {
        this.ttl = (...n) => this.chain(new Kt(n, this.commandOptions));
      }
      __init105() {
        this.type = (...n) => this.chain(new It(n, this.commandOptions));
      }
      __init106() {
        this.unlink = (...n) => this.chain(new Lt(n, this.commandOptions));
      }
      __init107() {
        this.zadd = (...n) => "score" in n[1] ? this.chain(new u([n[0], n[1], ...n.slice(2)], this.commandOptions)) : this.chain(new u([n[0], n[1], ...n.slice(2)], this.commandOptions));
      }
      __init108() {
        this.zcard = (...n) => this.chain(new Zt(n, this.commandOptions));
      }
      __init109() {
        this.zcount = (...n) => this.chain(new Nt(n, this.commandOptions));
      }
      __init110() {
        this.zincrby = (n, t, o) => this.chain(new Gt([n, t, o], this.commandOptions));
      }
      __init111() {
        this.zinterstore = (...n) => this.chain(new Bt(n, this.commandOptions));
      }
      __init112() {
        this.zlexcount = (...n) => this.chain(new Ut(n, this.commandOptions));
      }
      __init113() {
        this.zmscore = (...n) => this.chain(new oe(n, this.commandOptions));
      }
      __init114() {
        this.zpopmax = (...n) => this.chain(new Ht(n, this.commandOptions));
      }
      __init115() {
        this.zpopmin = (...n) => this.chain(new Ft(n, this.commandOptions));
      }
      __init116() {
        this.zrange = (...n) => this.chain(new qt(n, this.commandOptions));
      }
      __init117() {
        this.zrank = (n, t) => this.chain(new $t([n, t], this.commandOptions));
      }
      __init118() {
        this.zrem = (n, ...t) => this.chain(new Xt([n, ...t], this.commandOptions));
      }
      __init119() {
        this.zremrangebylex = (...n) => this.chain(new jt(n, this.commandOptions));
      }
      __init120() {
        this.zremrangebyrank = (...n) => this.chain(new Yt(n, this.commandOptions));
      }
      __init121() {
        this.zremrangebyscore = (...n) => this.chain(new Wt(n, this.commandOptions));
      }
      __init122() {
        this.zrevrank = (n, t) => this.chain(new Vt([n, t], this.commandOptions));
      }
      __init123() {
        this.zscan = (...n) => this.chain(new _t(n, this.commandOptions));
      }
      __init124() {
        this.zscore = (n, t) => this.chain(new Qt([n, t], this.commandOptions));
      }
      __init125() {
        this.zunionstore = (...n) => this.chain(new te(n, this.commandOptions));
      }
      __init126() {
        this.zunion = (...n) => this.chain(new ne(n, this.commandOptions));
      }
      get json() {
        return { arrappend: (...n) => this.chain(new an(n, this.commandOptions)), arrindex: (...n) => this.chain(new pn(n, this.commandOptions)), arrinsert: (...n) => this.chain(new dn(n, this.commandOptions)), arrlen: (...n) => this.chain(new cn(n, this.commandOptions)), arrpop: (...n) => this.chain(new un(n, this.commandOptions)), arrtrim: (...n) => this.chain(new hn(n, this.commandOptions)), clear: (...n) => this.chain(new Cn(n, this.commandOptions)), del: (...n) => this.chain(new ln(n, this.commandOptions)), forget: (...n) => this.chain(new gn(n, this.commandOptions)), geoadd: (...n) => this.chain(new E(n, this.commandOptions)), geodist: (...n) => this.chain(new P(n, this.commandOptions)), geopos: (...n) => this.chain(new z(n, this.commandOptions)), geohash: (...n) => this.chain(new J(n, this.commandOptions)), geosearch: (...n) => this.chain(new K(n, this.commandOptions)), geosearchstore: (...n) => this.chain(new I(n, this.commandOptions)), get: (...n) => this.chain(new xn(n, this.commandOptions)), mget: (...n) => this.chain(new fn(n, this.commandOptions)), numincrby: (...n) => this.chain(new yn(n, this.commandOptions)), nummultby: (...n) => this.chain(new bn(n, this.commandOptions)), objkeys: (...n) => this.chain(new On(n, this.commandOptions)), objlen: (...n) => this.chain(new Tn(n, this.commandOptions)), resp: (...n) => this.chain(new wn(n, this.commandOptions)), set: (...n) => this.chain(new Dn(n, this.commandOptions)), strappend: (...n) => this.chain(new An(n, this.commandOptions)), strlen: (...n) => this.chain(new kn(n, this.commandOptions)), toggle: (...n) => this.chain(new Sn(n, this.commandOptions)), type: (...n) => this.chain(new Rn(n, this.commandOptions)) };
      }
    }, _class);
    var _enchexjs = require_enc_hex();
    var _enchexjs2 = _interopRequireDefault(_enchexjs);
    var _sha1js = require_sha1();
    var _sha1js2 = _interopRequireDefault(_sha1js);
    var ie = class {
      constructor(n, t) {
        this.redis = n, this.sha1 = this.digest(t), this.script = t;
      }
      async eval(n, t) {
        return await this.redis.eval(this.script, n, t);
      }
      async evalsha(n, t) {
        return await this.redis.evalsha(this.sha1, n, t);
      }
      async exec(n, t) {
        return await this.redis.evalsha(this.sha1, n, t).catch(async (m) => {
          if (m instanceof Error && m.message.toLowerCase().includes("noscript"))
            return await this.redis.eval(this.script, n, t);
          throw m;
        });
      }
      digest(n) {
        return _enchexjs2.default.stringify(_sha1js2.default.call(void 0, n));
      }
    };
    var le = (_class2 = class {
      constructor(n, t) {
        ;
        _class2.prototype.__init127.call(this);
        _class2.prototype.__init128.call(this);
        _class2.prototype.__init129.call(this);
        _class2.prototype.__init130.call(this);
        _class2.prototype.__init131.call(this);
        _class2.prototype.__init132.call(this);
        _class2.prototype.__init133.call(this);
        _class2.prototype.__init134.call(this);
        _class2.prototype.__init135.call(this);
        _class2.prototype.__init136.call(this);
        _class2.prototype.__init137.call(this);
        _class2.prototype.__init138.call(this);
        _class2.prototype.__init139.call(this);
        _class2.prototype.__init140.call(this);
        _class2.prototype.__init141.call(this);
        _class2.prototype.__init142.call(this);
        _class2.prototype.__init143.call(this);
        _class2.prototype.__init144.call(this);
        _class2.prototype.__init145.call(this);
        _class2.prototype.__init146.call(this);
        _class2.prototype.__init147.call(this);
        _class2.prototype.__init148.call(this);
        _class2.prototype.__init149.call(this);
        _class2.prototype.__init150.call(this);
        _class2.prototype.__init151.call(this);
        _class2.prototype.__init152.call(this);
        _class2.prototype.__init153.call(this);
        _class2.prototype.__init154.call(this);
        _class2.prototype.__init155.call(this);
        _class2.prototype.__init156.call(this);
        _class2.prototype.__init157.call(this);
        _class2.prototype.__init158.call(this);
        _class2.prototype.__init159.call(this);
        _class2.prototype.__init160.call(this);
        _class2.prototype.__init161.call(this);
        _class2.prototype.__init162.call(this);
        _class2.prototype.__init163.call(this);
        _class2.prototype.__init164.call(this);
        _class2.prototype.__init165.call(this);
        _class2.prototype.__init166.call(this);
        _class2.prototype.__init167.call(this);
        _class2.prototype.__init168.call(this);
        _class2.prototype.__init169.call(this);
        _class2.prototype.__init170.call(this);
        _class2.prototype.__init171.call(this);
        _class2.prototype.__init172.call(this);
        _class2.prototype.__init173.call(this);
        _class2.prototype.__init174.call(this);
        _class2.prototype.__init175.call(this);
        _class2.prototype.__init176.call(this);
        _class2.prototype.__init177.call(this);
        _class2.prototype.__init178.call(this);
        _class2.prototype.__init179.call(this);
        _class2.prototype.__init180.call(this);
        _class2.prototype.__init181.call(this);
        _class2.prototype.__init182.call(this);
        _class2.prototype.__init183.call(this);
        _class2.prototype.__init184.call(this);
        _class2.prototype.__init185.call(this);
        _class2.prototype.__init186.call(this);
        _class2.prototype.__init187.call(this);
        _class2.prototype.__init188.call(this);
        _class2.prototype.__init189.call(this);
        _class2.prototype.__init190.call(this);
        _class2.prototype.__init191.call(this);
        _class2.prototype.__init192.call(this);
        _class2.prototype.__init193.call(this);
        _class2.prototype.__init194.call(this);
        _class2.prototype.__init195.call(this);
        _class2.prototype.__init196.call(this);
        _class2.prototype.__init197.call(this);
        _class2.prototype.__init198.call(this);
        _class2.prototype.__init199.call(this);
        _class2.prototype.__init200.call(this);
        _class2.prototype.__init201.call(this);
        _class2.prototype.__init202.call(this);
        _class2.prototype.__init203.call(this);
        _class2.prototype.__init204.call(this);
        _class2.prototype.__init205.call(this);
        _class2.prototype.__init206.call(this);
        _class2.prototype.__init207.call(this);
        _class2.prototype.__init208.call(this);
        _class2.prototype.__init209.call(this);
        _class2.prototype.__init210.call(this);
        _class2.prototype.__init211.call(this);
        _class2.prototype.__init212.call(this);
        _class2.prototype.__init213.call(this);
        _class2.prototype.__init214.call(this);
        _class2.prototype.__init215.call(this);
        _class2.prototype.__init216.call(this);
        _class2.prototype.__init217.call(this);
        _class2.prototype.__init218.call(this);
        _class2.prototype.__init219.call(this);
        _class2.prototype.__init220.call(this);
        _class2.prototype.__init221.call(this);
        _class2.prototype.__init222.call(this);
        _class2.prototype.__init223.call(this);
        _class2.prototype.__init224.call(this);
        _class2.prototype.__init225.call(this);
        _class2.prototype.__init226.call(this);
        _class2.prototype.__init227.call(this);
        _class2.prototype.__init228.call(this);
        _class2.prototype.__init229.call(this);
        _class2.prototype.__init230.call(this);
        _class2.prototype.__init231.call(this);
        _class2.prototype.__init232.call(this);
        _class2.prototype.__init233.call(this);
        _class2.prototype.__init234.call(this);
        _class2.prototype.__init235.call(this);
        _class2.prototype.__init236.call(this);
        _class2.prototype.__init237.call(this);
        _class2.prototype.__init238.call(this);
        _class2.prototype.__init239.call(this);
        _class2.prototype.__init240.call(this);
        _class2.prototype.__init241.call(this);
        _class2.prototype.__init242.call(this);
        _class2.prototype.__init243.call(this);
        _class2.prototype.__init244.call(this);
        _class2.prototype.__init245.call(this);
        _class2.prototype.__init246.call(this);
        _class2.prototype.__init247.call(this);
        _class2.prototype.__init248.call(this);
        _class2.prototype.__init249.call(this);
        _class2.prototype.__init250.call(this);
        _class2.prototype.__init251.call(this);
        _class2.prototype.__init252.call(this);
        _class2.prototype.__init253.call(this);
        _class2.prototype.__init254.call(this);
        _class2.prototype.__init255.call(this);
        _class2.prototype.__init256.call(this);
        _class2.prototype.__init257.call(this);
        this.client = n, this.opts = t, this.enableTelemetry = _nullishCoalesce(_optionalChain([t, "optionalAccess", (_56) => _56.enableTelemetry]), () => true);
      }
      get json() {
        return { arrappend: (...n) => new an(n, this.opts).exec(this.client), arrindex: (...n) => new pn(n, this.opts).exec(this.client), arrinsert: (...n) => new dn(n, this.opts).exec(this.client), arrlen: (...n) => new cn(n, this.opts).exec(this.client), arrpop: (...n) => new un(n, this.opts).exec(this.client), arrtrim: (...n) => new hn(n, this.opts).exec(this.client), clear: (...n) => new Cn(n, this.opts).exec(this.client), del: (...n) => new ln(n, this.opts).exec(this.client), forget: (...n) => new gn(n, this.opts).exec(this.client), geoadd: (...n) => new E(n, this.opts).exec(this.client), geopos: (...n) => new z(n, this.opts).exec(this.client), geodist: (...n) => new P(n, this.opts).exec(this.client), geohash: (...n) => new J(n, this.opts).exec(this.client), geosearch: (...n) => new K(n, this.opts).exec(this.client), geosearchstore: (...n) => new I(n, this.opts).exec(this.client), get: (...n) => new xn(n, this.opts).exec(this.client), mget: (...n) => new fn(n, this.opts).exec(this.client), numincrby: (...n) => new yn(n, this.opts).exec(this.client), nummultby: (...n) => new bn(n, this.opts).exec(this.client), objkeys: (...n) => new On(n, this.opts).exec(this.client), objlen: (...n) => new Tn(n, this.opts).exec(this.client), resp: (...n) => new wn(n, this.opts).exec(this.client), set: (...n) => new Dn(n, this.opts).exec(this.client), strappend: (...n) => new An(n, this.opts).exec(this.client), strlen: (...n) => new kn(n, this.opts).exec(this.client), toggle: (...n) => new Sn(n, this.opts).exec(this.client), type: (...n) => new Rn(n, this.opts).exec(this.client) };
      }
      __init127() {
        this.use = (n) => {
          let t = this.client.request.bind(this.client);
          this.client.request = (o) => n(o, t);
        };
      }
      __init128() {
        this.addTelemetry = (n) => {
          if (this.enableTelemetry)
            try {
              this.client.mergeTelemetry(n);
            } catch (e12) {
            }
        };
      }
      createScript(n) {
        return new ie(this, n);
      }
      __init129() {
        this.pipeline = () => new se({ client: this.client, commandOptions: this.opts, multiExec: false });
      }
      __init130() {
        this.multi = () => new se({ client: this.client, commandOptions: this.opts, multiExec: true });
      }
      __init131() {
        this.append = (...n) => new C(n, this.opts).exec(this.client);
      }
      __init132() {
        this.bitcount = (...n) => new l(n, this.opts).exec(this.client);
      }
      __init133() {
        this.bitop = (n, t, o, ...m) => new g([n, t, o, ...m], this.opts).exec(this.client);
      }
      __init134() {
        this.bitpos = (...n) => new x(n, this.opts).exec(this.client);
      }
      __init135() {
        this.copy = (...n) => new f(n, this.opts).exec(this.client);
      }
      __init136() {
        this.dbsize = () => new y(this.opts).exec(this.client);
      }
      __init137() {
        this.decr = (...n) => new b(n, this.opts).exec(this.client);
      }
      __init138() {
        this.decrby = (...n) => new O(n, this.opts).exec(this.client);
      }
      __init139() {
        this.del = (...n) => new T(n, this.opts).exec(this.client);
      }
      __init140() {
        this.echo = (...n) => new w(n, this.opts).exec(this.client);
      }
      __init141() {
        this.eval = (...n) => new D(n, this.opts).exec(this.client);
      }
      __init142() {
        this.evalsha = (...n) => new A(n, this.opts).exec(this.client);
      }
      __init143() {
        this.exists = (...n) => new k(n, this.opts).exec(this.client);
      }
      __init144() {
        this.expire = (...n) => new S(n, this.opts).exec(this.client);
      }
      __init145() {
        this.expireat = (...n) => new R(n, this.opts).exec(this.client);
      }
      __init146() {
        this.flushall = (n) => new M(n, this.opts).exec(this.client);
      }
      __init147() {
        this.flushdb = (...n) => new v(n, this.opts).exec(this.client);
      }
      __init148() {
        this.get = (...n) => new L(n, this.opts).exec(this.client);
      }
      __init149() {
        this.getbit = (...n) => new Z(n, this.opts).exec(this.client);
      }
      __init150() {
        this.getdel = (...n) => new N(n, this.opts).exec(this.client);
      }
      __init151() {
        this.getrange = (...n) => new G(n, this.opts).exec(this.client);
      }
      __init152() {
        this.getset = (n, t) => new B([n, t], this.opts).exec(this.client);
      }
      __init153() {
        this.hdel = (...n) => new U(n, this.opts).exec(this.client);
      }
      __init154() {
        this.hexists = (...n) => new H(n, this.opts).exec(this.client);
      }
      __init155() {
        this.hget = (...n) => new F(n, this.opts).exec(this.client);
      }
      __init156() {
        this.hgetall = (...n) => new q(n, this.opts).exec(this.client);
      }
      __init157() {
        this.hincrby = (...n) => new $(n, this.opts).exec(this.client);
      }
      __init158() {
        this.hincrbyfloat = (...n) => new X(n, this.opts).exec(this.client);
      }
      __init159() {
        this.hkeys = (...n) => new j(n, this.opts).exec(this.client);
      }
      __init160() {
        this.hlen = (...n) => new Y(n, this.opts).exec(this.client);
      }
      __init161() {
        this.hmget = (...n) => new W(n, this.opts).exec(this.client);
      }
      __init162() {
        this.hmset = (n, t) => new V([n, t], this.opts).exec(this.client);
      }
      __init163() {
        this.hrandfield = (n, t, o) => new _([n, t, o], this.opts).exec(this.client);
      }
      __init164() {
        this.hscan = (...n) => new Q(n, this.opts).exec(this.client);
      }
      __init165() {
        this.hset = (n, t) => new nn([n, t], this.opts).exec(this.client);
      }
      __init166() {
        this.hsetnx = (n, t, o) => new tn([n, t, o], this.opts).exec(this.client);
      }
      __init167() {
        this.hstrlen = (...n) => new en(n, this.opts).exec(this.client);
      }
      __init168() {
        this.hvals = (...n) => new on(n, this.opts).exec(this.client);
      }
      __init169() {
        this.incr = (...n) => new sn(n, this.opts).exec(this.client);
      }
      __init170() {
        this.incrby = (...n) => new mn(n, this.opts).exec(this.client);
      }
      __init171() {
        this.incrbyfloat = (...n) => new rn(n, this.opts).exec(this.client);
      }
      __init172() {
        this.keys = (...n) => new Mn(n, this.opts).exec(this.client);
      }
      __init173() {
        this.lindex = (...n) => new vn(n, this.opts).exec(this.client);
      }
      __init174() {
        this.linsert = (n, t, o, m) => new En([n, t, o, m], this.opts).exec(this.client);
      }
      __init175() {
        this.llen = (...n) => new Pn(n, this.opts).exec(this.client);
      }
      __init176() {
        this.lmove = (...n) => new zn(n, this.opts).exec(this.client);
      }
      __init177() {
        this.lpop = (...n) => new Jn(n, this.opts).exec(this.client);
      }
      __init178() {
        this.lpos = (...n) => new Kn(n, this.opts).exec(this.client);
      }
      __init179() {
        this.lpush = (n, ...t) => new In([n, ...t], this.opts).exec(this.client);
      }
      __init180() {
        this.lpushx = (n, ...t) => new Ln([n, ...t], this.opts).exec(this.client);
      }
      __init181() {
        this.lrange = (...n) => new Zn(n, this.opts).exec(this.client);
      }
      __init182() {
        this.lrem = (n, t, o) => new Nn([n, t, o], this.opts).exec(this.client);
      }
      __init183() {
        this.lset = (n, t, o) => new Gn([n, t, o], this.opts).exec(this.client);
      }
      __init184() {
        this.ltrim = (...n) => new Bn(n, this.opts).exec(this.client);
      }
      __init185() {
        this.mget = (...n) => new Un(n, this.opts).exec(this.client);
      }
      __init186() {
        this.mset = (n) => new Hn([n], this.opts).exec(this.client);
      }
      __init187() {
        this.msetnx = (n) => new Fn([n], this.opts).exec(this.client);
      }
      __init188() {
        this.persist = (...n) => new qn(n, this.opts).exec(this.client);
      }
      __init189() {
        this.pexpire = (...n) => new $n(n, this.opts).exec(this.client);
      }
      __init190() {
        this.pexpireat = (...n) => new Xn(n, this.opts).exec(this.client);
      }
      __init191() {
        this.pfadd = (...n) => new jn(n, this.opts).exec(this.client);
      }
      __init192() {
        this.pfcount = (...n) => new Yn(n, this.opts).exec(this.client);
      }
      __init193() {
        this.pfmerge = (...n) => new Wn(n, this.opts).exec(this.client);
      }
      __init194() {
        this.ping = (n) => new Vn(n, this.opts).exec(this.client);
      }
      __init195() {
        this.psetex = (n, t, o) => new _n([n, t, o], this.opts).exec(this.client);
      }
      __init196() {
        this.pttl = (...n) => new Qn(n, this.opts).exec(this.client);
      }
      __init197() {
        this.publish = (...n) => new nt(n, this.opts).exec(this.client);
      }
      __init198() {
        this.randomkey = () => new tt().exec(this.client);
      }
      __init199() {
        this.rename = (...n) => new et(n, this.opts).exec(this.client);
      }
      __init200() {
        this.renamenx = (...n) => new ot(n, this.opts).exec(this.client);
      }
      __init201() {
        this.rpop = (...n) => new st(n, this.opts).exec(this.client);
      }
      __init202() {
        this.rpush = (n, ...t) => new mt([n, ...t], this.opts).exec(this.client);
      }
      __init203() {
        this.rpushx = (n, ...t) => new rt([n, ...t], this.opts).exec(this.client);
      }
      __init204() {
        this.sadd = (n, ...t) => new at([n, ...t], this.opts).exec(this.client);
      }
      __init205() {
        this.scan = (...n) => new it(n, this.opts).exec(this.client);
      }
      __init206() {
        this.scard = (...n) => new pt(n, this.opts).exec(this.client);
      }
      __init207() {
        this.scriptExists = (...n) => new dt(n, this.opts).exec(this.client);
      }
      __init208() {
        this.scriptFlush = (...n) => new ct(n, this.opts).exec(this.client);
      }
      __init209() {
        this.scriptLoad = (...n) => new ut(n, this.opts).exec(this.client);
      }
      __init210() {
        this.sdiff = (...n) => new ht(n, this.opts).exec(this.client);
      }
      __init211() {
        this.sdiffstore = (...n) => new Ct(n, this.opts).exec(this.client);
      }
      __init212() {
        this.set = (n, t, o) => new lt([n, t, o], this.opts).exec(this.client);
      }
      __init213() {
        this.setbit = (...n) => new gt(n, this.opts).exec(this.client);
      }
      __init214() {
        this.setex = (n, t, o) => new xt([n, t, o], this.opts).exec(this.client);
      }
      __init215() {
        this.setnx = (n, t) => new ft([n, t], this.opts).exec(this.client);
      }
      __init216() {
        this.setrange = (...n) => new yt(n, this.opts).exec(this.client);
      }
      __init217() {
        this.sinter = (...n) => new bt(n, this.opts).exec(this.client);
      }
      __init218() {
        this.sinterstore = (...n) => new Ot(n, this.opts).exec(this.client);
      }
      __init219() {
        this.sismember = (n, t) => new Tt([n, t], this.opts).exec(this.client);
      }
      __init220() {
        this.smismember = (n, t) => new Dt([n, t], this.opts).exec(this.client);
      }
      __init221() {
        this.smembers = (...n) => new wt(n, this.opts).exec(this.client);
      }
      __init222() {
        this.smove = (n, t, o) => new At([n, t, o], this.opts).exec(this.client);
      }
      __init223() {
        this.spop = (...n) => new kt(n, this.opts).exec(this.client);
      }
      __init224() {
        this.srandmember = (...n) => new St(n, this.opts).exec(this.client);
      }
      __init225() {
        this.srem = (n, ...t) => new Rt([n, ...t], this.opts).exec(this.client);
      }
      __init226() {
        this.sscan = (...n) => new Mt(n, this.opts).exec(this.client);
      }
      __init227() {
        this.strlen = (...n) => new vt(n, this.opts).exec(this.client);
      }
      __init228() {
        this.sunion = (...n) => new Et(n, this.opts).exec(this.client);
      }
      __init229() {
        this.sunionstore = (...n) => new Pt(n, this.opts).exec(this.client);
      }
      __init230() {
        this.time = () => new zt().exec(this.client);
      }
      __init231() {
        this.touch = (...n) => new Jt(n, this.opts).exec(this.client);
      }
      __init232() {
        this.ttl = (...n) => new Kt(n, this.opts).exec(this.client);
      }
      __init233() {
        this.type = (...n) => new It(n, this.opts).exec(this.client);
      }
      __init234() {
        this.unlink = (...n) => new Lt(n, this.opts).exec(this.client);
      }
      __init235() {
        this.xadd = (...n) => new re(n, this.opts).exec(this.client);
      }
      __init236() {
        this.xrange = (...n) => new ae(n, this.opts).exec(this.client);
      }
      __init237() {
        this.zadd = (...n) => "score" in n[1] ? new u([n[0], n[1], ...n.slice(2)], this.opts).exec(this.client) : new u([n[0], n[1], ...n.slice(2)], this.opts).exec(this.client);
      }
      __init238() {
        this.zcard = (...n) => new Zt(n, this.opts).exec(this.client);
      }
      __init239() {
        this.zcount = (...n) => new Nt(n, this.opts).exec(this.client);
      }
      __init240() {
        this.zdiffstore = (...n) => new ee(n, this.opts).exec(this.client);
      }
      __init241() {
        this.zincrby = (n, t, o) => new Gt([n, t, o], this.opts).exec(this.client);
      }
      __init242() {
        this.zinterstore = (...n) => new Bt(n, this.opts).exec(this.client);
      }
      __init243() {
        this.zlexcount = (...n) => new Ut(n, this.opts).exec(this.client);
      }
      __init244() {
        this.zmscore = (...n) => new oe(n, this.opts).exec(this.client);
      }
      __init245() {
        this.zpopmax = (...n) => new Ht(n, this.opts).exec(this.client);
      }
      __init246() {
        this.zpopmin = (...n) => new Ft(n, this.opts).exec(this.client);
      }
      __init247() {
        this.zrange = (...n) => new qt(n, this.opts).exec(this.client);
      }
      __init248() {
        this.zrank = (n, t) => new $t([n, t], this.opts).exec(this.client);
      }
      __init249() {
        this.zrem = (n, ...t) => new Xt([n, ...t], this.opts).exec(this.client);
      }
      __init250() {
        this.zremrangebylex = (...n) => new jt(n, this.opts).exec(this.client);
      }
      __init251() {
        this.zremrangebyrank = (...n) => new Yt(n, this.opts).exec(this.client);
      }
      __init252() {
        this.zremrangebyscore = (...n) => new Wt(n, this.opts).exec(this.client);
      }
      __init253() {
        this.zrevrank = (n, t) => new Vt([n, t], this.opts).exec(this.client);
      }
      __init254() {
        this.zscan = (...n) => new _t(n, this.opts).exec(this.client);
      }
      __init255() {
        this.zscore = (n, t) => new Qt([n, t], this.opts).exec(this.client);
      }
      __init256() {
        this.zunion = (...n) => new ne(n, this.opts).exec(this.client);
      }
      __init257() {
        this.zunionstore = (...n) => new te(n, this.opts).exec(this.client);
      }
    }, _class2);
    var kC = "v1.25.1";
    exports2.a = ce;
    exports2.b = le;
    exports2.c = kC;
  }
});

// ../frugal/node_modules/@upstash/redis/nodejs.js
var require_nodejs = __commonJS({
  "../frugal/node_modules/@upstash/redis/nodejs.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    function _optionalChain(ops) {
      let lastAccessLHS = void 0;
      let value = ops[0];
      let i = 1;
      while (i < ops.length) {
        const op = ops[i];
        const fn = ops[i + 1];
        i += 2;
        if ((op === "optionalAccess" || op === "optionalCall") && value == null) {
          return void 0;
        }
        if (op === "access" || op === "optionalAccess") {
          lastAccessLHS = value;
          value = fn(value);
        } else if (op === "call" || op === "optionalCall") {
          value = fn((...args) => value.call(lastAccessLHS, ...args));
          lastAccessLHS = void 0;
        }
      }
      return value;
    }
    var _chunkSMBYCQIJjs = require_chunk_SMBYCQIJ();
    typeof atob > "u" && (global.atob = function(n) {
      return Buffer.from(n, "base64").toString("utf-8");
    });
    var a = class n extends _chunkSMBYCQIJjs.b {
      constructor(e) {
        if ("request" in e) {
          super(e);
          return;
        }
        (e.url.startsWith(" ") || e.url.endsWith(" ") || /\r|\n/.test(e.url)) && console.warn("The redis url contains whitespace or newline, which can cause errors!"), (e.token.startsWith(" ") || e.token.endsWith(" ") || /\r|\n/.test(e.token)) && console.warn("The redis token contains whitespace or newline, which can cause errors!");
        let t = new (0, _chunkSMBYCQIJjs.a)({ baseUrl: e.url, retry: e.retry, headers: { authorization: `Bearer ${e.token}` }, agent: e.agent, responseEncoding: e.responseEncoding, cache: e.cache || "no-store" });
        super(t, { automaticDeserialization: e.automaticDeserialization, enableTelemetry: !process.env.UPSTASH_DISABLE_TELEMETRY }), this.addTelemetry({ runtime: typeof EdgeRuntime == "string" ? "edge-light" : `node@${process.version}`, platform: process.env.VERCEL ? "vercel" : process.env.AWS_REGION ? "aws" : "unknown", sdk: `@upstash/redis@${_chunkSMBYCQIJjs.c}` });
      }
      static fromEnv(e) {
        if (typeof _optionalChain([process, "optionalAccess", (_) => _.env]) > "u")
          throw new Error('Unable to get environment variables, `process.env` is undefined. If you are deploying to cloudflare, please import from "@upstash/redis/cloudflare" instead');
        let t = _optionalChain([process, "optionalAccess", (_2) => _2.env, "access", (_3) => _3.UPSTASH_REDIS_REST_URL]);
        if (!t)
          throw new Error("Unable to find environment variable: `UPSTASH_REDIS_REST_URL`");
        let s = _optionalChain([process, "optionalAccess", (_4) => _4.env, "access", (_5) => _5.UPSTASH_REDIS_REST_TOKEN]);
        if (!s)
          throw new Error("Unable to find environment variable: `UPSTASH_REDIS_REST_TOKEN`");
        return new n({ ...e, url: t, token: s });
      }
    };
    exports2.Redis = a;
  }
});

// ../frugal/node_modules/cookie/index.js
var require_cookie = __commonJS({
  "../frugal/node_modules/cookie/index.js"(exports2) {
    "use strict";
    exports2.parse = parse2;
    exports2.serialize = serialize2;
    var __toString = Object.prototype.toString;
    var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse2(str, options) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var opt = options || {};
      var dec = opt.decode || decode;
      var index = 0;
      while (index < str.length) {
        var eqIdx = str.indexOf("=", index);
        if (eqIdx === -1) {
          break;
        }
        var endIdx = str.indexOf(";", index);
        if (endIdx === -1) {
          endIdx = str.length;
        } else if (endIdx < eqIdx) {
          index = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        var key = str.slice(index, eqIdx).trim();
        if (void 0 === obj[key]) {
          var val = str.slice(eqIdx + 1, endIdx).trim();
          if (val.charCodeAt(0) === 34) {
            val = val.slice(1, -1);
          }
          obj[key] = tryDecode(val, dec);
        }
        index = endIdx + 1;
      }
      return obj;
    }
    function serialize2(name, val, options) {
      var opt = options || {};
      var enc = opt.encode || encode;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!fieldContentRegExp.test(name)) {
        throw new TypeError("argument name is invalid");
      }
      var value = enc(val);
      if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      var str = name + "=" + value;
      if (null != opt.maxAge) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        var expires = opt.expires;
        if (!isDate(expires) || isNaN(expires.valueOf())) {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.partitioned) {
        str += "; Partitioned";
      }
      if (opt.priority) {
        var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError("option priority is invalid");
        }
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    function decode(str) {
      return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
    }
    function encode(val) {
      return encodeURIComponent(val);
    }
    function isDate(val) {
      return __toString.call(val) === "[object Date]" || val instanceof Date;
    }
    function tryDecode(str, decode2) {
      try {
        return decode2(str);
      } catch (e) {
        return str;
      }
    }
  }
});

// ../frugal/node_modules/imurmurhash/imurmurhash.js
var require_imurmurhash = __commonJS({
  "../frugal/node_modules/imurmurhash/imurmurhash.js"(exports2, module2) {
    (function() {
      var cache;
      function MurmurHash3(key, seed) {
        var m = this instanceof MurmurHash3 ? this : cache;
        m.reset(seed);
        if (typeof key === "string" && key.length > 0) {
          m.hash(key);
        }
        if (m !== this) {
          return m;
        }
      }
      ;
      MurmurHash3.prototype.hash = function(key) {
        var h1, k1, i, top, len;
        len = key.length;
        this.len += len;
        k1 = this.k1;
        i = 0;
        switch (this.rem) {
          case 0:
            k1 ^= len > i ? key.charCodeAt(i++) & 65535 : 0;
          case 1:
            k1 ^= len > i ? (key.charCodeAt(i++) & 65535) << 8 : 0;
          case 2:
            k1 ^= len > i ? (key.charCodeAt(i++) & 65535) << 16 : 0;
          case 3:
            k1 ^= len > i ? (key.charCodeAt(i) & 255) << 24 : 0;
            k1 ^= len > i ? (key.charCodeAt(i++) & 65280) >> 8 : 0;
        }
        this.rem = len + this.rem & 3;
        len -= this.rem;
        if (len > 0) {
          h1 = this.h1;
          while (1) {
            k1 = k1 * 11601 + (k1 & 65535) * 3432906752 & 4294967295;
            k1 = k1 << 15 | k1 >>> 17;
            k1 = k1 * 13715 + (k1 & 65535) * 461832192 & 4294967295;
            h1 ^= k1;
            h1 = h1 << 13 | h1 >>> 19;
            h1 = h1 * 5 + 3864292196 & 4294967295;
            if (i >= len) {
              break;
            }
            k1 = key.charCodeAt(i++) & 65535 ^ (key.charCodeAt(i++) & 65535) << 8 ^ (key.charCodeAt(i++) & 65535) << 16;
            top = key.charCodeAt(i++);
            k1 ^= (top & 255) << 24 ^ (top & 65280) >> 8;
          }
          k1 = 0;
          switch (this.rem) {
            case 3:
              k1 ^= (key.charCodeAt(i + 2) & 65535) << 16;
            case 2:
              k1 ^= (key.charCodeAt(i + 1) & 65535) << 8;
            case 1:
              k1 ^= key.charCodeAt(i) & 65535;
          }
          this.h1 = h1;
        }
        this.k1 = k1;
        return this;
      };
      MurmurHash3.prototype.result = function() {
        var k1, h1;
        k1 = this.k1;
        h1 = this.h1;
        if (k1 > 0) {
          k1 = k1 * 11601 + (k1 & 65535) * 3432906752 & 4294967295;
          k1 = k1 << 15 | k1 >>> 17;
          k1 = k1 * 13715 + (k1 & 65535) * 461832192 & 4294967295;
          h1 ^= k1;
        }
        h1 ^= this.len;
        h1 ^= h1 >>> 16;
        h1 = h1 * 51819 + (h1 & 65535) * 2246770688 & 4294967295;
        h1 ^= h1 >>> 13;
        h1 = h1 * 44597 + (h1 & 65535) * 3266445312 & 4294967295;
        h1 ^= h1 >>> 16;
        return h1 >>> 0;
      };
      MurmurHash3.prototype.reset = function(seed) {
        this.h1 = typeof seed === "number" ? seed : 0;
        this.rem = this.k1 = this.len = 0;
        return this;
      };
      cache = new MurmurHash3();
      if (typeof module2 != "undefined") {
        module2.exports = MurmurHash3;
      } else {
        this.MurmurHash3 = MurmurHash3;
      }
    })();
  }
});

// ../frugal/node_modules/path-to-regexp/dist/index.js
var require_dist = __commonJS({
  "../frugal/node_modules/path-to-regexp/dist/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.pathToRegexp = exports2.tokensToRegexp = exports2.regexpToFunction = exports2.match = exports2.tokensToFunction = exports2.compile = exports2.parse = void 0;
    function lexer(str) {
      var tokens = [];
      var i = 0;
      while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
          tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
          continue;
        }
        if (char === "\\") {
          tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
          continue;
        }
        if (char === "{") {
          tokens.push({ type: "OPEN", index: i, value: str[i++] });
          continue;
        }
        if (char === "}") {
          tokens.push({ type: "CLOSE", index: i, value: str[i++] });
          continue;
        }
        if (char === ":") {
          var name = "";
          var j = i + 1;
          while (j < str.length) {
            var code = str.charCodeAt(j);
            if (
              // `0-9`
              code >= 48 && code <= 57 || // `A-Z`
              code >= 65 && code <= 90 || // `a-z`
              code >= 97 && code <= 122 || // `_`
              code === 95
            ) {
              name += str[j++];
              continue;
            }
            break;
          }
          if (!name)
            throw new TypeError("Missing parameter name at ".concat(i));
          tokens.push({ type: "NAME", index: i, value: name });
          i = j;
          continue;
        }
        if (char === "(") {
          var count = 1;
          var pattern = "";
          var j = i + 1;
          if (str[j] === "?") {
            throw new TypeError('Pattern cannot start with "?" at '.concat(j));
          }
          while (j < str.length) {
            if (str[j] === "\\") {
              pattern += str[j++] + str[j++];
              continue;
            }
            if (str[j] === ")") {
              count--;
              if (count === 0) {
                j++;
                break;
              }
            } else if (str[j] === "(") {
              count++;
              if (str[j + 1] !== "?") {
                throw new TypeError("Capturing groups are not allowed at ".concat(j));
              }
            }
            pattern += str[j++];
          }
          if (count)
            throw new TypeError("Unbalanced pattern at ".concat(i));
          if (!pattern)
            throw new TypeError("Missing pattern at ".concat(i));
          tokens.push({ type: "PATTERN", index: i, value: pattern });
          i = j;
          continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
      }
      tokens.push({ type: "END", index: i, value: "" });
      return tokens;
    }
    function parse2(str, options) {
      if (options === void 0) {
        options = {};
      }
      var tokens = lexer(str);
      var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
      var defaultPattern = "[^".concat(escapeString(options.delimiter || "/#?"), "]+?");
      var result = [];
      var key = 0;
      var i = 0;
      var path4 = "";
      var tryConsume = function(type2) {
        if (i < tokens.length && tokens[i].type === type2)
          return tokens[i++].value;
      };
      var mustConsume = function(type2) {
        var value2 = tryConsume(type2);
        if (value2 !== void 0)
          return value2;
        var _a2 = tokens[i], nextType = _a2.type, index = _a2.index;
        throw new TypeError(
          "Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type2)
        );
      };
      var consumeText = function() {
        var result2 = "";
        var value2;
        while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
          result2 += value2;
        }
        return result2;
      };
      while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
          var prefix = char || "";
          if (prefixes.indexOf(prefix) === -1) {
            path4 += prefix;
            prefix = "";
          }
          if (path4) {
            result.push(path4);
            path4 = "";
          }
          result.push({
            name: name || key++,
            prefix,
            suffix: "",
            pattern: pattern || defaultPattern,
            modifier: tryConsume("MODIFIER") || ""
          });
          continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
          path4 += value;
          continue;
        }
        if (path4) {
          result.push(path4);
          path4 = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
          var prefix = consumeText();
          var name_1 = tryConsume("NAME") || "";
          var pattern_1 = tryConsume("PATTERN") || "";
          var suffix = consumeText();
          mustConsume("CLOSE");
          result.push({
            name: name_1 || (pattern_1 ? key++ : ""),
            pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
            prefix,
            suffix,
            modifier: tryConsume("MODIFIER") || ""
          });
          continue;
        }
        mustConsume("END");
      }
      return result;
    }
    exports2.parse = parse2;
    function compile3(str, options) {
      return tokensToFunction(parse2(str, options), options);
    }
    exports2.compile = compile3;
    function tokensToFunction(tokens, options) {
      if (options === void 0) {
        options = {};
      }
      var reFlags = flags(options);
      var _a = options.encode, encode = _a === void 0 ? function(x) {
        return x;
      } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
      var matches = tokens.map(function(token) {
        if (typeof token === "object") {
          return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
        }
      });
      return function(data) {
        var path4 = "";
        for (var i = 0; i < tokens.length; i++) {
          var token = tokens[i];
          if (typeof token === "string") {
            path4 += token;
            continue;
          }
          var value = data ? data[token.name] : void 0;
          var optional = token.modifier === "?" || token.modifier === "*";
          var repeat = token.modifier === "*" || token.modifier === "+";
          if (Array.isArray(value)) {
            if (!repeat) {
              throw new TypeError(
                'Expected "'.concat(token.name, '" to not repeat, but got an array')
              );
            }
            if (value.length === 0) {
              if (optional)
                continue;
              throw new TypeError('Expected "'.concat(token.name, '" to not be empty'));
            }
            for (var j = 0; j < value.length; j++) {
              var segment = encode(value[j], token);
              if (validate && !matches[i].test(segment)) {
                throw new TypeError(
                  'Expected all "'.concat(token.name, '" to match "').concat(token.pattern, '", but got "').concat(segment, '"')
                );
              }
              path4 += token.prefix + segment + token.suffix;
            }
            continue;
          }
          if (typeof value === "string" || typeof value === "number") {
            var segment = encode(String(value), token);
            if (validate && !matches[i].test(segment)) {
              throw new TypeError(
                'Expected "'.concat(token.name, '" to match "').concat(token.pattern, '", but got "').concat(segment, '"')
              );
            }
            path4 += token.prefix + segment + token.suffix;
            continue;
          }
          if (optional)
            continue;
          var typeOfMessage = repeat ? "an array" : "a string";
          throw new TypeError('Expected "'.concat(token.name, '" to be ').concat(typeOfMessage));
        }
        return path4;
      };
    }
    exports2.tokensToFunction = tokensToFunction;
    function match2(str, options) {
      var keys = [];
      var re = pathToRegexp2(str, keys, options);
      return regexpToFunction(re, keys, options);
    }
    exports2.match = match2;
    function regexpToFunction(re, keys, options) {
      if (options === void 0) {
        options = {};
      }
      var _a = options.decode, decode = _a === void 0 ? function(x) {
        return x;
      } : _a;
      return function(pathname) {
        var m = re.exec(pathname);
        if (!m)
          return false;
        var path4 = m[0], index = m.index;
        var params = /* @__PURE__ */ Object.create(null);
        var _loop_1 = function(i2) {
          if (m[i2] === void 0)
            return "continue";
          var key = keys[i2 - 1];
          if (key.modifier === "*" || key.modifier === "+") {
            params[key.name] = m[i2].split(key.prefix + key.suffix).map(function(value) {
              return decode(value, key);
            });
          } else {
            params[key.name] = decode(m[i2], key);
          }
        };
        for (var i = 1; i < m.length; i++) {
          _loop_1(i);
        }
        return { path: path4, index, params };
      };
    }
    exports2.regexpToFunction = regexpToFunction;
    function escapeString(str) {
      return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    }
    function flags(options) {
      return options && options.sensitive ? "" : "i";
    }
    function regexpToRegexp(path4, keys) {
      if (!keys)
        return path4;
      var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
      var index = 0;
      var execResult = groupsRegex.exec(path4.source);
      while (execResult) {
        keys.push({
          // Use parenthesized substring match if available, index otherwise
          name: execResult[1] || index++,
          prefix: "",
          suffix: "",
          modifier: "",
          pattern: ""
        });
        execResult = groupsRegex.exec(path4.source);
      }
      return path4;
    }
    function arrayToRegexp(paths, keys, options) {
      var parts = paths.map(function(path4) {
        return pathToRegexp2(path4, keys, options).source;
      });
      return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
    }
    function stringToRegexp(path4, keys, options) {
      return tokensToRegexp(parse2(path4, options), keys, options);
    }
    function tokensToRegexp(tokens, keys, options) {
      if (options === void 0) {
        options = {};
      }
      var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
        return x;
      } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
      var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
      var delimiterRe = "[".concat(escapeString(delimiter), "]");
      var route4 = start ? "^" : "";
      for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
          route4 += escapeString(encode(token));
        } else {
          var prefix = escapeString(encode(token.prefix));
          var suffix = escapeString(encode(token.suffix));
          if (token.pattern) {
            if (keys)
              keys.push(token);
            if (prefix || suffix) {
              if (token.modifier === "+" || token.modifier === "*") {
                var mod = token.modifier === "*" ? "?" : "";
                route4 += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
              } else {
                route4 += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
              }
            } else {
              if (token.modifier === "+" || token.modifier === "*") {
                route4 += "((?:".concat(token.pattern, ")").concat(token.modifier, ")");
              } else {
                route4 += "(".concat(token.pattern, ")").concat(token.modifier);
              }
            }
          } else {
            route4 += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
          }
        }
      }
      if (end) {
        if (!strict)
          route4 += "".concat(delimiterRe, "?");
        route4 += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
      } else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
        if (!strict) {
          route4 += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
        }
        if (!isEndDelimited) {
          route4 += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
        }
      }
      return new RegExp(route4, flags(options));
    }
    exports2.tokensToRegexp = tokensToRegexp;
    function pathToRegexp2(path4, keys, options) {
      if (path4 instanceof RegExp)
        return regexpToRegexp(path4, keys);
      if (Array.isArray(path4))
        return arrayToRegexp(path4, keys, options);
      return stringToRegexp(path4, keys, options);
    }
    exports2.pathToRegexp = pathToRegexp2;
  }
});

// ../frugal/node_modules/@vercel/kv/dist/index.js
var import_redis = __toESM(require_nodejs(), 1);
var _kv = null;
process.env.UPSTASH_DISABLE_TELEMETRY = "1";
var VercelKV = class extends import_redis.Redis {
  // This API is based on https://github.com/redis/node-redis#scan-iterator which is not supported in @upstash/redis
  /**
   * Same as `scan` but returns an AsyncIterator to allow iteration via `for await`.
   */
  async *scanIterator(options) {
    let cursor = 0;
    let keys;
    do {
      [cursor, keys] = await this.scan(cursor, options);
      for (const key of keys) {
        yield key;
      }
    } while (cursor !== 0);
  }
  /**
   * Same as `hscan` but returns an AsyncIterator to allow iteration via `for await`.
   */
  async *hscanIterator(key, options) {
    let cursor = 0;
    let items;
    do {
      [cursor, items] = await this.hscan(key, cursor, options);
      for (const item of items) {
        yield item;
      }
    } while (cursor !== 0);
  }
  /**
   * Same as `sscan` but returns an AsyncIterator to allow iteration via `for await`.
   */
  async *sscanIterator(key, options) {
    let cursor = 0;
    let items;
    do {
      [cursor, items] = await this.sscan(key, cursor, options);
      for (const item of items) {
        yield item;
      }
    } while (cursor !== 0);
  }
  /**
   * Same as `zscan` but returns an AsyncIterator to allow iteration via `for await`.
   */
  async *zscanIterator(key, options) {
    let cursor = 0;
    let items;
    do {
      [cursor, items] = await this.zscan(key, cursor, options);
      for (const item of items) {
        yield item;
      }
    } while (cursor !== 0);
  }
};
function createClient(config3) {
  return new VercelKV({
    // The Next.js team recommends no value or `default` for fetch requests's `cache` option
    // upstash/redis defaults to `no-store`, so we enforce `default`
    cache: "default",
    ...config3
  });
}
var src_default = new Proxy(
  {},
  {
    get(target, prop, receiver) {
      if (prop === "then" || prop === "parse") {
        return Reflect.get(target, prop, receiver);
      }
      if (!_kv) {
        if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) {
          throw new Error(
            "@vercel/kv: Missing required environment variables KV_REST_API_URL and KV_REST_API_TOKEN"
          );
        }
        console.warn(
          '\x1B[33m"The default export has been moved to a named export and it will be removed in version 1, change to import { kv }\x1B[0m"'
        );
        _kv = createClient({
          url: process.env.KV_REST_API_URL,
          token: process.env.KV_REST_API_TOKEN
        });
      }
      return Reflect.get(_kv, prop);
    }
  }
);
var kv = new Proxy(
  {},
  {
    get(target, prop) {
      if (!_kv) {
        if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) {
          throw new Error(
            "@vercel/kv: Missing required environment variables KV_REST_API_URL and KV_REST_API_TOKEN"
          );
        }
        _kv = createClient({
          url: process.env.KV_REST_API_URL,
          token: process.env.KV_REST_API_TOKEN
        });
      }
      return Reflect.get(_kv, prop);
    }
  }
);

// ../frugal/packages/frugal/src/page/GenerationResponse.js
var webStream = __toESM(require("node:stream/web"), 1);

// ../frugal/packages/frugal/src/utils/http/cookies.js
var import_cookie = __toESM(require_cookie(), 1);
function setCookie(headers, cookie) {
  const value = cookieToString(cookie);
  if (value !== "") {
    headers.append("Set-Cookie", value);
  }
}
function getCookies(headers) {
  const cookie = headers.get("Cookie");
  if (cookie !== null) {
    return (0, import_cookie.parse)(cookie);
  }
  return {};
}
function cookieToString(cookie) {
  return (0, import_cookie.serialize)(cookie.name, cookie.value, {
    ...cookie,
    expires: cookie.expires === void 0 ? void 0 : new Date(cookie.expires)
  });
}

// ../frugal/packages/frugal/src/utils/jsonValue.js
function hashableJsonValue(value, visited = []) {
  if (value === void 0 || value === null || typeof value === "number" || typeof value === "string" || typeof value === "boolean") {
    return value;
  }
  let ref = -1;
  for (let i = 0; i < visited.length; i++) {
    const entry = visited[i];
    if (entry === value) {
      ref = i;
      break;
    }
  }
  if (ref !== -1) {
    return [2, ref];
  }
  visited.push(value);
  if (Array.isArray(value)) {
    return [0, value.map((entry) => hashableJsonValue(entry, visited))];
  }
  if (!isLiteralObject(value)) {
    throw new HashableJsonError(`Can't handle type "${typeof value}" in JsonValue`);
  }
  return [
    1,
    Object.keys(value).sort().map((key) => {
      return (
        /** @type {[string, _type.HashableJsonValue]} */
        [
          key,
          hashableJsonValue(value[key], visited)
        ]
      );
    })
  ];
}
function isLiteralObject(value) {
  return Object.is(Object.getPrototypeOf(value), Object.prototype) && Object.is(value.constructor, Object);
}
var HashableJsonError = class extends Error {
};

// ../frugal/packages/frugal/src/page/PageResponse.js
var FORCE_GENERATE_COOKIE = "__frugal_force_generate";
var BaseResponse = class {
  /** @type {Headers} */
  #headers;
  /** @type {_type.ResponseInit} */
  #init;
  /** @param {_type.ResponseInit} [init] */
  constructor(init = {}) {
    this.#init = init;
    this.#headers = new Headers(this.#init.headers);
    if (this.#init.forceDynamic) {
      setCookie(this.#headers, {
        httpOnly: true,
        name: FORCE_GENERATE_COOKIE,
        value: "true"
      });
    }
  }
  get headers() {
    return this.#headers;
  }
  get status() {
    return this.#init.status ?? 200;
  }
};
var DataResponse = class extends BaseResponse {
  /** @type {DATA} */
  #data;
  /**
   * @param {DATA} data
   * @param {_type.ResponseInit} [init]
   */
  constructor(data, init) {
    super(init);
    this.#data = data;
  }
  /** @returns {"data"} */
  get type() {
    return "data";
  }
  get data() {
    return this.#data;
  }
  get dataHash() {
    return JSON.stringify(hashableJsonValue(this.#data)) ?? "";
  }
};

// ../frugal/packages/frugal/src/utils/hash.js
var import_imurmurhash = __toESM(require_imurmurhash(), 1);
var DECODER = new TextDecoder();
var Hasher = class {
  /** @type {ReturnType<typeof murmur>} */
  #hasher;
  /** @param {ReturnType<typeof murmur>} hasher */
  constructor(hasher) {
    this.#hasher = hasher;
  }
  /**
   * @param {Uint8Array | string} data
   * @returns {Hasher}
   */
  update(data) {
    this.#hasher.hash(typeof data === "string" ? data : DECODER.decode(data));
    return this;
  }
  /** @returns {string} */
  digest() {
    return this.#hasher.result().toString(36).toUpperCase();
  }
};
function create() {
  return new Hasher(new import_imurmurhash.default());
}

// ../frugal/packages/frugal/src/utils/readableStream.js
function toReadableStream(stream3) {
  return (
    /** @type {any} */
    stream3
  );
}
function fromReadableStream(stream3) {
  return (
    /** @type {any} */
    stream3
  );
}
async function readStringStream(stream3) {
  const chunks = [];
  for await (const chunk of stream3) {
    chunks.push(chunk);
  }
  return chunks.join("");
}
var TextLineStream = class extends TransformStream {
  #buf = "";
  constructor() {
    super({
      transform: (chunk, controller) => {
        this.#handle(chunk, controller);
      },
      flush: (controller) => {
        if (this.#buf.length > 0) {
          controller.enqueue(this.#buf);
        }
      }
    });
  }
  /**
   * @param {string} chunk
   * @param {webstream.TransformStreamDefaultController<string>} controller
   */
  #handle(chunk, controller) {
    chunk = this.#buf + chunk;
    for (; ; ) {
      const lfIndex = chunk.indexOf("\n");
      if (lfIndex !== -1) {
        let crOrLfIndex = lfIndex;
        if (chunk[lfIndex - 1] === "\r") {
          crOrLfIndex--;
        }
        controller.enqueue(chunk.slice(0, crOrLfIndex));
        chunk = chunk.slice(lfIndex + 1);
        continue;
      }
      break;
    }
    this.#buf = chunk;
  }
};

// ../frugal/packages/frugal/src/page/GenerationResponse.js
var LiveGenerationResponse = class {
  /** @type {pageResponse.PageResponse<DATA>} */
  #pageResponse;
  /** @type {_type.Init<DATA>} */
  #init;
  /** @type {string | undefined} */
  #hash;
  /** @type {string | webStream.ReadableStream<string> | undefined} */
  #body;
  /** @type {_type.SerializedGenerationResponse | undefined} */
  #serialized;
  /**
   * @param {pageResponse.PageResponse<DATA>} pageResponse
   * @param {_type.Init<DATA>} init
   */
  constructor(pageResponse, init) {
    this.#init = init;
    this.#pageResponse = pageResponse;
  }
  get path() {
    return this.#init.path;
  }
  get hash() {
    if (this.#hash === void 0) {
      this.#hash = this.#computeHash();
    }
    return this.#hash;
  }
  get body() {
    if (this.#body === void 0) {
      this.#body = this.#pageResponse.type === "data" ? this.#init.render(this.#pageResponse.data) : void 0;
    }
    return this.#body;
  }
  get headers() {
    return this.#pageResponse.headers;
  }
  get status() {
    return this.#pageResponse.status;
  }
  async serialize() {
    if (this.#serialized === void 0) {
      const bodyString = this.body instanceof webStream.ReadableStream ? await readStringStream(this.body) : this.body;
      this.#serialized = {
        path: this.#init.path,
        hash: this.hash,
        body: bodyString,
        headers: Array.from(this.headers.entries()),
        status: this.#pageResponse.status
      };
    }
    return this.#serialized;
  }
  #computeHash() {
    return create().update(this.#pageResponse.dataHash).update(this.#init.path).update(this.#init.moduleHash).update(this.#init.configHash).digest();
  }
};
function toResponse(response) {
  const headers = new Headers(response.headers);
  const body = response.body;
  if (!headers.has("content-type")) {
    headers.set("Content-Type", "text/html; charset=utf-8");
  }
  if (!headers.has("etag") && typeof body === "string") {
    headers.set("Etag", `W/"${create().update(body).digest()}"`);
  }
  return new Response(
    typeof body === "string" ? body : body === void 0 ? void 0 : toReadableStream(body),
    {
      headers,
      status: response.status
    }
  );
}

// ../frugal/packages/frugal/src/utils/fs.js
var fs = __toESM(require("node:fs"), 1);
var stream = __toESM(require("node:stream"), 1);
async function createReadableStream(path4) {
  try {
    return await Promise.resolve(stream.Readable.toWeb(fs.createReadStream(path4)));
  } catch (error) {
    throw mapError(error);
  }
}
async function stat(path4) {
  try {
    return await fs.promises.stat(path4);
  } catch (error) {
    throw mapError(error);
  }
}
function mapError(error) {
  if (error.code === "ENOENT") {
    return new NotFound(error.message);
  }
  if (error.code === "EEXIST") {
    return new AlreadyExists(error.message);
  }
  return error;
}
var AlreadyExists = class extends Error {
};
var NotFound = class extends Error {
};

// ../frugal/node_modules/chalk/source/vendor/ansi-styles/index.js
var ANSI_BACKGROUND_OFFSET = 10;
var wrapAnsi16 = (offset = 0) => (code) => `\x1B[${code + offset}m`;
var wrapAnsi256 = (offset = 0) => (code) => `\x1B[${38 + offset};5;${code}m`;
var wrapAnsi16m = (offset = 0) => (red, green, blue) => `\x1B[${38 + offset};2;${red};${green};${blue}m`;
var styles = {
  modifier: {
    reset: [0, 0],
    // 21 isn't widely supported and 22 does the same thing
    bold: [1, 22],
    dim: [2, 22],
    italic: [3, 23],
    underline: [4, 24],
    overline: [53, 55],
    inverse: [7, 27],
    hidden: [8, 28],
    strikethrough: [9, 29]
  },
  color: {
    black: [30, 39],
    red: [31, 39],
    green: [32, 39],
    yellow: [33, 39],
    blue: [34, 39],
    magenta: [35, 39],
    cyan: [36, 39],
    white: [37, 39],
    // Bright color
    blackBright: [90, 39],
    gray: [90, 39],
    // Alias of `blackBright`
    grey: [90, 39],
    // Alias of `blackBright`
    redBright: [91, 39],
    greenBright: [92, 39],
    yellowBright: [93, 39],
    blueBright: [94, 39],
    magentaBright: [95, 39],
    cyanBright: [96, 39],
    whiteBright: [97, 39]
  },
  bgColor: {
    bgBlack: [40, 49],
    bgRed: [41, 49],
    bgGreen: [42, 49],
    bgYellow: [43, 49],
    bgBlue: [44, 49],
    bgMagenta: [45, 49],
    bgCyan: [46, 49],
    bgWhite: [47, 49],
    // Bright color
    bgBlackBright: [100, 49],
    bgGray: [100, 49],
    // Alias of `bgBlackBright`
    bgGrey: [100, 49],
    // Alias of `bgBlackBright`
    bgRedBright: [101, 49],
    bgGreenBright: [102, 49],
    bgYellowBright: [103, 49],
    bgBlueBright: [104, 49],
    bgMagentaBright: [105, 49],
    bgCyanBright: [106, 49],
    bgWhiteBright: [107, 49]
  }
};
var modifierNames = Object.keys(styles.modifier);
var foregroundColorNames = Object.keys(styles.color);
var backgroundColorNames = Object.keys(styles.bgColor);
var colorNames = [...foregroundColorNames, ...backgroundColorNames];
function assembleStyles() {
  const codes = /* @__PURE__ */ new Map();
  for (const [groupName, group] of Object.entries(styles)) {
    for (const [styleName, style] of Object.entries(group)) {
      styles[styleName] = {
        open: `\x1B[${style[0]}m`,
        close: `\x1B[${style[1]}m`
      };
      group[styleName] = styles[styleName];
      codes.set(style[0], style[1]);
    }
    Object.defineProperty(styles, groupName, {
      value: group,
      enumerable: false
    });
  }
  Object.defineProperty(styles, "codes", {
    value: codes,
    enumerable: false
  });
  styles.color.close = "\x1B[39m";
  styles.bgColor.close = "\x1B[49m";
  styles.color.ansi = wrapAnsi16();
  styles.color.ansi256 = wrapAnsi256();
  styles.color.ansi16m = wrapAnsi16m();
  styles.bgColor.ansi = wrapAnsi16(ANSI_BACKGROUND_OFFSET);
  styles.bgColor.ansi256 = wrapAnsi256(ANSI_BACKGROUND_OFFSET);
  styles.bgColor.ansi16m = wrapAnsi16m(ANSI_BACKGROUND_OFFSET);
  Object.defineProperties(styles, {
    rgbToAnsi256: {
      value(red, green, blue) {
        if (red === green && green === blue) {
          if (red < 8) {
            return 16;
          }
          if (red > 248) {
            return 231;
          }
          return Math.round((red - 8) / 247 * 24) + 232;
        }
        return 16 + 36 * Math.round(red / 255 * 5) + 6 * Math.round(green / 255 * 5) + Math.round(blue / 255 * 5);
      },
      enumerable: false
    },
    hexToRgb: {
      value(hex) {
        const matches = /[a-f\d]{6}|[a-f\d]{3}/i.exec(hex.toString(16));
        if (!matches) {
          return [0, 0, 0];
        }
        let [colorString] = matches;
        if (colorString.length === 3) {
          colorString = [...colorString].map((character) => character + character).join("");
        }
        const integer = Number.parseInt(colorString, 16);
        return [
          /* eslint-disable no-bitwise */
          integer >> 16 & 255,
          integer >> 8 & 255,
          integer & 255
          /* eslint-enable no-bitwise */
        ];
      },
      enumerable: false
    },
    hexToAnsi256: {
      value: (hex) => styles.rgbToAnsi256(...styles.hexToRgb(hex)),
      enumerable: false
    },
    ansi256ToAnsi: {
      value(code) {
        if (code < 8) {
          return 30 + code;
        }
        if (code < 16) {
          return 90 + (code - 8);
        }
        let red;
        let green;
        let blue;
        if (code >= 232) {
          red = ((code - 232) * 10 + 8) / 255;
          green = red;
          blue = red;
        } else {
          code -= 16;
          const remainder = code % 36;
          red = Math.floor(code / 36) / 5;
          green = Math.floor(remainder / 6) / 5;
          blue = remainder % 6 / 5;
        }
        const value = Math.max(red, green, blue) * 2;
        if (value === 0) {
          return 30;
        }
        let result = 30 + (Math.round(blue) << 2 | Math.round(green) << 1 | Math.round(red));
        if (value === 2) {
          result += 60;
        }
        return result;
      },
      enumerable: false
    },
    rgbToAnsi: {
      value: (red, green, blue) => styles.ansi256ToAnsi(styles.rgbToAnsi256(red, green, blue)),
      enumerable: false
    },
    hexToAnsi: {
      value: (hex) => styles.ansi256ToAnsi(styles.hexToAnsi256(hex)),
      enumerable: false
    }
  });
  return styles;
}
var ansiStyles = assembleStyles();
var ansi_styles_default = ansiStyles;

// ../frugal/node_modules/chalk/source/vendor/supports-color/index.js
var import_node_process = __toESM(require("node:process"), 1);
var import_node_os = __toESM(require("node:os"), 1);
var import_node_tty = __toESM(require("node:tty"), 1);
function hasFlag(flag, argv = globalThis.Deno ? globalThis.Deno.args : import_node_process.default.argv) {
  const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
  const position = argv.indexOf(prefix + flag);
  const terminatorPosition = argv.indexOf("--");
  return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
}
var { env } = import_node_process.default;
var flagForceColor;
if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false") || hasFlag("color=never")) {
  flagForceColor = 0;
} else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
  flagForceColor = 1;
}
function envForceColor() {
  if ("FORCE_COLOR" in env) {
    if (env.FORCE_COLOR === "true") {
      return 1;
    }
    if (env.FORCE_COLOR === "false") {
      return 0;
    }
    return env.FORCE_COLOR.length === 0 ? 1 : Math.min(Number.parseInt(env.FORCE_COLOR, 10), 3);
  }
}
function translateLevel(level) {
  if (level === 0) {
    return false;
  }
  return {
    level,
    hasBasic: true,
    has256: level >= 2,
    has16m: level >= 3
  };
}
function _supportsColor(haveStream, { streamIsTTY, sniffFlags = true } = {}) {
  const noFlagForceColor = envForceColor();
  if (noFlagForceColor !== void 0) {
    flagForceColor = noFlagForceColor;
  }
  const forceColor = sniffFlags ? flagForceColor : noFlagForceColor;
  if (forceColor === 0) {
    return 0;
  }
  if (sniffFlags) {
    if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
      return 3;
    }
    if (hasFlag("color=256")) {
      return 2;
    }
  }
  if ("TF_BUILD" in env && "AGENT_NAME" in env) {
    return 1;
  }
  if (haveStream && !streamIsTTY && forceColor === void 0) {
    return 0;
  }
  const min = forceColor || 0;
  if (env.TERM === "dumb") {
    return min;
  }
  if (import_node_process.default.platform === "win32") {
    const osRelease = import_node_os.default.release().split(".");
    if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
      return Number(osRelease[2]) >= 14931 ? 3 : 2;
    }
    return 1;
  }
  if ("CI" in env) {
    if ("GITHUB_ACTIONS" in env || "GITEA_ACTIONS" in env) {
      return 3;
    }
    if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "BUILDKITE", "DRONE"].some((sign) => sign in env) || env.CI_NAME === "codeship") {
      return 1;
    }
    return min;
  }
  if ("TEAMCITY_VERSION" in env) {
    return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
  }
  if (env.COLORTERM === "truecolor") {
    return 3;
  }
  if (env.TERM === "xterm-kitty") {
    return 3;
  }
  if ("TERM_PROGRAM" in env) {
    const version = Number.parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
    switch (env.TERM_PROGRAM) {
      case "iTerm.app": {
        return version >= 3 ? 3 : 2;
      }
      case "Apple_Terminal": {
        return 2;
      }
    }
  }
  if (/-256(color)?$/i.test(env.TERM)) {
    return 2;
  }
  if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
    return 1;
  }
  if ("COLORTERM" in env) {
    return 1;
  }
  return min;
}
function createSupportsColor(stream3, options = {}) {
  const level = _supportsColor(stream3, {
    streamIsTTY: stream3 && stream3.isTTY,
    ...options
  });
  return translateLevel(level);
}
var supportsColor = {
  stdout: createSupportsColor({ isTTY: import_node_tty.default.isatty(1) }),
  stderr: createSupportsColor({ isTTY: import_node_tty.default.isatty(2) })
};
var supports_color_default = supportsColor;

// ../frugal/node_modules/chalk/source/utilities.js
function stringReplaceAll(string, substring, replacer) {
  let index = string.indexOf(substring);
  if (index === -1) {
    return string;
  }
  const substringLength = substring.length;
  let endIndex = 0;
  let returnValue = "";
  do {
    returnValue += string.slice(endIndex, index) + substring + replacer;
    endIndex = index + substringLength;
    index = string.indexOf(substring, endIndex);
  } while (index !== -1);
  returnValue += string.slice(endIndex);
  return returnValue;
}
function stringEncaseCRLFWithFirstIndex(string, prefix, postfix, index) {
  let endIndex = 0;
  let returnValue = "";
  do {
    const gotCR = string[index - 1] === "\r";
    returnValue += string.slice(endIndex, gotCR ? index - 1 : index) + prefix + (gotCR ? "\r\n" : "\n") + postfix;
    endIndex = index + 1;
    index = string.indexOf("\n", endIndex);
  } while (index !== -1);
  returnValue += string.slice(endIndex);
  return returnValue;
}

// ../frugal/node_modules/chalk/source/index.js
var { stdout: stdoutColor, stderr: stderrColor } = supports_color_default;
var GENERATOR = Symbol("GENERATOR");
var STYLER = Symbol("STYLER");
var IS_EMPTY = Symbol("IS_EMPTY");
var levelMapping = [
  "ansi",
  "ansi",
  "ansi256",
  "ansi16m"
];
var styles2 = /* @__PURE__ */ Object.create(null);
var applyOptions = (object, options = {}) => {
  if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) {
    throw new Error("The `level` option should be an integer from 0 to 3");
  }
  const colorLevel = stdoutColor ? stdoutColor.level : 0;
  object.level = options.level === void 0 ? colorLevel : options.level;
};
var chalkFactory = (options) => {
  const chalk2 = (...strings) => strings.join(" ");
  applyOptions(chalk2, options);
  Object.setPrototypeOf(chalk2, createChalk.prototype);
  return chalk2;
};
function createChalk(options) {
  return chalkFactory(options);
}
Object.setPrototypeOf(createChalk.prototype, Function.prototype);
for (const [styleName, style] of Object.entries(ansi_styles_default)) {
  styles2[styleName] = {
    get() {
      const builder = createBuilder(this, createStyler(style.open, style.close, this[STYLER]), this[IS_EMPTY]);
      Object.defineProperty(this, styleName, { value: builder });
      return builder;
    }
  };
}
styles2.visible = {
  get() {
    const builder = createBuilder(this, this[STYLER], true);
    Object.defineProperty(this, "visible", { value: builder });
    return builder;
  }
};
var getModelAnsi = (model, level, type2, ...arguments_) => {
  if (model === "rgb") {
    if (level === "ansi16m") {
      return ansi_styles_default[type2].ansi16m(...arguments_);
    }
    if (level === "ansi256") {
      return ansi_styles_default[type2].ansi256(ansi_styles_default.rgbToAnsi256(...arguments_));
    }
    return ansi_styles_default[type2].ansi(ansi_styles_default.rgbToAnsi(...arguments_));
  }
  if (model === "hex") {
    return getModelAnsi("rgb", level, type2, ...ansi_styles_default.hexToRgb(...arguments_));
  }
  return ansi_styles_default[type2][model](...arguments_);
};
var usedModels = ["rgb", "hex", "ansi256"];
for (const model of usedModels) {
  styles2[model] = {
    get() {
      const { level } = this;
      return function(...arguments_) {
        const styler = createStyler(getModelAnsi(model, levelMapping[level], "color", ...arguments_), ansi_styles_default.color.close, this[STYLER]);
        return createBuilder(this, styler, this[IS_EMPTY]);
      };
    }
  };
  const bgModel = "bg" + model[0].toUpperCase() + model.slice(1);
  styles2[bgModel] = {
    get() {
      const { level } = this;
      return function(...arguments_) {
        const styler = createStyler(getModelAnsi(model, levelMapping[level], "bgColor", ...arguments_), ansi_styles_default.bgColor.close, this[STYLER]);
        return createBuilder(this, styler, this[IS_EMPTY]);
      };
    }
  };
}
var proto = Object.defineProperties(() => {
}, {
  ...styles2,
  level: {
    enumerable: true,
    get() {
      return this[GENERATOR].level;
    },
    set(level) {
      this[GENERATOR].level = level;
    }
  }
});
var createStyler = (open, close, parent) => {
  let openAll;
  let closeAll;
  if (parent === void 0) {
    openAll = open;
    closeAll = close;
  } else {
    openAll = parent.openAll + open;
    closeAll = close + parent.closeAll;
  }
  return {
    open,
    close,
    openAll,
    closeAll,
    parent
  };
};
var createBuilder = (self2, _styler, _isEmpty) => {
  const builder = (...arguments_) => applyStyle(builder, arguments_.length === 1 ? "" + arguments_[0] : arguments_.join(" "));
  Object.setPrototypeOf(builder, proto);
  builder[GENERATOR] = self2;
  builder[STYLER] = _styler;
  builder[IS_EMPTY] = _isEmpty;
  return builder;
};
var applyStyle = (self2, string) => {
  if (self2.level <= 0 || !string) {
    return self2[IS_EMPTY] ? "" : string;
  }
  let styler = self2[STYLER];
  if (styler === void 0) {
    return string;
  }
  const { openAll, closeAll } = styler;
  if (string.includes("\x1B")) {
    while (styler !== void 0) {
      string = stringReplaceAll(string, styler.close, styler.open);
      styler = styler.parent;
    }
  }
  const lfIndex = string.indexOf("\n");
  if (lfIndex !== -1) {
    string = stringEncaseCRLFWithFirstIndex(string, closeAll, openAll, lfIndex);
  }
  return openAll + string + closeAll;
};
Object.defineProperties(createChalk.prototype, styles2);
var chalk = createChalk();
var chalkStderr = createChalk({ level: stderrColor ? stderrColor.level : 0 });
var source_default = chalk;

// ../frugal/packages/frugal/src/utils/log.js
var LEVELS = (
  /** @type {const} */
  {
    verbose: 0,
    debug: 10,
    info: 20,
    warning: 30,
    error: 40,
    silent: Infinity
  }
);
var GLOBAL_CONFIG = (
  /** @type {_type.LogConfig} */
  {
    level: "info",
    scopes: {},
    timeFormatter: new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone: "UTC",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      fractionalSecondDigits: 3,
      timeZoneName: "short"
    }),
    dateFormatter: new Intl.DateTimeFormat("fr-FR", { dateStyle: "short" })
  }
);
function config(config3 = {}) {
  Object.assign(GLOBAL_CONFIG, config3);
}
function log(messageOrError, { scope = "???", level = messageOrError instanceof Error ? "error" : "info" } = {}) {
  if (!(level in LEVELS) || /** @type {any} */
  level === "silent") {
    return;
  }
  const currentLevel = GLOBAL_CONFIG.scopes[scope] ?? GLOBAL_CONFIG.level;
  if (LEVELS[currentLevel] > LEVELS[level]) {
    return;
  }
  const now = /* @__PURE__ */ new Date();
  const date = source_default.gray(
    `${GLOBAL_CONFIG.dateFormatter.format(now)} ${GLOBAL_CONFIG.timeFormatter.format(now)}`
  );
  const message = `${date} ${formatLevel(level)} ${formatScope(scope, level)} ${formatMessage(
    messageOrError,
    level
  )}`;
  console.log(message);
}
function formatMessage(messageOrError, level) {
  const message = formatMessageContent(messageOrError);
  switch (level) {
    case "warning":
      return source_default.yellow(message);
    case "error":
      return source_default.redBright(message);
    case "debug":
    case "verbose": {
      return source_default.gray(message);
    }
    default:
      return message;
  }
}
function formatMessageContent(messageOrError) {
  if (typeof messageOrError === "function") {
    return formatMessageContent(messageOrError());
  }
  if (messageOrError instanceof Error) {
    return formatError(messageOrError);
  }
  return String(messageOrError);
}
function formatError(error) {
  const stack = error.stack ?? `${error.name} : ${error.message}
    [no stack]`;
  const msg = [stack];
  if (error.cause) {
    msg.push(`
caused by ${formatCause(error.cause)}`);
  }
  return msg.join("\n");
}
function formatCause(cause) {
  if (cause instanceof Error) {
    return formatError(cause);
  }
  return String(cause);
}
function formatScope(scope, level) {
  const formattedScope = source_default.bold(` ${scope} >`);
  switch (level) {
    case "warning":
      return source_default.yellow(formattedScope);
    case "error":
      return source_default.redBright(formattedScope);
    case "debug":
    case "verbose": {
      return source_default.gray(formattedScope);
    }
    default:
      return formattedScope;
  }
}
function formatLevel(level) {
  const formattedLevel = level.toUpperCase().padEnd(7);
  switch (level) {
    case "debug":
    case "verbose": {
      return source_default.bgGray(
        `${source_default.gray("[")}${source_default.black(formattedLevel)}${source_default.gray("]")}`
      );
    }
    case "info": {
      return source_default.bgWhiteBright(
        `${source_default.whiteBright("[")}${source_default.black(formattedLevel)}${source_default.whiteBright("]")}`
      );
    }
    case "warning": {
      return source_default.bgYellowBright(
        `${source_default.yellowBright("[")}${source_default.black(formattedLevel)}${source_default.yellowBright(
          "]"
        )}`
      );
    }
    case "error": {
      return source_default.bgRedBright(
        `${source_default.redBright("[")}${source_default.black(formattedLevel)}${source_default.redBright("]")}`
      );
    }
  }
}

// ../frugal/packages/frugal/src/Config.js
var path = __toESM(require("node:path"), 1);
var url = __toESM(require("node:url"), 1);
var FrugalConfig = class {
  /** @type {_type.Config} */
  #config;
  /** @type {FrugalServerConfig} */
  #serverConfig;
  /** @param {_type.Config} config */
  constructor(config3) {
    this.#config = config3;
    config(config3.log);
    this.#serverConfig = new FrugalServerConfig(config3.server ?? {});
  }
  /**
   * @type {_type.Config}
   */
  get runtime() {
    return {
      ...this.#config,
      plugins: [],
      exporter: void 0
    };
  }
  async validate() {
    try {
      await Promise.all(
        this.pages.map(async (page) => {
          try {
            return await stat(page);
          } catch (error) {
            if (error instanceof NotFound) {
              throw new ConfigError(
                `Page module "${path.relative(this.rootDir, page)}" not found`,
                { cause: error }
              );
            }
            throw error;
          }
        })
      );
      if (this.#config.exporter === void 0)
        [
          log(
            "No exporter configured, build won't output a ready-to-deploy package. To ignore this warning set 'exporter: false' on your config.",
            {
              scope: "Config",
              level: "warning"
            }
          )
        ];
    } catch (error) {
      log(error, { scope: "Config" });
      throw error;
    }
  }
  get plugins() {
    return this.#config.plugins ?? [];
  }
  get self() {
    return url.fileURLToPath(this.#config.self);
  }
  get rootDir() {
    return path.dirname(this.self);
  }
  get cleanAllOutDir() {
    return this.#config.cleanAllOutDir ?? false;
  }
  get pages() {
    return this.#config.pages.map((page) => path.resolve(this.rootDir, page));
  }
  get outDir() {
    return path.resolve(this.rootDir, this.#config.outdir ?? "dist/");
  }
  get publicDir() {
    return path.resolve(this.outDir, "public/");
  }
  get staticDir() {
    return path.resolve(this.rootDir, this.#config.staticDir ?? "static/");
  }
  get tempDir() {
    return path.resolve(this.outDir, ".temp/");
  }
  get buildDir() {
    return path.resolve(this.tempDir, "build/");
  }
  get cacheDir() {
    return path.resolve(this.outDir, ".cache/");
  }
  get buildCacheDir() {
    return path.resolve(this.cacheDir, "build-cache/");
  }
  get esbuildOptions() {
    return this.#config.esbuild;
  }
  get exporter() {
    return typeof this.#config.exporter === "boolean" ? void 0 : this.#config.exporter;
  }
  /**
   * @param {string} specifier
   * @returns {string}
   */
  resolve(specifier) {
    return path.resolve(this.rootDir, specifier);
  }
  get server() {
    return this.#serverConfig;
  }
};
var FrugalServerConfig = class {
  /** @type {_type.ServerConfig} */
  #config;
  /**
   * @param {_type.ServerConfig} config
   */
  constructor(config3) {
    this.#config = config3;
  }
  get secure() {
    return this.#config.secure ?? false;
  }
  get port() {
    return this.#config.port ?? 8e3;
  }
  get cryptoKey() {
    return this.#config.cryptoKey;
  }
  get session() {
    return this.#config.session;
  }
  get middlewares() {
    return this.#config.middlewares ?? [];
  }
  get csrf() {
    return this.#config.csrf;
  }
};
var ConfigError = class extends Error {
};

// ../frugal/packages/exporter-vercel/src/KvStorage.js
var KvStorage = class {
  /**
   * @param {string} path
   * @param {exporter.SerializedGenerationResponse} response
   * @returns {Promise<void>}
   */
  async set(path4, response) {
    await kv.set(path4, response);
  }
  /**
   * @param {string} path
   * @returns {Promise<exporter.SerializedGenerationResponse|undefined>}
   */
  async get(path4) {
    const data = await kv.get(path4);
    if (data === null) {
      return void 0;
    }
    return data;
  }
  /**
   * @param {string} path
   * @returns {Promise<void>}
   */
  async delete(path4) {
    await kv.del(path4);
  }
};

// ../frugal/packages/frugal/src/page/Page.js
var pathToRegexp = __toESM(require_dist(), 1);
var BasePage = class {
  /** @type {string} */
  #entrypoint;
  /** @type {DESCRIPTOR} */
  #descriptor;
  /** @type {pathToRegexp.PathFunction<pathObject.PathObject<PATH>>} */
  #urlCompiler;
  /** @type {pathToRegexp.MatchFunction<pathObject.PathObject<PATH>>} */
  #urlMatcher;
  /** @type {string} */
  #moduleHash;
  /**
   * @param {DESCRIPTOR} descriptor
   * @param {string} moduleHash
   * @param {string} entrypoint
   */
  constructor(descriptor, moduleHash, entrypoint) {
    this.#descriptor = descriptor;
    try {
      this.#urlCompiler = pathToRegexp.compile(this.#descriptor.route);
      this.#urlMatcher = pathToRegexp.match(this.#descriptor.route);
    } catch (error) {
      throw new PageError(`Malformed route pattern "${this.route}"`, { cause: error });
    }
    this.#moduleHash = moduleHash;
    this.#entrypoint = entrypoint;
  }
  /**
   * @param {descriptor.RenderContext<PATH, DATA>} context
   * @returns {string | webStream.ReadableStream<string>}
   */
  render(context) {
    log(
      `Rendering page "${this.entrypoint}" (${this.moduleHash}) with route "${this.route}" for params "${JSON.stringify(context.params)}"`,
      {
        scope: "Page",
        level: "verbose"
      }
    );
    try {
      return this.#descriptor.render(context);
    } catch (error) {
      throw new PageError(
        `Error while rendering route "${this.route}" for params "${JSON.stringify(
          context.params
        )}"`,
        { cause: error }
      );
    }
  }
  /**
   * @param {descriptor.GenerateContext<PATH>} context
   * @returns {Promise<pageResponse.PageResponse<DATA>|undefined>}
   */
  async generate(context) {
    if (this.#descriptor.generate === void 0) {
      log(
        `generating default DataResponse object for page "${this.entrypoint}" (${this.moduleHash}) with route "${this.route}" with no "generate" function`,
        {
          scope: "Page",
          level: "verbose"
        }
      );
      return new DataResponse(
        /** @type {DATA} */
        {}
      );
    }
    log(
      `generating DataResponse object for page "${this.entrypoint}" (${this.moduleHash}) with route "${this.route}" for params "${JSON.stringify(context.params)}"`,
      {
        scope: "Page",
        level: "verbose"
      }
    );
    try {
      return await this.#descriptor.generate(context);
    } catch (error) {
      if (error instanceof PageError) {
        throw error;
      }
      throw new PageError(
        `Error while generating route "${this.route}" for params "${JSON.stringify(
          context.params
        )}"`,
        { cause: error }
      );
    }
  }
  get moduleHash() {
    return this.#moduleHash;
  }
  get entrypoint() {
    return this.#entrypoint;
  }
  /** @returns {PATH} */
  get route() {
    return this.#descriptor.route;
  }
  /**
   * @param {pathObject.PathObject<PATH>} path
   * @returns {string}
   */
  compile(path4) {
    log(
      `compiling route route "${this.route}" of page "${this.entrypoint}" (${this.moduleHash})  for params "${JSON.stringify(path4)}"`,
      {
        scope: "Page",
        level: "verbose"
      }
    );
    try {
      return this.#urlCompiler(path4);
    } catch (error) {
      throw new PageError(
        `Error while compiling route "${this.route}" for params "${JSON.stringify(path4)}"`,
        { cause: error }
      );
    }
  }
  /**
   * @param {string} path
   * @returns {pathToRegexp.Match<pathObject.PathObject<PATH>>}
   */
  match(path4) {
    log(
      `matching route route "${this.route}" of page "${this.entrypoint}" (${this.moduleHash})  for path "${path4}"`,
      {
        scope: "Page",
        level: "verbose"
      }
    );
    return this.#urlMatcher(path4);
  }
};
var DynamicPage = class extends BasePage {
  /** @type {DESCRIPTOR} */
  #descriptor;
  /**
   * @param {DESCRIPTOR} descriptor
   * @param {string} moduleHash
   * @param {string} entrypoint
   */
  constructor(descriptor, moduleHash, entrypoint) {
    super(descriptor, moduleHash, entrypoint);
    this.#descriptor = descriptor;
  }
  /** @type {"dynamic"} */
  get type() {
    return "dynamic";
  }
};
var StaticPage = class extends BasePage {
  /** @type {DESCRIPTOR} */
  #descriptor;
  /**
   * @param {DESCRIPTOR} descriptor
   * @param {string} moduleHash
   * @param {string} entrypoint
   */
  constructor(descriptor, moduleHash, entrypoint) {
    super(descriptor, moduleHash, entrypoint);
    this.#descriptor = descriptor;
  }
  get strictPaths() {
    return this.#descriptor.strictPaths ?? true;
  }
  /** @type {"static"} */
  get type() {
    return "static";
  }
  /**
   * @param {descriptor.BuildContext<PATH>} context
   * @returns {Promise<pageResponse.PageResponse<DATA> | undefined>}
   */
  async build(context) {
    if (this.#descriptor.build === void 0) {
      log(
        `building default DataResponse object for page "${this.entrypoint}" (${this.moduleHash}) with route "${this.route}" with no "build" function`,
        {
          scope: "Page",
          level: "verbose"
        }
      );
      return new DataResponse(
        /** @type {DATA} */
        {}
      );
    }
    log(
      `building DataResponse object for page "${this.entrypoint}" (${this.moduleHash}) with route "${this.route}" for params "${JSON.stringify(context.params)}"`,
      {
        scope: "Page",
        level: "verbose"
      }
    );
    try {
      return await this.#descriptor.build(context);
    } catch (error) {
      if (error instanceof PageError) {
        throw error;
      }
      throw new PageError(
        `Error while building route "${this.route}" for params "${JSON.stringify(
          context.params
        )}"`,
        { cause: error }
      );
    }
  }
  /**
   * @param {descriptor.GetBuildPathsContext} context
   * @returns {descriptor.PathList<PATH> | Promise<descriptor.PathList<PATH>>}
   */
  getBuildPaths(context) {
    if (this.#descriptor.getBuildPaths === void 0) {
      log(
        `building default path list for page "${this.entrypoint}" (${this.moduleHash}) with route "${this.route}" with no "getBuildPaths" function`,
        {
          scope: "Page",
          level: "verbose"
        }
      );
      return (
        /** @type {descriptor.PathList<PATH>} */
        [{}]
      );
    }
    log(
      `building path list for page "${this.entrypoint}" (${this.moduleHash}) with route "${this.route}"`,
      {
        scope: "Page",
        level: "verbose"
      }
    );
    try {
      return this.#descriptor.getBuildPaths(context);
    } catch (error) {
      throw new PageError(`Error while building path list for route "${this.route}"`, {
        cause: error
      });
    }
  }
};
function compile2({ entrypoint, moduleHash, pageDescriptor }) {
  log(`compile page "${entrypoint}" (${moduleHash})`, {
    scope: "Router",
    level: "debug"
  });
  if (typeof pageDescriptor === "object" && pageDescriptor !== null && pageDescriptor.type === "dynamic") {
    try {
      log(`compiling page descriptor "${entrypoint}" (${moduleHash}) as DynamicPage`, {
        scope: "Page",
        level: "verbose"
      });
      return new DynamicPage(pageDescriptor, moduleHash, entrypoint);
    } catch (error) {
      if (error instanceof PageError) {
        throw error;
      }
      throw new PageError(
        `Error while parsing descriptor "${entrypoint}": ${error.message}`,
        { cause: error }
      );
    }
  }
  try {
    log(`compiling page descriptor "${entrypoint}" (${moduleHash}) as StaticPage`, {
      scope: "Page",
      level: "verbose"
    });
    return new StaticPage(pageDescriptor, moduleHash, entrypoint);
  } catch (error) {
    if (error instanceof PageError) {
      throw error;
    }
    throw new PageError(`Error while parsing descriptor "${entrypoint}": ${error.message}`, {
      cause: error
    });
  }
}
var PageError = class extends Error {
};

// ../frugal/packages/frugal/src/page/Assets.js
var PageAssets = class {
  /** @type {(_type.BaseGlobalAsset<any>|_type.BasePageAsset<any>)[]} */
  #assets;
  /** @type {string} */
  #entrypoint;
  /**
   * @param {_type.Assets} assets
   * @param {string} entrypoint
   */
  constructor(assets2, entrypoint) {
    this.#assets = assets2;
    this.#entrypoint = entrypoint;
  }
  /**
   * @template {keyof _type.AssetTypes} TYPE
   * @param {TYPE} type
   * @returns {_type.AssetTypes[TYPE][]}
   */
  get(type2) {
    return this.#assets.filter(
      /** @returns {asset is _type.AssetTypes[TYPE]} */
      (asset) => {
        if (asset.scope === "global") {
          return asset.type === type2;
        }
        if (asset.scope === "page") {
          return asset.type === type2 && asset.entrypoint === this.#entrypoint;
        }
        return false;
      }
    );
  }
};

// ../frugal/packages/frugal/src/page/Producer.js
var Producer = class {
  /** @type {assets.PageAssets} */
  #assets;
  /** @type {page.Page} */
  #page;
  /** @type {FrugalConfig} */
  #config;
  /** @type {string} */
  #configHash;
  /**
   *
   * @param {assets.Assets} manifestAssets
   * @param {page.Page} page
   * @param {string} configHash
   * @param {FrugalConfig} config
   */
  constructor(manifestAssets, page, configHash, config3) {
    this.#assets = new PageAssets(manifestAssets, page.entrypoint);
    this.#page = page;
    this.#config = config3;
    this.#configHash = configHash;
  }
  async buildAll() {
    if (this.#page.type === "dynamic") {
      throw new ProducerError("Can't build dynamic page");
    }
    const pathList = await this.#page.getBuildPaths({
      resolve: (path4) => this.#config.resolve(path4)
    });
    const responses = await Promise.all(pathList.map((params) => this.build(params)));
    if (responses.some((response) => response === void 0)) {
      throw new ProducerError(
        `No response returned while building route "${this.#page.route}"`
      );
    }
    return (
      /** @type {LiveGenerationResponse[]} */
      responses
    );
  }
  /**
   * @param {pathObject.Collapse<unknown>} params
   */
  async build(params) {
    if (this.#page.type === "dynamic") {
      throw new ProducerError("Can't build dynamic page");
    }
    const path4 = this.#page.compile(params);
    const response = await this.#page.build({
      path: path4,
      params,
      resolve: (path5) => this.#config.resolve(path5)
    });
    if (response === void 0) {
      log(
        `No response returned while building route "${this.#page.route}" for params "${JSON.stringify(params)}"`,
        { level: "warning", scope: "Builder" }
      );
      return void 0;
    }
    return new LiveGenerationResponse(response, {
      render: (data) => this.#page.render({
        path: path4,
        params,
        assets: this.#assets,
        data,
        descriptor: this.#page.entrypoint
      }),
      path: path4,
      moduleHash: this.#page.moduleHash,
      configHash: this.#configHash
    });
  }
  /**
   * @param {Request} request
   * @param {string} path
   * @param {pathObject.Collapse<unknown>} params
   * @param {pageDescriptor.State} state
   * @param {pageDescriptor.Session | undefined} session
   */
  async generate(request, path4, params, state, session) {
    const response = this.#page.type === "static" && request.method === "GET" ? await this.#page.build({
      params,
      path: path4,
      resolve: (path5) => this.#config.resolve(path5),
      state,
      request,
      session
    }) : await this.#page.generate({
      params,
      path: path4,
      resolve: (path5) => this.#config.resolve(path5),
      state,
      request,
      session
    });
    if (response === void 0) {
      log(
        `No response returned while generating route "${request.method} ${this.#page.route}" for params "${JSON.stringify(params)}"`,
        { level: "warning", scope: "Builder" }
      );
      return void 0;
    }
    return new LiveGenerationResponse(response, {
      render: (data) => this.#page.render({
        path: path4,
        params,
        assets: this.#assets,
        data,
        descriptor: this.#page.entrypoint
      }),
      path: path4,
      moduleHash: this.#page.moduleHash,
      configHash: this.#configHash
    });
  }
  /**
   * @param {pathObject.Collapse<unknown>} params
   */
  async refresh(params) {
    if (this.#page.type === "dynamic") {
      throw new ProducerError("Can't refresh dynamic page");
    }
    const path4 = this.#page.compile(params);
    const response = await this.#page.build({
      path: path4,
      params,
      resolve: (path5) => this.#config.resolve(path5)
    });
    if (response === void 0) {
      log(
        `No response returned while refreshing route "${this.#page.route}" for params "${JSON.stringify(params)}"`,
        { level: "warning", scope: "Builder" }
      );
      return void 0;
    }
    return new LiveGenerationResponse(response, {
      render: (data) => this.#page.render({
        path: path4,
        params,
        assets: this.#assets,
        data,
        descriptor: this.#page.entrypoint
      }),
      path: path4,
      moduleHash: this.#page.moduleHash,
      configHash: this.#configHash
    });
  }
};
var ProducerError = class extends Error {
};

// ../frugal/packages/frugal/src/utils/http/send.js
var path2 = __toESM(require("node:path"), 1);

// ../frugal/node_modules/mime/dist/types/other.js
var types = { "application/prs.cww": ["cww"], "application/prs.xsf+xml": ["xsf"], "application/vnd.1000minds.decision-model+xml": ["1km"], "application/vnd.3gpp.pic-bw-large": ["plb"], "application/vnd.3gpp.pic-bw-small": ["psb"], "application/vnd.3gpp.pic-bw-var": ["pvb"], "application/vnd.3gpp2.tcap": ["tcap"], "application/vnd.3m.post-it-notes": ["pwn"], "application/vnd.accpac.simply.aso": ["aso"], "application/vnd.accpac.simply.imp": ["imp"], "application/vnd.acucobol": ["acu"], "application/vnd.acucorp": ["atc", "acutc"], "application/vnd.adobe.air-application-installer-package+zip": ["air"], "application/vnd.adobe.formscentral.fcdt": ["fcdt"], "application/vnd.adobe.fxp": ["fxp", "fxpl"], "application/vnd.adobe.xdp+xml": ["xdp"], "application/vnd.adobe.xfdf": ["*xfdf"], "application/vnd.age": ["age"], "application/vnd.ahead.space": ["ahead"], "application/vnd.airzip.filesecure.azf": ["azf"], "application/vnd.airzip.filesecure.azs": ["azs"], "application/vnd.amazon.ebook": ["azw"], "application/vnd.americandynamics.acc": ["acc"], "application/vnd.amiga.ami": ["ami"], "application/vnd.android.package-archive": ["apk"], "application/vnd.anser-web-certificate-issue-initiation": ["cii"], "application/vnd.anser-web-funds-transfer-initiation": ["fti"], "application/vnd.antix.game-component": ["atx"], "application/vnd.apple.installer+xml": ["mpkg"], "application/vnd.apple.keynote": ["key"], "application/vnd.apple.mpegurl": ["m3u8"], "application/vnd.apple.numbers": ["numbers"], "application/vnd.apple.pages": ["pages"], "application/vnd.apple.pkpass": ["pkpass"], "application/vnd.aristanetworks.swi": ["swi"], "application/vnd.astraea-software.iota": ["iota"], "application/vnd.audiograph": ["aep"], "application/vnd.balsamiq.bmml+xml": ["bmml"], "application/vnd.blueice.multipass": ["mpm"], "application/vnd.bmi": ["bmi"], "application/vnd.businessobjects": ["rep"], "application/vnd.chemdraw+xml": ["cdxml"], "application/vnd.chipnuts.karaoke-mmd": ["mmd"], "application/vnd.cinderella": ["cdy"], "application/vnd.citationstyles.style+xml": ["csl"], "application/vnd.claymore": ["cla"], "application/vnd.cloanto.rp9": ["rp9"], "application/vnd.clonk.c4group": ["c4g", "c4d", "c4f", "c4p", "c4u"], "application/vnd.cluetrust.cartomobile-config": ["c11amc"], "application/vnd.cluetrust.cartomobile-config-pkg": ["c11amz"], "application/vnd.commonspace": ["csp"], "application/vnd.contact.cmsg": ["cdbcmsg"], "application/vnd.cosmocaller": ["cmc"], "application/vnd.crick.clicker": ["clkx"], "application/vnd.crick.clicker.keyboard": ["clkk"], "application/vnd.crick.clicker.palette": ["clkp"], "application/vnd.crick.clicker.template": ["clkt"], "application/vnd.crick.clicker.wordbank": ["clkw"], "application/vnd.criticaltools.wbs+xml": ["wbs"], "application/vnd.ctc-posml": ["pml"], "application/vnd.cups-ppd": ["ppd"], "application/vnd.curl.car": ["car"], "application/vnd.curl.pcurl": ["pcurl"], "application/vnd.dart": ["dart"], "application/vnd.data-vision.rdz": ["rdz"], "application/vnd.dbf": ["dbf"], "application/vnd.dece.data": ["uvf", "uvvf", "uvd", "uvvd"], "application/vnd.dece.ttml+xml": ["uvt", "uvvt"], "application/vnd.dece.unspecified": ["uvx", "uvvx"], "application/vnd.dece.zip": ["uvz", "uvvz"], "application/vnd.denovo.fcselayout-link": ["fe_launch"], "application/vnd.dna": ["dna"], "application/vnd.dolby.mlp": ["mlp"], "application/vnd.dpgraph": ["dpg"], "application/vnd.dreamfactory": ["dfac"], "application/vnd.ds-keypoint": ["kpxx"], "application/vnd.dvb.ait": ["ait"], "application/vnd.dvb.service": ["svc"], "application/vnd.dynageo": ["geo"], "application/vnd.ecowin.chart": ["mag"], "application/vnd.enliven": ["nml"], "application/vnd.epson.esf": ["esf"], "application/vnd.epson.msf": ["msf"], "application/vnd.epson.quickanime": ["qam"], "application/vnd.epson.salt": ["slt"], "application/vnd.epson.ssf": ["ssf"], "application/vnd.eszigno3+xml": ["es3", "et3"], "application/vnd.ezpix-album": ["ez2"], "application/vnd.ezpix-package": ["ez3"], "application/vnd.fdf": ["*fdf"], "application/vnd.fdsn.mseed": ["mseed"], "application/vnd.fdsn.seed": ["seed", "dataless"], "application/vnd.flographit": ["gph"], "application/vnd.fluxtime.clip": ["ftc"], "application/vnd.framemaker": ["fm", "frame", "maker", "book"], "application/vnd.frogans.fnc": ["fnc"], "application/vnd.frogans.ltf": ["ltf"], "application/vnd.fsc.weblaunch": ["fsc"], "application/vnd.fujitsu.oasys": ["oas"], "application/vnd.fujitsu.oasys2": ["oa2"], "application/vnd.fujitsu.oasys3": ["oa3"], "application/vnd.fujitsu.oasysgp": ["fg5"], "application/vnd.fujitsu.oasysprs": ["bh2"], "application/vnd.fujixerox.ddd": ["ddd"], "application/vnd.fujixerox.docuworks": ["xdw"], "application/vnd.fujixerox.docuworks.binder": ["xbd"], "application/vnd.fuzzysheet": ["fzs"], "application/vnd.genomatix.tuxedo": ["txd"], "application/vnd.geogebra.file": ["ggb"], "application/vnd.geogebra.tool": ["ggt"], "application/vnd.geometry-explorer": ["gex", "gre"], "application/vnd.geonext": ["gxt"], "application/vnd.geoplan": ["g2w"], "application/vnd.geospace": ["g3w"], "application/vnd.gmx": ["gmx"], "application/vnd.google-apps.document": ["gdoc"], "application/vnd.google-apps.presentation": ["gslides"], "application/vnd.google-apps.spreadsheet": ["gsheet"], "application/vnd.google-earth.kml+xml": ["kml"], "application/vnd.google-earth.kmz": ["kmz"], "application/vnd.grafeq": ["gqf", "gqs"], "application/vnd.groove-account": ["gac"], "application/vnd.groove-help": ["ghf"], "application/vnd.groove-identity-message": ["gim"], "application/vnd.groove-injector": ["grv"], "application/vnd.groove-tool-message": ["gtm"], "application/vnd.groove-tool-template": ["tpl"], "application/vnd.groove-vcard": ["vcg"], "application/vnd.hal+xml": ["hal"], "application/vnd.handheld-entertainment+xml": ["zmm"], "application/vnd.hbci": ["hbci"], "application/vnd.hhe.lesson-player": ["les"], "application/vnd.hp-hpgl": ["hpgl"], "application/vnd.hp-hpid": ["hpid"], "application/vnd.hp-hps": ["hps"], "application/vnd.hp-jlyt": ["jlt"], "application/vnd.hp-pcl": ["pcl"], "application/vnd.hp-pclxl": ["pclxl"], "application/vnd.hydrostatix.sof-data": ["sfd-hdstx"], "application/vnd.ibm.minipay": ["mpy"], "application/vnd.ibm.modcap": ["afp", "listafp", "list3820"], "application/vnd.ibm.rights-management": ["irm"], "application/vnd.ibm.secure-container": ["sc"], "application/vnd.iccprofile": ["icc", "icm"], "application/vnd.igloader": ["igl"], "application/vnd.immervision-ivp": ["ivp"], "application/vnd.immervision-ivu": ["ivu"], "application/vnd.insors.igm": ["igm"], "application/vnd.intercon.formnet": ["xpw", "xpx"], "application/vnd.intergeo": ["i2g"], "application/vnd.intu.qbo": ["qbo"], "application/vnd.intu.qfx": ["qfx"], "application/vnd.ipunplugged.rcprofile": ["rcprofile"], "application/vnd.irepository.package+xml": ["irp"], "application/vnd.is-xpr": ["xpr"], "application/vnd.isac.fcs": ["fcs"], "application/vnd.jam": ["jam"], "application/vnd.jcp.javame.midlet-rms": ["rms"], "application/vnd.jisp": ["jisp"], "application/vnd.joost.joda-archive": ["joda"], "application/vnd.kahootz": ["ktz", "ktr"], "application/vnd.kde.karbon": ["karbon"], "application/vnd.kde.kchart": ["chrt"], "application/vnd.kde.kformula": ["kfo"], "application/vnd.kde.kivio": ["flw"], "application/vnd.kde.kontour": ["kon"], "application/vnd.kde.kpresenter": ["kpr", "kpt"], "application/vnd.kde.kspread": ["ksp"], "application/vnd.kde.kword": ["kwd", "kwt"], "application/vnd.kenameaapp": ["htke"], "application/vnd.kidspiration": ["kia"], "application/vnd.kinar": ["kne", "knp"], "application/vnd.koan": ["skp", "skd", "skt", "skm"], "application/vnd.kodak-descriptor": ["sse"], "application/vnd.las.las+xml": ["lasxml"], "application/vnd.llamagraphics.life-balance.desktop": ["lbd"], "application/vnd.llamagraphics.life-balance.exchange+xml": ["lbe"], "application/vnd.lotus-1-2-3": ["123"], "application/vnd.lotus-approach": ["apr"], "application/vnd.lotus-freelance": ["pre"], "application/vnd.lotus-notes": ["nsf"], "application/vnd.lotus-organizer": ["org"], "application/vnd.lotus-screencam": ["scm"], "application/vnd.lotus-wordpro": ["lwp"], "application/vnd.macports.portpkg": ["portpkg"], "application/vnd.mapbox-vector-tile": ["mvt"], "application/vnd.mcd": ["mcd"], "application/vnd.medcalcdata": ["mc1"], "application/vnd.mediastation.cdkey": ["cdkey"], "application/vnd.mfer": ["mwf"], "application/vnd.mfmp": ["mfm"], "application/vnd.micrografx.flo": ["flo"], "application/vnd.micrografx.igx": ["igx"], "application/vnd.mif": ["mif"], "application/vnd.mobius.daf": ["daf"], "application/vnd.mobius.dis": ["dis"], "application/vnd.mobius.mbk": ["mbk"], "application/vnd.mobius.mqy": ["mqy"], "application/vnd.mobius.msl": ["msl"], "application/vnd.mobius.plc": ["plc"], "application/vnd.mobius.txf": ["txf"], "application/vnd.mophun.application": ["mpn"], "application/vnd.mophun.certificate": ["mpc"], "application/vnd.mozilla.xul+xml": ["xul"], "application/vnd.ms-artgalry": ["cil"], "application/vnd.ms-cab-compressed": ["cab"], "application/vnd.ms-excel": ["xls", "xlm", "xla", "xlc", "xlt", "xlw"], "application/vnd.ms-excel.addin.macroenabled.12": ["xlam"], "application/vnd.ms-excel.sheet.binary.macroenabled.12": ["xlsb"], "application/vnd.ms-excel.sheet.macroenabled.12": ["xlsm"], "application/vnd.ms-excel.template.macroenabled.12": ["xltm"], "application/vnd.ms-fontobject": ["eot"], "application/vnd.ms-htmlhelp": ["chm"], "application/vnd.ms-ims": ["ims"], "application/vnd.ms-lrm": ["lrm"], "application/vnd.ms-officetheme": ["thmx"], "application/vnd.ms-outlook": ["msg"], "application/vnd.ms-pki.seccat": ["cat"], "application/vnd.ms-pki.stl": ["*stl"], "application/vnd.ms-powerpoint": ["ppt", "pps", "pot"], "application/vnd.ms-powerpoint.addin.macroenabled.12": ["ppam"], "application/vnd.ms-powerpoint.presentation.macroenabled.12": ["pptm"], "application/vnd.ms-powerpoint.slide.macroenabled.12": ["sldm"], "application/vnd.ms-powerpoint.slideshow.macroenabled.12": ["ppsm"], "application/vnd.ms-powerpoint.template.macroenabled.12": ["potm"], "application/vnd.ms-project": ["*mpp", "mpt"], "application/vnd.ms-word.document.macroenabled.12": ["docm"], "application/vnd.ms-word.template.macroenabled.12": ["dotm"], "application/vnd.ms-works": ["wps", "wks", "wcm", "wdb"], "application/vnd.ms-wpl": ["wpl"], "application/vnd.ms-xpsdocument": ["xps"], "application/vnd.mseq": ["mseq"], "application/vnd.musician": ["mus"], "application/vnd.muvee.style": ["msty"], "application/vnd.mynfc": ["taglet"], "application/vnd.neurolanguage.nlu": ["nlu"], "application/vnd.nitf": ["ntf", "nitf"], "application/vnd.noblenet-directory": ["nnd"], "application/vnd.noblenet-sealer": ["nns"], "application/vnd.noblenet-web": ["nnw"], "application/vnd.nokia.n-gage.ac+xml": ["*ac"], "application/vnd.nokia.n-gage.data": ["ngdat"], "application/vnd.nokia.n-gage.symbian.install": ["n-gage"], "application/vnd.nokia.radio-preset": ["rpst"], "application/vnd.nokia.radio-presets": ["rpss"], "application/vnd.novadigm.edm": ["edm"], "application/vnd.novadigm.edx": ["edx"], "application/vnd.novadigm.ext": ["ext"], "application/vnd.oasis.opendocument.chart": ["odc"], "application/vnd.oasis.opendocument.chart-template": ["otc"], "application/vnd.oasis.opendocument.database": ["odb"], "application/vnd.oasis.opendocument.formula": ["odf"], "application/vnd.oasis.opendocument.formula-template": ["odft"], "application/vnd.oasis.opendocument.graphics": ["odg"], "application/vnd.oasis.opendocument.graphics-template": ["otg"], "application/vnd.oasis.opendocument.image": ["odi"], "application/vnd.oasis.opendocument.image-template": ["oti"], "application/vnd.oasis.opendocument.presentation": ["odp"], "application/vnd.oasis.opendocument.presentation-template": ["otp"], "application/vnd.oasis.opendocument.spreadsheet": ["ods"], "application/vnd.oasis.opendocument.spreadsheet-template": ["ots"], "application/vnd.oasis.opendocument.text": ["odt"], "application/vnd.oasis.opendocument.text-master": ["odm"], "application/vnd.oasis.opendocument.text-template": ["ott"], "application/vnd.oasis.opendocument.text-web": ["oth"], "application/vnd.olpc-sugar": ["xo"], "application/vnd.oma.dd2+xml": ["dd2"], "application/vnd.openblox.game+xml": ["obgx"], "application/vnd.openofficeorg.extension": ["oxt"], "application/vnd.openstreetmap.data+xml": ["osm"], "application/vnd.openxmlformats-officedocument.presentationml.presentation": ["pptx"], "application/vnd.openxmlformats-officedocument.presentationml.slide": ["sldx"], "application/vnd.openxmlformats-officedocument.presentationml.slideshow": ["ppsx"], "application/vnd.openxmlformats-officedocument.presentationml.template": ["potx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ["xlsx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.template": ["xltx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ["docx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.template": ["dotx"], "application/vnd.osgeo.mapguide.package": ["mgp"], "application/vnd.osgi.dp": ["dp"], "application/vnd.osgi.subsystem": ["esa"], "application/vnd.palm": ["pdb", "pqa", "oprc"], "application/vnd.pawaafile": ["paw"], "application/vnd.pg.format": ["str"], "application/vnd.pg.osasli": ["ei6"], "application/vnd.picsel": ["efif"], "application/vnd.pmi.widget": ["wg"], "application/vnd.pocketlearn": ["plf"], "application/vnd.powerbuilder6": ["pbd"], "application/vnd.previewsystems.box": ["box"], "application/vnd.proteus.magazine": ["mgz"], "application/vnd.publishare-delta-tree": ["qps"], "application/vnd.pvi.ptid1": ["ptid"], "application/vnd.pwg-xhtml-print+xml": ["xhtm"], "application/vnd.quark.quarkxpress": ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"], "application/vnd.rar": ["rar"], "application/vnd.realvnc.bed": ["bed"], "application/vnd.recordare.musicxml": ["mxl"], "application/vnd.recordare.musicxml+xml": ["musicxml"], "application/vnd.rig.cryptonote": ["cryptonote"], "application/vnd.rim.cod": ["cod"], "application/vnd.rn-realmedia": ["rm"], "application/vnd.rn-realmedia-vbr": ["rmvb"], "application/vnd.route66.link66+xml": ["link66"], "application/vnd.sailingtracker.track": ["st"], "application/vnd.seemail": ["see"], "application/vnd.sema": ["sema"], "application/vnd.semd": ["semd"], "application/vnd.semf": ["semf"], "application/vnd.shana.informed.formdata": ["ifm"], "application/vnd.shana.informed.formtemplate": ["itp"], "application/vnd.shana.informed.interchange": ["iif"], "application/vnd.shana.informed.package": ["ipk"], "application/vnd.simtech-mindmapper": ["twd", "twds"], "application/vnd.smaf": ["mmf"], "application/vnd.smart.teacher": ["teacher"], "application/vnd.software602.filler.form+xml": ["fo"], "application/vnd.solent.sdkm+xml": ["sdkm", "sdkd"], "application/vnd.spotfire.dxp": ["dxp"], "application/vnd.spotfire.sfs": ["sfs"], "application/vnd.stardivision.calc": ["sdc"], "application/vnd.stardivision.draw": ["sda"], "application/vnd.stardivision.impress": ["sdd"], "application/vnd.stardivision.math": ["smf"], "application/vnd.stardivision.writer": ["sdw", "vor"], "application/vnd.stardivision.writer-global": ["sgl"], "application/vnd.stepmania.package": ["smzip"], "application/vnd.stepmania.stepchart": ["sm"], "application/vnd.sun.wadl+xml": ["wadl"], "application/vnd.sun.xml.calc": ["sxc"], "application/vnd.sun.xml.calc.template": ["stc"], "application/vnd.sun.xml.draw": ["sxd"], "application/vnd.sun.xml.draw.template": ["std"], "application/vnd.sun.xml.impress": ["sxi"], "application/vnd.sun.xml.impress.template": ["sti"], "application/vnd.sun.xml.math": ["sxm"], "application/vnd.sun.xml.writer": ["sxw"], "application/vnd.sun.xml.writer.global": ["sxg"], "application/vnd.sun.xml.writer.template": ["stw"], "application/vnd.sus-calendar": ["sus", "susp"], "application/vnd.svd": ["svd"], "application/vnd.symbian.install": ["sis", "sisx"], "application/vnd.syncml+xml": ["xsm"], "application/vnd.syncml.dm+wbxml": ["bdm"], "application/vnd.syncml.dm+xml": ["xdm"], "application/vnd.syncml.dmddf+xml": ["ddf"], "application/vnd.tao.intent-module-archive": ["tao"], "application/vnd.tcpdump.pcap": ["pcap", "cap", "dmp"], "application/vnd.tmobile-livetv": ["tmo"], "application/vnd.trid.tpt": ["tpt"], "application/vnd.triscape.mxs": ["mxs"], "application/vnd.trueapp": ["tra"], "application/vnd.ufdl": ["ufd", "ufdl"], "application/vnd.uiq.theme": ["utz"], "application/vnd.umajin": ["umj"], "application/vnd.unity": ["unityweb"], "application/vnd.uoml+xml": ["uoml", "uo"], "application/vnd.vcx": ["vcx"], "application/vnd.visio": ["vsd", "vst", "vss", "vsw"], "application/vnd.visionary": ["vis"], "application/vnd.vsf": ["vsf"], "application/vnd.wap.wbxml": ["wbxml"], "application/vnd.wap.wmlc": ["wmlc"], "application/vnd.wap.wmlscriptc": ["wmlsc"], "application/vnd.webturbo": ["wtb"], "application/vnd.wolfram.player": ["nbp"], "application/vnd.wordperfect": ["wpd"], "application/vnd.wqd": ["wqd"], "application/vnd.wt.stf": ["stf"], "application/vnd.xara": ["xar"], "application/vnd.xfdl": ["xfdl"], "application/vnd.yamaha.hv-dic": ["hvd"], "application/vnd.yamaha.hv-script": ["hvs"], "application/vnd.yamaha.hv-voice": ["hvp"], "application/vnd.yamaha.openscoreformat": ["osf"], "application/vnd.yamaha.openscoreformat.osfpvg+xml": ["osfpvg"], "application/vnd.yamaha.smaf-audio": ["saf"], "application/vnd.yamaha.smaf-phrase": ["spf"], "application/vnd.yellowriver-custom-menu": ["cmp"], "application/vnd.zul": ["zir", "zirz"], "application/vnd.zzazz.deck+xml": ["zaz"], "application/x-7z-compressed": ["7z"], "application/x-abiword": ["abw"], "application/x-ace-compressed": ["ace"], "application/x-apple-diskimage": ["*dmg"], "application/x-arj": ["arj"], "application/x-authorware-bin": ["aab", "x32", "u32", "vox"], "application/x-authorware-map": ["aam"], "application/x-authorware-seg": ["aas"], "application/x-bcpio": ["bcpio"], "application/x-bdoc": ["*bdoc"], "application/x-bittorrent": ["torrent"], "application/x-blorb": ["blb", "blorb"], "application/x-bzip": ["bz"], "application/x-bzip2": ["bz2", "boz"], "application/x-cbr": ["cbr", "cba", "cbt", "cbz", "cb7"], "application/x-cdlink": ["vcd"], "application/x-cfs-compressed": ["cfs"], "application/x-chat": ["chat"], "application/x-chess-pgn": ["pgn"], "application/x-chrome-extension": ["crx"], "application/x-cocoa": ["cco"], "application/x-conference": ["nsc"], "application/x-cpio": ["cpio"], "application/x-csh": ["csh"], "application/x-debian-package": ["*deb", "udeb"], "application/x-dgc-compressed": ["dgc"], "application/x-director": ["dir", "dcr", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"], "application/x-doom": ["wad"], "application/x-dtbncx+xml": ["ncx"], "application/x-dtbook+xml": ["dtb"], "application/x-dtbresource+xml": ["res"], "application/x-dvi": ["dvi"], "application/x-envoy": ["evy"], "application/x-eva": ["eva"], "application/x-font-bdf": ["bdf"], "application/x-font-ghostscript": ["gsf"], "application/x-font-linux-psf": ["psf"], "application/x-font-pcf": ["pcf"], "application/x-font-snf": ["snf"], "application/x-font-type1": ["pfa", "pfb", "pfm", "afm"], "application/x-freearc": ["arc"], "application/x-futuresplash": ["spl"], "application/x-gca-compressed": ["gca"], "application/x-glulx": ["ulx"], "application/x-gnumeric": ["gnumeric"], "application/x-gramps-xml": ["gramps"], "application/x-gtar": ["gtar"], "application/x-hdf": ["hdf"], "application/x-httpd-php": ["php"], "application/x-install-instructions": ["install"], "application/x-iso9660-image": ["*iso"], "application/x-iwork-keynote-sffkey": ["*key"], "application/x-iwork-numbers-sffnumbers": ["*numbers"], "application/x-iwork-pages-sffpages": ["*pages"], "application/x-java-archive-diff": ["jardiff"], "application/x-java-jnlp-file": ["jnlp"], "application/x-keepass2": ["kdbx"], "application/x-latex": ["latex"], "application/x-lua-bytecode": ["luac"], "application/x-lzh-compressed": ["lzh", "lha"], "application/x-makeself": ["run"], "application/x-mie": ["mie"], "application/x-mobipocket-ebook": ["*prc", "mobi"], "application/x-ms-application": ["application"], "application/x-ms-shortcut": ["lnk"], "application/x-ms-wmd": ["wmd"], "application/x-ms-wmz": ["wmz"], "application/x-ms-xbap": ["xbap"], "application/x-msaccess": ["mdb"], "application/x-msbinder": ["obd"], "application/x-mscardfile": ["crd"], "application/x-msclip": ["clp"], "application/x-msdos-program": ["*exe"], "application/x-msdownload": ["*exe", "*dll", "com", "bat", "*msi"], "application/x-msmediaview": ["mvb", "m13", "m14"], "application/x-msmetafile": ["*wmf", "*wmz", "*emf", "emz"], "application/x-msmoney": ["mny"], "application/x-mspublisher": ["pub"], "application/x-msschedule": ["scd"], "application/x-msterminal": ["trm"], "application/x-mswrite": ["wri"], "application/x-netcdf": ["nc", "cdf"], "application/x-ns-proxy-autoconfig": ["pac"], "application/x-nzb": ["nzb"], "application/x-perl": ["pl", "pm"], "application/x-pilot": ["*prc", "*pdb"], "application/x-pkcs12": ["p12", "pfx"], "application/x-pkcs7-certificates": ["p7b", "spc"], "application/x-pkcs7-certreqresp": ["p7r"], "application/x-rar-compressed": ["*rar"], "application/x-redhat-package-manager": ["rpm"], "application/x-research-info-systems": ["ris"], "application/x-sea": ["sea"], "application/x-sh": ["sh"], "application/x-shar": ["shar"], "application/x-shockwave-flash": ["swf"], "application/x-silverlight-app": ["xap"], "application/x-sql": ["*sql"], "application/x-stuffit": ["sit"], "application/x-stuffitx": ["sitx"], "application/x-subrip": ["srt"], "application/x-sv4cpio": ["sv4cpio"], "application/x-sv4crc": ["sv4crc"], "application/x-t3vm-image": ["t3"], "application/x-tads": ["gam"], "application/x-tar": ["tar"], "application/x-tcl": ["tcl", "tk"], "application/x-tex": ["tex"], "application/x-tex-tfm": ["tfm"], "application/x-texinfo": ["texinfo", "texi"], "application/x-tgif": ["*obj"], "application/x-ustar": ["ustar"], "application/x-virtualbox-hdd": ["hdd"], "application/x-virtualbox-ova": ["ova"], "application/x-virtualbox-ovf": ["ovf"], "application/x-virtualbox-vbox": ["vbox"], "application/x-virtualbox-vbox-extpack": ["vbox-extpack"], "application/x-virtualbox-vdi": ["vdi"], "application/x-virtualbox-vhd": ["vhd"], "application/x-virtualbox-vmdk": ["vmdk"], "application/x-wais-source": ["src"], "application/x-web-app-manifest+json": ["webapp"], "application/x-x509-ca-cert": ["der", "crt", "pem"], "application/x-xfig": ["fig"], "application/x-xliff+xml": ["*xlf"], "application/x-xpinstall": ["xpi"], "application/x-xz": ["xz"], "application/x-zmachine": ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"], "audio/vnd.dece.audio": ["uva", "uvva"], "audio/vnd.digital-winds": ["eol"], "audio/vnd.dra": ["dra"], "audio/vnd.dts": ["dts"], "audio/vnd.dts.hd": ["dtshd"], "audio/vnd.lucent.voice": ["lvp"], "audio/vnd.ms-playready.media.pya": ["pya"], "audio/vnd.nuera.ecelp4800": ["ecelp4800"], "audio/vnd.nuera.ecelp7470": ["ecelp7470"], "audio/vnd.nuera.ecelp9600": ["ecelp9600"], "audio/vnd.rip": ["rip"], "audio/x-aac": ["*aac"], "audio/x-aiff": ["aif", "aiff", "aifc"], "audio/x-caf": ["caf"], "audio/x-flac": ["flac"], "audio/x-m4a": ["*m4a"], "audio/x-matroska": ["mka"], "audio/x-mpegurl": ["m3u"], "audio/x-ms-wax": ["wax"], "audio/x-ms-wma": ["wma"], "audio/x-pn-realaudio": ["ram", "ra"], "audio/x-pn-realaudio-plugin": ["rmp"], "audio/x-realaudio": ["*ra"], "audio/x-wav": ["*wav"], "chemical/x-cdx": ["cdx"], "chemical/x-cif": ["cif"], "chemical/x-cmdf": ["cmdf"], "chemical/x-cml": ["cml"], "chemical/x-csml": ["csml"], "chemical/x-xyz": ["xyz"], "image/prs.btif": ["btif", "btf"], "image/prs.pti": ["pti"], "image/vnd.adobe.photoshop": ["psd"], "image/vnd.airzip.accelerator.azv": ["azv"], "image/vnd.dece.graphic": ["uvi", "uvvi", "uvg", "uvvg"], "image/vnd.djvu": ["djvu", "djv"], "image/vnd.dvb.subtitle": ["*sub"], "image/vnd.dwg": ["dwg"], "image/vnd.dxf": ["dxf"], "image/vnd.fastbidsheet": ["fbs"], "image/vnd.fpx": ["fpx"], "image/vnd.fst": ["fst"], "image/vnd.fujixerox.edmics-mmr": ["mmr"], "image/vnd.fujixerox.edmics-rlc": ["rlc"], "image/vnd.microsoft.icon": ["ico"], "image/vnd.ms-dds": ["dds"], "image/vnd.ms-modi": ["mdi"], "image/vnd.ms-photo": ["wdp"], "image/vnd.net-fpx": ["npx"], "image/vnd.pco.b16": ["b16"], "image/vnd.tencent.tap": ["tap"], "image/vnd.valve.source.texture": ["vtf"], "image/vnd.wap.wbmp": ["wbmp"], "image/vnd.xiff": ["xif"], "image/vnd.zbrush.pcx": ["pcx"], "image/x-3ds": ["3ds"], "image/x-cmu-raster": ["ras"], "image/x-cmx": ["cmx"], "image/x-freehand": ["fh", "fhc", "fh4", "fh5", "fh7"], "image/x-icon": ["*ico"], "image/x-jng": ["jng"], "image/x-mrsid-image": ["sid"], "image/x-ms-bmp": ["*bmp"], "image/x-pcx": ["*pcx"], "image/x-pict": ["pic", "pct"], "image/x-portable-anymap": ["pnm"], "image/x-portable-bitmap": ["pbm"], "image/x-portable-graymap": ["pgm"], "image/x-portable-pixmap": ["ppm"], "image/x-rgb": ["rgb"], "image/x-tga": ["tga"], "image/x-xbitmap": ["xbm"], "image/x-xpixmap": ["xpm"], "image/x-xwindowdump": ["xwd"], "message/vnd.wfa.wsc": ["wsc"], "model/vnd.cld": ["cld"], "model/vnd.collada+xml": ["dae"], "model/vnd.dwf": ["dwf"], "model/vnd.gdl": ["gdl"], "model/vnd.gtw": ["gtw"], "model/vnd.mts": ["mts"], "model/vnd.opengex": ["ogex"], "model/vnd.parasolid.transmit.binary": ["x_b"], "model/vnd.parasolid.transmit.text": ["x_t"], "model/vnd.pytha.pyox": ["pyo", "pyox"], "model/vnd.sap.vds": ["vds"], "model/vnd.usda": ["usda"], "model/vnd.usdz+zip": ["usdz"], "model/vnd.valve.source.compiled-map": ["bsp"], "model/vnd.vtu": ["vtu"], "text/prs.lines.tag": ["dsc"], "text/vnd.curl": ["curl"], "text/vnd.curl.dcurl": ["dcurl"], "text/vnd.curl.mcurl": ["mcurl"], "text/vnd.curl.scurl": ["scurl"], "text/vnd.dvb.subtitle": ["sub"], "text/vnd.familysearch.gedcom": ["ged"], "text/vnd.fly": ["fly"], "text/vnd.fmi.flexstor": ["flx"], "text/vnd.graphviz": ["gv"], "text/vnd.in3d.3dml": ["3dml"], "text/vnd.in3d.spot": ["spot"], "text/vnd.sun.j2me.app-descriptor": ["jad"], "text/vnd.wap.wml": ["wml"], "text/vnd.wap.wmlscript": ["wmls"], "text/x-asm": ["s", "asm"], "text/x-c": ["c", "cc", "cxx", "cpp", "h", "hh", "dic"], "text/x-component": ["htc"], "text/x-fortran": ["f", "for", "f77", "f90"], "text/x-handlebars-template": ["hbs"], "text/x-java-source": ["java"], "text/x-lua": ["lua"], "text/x-markdown": ["mkd"], "text/x-nfo": ["nfo"], "text/x-opml": ["opml"], "text/x-org": ["*org"], "text/x-pascal": ["p", "pas"], "text/x-processing": ["pde"], "text/x-sass": ["sass"], "text/x-scss": ["scss"], "text/x-setext": ["etx"], "text/x-sfv": ["sfv"], "text/x-suse-ymp": ["ymp"], "text/x-uuencode": ["uu"], "text/x-vcalendar": ["vcs"], "text/x-vcard": ["vcf"], "video/vnd.dece.hd": ["uvh", "uvvh"], "video/vnd.dece.mobile": ["uvm", "uvvm"], "video/vnd.dece.pd": ["uvp", "uvvp"], "video/vnd.dece.sd": ["uvs", "uvvs"], "video/vnd.dece.video": ["uvv", "uvvv"], "video/vnd.dvb.file": ["dvb"], "video/vnd.fvt": ["fvt"], "video/vnd.mpegurl": ["mxu", "m4u"], "video/vnd.ms-playready.media.pyv": ["pyv"], "video/vnd.uvvu.mp4": ["uvu", "uvvu"], "video/vnd.vivo": ["viv"], "video/x-f4v": ["f4v"], "video/x-fli": ["fli"], "video/x-flv": ["flv"], "video/x-m4v": ["m4v"], "video/x-matroska": ["mkv", "mk3d", "mks"], "video/x-mng": ["mng"], "video/x-ms-asf": ["asf", "asx"], "video/x-ms-vob": ["vob"], "video/x-ms-wm": ["wm"], "video/x-ms-wmv": ["wmv"], "video/x-ms-wmx": ["wmx"], "video/x-ms-wvx": ["wvx"], "video/x-msvideo": ["avi"], "video/x-sgi-movie": ["movie"], "video/x-smv": ["smv"], "x-conference/x-cooltalk": ["ice"] };
Object.freeze(types);
var other_default = types;

// ../frugal/node_modules/mime/dist/types/standard.js
var types2 = { "application/andrew-inset": ["ez"], "application/appinstaller": ["appinstaller"], "application/applixware": ["aw"], "application/appx": ["appx"], "application/appxbundle": ["appxbundle"], "application/atom+xml": ["atom"], "application/atomcat+xml": ["atomcat"], "application/atomdeleted+xml": ["atomdeleted"], "application/atomsvc+xml": ["atomsvc"], "application/atsc-dwd+xml": ["dwd"], "application/atsc-held+xml": ["held"], "application/atsc-rsat+xml": ["rsat"], "application/automationml-aml+xml": ["aml"], "application/automationml-amlx+zip": ["amlx"], "application/bdoc": ["bdoc"], "application/calendar+xml": ["xcs"], "application/ccxml+xml": ["ccxml"], "application/cdfx+xml": ["cdfx"], "application/cdmi-capability": ["cdmia"], "application/cdmi-container": ["cdmic"], "application/cdmi-domain": ["cdmid"], "application/cdmi-object": ["cdmio"], "application/cdmi-queue": ["cdmiq"], "application/cpl+xml": ["cpl"], "application/cu-seeme": ["cu"], "application/cwl": ["cwl"], "application/dash+xml": ["mpd"], "application/dash-patch+xml": ["mpp"], "application/davmount+xml": ["davmount"], "application/docbook+xml": ["dbk"], "application/dssc+der": ["dssc"], "application/dssc+xml": ["xdssc"], "application/ecmascript": ["ecma"], "application/emma+xml": ["emma"], "application/emotionml+xml": ["emotionml"], "application/epub+zip": ["epub"], "application/exi": ["exi"], "application/express": ["exp"], "application/fdf": ["fdf"], "application/fdt+xml": ["fdt"], "application/font-tdpfr": ["pfr"], "application/geo+json": ["geojson"], "application/gml+xml": ["gml"], "application/gpx+xml": ["gpx"], "application/gxf": ["gxf"], "application/gzip": ["gz"], "application/hjson": ["hjson"], "application/hyperstudio": ["stk"], "application/inkml+xml": ["ink", "inkml"], "application/ipfix": ["ipfix"], "application/its+xml": ["its"], "application/java-archive": ["jar", "war", "ear"], "application/java-serialized-object": ["ser"], "application/java-vm": ["class"], "application/javascript": ["*js"], "application/json": ["json", "map"], "application/json5": ["json5"], "application/jsonml+json": ["jsonml"], "application/ld+json": ["jsonld"], "application/lgr+xml": ["lgr"], "application/lost+xml": ["lostxml"], "application/mac-binhex40": ["hqx"], "application/mac-compactpro": ["cpt"], "application/mads+xml": ["mads"], "application/manifest+json": ["webmanifest"], "application/marc": ["mrc"], "application/marcxml+xml": ["mrcx"], "application/mathematica": ["ma", "nb", "mb"], "application/mathml+xml": ["mathml"], "application/mbox": ["mbox"], "application/media-policy-dataset+xml": ["mpf"], "application/mediaservercontrol+xml": ["mscml"], "application/metalink+xml": ["metalink"], "application/metalink4+xml": ["meta4"], "application/mets+xml": ["mets"], "application/mmt-aei+xml": ["maei"], "application/mmt-usd+xml": ["musd"], "application/mods+xml": ["mods"], "application/mp21": ["m21", "mp21"], "application/mp4": ["*mp4", "*mpg4", "mp4s", "m4p"], "application/msix": ["msix"], "application/msixbundle": ["msixbundle"], "application/msword": ["doc", "dot"], "application/mxf": ["mxf"], "application/n-quads": ["nq"], "application/n-triples": ["nt"], "application/node": ["cjs"], "application/octet-stream": ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"], "application/oda": ["oda"], "application/oebps-package+xml": ["opf"], "application/ogg": ["ogx"], "application/omdoc+xml": ["omdoc"], "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"], "application/oxps": ["oxps"], "application/p2p-overlay+xml": ["relo"], "application/patch-ops-error+xml": ["xer"], "application/pdf": ["pdf"], "application/pgp-encrypted": ["pgp"], "application/pgp-keys": ["asc"], "application/pgp-signature": ["sig", "*asc"], "application/pics-rules": ["prf"], "application/pkcs10": ["p10"], "application/pkcs7-mime": ["p7m", "p7c"], "application/pkcs7-signature": ["p7s"], "application/pkcs8": ["p8"], "application/pkix-attr-cert": ["ac"], "application/pkix-cert": ["cer"], "application/pkix-crl": ["crl"], "application/pkix-pkipath": ["pkipath"], "application/pkixcmp": ["pki"], "application/pls+xml": ["pls"], "application/postscript": ["ai", "eps", "ps"], "application/provenance+xml": ["provx"], "application/pskc+xml": ["pskcxml"], "application/raml+yaml": ["raml"], "application/rdf+xml": ["rdf", "owl"], "application/reginfo+xml": ["rif"], "application/relax-ng-compact-syntax": ["rnc"], "application/resource-lists+xml": ["rl"], "application/resource-lists-diff+xml": ["rld"], "application/rls-services+xml": ["rs"], "application/route-apd+xml": ["rapd"], "application/route-s-tsid+xml": ["sls"], "application/route-usd+xml": ["rusd"], "application/rpki-ghostbusters": ["gbr"], "application/rpki-manifest": ["mft"], "application/rpki-roa": ["roa"], "application/rsd+xml": ["rsd"], "application/rss+xml": ["rss"], "application/rtf": ["rtf"], "application/sbml+xml": ["sbml"], "application/scvp-cv-request": ["scq"], "application/scvp-cv-response": ["scs"], "application/scvp-vp-request": ["spq"], "application/scvp-vp-response": ["spp"], "application/sdp": ["sdp"], "application/senml+xml": ["senmlx"], "application/sensml+xml": ["sensmlx"], "application/set-payment-initiation": ["setpay"], "application/set-registration-initiation": ["setreg"], "application/shf+xml": ["shf"], "application/sieve": ["siv", "sieve"], "application/smil+xml": ["smi", "smil"], "application/sparql-query": ["rq"], "application/sparql-results+xml": ["srx"], "application/sql": ["sql"], "application/srgs": ["gram"], "application/srgs+xml": ["grxml"], "application/sru+xml": ["sru"], "application/ssdl+xml": ["ssdl"], "application/ssml+xml": ["ssml"], "application/swid+xml": ["swidtag"], "application/tei+xml": ["tei", "teicorpus"], "application/thraud+xml": ["tfi"], "application/timestamped-data": ["tsd"], "application/toml": ["toml"], "application/trig": ["trig"], "application/ttml+xml": ["ttml"], "application/ubjson": ["ubj"], "application/urc-ressheet+xml": ["rsheet"], "application/urc-targetdesc+xml": ["td"], "application/voicexml+xml": ["vxml"], "application/wasm": ["wasm"], "application/watcherinfo+xml": ["wif"], "application/widget": ["wgt"], "application/winhlp": ["hlp"], "application/wsdl+xml": ["wsdl"], "application/wspolicy+xml": ["wspolicy"], "application/xaml+xml": ["xaml"], "application/xcap-att+xml": ["xav"], "application/xcap-caps+xml": ["xca"], "application/xcap-diff+xml": ["xdf"], "application/xcap-el+xml": ["xel"], "application/xcap-ns+xml": ["xns"], "application/xenc+xml": ["xenc"], "application/xfdf": ["xfdf"], "application/xhtml+xml": ["xhtml", "xht"], "application/xliff+xml": ["xlf"], "application/xml": ["xml", "xsl", "xsd", "rng"], "application/xml-dtd": ["dtd"], "application/xop+xml": ["xop"], "application/xproc+xml": ["xpl"], "application/xslt+xml": ["*xsl", "xslt"], "application/xspf+xml": ["xspf"], "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"], "application/yang": ["yang"], "application/yin+xml": ["yin"], "application/zip": ["zip"], "audio/3gpp": ["*3gpp"], "audio/aac": ["adts", "aac"], "audio/adpcm": ["adp"], "audio/amr": ["amr"], "audio/basic": ["au", "snd"], "audio/midi": ["mid", "midi", "kar", "rmi"], "audio/mobile-xmf": ["mxmf"], "audio/mp3": ["*mp3"], "audio/mp4": ["m4a", "mp4a"], "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"], "audio/ogg": ["oga", "ogg", "spx", "opus"], "audio/s3m": ["s3m"], "audio/silk": ["sil"], "audio/wav": ["wav"], "audio/wave": ["*wav"], "audio/webm": ["weba"], "audio/xm": ["xm"], "font/collection": ["ttc"], "font/otf": ["otf"], "font/ttf": ["ttf"], "font/woff": ["woff"], "font/woff2": ["woff2"], "image/aces": ["exr"], "image/apng": ["apng"], "image/avci": ["avci"], "image/avcs": ["avcs"], "image/avif": ["avif"], "image/bmp": ["bmp", "dib"], "image/cgm": ["cgm"], "image/dicom-rle": ["drle"], "image/dpx": ["dpx"], "image/emf": ["emf"], "image/fits": ["fits"], "image/g3fax": ["g3"], "image/gif": ["gif"], "image/heic": ["heic"], "image/heic-sequence": ["heics"], "image/heif": ["heif"], "image/heif-sequence": ["heifs"], "image/hej2k": ["hej2"], "image/hsj2": ["hsj2"], "image/ief": ["ief"], "image/jls": ["jls"], "image/jp2": ["jp2", "jpg2"], "image/jpeg": ["jpeg", "jpg", "jpe"], "image/jph": ["jph"], "image/jphc": ["jhc"], "image/jpm": ["jpm", "jpgm"], "image/jpx": ["jpx", "jpf"], "image/jxr": ["jxr"], "image/jxra": ["jxra"], "image/jxrs": ["jxrs"], "image/jxs": ["jxs"], "image/jxsc": ["jxsc"], "image/jxsi": ["jxsi"], "image/jxss": ["jxss"], "image/ktx": ["ktx"], "image/ktx2": ["ktx2"], "image/png": ["png"], "image/sgi": ["sgi"], "image/svg+xml": ["svg", "svgz"], "image/t38": ["t38"], "image/tiff": ["tif", "tiff"], "image/tiff-fx": ["tfx"], "image/webp": ["webp"], "image/wmf": ["wmf"], "message/disposition-notification": ["disposition-notification"], "message/global": ["u8msg"], "message/global-delivery-status": ["u8dsn"], "message/global-disposition-notification": ["u8mdn"], "message/global-headers": ["u8hdr"], "message/rfc822": ["eml", "mime"], "model/3mf": ["3mf"], "model/gltf+json": ["gltf"], "model/gltf-binary": ["glb"], "model/iges": ["igs", "iges"], "model/jt": ["jt"], "model/mesh": ["msh", "mesh", "silo"], "model/mtl": ["mtl"], "model/obj": ["obj"], "model/prc": ["prc"], "model/step+xml": ["stpx"], "model/step+zip": ["stpz"], "model/step-xml+zip": ["stpxz"], "model/stl": ["stl"], "model/u3d": ["u3d"], "model/vrml": ["wrl", "vrml"], "model/x3d+binary": ["*x3db", "x3dbz"], "model/x3d+fastinfoset": ["x3db"], "model/x3d+vrml": ["*x3dv", "x3dvz"], "model/x3d+xml": ["x3d", "x3dz"], "model/x3d-vrml": ["x3dv"], "text/cache-manifest": ["appcache", "manifest"], "text/calendar": ["ics", "ifb"], "text/coffeescript": ["coffee", "litcoffee"], "text/css": ["css"], "text/csv": ["csv"], "text/html": ["html", "htm", "shtml"], "text/jade": ["jade"], "text/javascript": ["js", "mjs"], "text/jsx": ["jsx"], "text/less": ["less"], "text/markdown": ["md", "markdown"], "text/mathml": ["mml"], "text/mdx": ["mdx"], "text/n3": ["n3"], "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"], "text/richtext": ["rtx"], "text/rtf": ["*rtf"], "text/sgml": ["sgml", "sgm"], "text/shex": ["shex"], "text/slim": ["slim", "slm"], "text/spdx": ["spdx"], "text/stylus": ["stylus", "styl"], "text/tab-separated-values": ["tsv"], "text/troff": ["t", "tr", "roff", "man", "me", "ms"], "text/turtle": ["ttl"], "text/uri-list": ["uri", "uris", "urls"], "text/vcard": ["vcard"], "text/vtt": ["vtt"], "text/wgsl": ["wgsl"], "text/xml": ["*xml"], "text/yaml": ["yaml", "yml"], "video/3gpp": ["3gp", "3gpp"], "video/3gpp2": ["3g2"], "video/h261": ["h261"], "video/h263": ["h263"], "video/h264": ["h264"], "video/iso.segment": ["m4s"], "video/jpeg": ["jpgv"], "video/jpm": ["*jpm", "*jpgm"], "video/mj2": ["mj2", "mjp2"], "video/mp2t": ["ts"], "video/mp4": ["mp4", "mp4v", "mpg4"], "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"], "video/ogg": ["ogv"], "video/quicktime": ["qt", "mov"], "video/webm": ["webm"] };
Object.freeze(types2);
var standard_default = types2;

// ../frugal/node_modules/mime/dist/src/Mime.js
var __classPrivateFieldGet = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Mime_extensionToType;
var _Mime_typeToExtension;
var _Mime_typeToExtensions;
var Mime = class {
  constructor(...args) {
    _Mime_extensionToType.set(this, /* @__PURE__ */ new Map());
    _Mime_typeToExtension.set(this, /* @__PURE__ */ new Map());
    _Mime_typeToExtensions.set(this, /* @__PURE__ */ new Map());
    for (const arg of args) {
      this.define(arg);
    }
  }
  define(typeMap, force = false) {
    for (let [type2, extensions] of Object.entries(typeMap)) {
      type2 = type2.toLowerCase();
      extensions = extensions.map((ext) => ext.toLowerCase());
      if (!__classPrivateFieldGet(this, _Mime_typeToExtensions, "f").has(type2)) {
        __classPrivateFieldGet(this, _Mime_typeToExtensions, "f").set(type2, /* @__PURE__ */ new Set());
      }
      const allExtensions = __classPrivateFieldGet(this, _Mime_typeToExtensions, "f").get(type2);
      let first = true;
      for (let extension of extensions) {
        const starred = extension.startsWith("*");
        extension = starred ? extension.slice(1) : extension;
        allExtensions?.add(extension);
        if (first) {
          __classPrivateFieldGet(this, _Mime_typeToExtension, "f").set(type2, extension);
        }
        first = false;
        if (starred)
          continue;
        const currentType = __classPrivateFieldGet(this, _Mime_extensionToType, "f").get(extension);
        if (currentType && currentType != type2 && !force) {
          throw new Error(`"${type2} -> ${extension}" conflicts with "${currentType} -> ${extension}". Pass \`force=true\` to override this definition.`);
        }
        __classPrivateFieldGet(this, _Mime_extensionToType, "f").set(extension, type2);
      }
    }
    return this;
  }
  getType(path4) {
    if (typeof path4 !== "string")
      return null;
    const last = path4.replace(/^.*[/\\]/, "").toLowerCase();
    const ext = last.replace(/^.*\./, "").toLowerCase();
    const hasPath = last.length < path4.length;
    const hasDot = ext.length < last.length - 1;
    if (!hasDot && hasPath)
      return null;
    return __classPrivateFieldGet(this, _Mime_extensionToType, "f").get(ext) ?? null;
  }
  getExtension(type2) {
    if (typeof type2 !== "string")
      return null;
    type2 = type2?.split?.(";")[0];
    return (type2 && __classPrivateFieldGet(this, _Mime_typeToExtension, "f").get(type2.trim().toLowerCase())) ?? null;
  }
  getAllExtensions(type2) {
    if (typeof type2 !== "string")
      return null;
    return __classPrivateFieldGet(this, _Mime_typeToExtensions, "f").get(type2.toLowerCase()) ?? null;
  }
  _freeze() {
    this.define = () => {
      throw new Error("define() not allowed for built-in Mime objects. See https://github.com/broofa/mime/blob/main/README.md#custom-mime-instances");
    };
    Object.freeze(this);
    for (const extensions of __classPrivateFieldGet(this, _Mime_typeToExtensions, "f").values()) {
      Object.freeze(extensions);
    }
    return this;
  }
  _getTestState() {
    return {
      types: __classPrivateFieldGet(this, _Mime_extensionToType, "f"),
      extensions: __classPrivateFieldGet(this, _Mime_typeToExtension, "f")
    };
  }
};
_Mime_extensionToType = /* @__PURE__ */ new WeakMap(), _Mime_typeToExtension = /* @__PURE__ */ new WeakMap(), _Mime_typeToExtensions = /* @__PURE__ */ new WeakMap();
var Mime_default = Mime;

// ../frugal/node_modules/mime/dist/src/index.js
var src_default2 = new Mime_default(standard_default, other_default)._freeze();

// ../frugal/packages/frugal/src/utils/http/send.js
async function send(request, options) {
  const url2 = new URL(request.url);
  const decodedPathname = decodeURIComponent(url2.pathname);
  const normalizedPath = path2.normalize(decodedPathname);
  if (normalizedPath !== decodedPathname) {
    url2.pathname = normalizedPath;
    return Response.redirect(url2, 301);
  }
  const filePath = `.${decodedPathname}`;
  if (!isValidPath(filePath)) {
    return new Response("", {
      status: 404
    });
  }
  const resolvedFilePath = path2.resolve(options.rootDir, filePath);
  try {
    const stats = await stat(resolvedFilePath);
    if (stats.isDirectory()) {
      return new Response("", {
        status: 404
      });
    }
    const headers = new Headers();
    headers.set("Content-Length", stats.size.toString());
    if (stats.mtime) {
      headers.set("Last-Modified", stats.mtime.toUTCString());
    }
    headers.set("Etag", computeWeakEtag(stats));
    const contentType = src_default2.getType(path2.extname(resolvedFilePath));
    if (contentType) {
      headers.set("Content-Type", contentType);
    }
    const body = await createReadableStream(resolvedFilePath);
    return new Response(toReadableStream(body), { headers });
  } catch (error) {
    if (error instanceof NotFound) {
      return new Response(void 0, { status: 404 });
    }
    return new Response(error.message, { status: 500 });
  }
}
var UP_PATH_REGEXP = /(?:^|[\\/])\.\.(?:[\\/]|$)/;
function isValidPath(filePath) {
  if (typeof filePath !== "string") {
    return false;
  }
  if (filePath.indexOf("\0") !== -1) {
    return false;
  }
  if (path2.isAbsolute(filePath)) {
    return false;
  }
  if (UP_PATH_REGEXP.test(path2.normalize(`.${path2.sep}${filePath}`))) {
    return false;
  }
  return true;
}
function computeWeakEtag(fileInfo) {
  return `W/${create().update(fileInfo.mtime?.toJSON() ?? "empty").digest()}`;
}

// ../frugal/packages/frugal/src/utils/http/serve.js
var http = __toESM(require("node:http"), 1);
var https = __toESM(require("node:https"), 1);
var path3 = __toESM(require("node:path"), 1);
var stream2 = __toESM(require("node:stream"), 1);
function serve(handler, { port = 8e3, hostname = "0.0.0.0", onListen, signal, ...secureOptions } = {}) {
  const server2 = secureOptions.cert ? https.createServer(
    {
      cert: secureOptions.cert,
      key: secureOptions.key
    },
    nativeHandler(handler)
  ) : http.createServer(nativeHandler(handler));
  server2.listen(port, hostname, () => {
    onListen?.({ hostname, port });
  });
  return new Promise((res, rej) => {
    signal?.addEventListener("abort", () => server2.close(() => setTimeout(res, 100)));
  });
}
function nativeHandler(handler) {
  return async (req, res) => {
    const host = req.headers.host ?? "localhost";
    const protocol = (
      /** @type {net.Socket & { encrypted?: boolean }} */
      req.socket.encrypted ? "https:" : "http:"
    );
    const origin = `${protocol}//${host}`;
    const parsed = new URL(origin);
    const request = toRequest(origin, req);
    const response = await handler(request, {
      hostname: parsed.hostname,
      port: parsed.port,
      identifier: await identifier(request, req)
    });
    if (isEventStreamResponse(response)) {
      req.on("close", () => {
        response.close();
      });
    }
    answerWithResponse(response, res);
  };
}
async function answerWithResponse(response, res) {
  res.writeHead(response.status, response.statusText, toOutgoingHeaders(response.headers));
  if (response.body !== null) {
    for await (const chunk of fromReadableStream(response.body)) {
      res.write(chunk);
    }
  }
  if (!isEventStreamResponse(response)) {
    res.end();
  }
  return;
}
function toOutgoingHeaders(headers) {
  const outgoingHeaders = {};
  for (const [name, value] of headers.entries()) {
    const currentValue = outgoingHeaders[name];
    if (currentValue === void 0) {
      outgoingHeaders[name] = value;
    } else if (typeof currentValue === "string") {
      outgoingHeaders[name] = [currentValue, value];
    } else {
      outgoingHeaders[name] = [...currentValue, value];
    }
  }
  return outgoingHeaders;
}
var BODYLESS_METHODS = ["HEAD", "GET"];
function toRequest(origin, req) {
  const url2 = (
    /** @type {string} */
    req.url
  );
  const headers = new Headers();
  for (const [name, value] of Object.entries(req.headers)) {
    if (Array.isArray(value)) {
      for (const entry of value) {
        headers.append(name, entry);
      }
    } else if (value !== void 0) {
      headers.set(name, value);
    }
  }
  const method = req.method ?? "GET";
  const body = BODYLESS_METHODS.includes(method) ? void 0 : (
    /** @type {ReadableStream} */
    stream2.Readable.toWeb(req)
  );
  return new Request(new URL(url2, origin), {
    headers,
    method,
    body,
    // @ts-expect-error: duplex does not exists on node types, but needed to
    // send a body. See :
    // https://developer.chrome.com/articles/fetch-streaming-requests/#half-duplex
    duplex: body && "half"
  });
}
async function identifier(request, req) {
  const requestUrl = new URL(request.url);
  const normalizedInternalUrl = path3.normalize(decodeURIComponent(requestUrl.pathname)) + requestUrl.search;
  const remoteHostname = getRemoteAddress(request, req) ?? "???";
  const method = request.method;
  const identifier2 = create().update(normalizedInternalUrl).update(remoteHostname).update(method).update(String(Date.now())).digest();
  return identifier2;
}
function getRemoteAddress(request, req) {
  const xForwardedFor = request.headers.get("X-Forwarded-For");
  if (!xForwardedFor) {
    return req.socket.remoteAddress;
  }
  const values = xForwardedFor.split(/\s*,\s*/);
  return values[0];
}
function isEventStreamResponse(response) {
  return "close" in response;
}

// ../frugal/packages/frugal/src/server/cache/Cache.js
var Cache = class {
  /** @type {_type.CacheStorage} */
  #cacheStorage;
  /**
   * @param {_type.CacheStorage} cacheStorage
   */
  constructor(cacheStorage) {
    this.#cacheStorage = cacheStorage;
  }
  /**
   * @param {generationResponse.LiveGenerationResponse} response
   * @returns {Promise<void>}
   */
  async add(response) {
    return this.#cacheStorage.set(response.path, await response.serialize());
  }
  /**
   * @param {string} path
   * @returns {Promise<boolean>}
   */
  async has(path4) {
    const data = await this.#cacheStorage.get(path4);
    if (data === void 0) {
      return false;
    }
    return true;
  }
  /**
   * @param {string} path
   * @returns {Promise<Response|undefined>}
   */
  async get(path4) {
    const serializedCacheableResponse = await this.#cacheStorage.get(path4);
    if (serializedCacheableResponse === void 0) {
      return void 0;
    }
    return toResponse(serializedCacheableResponse);
  }
};

// ../frugal/packages/frugal/src/server/middleware.js
function composeMiddleware(middlewares) {
  return middlewares.reduceRight(
    /**
     * @param {_type.Middleware<CONTEXT>} composedMiddleware
     * @param {false|null|undefined|_type.Middleware<CONTEXT>} middleware
     * @returns {_type.Middleware<CONTEXT>}
     */
    (composedMiddleware2, middleware) => {
      return typeof middleware === "function" ? (context, next) => middleware(
        context,
        (context2) => Promise.resolve(composedMiddleware2(context2, next))
      ) : composedMiddleware2;
    },
    (context, next) => next(context)
  );
}

// ../frugal/packages/frugal/src/server/middlewares/dynamicRoute.js
async function dynamicRoute(context, next) {
  context.log("Generation of dynamic page", { level: "debug", scope: "dynamicRoute" });
  const generationResponse = await context.producer.generate(
    context.request,
    context.url.pathname,
    context.params,
    context.state,
    context.session
  );
  if (generationResponse === void 0) {
    return next(context);
  }
  return toResponse(generationResponse);
}

// ../frugal/packages/frugal/src/server/middlewares/etag.js
async function etag(context, next) {
  const response = await next(context);
  if (ifNoneMatch(context.request, response)) {
    return response;
  }
  context.log("response Etag headers match request If-None-Match header, send 304", {
    level: "debug",
    scope: "etag"
  });
  return new Response(null, {
    status: 304,
    //not modified
    statusText: "Not Modified",
    headers: headersNotModified(response.headers)
  });
}
function ifNoneMatch(request, response) {
  const ifNoneMatch2 = request.headers.get("If-None-Match");
  if (ifNoneMatch2 === null) {
    return true;
  }
  if (ifNoneMatch2.trim() === "*") {
    return false;
  }
  const etag2 = response.headers.get("Etag");
  const tags = ifNoneMatch2.split(/\s*,\s*/);
  return etag2 === null || !tags.includes(etag2);
}
var HEADERS_NOT_MODIFIED = [
  "Content-Location",
  "Date",
  "Etag",
  "Vary",
  "Cache-Control",
  "Expires"
];
function headersNotModified(headers) {
  const headersNotModified2 = new Headers();
  for (const headerName of HEADERS_NOT_MODIFIED) {
    const headerValue = headers.get(headerName);
    if (headerValue !== null) {
      headersNotModified2.set(headerName, headerValue);
    }
  }
  return headersNotModified2;
}

// ../frugal/packages/frugal/src/server/middlewares/forceGenerateStaticPage.js
async function forceGenerateStaticPage(context, next) {
  const cookies = getCookies(context.request.headers);
  const forceGenerate = cookies[FORCE_GENERATE_COOKIE] === "true";
  if (!forceGenerate && context.request.method === "GET") {
    return next(context);
  }
  context.log("Force dynamic generation of static page.", {
    scope: "forceGenerateStaticPage",
    level: "debug"
  });
  const generationResponse = await context.producer.generate(
    context.request,
    context.url.pathname,
    context.params,
    context.state,
    context.session
  );
  if (generationResponse === void 0) {
    return next(context);
  }
  const response = toResponse(generationResponse);
  if (forceGenerate) {
    setCookie(response.headers, {
      httpOnly: true,
      name: FORCE_GENERATE_COOKIE,
      value: "false",
      expires: /* @__PURE__ */ new Date(0),
      maxAge: 0
    });
  }
  return response;
}

// ../frugal/packages/frugal/src/server/middlewares/serveFromCacheStaticPage.js
async function serveFromCacheStaticPage(context, next) {
  if (context.request.method !== "GET") {
    return next(context);
  }
  const url2 = new URL(context.request.url);
  const cachedResponse = await context.cache.get(url2.pathname);
  if (cachedResponse === void 0) {
    return next(context);
  }
  context.log("Serving static page from cache", {
    level: "debug",
    scope: "serveFromCacheStaticPage"
  });
  return cachedResponse;
}

// ../frugal/packages/frugal/src/server/middlewares/refreshJitStaticPage.js
async function refreshJitStaticPage(context, next) {
  if (context.page.strictPaths) {
    return next(context);
  }
  if (context.request.method !== "GET") {
    return next(context);
  }
  context.log("refresh page", {
    level: "debug",
    scope: "refreshJitStaticPage"
  });
  const generationResponse = await context.producer.refresh(context.params);
  if (generationResponse === void 0) {
    return next(context);
  }
  await context.cache.add(generationResponse);
  return serveFromCacheStaticPage(context, next);
}

// ../frugal/packages/frugal/src/utils/crypto.js
var KEY_ALGORITHM = { name: "HMAC", hash: "SHA-512" };
var ENCODER = new TextEncoder();
async function verify(cryptoKey, signature, data) {
  return await crypto.subtle.verify(
    KEY_ALGORITHM,
    cryptoKey,
    fromHexString(signature),
    ENCODER.encode(data)
  );
}
function fromHexString(string) {
  const bytes = string.match(/.{1,2}/g)?.map((byte) => {
    return parseInt(byte, 16);
  }) ?? [];
  return new Uint8Array(bytes);
}

// ../frugal/packages/frugal/src/server/middlewares/refreshStaticPage.js
async function refreshStaticPage(context, next) {
  const cryptoKey = context.config.server.cryptoKey;
  if (cryptoKey === void 0) {
    context.log("no crypto key in config. Yield.", {
      level: "debug",
      scope: "refreshStaticPage"
    });
    return next(context);
  }
  if (context.request.method !== "GET") {
    return next(context);
  }
  const url2 = new URL(context.request.url);
  const timestamp = url2.searchParams.get("timestamp");
  const signature = url2.searchParams.get("sign");
  if (!timestamp || !signature) {
    context.log("Missing parameters for force refresh. Yield.", {
      level: "debug",
      scope: "refreshStaticPage"
    });
    return next(context);
  }
  const delta = Math.abs(Date.now() - Number(timestamp));
  if (delta > 10 * 1e3) {
    context.log("Request has expired timestamp. Yield.", {
      level: "debug",
      scope: "refreshStaticPage"
    });
    return next(context);
  }
  const verified = await verify(cryptoKey, signature, timestamp);
  if (!verified) {
    context.log("Request has invalid signature. Yield.", {
      level: "debug",
      scope: "refreshStaticPage"
    });
    return next(context);
  }
  const generationResponse = await context.producer.refresh(context.params);
  if (generationResponse === void 0) {
    return next(context);
  }
  await context.cache.add(generationResponse);
  const redirectionUrl = new URL(url2);
  return new Response(null, {
    status: 303,
    // see other
    headers: {
      Location: redirectionUrl.pathname
    }
  });
}

// ../frugal/packages/frugal/src/server/middlewares/router.js
function router(routes) {
  return (context, next) => {
    for (const { page, producer } of routes) {
      const match2 = page.match(context.url.pathname);
      if (match2) {
        context.session?.persist();
        return composedMiddleware(
          {
            ...context,
            page,
            // shallow copy of params because path-to-regexp returns
            // an object with a null prototype that breaks
            // hashableJsonValue.
            params: { ...match2.params },
            producer
          },
          next
        );
      }
    }
    context.log(`no route found for ${context.url.pathname}. Yield.`, {
      level: "debug",
      scope: "route"
    });
    return next(context);
  };
}
var composedMiddleware = composeMiddleware([
  //csrf,
  etag,
  staticOrDynamic
]);
function staticOrDynamic(context, next) {
  if (context.page.type === "dynamic") {
    return dynamicRoute(
      {
        ...context,
        page: context.page
      },
      next
    );
  }
  return Promise.resolve(
    staticRoute(
      {
        ...context,
        page: context.page
      },
      next
    )
  );
}
var staticRoute = composeMiddleware(
  [
    forceGenerateStaticPage,
    refreshStaticPage,
    false,
    serveFromCacheStaticPage,
    refreshJitStaticPage
  ].filter(
    /** @returns {middleware is ((context: context.RouteContext<"static">, next: middleware.Next<context.RouteContext<"static">>) => Promise<Response>)} */
    (middleware) => Boolean(middleware)
  )
);

// ../frugal/packages/frugal/src/server/middlewares/staticFile.js
var ONE_YEAR_IN_SECONDS = 31536e3;
async function staticFile(context, next) {
  const response = await send(context.request, { rootDir: context.config.publicDir });
  if (!response.ok) {
    return response;
  }
  const headers = new Headers(response.headers);
  headers.set("Cache-Control", `max-age=${ONE_YEAR_IN_SECONDS}, immutable`);
  return new Response(response.body, {
    headers,
    status: response.status,
    statusText: response.statusText
  });
}

// ../frugal/packages/frugal/src/server/middlewares/trailingSlashRedirect.js
function trailingSlashRedirect(context, next) {
  const url2 = new URL(context.request.url);
  if (url2.pathname.endsWith("/") && url2.pathname !== "/") {
    return new Response(void 0, {
      status: 301,
      headers: {
        Location: url2.pathname.slice(0, -1)
      }
    });
  }
  return next(context);
}

// ../frugal/packages/frugal/src/server/middlewares/watchModeResponseModification.js
var DECODER2 = new TextDecoder();

// ../frugal/packages/frugal/src/server/session/Session.js
var Session = class {
  /** @type {Map<string, any>} */
  #data;
  /** @type {string|undefined} */
  #id;
  /** @type {boolean} */
  #shouldBePersisted;
  /**
   *
   * @param {sessionStorage.SessionData} [data]
   * @param {string} [id]
   */
  constructor(data = {}, id2 = void 0) {
    this.#id = id2;
    this.#data = new Map(Object.entries(data));
    this.#shouldBePersisted = false;
  }
  get _id() {
    return this.#id;
  }
  get _data() {
    return Object.fromEntries(this.#data);
  }
  get _shouldBePersisted() {
    return this.#shouldBePersisted;
  }
  persist() {
    this.#shouldBePersisted = true;
  }
  /**
   * @template [T = unknown]
   * @param {string} key
   * @returns {T | undefined}
   */
  get(key) {
    return this.#data.get(key);
  }
  /**
   * @template [T = unknown]
   * @param {string} key
   * @param {T} value
   * @returns {void}
   */
  set(key, value) {
    this.#data.set(key, value);
  }
  /**
   * @param {string} key
   * @returns {void}
   */
  delete(key) {
    this.#data.delete(key);
  }
  /**
   *
   * @param {string} key
   * @returns {boolean}
   */
  has(key) {
    return this.#data.has(key);
  }
};

// ../frugal/packages/frugal/src/server/session/SessionManager.js
var DEFAULT_SESSION_COOKIE_NAME = "__frugal_session";
var SessionManager = class {
  /** @type {sessionStorage.SessionStorage} */
  #storage;
  /** @type {http.CookieConfig} */
  #cookie;
  /**
   * @param {_type.SessionManagerConfig} config
   */
  constructor(config3) {
    this.#storage = config3.storage;
    this.#cookie = config3.cookie ?? {};
  }
  /**
   *
   * @param {Headers} headers
   * @returns {Promise<Session>}
   */
  async get(headers) {
    const cookies = getCookies(headers);
    const id2 = cookies[this.#cookie.name ?? DEFAULT_SESSION_COOKIE_NAME];
    if (id2 !== void 0) {
      const data = await this.#storage.get(headers, id2);
      if (data !== void 0) {
        return new Session(data, id2);
      }
    }
    return new Session();
  }
  /**
   *
   * @param {Session} session
   * @param {Headers} headers
   * @returns {Promise<void>}
   */
  async persist(session, headers) {
    if (!session._shouldBePersisted) {
      return;
    }
    const expires = this.#cookie.expires !== void 0 ? Number(this.#cookie.expires) : void 0;
    let id2 = session._id;
    const data = session._data;
    if (id2 !== void 0) {
      await this.#storage.update(headers, id2, data, expires);
    } else {
      id2 = await this.#storage.create(headers, data, expires);
    }
    setCookie(headers, {
      name: DEFAULT_SESSION_COOKIE_NAME,
      ...this.#cookie,
      value: id2
    });
  }
  /**
   *
   * @param {Session} session
   * @param {Headers} headers
   * @returns {Promise<void>}
   */
  async destroy(session, headers) {
    if (session._id !== void 0) {
      await this.#storage.delete(headers, session._id);
    }
    setCookie(headers, {
      name: DEFAULT_SESSION_COOKIE_NAME,
      ...this.#cookie,
      value: "",
      expires: /* @__PURE__ */ new Date(0),
      maxAge: 0
    });
  }
};

// ../frugal/packages/frugal/src/server/Server.js
var Server = class {
  /** @type {FrugalConfig} */
  #config;
  /** @type {boolean} */
  #watch;
  /** @type {middleware.Middleware<context.BaseContext>} */
  #middleware;
  /** @type {SessionManager | undefined} */
  #sessionManager;
  /** @type {cache.RuntimeCache} */
  #cache;
  /**
   * @param {_type.ServerConfig} config
   */
  constructor({ config: config3, manifest, watch, cache }) {
    this.#config = config3 instanceof FrugalConfig ? config3 : new FrugalConfig(config3);
    this.#watch = watch;
    this.#cache = cache;
    if (this.#config.server.session) {
      this.#sessionManager = new SessionManager(this.#config.server.session);
    }
    const routes = manifest.pages.map(({ moduleHash, entrypoint, descriptor }) => {
      const compiledPage = compile2({
        moduleHash,
        entrypoint,
        pageDescriptor: descriptor
      });
      const producer = new Producer(
        manifest.assets,
        compiledPage,
        manifest.config,
        this.#config
      );
      return { page: compiledPage, producer };
    });
    this.#middleware = composeMiddleware(
      [
        trailingSlashRedirect,
        ...this.#config.server.middlewares,
        false,
        router(routes),
        staticFile
      ].filter(
        /** @returns {middleware is middleware.Middleware<context.BaseContext>} */
        (middleware) => Boolean(middleware)
      )
    );
  }
  /**
   * @param {boolean} [secure]
   * @returns {http.NativeHandler}
   */
  nativeHandler(secure) {
    return nativeHandler(this.handler(secure));
  }
  /**
   * @param {boolean} [secure]
   * @returns {http.Handler}
   */
  handler(secure) {
    return async (request, info) => {
      const identifiedLog = (messageOrError, config3) => {
        log(messageOrError, {
          ...config3,
          scope: `${config3?.scope ?? "???"}:${info.identifier}`
        });
      };
      identifiedLog(`${info.hostname} [${request.method}] ${request.url}`, {
        scope: "Server",
        level: "debug"
      });
      try {
        const session = await this.#sessionManager?.get(request.headers);
        const context = {
          request,
          info,
          config: this.#config,
          state: {},
          secure: secure ?? false,
          watch: this.#watch,
          log: identifiedLog,
          cache: this.#cache,
          session,
          url: new URL(request.url)
        };
        const response = await this.#middleware(context, () => {
          return Promise.resolve(
            new Response(null, {
              status: 400
            })
          );
        });
        if (session) {
          await this.#sessionManager?.persist(session, response.headers);
        }
        return response;
      } catch (error) {
        identifiedLog(error, { scope: "FrugalServer" });
        return new Response(null, {
          status: 500
        });
      }
    };
  }
  /**
   * @param {http.ServeOptions} [param0]
   * @returns
   */
  serve({ signal, onListen, port } = {}) {
    const secure = this.#config.server.secure;
    const handler = this.handler(secure);
    return serve(handler, {
      port: port ?? this.#config.server.port,
      signal,
      onListen: (args) => {
        const protocol = secure ? "https" : "http";
        log(`listening on ${protocol}://${args.hostname}:${args.port}`, {
          scope: "FrugalServer"
        });
        onListen?.(args);
      }
    });
  }
};

// frugal:config
var config_default = { "self": "file:///home/whiteshoulders/projects/test-frugal/frugal.config.js", "pages": ["./page1.ts", "./page2.ts", "./page3.ts"], "log": { "level": "silent" }, "outdir": "./dist", "plugins": [] };

// frugal:manifest
var manifest_exports = {};
__export(manifest_exports, {
  assets: () => assets,
  config: () => config2,
  id: () => id,
  pages: () => pages
});

// dist/.temp/build/page1-PUQY75DS.mjs
var page1_PUQY75DS_exports = {};
__export(page1_PUQY75DS_exports, {
  build: () => build,
  generate: () => generate,
  getBuildPaths: () => getBuildPaths,
  render: () => render,
  route: () => route,
  strictPaths: () => strictPaths
});
function format(...classNames) {
  const list = classNames.flatMap((name) => name.split(" "));
  return [...new Set(list)].join(" ");
}
var bar = format("Og4z_W_bar");
var bi = format("Og4z_W_bi");
var biBi = format("Og4z_W_bi-bi");
var bo = format("Og4z_W_bo");
console.log("boo.script.ts", bar, biBi);
if (false) {
  console.log("client");
}
if (true) {
  console.log("server");
}
var route = "/page1/:id/:od";
var strictPaths = false;
function getBuildPaths() {
  return [{ id: "1", od: "1" }];
}
function build() {
  return new DataResponse(
    {},
    {
      headers: { foo: "bar", baz: "bul" },
      status: 400
    }
  );
}
function generate() {
  return new DataResponse(
    {},
    {
      headers: { foo: "bar", baz: "bul" },
      status: 401
    }
  );
}
function render(context) {
  return `page1 ca
${context.assets.get("css").map((asset) => JSON.stringify(asset)).join(" ")}
${context.assets.get("js").map((asset) => JSON.stringify(asset)).join(" ")}`;
}

// dist/.temp/build/page2-DIPG744V.mjs
var page2_DIPG744V_exports = {};
__export(page2_DIPG744V_exports, {
  render: () => render2,
  route: () => route2
});
var route2 = "/page";
function render2(context) {
  return `page2
${context.assets.get("css").map((asset) => JSON.stringify(asset)).join(" ")}
${context.assets.get("js").map((asset) => JSON.stringify(asset)).join(" ")}`;
}

// dist/.temp/build/page3-BJUTRAJB.mjs
var page3_BJUTRAJB_exports = {};
__export(page3_BJUTRAJB_exports, {
  generate: () => generate2,
  render: () => render3,
  route: () => route3,
  type: () => type
});
var type = "dynamic";
var route3 = "/page3/:id/:od";
function generate2({ params }) {
  return new DataResponse({ params });
}
function render3(context) {
  return `page3
${JSON.stringify(context.params)}
${context.assets.get("css").map((asset) => JSON.stringify(asset)).join(" ")}
${context.assets.get("js").map((asset) => JSON.stringify(asset)).join(" ")}`;
}

// frugal:manifest
var id = "19WKE5E";
var config2 = "10760D7";
var assets = [
  {
    "type": "css",
    "scope": "global",
    "path": "/css/stdin-ENQ7LZK6.css"
  },
  {
    "type": "js",
    "scope": "page",
    "entrypoint": "page1.ts",
    "path": "/js/page1-2TCUOU5B.mjs"
  }
];
var pages = [
  {
    "moduleHash": "1PE4DH1",
    "entrypoint": "page1.ts",
    "outputPath": "dist/.temp/build/page1-PUQY75DS.mjs",
    "descriptor": page1_PUQY75DS_exports
  },
  {
    "moduleHash": "16FYM1P",
    "entrypoint": "page2.ts",
    "outputPath": "dist/.temp/build/page2-DIPG744V.mjs",
    "descriptor": page2_DIPG744V_exports
  },
  {
    "moduleHash": "LPLZXQ",
    "entrypoint": "page3.ts",
    "outputPath": "dist/.temp/build/page3-BJUTRAJB.mjs",
    "descriptor": page3_BJUTRAJB_exports
  }
];

// <stdin>
var server = new Server({
  config: config_default,
  watch: false,
  manifest: manifest_exports,
  cache: new Cache(new KvStorage())
});
module.export = server.nativeHandler(true);
/*! Bundled license information:

cookie/index.js:
  (*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)

imurmurhash/imurmurhash.js:
  (**
   * @preserve
   * JS Implementation of incremental MurmurHash3 (r150) (as of May 10, 2013)
   *
   * @author <a href="mailto:jensyt@gmail.com">Jens Taylor</a>
   * @see http://github.com/homebrewing/brauhaus-diff
   * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
   * @see http://github.com/garycourt/murmurhash-js
   * @author <a href="mailto:aappleby@gmail.com">Austin Appleby</a>
   * @see http://sites.google.com/site/murmurhash/
   *)
*/
