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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/compressorjs/dist/compressor.js
var require_compressor = __commonJS({
  "node_modules/compressorjs/dist/compressor.js"(exports, module2) {
    (function(global, factory) {
      typeof exports === "object" && typeof module2 !== "undefined" ? module2.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.Compressor = factory());
    })(exports, function() {
      "use strict";
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          })), keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread2(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
        return target;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
          writable: false
        });
        return Constructor;
      }
      function _defineProperty(obj, key, value) {
        key = _toPropertyKey(key);
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      function _extends() {
        _extends = Object.assign ? Object.assign.bind() : function(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };
        return _extends.apply(this, arguments);
      }
      function _toPrimitive(input, hint) {
        if (typeof input !== "object" || input === null) return input;
        var prim = input[Symbol.toPrimitive];
        if (prim !== void 0) {
          var res = prim.call(input, hint || "default");
          if (typeof res !== "object") return res;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (hint === "string" ? String : Number)(input);
      }
      function _toPropertyKey(arg) {
        var key = _toPrimitive(arg, "string");
        return typeof key === "symbol" ? key : String(key);
      }
      var canvasToBlob = { exports: {} };
      (function(module3) {
        if (typeof window === "undefined") {
          return;
        }
        (function(window2) {
          var CanvasPrototype = window2.HTMLCanvasElement && window2.HTMLCanvasElement.prototype;
          var hasBlobConstructor = window2.Blob && function() {
            try {
              return Boolean(new Blob());
            } catch (e) {
              return false;
            }
          }();
          var hasArrayBufferViewSupport = hasBlobConstructor && window2.Uint8Array && function() {
            try {
              return new Blob([new Uint8Array(100)]).size === 100;
            } catch (e) {
              return false;
            }
          }();
          var BlobBuilder = window2.BlobBuilder || window2.WebKitBlobBuilder || window2.MozBlobBuilder || window2.MSBlobBuilder;
          var dataURIPattern = /^data:((.*?)(;charset=.*?)?)(;base64)?,/;
          var dataURLtoBlob = (hasBlobConstructor || BlobBuilder) && window2.atob && window2.ArrayBuffer && window2.Uint8Array && function(dataURI) {
            var matches, mediaType, isBase64, dataString, byteString, arrayBuffer, intArray, i, bb;
            matches = dataURI.match(dataURIPattern);
            if (!matches) {
              throw new Error("invalid data URI");
            }
            mediaType = matches[2] ? matches[1] : "text/plain" + (matches[3] || ";charset=US-ASCII");
            isBase64 = !!matches[4];
            dataString = dataURI.slice(matches[0].length);
            if (isBase64) {
              byteString = atob(dataString);
            } else {
              byteString = decodeURIComponent(dataString);
            }
            arrayBuffer = new ArrayBuffer(byteString.length);
            intArray = new Uint8Array(arrayBuffer);
            for (i = 0; i < byteString.length; i += 1) {
              intArray[i] = byteString.charCodeAt(i);
            }
            if (hasBlobConstructor) {
              return new Blob([hasArrayBufferViewSupport ? intArray : arrayBuffer], {
                type: mediaType
              });
            }
            bb = new BlobBuilder();
            bb.append(arrayBuffer);
            return bb.getBlob(mediaType);
          };
          if (window2.HTMLCanvasElement && !CanvasPrototype.toBlob) {
            if (CanvasPrototype.mozGetAsFile) {
              CanvasPrototype.toBlob = function(callback, type, quality) {
                var self2 = this;
                setTimeout(function() {
                  if (quality && CanvasPrototype.toDataURL && dataURLtoBlob) {
                    callback(dataURLtoBlob(self2.toDataURL(type, quality)));
                  } else {
                    callback(self2.mozGetAsFile("blob", type));
                  }
                });
              };
            } else if (CanvasPrototype.toDataURL && dataURLtoBlob) {
              if (CanvasPrototype.msToBlob) {
                CanvasPrototype.toBlob = function(callback, type, quality) {
                  var self2 = this;
                  setTimeout(function() {
                    if ((type && type !== "image/png" || quality) && CanvasPrototype.toDataURL && dataURLtoBlob) {
                      callback(dataURLtoBlob(self2.toDataURL(type, quality)));
                    } else {
                      callback(self2.msToBlob(type));
                    }
                  });
                };
              } else {
                CanvasPrototype.toBlob = function(callback, type, quality) {
                  var self2 = this;
                  setTimeout(function() {
                    callback(dataURLtoBlob(self2.toDataURL(type, quality)));
                  });
                };
              }
            }
          }
          if (module3.exports) {
            module3.exports = dataURLtoBlob;
          } else {
            window2.dataURLtoBlob = dataURLtoBlob;
          }
        })(window);
      })(canvasToBlob);
      var toBlob = canvasToBlob.exports;
      var isBlob = function isBlob2(value) {
        if (typeof Blob === "undefined") {
          return false;
        }
        return value instanceof Blob || Object.prototype.toString.call(value) === "[object Blob]";
      };
      var DEFAULTS = {
        /**
         * Indicates if output the original image instead of the compressed one
         * when the size of the compressed image is greater than the original one's
         * @type {boolean}
         */
        strict: true,
        /**
         * Indicates if read the image's Exif Orientation information,
         * and then rotate or flip the image automatically.
         * @type {boolean}
         */
        checkOrientation: true,
        /**
         * Indicates if retain the image's Exif information after compressed.
         * @type {boolean}
        */
        retainExif: false,
        /**
         * The max width of the output image.
         * @type {number}
         */
        maxWidth: Infinity,
        /**
         * The max height of the output image.
         * @type {number}
         */
        maxHeight: Infinity,
        /**
         * The min width of the output image.
         * @type {number}
         */
        minWidth: 0,
        /**
         * The min height of the output image.
         * @type {number}
         */
        minHeight: 0,
        /**
         * The width of the output image.
         * If not specified, the natural width of the source image will be used.
         * @type {number}
         */
        width: void 0,
        /**
         * The height of the output image.
         * If not specified, the natural height of the source image will be used.
         * @type {number}
         */
        height: void 0,
        /**
         * Sets how the size of the image should be resized to the container
         * specified by the `width` and `height` options.
         * @type {string}
         */
        resize: "none",
        /**
         * The quality of the output image.
         * It must be a number between `0` and `1`,
         * and only available for `image/jpeg` and `image/webp` images.
         * Check out {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob canvas.toBlob}.
         * @type {number}
         */
        quality: 0.8,
        /**
         * The mime type of the output image.
         * By default, the original mime type of the source image file will be used.
         * @type {string}
         */
        mimeType: "auto",
        /**
         * Files whose file type is included in this list,
         * and whose file size exceeds the `convertSize` value will be converted to JPEGs.
         * @type {string｜Array}
         */
        convertTypes: ["image/png"],
        /**
         * PNG files over this size (5 MB by default) will be converted to JPEGs.
         * To disable this, just set the value to `Infinity`.
         * @type {number}
         */
        convertSize: 5e6,
        /**
         * The hook function to execute before draw the image into the canvas for compression.
         * @type {Function}
         * @param {CanvasRenderingContext2D} context - The 2d rendering context of the canvas.
         * @param {HTMLCanvasElement} canvas - The canvas for compression.
         * @example
         * function (context, canvas) {
         *   context.fillStyle = '#fff';
         * }
         */
        beforeDraw: null,
        /**
         * The hook function to execute after drew the image into the canvas for compression.
         * @type {Function}
         * @param {CanvasRenderingContext2D} context - The 2d rendering context of the canvas.
         * @param {HTMLCanvasElement} canvas - The canvas for compression.
         * @example
         * function (context, canvas) {
         *   context.filter = 'grayscale(100%)';
         * }
         */
        drew: null,
        /**
         * The hook function to execute when success to compress the image.
         * @type {Function}
         * @param {File} file - The compressed image File object.
         * @example
         * function (file) {
         *   console.log(file);
         * }
         */
        success: null,
        /**
         * The hook function to execute when fail to compress the image.
         * @type {Function}
         * @param {Error} err - An Error object.
         * @example
         * function (err) {
         *   console.log(err.message);
         * }
         */
        error: null
      };
      var IS_BROWSER = typeof window !== "undefined" && typeof window.document !== "undefined";
      var WINDOW = IS_BROWSER ? window : {};
      var isPositiveNumber = function isPositiveNumber2(value) {
        return value > 0 && value < Infinity;
      };
      var slice = Array.prototype.slice;
      function toArray(value) {
        return Array.from ? Array.from(value) : slice.call(value);
      }
      var REGEXP_IMAGE_TYPE = /^image\/.+$/;
      function isImageType(value) {
        return REGEXP_IMAGE_TYPE.test(value);
      }
      function imageTypeToExtension(value) {
        var extension = isImageType(value) ? value.substr(6) : "";
        if (extension === "jpeg") {
          extension = "jpg";
        }
        return ".".concat(extension);
      }
      var fromCharCode = String.fromCharCode;
      function getStringFromCharCode(dataView, start, length) {
        var str = "";
        var i;
        length += start;
        for (i = start; i < length; i += 1) {
          str += fromCharCode(dataView.getUint8(i));
        }
        return str;
      }
      var btoa = WINDOW.btoa;
      function arrayBufferToDataURL(arrayBuffer, mimeType) {
        var chunks = [];
        var chunkSize = 8192;
        var uint8 = new Uint8Array(arrayBuffer);
        while (uint8.length > 0) {
          chunks.push(fromCharCode.apply(null, toArray(uint8.subarray(0, chunkSize))));
          uint8 = uint8.subarray(chunkSize);
        }
        return "data:".concat(mimeType, ";base64,").concat(btoa(chunks.join("")));
      }
      function resetAndGetOrientation(arrayBuffer) {
        var dataView = new DataView(arrayBuffer);
        var orientation;
        try {
          var littleEndian;
          var app1Start;
          var ifdStart;
          if (dataView.getUint8(0) === 255 && dataView.getUint8(1) === 216) {
            var length = dataView.byteLength;
            var offset = 2;
            while (offset + 1 < length) {
              if (dataView.getUint8(offset) === 255 && dataView.getUint8(offset + 1) === 225) {
                app1Start = offset;
                break;
              }
              offset += 1;
            }
          }
          if (app1Start) {
            var exifIDCode = app1Start + 4;
            var tiffOffset = app1Start + 10;
            if (getStringFromCharCode(dataView, exifIDCode, 4) === "Exif") {
              var endianness = dataView.getUint16(tiffOffset);
              littleEndian = endianness === 18761;
              if (littleEndian || endianness === 19789) {
                if (dataView.getUint16(tiffOffset + 2, littleEndian) === 42) {
                  var firstIFDOffset = dataView.getUint32(tiffOffset + 4, littleEndian);
                  if (firstIFDOffset >= 8) {
                    ifdStart = tiffOffset + firstIFDOffset;
                  }
                }
              }
            }
          }
          if (ifdStart) {
            var _length = dataView.getUint16(ifdStart, littleEndian);
            var _offset;
            var i;
            for (i = 0; i < _length; i += 1) {
              _offset = ifdStart + i * 12 + 2;
              if (dataView.getUint16(_offset, littleEndian) === 274) {
                _offset += 8;
                orientation = dataView.getUint16(_offset, littleEndian);
                dataView.setUint16(_offset, 1, littleEndian);
                break;
              }
            }
          }
        } catch (e) {
          orientation = 1;
        }
        return orientation;
      }
      function parseOrientation(orientation) {
        var rotate = 0;
        var scaleX = 1;
        var scaleY = 1;
        switch (orientation) {
          // Flip horizontal
          case 2:
            scaleX = -1;
            break;
          // Rotate left 180°
          case 3:
            rotate = -180;
            break;
          // Flip vertical
          case 4:
            scaleY = -1;
            break;
          // Flip vertical and rotate right 90°
          case 5:
            rotate = 90;
            scaleY = -1;
            break;
          // Rotate right 90°
          case 6:
            rotate = 90;
            break;
          // Flip horizontal and rotate right 90°
          case 7:
            rotate = 90;
            scaleX = -1;
            break;
          // Rotate left 90°
          case 8:
            rotate = -90;
            break;
        }
        return {
          rotate,
          scaleX,
          scaleY
        };
      }
      var REGEXP_DECIMALS = /\.\d*(?:0|9){12}\d*$/;
      function normalizeDecimalNumber(value) {
        var times = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
        return REGEXP_DECIMALS.test(value) ? Math.round(value * times) / times : value;
      }
      function getAdjustedSizes(_ref) {
        var aspectRatio = _ref.aspectRatio, height = _ref.height, width = _ref.width;
        var type = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "none";
        var isValidWidth = isPositiveNumber(width);
        var isValidHeight = isPositiveNumber(height);
        if (isValidWidth && isValidHeight) {
          var adjustedWidth = height * aspectRatio;
          if ((type === "contain" || type === "none") && adjustedWidth > width || type === "cover" && adjustedWidth < width) {
            height = width / aspectRatio;
          } else {
            width = height * aspectRatio;
          }
        } else if (isValidWidth) {
          height = width / aspectRatio;
        } else if (isValidHeight) {
          width = height * aspectRatio;
        }
        return {
          width,
          height
        };
      }
      function getExif(arrayBuffer) {
        var array = toArray(new Uint8Array(arrayBuffer));
        var length = array.length;
        var segments = [];
        var start = 0;
        while (start + 3 < length) {
          var value = array[start];
          var next = array[start + 1];
          if (value === 255 && next === 218) {
            break;
          }
          if (value === 255 && next === 216) {
            start += 2;
          } else {
            var offset = array[start + 2] * 256 + array[start + 3];
            var end = start + offset + 2;
            var segment = array.slice(start, end);
            segments.push(segment);
            start = end;
          }
        }
        return segments.reduce(function(exifArray, current) {
          if (current[0] === 255 && current[1] === 225) {
            return exifArray.concat(current);
          }
          return exifArray;
        }, []);
      }
      function insertExif(arrayBuffer, exifArray) {
        var array = toArray(new Uint8Array(arrayBuffer));
        if (array[2] !== 255 || array[3] !== 224) {
          return arrayBuffer;
        }
        var app0Length = array[4] * 256 + array[5];
        var newArrayBuffer = [255, 216].concat(exifArray, array.slice(4 + app0Length));
        return new Uint8Array(newArrayBuffer);
      }
      var ArrayBuffer$1 = WINDOW.ArrayBuffer, FileReader = WINDOW.FileReader;
      var URL = WINDOW.URL || WINDOW.webkitURL;
      var REGEXP_EXTENSION = /\.\w+$/;
      var AnotherCompressor = WINDOW.Compressor;
      var Compressor2 = /* @__PURE__ */ function() {
        function Compressor3(file, options) {
          _classCallCheck(this, Compressor3);
          this.file = file;
          this.exif = [];
          this.image = new Image();
          this.options = _objectSpread2(_objectSpread2({}, DEFAULTS), options);
          this.aborted = false;
          this.result = null;
          this.init();
        }
        _createClass(Compressor3, [{
          key: "init",
          value: function init() {
            var _this = this;
            var file = this.file, options = this.options;
            if (!isBlob(file)) {
              this.fail(new Error("The first argument must be a File or Blob object."));
              return;
            }
            var mimeType = file.type;
            if (!isImageType(mimeType)) {
              this.fail(new Error("The first argument must be an image File or Blob object."));
              return;
            }
            if (!URL || !FileReader) {
              this.fail(new Error("The current browser does not support image compression."));
              return;
            }
            if (!ArrayBuffer$1) {
              options.checkOrientation = false;
              options.retainExif = false;
            }
            var isJPEGImage = mimeType === "image/jpeg";
            var checkOrientation = isJPEGImage && options.checkOrientation;
            var retainExif = isJPEGImage && options.retainExif;
            if (URL && !checkOrientation && !retainExif) {
              this.load({
                url: URL.createObjectURL(file)
              });
            } else {
              var reader = new FileReader();
              this.reader = reader;
              reader.onload = function(_ref) {
                var target = _ref.target;
                var result = target.result;
                var data = {};
                var orientation = 1;
                if (checkOrientation) {
                  orientation = resetAndGetOrientation(result);
                  if (orientation > 1) {
                    _extends(data, parseOrientation(orientation));
                  }
                }
                if (retainExif) {
                  _this.exif = getExif(result);
                }
                if (checkOrientation || retainExif) {
                  if (!URL || orientation > 1) {
                    data.url = arrayBufferToDataURL(result, mimeType);
                  } else {
                    data.url = URL.createObjectURL(file);
                  }
                } else {
                  data.url = result;
                }
                _this.load(data);
              };
              reader.onabort = function() {
                _this.fail(new Error("Aborted to read the image with FileReader."));
              };
              reader.onerror = function() {
                _this.fail(new Error("Failed to read the image with FileReader."));
              };
              reader.onloadend = function() {
                _this.reader = null;
              };
              if (checkOrientation || retainExif) {
                reader.readAsArrayBuffer(file);
              } else {
                reader.readAsDataURL(file);
              }
            }
          }
        }, {
          key: "load",
          value: function load(data) {
            var _this2 = this;
            var file = this.file, image = this.image;
            image.onload = function() {
              _this2.draw(_objectSpread2(_objectSpread2({}, data), {}, {
                naturalWidth: image.naturalWidth,
                naturalHeight: image.naturalHeight
              }));
            };
            image.onabort = function() {
              _this2.fail(new Error("Aborted to load the image."));
            };
            image.onerror = function() {
              _this2.fail(new Error("Failed to load the image."));
            };
            if (WINDOW.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(WINDOW.navigator.userAgent)) {
              image.crossOrigin = "anonymous";
            }
            image.alt = file.name;
            image.src = data.url;
          }
        }, {
          key: "draw",
          value: function draw(_ref2) {
            var _this3 = this;
            var naturalWidth = _ref2.naturalWidth, naturalHeight = _ref2.naturalHeight, _ref2$rotate = _ref2.rotate, rotate = _ref2$rotate === void 0 ? 0 : _ref2$rotate, _ref2$scaleX = _ref2.scaleX, scaleX = _ref2$scaleX === void 0 ? 1 : _ref2$scaleX, _ref2$scaleY = _ref2.scaleY, scaleY = _ref2$scaleY === void 0 ? 1 : _ref2$scaleY;
            var file = this.file, image = this.image, options = this.options;
            var canvas = document.createElement("canvas");
            var context = canvas.getContext("2d");
            var is90DegreesRotated = Math.abs(rotate) % 180 === 90;
            var resizable = (options.resize === "contain" || options.resize === "cover") && isPositiveNumber(options.width) && isPositiveNumber(options.height);
            var maxWidth = Math.max(options.maxWidth, 0) || Infinity;
            var maxHeight = Math.max(options.maxHeight, 0) || Infinity;
            var minWidth = Math.max(options.minWidth, 0) || 0;
            var minHeight = Math.max(options.minHeight, 0) || 0;
            var aspectRatio = naturalWidth / naturalHeight;
            var width = options.width, height = options.height;
            if (is90DegreesRotated) {
              var _ref3 = [maxHeight, maxWidth];
              maxWidth = _ref3[0];
              maxHeight = _ref3[1];
              var _ref4 = [minHeight, minWidth];
              minWidth = _ref4[0];
              minHeight = _ref4[1];
              var _ref5 = [height, width];
              width = _ref5[0];
              height = _ref5[1];
            }
            if (resizable) {
              aspectRatio = width / height;
            }
            var _getAdjustedSizes = getAdjustedSizes({
              aspectRatio,
              width: maxWidth,
              height: maxHeight
            }, "contain");
            maxWidth = _getAdjustedSizes.width;
            maxHeight = _getAdjustedSizes.height;
            var _getAdjustedSizes2 = getAdjustedSizes({
              aspectRatio,
              width: minWidth,
              height: minHeight
            }, "cover");
            minWidth = _getAdjustedSizes2.width;
            minHeight = _getAdjustedSizes2.height;
            if (resizable) {
              var _getAdjustedSizes3 = getAdjustedSizes({
                aspectRatio,
                width,
                height
              }, options.resize);
              width = _getAdjustedSizes3.width;
              height = _getAdjustedSizes3.height;
            } else {
              var _getAdjustedSizes4 = getAdjustedSizes({
                aspectRatio,
                width,
                height
              });
              var _getAdjustedSizes4$wi = _getAdjustedSizes4.width;
              width = _getAdjustedSizes4$wi === void 0 ? naturalWidth : _getAdjustedSizes4$wi;
              var _getAdjustedSizes4$he = _getAdjustedSizes4.height;
              height = _getAdjustedSizes4$he === void 0 ? naturalHeight : _getAdjustedSizes4$he;
            }
            width = Math.floor(normalizeDecimalNumber(Math.min(Math.max(width, minWidth), maxWidth)));
            height = Math.floor(normalizeDecimalNumber(Math.min(Math.max(height, minHeight), maxHeight)));
            var destX = -width / 2;
            var destY = -height / 2;
            var destWidth = width;
            var destHeight = height;
            var params = [];
            if (resizable) {
              var srcX = 0;
              var srcY = 0;
              var srcWidth = naturalWidth;
              var srcHeight = naturalHeight;
              var _getAdjustedSizes5 = getAdjustedSizes({
                aspectRatio,
                width: naturalWidth,
                height: naturalHeight
              }, {
                contain: "cover",
                cover: "contain"
              }[options.resize]);
              srcWidth = _getAdjustedSizes5.width;
              srcHeight = _getAdjustedSizes5.height;
              srcX = (naturalWidth - srcWidth) / 2;
              srcY = (naturalHeight - srcHeight) / 2;
              params.push(srcX, srcY, srcWidth, srcHeight);
            }
            params.push(destX, destY, destWidth, destHeight);
            if (is90DegreesRotated) {
              var _ref6 = [height, width];
              width = _ref6[0];
              height = _ref6[1];
            }
            canvas.width = width;
            canvas.height = height;
            if (!isImageType(options.mimeType)) {
              options.mimeType = file.type;
            }
            var fillStyle = "transparent";
            if (file.size > options.convertSize && options.convertTypes.indexOf(options.mimeType) >= 0) {
              options.mimeType = "image/jpeg";
            }
            var isJPEGImage = options.mimeType === "image/jpeg";
            if (isJPEGImage) {
              fillStyle = "#fff";
            }
            context.fillStyle = fillStyle;
            context.fillRect(0, 0, width, height);
            if (options.beforeDraw) {
              options.beforeDraw.call(this, context, canvas);
            }
            if (this.aborted) {
              return;
            }
            context.save();
            context.translate(width / 2, height / 2);
            context.rotate(rotate * Math.PI / 180);
            context.scale(scaleX, scaleY);
            context.drawImage.apply(context, [image].concat(params));
            context.restore();
            if (options.drew) {
              options.drew.call(this, context, canvas);
            }
            if (this.aborted) {
              return;
            }
            var callback = function callback2(blob) {
              if (!_this3.aborted) {
                var done = function done2(result) {
                  return _this3.done({
                    naturalWidth,
                    naturalHeight,
                    result
                  });
                };
                if (blob && isJPEGImage && options.retainExif && _this3.exif && _this3.exif.length > 0) {
                  var next = function next2(arrayBuffer) {
                    return done(toBlob(arrayBufferToDataURL(insertExif(arrayBuffer, _this3.exif), options.mimeType)));
                  };
                  if (blob.arrayBuffer) {
                    blob.arrayBuffer().then(next).catch(function() {
                      _this3.fail(new Error("Failed to read the compressed image with Blob.arrayBuffer()."));
                    });
                  } else {
                    var reader = new FileReader();
                    _this3.reader = reader;
                    reader.onload = function(_ref7) {
                      var target = _ref7.target;
                      next(target.result);
                    };
                    reader.onabort = function() {
                      _this3.fail(new Error("Aborted to read the compressed image with FileReader."));
                    };
                    reader.onerror = function() {
                      _this3.fail(new Error("Failed to read the compressed image with FileReader."));
                    };
                    reader.onloadend = function() {
                      _this3.reader = null;
                    };
                    reader.readAsArrayBuffer(blob);
                  }
                } else {
                  done(blob);
                }
              }
            };
            if (canvas.toBlob) {
              canvas.toBlob(callback, options.mimeType, options.quality);
            } else {
              callback(toBlob(canvas.toDataURL(options.mimeType, options.quality)));
            }
          }
        }, {
          key: "done",
          value: function done(_ref8) {
            var naturalWidth = _ref8.naturalWidth, naturalHeight = _ref8.naturalHeight, result = _ref8.result;
            var file = this.file, image = this.image, options = this.options;
            if (URL && image.src.indexOf("blob:") === 0) {
              URL.revokeObjectURL(image.src);
            }
            if (result) {
              if (options.strict && !options.retainExif && result.size > file.size && options.mimeType === file.type && !(options.width > naturalWidth || options.height > naturalHeight || options.minWidth > naturalWidth || options.minHeight > naturalHeight || options.maxWidth < naturalWidth || options.maxHeight < naturalHeight)) {
                result = file;
              } else {
                var date = /* @__PURE__ */ new Date();
                result.lastModified = date.getTime();
                result.lastModifiedDate = date;
                result.name = file.name;
                if (result.name && result.type !== file.type) {
                  result.name = result.name.replace(REGEXP_EXTENSION, imageTypeToExtension(result.type));
                }
              }
            } else {
              result = file;
            }
            this.result = result;
            if (options.success) {
              options.success.call(this, result);
            }
          }
        }, {
          key: "fail",
          value: function fail(err) {
            var options = this.options;
            if (options.error) {
              options.error.call(this, err);
            } else {
              throw err;
            }
          }
        }, {
          key: "abort",
          value: function abort() {
            if (!this.aborted) {
              this.aborted = true;
              if (this.reader) {
                this.reader.abort();
              } else if (!this.image.complete) {
                this.image.onload = null;
                this.image.onabort();
              } else {
                this.fail(new Error("The compression process has been aborted."));
              }
            }
          }
          /**
           * Get the no conflict compressor class.
           * @returns {Compressor} The compressor class.
           */
        }], [{
          key: "noConflict",
          value: function noConflict() {
            window.Compressor = AnotherCompressor;
            return Compressor3;
          }
          /**
           * Change the default options.
           * @param {Object} options - The new default options.
           */
        }, {
          key: "setDefaults",
          value: function setDefaults(options) {
            _extends(DEFAULTS, options);
          }
        }]);
        return Compressor3;
      }();
      return Compressor2;
    });
  }
});

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => CameraEmbedPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian4 = require("obsidian");

// src/settings.ts
var import_obsidian = require("obsidian");
var DEFAULT_SETTINGS = {
  photosFolder: "",
  createFolderIfMissing: true,
  saveNearTheNote: false,
  compressImages: false,
  compressQuality: 0.8,
  imagePicker: false
};
var CameraEmbedSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    new import_obsidian.Setting(containerEl).setName("Platform support").setDesc(
      "This plugin is primarily designed for Android. Some features may be limited or unavailable on iOS and desktop."
    );
    new import_obsidian.Setting(containerEl).setName("Save images").setHeading();
    new import_obsidian.Setting(containerEl).setName("Photos folder").setDesc(
      "Optional, use a vault-relative path like attachments/camera, leave blank to store next to the note."
    ).addText(
      (text) => text.setValue(this.plugin.settings.photosFolder).onChange(async (value) => {
        this.plugin.settings.photosFolder = value;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Create folder if missing").setDesc("Automatically create the photos folder if it does not exist.").addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.createFolderIfMissing).onChange(async (value) => {
        this.plugin.settings.createFolderIfMissing = value;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Save near the note").setDesc(
      "When enabled, photos will be saved in the same folder as the note, or inside a photos folder within that same directory."
    ).addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.saveNearTheNote).onChange(async (value) => {
        this.plugin.settings.saveNearTheNote = value;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Compress images").setHeading();
    new import_obsidian.Setting(containerEl).setName("Compress images").setDesc("Reduce photo file sizes by compressing them before saving.").addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.compressImages).onChange(async (value) => {
        this.plugin.settings.compressImages = value;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Compress quality").setDesc("Adjust the quality of compressed images. Lower values result in smaller files but worse quality.").addSlider(
      (slider) => slider.setLimits(0, 0.9, 0.05).setValue(this.plugin.settings.compressQuality).onChange(async (value) => {
        this.plugin.settings.compressQuality = value;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Picker (optional)").setHeading();
    new import_obsidian.Setting(containerEl).setName("Image picker (optional)").setDesc("Show a prompt to choose between taking a new photo or picking an existing one from the gallery. This option is only relevant for Android, which supports both features. Do nothing on iOS/desktop.").addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.imagePicker).onChange(async (value) => {
        this.plugin.settings.imagePicker = value;
        await this.plugin.saveSettings();
      })
    );
  }
};

// src/compressor.ts
var import_compressorjs = __toESM(require_compressor(), 1);
function compressImage(file, quality) {
  return new Promise((resolve, reject) => {
    new import_compressorjs.default(file, {
      quality,
      maxWidth: 1920,
      maxHeight: 1080,
      convertSize: 0,
      success: resolve,
      error: reject
    });
  });
}

// src/file-utils.ts
var import_obsidian2 = require("obsidian");
function buildFileName(file) {
  var _a, _b;
  const stamp = (/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-");
  const fallbackExt = (_a = extensionFromType(file.type)) != null ? _a : "jpg";
  const ext = (_b = extensionFromName(file.name)) != null ? _b : fallbackExt;
  return `photo-${stamp}.${ext}`;
}
function extensionFromName(name) {
  var _a;
  const match = name.match(/\.([a-zA-Z0-9]+)$/);
  return (_a = match == null ? void 0 : match[1]) != null ? _a : null;
}
function extensionFromType(mimeType) {
  if (!mimeType.startsWith("image/")) return null;
  const subtype = mimeType.split("/")[1];
  if (!subtype) return null;
  return subtype.replace("jpeg", "jpg");
}
function joinPath(parentPath, fileName) {
  if (!parentPath) return fileName;
  return `${parentPath}/${fileName}`;
}
function getAvailablePath(vault, path) {
  var _a;
  if (!vault.getAbstractFileByPath(path)) return path;
  const parts = path.split("/");
  const name = (_a = parts.pop()) != null ? _a : path;
  const dir = parts.length > 0 ? `${parts.join("/")}/` : "";
  const extIndex = name.lastIndexOf(".");
  const base = extIndex === -1 ? name : name.slice(0, extIndex);
  const ext = extIndex === -1 ? "" : name.slice(extIndex);
  for (let i = 1; i < 1e3; i++) {
    const candidate = `${dir}${base}-${i}${ext}`;
    if (!vault.getAbstractFileByPath(candidate)) return candidate;
  }
  return `${dir}${base}-${Date.now()}${ext}`;
}
function folderExists(vault, path) {
  const file = vault.getAbstractFileByPath(path);
  return file instanceof import_obsidian2.TFolder;
}

// src/input-utils.ts
async function pickImageFromCamera(source = "gallery") {
  return new Promise((resolve) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    if (source === "camera") {
      input.capture = "environment";
    }
    input.addClass("camera-hidden");
    const timeoutId = setTimeout(() => {
      input.remove();
      resolve(null);
    }, 6e4);
    const cleanup = (file) => {
      clearTimeout(timeoutId);
      input.remove();
      resolve(file);
    };
    input.addEventListener("change", () => {
      const file = input.files && input.files.length > 0 ? input.files[0] : null;
      cleanup(file);
    });
    document.body.appendChild(input);
    input.click();
  });
}

// src/picker-modal.ts
var import_obsidian3 = require("obsidian");
var PickerModal = class extends import_obsidian3.Modal {
  constructor(app, onChoose) {
    super(app);
    this.resolve = onChoose;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.createEl("h2", { text: "Insert photo" });
    const buttonContainer = contentEl.createDiv({ cls: "picker-modal-buttons" });
    const cameraBtn = buttonContainer.createEl("button", { cls: "mod-cta" });
    const cameraIcon = cameraBtn.createSpan();
    (0, import_obsidian3.setIcon)(cameraIcon, "camera");
    cameraBtn.appendText("Take photo");
    cameraBtn.addEventListener("click", () => {
      this.resolve("camera");
      this.close();
    });
    const galleryBtn = buttonContainer.createEl("button");
    const galleryIcon = galleryBtn.createSpan();
    (0, import_obsidian3.setIcon)(galleryIcon, "images");
    galleryBtn.appendText("Choose from gallery");
    galleryBtn.addEventListener("click", () => {
      this.resolve("gallery");
      this.close();
    });
    this.scope.register([], "Escape", () => {
      this.resolve(null);
      this.close();
    });
  }
  onClose() {
    this.contentEl.empty();
  }
};

// src/main.ts
var CameraEmbedPlugin = class extends import_obsidian4.Plugin {
  async onload() {
    await this.loadSettings();
    this.addSettingTab(new CameraEmbedSettingTab(this.app, this));
    this.addRibbonIcon("camera", "Capture photo", () => {
      if (this.settings.imagePicker) {
        new PickerModal(this.app, (result) => {
          if (result) void this.captureAndEmbed(result);
        }).open();
      } else {
        void this.captureAndEmbed("camera");
      }
    });
    this.addCommand({
      id: "capture-photo-embed",
      name: "Capture photo and embed",
      icon: "camera",
      callback: () => {
        if (this.settings.imagePicker) {
          new PickerModal(this.app, (result) => {
            if (result) void this.captureAndEmbed(result);
          }).open();
        } else {
          void this.captureAndEmbed("camera");
        }
      }
    });
  }
  async captureAndEmbed(source) {
    var _a;
    const view = this.app.workspace.getActiveViewOfType(import_obsidian4.MarkdownView);
    if (!view) {
      new import_obsidian4.Notice("Please open a Markdown note to insert the photo.");
      return;
    }
    const activeFile = view.file;
    if (!activeFile) {
      new import_obsidian4.Notice("No active note to insert the photo.");
      return;
    }
    const file = await pickImageFromCamera(source);
    if (!file) return;
    let finalFile = file;
    if (this.settings.compressImages) {
      finalFile = await compressImage(file, this.settings.compressQuality);
    }
    const arrayBuffer = await finalFile.arrayBuffer();
    const filePath = (_a = activeFile.parent) == null ? void 0 : _a.path;
    const targetFolderPath = await this.ensureTargetFolder(filePath);
    if (targetFolderPath === null) return;
    const fileName = buildFileName(file);
    const targetPath = getAvailablePath(this.app.vault, joinPath(targetFolderPath, fileName));
    const created = await this.app.vault.createBinary(targetPath, arrayBuffer);
    const link = this.app.fileManager.generateMarkdownLink(created, activeFile.path);
    view.editor.replaceSelection(`!${link}`);
  }
  /**
   * Determines the folder path where the photo should be saved,
   * and creates it if missing (when `createFolderIfMissing` is true).
   *
   * @param noteFolderPath – the path of the folder containing the active note
   *                        (maybe empty string if note is in vault root)
   * @returns The normalized target folder path (empty string for vault root),
   *          or `null` if the folder cannot be used/created.
   */
  async ensureTargetFolder(noteFolderPath) {
    const rawPhotosFolder = this.settings.photosFolder.trim();
    const saveNear = this.settings.saveNearTheNote;
    if (saveNear) {
      const baseFolder = noteFolderPath != null ? noteFolderPath : "";
      if (rawPhotosFolder === "") {
        return baseFolder;
      } else {
        const target = baseFolder ? `${baseFolder}/${rawPhotosFolder}` : rawPhotosFolder;
        const normalized2 = (0, import_obsidian4.normalizePath)(target);
        if (folderExists(this.app.vault, normalized2)) return normalized2;
        if (!this.settings.createFolderIfMissing) {
          new import_obsidian4.Notice(`Folder not found: ${normalized2}`);
          return null;
        }
        try {
          await this.app.vault.createFolder(normalized2);
          return normalized2;
        } catch (error) {
          new import_obsidian4.Notice(`Failed to create folder: ${normalized2}`);
          console.error(error);
          return null;
        }
      }
    }
    if (rawPhotosFolder === "") {
      return "";
    }
    const normalized = (0, import_obsidian4.normalizePath)(rawPhotosFolder);
    if (folderExists(this.app.vault, normalized)) return normalized;
    if (!this.settings.createFolderIfMissing) {
      new import_obsidian4.Notice(`Folder not found: ${normalized}`);
      return null;
    }
    try {
      await this.app.vault.createFolder(normalized);
      return normalized;
    } catch (error) {
      new import_obsidian4.Notice(`Failed to create folder: ${normalized}`);
      console.error(error);
      return null;
    }
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzL2NvbXByZXNzb3Jqcy9kaXN0L2NvbXByZXNzb3IuanMiLCAic3JjL21haW4udHMiLCAic3JjL3NldHRpbmdzLnRzIiwgInNyYy9jb21wcmVzc29yLnRzIiwgInNyYy9maWxlLXV0aWxzLnRzIiwgInNyYy9pbnB1dC11dGlscy50cyIsICJzcmMvcGlja2VyLW1vZGFsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKiFcbiAqIENvbXByZXNzb3IuanMgdjEuMi4xXG4gKiBodHRwczovL2Zlbmd5dWFuY2hlbi5naXRodWIuaW8vY29tcHJlc3NvcmpzXG4gKlxuICogQ29weXJpZ2h0IDIwMTgtcHJlc2VudCBDaGVuIEZlbmd5dWFuXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqXG4gKiBEYXRlOiAyMDIzLTAyLTI4VDE0OjA5OjQxLjczMlpcbiAqL1xuXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gIChnbG9iYWwgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIDogZ2xvYmFsIHx8IHNlbGYsIGdsb2JhbC5Db21wcmVzc29yID0gZmFjdG9yeSgpKTtcbn0pKHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuICBmdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG4gICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgIHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpO1xuICAgICAgZW51bWVyYWJsZU9ubHkgJiYgKHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7XG4gICAgfVxuICAgIHJldHVybiBrZXlzO1xuICB9XG4gIGZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gbnVsbCAhPSBhcmd1bWVudHNbaV0gPyBhcmd1bWVudHNbaV0gOiB7fTtcbiAgICAgIGkgJSAyID8gb3duS2V5cyhPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgIH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpIDogb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cbiAgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICAgIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgfSk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9XG4gIGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBrZXkgPSBfdG9Qcm9wZXJ0eUtleShrZXkpO1xuICAgIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuICBmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gPyBPYmplY3QuYXNzaWduLmJpbmQoKSA6IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfTtcbiAgICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuICBmdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHtcbiAgICBpZiAodHlwZW9mIGlucHV0ICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7XG4gICAgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdO1xuICAgIGlmIChwcmltICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpO1xuICAgICAgaWYgKHR5cGVvZiByZXMgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gICAgfVxuICAgIHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpO1xuICB9XG4gIGZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykge1xuICAgIHZhciBrZXkgPSBfdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTtcbiAgICByZXR1cm4gdHlwZW9mIGtleSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpO1xuICB9XG5cbiAgdmFyIGNhbnZhc1RvQmxvYiA9IHtleHBvcnRzOiB7fX07XG5cbiAgLypcbiAgICogSmF2YVNjcmlwdCBDYW52YXMgdG8gQmxvYlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vYmx1ZWltcC9KYXZhU2NyaXB0LUNhbnZhcy10by1CbG9iXG4gICAqXG4gICAqIENvcHlyaWdodCAyMDEyLCBTZWJhc3RpYW4gVHNjaGFuXG4gICAqIGh0dHBzOi8vYmx1ZWltcC5uZXRcbiAgICpcbiAgICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlOlxuICAgKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICAgKlxuICAgKiBCYXNlZCBvbiBzdGFja292ZXJmbG93IHVzZXIgU3RvaXZlJ3MgY29kZSBzbmlwcGV0OlxuICAgKiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcS80OTk4OTA4XG4gICAqL1xuICAoZnVuY3Rpb24gKG1vZHVsZSkge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgICAoZnVuY3Rpb24gKHdpbmRvdykge1xuXG4gICAgICB2YXIgQ2FudmFzUHJvdG90eXBlID0gd2luZG93LkhUTUxDYW52YXNFbGVtZW50ICYmIHdpbmRvdy5IVE1MQ2FudmFzRWxlbWVudC5wcm90b3R5cGU7XG4gICAgICB2YXIgaGFzQmxvYkNvbnN0cnVjdG9yID0gd2luZG93LkJsb2IgJiYgZnVuY3Rpb24gKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBCb29sZWFuKG5ldyBCbG9iKCkpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KCk7XG4gICAgICB2YXIgaGFzQXJyYXlCdWZmZXJWaWV3U3VwcG9ydCA9IGhhc0Jsb2JDb25zdHJ1Y3RvciAmJiB3aW5kb3cuVWludDhBcnJheSAmJiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBCbG9iKFtuZXcgVWludDhBcnJheSgxMDApXSkuc2l6ZSA9PT0gMTAwO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KCk7XG4gICAgICB2YXIgQmxvYkJ1aWxkZXIgPSB3aW5kb3cuQmxvYkJ1aWxkZXIgfHwgd2luZG93LldlYktpdEJsb2JCdWlsZGVyIHx8IHdpbmRvdy5Nb3pCbG9iQnVpbGRlciB8fCB3aW5kb3cuTVNCbG9iQnVpbGRlcjtcbiAgICAgIHZhciBkYXRhVVJJUGF0dGVybiA9IC9eZGF0YTooKC4qPykoO2NoYXJzZXQ9Lio/KT8pKDtiYXNlNjQpPywvO1xuICAgICAgdmFyIGRhdGFVUkx0b0Jsb2IgPSAoaGFzQmxvYkNvbnN0cnVjdG9yIHx8IEJsb2JCdWlsZGVyKSAmJiB3aW5kb3cuYXRvYiAmJiB3aW5kb3cuQXJyYXlCdWZmZXIgJiYgd2luZG93LlVpbnQ4QXJyYXkgJiYgZnVuY3Rpb24gKGRhdGFVUkkpIHtcbiAgICAgICAgdmFyIG1hdGNoZXMsIG1lZGlhVHlwZSwgaXNCYXNlNjQsIGRhdGFTdHJpbmcsIGJ5dGVTdHJpbmcsIGFycmF5QnVmZmVyLCBpbnRBcnJheSwgaSwgYmI7XG4gICAgICAgIC8vIFBhcnNlIHRoZSBkYXRhVVJJIGNvbXBvbmVudHMgYXMgcGVyIFJGQyAyMzk3XG4gICAgICAgIG1hdGNoZXMgPSBkYXRhVVJJLm1hdGNoKGRhdGFVUklQYXR0ZXJuKTtcbiAgICAgICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGRhdGEgVVJJJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRGVmYXVsdCB0byB0ZXh0L3BsYWluO2NoYXJzZXQ9VVMtQVNDSUlcbiAgICAgICAgbWVkaWFUeXBlID0gbWF0Y2hlc1syXSA/IG1hdGNoZXNbMV0gOiAndGV4dC9wbGFpbicgKyAobWF0Y2hlc1szXSB8fCAnO2NoYXJzZXQ9VVMtQVNDSUknKTtcbiAgICAgICAgaXNCYXNlNjQgPSAhIW1hdGNoZXNbNF07XG4gICAgICAgIGRhdGFTdHJpbmcgPSBkYXRhVVJJLnNsaWNlKG1hdGNoZXNbMF0ubGVuZ3RoKTtcbiAgICAgICAgaWYgKGlzQmFzZTY0KSB7XG4gICAgICAgICAgLy8gQ29udmVydCBiYXNlNjQgdG8gcmF3IGJpbmFyeSBkYXRhIGhlbGQgaW4gYSBzdHJpbmc6XG4gICAgICAgICAgYnl0ZVN0cmluZyA9IGF0b2IoZGF0YVN0cmluZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gQ29udmVydCBiYXNlNjQvVVJMRW5jb2RlZCBkYXRhIGNvbXBvbmVudCB0byByYXcgYmluYXJ5OlxuICAgICAgICAgIGJ5dGVTdHJpbmcgPSBkZWNvZGVVUklDb21wb25lbnQoZGF0YVN0cmluZyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gV3JpdGUgdGhlIGJ5dGVzIG9mIHRoZSBzdHJpbmcgdG8gYW4gQXJyYXlCdWZmZXI6XG4gICAgICAgIGFycmF5QnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKGJ5dGVTdHJpbmcubGVuZ3RoKTtcbiAgICAgICAgaW50QXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcik7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBieXRlU3RyaW5nLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgaW50QXJyYXlbaV0gPSBieXRlU3RyaW5nLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gV3JpdGUgdGhlIEFycmF5QnVmZmVyIChvciBBcnJheUJ1ZmZlclZpZXcpIHRvIGEgYmxvYjpcbiAgICAgICAgaWYgKGhhc0Jsb2JDb25zdHJ1Y3Rvcikge1xuICAgICAgICAgIHJldHVybiBuZXcgQmxvYihbaGFzQXJyYXlCdWZmZXJWaWV3U3VwcG9ydCA/IGludEFycmF5IDogYXJyYXlCdWZmZXJdLCB7XG4gICAgICAgICAgICB0eXBlOiBtZWRpYVR5cGVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBiYiA9IG5ldyBCbG9iQnVpbGRlcigpO1xuICAgICAgICBiYi5hcHBlbmQoYXJyYXlCdWZmZXIpO1xuICAgICAgICByZXR1cm4gYmIuZ2V0QmxvYihtZWRpYVR5cGUpO1xuICAgICAgfTtcbiAgICAgIGlmICh3aW5kb3cuSFRNTENhbnZhc0VsZW1lbnQgJiYgIUNhbnZhc1Byb3RvdHlwZS50b0Jsb2IpIHtcbiAgICAgICAgaWYgKENhbnZhc1Byb3RvdHlwZS5tb3pHZXRBc0ZpbGUpIHtcbiAgICAgICAgICBDYW52YXNQcm90b3R5cGUudG9CbG9iID0gZnVuY3Rpb24gKGNhbGxiYWNrLCB0eXBlLCBxdWFsaXR5KSB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgaWYgKHF1YWxpdHkgJiYgQ2FudmFzUHJvdG90eXBlLnRvRGF0YVVSTCAmJiBkYXRhVVJMdG9CbG9iKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YVVSTHRvQmxvYihzZWxmLnRvRGF0YVVSTCh0eXBlLCBxdWFsaXR5KSkpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHNlbGYubW96R2V0QXNGaWxlKCdibG9iJywgdHlwZSkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKENhbnZhc1Byb3RvdHlwZS50b0RhdGFVUkwgJiYgZGF0YVVSTHRvQmxvYikge1xuICAgICAgICAgIGlmIChDYW52YXNQcm90b3R5cGUubXNUb0Jsb2IpIHtcbiAgICAgICAgICAgIENhbnZhc1Byb3RvdHlwZS50b0Jsb2IgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIHR5cGUsIHF1YWxpdHkpIHtcbiAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoKHR5cGUgJiYgdHlwZSAhPT0gJ2ltYWdlL3BuZycgfHwgcXVhbGl0eSkgJiYgQ2FudmFzUHJvdG90eXBlLnRvRGF0YVVSTCAmJiBkYXRhVVJMdG9CbG9iKSB7XG4gICAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhVVJMdG9CbG9iKHNlbGYudG9EYXRhVVJMKHR5cGUsIHF1YWxpdHkpKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHNlbGYubXNUb0Jsb2IodHlwZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBDYW52YXNQcm90b3R5cGUudG9CbG9iID0gZnVuY3Rpb24gKGNhbGxiYWNrLCB0eXBlLCBxdWFsaXR5KSB7XG4gICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YVVSTHRvQmxvYihzZWxmLnRvRGF0YVVSTCh0eXBlLCBxdWFsaXR5KSkpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBkYXRhVVJMdG9CbG9iO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmRhdGFVUkx0b0Jsb2IgPSBkYXRhVVJMdG9CbG9iO1xuICAgICAgfVxuICAgIH0pKHdpbmRvdyk7XG4gIH0pKGNhbnZhc1RvQmxvYik7XG4gIHZhciB0b0Jsb2IgPSBjYW52YXNUb0Jsb2IuZXhwb3J0cztcblxuICB2YXIgaXNCbG9iID0gZnVuY3Rpb24gaXNCbG9iKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBCbG9iID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBCbG9iIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEJsb2JdJztcbiAgfTtcblxuICB2YXIgREVGQVVMVFMgPSB7XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIGlmIG91dHB1dCB0aGUgb3JpZ2luYWwgaW1hZ2UgaW5zdGVhZCBvZiB0aGUgY29tcHJlc3NlZCBvbmVcbiAgICAgKiB3aGVuIHRoZSBzaXplIG9mIHRoZSBjb21wcmVzc2VkIGltYWdlIGlzIGdyZWF0ZXIgdGhhbiB0aGUgb3JpZ2luYWwgb25lJ3NcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBzdHJpY3Q6IHRydWUsXG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIGlmIHJlYWQgdGhlIGltYWdlJ3MgRXhpZiBPcmllbnRhdGlvbiBpbmZvcm1hdGlvbixcbiAgICAgKiBhbmQgdGhlbiByb3RhdGUgb3IgZmxpcCB0aGUgaW1hZ2UgYXV0b21hdGljYWxseS5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBjaGVja09yaWVudGF0aW9uOiB0cnVlLFxuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyBpZiByZXRhaW4gdGhlIGltYWdlJ3MgRXhpZiBpbmZvcm1hdGlvbiBhZnRlciBjb21wcmVzc2VkLlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICovXG4gICAgcmV0YWluRXhpZjogZmFsc2UsXG4gICAgLyoqXG4gICAgICogVGhlIG1heCB3aWR0aCBvZiB0aGUgb3V0cHV0IGltYWdlLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgbWF4V2lkdGg6IEluZmluaXR5LFxuICAgIC8qKlxuICAgICAqIFRoZSBtYXggaGVpZ2h0IG9mIHRoZSBvdXRwdXQgaW1hZ2UuXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBtYXhIZWlnaHQ6IEluZmluaXR5LFxuICAgIC8qKlxuICAgICAqIFRoZSBtaW4gd2lkdGggb2YgdGhlIG91dHB1dCBpbWFnZS5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIG1pbldpZHRoOiAwLFxuICAgIC8qKlxuICAgICAqIFRoZSBtaW4gaGVpZ2h0IG9mIHRoZSBvdXRwdXQgaW1hZ2UuXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBtaW5IZWlnaHQ6IDAsXG4gICAgLyoqXG4gICAgICogVGhlIHdpZHRoIG9mIHRoZSBvdXRwdXQgaW1hZ2UuXG4gICAgICogSWYgbm90IHNwZWNpZmllZCwgdGhlIG5hdHVyYWwgd2lkdGggb2YgdGhlIHNvdXJjZSBpbWFnZSB3aWxsIGJlIHVzZWQuXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB3aWR0aDogdW5kZWZpbmVkLFxuICAgIC8qKlxuICAgICAqIFRoZSBoZWlnaHQgb2YgdGhlIG91dHB1dCBpbWFnZS5cbiAgICAgKiBJZiBub3Qgc3BlY2lmaWVkLCB0aGUgbmF0dXJhbCBoZWlnaHQgb2YgdGhlIHNvdXJjZSBpbWFnZSB3aWxsIGJlIHVzZWQuXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBoZWlnaHQ6IHVuZGVmaW5lZCxcbiAgICAvKipcbiAgICAgKiBTZXRzIGhvdyB0aGUgc2l6ZSBvZiB0aGUgaW1hZ2Ugc2hvdWxkIGJlIHJlc2l6ZWQgdG8gdGhlIGNvbnRhaW5lclxuICAgICAqIHNwZWNpZmllZCBieSB0aGUgYHdpZHRoYCBhbmQgYGhlaWdodGAgb3B0aW9ucy5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHJlc2l6ZTogJ25vbmUnLFxuICAgIC8qKlxuICAgICAqIFRoZSBxdWFsaXR5IG9mIHRoZSBvdXRwdXQgaW1hZ2UuXG4gICAgICogSXQgbXVzdCBiZSBhIG51bWJlciBiZXR3ZWVuIGAwYCBhbmQgYDFgLFxuICAgICAqIGFuZCBvbmx5IGF2YWlsYWJsZSBmb3IgYGltYWdlL2pwZWdgIGFuZCBgaW1hZ2Uvd2VicGAgaW1hZ2VzLlxuICAgICAqIENoZWNrIG91dCB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hUTUxDYW52YXNFbGVtZW50L3RvQmxvYiBjYW52YXMudG9CbG9ifS5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHF1YWxpdHk6IDAuOCxcbiAgICAvKipcbiAgICAgKiBUaGUgbWltZSB0eXBlIG9mIHRoZSBvdXRwdXQgaW1hZ2UuXG4gICAgICogQnkgZGVmYXVsdCwgdGhlIG9yaWdpbmFsIG1pbWUgdHlwZSBvZiB0aGUgc291cmNlIGltYWdlIGZpbGUgd2lsbCBiZSB1c2VkLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgbWltZVR5cGU6ICdhdXRvJyxcbiAgICAvKipcbiAgICAgKiBGaWxlcyB3aG9zZSBmaWxlIHR5cGUgaXMgaW5jbHVkZWQgaW4gdGhpcyBsaXN0LFxuICAgICAqIGFuZCB3aG9zZSBmaWxlIHNpemUgZXhjZWVkcyB0aGUgYGNvbnZlcnRTaXplYCB2YWx1ZSB3aWxsIGJlIGNvbnZlcnRlZCB0byBKUEVHcy5cbiAgICAgKiBAdHlwZSB7c3RyaW5nXHVGRjVDQXJyYXl9XG4gICAgICovXG4gICAgY29udmVydFR5cGVzOiBbJ2ltYWdlL3BuZyddLFxuICAgIC8qKlxuICAgICAqIFBORyBmaWxlcyBvdmVyIHRoaXMgc2l6ZSAoNSBNQiBieSBkZWZhdWx0KSB3aWxsIGJlIGNvbnZlcnRlZCB0byBKUEVHcy5cbiAgICAgKiBUbyBkaXNhYmxlIHRoaXMsIGp1c3Qgc2V0IHRoZSB2YWx1ZSB0byBgSW5maW5pdHlgLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgY29udmVydFNpemU6IDUwMDAwMDAsXG4gICAgLyoqXG4gICAgICogVGhlIGhvb2sgZnVuY3Rpb24gdG8gZXhlY3V0ZSBiZWZvcmUgZHJhdyB0aGUgaW1hZ2UgaW50byB0aGUgY2FudmFzIGZvciBjb21wcmVzc2lvbi5cbiAgICAgKiBAdHlwZSB7RnVuY3Rpb259XG4gICAgICogQHBhcmFtIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9IGNvbnRleHQgLSBUaGUgMmQgcmVuZGVyaW5nIGNvbnRleHQgb2YgdGhlIGNhbnZhcy5cbiAgICAgKiBAcGFyYW0ge0hUTUxDYW52YXNFbGVtZW50fSBjYW52YXMgLSBUaGUgY2FudmFzIGZvciBjb21wcmVzc2lvbi5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGZ1bmN0aW9uIChjb250ZXh0LCBjYW52YXMpIHtcbiAgICAgKiAgIGNvbnRleHQuZmlsbFN0eWxlID0gJyNmZmYnO1xuICAgICAqIH1cbiAgICAgKi9cbiAgICBiZWZvcmVEcmF3OiBudWxsLFxuICAgIC8qKlxuICAgICAqIFRoZSBob29rIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgYWZ0ZXIgZHJldyB0aGUgaW1hZ2UgaW50byB0aGUgY2FudmFzIGZvciBjb21wcmVzc2lvbi5cbiAgICAgKiBAdHlwZSB7RnVuY3Rpb259XG4gICAgICogQHBhcmFtIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9IGNvbnRleHQgLSBUaGUgMmQgcmVuZGVyaW5nIGNvbnRleHQgb2YgdGhlIGNhbnZhcy5cbiAgICAgKiBAcGFyYW0ge0hUTUxDYW52YXNFbGVtZW50fSBjYW52YXMgLSBUaGUgY2FudmFzIGZvciBjb21wcmVzc2lvbi5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGZ1bmN0aW9uIChjb250ZXh0LCBjYW52YXMpIHtcbiAgICAgKiAgIGNvbnRleHQuZmlsdGVyID0gJ2dyYXlzY2FsZSgxMDAlKSc7XG4gICAgICogfVxuICAgICAqL1xuICAgIGRyZXc6IG51bGwsXG4gICAgLyoqXG4gICAgICogVGhlIGhvb2sgZnVuY3Rpb24gdG8gZXhlY3V0ZSB3aGVuIHN1Y2Nlc3MgdG8gY29tcHJlc3MgdGhlIGltYWdlLlxuICAgICAqIEB0eXBlIHtGdW5jdGlvbn1cbiAgICAgKiBAcGFyYW0ge0ZpbGV9IGZpbGUgLSBUaGUgY29tcHJlc3NlZCBpbWFnZSBGaWxlIG9iamVjdC5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICogICBjb25zb2xlLmxvZyhmaWxlKTtcbiAgICAgKiB9XG4gICAgICovXG4gICAgc3VjY2VzczogbnVsbCxcbiAgICAvKipcbiAgICAgKiBUaGUgaG9vayBmdW5jdGlvbiB0byBleGVjdXRlIHdoZW4gZmFpbCB0byBjb21wcmVzcyB0aGUgaW1hZ2UuXG4gICAgICogQHR5cGUge0Z1bmN0aW9ufVxuICAgICAqIEBwYXJhbSB7RXJyb3J9IGVyciAtIEFuIEVycm9yIG9iamVjdC5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgKiAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcbiAgICAgKiB9XG4gICAgICovXG4gICAgZXJyb3I6IG51bGxcbiAgfTtcblxuICB2YXIgSVNfQlJPV1NFUiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnO1xuICB2YXIgV0lORE9XID0gSVNfQlJPV1NFUiA/IHdpbmRvdyA6IHt9O1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBwb3NpdGl2ZSBudW1iZXIuXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBwb3NpdGl2ZSBudW1iZXIsIGVsc2UgYGZhbHNlYC5cbiAgICovXG4gIHZhciBpc1Bvc2l0aXZlTnVtYmVyID0gZnVuY3Rpb24gaXNQb3NpdGl2ZU51bWJlcih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA+IDAgJiYgdmFsdWUgPCBJbmZpbml0eTtcbiAgfTtcbiAgdmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0IGFycmF5LWxpa2Ugb3IgaXRlcmFibGUgb2JqZWN0IHRvIGFuIGFycmF5LlxuICAgKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gICAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBhIG5ldyBhcnJheS5cbiAgICovXG4gIGZ1bmN0aW9uIHRvQXJyYXkodmFsdWUpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSA/IEFycmF5LmZyb20odmFsdWUpIDogc2xpY2UuY2FsbCh2YWx1ZSk7XG4gIH1cbiAgdmFyIFJFR0VYUF9JTUFHRV9UWVBFID0gL15pbWFnZVxcLy4rJC87XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIG1pbWUgdHlwZSBvZiBpbWFnZS5cbiAgICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAgICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBnaXZlbiBpcyBhIG1pbWUgdHlwZSBvZiBpbWFnZSwgZWxzZSBgZmFsc2VgLlxuICAgKi9cbiAgZnVuY3Rpb24gaXNJbWFnZVR5cGUodmFsdWUpIHtcbiAgICByZXR1cm4gUkVHRVhQX0lNQUdFX1RZUEUudGVzdCh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCBpbWFnZSB0eXBlIHRvIGV4dGVuc2lvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gVGhlIGltYWdlIHR5cGUgdG8gY29udmVydC5cbiAgICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgdGhlIGltYWdlIGV4dGVuc2lvbi5cbiAgICovXG4gIGZ1bmN0aW9uIGltYWdlVHlwZVRvRXh0ZW5zaW9uKHZhbHVlKSB7XG4gICAgdmFyIGV4dGVuc2lvbiA9IGlzSW1hZ2VUeXBlKHZhbHVlKSA/IHZhbHVlLnN1YnN0cig2KSA6ICcnO1xuICAgIGlmIChleHRlbnNpb24gPT09ICdqcGVnJykge1xuICAgICAgZXh0ZW5zaW9uID0gJ2pwZyc7XG4gICAgfVxuICAgIHJldHVybiBcIi5cIi5jb25jYXQoZXh0ZW5zaW9uKTtcbiAgfVxuICB2YXIgZnJvbUNoYXJDb2RlID0gU3RyaW5nLmZyb21DaGFyQ29kZTtcblxuICAvKipcbiAgICogR2V0IHN0cmluZyBmcm9tIGNoYXIgY29kZSBpbiBkYXRhIHZpZXcuXG4gICAqIEBwYXJhbSB7RGF0YVZpZXd9IGRhdGFWaWV3IC0gVGhlIGRhdGEgdmlldyBmb3IgcmVhZC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0IC0gVGhlIHN0YXJ0IGluZGV4LlxuICAgKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoIC0gVGhlIHJlYWQgbGVuZ3RoLlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgcmVhZCByZXN1bHQuXG4gICAqL1xuICBmdW5jdGlvbiBnZXRTdHJpbmdGcm9tQ2hhckNvZGUoZGF0YVZpZXcsIHN0YXJ0LCBsZW5ndGgpIHtcbiAgICB2YXIgc3RyID0gJyc7XG4gICAgdmFyIGk7XG4gICAgbGVuZ3RoICs9IHN0YXJ0O1xuICAgIGZvciAoaSA9IHN0YXJ0OyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHN0ciArPSBmcm9tQ2hhckNvZGUoZGF0YVZpZXcuZ2V0VWludDgoaSkpO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xuICB9XG4gIHZhciBidG9hID0gV0lORE9XLmJ0b2E7XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybSBhcnJheSBidWZmZXIgdG8gRGF0YSBVUkwuXG4gICAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGFycmF5QnVmZmVyIC0gVGhlIGFycmF5IGJ1ZmZlciB0byB0cmFuc2Zvcm0uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtaW1lVHlwZSAtIFRoZSBtaW1lIHR5cGUgb2YgdGhlIERhdGEgVVJMLlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgcmVzdWx0IERhdGEgVVJMLlxuICAgKi9cbiAgZnVuY3Rpb24gYXJyYXlCdWZmZXJUb0RhdGFVUkwoYXJyYXlCdWZmZXIsIG1pbWVUeXBlKSB7XG4gICAgdmFyIGNodW5rcyA9IFtdO1xuICAgIHZhciBjaHVua1NpemUgPSA4MTkyO1xuICAgIHZhciB1aW50OCA9IG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKTtcbiAgICB3aGlsZSAodWludDgubGVuZ3RoID4gMCkge1xuICAgICAgLy8gWFhYOiBCYWJlbCdzIGB0b0NvbnN1bWFibGVBcnJheWAgaGVscGVyIHdpbGwgdGhyb3cgZXJyb3IgaW4gSUUgb3IgU2FmYXJpIDlcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItc3ByZWFkXG4gICAgICBjaHVua3MucHVzaChmcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgdG9BcnJheSh1aW50OC5zdWJhcnJheSgwLCBjaHVua1NpemUpKSkpO1xuICAgICAgdWludDggPSB1aW50OC5zdWJhcnJheShjaHVua1NpemUpO1xuICAgIH1cbiAgICByZXR1cm4gXCJkYXRhOlwiLmNvbmNhdChtaW1lVHlwZSwgXCI7YmFzZTY0LFwiKS5jb25jYXQoYnRvYShjaHVua3Muam9pbignJykpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgb3JpZW50YXRpb24gdmFsdWUgZnJvbSBnaXZlbiBhcnJheSBidWZmZXIuXG4gICAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGFycmF5QnVmZmVyIC0gVGhlIGFycmF5IGJ1ZmZlciB0byByZWFkLlxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgcmVhZCBvcmllbnRhdGlvbiB2YWx1ZS5cbiAgICovXG4gIGZ1bmN0aW9uIHJlc2V0QW5kR2V0T3JpZW50YXRpb24oYXJyYXlCdWZmZXIpIHtcbiAgICB2YXIgZGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcoYXJyYXlCdWZmZXIpO1xuICAgIHZhciBvcmllbnRhdGlvbjtcblxuICAgIC8vIElnbm9yZXMgcmFuZ2UgZXJyb3Igd2hlbiB0aGUgaW1hZ2UgZG9lcyBub3QgaGF2ZSBjb3JyZWN0IEV4aWYgaW5mb3JtYXRpb25cbiAgICB0cnkge1xuICAgICAgdmFyIGxpdHRsZUVuZGlhbjtcbiAgICAgIHZhciBhcHAxU3RhcnQ7XG4gICAgICB2YXIgaWZkU3RhcnQ7XG5cbiAgICAgIC8vIE9ubHkgaGFuZGxlIEpQRUcgaW1hZ2UgKHN0YXJ0IGJ5IDB4RkZEOClcbiAgICAgIGlmIChkYXRhVmlldy5nZXRVaW50OCgwKSA9PT0gMHhGRiAmJiBkYXRhVmlldy5nZXRVaW50OCgxKSA9PT0gMHhEOCkge1xuICAgICAgICB2YXIgbGVuZ3RoID0gZGF0YVZpZXcuYnl0ZUxlbmd0aDtcbiAgICAgICAgdmFyIG9mZnNldCA9IDI7XG4gICAgICAgIHdoaWxlIChvZmZzZXQgKyAxIDwgbGVuZ3RoKSB7XG4gICAgICAgICAgaWYgKGRhdGFWaWV3LmdldFVpbnQ4KG9mZnNldCkgPT09IDB4RkYgJiYgZGF0YVZpZXcuZ2V0VWludDgob2Zmc2V0ICsgMSkgPT09IDB4RTEpIHtcbiAgICAgICAgICAgIGFwcDFTdGFydCA9IG9mZnNldDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvZmZzZXQgKz0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGFwcDFTdGFydCkge1xuICAgICAgICB2YXIgZXhpZklEQ29kZSA9IGFwcDFTdGFydCArIDQ7XG4gICAgICAgIHZhciB0aWZmT2Zmc2V0ID0gYXBwMVN0YXJ0ICsgMTA7XG4gICAgICAgIGlmIChnZXRTdHJpbmdGcm9tQ2hhckNvZGUoZGF0YVZpZXcsIGV4aWZJRENvZGUsIDQpID09PSAnRXhpZicpIHtcbiAgICAgICAgICB2YXIgZW5kaWFubmVzcyA9IGRhdGFWaWV3LmdldFVpbnQxNih0aWZmT2Zmc2V0KTtcbiAgICAgICAgICBsaXR0bGVFbmRpYW4gPSBlbmRpYW5uZXNzID09PSAweDQ5NDk7XG4gICAgICAgICAgaWYgKGxpdHRsZUVuZGlhbiB8fCBlbmRpYW5uZXNzID09PSAweDRENEQgLyogYmlnRW5kaWFuICovKSB7XG4gICAgICAgICAgICBpZiAoZGF0YVZpZXcuZ2V0VWludDE2KHRpZmZPZmZzZXQgKyAyLCBsaXR0bGVFbmRpYW4pID09PSAweDAwMkEpIHtcbiAgICAgICAgICAgICAgdmFyIGZpcnN0SUZET2Zmc2V0ID0gZGF0YVZpZXcuZ2V0VWludDMyKHRpZmZPZmZzZXQgKyA0LCBsaXR0bGVFbmRpYW4pO1xuICAgICAgICAgICAgICBpZiAoZmlyc3RJRkRPZmZzZXQgPj0gMHgwMDAwMDAwOCkge1xuICAgICAgICAgICAgICAgIGlmZFN0YXJ0ID0gdGlmZk9mZnNldCArIGZpcnN0SUZET2Zmc2V0O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaWZkU3RhcnQpIHtcbiAgICAgICAgdmFyIF9sZW5ndGggPSBkYXRhVmlldy5nZXRVaW50MTYoaWZkU3RhcnQsIGxpdHRsZUVuZGlhbik7XG4gICAgICAgIHZhciBfb2Zmc2V0O1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IF9sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIF9vZmZzZXQgPSBpZmRTdGFydCArIGkgKiAxMiArIDI7XG4gICAgICAgICAgaWYgKGRhdGFWaWV3LmdldFVpbnQxNihfb2Zmc2V0LCBsaXR0bGVFbmRpYW4pID09PSAweDAxMTIgLyogT3JpZW50YXRpb24gKi8pIHtcbiAgICAgICAgICAgIC8vIDggaXMgdGhlIG9mZnNldCBvZiB0aGUgY3VycmVudCB0YWcncyB2YWx1ZVxuICAgICAgICAgICAgX29mZnNldCArPSA4O1xuXG4gICAgICAgICAgICAvLyBHZXQgdGhlIG9yaWdpbmFsIG9yaWVudGF0aW9uIHZhbHVlXG4gICAgICAgICAgICBvcmllbnRhdGlvbiA9IGRhdGFWaWV3LmdldFVpbnQxNihfb2Zmc2V0LCBsaXR0bGVFbmRpYW4pO1xuXG4gICAgICAgICAgICAvLyBPdmVycmlkZSB0aGUgb3JpZW50YXRpb24gd2l0aCBpdHMgZGVmYXVsdCB2YWx1ZVxuICAgICAgICAgICAgZGF0YVZpZXcuc2V0VWludDE2KF9vZmZzZXQsIDEsIGxpdHRsZUVuZGlhbik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBvcmllbnRhdGlvbiA9IDE7XG4gICAgfVxuICAgIHJldHVybiBvcmllbnRhdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZSBFeGlmIE9yaWVudGF0aW9uIHZhbHVlLlxuICAgKiBAcGFyYW0ge251bWJlcn0gb3JpZW50YXRpb24gLSBUaGUgb3JpZW50YXRpb24gdG8gcGFyc2UuXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBwYXJzZWQgcmVzdWx0LlxuICAgKi9cbiAgZnVuY3Rpb24gcGFyc2VPcmllbnRhdGlvbihvcmllbnRhdGlvbikge1xuICAgIHZhciByb3RhdGUgPSAwO1xuICAgIHZhciBzY2FsZVggPSAxO1xuICAgIHZhciBzY2FsZVkgPSAxO1xuICAgIHN3aXRjaCAob3JpZW50YXRpb24pIHtcbiAgICAgIC8vIEZsaXAgaG9yaXpvbnRhbFxuICAgICAgY2FzZSAyOlxuICAgICAgICBzY2FsZVggPSAtMTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8vIFJvdGF0ZSBsZWZ0IDE4MFx1MDBCMFxuICAgICAgY2FzZSAzOlxuICAgICAgICByb3RhdGUgPSAtMTgwO1xuICAgICAgICBicmVhaztcblxuICAgICAgLy8gRmxpcCB2ZXJ0aWNhbFxuICAgICAgY2FzZSA0OlxuICAgICAgICBzY2FsZVkgPSAtMTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8vIEZsaXAgdmVydGljYWwgYW5kIHJvdGF0ZSByaWdodCA5MFx1MDBCMFxuICAgICAgY2FzZSA1OlxuICAgICAgICByb3RhdGUgPSA5MDtcbiAgICAgICAgc2NhbGVZID0gLTE7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvLyBSb3RhdGUgcmlnaHQgOTBcdTAwQjBcbiAgICAgIGNhc2UgNjpcbiAgICAgICAgcm90YXRlID0gOTA7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvLyBGbGlwIGhvcml6b250YWwgYW5kIHJvdGF0ZSByaWdodCA5MFx1MDBCMFxuICAgICAgY2FzZSA3OlxuICAgICAgICByb3RhdGUgPSA5MDtcbiAgICAgICAgc2NhbGVYID0gLTE7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvLyBSb3RhdGUgbGVmdCA5MFx1MDBCMFxuICAgICAgY2FzZSA4OlxuICAgICAgICByb3RhdGUgPSAtOTA7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgcm90YXRlOiByb3RhdGUsXG4gICAgICBzY2FsZVg6IHNjYWxlWCxcbiAgICAgIHNjYWxlWTogc2NhbGVZXG4gICAgfTtcbiAgfVxuICB2YXIgUkVHRVhQX0RFQ0lNQUxTID0gL1xcLlxcZCooPzowfDkpezEyfVxcZCokLztcblxuICAvKipcbiAgICogTm9ybWFsaXplIGRlY2ltYWwgbnVtYmVyLlxuICAgKiBDaGVjayBvdXQge0BsaW5rIGh0dHBzOi8vMC4zMDAwMDAwMDAwMDAwMDAwNC5jb20vfVxuICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gbm9ybWFsaXplLlxuICAgKiBAcGFyYW0ge251bWJlcn0gW3RpbWVzPTEwMDAwMDAwMDAwMF0gLSBUaGUgdGltZXMgZm9yIG5vcm1hbGl6aW5nLlxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBub3JtYWxpemVkIG51bWJlci5cbiAgICovXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZURlY2ltYWxOdW1iZXIodmFsdWUpIHtcbiAgICB2YXIgdGltZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDEwMDAwMDAwMDAwMDtcbiAgICByZXR1cm4gUkVHRVhQX0RFQ0lNQUxTLnRlc3QodmFsdWUpID8gTWF0aC5yb3VuZCh2YWx1ZSAqIHRpbWVzKSAvIHRpbWVzIDogdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBtYXggc2l6ZXMgaW4gYSByZWN0YW5nbGUgdW5kZXIgdGhlIGdpdmVuIGFzcGVjdCByYXRpby5cbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgLSBUaGUgb3JpZ2luYWwgc2l6ZXMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbdHlwZT0nY29udGFpbiddIC0gVGhlIGFkanVzdCB0eXBlLlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgcmVzdWx0IHNpemVzLlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0QWRqdXN0ZWRTaXplcyhfcmVmKSB7XG4gICAgdmFyIGFzcGVjdFJhdGlvID0gX3JlZi5hc3BlY3RSYXRpbyxcbiAgICAgIGhlaWdodCA9IF9yZWYuaGVpZ2h0LFxuICAgICAgd2lkdGggPSBfcmVmLndpZHRoO1xuICAgIHZhciB0eXBlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnbm9uZSc7XG4gICAgdmFyIGlzVmFsaWRXaWR0aCA9IGlzUG9zaXRpdmVOdW1iZXIod2lkdGgpO1xuICAgIHZhciBpc1ZhbGlkSGVpZ2h0ID0gaXNQb3NpdGl2ZU51bWJlcihoZWlnaHQpO1xuICAgIGlmIChpc1ZhbGlkV2lkdGggJiYgaXNWYWxpZEhlaWdodCkge1xuICAgICAgdmFyIGFkanVzdGVkV2lkdGggPSBoZWlnaHQgKiBhc3BlY3RSYXRpbztcbiAgICAgIGlmICgodHlwZSA9PT0gJ2NvbnRhaW4nIHx8IHR5cGUgPT09ICdub25lJykgJiYgYWRqdXN0ZWRXaWR0aCA+IHdpZHRoIHx8IHR5cGUgPT09ICdjb3ZlcicgJiYgYWRqdXN0ZWRXaWR0aCA8IHdpZHRoKSB7XG4gICAgICAgIGhlaWdodCA9IHdpZHRoIC8gYXNwZWN0UmF0aW87XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aWR0aCA9IGhlaWdodCAqIGFzcGVjdFJhdGlvO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNWYWxpZFdpZHRoKSB7XG4gICAgICBoZWlnaHQgPSB3aWR0aCAvIGFzcGVjdFJhdGlvO1xuICAgIH0gZWxzZSBpZiAoaXNWYWxpZEhlaWdodCkge1xuICAgICAgd2lkdGggPSBoZWlnaHQgKiBhc3BlY3RSYXRpbztcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgRXhpZiBpbmZvcm1hdGlvbiBmcm9tIHRoZSBnaXZlbiBhcnJheSBidWZmZXIuXG4gICAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGFycmF5QnVmZmVyIC0gVGhlIGFycmF5IGJ1ZmZlciB0byByZWFkLlxuICAgKiBAcmV0dXJucyB7QXJyYXl9IFRoZSByZWFkIEV4aWYgaW5mb3JtYXRpb24uXG4gICAqL1xuICBmdW5jdGlvbiBnZXRFeGlmKGFycmF5QnVmZmVyKSB7XG4gICAgdmFyIGFycmF5ID0gdG9BcnJheShuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcikpO1xuICAgIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gICAgdmFyIHNlZ21lbnRzID0gW107XG4gICAgdmFyIHN0YXJ0ID0gMDtcbiAgICB3aGlsZSAoc3RhcnQgKyAzIDwgbGVuZ3RoKSB7XG4gICAgICB2YXIgdmFsdWUgPSBhcnJheVtzdGFydF07XG4gICAgICB2YXIgbmV4dCA9IGFycmF5W3N0YXJ0ICsgMV07XG5cbiAgICAgIC8vIFNPUyAoU3RhcnQgb2YgU2NhbilcbiAgICAgIGlmICh2YWx1ZSA9PT0gMHhGRiAmJiBuZXh0ID09PSAweERBKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICAvLyBTT0kgKFN0YXJ0IG9mIEltYWdlKVxuICAgICAgaWYgKHZhbHVlID09PSAweEZGICYmIG5leHQgPT09IDB4RDgpIHtcbiAgICAgICAgc3RhcnQgKz0gMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBvZmZzZXQgPSBhcnJheVtzdGFydCArIDJdICogMjU2ICsgYXJyYXlbc3RhcnQgKyAzXTtcbiAgICAgICAgdmFyIGVuZCA9IHN0YXJ0ICsgb2Zmc2V0ICsgMjtcbiAgICAgICAgdmFyIHNlZ21lbnQgPSBhcnJheS5zbGljZShzdGFydCwgZW5kKTtcbiAgICAgICAgc2VnbWVudHMucHVzaChzZWdtZW50KTtcbiAgICAgICAgc3RhcnQgPSBlbmQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzZWdtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGV4aWZBcnJheSwgY3VycmVudCkge1xuICAgICAgaWYgKGN1cnJlbnRbMF0gPT09IDB4RkYgJiYgY3VycmVudFsxXSA9PT0gMHhFMSkge1xuICAgICAgICByZXR1cm4gZXhpZkFycmF5LmNvbmNhdChjdXJyZW50KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBleGlmQXJyYXk7XG4gICAgfSwgW10pO1xuICB9XG5cbiAgLyoqXG4gICAqIEluc2VydCBFeGlmIGluZm9ybWF0aW9uIGludG8gdGhlIGdpdmVuIGFycmF5IGJ1ZmZlci5cbiAgICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gYXJyYXlCdWZmZXIgLSBUaGUgYXJyYXkgYnVmZmVyIHRvIHRyYW5zZm9ybS5cbiAgICogQHBhcmFtIHtBcnJheX0gZXhpZkFycmF5IC0gVGhlIEV4aWYgaW5mb3JtYXRpb24gdG8gaW5zZXJ0LlxuICAgKiBAcmV0dXJucyB7QXJyYXlCdWZmZXJ9IFRoZSB0cmFuc2Zvcm1lZCBhcnJheSBidWZmZXIuXG4gICAqL1xuICBmdW5jdGlvbiBpbnNlcnRFeGlmKGFycmF5QnVmZmVyLCBleGlmQXJyYXkpIHtcbiAgICB2YXIgYXJyYXkgPSB0b0FycmF5KG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKSk7XG4gICAgaWYgKGFycmF5WzJdICE9PSAweEZGIHx8IGFycmF5WzNdICE9PSAweEUwKSB7XG4gICAgICByZXR1cm4gYXJyYXlCdWZmZXI7XG4gICAgfVxuICAgIHZhciBhcHAwTGVuZ3RoID0gYXJyYXlbNF0gKiAyNTYgKyBhcnJheVs1XTtcbiAgICB2YXIgbmV3QXJyYXlCdWZmZXIgPSBbMHhGRiwgMHhEOF0uY29uY2F0KGV4aWZBcnJheSwgYXJyYXkuc2xpY2UoNCArIGFwcDBMZW5ndGgpKTtcbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkobmV3QXJyYXlCdWZmZXIpO1xuICB9XG5cbiAgdmFyIEFycmF5QnVmZmVyJDEgPSBXSU5ET1cuQXJyYXlCdWZmZXIsXG4gICAgRmlsZVJlYWRlciA9IFdJTkRPVy5GaWxlUmVhZGVyO1xuICB2YXIgVVJMID0gV0lORE9XLlVSTCB8fCBXSU5ET1cud2Via2l0VVJMO1xuICB2YXIgUkVHRVhQX0VYVEVOU0lPTiA9IC9cXC5cXHcrJC87XG4gIHZhciBBbm90aGVyQ29tcHJlc3NvciA9IFdJTkRPVy5Db21wcmVzc29yO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGltYWdlIGNvbXByZXNzb3IuXG4gICAqIEBjbGFzc1xuICAgKi9cbiAgdmFyIENvbXByZXNzb3IgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIFRoZSBjb25zdHJ1Y3RvciBvZiBDb21wcmVzc29yLlxuICAgICAqIEBwYXJhbSB7RmlsZXxCbG9ifSBmaWxlIC0gVGhlIHRhcmdldCBpbWFnZSBmaWxlIGZvciBjb21wcmVzc2luZy5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gVGhlIG9wdGlvbnMgZm9yIGNvbXByZXNzaW5nLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIENvbXByZXNzb3IoZmlsZSwgb3B0aW9ucykge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbXByZXNzb3IpO1xuICAgICAgdGhpcy5maWxlID0gZmlsZTtcbiAgICAgIHRoaXMuZXhpZiA9IFtdO1xuICAgICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgdGhpcy5vcHRpb25zID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIERFRkFVTFRTKSwgb3B0aW9ucyk7XG4gICAgICB0aGlzLmFib3J0ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzdWx0ID0gbnVsbDtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cbiAgICBfY3JlYXRlQ2xhc3MoQ29tcHJlc3NvciwgW3tcbiAgICAgIGtleTogXCJpbml0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGZpbGUgPSB0aGlzLmZpbGUsXG4gICAgICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgaWYgKCFpc0Jsb2IoZmlsZSkpIHtcbiAgICAgICAgICB0aGlzLmZhaWwobmV3IEVycm9yKCdUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIEZpbGUgb3IgQmxvYiBvYmplY3QuJykpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbWltZVR5cGUgPSBmaWxlLnR5cGU7XG4gICAgICAgIGlmICghaXNJbWFnZVR5cGUobWltZVR5cGUpKSB7XG4gICAgICAgICAgdGhpcy5mYWlsKG5ldyBFcnJvcignVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYW4gaW1hZ2UgRmlsZSBvciBCbG9iIG9iamVjdC4nKSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghVVJMIHx8ICFGaWxlUmVhZGVyKSB7XG4gICAgICAgICAgdGhpcy5mYWlsKG5ldyBFcnJvcignVGhlIGN1cnJlbnQgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IGltYWdlIGNvbXByZXNzaW9uLicpKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFBcnJheUJ1ZmZlciQxKSB7XG4gICAgICAgICAgb3B0aW9ucy5jaGVja09yaWVudGF0aW9uID0gZmFsc2U7XG4gICAgICAgICAgb3B0aW9ucy5yZXRhaW5FeGlmID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGlzSlBFR0ltYWdlID0gbWltZVR5cGUgPT09ICdpbWFnZS9qcGVnJztcbiAgICAgICAgdmFyIGNoZWNrT3JpZW50YXRpb24gPSBpc0pQRUdJbWFnZSAmJiBvcHRpb25zLmNoZWNrT3JpZW50YXRpb247XG4gICAgICAgIHZhciByZXRhaW5FeGlmID0gaXNKUEVHSW1hZ2UgJiYgb3B0aW9ucy5yZXRhaW5FeGlmO1xuICAgICAgICBpZiAoVVJMICYmICFjaGVja09yaWVudGF0aW9uICYmICFyZXRhaW5FeGlmKSB7XG4gICAgICAgICAgdGhpcy5sb2FkKHtcbiAgICAgICAgICAgIHVybDogVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgIHRoaXMucmVhZGVyID0gcmVhZGVyO1xuICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IF9yZWYudGFyZ2V0O1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRhcmdldC5yZXN1bHQ7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IHt9O1xuICAgICAgICAgICAgdmFyIG9yaWVudGF0aW9uID0gMTtcbiAgICAgICAgICAgIGlmIChjaGVja09yaWVudGF0aW9uKSB7XG4gICAgICAgICAgICAgIC8vIFJlc2V0IHRoZSBvcmllbnRhdGlvbiB2YWx1ZSB0byBpdHMgZGVmYXVsdCB2YWx1ZSAxXG4gICAgICAgICAgICAgIC8vIGFzIHNvbWUgaU9TIGJyb3dzZXJzIHdpbGwgcmVuZGVyIGltYWdlIHdpdGggaXRzIG9yaWVudGF0aW9uXG4gICAgICAgICAgICAgIG9yaWVudGF0aW9uID0gcmVzZXRBbmRHZXRPcmllbnRhdGlvbihyZXN1bHQpO1xuICAgICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPiAxKSB7XG4gICAgICAgICAgICAgICAgX2V4dGVuZHMoZGF0YSwgcGFyc2VPcmllbnRhdGlvbihvcmllbnRhdGlvbikpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmV0YWluRXhpZikge1xuICAgICAgICAgICAgICBfdGhpcy5leGlmID0gZ2V0RXhpZihyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNoZWNrT3JpZW50YXRpb24gfHwgcmV0YWluRXhpZikge1xuICAgICAgICAgICAgICBpZiAoIVVSTFxuXG4gICAgICAgICAgICAgIC8vIEdlbmVyYXRlIGEgbmV3IFVSTCB3aXRoIHRoZSBkZWZhdWx0IG9yaWVudGF0aW9uIHZhbHVlIDEuXG4gICAgICAgICAgICAgIHx8IG9yaWVudGF0aW9uID4gMSkge1xuICAgICAgICAgICAgICAgIGRhdGEudXJsID0gYXJyYXlCdWZmZXJUb0RhdGFVUkwocmVzdWx0LCBtaW1lVHlwZSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF0YS51cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkYXRhLnVybCA9IHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF90aGlzLmxvYWQoZGF0YSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICByZWFkZXIub25hYm9ydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmZhaWwobmV3IEVycm9yKCdBYm9ydGVkIHRvIHJlYWQgdGhlIGltYWdlIHdpdGggRmlsZVJlYWRlci4nKSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICByZWFkZXIub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmZhaWwobmV3IEVycm9yKCdGYWlsZWQgdG8gcmVhZCB0aGUgaW1hZ2Ugd2l0aCBGaWxlUmVhZGVyLicpKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5yZWFkZXIgPSBudWxsO1xuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKGNoZWNrT3JpZW50YXRpb24gfHwgcmV0YWluRXhpZikge1xuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGZpbGUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwibG9hZFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWQoZGF0YSkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcbiAgICAgICAgdmFyIGZpbGUgPSB0aGlzLmZpbGUsXG4gICAgICAgICAgaW1hZ2UgPSB0aGlzLmltYWdlO1xuICAgICAgICBpbWFnZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMyLmRyYXcoX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIGRhdGEpLCB7fSwge1xuICAgICAgICAgICAgbmF0dXJhbFdpZHRoOiBpbWFnZS5uYXR1cmFsV2lkdGgsXG4gICAgICAgICAgICBuYXR1cmFsSGVpZ2h0OiBpbWFnZS5uYXR1cmFsSGVpZ2h0XG4gICAgICAgICAgfSkpO1xuICAgICAgICB9O1xuICAgICAgICBpbWFnZS5vbmFib3J0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMi5mYWlsKG5ldyBFcnJvcignQWJvcnRlZCB0byBsb2FkIHRoZSBpbWFnZS4nKSk7XG4gICAgICAgIH07XG4gICAgICAgIGltYWdlLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMyLmZhaWwobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCB0aGUgaW1hZ2UuJykpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIE1hdGNoIGFsbCBicm93c2VycyB0aGF0IHVzZSBXZWJLaXQgYXMgdGhlIGxheW91dCBlbmdpbmUgaW4gaU9TIGRldmljZXMsXG4gICAgICAgIC8vIHN1Y2ggYXMgU2FmYXJpIGZvciBpT1MsIENocm9tZSBmb3IgaU9TLCBhbmQgaW4tYXBwIGJyb3dzZXJzLlxuICAgICAgICBpZiAoV0lORE9XLm5hdmlnYXRvciAmJiAvKD86aVBhZHxpUGhvbmV8aVBvZCkuKj9BcHBsZVdlYktpdC9pLnRlc3QoV0lORE9XLm5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgICAgLy8gRml4IHRoZSBgVGhlIG9wZXJhdGlvbiBpcyBpbnNlY3VyZWAgZXJyb3IgKCM1NylcbiAgICAgICAgICBpbWFnZS5jcm9zc09yaWdpbiA9ICdhbm9ueW1vdXMnO1xuICAgICAgICB9XG4gICAgICAgIGltYWdlLmFsdCA9IGZpbGUubmFtZTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gZGF0YS51cmw7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImRyYXdcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBkcmF3KF9yZWYyKSB7XG4gICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuICAgICAgICB2YXIgbmF0dXJhbFdpZHRoID0gX3JlZjIubmF0dXJhbFdpZHRoLFxuICAgICAgICAgIG5hdHVyYWxIZWlnaHQgPSBfcmVmMi5uYXR1cmFsSGVpZ2h0LFxuICAgICAgICAgIF9yZWYyJHJvdGF0ZSA9IF9yZWYyLnJvdGF0ZSxcbiAgICAgICAgICByb3RhdGUgPSBfcmVmMiRyb3RhdGUgPT09IHZvaWQgMCA/IDAgOiBfcmVmMiRyb3RhdGUsXG4gICAgICAgICAgX3JlZjIkc2NhbGVYID0gX3JlZjIuc2NhbGVYLFxuICAgICAgICAgIHNjYWxlWCA9IF9yZWYyJHNjYWxlWCA9PT0gdm9pZCAwID8gMSA6IF9yZWYyJHNjYWxlWCxcbiAgICAgICAgICBfcmVmMiRzY2FsZVkgPSBfcmVmMi5zY2FsZVksXG4gICAgICAgICAgc2NhbGVZID0gX3JlZjIkc2NhbGVZID09PSB2b2lkIDAgPyAxIDogX3JlZjIkc2NhbGVZO1xuICAgICAgICB2YXIgZmlsZSA9IHRoaXMuZmlsZSxcbiAgICAgICAgICBpbWFnZSA9IHRoaXMuaW1hZ2UsXG4gICAgICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB2YXIgaXM5MERlZ3JlZXNSb3RhdGVkID0gTWF0aC5hYnMocm90YXRlKSAlIDE4MCA9PT0gOTA7XG4gICAgICAgIHZhciByZXNpemFibGUgPSAob3B0aW9ucy5yZXNpemUgPT09ICdjb250YWluJyB8fCBvcHRpb25zLnJlc2l6ZSA9PT0gJ2NvdmVyJykgJiYgaXNQb3NpdGl2ZU51bWJlcihvcHRpb25zLndpZHRoKSAmJiBpc1Bvc2l0aXZlTnVtYmVyKG9wdGlvbnMuaGVpZ2h0KTtcbiAgICAgICAgdmFyIG1heFdpZHRoID0gTWF0aC5tYXgob3B0aW9ucy5tYXhXaWR0aCwgMCkgfHwgSW5maW5pdHk7XG4gICAgICAgIHZhciBtYXhIZWlnaHQgPSBNYXRoLm1heChvcHRpb25zLm1heEhlaWdodCwgMCkgfHwgSW5maW5pdHk7XG4gICAgICAgIHZhciBtaW5XaWR0aCA9IE1hdGgubWF4KG9wdGlvbnMubWluV2lkdGgsIDApIHx8IDA7XG4gICAgICAgIHZhciBtaW5IZWlnaHQgPSBNYXRoLm1heChvcHRpb25zLm1pbkhlaWdodCwgMCkgfHwgMDtcbiAgICAgICAgdmFyIGFzcGVjdFJhdGlvID0gbmF0dXJhbFdpZHRoIC8gbmF0dXJhbEhlaWdodDtcbiAgICAgICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCxcbiAgICAgICAgICBoZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcbiAgICAgICAgaWYgKGlzOTBEZWdyZWVzUm90YXRlZCkge1xuICAgICAgICAgIHZhciBfcmVmMyA9IFttYXhIZWlnaHQsIG1heFdpZHRoXTtcbiAgICAgICAgICBtYXhXaWR0aCA9IF9yZWYzWzBdO1xuICAgICAgICAgIG1heEhlaWdodCA9IF9yZWYzWzFdO1xuICAgICAgICAgIHZhciBfcmVmNCA9IFttaW5IZWlnaHQsIG1pbldpZHRoXTtcbiAgICAgICAgICBtaW5XaWR0aCA9IF9yZWY0WzBdO1xuICAgICAgICAgIG1pbkhlaWdodCA9IF9yZWY0WzFdO1xuICAgICAgICAgIHZhciBfcmVmNSA9IFtoZWlnaHQsIHdpZHRoXTtcbiAgICAgICAgICB3aWR0aCA9IF9yZWY1WzBdO1xuICAgICAgICAgIGhlaWdodCA9IF9yZWY1WzFdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNpemFibGUpIHtcbiAgICAgICAgICBhc3BlY3RSYXRpbyA9IHdpZHRoIC8gaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHZhciBfZ2V0QWRqdXN0ZWRTaXplcyA9IGdldEFkanVzdGVkU2l6ZXMoe1xuICAgICAgICAgIGFzcGVjdFJhdGlvOiBhc3BlY3RSYXRpbyxcbiAgICAgICAgICB3aWR0aDogbWF4V2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBtYXhIZWlnaHRcbiAgICAgICAgfSwgJ2NvbnRhaW4nKTtcbiAgICAgICAgbWF4V2lkdGggPSBfZ2V0QWRqdXN0ZWRTaXplcy53aWR0aDtcbiAgICAgICAgbWF4SGVpZ2h0ID0gX2dldEFkanVzdGVkU2l6ZXMuaGVpZ2h0O1xuICAgICAgICB2YXIgX2dldEFkanVzdGVkU2l6ZXMyID0gZ2V0QWRqdXN0ZWRTaXplcyh7XG4gICAgICAgICAgYXNwZWN0UmF0aW86IGFzcGVjdFJhdGlvLFxuICAgICAgICAgIHdpZHRoOiBtaW5XaWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IG1pbkhlaWdodFxuICAgICAgICB9LCAnY292ZXInKTtcbiAgICAgICAgbWluV2lkdGggPSBfZ2V0QWRqdXN0ZWRTaXplczIud2lkdGg7XG4gICAgICAgIG1pbkhlaWdodCA9IF9nZXRBZGp1c3RlZFNpemVzMi5oZWlnaHQ7XG4gICAgICAgIGlmIChyZXNpemFibGUpIHtcbiAgICAgICAgICB2YXIgX2dldEFkanVzdGVkU2l6ZXMzID0gZ2V0QWRqdXN0ZWRTaXplcyh7XG4gICAgICAgICAgICBhc3BlY3RSYXRpbzogYXNwZWN0UmF0aW8sXG4gICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodFxuICAgICAgICAgIH0sIG9wdGlvbnMucmVzaXplKTtcbiAgICAgICAgICB3aWR0aCA9IF9nZXRBZGp1c3RlZFNpemVzMy53aWR0aDtcbiAgICAgICAgICBoZWlnaHQgPSBfZ2V0QWRqdXN0ZWRTaXplczMuaGVpZ2h0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBfZ2V0QWRqdXN0ZWRTaXplczQgPSBnZXRBZGp1c3RlZFNpemVzKHtcbiAgICAgICAgICAgIGFzcGVjdFJhdGlvOiBhc3BlY3RSYXRpbyxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdmFyIF9nZXRBZGp1c3RlZFNpemVzNCR3aSA9IF9nZXRBZGp1c3RlZFNpemVzNC53aWR0aDtcbiAgICAgICAgICB3aWR0aCA9IF9nZXRBZGp1c3RlZFNpemVzNCR3aSA9PT0gdm9pZCAwID8gbmF0dXJhbFdpZHRoIDogX2dldEFkanVzdGVkU2l6ZXM0JHdpO1xuICAgICAgICAgIHZhciBfZ2V0QWRqdXN0ZWRTaXplczQkaGUgPSBfZ2V0QWRqdXN0ZWRTaXplczQuaGVpZ2h0O1xuICAgICAgICAgIGhlaWdodCA9IF9nZXRBZGp1c3RlZFNpemVzNCRoZSA9PT0gdm9pZCAwID8gbmF0dXJhbEhlaWdodCA6IF9nZXRBZGp1c3RlZFNpemVzNCRoZTtcbiAgICAgICAgfVxuICAgICAgICB3aWR0aCA9IE1hdGguZmxvb3Iobm9ybWFsaXplRGVjaW1hbE51bWJlcihNYXRoLm1pbihNYXRoLm1heCh3aWR0aCwgbWluV2lkdGgpLCBtYXhXaWR0aCkpKTtcbiAgICAgICAgaGVpZ2h0ID0gTWF0aC5mbG9vcihub3JtYWxpemVEZWNpbWFsTnVtYmVyKE1hdGgubWluKE1hdGgubWF4KGhlaWdodCwgbWluSGVpZ2h0KSwgbWF4SGVpZ2h0KSkpO1xuICAgICAgICB2YXIgZGVzdFggPSAtd2lkdGggLyAyO1xuICAgICAgICB2YXIgZGVzdFkgPSAtaGVpZ2h0IC8gMjtcbiAgICAgICAgdmFyIGRlc3RXaWR0aCA9IHdpZHRoO1xuICAgICAgICB2YXIgZGVzdEhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IFtdO1xuICAgICAgICBpZiAocmVzaXphYmxlKSB7XG4gICAgICAgICAgdmFyIHNyY1ggPSAwO1xuICAgICAgICAgIHZhciBzcmNZID0gMDtcbiAgICAgICAgICB2YXIgc3JjV2lkdGggPSBuYXR1cmFsV2lkdGg7XG4gICAgICAgICAgdmFyIHNyY0hlaWdodCA9IG5hdHVyYWxIZWlnaHQ7XG4gICAgICAgICAgdmFyIF9nZXRBZGp1c3RlZFNpemVzNSA9IGdldEFkanVzdGVkU2l6ZXMoe1xuICAgICAgICAgICAgYXNwZWN0UmF0aW86IGFzcGVjdFJhdGlvLFxuICAgICAgICAgICAgd2lkdGg6IG5hdHVyYWxXaWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogbmF0dXJhbEhlaWdodFxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIGNvbnRhaW46ICdjb3ZlcicsXG4gICAgICAgICAgICBjb3ZlcjogJ2NvbnRhaW4nXG4gICAgICAgICAgfVtvcHRpb25zLnJlc2l6ZV0pO1xuICAgICAgICAgIHNyY1dpZHRoID0gX2dldEFkanVzdGVkU2l6ZXM1LndpZHRoO1xuICAgICAgICAgIHNyY0hlaWdodCA9IF9nZXRBZGp1c3RlZFNpemVzNS5oZWlnaHQ7XG4gICAgICAgICAgc3JjWCA9IChuYXR1cmFsV2lkdGggLSBzcmNXaWR0aCkgLyAyO1xuICAgICAgICAgIHNyY1kgPSAobmF0dXJhbEhlaWdodCAtIHNyY0hlaWdodCkgLyAyO1xuICAgICAgICAgIHBhcmFtcy5wdXNoKHNyY1gsIHNyY1ksIHNyY1dpZHRoLCBzcmNIZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIHBhcmFtcy5wdXNoKGRlc3RYLCBkZXN0WSwgZGVzdFdpZHRoLCBkZXN0SGVpZ2h0KTtcbiAgICAgICAgaWYgKGlzOTBEZWdyZWVzUm90YXRlZCkge1xuICAgICAgICAgIHZhciBfcmVmNiA9IFtoZWlnaHQsIHdpZHRoXTtcbiAgICAgICAgICB3aWR0aCA9IF9yZWY2WzBdO1xuICAgICAgICAgIGhlaWdodCA9IF9yZWY2WzFdO1xuICAgICAgICB9XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBpZiAoIWlzSW1hZ2VUeXBlKG9wdGlvbnMubWltZVR5cGUpKSB7XG4gICAgICAgICAgb3B0aW9ucy5taW1lVHlwZSA9IGZpbGUudHlwZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZmlsbFN0eWxlID0gJ3RyYW5zcGFyZW50JztcblxuICAgICAgICAvLyBDb252ZXJ0cyBQTkcgZmlsZXMgb3ZlciB0aGUgYGNvbnZlcnRTaXplYCB0byBKUEVHcy5cbiAgICAgICAgaWYgKGZpbGUuc2l6ZSA+IG9wdGlvbnMuY29udmVydFNpemUgJiYgb3B0aW9ucy5jb252ZXJ0VHlwZXMuaW5kZXhPZihvcHRpb25zLm1pbWVUeXBlKSA+PSAwKSB7XG4gICAgICAgICAgb3B0aW9ucy5taW1lVHlwZSA9ICdpbWFnZS9qcGVnJztcbiAgICAgICAgfVxuICAgICAgICB2YXIgaXNKUEVHSW1hZ2UgPSBvcHRpb25zLm1pbWVUeXBlID09PSAnaW1hZ2UvanBlZyc7XG4gICAgICAgIGlmIChpc0pQRUdJbWFnZSkge1xuICAgICAgICAgIGZpbGxTdHlsZSA9ICcjZmZmJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE92ZXJyaWRlIHRoZSBkZWZhdWx0IGZpbGwgY29sb3IgKCMwMDAsIGJsYWNrKVxuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGZpbGxTdHlsZTtcbiAgICAgICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgaWYgKG9wdGlvbnMuYmVmb3JlRHJhdykge1xuICAgICAgICAgIG9wdGlvbnMuYmVmb3JlRHJhdy5jYWxsKHRoaXMsIGNvbnRleHQsIGNhbnZhcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYWJvcnRlZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0LnNhdmUoKTtcbiAgICAgICAgY29udGV4dC50cmFuc2xhdGUod2lkdGggLyAyLCBoZWlnaHQgLyAyKTtcbiAgICAgICAgY29udGV4dC5yb3RhdGUocm90YXRlICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIGNvbnRleHQuc2NhbGUoc2NhbGVYLCBzY2FsZVkpO1xuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZS5hcHBseShjb250ZXh0LCBbaW1hZ2VdLmNvbmNhdChwYXJhbXMpKTtcbiAgICAgICAgY29udGV4dC5yZXN0b3JlKCk7XG4gICAgICAgIGlmIChvcHRpb25zLmRyZXcpIHtcbiAgICAgICAgICBvcHRpb25zLmRyZXcuY2FsbCh0aGlzLCBjb250ZXh0LCBjYW52YXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmFib3J0ZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNhbGxiYWNrID0gZnVuY3Rpb24gY2FsbGJhY2soYmxvYikge1xuICAgICAgICAgIGlmICghX3RoaXMzLmFib3J0ZWQpIHtcbiAgICAgICAgICAgIHZhciBkb25lID0gZnVuY3Rpb24gZG9uZShyZXN1bHQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5kb25lKHtcbiAgICAgICAgICAgICAgICBuYXR1cmFsV2lkdGg6IG5hdHVyYWxXaWR0aCxcbiAgICAgICAgICAgICAgICBuYXR1cmFsSGVpZ2h0OiBuYXR1cmFsSGVpZ2h0LFxuICAgICAgICAgICAgICAgIHJlc3VsdDogcmVzdWx0XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChibG9iICYmIGlzSlBFR0ltYWdlICYmIG9wdGlvbnMucmV0YWluRXhpZiAmJiBfdGhpczMuZXhpZiAmJiBfdGhpczMuZXhpZi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIHZhciBuZXh0ID0gZnVuY3Rpb24gbmV4dChhcnJheUJ1ZmZlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBkb25lKHRvQmxvYihhcnJheUJ1ZmZlclRvRGF0YVVSTChpbnNlcnRFeGlmKGFycmF5QnVmZmVyLCBfdGhpczMuZXhpZiksIG9wdGlvbnMubWltZVR5cGUpKSk7XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIGlmIChibG9iLmFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgICAgICAgYmxvYi5hcnJheUJ1ZmZlcigpLnRoZW4obmV4dCkuY2F0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgX3RoaXMzLmZhaWwobmV3IEVycm9yKCdGYWlsZWQgdG8gcmVhZCB0aGUgY29tcHJlc3NlZCBpbWFnZSB3aXRoIEJsb2IuYXJyYXlCdWZmZXIoKS4nKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICAgICAgX3RoaXMzLnJlYWRlciA9IHJlYWRlcjtcbiAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKF9yZWY3KSB7XG4gICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gX3JlZjcudGFyZ2V0O1xuICAgICAgICAgICAgICAgICAgbmV4dCh0YXJnZXQucmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJlYWRlci5vbmFib3J0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgX3RoaXMzLmZhaWwobmV3IEVycm9yKCdBYm9ydGVkIHRvIHJlYWQgdGhlIGNvbXByZXNzZWQgaW1hZ2Ugd2l0aCBGaWxlUmVhZGVyLicpKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJlYWRlci5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgX3RoaXMzLmZhaWwobmV3IEVycm9yKCdGYWlsZWQgdG8gcmVhZCB0aGUgY29tcHJlc3NlZCBpbWFnZSB3aXRoIEZpbGVSZWFkZXIuJykpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIF90aGlzMy5yZWFkZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGJsb2IpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkb25lKGJsb2IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGNhbnZhcy50b0Jsb2IpIHtcbiAgICAgICAgICBjYW52YXMudG9CbG9iKGNhbGxiYWNrLCBvcHRpb25zLm1pbWVUeXBlLCBvcHRpb25zLnF1YWxpdHkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhbGxiYWNrKHRvQmxvYihjYW52YXMudG9EYXRhVVJMKG9wdGlvbnMubWltZVR5cGUsIG9wdGlvbnMucXVhbGl0eSkpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJkb25lXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZG9uZShfcmVmOCkge1xuICAgICAgICB2YXIgbmF0dXJhbFdpZHRoID0gX3JlZjgubmF0dXJhbFdpZHRoLFxuICAgICAgICAgIG5hdHVyYWxIZWlnaHQgPSBfcmVmOC5uYXR1cmFsSGVpZ2h0LFxuICAgICAgICAgIHJlc3VsdCA9IF9yZWY4LnJlc3VsdDtcbiAgICAgICAgdmFyIGZpbGUgPSB0aGlzLmZpbGUsXG4gICAgICAgICAgaW1hZ2UgPSB0aGlzLmltYWdlLFxuICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGlmIChVUkwgJiYgaW1hZ2Uuc3JjLmluZGV4T2YoJ2Jsb2I6JykgPT09IDApIHtcbiAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKGltYWdlLnNyYyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgIC8vIFJldHVybnMgb3JpZ2luYWwgZmlsZSBpZiB0aGUgcmVzdWx0IGlzIGdyZWF0ZXIgdGhhbiBpdCBhbmQgd2l0aG91dCBzaXplIHJlbGF0ZWQgb3B0aW9uc1xuICAgICAgICAgIGlmIChvcHRpb25zLnN0cmljdCAmJiAhb3B0aW9ucy5yZXRhaW5FeGlmICYmIHJlc3VsdC5zaXplID4gZmlsZS5zaXplICYmIG9wdGlvbnMubWltZVR5cGUgPT09IGZpbGUudHlwZSAmJiAhKG9wdGlvbnMud2lkdGggPiBuYXR1cmFsV2lkdGggfHwgb3B0aW9ucy5oZWlnaHQgPiBuYXR1cmFsSGVpZ2h0IHx8IG9wdGlvbnMubWluV2lkdGggPiBuYXR1cmFsV2lkdGggfHwgb3B0aW9ucy5taW5IZWlnaHQgPiBuYXR1cmFsSGVpZ2h0IHx8IG9wdGlvbnMubWF4V2lkdGggPCBuYXR1cmFsV2lkdGggfHwgb3B0aW9ucy5tYXhIZWlnaHQgPCBuYXR1cmFsSGVpZ2h0KSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gZmlsZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgcmVzdWx0Lmxhc3RNb2RpZmllZCA9IGRhdGUuZ2V0VGltZSgpO1xuICAgICAgICAgICAgcmVzdWx0Lmxhc3RNb2RpZmllZERhdGUgPSBkYXRlO1xuICAgICAgICAgICAgcmVzdWx0Lm5hbWUgPSBmaWxlLm5hbWU7XG5cbiAgICAgICAgICAgIC8vIENvbnZlcnQgdGhlIGV4dGVuc2lvbiB0byBtYXRjaCBpdHMgdHlwZVxuICAgICAgICAgICAgaWYgKHJlc3VsdC5uYW1lICYmIHJlc3VsdC50eXBlICE9PSBmaWxlLnR5cGUpIHtcbiAgICAgICAgICAgICAgcmVzdWx0Lm5hbWUgPSByZXN1bHQubmFtZS5yZXBsYWNlKFJFR0VYUF9FWFRFTlNJT04sIGltYWdlVHlwZVRvRXh0ZW5zaW9uKHJlc3VsdC50eXBlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFJldHVybnMgb3JpZ2luYWwgZmlsZSBpZiB0aGUgcmVzdWx0IGlzIG51bGwgaW4gc29tZSBjYXNlcy5cbiAgICAgICAgICByZXN1bHQgPSBmaWxlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzdWx0ID0gcmVzdWx0O1xuICAgICAgICBpZiAob3B0aW9ucy5zdWNjZXNzKSB7XG4gICAgICAgICAgb3B0aW9ucy5zdWNjZXNzLmNhbGwodGhpcywgcmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJmYWlsXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZmFpbChlcnIpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGlmIChvcHRpb25zLmVycm9yKSB7XG4gICAgICAgICAgb3B0aW9ucy5lcnJvci5jYWxsKHRoaXMsIGVycik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImFib3J0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gYWJvcnQoKSB7XG4gICAgICAgIGlmICghdGhpcy5hYm9ydGVkKSB7XG4gICAgICAgICAgdGhpcy5hYm9ydGVkID0gdHJ1ZTtcbiAgICAgICAgICBpZiAodGhpcy5yZWFkZXIpIHtcbiAgICAgICAgICAgIHRoaXMucmVhZGVyLmFib3J0KCk7XG4gICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5pbWFnZS5jb21wbGV0ZSkge1xuICAgICAgICAgICAgdGhpcy5pbWFnZS5vbmxvYWQgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5pbWFnZS5vbmFib3J0KCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZmFpbChuZXcgRXJyb3IoJ1RoZSBjb21wcmVzc2lvbiBwcm9jZXNzIGhhcyBiZWVuIGFib3J0ZWQuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEdldCB0aGUgbm8gY29uZmxpY3QgY29tcHJlc3NvciBjbGFzcy5cbiAgICAgICAqIEByZXR1cm5zIHtDb21wcmVzc29yfSBUaGUgY29tcHJlc3NvciBjbGFzcy5cbiAgICAgICAqL1xuICAgIH1dLCBbe1xuICAgICAga2V5OiBcIm5vQ29uZmxpY3RcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBub0NvbmZsaWN0KCkge1xuICAgICAgICB3aW5kb3cuQ29tcHJlc3NvciA9IEFub3RoZXJDb21wcmVzc29yO1xuICAgICAgICByZXR1cm4gQ29tcHJlc3NvcjtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDaGFuZ2UgdGhlIGRlZmF1bHQgb3B0aW9ucy5cbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gVGhlIG5ldyBkZWZhdWx0IG9wdGlvbnMuXG4gICAgICAgKi9cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic2V0RGVmYXVsdHNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXREZWZhdWx0cyhvcHRpb25zKSB7XG4gICAgICAgIF9leHRlbmRzKERFRkFVTFRTLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIENvbXByZXNzb3I7XG4gIH0oKTtcblxuICByZXR1cm4gQ29tcHJlc3NvcjtcblxufSkpO1xuIiwgImltcG9ydCB7XG4gIE1hcmtkb3duVmlldyxcbiAgTm90aWNlLFxuICBQbHVnaW4sXG4gIG5vcm1hbGl6ZVBhdGgsXG4gIGFkZEljb24sXG59IGZyb20gXCJvYnNpZGlhblwiO1xuXG5pbXBvcnQgeyBERUZBVUxUX1NFVFRJTkdTLCBDYW1lcmFFbWJlZFNldHRpbmdzLCBDYW1lcmFFbWJlZFNldHRpbmdUYWIgfSBmcm9tIFwiLi9zZXR0aW5ncy5qc1wiO1xuaW1wb3J0IHsgY29tcHJlc3NJbWFnZSB9IGZyb20gXCIuL2NvbXByZXNzb3IuanNcIjtcbmltcG9ydCB7IGJ1aWxkRmlsZU5hbWUsIGZvbGRlckV4aXN0cywgZ2V0QXZhaWxhYmxlUGF0aCwgam9pblBhdGggfSBmcm9tIFwiLi9maWxlLXV0aWxzLmpzXCI7XG5pbXBvcnQgeyBwaWNrSW1hZ2VGcm9tQ2FtZXJhIH0gZnJvbSBcIi4vaW5wdXQtdXRpbHMuanNcIjtcbmltcG9ydCB7UGlja2VyTW9kYWx9IGZyb20gXCIuL3BpY2tlci1tb2RhbC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW1lcmFFbWJlZFBsdWdpbiBleHRlbmRzIFBsdWdpbiB7XG4gIHNldHRpbmdzOiBDYW1lcmFFbWJlZFNldHRpbmdzO1xuXG4gIGFzeW5jIG9ubG9hZCgpIHtcbiAgICAvLyBMb2FkIHBlcnNpc3RlZCBzZXR0aW5ncyBiZWZvcmUgd2lyaW5nIFVJLlxuICAgIGF3YWl0IHRoaXMubG9hZFNldHRpbmdzKCk7XG5cbiAgICB0aGlzLmFkZFNldHRpbmdUYWIobmV3IENhbWVyYUVtYmVkU2V0dGluZ1RhYih0aGlzLmFwcCwgdGhpcykpO1xuXG4gICAgdGhpcy5hZGRSaWJib25JY29uKFwiY2FtZXJhXCIsIFwiQ2FwdHVyZSBwaG90b1wiLCAoKSA9PiB7XG4gICAgICAvLyB2b2lkIHRoaXMuY2FwdHVyZUFuZEVtYmVkKCk7XG4gICAgICBpZiAodGhpcy5zZXR0aW5ncy5pbWFnZVBpY2tlcikge1xuICAgICAgICBuZXcgUGlja2VyTW9kYWwodGhpcy5hcHAsIChyZXN1bHQ6IFwiY2FtZXJhXCIgfCBcImdhbGxlcnlcIiB8IG51bGwpID0+IHtcbiAgICAgICAgICBpZiAocmVzdWx0KSB2b2lkIHRoaXMuY2FwdHVyZUFuZEVtYmVkKHJlc3VsdCk7XG4gICAgICAgIH0pLm9wZW4oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZvaWQgdGhpcy5jYXB0dXJlQW5kRW1iZWQoJ2NhbWVyYScpXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6IFwiY2FwdHVyZS1waG90by1lbWJlZFwiLFxuICAgICAgbmFtZTogXCJDYXB0dXJlIHBob3RvIGFuZCBlbWJlZFwiLFxuICAgICAgaWNvbjogXCJjYW1lcmFcIixcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmltYWdlUGlja2VyKSB7XG4gICAgICAgICAgbmV3IFBpY2tlck1vZGFsKHRoaXMuYXBwLCAocmVzdWx0OiBcImNhbWVyYVwiIHwgXCJnYWxsZXJ5XCIgfCBudWxsKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB2b2lkIHRoaXMuY2FwdHVyZUFuZEVtYmVkKHJlc3VsdCk7XG4gICAgICAgICAgfSkub3BlbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZvaWQgdGhpcy5jYXB0dXJlQW5kRW1iZWQoJ2NhbWVyYScpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxucHJpdmF0ZSBhc3luYyBjYXB0dXJlQW5kRW1iZWQoc291cmNlOiBcImNhbWVyYVwiIHwgXCJnYWxsZXJ5XCIpIHtcbiAgICAvLyBFbnN1cmUgdGhlcmUncyBhbiBhY3RpdmUgbWFya2Rvd24gZWRpdG9yIHRvIGluc2VydCB0aGUgaW1hZ2UuXG4gICAgY29uc3QgdmlldyA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1hcmtkb3duVmlldyk7XG4gICAgaWYgKCF2aWV3KSB7XG4gICAgICBuZXcgTm90aWNlKFwiUGxlYXNlIG9wZW4gYSBNYXJrZG93biBub3RlIHRvIGluc2VydCB0aGUgcGhvdG8uXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2ZUZpbGUgPSB2aWV3LmZpbGU7XG4gICAgaWYgKCFhY3RpdmVGaWxlKSB7XG4gICAgICBuZXcgTm90aWNlKFwiTm8gYWN0aXZlIG5vdGUgdG8gaW5zZXJ0IHRoZSBwaG90by5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gT3BlbiB0aGUgZGV2aWNlIGNhbWVyYSBhbmQgbGV0IHRoZSB1c2VyIGNhcHR1cmUgYSBwaG90by5cbiAgICBjb25zdCBmaWxlID0gYXdhaXQgcGlja0ltYWdlRnJvbUNhbWVyYShzb3VyY2UpO1xuICAgIGlmICghZmlsZSkgcmV0dXJuO1xuXG4gICAgbGV0IGZpbmFsRmlsZTogQmxvYiB8IEZpbGUgPSBmaWxlO1xuICAgIGlmICh0aGlzLnNldHRpbmdzLmNvbXByZXNzSW1hZ2VzKSB7XG4gICAgICBmaW5hbEZpbGUgPSBhd2FpdCBjb21wcmVzc0ltYWdlKGZpbGUsIHRoaXMuc2V0dGluZ3MuY29tcHJlc3NRdWFsaXR5KTtcbiAgICB9XG5cbiAgICAvLyBTYXZlIHRoZSBwaG90byBpbnRvIHRoZSB2YXVsdC5cbiAgICBjb25zdCBhcnJheUJ1ZmZlciA9IGF3YWl0IGZpbmFsRmlsZS5hcnJheUJ1ZmZlcigpO1xuICAgIGNvbnN0IGZpbGVQYXRoID0gYWN0aXZlRmlsZS5wYXJlbnQ/LnBhdGg7IC8vIGUuZy4gXCJuZXdzXCIgb3IgXCJcIiAoaWYgbm90ZSBpbiByb290KVxuXG4gICAgLy8gRGV0ZXJtaW5lIHRoZSB0YXJnZXQgZm9sZGVyIGJhc2VkIG9uIHNldHRpbmdzXG4gICAgY29uc3QgdGFyZ2V0Rm9sZGVyUGF0aCA9IGF3YWl0IHRoaXMuZW5zdXJlVGFyZ2V0Rm9sZGVyKGZpbGVQYXRoKTtcbiAgICBpZiAodGFyZ2V0Rm9sZGVyUGF0aCA9PT0gbnVsbCkgcmV0dXJuOyAvLyBlcnJvciBhbHJlYWR5IHNob3duXG5cbiAgICBjb25zdCBmaWxlTmFtZSA9IGJ1aWxkRmlsZU5hbWUoZmlsZSk7XG4gICAgY29uc3QgdGFyZ2V0UGF0aCA9IGdldEF2YWlsYWJsZVBhdGgodGhpcy5hcHAudmF1bHQsIGpvaW5QYXRoKHRhcmdldEZvbGRlclBhdGgsIGZpbGVOYW1lKSk7XG4gICAgY29uc3QgY3JlYXRlZCA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNyZWF0ZUJpbmFyeSh0YXJnZXRQYXRoLCBhcnJheUJ1ZmZlcik7XG5cbiAgICAvLyBJbnNlcnQgYSBtYXJrZG93biBlbWJlZCBmb3IgdGhlIHNhdmVkIGltYWdlLlxuICAgIGNvbnN0IGxpbmsgPSB0aGlzLmFwcC5maWxlTWFuYWdlci5nZW5lcmF0ZU1hcmtkb3duTGluayhjcmVhdGVkLCBhY3RpdmVGaWxlLnBhdGgpO1xuICAgIHZpZXcuZWRpdG9yLnJlcGxhY2VTZWxlY3Rpb24oYCEke2xpbmt9YCk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB0aGUgZm9sZGVyIHBhdGggd2hlcmUgdGhlIHBob3RvIHNob3VsZCBiZSBzYXZlZCxcbiAgICogYW5kIGNyZWF0ZXMgaXQgaWYgbWlzc2luZyAod2hlbiBgY3JlYXRlRm9sZGVySWZNaXNzaW5nYCBpcyB0cnVlKS5cbiAgICpcbiAgICogQHBhcmFtIG5vdGVGb2xkZXJQYXRoIFx1MjAxMyB0aGUgcGF0aCBvZiB0aGUgZm9sZGVyIGNvbnRhaW5pbmcgdGhlIGFjdGl2ZSBub3RlXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgKG1heWJlIGVtcHR5IHN0cmluZyBpZiBub3RlIGlzIGluIHZhdWx0IHJvb3QpXG4gICAqIEByZXR1cm5zIFRoZSBub3JtYWxpemVkIHRhcmdldCBmb2xkZXIgcGF0aCAoZW1wdHkgc3RyaW5nIGZvciB2YXVsdCByb290KSxcbiAgICogICAgICAgICAgb3IgYG51bGxgIGlmIHRoZSBmb2xkZXIgY2Fubm90IGJlIHVzZWQvY3JlYXRlZC5cbiAgICovXG4gIHByaXZhdGUgYXN5bmMgZW5zdXJlVGFyZ2V0Rm9sZGVyKG5vdGVGb2xkZXJQYXRoOiBzdHJpbmcgfCB1bmRlZmluZWQpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcbiAgICBjb25zdCByYXdQaG90b3NGb2xkZXIgPSB0aGlzLnNldHRpbmdzLnBob3Rvc0ZvbGRlci50cmltKCk7XG4gICAgY29uc3Qgc2F2ZU5lYXIgPSB0aGlzLnNldHRpbmdzLnNhdmVOZWFyVGhlTm90ZTtcblxuICAgIC8vIC0tLSBDYXNlIEE6IFNhdmUgbmVhciB0aGUgbm90ZSAtLS1cbiAgICBpZiAoc2F2ZU5lYXIpIHtcbiAgICAgIC8vIG5vdGVGb2xkZXJQYXRoIGlzIGd1YXJhbnRlZWQgdG8gZXhpc3QgYmVjYXVzZSB0aGUgbm90ZSBleGlzdHNcbiAgICAgIGNvbnN0IGJhc2VGb2xkZXIgPSBub3RlRm9sZGVyUGF0aCA/PyBcIlwiO1xuXG4gICAgICBpZiAocmF3UGhvdG9zRm9sZGVyID09PSBcIlwiKSB7XG4gICAgICAgIC8vIFNhdmUgZGlyZWN0bHkgaW4gdGhlIG5vdGUncyBmb2xkZXJcbiAgICAgICAgcmV0dXJuIGJhc2VGb2xkZXI7IC8vIG1heSBiZSBcIlwiICh2YXVsdCByb290KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gU2F2ZSBpbiBub3RlJ3MgZm9sZGVyICsgcGhvdG9zRm9sZGVyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGJhc2VGb2xkZXIgPyBgJHtiYXNlRm9sZGVyfS8ke3Jhd1Bob3Rvc0ZvbGRlcn1gIDogcmF3UGhvdG9zRm9sZGVyO1xuICAgICAgICBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplUGF0aCh0YXJnZXQpO1xuXG4gICAgICAgIC8vIElmIHRoZSBmb2xkZXIgYWxyZWFkeSBleGlzdHMsIHJldHVybiBpdFxuICAgICAgICBpZiAoZm9sZGVyRXhpc3RzKHRoaXMuYXBwLnZhdWx0LCBub3JtYWxpemVkKSkgcmV0dXJuIG5vcm1hbGl6ZWQ7XG5cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCBjcmVhdGUgaXQgaWYgYWxsb3dlZFxuICAgICAgICBpZiAoIXRoaXMuc2V0dGluZ3MuY3JlYXRlRm9sZGVySWZNaXNzaW5nKSB7XG4gICAgICAgICAgbmV3IE5vdGljZShgRm9sZGVyIG5vdCBmb3VuZDogJHtub3JtYWxpemVkfWApO1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5jcmVhdGVGb2xkZXIobm9ybWFsaXplZCk7XG4gICAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZWQ7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgbmV3IE5vdGljZShgRmFpbGVkIHRvIGNyZWF0ZSBmb2xkZXI6ICR7bm9ybWFsaXplZH1gKTtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIC0tLSBDYXNlIEI6IEdsb2JhbCBwaG90b3MgZm9sZGVyIChub3QgbmVhciB0aGUgbm90ZSkgLS0tXG4gICAgaWYgKHJhd1Bob3Rvc0ZvbGRlciA9PT0gXCJcIikge1xuICAgICAgLy8gU2F2ZSBpbiB2YXVsdCByb290XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG5cbiAgICBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplUGF0aChyYXdQaG90b3NGb2xkZXIpO1xuICAgIGlmIChmb2xkZXJFeGlzdHModGhpcy5hcHAudmF1bHQsIG5vcm1hbGl6ZWQpKSByZXR1cm4gbm9ybWFsaXplZDtcblxuICAgIGlmICghdGhpcy5zZXR0aW5ncy5jcmVhdGVGb2xkZXJJZk1pc3NpbmcpIHtcbiAgICAgIG5ldyBOb3RpY2UoYEZvbGRlciBub3QgZm91bmQ6ICR7bm9ybWFsaXplZH1gKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5jcmVhdGVGb2xkZXIobm9ybWFsaXplZCk7XG4gICAgICByZXR1cm4gbm9ybWFsaXplZDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgbmV3IE5vdGljZShgRmFpbGVkIHRvIGNyZWF0ZSBmb2xkZXI6ICR7bm9ybWFsaXplZH1gKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgbG9hZFNldHRpbmdzKCkge1xuICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX1NFVFRJTkdTLCBhd2FpdCB0aGlzLmxvYWREYXRhKCkgYXMgUGFydGlhbDxDYW1lcmFFbWJlZFNldHRpbmdzPik7XG4gIH1cblxuICBhc3luYyBzYXZlU2V0dGluZ3MoKSB7XG4gICAgYXdhaXQgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcbiAgfVxufVxuIiwgImltcG9ydCB7QXBwLCBQbHVnaW5TZXR0aW5nVGFiLCBTZXR0aW5nfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCBDYW1lcmFFbWJlZFBsdWdpbiBmcm9tIFwiLi9tYWluLmpzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FtZXJhRW1iZWRTZXR0aW5ncyB7XG4gIHBob3Rvc0ZvbGRlcjogc3RyaW5nO1xuICBjcmVhdGVGb2xkZXJJZk1pc3Npbmc6IGJvb2xlYW47XG4gIHNhdmVOZWFyVGhlTm90ZTogYm9vbGVhbjtcbiAgY29tcHJlc3NJbWFnZXM6IGJvb2xlYW47XG4gIGNvbXByZXNzUXVhbGl0eTogbnVtYmVyO1xuICBpbWFnZVBpY2tlcjogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfU0VUVElOR1M6IENhbWVyYUVtYmVkU2V0dGluZ3MgPSB7XG4gIHBob3Rvc0ZvbGRlcjogXCJcIixcbiAgY3JlYXRlRm9sZGVySWZNaXNzaW5nOiB0cnVlLFxuICBzYXZlTmVhclRoZU5vdGU6IGZhbHNlLFxuICBjb21wcmVzc0ltYWdlczogZmFsc2UsXG4gIGNvbXByZXNzUXVhbGl0eTogMC44LFxuICBpbWFnZVBpY2tlcjogZmFsc2UsXG59O1xuXG5cbmV4cG9ydCBjbGFzcyBDYW1lcmFFbWJlZFNldHRpbmdUYWIgZXh0ZW5kcyBQbHVnaW5TZXR0aW5nVGFiIHtcbiAgcGx1Z2luOiBDYW1lcmFFbWJlZFBsdWdpbjtcblxuICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBDYW1lcmFFbWJlZFBsdWdpbikge1xuICAgIHN1cGVyKGFwcCwgcGx1Z2luKTtcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgfVxuXG4gIGRpc3BsYXkoKTogdm9pZCB7XG4gICAgY29uc3QgeyBjb250YWluZXJFbCB9ID0gdGhpcztcbiAgICBjb250YWluZXJFbC5lbXB0eSgpO1xuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgIC5zZXROYW1lKFwiUGxhdGZvcm0gc3VwcG9ydFwiKVxuICAgIC5zZXREZXNjKFxuICAgICAgXCJUaGlzIHBsdWdpbiBpcyBwcmltYXJpbHkgZGVzaWduZWQgZm9yIEFuZHJvaWQuIFNvbWUgZmVhdHVyZXMgbWF5IGJlIGxpbWl0ZWQgb3IgdW5hdmFpbGFibGUgb24gaU9TIGFuZCBkZXNrdG9wLlwiXG4gICAgKTtcbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbCkuc2V0TmFtZShcIlNhdmUgaW1hZ2VzXCIpLnNldEhlYWRpbmcoKTtcbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKFwiUGhvdG9zIGZvbGRlclwiKVxuICAgICAgLnNldERlc2MoXG4gICAgICAgIFwiT3B0aW9uYWwsIHVzZSBhIHZhdWx0LXJlbGF0aXZlIHBhdGggbGlrZSBhdHRhY2htZW50cy9jYW1lcmEsIGxlYXZlIGJsYW5rIHRvIHN0b3JlIG5leHQgdG8gdGhlIG5vdGUuXCJcbiAgICAgIClcbiAgICAgIC5hZGRUZXh0KCh0ZXh0KSA9PlxuICAgICAgICB0ZXh0XG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnBob3Rvc0ZvbGRlcilcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5waG90b3NGb2xkZXIgPSB2YWx1ZTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZShcIkNyZWF0ZSBmb2xkZXIgaWYgbWlzc2luZ1wiKVxuICAgICAgLnNldERlc2MoXCJBdXRvbWF0aWNhbGx5IGNyZWF0ZSB0aGUgcGhvdG9zIGZvbGRlciBpZiBpdCBkb2VzIG5vdCBleGlzdC5cIilcbiAgICAgIC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT5cbiAgICAgICAgdG9nZ2xlXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmNyZWF0ZUZvbGRlcklmTWlzc2luZylcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jcmVhdGVGb2xkZXJJZk1pc3NpbmcgPSB2YWx1ZTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZShcIlNhdmUgbmVhciB0aGUgbm90ZVwiKVxuICAgICAgLnNldERlc2MoXG4gICAgICAgIFwiV2hlbiBlbmFibGVkLCBwaG90b3Mgd2lsbCBiZSBzYXZlZCBpbiB0aGUgc2FtZSBmb2xkZXIgYXMgdGhlIG5vdGUsIG9yIGluc2lkZSBhIHBob3RvcyBmb2xkZXIgd2l0aGluIHRoYXQgc2FtZSBkaXJlY3RvcnkuXCJcbiAgICAgIClcbiAgICAgIC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT5cbiAgICAgICAgdG9nZ2xlXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnNhdmVOZWFyVGhlTm90ZSlcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zYXZlTmVhclRoZU5vdGUgPSB2YWx1ZTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpLnNldE5hbWUoXCJDb21wcmVzcyBpbWFnZXNcIikuc2V0SGVhZGluZygpO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZShcIkNvbXByZXNzIGltYWdlc1wiKVxuICAgICAgLnNldERlc2MoXCJSZWR1Y2UgcGhvdG8gZmlsZSBzaXplcyBieSBjb21wcmVzc2luZyB0aGVtIGJlZm9yZSBzYXZpbmcuXCIpXG4gICAgICAuYWRkVG9nZ2xlKCh0b2dnbGUpID0+XG4gICAgICAgIHRvZ2dsZVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5jb21wcmVzc0ltYWdlcylcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jb21wcmVzc0ltYWdlcyA9IHZhbHVlO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKFwiQ29tcHJlc3MgcXVhbGl0eVwiKVxuICAgICAgLnNldERlc2MoXCJBZGp1c3QgdGhlIHF1YWxpdHkgb2YgY29tcHJlc3NlZCBpbWFnZXMuIExvd2VyIHZhbHVlcyByZXN1bHQgaW4gc21hbGxlciBmaWxlcyBidXQgd29yc2UgcXVhbGl0eS5cIilcbiAgICAgIC5hZGRTbGlkZXIoc2xpZGVyID0+XG4gICAgICAgIHNsaWRlclxuICAgICAgICAgIC5zZXRMaW1pdHMoMCwgMC45LCAwLjA1KVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5jb21wcmVzc1F1YWxpdHkpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuY29tcHJlc3NRdWFsaXR5ID0gdmFsdWU7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKVxuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpLnNldE5hbWUoXCJQaWNrZXIgKG9wdGlvbmFsKVwiKS5zZXRIZWFkaW5nKCk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKFwiSW1hZ2UgcGlja2VyIChvcHRpb25hbClcIilcbiAgICAgIC5zZXREZXNjKFwiU2hvdyBhIHByb21wdCB0byBjaG9vc2UgYmV0d2VlbiB0YWtpbmcgYSBuZXcgcGhvdG8gb3IgcGlja2luZyBhbiBleGlzdGluZyBvbmUgZnJvbSB0aGUgZ2FsbGVyeS4gVGhpcyBvcHRpb24gaXMgb25seSByZWxldmFudCBmb3IgQW5kcm9pZCwgd2hpY2ggc3VwcG9ydHMgYm90aCBmZWF0dXJlcy4gRG8gbm90aGluZyBvbiBpT1MvZGVza3RvcC5cIilcbiAgICAgIC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT5cbiAgICAgICAgdG9nZ2xlXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmltYWdlUGlja2VyKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmltYWdlUGlja2VyID0gdmFsdWU7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxufSIsICJpbXBvcnQgQ29tcHJlc3NvciBmcm9tIFwiY29tcHJlc3NvcmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wcmVzc0ltYWdlKGZpbGU6IEZpbGUsIHF1YWxpdHk6IG51bWJlcik6IFByb21pc2U8QmxvYj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBuZXcgQ29tcHJlc3NvcihmaWxlLCB7XG4gICAgICAgIHF1YWxpdHksXG4gICAgICAgIG1heFdpZHRoOiAxOTIwLFxuICAgICAgICBtYXhIZWlnaHQ6IDEwODAsXG4gICAgICAgIGNvbnZlcnRTaXplOiAwLFxuICAgICAgICBzdWNjZXNzOiByZXNvbHZlLFxuICAgICAgICBlcnJvcjogcmVqZWN0LFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0iLCAiaW1wb3J0IHtURm9sZGVyLCBWYXVsdH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZEZpbGVOYW1lKGZpbGU6IEZpbGUpOiBzdHJpbmcge1xuICAgIC8vIFVzZSBhbiBJU08gdGltZXN0YW1wIHRvIGtlZXAgZmlsZW5hbWVzIHNvcnRhYmxlLlxuICAgIGNvbnN0IHN0YW1wID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnJlcGxhY2UoL1s6Ll0vZywgXCItXCIpO1xuICAgIGNvbnN0IGZhbGxiYWNrRXh0ID0gZXh0ZW5zaW9uRnJvbVR5cGUoZmlsZS50eXBlKSA/PyBcImpwZ1wiO1xuICAgIGNvbnN0IGV4dCA9IGV4dGVuc2lvbkZyb21OYW1lKGZpbGUubmFtZSkgPz8gZmFsbGJhY2tFeHQ7XG4gICAgcmV0dXJuIGBwaG90by0ke3N0YW1wfS4ke2V4dH1gO1xuICB9XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRlbnNpb25Gcm9tTmFtZShuYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgY29uc3QgbWF0Y2ggPSBuYW1lLm1hdGNoKC9cXC4oW2EtekEtWjAtOV0rKSQvKTtcbiAgcmV0dXJuIG1hdGNoPy5bMV0gPz8gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dGVuc2lvbkZyb21UeXBlKG1pbWVUeXBlOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgaWYgKCFtaW1lVHlwZS5zdGFydHNXaXRoKFwiaW1hZ2UvXCIpKSByZXR1cm4gbnVsbDtcbiAgY29uc3Qgc3VidHlwZSA9IG1pbWVUeXBlLnNwbGl0KFwiL1wiKVsxXTtcbiAgaWYgKCFzdWJ0eXBlKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIHN1YnR5cGUucmVwbGFjZShcImpwZWdcIiwgXCJqcGdcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBqb2luUGF0aChwYXJlbnRQYXRoOiBzdHJpbmcgfCBudWxsLCBmaWxlTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKCFwYXJlbnRQYXRoKSByZXR1cm4gZmlsZU5hbWU7IC8vIHBhcmVudFBhdGggaXMgZW1wdHkgc3RyaW5nIFx1MjE5MiB2YXVsdCByb290XG4gIHJldHVybiBgJHtwYXJlbnRQYXRofS8ke2ZpbGVOYW1lfWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBdmFpbGFibGVQYXRoKHZhdWx0OiBWYXVsdCwgcGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gQXZvaWQgb3ZlcndyaXRpbmcgZXhpc3RpbmcgZmlsZXMgYnkgYWRkaW5nIGEgc3VmZml4LlxuICBpZiAoIXZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChwYXRoKSkgcmV0dXJuIHBhdGg7XG5cbiAgY29uc3QgcGFydHMgPSBwYXRoLnNwbGl0KFwiL1wiKTtcbiAgY29uc3QgbmFtZSA9IHBhcnRzLnBvcCgpID8/IHBhdGg7XG4gIGNvbnN0IGRpciA9IHBhcnRzLmxlbmd0aCA+IDAgPyBgJHtwYXJ0cy5qb2luKFwiL1wiKX0vYCA6IFwiXCI7XG4gIGNvbnN0IGV4dEluZGV4ID0gbmFtZS5sYXN0SW5kZXhPZihcIi5cIik7XG4gIGNvbnN0IGJhc2UgPSBleHRJbmRleCA9PT0gLTEgPyBuYW1lIDogbmFtZS5zbGljZSgwLCBleHRJbmRleCk7XG4gIGNvbnN0IGV4dCA9IGV4dEluZGV4ID09PSAtMSA/IFwiXCIgOiBuYW1lLnNsaWNlKGV4dEluZGV4KTtcblxuICBmb3IgKGxldCBpID0gMTsgaSA8IDEwMDA7IGkrKykge1xuICAgIGNvbnN0IGNhbmRpZGF0ZSA9IGAke2Rpcn0ke2Jhc2V9LSR7aX0ke2V4dH1gO1xuICAgIGlmICghdmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGNhbmRpZGF0ZSkpIHJldHVybiBjYW5kaWRhdGU7XG4gIH1cbiAgcmV0dXJuIGAke2Rpcn0ke2Jhc2V9LSR7RGF0ZS5ub3coKX0ke2V4dH1gO1xufVxuXG4vKiogSGVscGVyIHRvIGNoZWNrIGlmIGEgZm9sZGVyIGV4aXN0cyBhdCB0aGUgZ2l2ZW4gcGF0aC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb2xkZXJFeGlzdHModmF1bHQ6IFZhdWx0LCBwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgY29uc3QgZmlsZSA9IHZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChwYXRoKTtcbiAgcmV0dXJuIGZpbGUgaW5zdGFuY2VvZiBURm9sZGVyO1xufVxuIiwgImV4cG9ydCBhc3luYyBmdW5jdGlvbiBwaWNrSW1hZ2VGcm9tQ2FtZXJhKHNvdXJjZTogc3RyaW5nID0gJ2dhbGxlcnknKTogUHJvbWlzZTxGaWxlIHwgbnVsbD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgLy8gTW9iaWxlIGJyb3dzZXJzIHVzZSB0aGUgY2FwdHVyZSBhdHRyaWJ1dGUgdG8gb3BlbiB0aGUgY2FtZXJhLlxuICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICBpbnB1dC50eXBlID0gXCJmaWxlXCI7XG4gICAgICBpbnB1dC5hY2NlcHQgPSBcImltYWdlLypcIjtcbiAgICAgIGlmIChzb3VyY2UgPT09IFwiY2FtZXJhXCIpIHtcbiAgICAgICAgaW5wdXQuY2FwdHVyZSA9IFwiZW52aXJvbm1lbnRcIjtcbiAgICAgIH1cbiAgICAgIGlucHV0LmFkZENsYXNzKFwiY2FtZXJhLWhpZGRlblwiKTtcblxuICAgICAgY29uc3QgdGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlucHV0LnJlbW92ZSgpO1xuICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgfSwgNjBfMDAwKTtcblxuICAgICAgY29uc3QgY2xlYW51cCA9IChmaWxlOiBGaWxlIHwgbnVsbCkgPT4ge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICAgICAgaW5wdXQucmVtb3ZlKCk7XG4gICAgICAgIHJlc29sdmUoZmlsZSk7XG4gICAgICB9O1xuXG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGlucHV0LmZpbGVzICYmIGlucHV0LmZpbGVzLmxlbmd0aCA+IDAgPyBpbnB1dC5maWxlc1swXSA6IG51bGw7XG4gICAgICAgIGNsZWFudXAoZmlsZSBhcyBGaWxlIHwgbnVsbCk7XG4gICAgICB9KTtcblxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICBpbnB1dC5jbGljaygpO1xuICAgIH0pO1xuICB9IiwgImltcG9ydCB7IEFwcCwgTW9kYWwsIHNldEljb24gfSBmcm9tIFwib2JzaWRpYW5cIjtcblxuZXhwb3J0IGNsYXNzIFBpY2tlck1vZGFsIGV4dGVuZHMgTW9kYWwge1xuICBwcml2YXRlIHJlYWRvbmx5IHJlc29sdmU6ICh2YWx1ZTogXCJjYW1lcmFcIiB8IFwiZ2FsbGVyeVwiIHwgbnVsbCkgPT4gdm9pZDtcblxuICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgb25DaG9vc2U6IChzb3VyY2U6IFwiY2FtZXJhXCIgfCBcImdhbGxlcnlcIiB8IG51bGwpID0+IHZvaWQpIHtcbiAgICBzdXBlcihhcHApO1xuICAgIHRoaXMucmVzb2x2ZSA9IG9uQ2hvb3NlO1xuICB9XG5cbiAgb25PcGVuKCkge1xuICAgIGNvbnN0IHsgY29udGVudEVsIH0gPSB0aGlzO1xuXG4gICAgLy8gSGVhZGluZ1xuICAgIGNvbnRlbnRFbC5jcmVhdGVFbChcImgyXCIsIHsgdGV4dDogXCJJbnNlcnQgcGhvdG9cIiB9KTtcblxuICAgIC8vIENvbnRhaW5lciBmb3IgYnV0dG9uc1xuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGNvbnRlbnRFbC5jcmVhdGVEaXYoeyBjbHM6IFwicGlja2VyLW1vZGFsLWJ1dHRvbnNcIiB9KTtcblxuICAgIC8vIENhbWVyYSBidXR0b25cbiAgICBjb25zdCBjYW1lcmFCdG4gPSBidXR0b25Db250YWluZXIuY3JlYXRlRWwoXCJidXR0b25cIiwgeyBjbHM6IFwibW9kLWN0YVwiIH0pO1xuICAgIGNvbnN0IGNhbWVyYUljb24gPSBjYW1lcmFCdG4uY3JlYXRlU3BhbigpO1xuICAgIHNldEljb24oY2FtZXJhSWNvbiwgXCJjYW1lcmFcIik7XG4gICAgY2FtZXJhQnRuLmFwcGVuZFRleHQoXCJUYWtlIHBob3RvXCIpO1xuICAgIGNhbWVyYUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5yZXNvbHZlKFwiY2FtZXJhXCIpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gR2FsbGVyeSBidXR0b25cbiAgICBjb25zdCBnYWxsZXJ5QnRuID0gYnV0dG9uQ29udGFpbmVyLmNyZWF0ZUVsKFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGdhbGxlcnlJY29uID0gZ2FsbGVyeUJ0bi5jcmVhdGVTcGFuKCk7XG4gICAgc2V0SWNvbihnYWxsZXJ5SWNvbiwgXCJpbWFnZXNcIik7XG4gICAgZ2FsbGVyeUJ0bi5hcHBlbmRUZXh0KFwiQ2hvb3NlIGZyb20gZ2FsbGVyeVwiKTtcbiAgICBnYWxsZXJ5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlc29sdmUoXCJnYWxsZXJ5XCIpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gQ2xvc2UgbW9kYWwgb24gRXNjYXBlXG4gICAgdGhpcy5zY29wZS5yZWdpc3RlcihbXSwgXCJFc2NhcGVcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5yZXNvbHZlKG51bGwpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgb25DbG9zZSgpIHtcbiAgICB0aGlzLmNvbnRlbnRFbC5lbXB0eSgpO1xuICB9XG59Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBLDBEQUFBQSxTQUFBO0FBVUEsS0FBQyxTQUFVLFFBQVEsU0FBUztBQUMxQixhQUFPLFlBQVksWUFBWSxPQUFPQSxZQUFXLGNBQWNBLFFBQU8sVUFBVSxRQUFRLElBQ3hGLE9BQU8sV0FBVyxjQUFjLE9BQU8sTUFBTSxPQUFPLE9BQU8sS0FDMUQsU0FBUyxPQUFPLGVBQWUsY0FBYyxhQUFhLFVBQVUsTUFBTSxPQUFPLGFBQWEsUUFBUTtBQUFBLElBQ3pHLEdBQUcsU0FBTyxXQUFZO0FBQUU7QUFFdEIsZUFBUyxRQUFRLFFBQVEsZ0JBQWdCO0FBQ3ZDLFlBQUksT0FBTyxPQUFPLEtBQUssTUFBTTtBQUM3QixZQUFJLE9BQU8sdUJBQXVCO0FBQ2hDLGNBQUksVUFBVSxPQUFPLHNCQUFzQixNQUFNO0FBQ2pELDZCQUFtQixVQUFVLFFBQVEsT0FBTyxTQUFVLEtBQUs7QUFDekQsbUJBQU8sT0FBTyx5QkFBeUIsUUFBUSxHQUFHLEVBQUU7QUFBQSxVQUN0RCxDQUFDLElBQUksS0FBSyxLQUFLLE1BQU0sTUFBTSxPQUFPO0FBQUEsUUFDcEM7QUFDQSxlQUFPO0FBQUEsTUFDVDtBQUNBLGVBQVMsZUFBZSxRQUFRO0FBQzlCLGlCQUFTLElBQUksR0FBRyxJQUFJLFVBQVUsUUFBUSxLQUFLO0FBQ3pDLGNBQUksU0FBUyxRQUFRLFVBQVUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUM7QUFDcEQsY0FBSSxJQUFJLFFBQVEsT0FBTyxNQUFNLEdBQUcsSUFBRSxFQUFFLFFBQVEsU0FBVSxLQUFLO0FBQ3pELDRCQUFnQixRQUFRLEtBQUssT0FB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QSxJQUNULFNBQVMsT0FBTztBQUNkLFVBQUksd0JBQU8sNEJBQTRCLFVBQVUsRUFBRTtBQUNuRCxjQUFRLE1BQU0sS0FBSztBQUNuQixhQUFPO0FBQUEsSUFDVDtBQUFBLEVBQ0Y7QUFBQSxFQUVBLE1BQU0sZUFBZTtBQUNuQixTQUFLLFdBQVcsT0FBTyxPQUFPLENBQUMsR0FBRyxrQkFBa0IsTUFBTSxLQUFLLFNBQVMsQ0FBaUM7QUFBQSxFQUMzRztBQUFBLEVBRUEsTUFBTSxlQUFlO0FBQ25CLFVBQU0sS0FBSyxTQUFTLEtBQUssUUFBUTtBQUFBLEVBQ25DO0FBQ0Y7IiwKICAibmFtZXMiOiBbIm1vZHVsZSIsICJ3aW5kb3ciLCAic2VsZiIsICJpc0Jsb2IiLCAiaXNQb3NpdGl2ZU51bWJlciIsICJDb21wcmVzc29yIiwgImNhbGxiYWNrIiwgImRvbmUiLCAibmV4dCIsICJpbXBvcnRfb2JzaWRpYW4iLCAiQ29tcHJlc3NvciIsICJpbXBvcnRfb2JzaWRpYW4iLCAiaW1wb3J0X29ic2lkaWFuIiwgIm5vcm1hbGl6ZWQiXQp9Cg==
