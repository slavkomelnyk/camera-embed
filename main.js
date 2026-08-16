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
  galleryEnabled: false
};
var CameraEmbedSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  getSettingDefinitions() {
    return [
      {
        name: "Platform support",
        desc: "This plugin is primarily designed for Android. Some features may be limited on other platforms.",
        control: { type: "info" }
      },
      {
        name: "Photos folder",
        desc: "Vault-relative folder used for gallery photos and camera photos when Save near the note is disabled.",
        control: {
          type: "text",
          key: "photosFolder",
          placeholder: "attachments/camera"
        }
      },
      {
        name: "Create folder if missing",
        desc: "Automatically create the Photos folder when it does not exist.",
        control: { type: "toggle", key: "createFolderIfMissing" }
      },
      {
        name: "Save near the note",
        desc: "Save camera photos beside the current note instead of the global Photos folder.",
        control: {
          type: "toggle",
          key: "saveNearTheNote",
          disabled: () => this.plugin.settings.galleryEnabled
        }
      },
      {
        name: "Enable gallery",
        desc: "Adds the custom vault-wide gallery. When enabled, the camera button opens the gallery instead of directly taking a photo.",
        control: { type: "toggle", key: "galleryEnabled" }
      },
      {
        name: "Compress images",
        desc: "Reduce photo file sizes before saving camera captures.",
        control: { type: "toggle", key: "compressImages" }
      },
      {
        name: "Compress quality",
        desc: "Lower values produce smaller files but lower image quality.",
        control: {
          type: "slider",
          key: "compressQuality",
          min: 0,
          max: 0.9,
          step: 0.05
        }
      }
    ];
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
function pickImages(source = "gallery") {
  return new Promise((resolve) => {
    const input = document.body.createEl("input", { cls: "camera-hidden", type: "file" });
    input.accept = "image/*";
    input.multiple = source !== "camera";
    if (source === "camera") input.setAttribute("capture", "environment");
    const timeoutId = window.setTimeout(() => {
      input.remove();
      resolve([]);
    }, 6e4);
    const cleanup = (files) => {
      window.clearTimeout(timeoutId);
      input.remove();
      resolve(files);
    };
    input.addEventListener("change", () => {
      const files = input.files;
      cleanup(files ? Array.from(files) : []);
    });
    input.click();
  });
}

// src/gallery-modal.ts
var import_obsidian3 = require("obsidian");
var IMAGE_EXTENSIONS = /* @__PURE__ */ new Set(["jpg", "jpeg", "png", "gif", "webp", "bmp", "svg", "avif"]);
var GalleryModal = class extends import_obsidian3.Modal {
  constructor(app, photosFolder, createFolderIfMissing, onChoose) {
    super(app);
    this.items = [];
    this.selected = /* @__PURE__ */ new Set();
    this.scanId = 0;
    this.opened = false;
    this.photosFolder = photosFolder.trim();
    this.createFolderIfMissing = createFolderIfMissing;
    this.onChoose = onChoose;
  }
  onOpen() {
    this.opened = true;
    this.modalEl.addClass("camera-gallery-modal-container");
    const { contentEl } = this;
    contentEl.addClass("camera-gallery-modal");
    const header = contentEl.createDiv({ cls: "camera-gallery-header" });
    const title = header.createDiv({ cls: "camera-gallery-title" });
    (0, import_obsidian3.setIcon)(title, "images");
    title.createSpan({ text: "Gallery" });
    this.selectionLabel = header.createDiv({ cls: "camera-gallery-selection" });
    const toolbar = contentEl.createDiv({ cls: "camera-gallery-toolbar" });
    const take = toolbar.createEl("button", { cls: "mod-cta" });
    (0, import_obsidian3.setIcon)(take, "camera");
    take.createSpan({ text: "Take photo to gallery" });
    take.addEventListener("click", () => void this.takePhoto());
    const upload = toolbar.createEl("button", { cls: "camera-gallery-upload" });
    (0, import_obsidian3.setIcon)(upload, "upload");
    upload.createSpan({ text: "Upload to gallery" });
    upload.addEventListener("click", () => void this.uploadToGallery());
    this.status = contentEl.createDiv({ cls: "camera-gallery-status" });
    this.grid = contentEl.createDiv({ cls: "camera-gallery-grid" });
    const footer = contentEl.createDiv({ cls: "camera-gallery-footer" });
    this.deleteButton = footer.createEl("button", { text: "Delete", cls: "camera-gallery-delete" });
    this.deleteButton.addEventListener("click", () => void this.deleteSelected());
    this.useButton = footer.createEl("button", { text: "Use It", cls: "mod-cta" });
    this.useButton.addEventListener("click", () => this.useSelected());
    this.setActionButtonsVisible(false);
    void this.scanVault();
  }
  async scanVault() {
    const currentScan = ++this.scanId;
    this.status.setText("Scanning vault\u2026");
    const files = this.app.vault.getFiles().filter((file) => IMAGE_EXTENSIONS.has(file.extension.toLowerCase())).sort((a, b) => b.stat.mtime - a.stat.mtime);
    const paths = new Set(files.map((file) => file.path));
    this.selected.forEach((path) => {
      if (!paths.has(path)) this.selected.delete(path);
    });
    this.grid.empty();
    this.items = [];
    this.updateSelection();
    for (let index = 0; index < files.length; index++) {
      if (currentScan !== this.scanId || !this.opened) return;
      const file = files[index];
      if (!file) continue;
      this.items.push(file);
      this.renderItem(file);
      if (index > 0 && index % 100 === 0) {
        this.status.setText(`Scanning\u2026 ${index.toLocaleString()} images`);
        await new Promise((resolve) => window.setTimeout(resolve, 0));
      }
    }
    if (currentScan === this.scanId && this.opened) this.status.setText(`${this.items.length.toLocaleString()} photos`);
  }
  renderItem(file) {
    const item = this.grid.createDiv({ cls: "camera-gallery-item" });
    item.dataset.path = file.path;
    const image = item.createEl("img", { cls: "camera-gallery-thumbnail" });
    image.src = this.app.vault.getResourcePath(file);
    image.alt = file.path;
    image.loading = "lazy";
    const badge = item.createDiv({ cls: "camera-gallery-badge" });
    item.createDiv({ cls: "camera-gallery-name", text: file.name });
    this.updateItemSelection(item, badge, file.path);
    item.addEventListener("click", () => {
      if (this.selected.has(file.path)) this.selected.delete(file.path);
      else this.selected.add(file.path);
      this.updateItemSelection(item, badge, file.path);
      this.updateSelection();
    });
  }
  addSavedFile(file) {
    if (!IMAGE_EXTENSIONS.has(file.extension.toLowerCase()) || this.items.some((item) => item.path === file.path)) return;
    this.items.unshift(file);
    this.renderItemAtTop(file);
    this.status.setText(`${this.items.length.toLocaleString()} photos`);
  }
  renderItemAtTop(file) {
    const item = this.grid.createDiv({ cls: "camera-gallery-item" });
    item.dataset.path = file.path;
    const image = item.createEl("img", { cls: "camera-gallery-thumbnail" });
    image.src = this.app.vault.getResourcePath(file);
    image.alt = file.path;
    image.loading = "eager";
    const badge = item.createDiv({ cls: "camera-gallery-badge" });
    item.createDiv({ cls: "camera-gallery-name", text: file.name });
    this.updateItemSelection(item, badge, file.path);
    item.addEventListener("click", () => {
      if (this.selected.has(file.path)) this.selected.delete(file.path);
      else this.selected.add(file.path);
      this.updateItemSelection(item, badge, file.path);
      this.updateSelection();
    });
    this.grid.prepend(item);
  }
  updateItemSelection(item, badge, path) {
    const selected = this.selected.has(path);
    item.toggleClass("is-selected", selected);
    badge.textContent = selected ? String(this.getSelectionNumber(path)) : "";
  }
  getSelectionNumber(path) {
    let number = 0;
    for (const selectedPath of this.selected) {
      number++;
      if (selectedPath === path) return number;
    }
    return 0;
  }
  setActionButtonsVisible(visible) {
    this.useButton.toggleVisibility(visible);
    this.deleteButton.toggleVisibility(visible);
  }
  updateSelection() {
    const count = this.selected.size;
    this.selectionLabel.setText(count === 0 ? "Select photos" : `${count} selected`);
    this.setActionButtonsVisible(count > 0);
  }
  useSelected() {
    const files = [];
    for (const path of this.selected) {
      const file = this.app.vault.getAbstractFileByPath(path);
      if (file instanceof import_obsidian3.TFile) files.push(file);
    }
    if (!files.length) return;
    this.onChoose(files);
    this.close();
  }
  async deleteSelected() {
    const paths = Array.from(this.selected);
    if (!paths.length) return;
    const confirmed = await this.confirmDelete(paths.length);
    if (!confirmed) return;
    let deleted = 0;
    for (const path of paths) {
      const file = this.app.vault.getAbstractFileByPath(path);
      if (!(file instanceof import_obsidian3.TFile)) continue;
      try {
        await this.app.fileManager.trashFile(file);
        deleted++;
      } catch (error) {
        console.error("Camera Embed: failed to delete gallery photo", path, error);
      }
    }
    this.selected.clear();
    if (deleted > 0) new import_obsidian3.Notice(`Deleted ${deleted} photo${deleted === 1 ? "" : "s"}.`);
    await this.scanVault();
  }
  confirmDelete(count) {
    return new Promise((resolve) => {
      const modal = new import_obsidian3.Modal(this.app);
      let settled = false;
      const finish = (value) => {
        if (settled) return;
        settled = true;
        resolve(value);
        modal.close();
      };
      modal.titleEl.setText("Delete photos?");
      modal.contentEl.createEl("p", { text: `Move ${count} selected photo${count === 1 ? "" : "s"} to the Obsidian trash?` });
      const buttons = modal.contentEl.createDiv({ cls: "modal-button-container" });
      buttons.createEl("button", { text: "Cancel" }).addEventListener("click", () => finish(false));
      buttons.createEl("button", { text: "Delete", cls: "mod-warning" }).addEventListener("click", () => finish(true));
      modal.open();
    });
  }
  async takePhoto() {
    const input = document.body.createEl("input", { cls: "camera-hidden", type: "file" });
    input.accept = "image/*";
    input.setAttribute("capture", "environment");
    input.addEventListener("change", () => {
      void this.handlePickedFiles(input, true);
    });
    input.click();
  }
  async uploadToGallery() {
    if (!this.photosFolder) {
      new import_obsidian3.Notice("Set a Photos folder in Camera Embed settings before uploading to the gallery.");
      return;
    }
    const input = document.body.createEl("input", { cls: "camera-hidden", type: "file" });
    input.accept = "image/*";
    input.multiple = true;
    input.addEventListener("change", () => {
      void this.handlePickedFiles(input, false);
    });
    input.click();
  }
  async handlePickedFiles(input, single) {
    const files = input.files ? Array.from(input.files).slice(0, single ? 1 : void 0) : [];
    input.remove();
    if (!files.length || !this.opened) return;
    const savedFiles = [];
    for (const file of files) {
      const saved = await this.saveToGallery(file);
      if (saved) savedFiles.push(saved);
    }
    if (!this.opened) return;
    for (const saved of savedFiles) this.addSavedFile(saved);
    if (savedFiles.length) void this.refreshInBackground();
  }
  async refreshInBackground() {
    await new Promise((resolve) => window.setTimeout(resolve, 250));
    if (this.opened) await this.scanVault();
  }
  async saveToGallery(file) {
    if (!this.photosFolder) {
      new import_obsidian3.Notice("Set a Photos folder in Camera Embed settings first.");
      return null;
    }
    try {
      if (!this.app.vault.getAbstractFileByPath(this.photosFolder)) {
        if (!this.createFolderIfMissing) {
          new import_obsidian3.Notice(`Photos folder not found: ${this.photosFolder}`);
          return null;
        }
        await this.app.vault.createFolder(this.photosFolder);
      }
      const path = this.getUniquePath(`${this.photosFolder}/${file.name}`);
      const created = await this.app.vault.createBinary(path, await file.arrayBuffer());
      new import_obsidian3.Notice(`Added ${file.name} to gallery.`);
      return created;
    } catch (error) {
      console.error("Camera Embed: gallery save failed", error);
      new import_obsidian3.Notice(`Could not save ${file.name} to the gallery.`);
      return null;
    }
  }
  getUniquePath(path) {
    if (!this.app.vault.getAbstractFileByPath(path)) return path;
    const dot = path.lastIndexOf(".");
    const base = dot > 0 ? path.slice(0, dot) : path;
    const extension = dot > 0 ? path.slice(dot) : "";
    for (let counter = 2; counter < 1e4; counter++) {
      const candidate = `${base} ${counter}${extension}`;
      if (!this.app.vault.getAbstractFileByPath(candidate)) return candidate;
    }
    return `${base} ${Date.now()}${extension}`;
  }
  onClose() {
    this.opened = false;
    this.scanId++;
    this.contentEl.empty();
  }
};

// src/main.ts
var CameraEmbedPlugin = class extends import_obsidian4.Plugin {
  constructor() {
    super(...arguments);
    this.settings = DEFAULT_SETTINGS;
  }
  async onload() {
    await this.loadSettings();
    this.normalizeGallerySettings();
    await this.saveSettings();
    this.addSettingTab(new CameraEmbedSettingTab(this.app, this));
    this.addRibbonIcon("camera", "Capture photo", () => void this.capturePhoto());
    this.addCommand({ id: "capture-photo-embed", name: "Capture photo and embed", icon: "camera", callback: () => void this.capturePhoto() });
    this.addCommand({ id: "open-gallery", name: "Open camera gallery", icon: "images", callback: () => this.openGallery() });
  }
  normalizeGallerySettings() {
    if (this.settings.galleryEnabled) this.settings.saveNearTheNote = false;
  }
  capturePhoto() {
    if (this.settings.galleryEnabled) this.openGallery();
    else void this.captureDirectly();
  }
  openGallery() {
    const view = this.app.workspace.getActiveViewOfType(import_obsidian4.MarkdownView);
    if (!(view == null ? void 0 : view.file)) {
      new import_obsidian4.Notice("Open a Markdown note before using the camera gallery.");
      return;
    }
    const folder = this.settings.photosFolder.trim();
    if (!folder) {
      new import_obsidian4.Notice("Set a Photos folder in Camera Embed settings before using the gallery.");
      return;
    }
    new GalleryModal(this.app, folder, this.settings.createFolderIfMissing, (files) => {
      if (files.length > 0) void this.embedVaultFiles(files, view);
    }).open();
  }
  async captureDirectly() {
    const view = this.app.workspace.getActiveViewOfType(import_obsidian4.MarkdownView);
    if (!(view == null ? void 0 : view.file)) {
      new import_obsidian4.Notice("Please open a Markdown note to insert the photo.");
      return;
    }
    const files = await pickImages("camera");
    if (files.length > 0) await this.saveAndEmbed(files, view);
  }
  async embedVaultFiles(files, view) {
    const activeFile = view.file;
    if (!activeFile) return;
    const links = files.map((file) => `!${this.app.fileManager.generateMarkdownLink(file, activeFile.path)}`);
    view.editor.replaceSelection(links.join("\n"));
  }
  async saveAndEmbed(files, view) {
    var _a;
    const activeFile = view.file;
    if (!activeFile) return;
    const targetFolderPath = await this.ensureTargetFolder((_a = activeFile.parent) == null ? void 0 : _a.path);
    if (targetFolderPath === null) return;
    const links = [];
    for (const file of files) {
      let finalFile = file;
      if (this.settings.compressImages) finalFile = await compressImage(file, this.settings.compressQuality);
      const targetPath = getAvailablePath(this.app.vault, joinPath(targetFolderPath, buildFileName(file)));
      const created = await this.app.vault.createBinary(targetPath, await finalFile.arrayBuffer());
      links.push(`!${this.app.fileManager.generateMarkdownLink(created, activeFile.path)}`);
    }
    view.editor.replaceSelection(links.join("\n"));
  }
  async ensureTargetFolder(noteFolderPath) {
    const raw = this.settings.photosFolder.trim();
    const target = this.settings.saveNearTheNote ? raw ? noteFolderPath ? `${noteFolderPath}/${raw}` : raw : noteFolderPath != null ? noteFolderPath : "" : raw;
    const normalized = (0, import_obsidian4.normalizePath)(target);
    if (normalized === "") return "";
    if (folderExists(this.app.vault, normalized)) return normalized;
    if (!this.settings.createFolderIfMissing) {
      new import_obsidian4.Notice(`Folder not found: ${normalized}`);
      return null;
    }
    try {
      await this.app.vault.createFolder(normalized);
      return normalized;
    } catch (error) {
      console.error("Camera Embed: failed to create folder", error);
      new import_obsidian4.Notice(`Failed to create folder: ${normalized}`);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzL2NvbXByZXNzb3Jqcy9kaXN0L2NvbXByZXNzb3IuanMiLCAic3JjL21haW4udHMiLCAic3JjL3NldHRpbmdzLnRzIiwgInNyYy9jb21wcmVzc29yLnRzIiwgInNyYy9maWxlLXV0aWxzLnRzIiwgInNyYy9pbnB1dC11dGlscy50cyIsICJzcmMvZ2FsbGVyeS1tb2RhbC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyohXG4gKiBDb21wcmVzc29yLmpzIHYxLjIuMVxuICogaHR0cHM6Ly9mZW5neXVhbmNoZW4uZ2l0aHViLmlvL2NvbXByZXNzb3Jqc1xuICpcbiAqIENvcHlyaWdodCAyMDE4LXByZXNlbnQgQ2hlbiBGZW5neXVhblxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKlxuICogRGF0ZTogMjAyMy0wMi0yOFQxNDowOTo0MS43MzJaXG4gKi9cblxuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAoZ2xvYmFsID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsVGhpcyA6IGdsb2JhbCB8fCBzZWxmLCBnbG9iYWwuQ29tcHJlc3NvciA9IGZhY3RvcnkoKSk7XG59KSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbiAgZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcbiAgICAgIGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgIH0pKSwga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICAgIH1cbiAgICByZXR1cm4ga2V5cztcbiAgfVxuICBmdW5jdGlvbiBfb2JqZWN0U3ByZWFkMih0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307XG4gICAgICBpICUgMiA/IG93bktleXMoT2JqZWN0KHNvdXJjZSksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKSA6IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG4gIGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgIH0pO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfVxuICBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gICAga2V5ID0gX3RvUHJvcGVydHlLZXkoa2V5KTtcbiAgICBpZiAoa2V5IGluIG9iaikge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH1cbiAgZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gICAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduID8gT2JqZWN0LmFzc2lnbi5iaW5kKCkgOiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG4gICAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cbiAgZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7XG4gICAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0O1xuICAgIHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcbiAgICBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTtcbiAgICAgIGlmICh0eXBlb2YgcmVzICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzO1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpO1xuICAgIH1cbiAgICByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTtcbiAgfVxuICBmdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHtcbiAgICB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7XG4gICAgcmV0dXJuIHR5cGVvZiBrZXkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTtcbiAgfVxuXG4gIHZhciBjYW52YXNUb0Jsb2IgPSB7ZXhwb3J0czoge319O1xuXG4gIC8qXG4gICAqIEphdmFTY3JpcHQgQ2FudmFzIHRvIEJsb2JcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2JsdWVpbXAvSmF2YVNjcmlwdC1DYW52YXMtdG8tQmxvYlxuICAgKlxuICAgKiBDb3B5cmlnaHQgMjAxMiwgU2ViYXN0aWFuIFRzY2hhblxuICAgKiBodHRwczovL2JsdWVpbXAubmV0XG4gICAqXG4gICAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZTpcbiAgICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAgICpcbiAgICogQmFzZWQgb24gc3RhY2tvdmVyZmxvdyB1c2VyIFN0b2l2ZSdzIGNvZGUgc25pcHBldDpcbiAgICogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3EvNDk5ODkwOFxuICAgKi9cbiAgKGZ1bmN0aW9uIChtb2R1bGUpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gICAgKGZ1bmN0aW9uICh3aW5kb3cpIHtcblxuICAgICAgdmFyIENhbnZhc1Byb3RvdHlwZSA9IHdpbmRvdy5IVE1MQ2FudmFzRWxlbWVudCAmJiB3aW5kb3cuSFRNTENhbnZhc0VsZW1lbnQucHJvdG90eXBlO1xuICAgICAgdmFyIGhhc0Jsb2JDb25zdHJ1Y3RvciA9IHdpbmRvdy5CbG9iICYmIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gQm9vbGVhbihuZXcgQmxvYigpKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSgpO1xuICAgICAgdmFyIGhhc0FycmF5QnVmZmVyVmlld1N1cHBvcnQgPSBoYXNCbG9iQ29uc3RydWN0b3IgJiYgd2luZG93LlVpbnQ4QXJyYXkgJiYgZnVuY3Rpb24gKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBuZXcgQmxvYihbbmV3IFVpbnQ4QXJyYXkoMTAwKV0pLnNpemUgPT09IDEwMDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSgpO1xuICAgICAgdmFyIEJsb2JCdWlsZGVyID0gd2luZG93LkJsb2JCdWlsZGVyIHx8IHdpbmRvdy5XZWJLaXRCbG9iQnVpbGRlciB8fCB3aW5kb3cuTW96QmxvYkJ1aWxkZXIgfHwgd2luZG93Lk1TQmxvYkJ1aWxkZXI7XG4gICAgICB2YXIgZGF0YVVSSVBhdHRlcm4gPSAvXmRhdGE6KCguKj8pKDtjaGFyc2V0PS4qPyk/KSg7YmFzZTY0KT8sLztcbiAgICAgIHZhciBkYXRhVVJMdG9CbG9iID0gKGhhc0Jsb2JDb25zdHJ1Y3RvciB8fCBCbG9iQnVpbGRlcikgJiYgd2luZG93LmF0b2IgJiYgd2luZG93LkFycmF5QnVmZmVyICYmIHdpbmRvdy5VaW50OEFycmF5ICYmIGZ1bmN0aW9uIChkYXRhVVJJKSB7XG4gICAgICAgIHZhciBtYXRjaGVzLCBtZWRpYVR5cGUsIGlzQmFzZTY0LCBkYXRhU3RyaW5nLCBieXRlU3RyaW5nLCBhcnJheUJ1ZmZlciwgaW50QXJyYXksIGksIGJiO1xuICAgICAgICAvLyBQYXJzZSB0aGUgZGF0YVVSSSBjb21wb25lbnRzIGFzIHBlciBSRkMgMjM5N1xuICAgICAgICBtYXRjaGVzID0gZGF0YVVSSS5tYXRjaChkYXRhVVJJUGF0dGVybik7XG4gICAgICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBkYXRhIFVSSScpO1xuICAgICAgICB9XG4gICAgICAgIC8vIERlZmF1bHQgdG8gdGV4dC9wbGFpbjtjaGFyc2V0PVVTLUFTQ0lJXG4gICAgICAgIG1lZGlhVHlwZSA9IG1hdGNoZXNbMl0gPyBtYXRjaGVzWzFdIDogJ3RleHQvcGxhaW4nICsgKG1hdGNoZXNbM10gfHwgJztjaGFyc2V0PVVTLUFTQ0lJJyk7XG4gICAgICAgIGlzQmFzZTY0ID0gISFtYXRjaGVzWzRdO1xuICAgICAgICBkYXRhU3RyaW5nID0gZGF0YVVSSS5zbGljZShtYXRjaGVzWzBdLmxlbmd0aCk7XG4gICAgICAgIGlmIChpc0Jhc2U2NCkge1xuICAgICAgICAgIC8vIENvbnZlcnQgYmFzZTY0IHRvIHJhdyBiaW5hcnkgZGF0YSBoZWxkIGluIGEgc3RyaW5nOlxuICAgICAgICAgIGJ5dGVTdHJpbmcgPSBhdG9iKGRhdGFTdHJpbmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIENvbnZlcnQgYmFzZTY0L1VSTEVuY29kZWQgZGF0YSBjb21wb25lbnQgdG8gcmF3IGJpbmFyeTpcbiAgICAgICAgICBieXRlU3RyaW5nID0gZGVjb2RlVVJJQ29tcG9uZW50KGRhdGFTdHJpbmcpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFdyaXRlIHRoZSBieXRlcyBvZiB0aGUgc3RyaW5nIHRvIGFuIEFycmF5QnVmZmVyOlxuICAgICAgICBhcnJheUJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihieXRlU3RyaW5nLmxlbmd0aCk7XG4gICAgICAgIGludEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYnl0ZVN0cmluZy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGludEFycmF5W2ldID0gYnl0ZVN0cmluZy5jaGFyQ29kZUF0KGkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFdyaXRlIHRoZSBBcnJheUJ1ZmZlciAob3IgQXJyYXlCdWZmZXJWaWV3KSB0byBhIGJsb2I6XG4gICAgICAgIGlmIChoYXNCbG9iQ29uc3RydWN0b3IpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IEJsb2IoW2hhc0FycmF5QnVmZmVyVmlld1N1cHBvcnQgPyBpbnRBcnJheSA6IGFycmF5QnVmZmVyXSwge1xuICAgICAgICAgICAgdHlwZTogbWVkaWFUeXBlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgYmIgPSBuZXcgQmxvYkJ1aWxkZXIoKTtcbiAgICAgICAgYmIuYXBwZW5kKGFycmF5QnVmZmVyKTtcbiAgICAgICAgcmV0dXJuIGJiLmdldEJsb2IobWVkaWFUeXBlKTtcbiAgICAgIH07XG4gICAgICBpZiAod2luZG93LkhUTUxDYW52YXNFbGVtZW50ICYmICFDYW52YXNQcm90b3R5cGUudG9CbG9iKSB7XG4gICAgICAgIGlmIChDYW52YXNQcm90b3R5cGUubW96R2V0QXNGaWxlKSB7XG4gICAgICAgICAgQ2FudmFzUHJvdG90eXBlLnRvQmxvYiA9IGZ1bmN0aW9uIChjYWxsYmFjaywgdHlwZSwgcXVhbGl0eSkge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGlmIChxdWFsaXR5ICYmIENhbnZhc1Byb3RvdHlwZS50b0RhdGFVUkwgJiYgZGF0YVVSTHRvQmxvYikge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGFVUkx0b0Jsb2Ioc2VsZi50b0RhdGFVUkwodHlwZSwgcXVhbGl0eSkpKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhzZWxmLm1vekdldEFzRmlsZSgnYmxvYicsIHR5cGUpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChDYW52YXNQcm90b3R5cGUudG9EYXRhVVJMICYmIGRhdGFVUkx0b0Jsb2IpIHtcbiAgICAgICAgICBpZiAoQ2FudmFzUHJvdG90eXBlLm1zVG9CbG9iKSB7XG4gICAgICAgICAgICBDYW52YXNQcm90b3R5cGUudG9CbG9iID0gZnVuY3Rpb24gKGNhbGxiYWNrLCB0eXBlLCBxdWFsaXR5KSB7XG4gICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCh0eXBlICYmIHR5cGUgIT09ICdpbWFnZS9wbmcnIHx8IHF1YWxpdHkpICYmIENhbnZhc1Byb3RvdHlwZS50b0RhdGFVUkwgJiYgZGF0YVVSTHRvQmxvYikge1xuICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YVVSTHRvQmxvYihzZWxmLnRvRGF0YVVSTCh0eXBlLCBxdWFsaXR5KSkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBjYWxsYmFjayhzZWxmLm1zVG9CbG9iKHR5cGUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgQ2FudmFzUHJvdG90eXBlLnRvQmxvYiA9IGZ1bmN0aW9uIChjYWxsYmFjaywgdHlwZSwgcXVhbGl0eSkge1xuICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGFVUkx0b0Jsb2Ioc2VsZi50b0RhdGFVUkwodHlwZSwgcXVhbGl0eSkpKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZGF0YVVSTHRvQmxvYjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5kYXRhVVJMdG9CbG9iID0gZGF0YVVSTHRvQmxvYjtcbiAgICAgIH1cbiAgICB9KSh3aW5kb3cpO1xuICB9KShjYW52YXNUb0Jsb2IpO1xuICB2YXIgdG9CbG9iID0gY2FudmFzVG9CbG9iLmV4cG9ydHM7XG5cbiAgdmFyIGlzQmxvYiA9IGZ1bmN0aW9uIGlzQmxvYih2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgQmxvYiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgQmxvYiB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBCbG9iXSc7XG4gIH07XG5cbiAgdmFyIERFRkFVTFRTID0ge1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyBpZiBvdXRwdXQgdGhlIG9yaWdpbmFsIGltYWdlIGluc3RlYWQgb2YgdGhlIGNvbXByZXNzZWQgb25lXG4gICAgICogd2hlbiB0aGUgc2l6ZSBvZiB0aGUgY29tcHJlc3NlZCBpbWFnZSBpcyBncmVhdGVyIHRoYW4gdGhlIG9yaWdpbmFsIG9uZSdzXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgc3RyaWN0OiB0cnVlLFxuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyBpZiByZWFkIHRoZSBpbWFnZSdzIEV4aWYgT3JpZW50YXRpb24gaW5mb3JtYXRpb24sXG4gICAgICogYW5kIHRoZW4gcm90YXRlIG9yIGZsaXAgdGhlIGltYWdlIGF1dG9tYXRpY2FsbHkuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgY2hlY2tPcmllbnRhdGlvbjogdHJ1ZSxcbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgaWYgcmV0YWluIHRoZSBpbWFnZSdzIEV4aWYgaW5mb3JtYXRpb24gYWZ0ZXIgY29tcHJlc3NlZC5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAqL1xuICAgIHJldGFpbkV4aWY6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIFRoZSBtYXggd2lkdGggb2YgdGhlIG91dHB1dCBpbWFnZS5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIG1heFdpZHRoOiBJbmZpbml0eSxcbiAgICAvKipcbiAgICAgKiBUaGUgbWF4IGhlaWdodCBvZiB0aGUgb3V0cHV0IGltYWdlLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgbWF4SGVpZ2h0OiBJbmZpbml0eSxcbiAgICAvKipcbiAgICAgKiBUaGUgbWluIHdpZHRoIG9mIHRoZSBvdXRwdXQgaW1hZ2UuXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBtaW5XaWR0aDogMCxcbiAgICAvKipcbiAgICAgKiBUaGUgbWluIGhlaWdodCBvZiB0aGUgb3V0cHV0IGltYWdlLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgbWluSGVpZ2h0OiAwLFxuICAgIC8qKlxuICAgICAqIFRoZSB3aWR0aCBvZiB0aGUgb3V0cHV0IGltYWdlLlxuICAgICAqIElmIG5vdCBzcGVjaWZpZWQsIHRoZSBuYXR1cmFsIHdpZHRoIG9mIHRoZSBzb3VyY2UgaW1hZ2Ugd2lsbCBiZSB1c2VkLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgd2lkdGg6IHVuZGVmaW5lZCxcbiAgICAvKipcbiAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBvdXRwdXQgaW1hZ2UuXG4gICAgICogSWYgbm90IHNwZWNpZmllZCwgdGhlIG5hdHVyYWwgaGVpZ2h0IG9mIHRoZSBzb3VyY2UgaW1hZ2Ugd2lsbCBiZSB1c2VkLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgaGVpZ2h0OiB1bmRlZmluZWQsXG4gICAgLyoqXG4gICAgICogU2V0cyBob3cgdGhlIHNpemUgb2YgdGhlIGltYWdlIHNob3VsZCBiZSByZXNpemVkIHRvIHRoZSBjb250YWluZXJcbiAgICAgKiBzcGVjaWZpZWQgYnkgdGhlIGB3aWR0aGAgYW5kIGBoZWlnaHRgIG9wdGlvbnMuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICByZXNpemU6ICdub25lJyxcbiAgICAvKipcbiAgICAgKiBUaGUgcXVhbGl0eSBvZiB0aGUgb3V0cHV0IGltYWdlLlxuICAgICAqIEl0IG11c3QgYmUgYSBudW1iZXIgYmV0d2VlbiBgMGAgYW5kIGAxYCxcbiAgICAgKiBhbmQgb25seSBhdmFpbGFibGUgZm9yIGBpbWFnZS9qcGVnYCBhbmQgYGltYWdlL3dlYnBgIGltYWdlcy5cbiAgICAgKiBDaGVjayBvdXQge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IVE1MQ2FudmFzRWxlbWVudC90b0Jsb2IgY2FudmFzLnRvQmxvYn0uXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBxdWFsaXR5OiAwLjgsXG4gICAgLyoqXG4gICAgICogVGhlIG1pbWUgdHlwZSBvZiB0aGUgb3V0cHV0IGltYWdlLlxuICAgICAqIEJ5IGRlZmF1bHQsIHRoZSBvcmlnaW5hbCBtaW1lIHR5cGUgb2YgdGhlIHNvdXJjZSBpbWFnZSBmaWxlIHdpbGwgYmUgdXNlZC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIG1pbWVUeXBlOiAnYXV0bycsXG4gICAgLyoqXG4gICAgICogRmlsZXMgd2hvc2UgZmlsZSB0eXBlIGlzIGluY2x1ZGVkIGluIHRoaXMgbGlzdCxcbiAgICAgKiBhbmQgd2hvc2UgZmlsZSBzaXplIGV4Y2VlZHMgdGhlIGBjb252ZXJ0U2l6ZWAgdmFsdWUgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gSlBFR3MuXG4gICAgICogQHR5cGUge3N0cmluZ1x1RkY1Q0FycmF5fVxuICAgICAqL1xuICAgIGNvbnZlcnRUeXBlczogWydpbWFnZS9wbmcnXSxcbiAgICAvKipcbiAgICAgKiBQTkcgZmlsZXMgb3ZlciB0aGlzIHNpemUgKDUgTUIgYnkgZGVmYXVsdCkgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gSlBFR3MuXG4gICAgICogVG8gZGlzYWJsZSB0aGlzLCBqdXN0IHNldCB0aGUgdmFsdWUgdG8gYEluZmluaXR5YC5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIGNvbnZlcnRTaXplOiA1MDAwMDAwLFxuICAgIC8qKlxuICAgICAqIFRoZSBob29rIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgYmVmb3JlIGRyYXcgdGhlIGltYWdlIGludG8gdGhlIGNhbnZhcyBmb3IgY29tcHJlc3Npb24uXG4gICAgICogQHR5cGUge0Z1bmN0aW9ufVxuICAgICAqIEBwYXJhbSB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSBjb250ZXh0IC0gVGhlIDJkIHJlbmRlcmluZyBjb250ZXh0IG9mIHRoZSBjYW52YXMuXG4gICAgICogQHBhcmFtIHtIVE1MQ2FudmFzRWxlbWVudH0gY2FudmFzIC0gVGhlIGNhbnZhcyBmb3IgY29tcHJlc3Npb24uXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBmdW5jdGlvbiAoY29udGV4dCwgY2FudmFzKSB7XG4gICAgICogICBjb250ZXh0LmZpbGxTdHlsZSA9ICcjZmZmJztcbiAgICAgKiB9XG4gICAgICovXG4gICAgYmVmb3JlRHJhdzogbnVsbCxcbiAgICAvKipcbiAgICAgKiBUaGUgaG9vayBmdW5jdGlvbiB0byBleGVjdXRlIGFmdGVyIGRyZXcgdGhlIGltYWdlIGludG8gdGhlIGNhbnZhcyBmb3IgY29tcHJlc3Npb24uXG4gICAgICogQHR5cGUge0Z1bmN0aW9ufVxuICAgICAqIEBwYXJhbSB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSBjb250ZXh0IC0gVGhlIDJkIHJlbmRlcmluZyBjb250ZXh0IG9mIHRoZSBjYW52YXMuXG4gICAgICogQHBhcmFtIHtIVE1MQ2FudmFzRWxlbWVudH0gY2FudmFzIC0gVGhlIGNhbnZhcyBmb3IgY29tcHJlc3Npb24uXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBmdW5jdGlvbiAoY29udGV4dCwgY2FudmFzKSB7XG4gICAgICogICBjb250ZXh0LmZpbHRlciA9ICdncmF5c2NhbGUoMTAwJSknO1xuICAgICAqIH1cbiAgICAgKi9cbiAgICBkcmV3OiBudWxsLFxuICAgIC8qKlxuICAgICAqIFRoZSBob29rIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgd2hlbiBzdWNjZXNzIHRvIGNvbXByZXNzIHRoZSBpbWFnZS5cbiAgICAgKiBAdHlwZSB7RnVuY3Rpb259XG4gICAgICogQHBhcmFtIHtGaWxlfSBmaWxlIC0gVGhlIGNvbXByZXNzZWQgaW1hZ2UgRmlsZSBvYmplY3QuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBmdW5jdGlvbiAoZmlsZSkge1xuICAgICAqICAgY29uc29sZS5sb2coZmlsZSk7XG4gICAgICogfVxuICAgICAqL1xuICAgIHN1Y2Nlc3M6IG51bGwsXG4gICAgLyoqXG4gICAgICogVGhlIGhvb2sgZnVuY3Rpb24gdG8gZXhlY3V0ZSB3aGVuIGZhaWwgdG8gY29tcHJlc3MgdGhlIGltYWdlLlxuICAgICAqIEB0eXBlIHtGdW5jdGlvbn1cbiAgICAgKiBAcGFyYW0ge0Vycm9yfSBlcnIgLSBBbiBFcnJvciBvYmplY3QuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICogICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XG4gICAgICogfVxuICAgICAqL1xuICAgIGVycm9yOiBudWxsXG4gIH07XG5cbiAgdmFyIElTX0JST1dTRVIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50ICE9PSAndW5kZWZpbmVkJztcbiAgdmFyIFdJTkRPVyA9IElTX0JST1dTRVIgPyB3aW5kb3cgOiB7fTtcblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgcG9zaXRpdmUgbnVtYmVyLlxuICAgKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNoZWNrLlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgcG9zaXRpdmUgbnVtYmVyLCBlbHNlIGBmYWxzZWAuXG4gICAqL1xuICB2YXIgaXNQb3NpdGl2ZU51bWJlciA9IGZ1bmN0aW9uIGlzUG9zaXRpdmVOdW1iZXIodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPiAwICYmIHZhbHVlIDwgSW5maW5pdHk7XG4gIH07XG4gIHZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblxuICAvKipcbiAgICogQ29udmVydCBhcnJheS1saWtlIG9yIGl0ZXJhYmxlIG9iamVjdCB0byBhbiBhcnJheS5cbiAgICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICAgKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYSBuZXcgYXJyYXkuXG4gICAqL1xuICBmdW5jdGlvbiB0b0FycmF5KHZhbHVlKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20gPyBBcnJheS5mcm9tKHZhbHVlKSA6IHNsaWNlLmNhbGwodmFsdWUpO1xuICB9XG4gIHZhciBSRUdFWFBfSU1BR0VfVFlQRSA9IC9eaW1hZ2VcXC8uKyQvO1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBtaW1lIHR5cGUgb2YgaW1hZ2UuXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZ2l2ZW4gaXMgYSBtaW1lIHR5cGUgb2YgaW1hZ2UsIGVsc2UgYGZhbHNlYC5cbiAgICovXG4gIGZ1bmN0aW9uIGlzSW1hZ2VUeXBlKHZhbHVlKSB7XG4gICAgcmV0dXJuIFJFR0VYUF9JTUFHRV9UWVBFLnRlc3QodmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgaW1hZ2UgdHlwZSB0byBleHRlbnNpb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFRoZSBpbWFnZSB0eXBlIHRvIGNvbnZlcnQuXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIHRoZSBpbWFnZSBleHRlbnNpb24uXG4gICAqL1xuICBmdW5jdGlvbiBpbWFnZVR5cGVUb0V4dGVuc2lvbih2YWx1ZSkge1xuICAgIHZhciBleHRlbnNpb24gPSBpc0ltYWdlVHlwZSh2YWx1ZSkgPyB2YWx1ZS5zdWJzdHIoNikgOiAnJztcbiAgICBpZiAoZXh0ZW5zaW9uID09PSAnanBlZycpIHtcbiAgICAgIGV4dGVuc2lvbiA9ICdqcGcnO1xuICAgIH1cbiAgICByZXR1cm4gXCIuXCIuY29uY2F0KGV4dGVuc2lvbik7XG4gIH1cbiAgdmFyIGZyb21DaGFyQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGU7XG5cbiAgLyoqXG4gICAqIEdldCBzdHJpbmcgZnJvbSBjaGFyIGNvZGUgaW4gZGF0YSB2aWV3LlxuICAgKiBAcGFyYW0ge0RhdGFWaWV3fSBkYXRhVmlldyAtIFRoZSBkYXRhIHZpZXcgZm9yIHJlYWQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCAtIFRoZSBzdGFydCBpbmRleC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCAtIFRoZSByZWFkIGxlbmd0aC5cbiAgICogQHJldHVybnMge3N0cmluZ30gVGhlIHJlYWQgcmVzdWx0LlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0U3RyaW5nRnJvbUNoYXJDb2RlKGRhdGFWaWV3LCBzdGFydCwgbGVuZ3RoKSB7XG4gICAgdmFyIHN0ciA9ICcnO1xuICAgIHZhciBpO1xuICAgIGxlbmd0aCArPSBzdGFydDtcbiAgICBmb3IgKGkgPSBzdGFydDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBzdHIgKz0gZnJvbUNoYXJDb2RlKGRhdGFWaWV3LmdldFVpbnQ4KGkpKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuICB2YXIgYnRvYSA9IFdJTkRPVy5idG9hO1xuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm0gYXJyYXkgYnVmZmVyIHRvIERhdGEgVVJMLlxuICAgKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBhcnJheUJ1ZmZlciAtIFRoZSBhcnJheSBidWZmZXIgdG8gdHJhbnNmb3JtLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWltZVR5cGUgLSBUaGUgbWltZSB0eXBlIG9mIHRoZSBEYXRhIFVSTC5cbiAgICogQHJldHVybnMge3N0cmluZ30gVGhlIHJlc3VsdCBEYXRhIFVSTC5cbiAgICovXG4gIGZ1bmN0aW9uIGFycmF5QnVmZmVyVG9EYXRhVVJMKGFycmF5QnVmZmVyLCBtaW1lVHlwZSkge1xuICAgIHZhciBjaHVua3MgPSBbXTtcbiAgICB2YXIgY2h1bmtTaXplID0gODE5MjtcbiAgICB2YXIgdWludDggPSBuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcik7XG4gICAgd2hpbGUgKHVpbnQ4Lmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIFhYWDogQmFiZWwncyBgdG9Db25zdW1hYmxlQXJyYXlgIGhlbHBlciB3aWxsIHRocm93IGVycm9yIGluIElFIG9yIFNhZmFyaSA5XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXNwcmVhZFxuICAgICAgY2h1bmtzLnB1c2goZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIHRvQXJyYXkodWludDguc3ViYXJyYXkoMCwgY2h1bmtTaXplKSkpKTtcbiAgICAgIHVpbnQ4ID0gdWludDguc3ViYXJyYXkoY2h1bmtTaXplKTtcbiAgICB9XG4gICAgcmV0dXJuIFwiZGF0YTpcIi5jb25jYXQobWltZVR5cGUsIFwiO2Jhc2U2NCxcIikuY29uY2F0KGJ0b2EoY2h1bmtzLmpvaW4oJycpKSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IG9yaWVudGF0aW9uIHZhbHVlIGZyb20gZ2l2ZW4gYXJyYXkgYnVmZmVyLlxuICAgKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBhcnJheUJ1ZmZlciAtIFRoZSBhcnJheSBidWZmZXIgdG8gcmVhZC5cbiAgICogQHJldHVybnMge251bWJlcn0gVGhlIHJlYWQgb3JpZW50YXRpb24gdmFsdWUuXG4gICAqL1xuICBmdW5jdGlvbiByZXNldEFuZEdldE9yaWVudGF0aW9uKGFycmF5QnVmZmVyKSB7XG4gICAgdmFyIGRhdGFWaWV3ID0gbmV3IERhdGFWaWV3KGFycmF5QnVmZmVyKTtcbiAgICB2YXIgb3JpZW50YXRpb247XG5cbiAgICAvLyBJZ25vcmVzIHJhbmdlIGVycm9yIHdoZW4gdGhlIGltYWdlIGRvZXMgbm90IGhhdmUgY29ycmVjdCBFeGlmIGluZm9ybWF0aW9uXG4gICAgdHJ5IHtcbiAgICAgIHZhciBsaXR0bGVFbmRpYW47XG4gICAgICB2YXIgYXBwMVN0YXJ0O1xuICAgICAgdmFyIGlmZFN0YXJ0O1xuXG4gICAgICAvLyBPbmx5IGhhbmRsZSBKUEVHIGltYWdlIChzdGFydCBieSAweEZGRDgpXG4gICAgICBpZiAoZGF0YVZpZXcuZ2V0VWludDgoMCkgPT09IDB4RkYgJiYgZGF0YVZpZXcuZ2V0VWludDgoMSkgPT09IDB4RDgpIHtcbiAgICAgICAgdmFyIGxlbmd0aCA9IGRhdGFWaWV3LmJ5dGVMZW5ndGg7XG4gICAgICAgIHZhciBvZmZzZXQgPSAyO1xuICAgICAgICB3aGlsZSAob2Zmc2V0ICsgMSA8IGxlbmd0aCkge1xuICAgICAgICAgIGlmIChkYXRhVmlldy5nZXRVaW50OChvZmZzZXQpID09PSAweEZGICYmIGRhdGFWaWV3LmdldFVpbnQ4KG9mZnNldCArIDEpID09PSAweEUxKSB7XG4gICAgICAgICAgICBhcHAxU3RhcnQgPSBvZmZzZXQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgb2Zmc2V0ICs9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChhcHAxU3RhcnQpIHtcbiAgICAgICAgdmFyIGV4aWZJRENvZGUgPSBhcHAxU3RhcnQgKyA0O1xuICAgICAgICB2YXIgdGlmZk9mZnNldCA9IGFwcDFTdGFydCArIDEwO1xuICAgICAgICBpZiAoZ2V0U3RyaW5nRnJvbUNoYXJDb2RlKGRhdGFWaWV3LCBleGlmSURDb2RlLCA0KSA9PT0gJ0V4aWYnKSB7XG4gICAgICAgICAgdmFyIGVuZGlhbm5lc3MgPSBkYXRhVmlldy5nZXRVaW50MTYodGlmZk9mZnNldCk7XG4gICAgICAgICAgbGl0dGxlRW5kaWFuID0gZW5kaWFubmVzcyA9PT0gMHg0OTQ5O1xuICAgICAgICAgIGlmIChsaXR0bGVFbmRpYW4gfHwgZW5kaWFubmVzcyA9PT0gMHg0RDREIC8qIGJpZ0VuZGlhbiAqLykge1xuICAgICAgICAgICAgaWYgKGRhdGFWaWV3LmdldFVpbnQxNih0aWZmT2Zmc2V0ICsgMiwgbGl0dGxlRW5kaWFuKSA9PT0gMHgwMDJBKSB7XG4gICAgICAgICAgICAgIHZhciBmaXJzdElGRE9mZnNldCA9IGRhdGFWaWV3LmdldFVpbnQzMih0aWZmT2Zmc2V0ICsgNCwgbGl0dGxlRW5kaWFuKTtcbiAgICAgICAgICAgICAgaWYgKGZpcnN0SUZET2Zmc2V0ID49IDB4MDAwMDAwMDgpIHtcbiAgICAgICAgICAgICAgICBpZmRTdGFydCA9IHRpZmZPZmZzZXQgKyBmaXJzdElGRE9mZnNldDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGlmZFN0YXJ0KSB7XG4gICAgICAgIHZhciBfbGVuZ3RoID0gZGF0YVZpZXcuZ2V0VWludDE2KGlmZFN0YXJ0LCBsaXR0bGVFbmRpYW4pO1xuICAgICAgICB2YXIgX29mZnNldDtcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBfbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBfb2Zmc2V0ID0gaWZkU3RhcnQgKyBpICogMTIgKyAyO1xuICAgICAgICAgIGlmIChkYXRhVmlldy5nZXRVaW50MTYoX29mZnNldCwgbGl0dGxlRW5kaWFuKSA9PT0gMHgwMTEyIC8qIE9yaWVudGF0aW9uICovKSB7XG4gICAgICAgICAgICAvLyA4IGlzIHRoZSBvZmZzZXQgb2YgdGhlIGN1cnJlbnQgdGFnJ3MgdmFsdWVcbiAgICAgICAgICAgIF9vZmZzZXQgKz0gODtcblxuICAgICAgICAgICAgLy8gR2V0IHRoZSBvcmlnaW5hbCBvcmllbnRhdGlvbiB2YWx1ZVxuICAgICAgICAgICAgb3JpZW50YXRpb24gPSBkYXRhVmlldy5nZXRVaW50MTYoX29mZnNldCwgbGl0dGxlRW5kaWFuKTtcblxuICAgICAgICAgICAgLy8gT3ZlcnJpZGUgdGhlIG9yaWVudGF0aW9uIHdpdGggaXRzIGRlZmF1bHQgdmFsdWVcbiAgICAgICAgICAgIGRhdGFWaWV3LnNldFVpbnQxNihfb2Zmc2V0LCAxLCBsaXR0bGVFbmRpYW4pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgb3JpZW50YXRpb24gPSAxO1xuICAgIH1cbiAgICByZXR1cm4gb3JpZW50YXRpb247XG4gIH1cblxuICAvKipcbiAgICogUGFyc2UgRXhpZiBPcmllbnRhdGlvbiB2YWx1ZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IG9yaWVudGF0aW9uIC0gVGhlIG9yaWVudGF0aW9uIHRvIHBhcnNlLlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgcGFyc2VkIHJlc3VsdC5cbiAgICovXG4gIGZ1bmN0aW9uIHBhcnNlT3JpZW50YXRpb24ob3JpZW50YXRpb24pIHtcbiAgICB2YXIgcm90YXRlID0gMDtcbiAgICB2YXIgc2NhbGVYID0gMTtcbiAgICB2YXIgc2NhbGVZID0gMTtcbiAgICBzd2l0Y2ggKG9yaWVudGF0aW9uKSB7XG4gICAgICAvLyBGbGlwIGhvcml6b250YWxcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgc2NhbGVYID0gLTE7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvLyBSb3RhdGUgbGVmdCAxODBcdTAwQjBcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcm90YXRlID0gLTE4MDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8vIEZsaXAgdmVydGljYWxcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgc2NhbGVZID0gLTE7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvLyBGbGlwIHZlcnRpY2FsIGFuZCByb3RhdGUgcmlnaHQgOTBcdTAwQjBcbiAgICAgIGNhc2UgNTpcbiAgICAgICAgcm90YXRlID0gOTA7XG4gICAgICAgIHNjYWxlWSA9IC0xO1xuICAgICAgICBicmVhaztcblxuICAgICAgLy8gUm90YXRlIHJpZ2h0IDkwXHUwMEIwXG4gICAgICBjYXNlIDY6XG4gICAgICAgIHJvdGF0ZSA9IDkwO1xuICAgICAgICBicmVhaztcblxuICAgICAgLy8gRmxpcCBob3Jpem9udGFsIGFuZCByb3RhdGUgcmlnaHQgOTBcdTAwQjBcbiAgICAgIGNhc2UgNzpcbiAgICAgICAgcm90YXRlID0gOTA7XG4gICAgICAgIHNjYWxlWCA9IC0xO1xuICAgICAgICBicmVhaztcblxuICAgICAgLy8gUm90YXRlIGxlZnQgOTBcdTAwQjBcbiAgICAgIGNhc2UgODpcbiAgICAgICAgcm90YXRlID0gLTkwO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHJvdGF0ZTogcm90YXRlLFxuICAgICAgc2NhbGVYOiBzY2FsZVgsXG4gICAgICBzY2FsZVk6IHNjYWxlWVxuICAgIH07XG4gIH1cbiAgdmFyIFJFR0VYUF9ERUNJTUFMUyA9IC9cXC5cXGQqKD86MHw5KXsxMn1cXGQqJC87XG5cbiAgLyoqXG4gICAqIE5vcm1hbGl6ZSBkZWNpbWFsIG51bWJlci5cbiAgICogQ2hlY2sgb3V0IHtAbGluayBodHRwczovLzAuMzAwMDAwMDAwMDAwMDAwMDQuY29tL31cbiAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIG5vcm1hbGl6ZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IFt0aW1lcz0xMDAwMDAwMDAwMDBdIC0gVGhlIHRpbWVzIGZvciBub3JtYWxpemluZy5cbiAgICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbm9ybWFsaXplZCBudW1iZXIuXG4gICAqL1xuICBmdW5jdGlvbiBub3JtYWxpemVEZWNpbWFsTnVtYmVyKHZhbHVlKSB7XG4gICAgdmFyIHRpbWVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAxMDAwMDAwMDAwMDA7XG4gICAgcmV0dXJuIFJFR0VYUF9ERUNJTUFMUy50ZXN0KHZhbHVlKSA/IE1hdGgucm91bmQodmFsdWUgKiB0aW1lcykgLyB0aW1lcyA6IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbWF4IHNpemVzIGluIGEgcmVjdGFuZ2xlIHVuZGVyIHRoZSBnaXZlbiBhc3BlY3QgcmF0aW8uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gVGhlIG9yaWdpbmFsIHNpemVzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3R5cGU9J2NvbnRhaW4nXSAtIFRoZSBhZGp1c3QgdHlwZS5cbiAgICogQHJldHVybnMge09iamVjdH0gVGhlIHJlc3VsdCBzaXplcy5cbiAgICovXG4gIGZ1bmN0aW9uIGdldEFkanVzdGVkU2l6ZXMoX3JlZikge1xuICAgIHZhciBhc3BlY3RSYXRpbyA9IF9yZWYuYXNwZWN0UmF0aW8sXG4gICAgICBoZWlnaHQgPSBfcmVmLmhlaWdodCxcbiAgICAgIHdpZHRoID0gX3JlZi53aWR0aDtcbiAgICB2YXIgdHlwZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogJ25vbmUnO1xuICAgIHZhciBpc1ZhbGlkV2lkdGggPSBpc1Bvc2l0aXZlTnVtYmVyKHdpZHRoKTtcbiAgICB2YXIgaXNWYWxpZEhlaWdodCA9IGlzUG9zaXRpdmVOdW1iZXIoaGVpZ2h0KTtcbiAgICBpZiAoaXNWYWxpZFdpZHRoICYmIGlzVmFsaWRIZWlnaHQpIHtcbiAgICAgIHZhciBhZGp1c3RlZFdpZHRoID0gaGVpZ2h0ICogYXNwZWN0UmF0aW87XG4gICAgICBpZiAoKHR5cGUgPT09ICdjb250YWluJyB8fCB0eXBlID09PSAnbm9uZScpICYmIGFkanVzdGVkV2lkdGggPiB3aWR0aCB8fCB0eXBlID09PSAnY292ZXInICYmIGFkanVzdGVkV2lkdGggPCB3aWR0aCkge1xuICAgICAgICBoZWlnaHQgPSB3aWR0aCAvIGFzcGVjdFJhdGlvO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2lkdGggPSBoZWlnaHQgKiBhc3BlY3RSYXRpbztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzVmFsaWRXaWR0aCkge1xuICAgICAgaGVpZ2h0ID0gd2lkdGggLyBhc3BlY3RSYXRpbztcbiAgICB9IGVsc2UgaWYgKGlzVmFsaWRIZWlnaHQpIHtcbiAgICAgIHdpZHRoID0gaGVpZ2h0ICogYXNwZWN0UmF0aW87XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogd2lkdGgsXG4gICAgICBoZWlnaHQ6IGhlaWdodFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogR2V0IEV4aWYgaW5mb3JtYXRpb24gZnJvbSB0aGUgZ2l2ZW4gYXJyYXkgYnVmZmVyLlxuICAgKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBhcnJheUJ1ZmZlciAtIFRoZSBhcnJheSBidWZmZXIgdG8gcmVhZC5cbiAgICogQHJldHVybnMge0FycmF5fSBUaGUgcmVhZCBFeGlmIGluZm9ybWF0aW9uLlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0RXhpZihhcnJheUJ1ZmZlcikge1xuICAgIHZhciBhcnJheSA9IHRvQXJyYXkobmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpKTtcbiAgICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICAgIHZhciBzZWdtZW50cyA9IFtdO1xuICAgIHZhciBzdGFydCA9IDA7XG4gICAgd2hpbGUgKHN0YXJ0ICsgMyA8IGxlbmd0aCkge1xuICAgICAgdmFyIHZhbHVlID0gYXJyYXlbc3RhcnRdO1xuICAgICAgdmFyIG5leHQgPSBhcnJheVtzdGFydCArIDFdO1xuXG4gICAgICAvLyBTT1MgKFN0YXJ0IG9mIFNjYW4pXG4gICAgICBpZiAodmFsdWUgPT09IDB4RkYgJiYgbmV4dCA9PT0gMHhEQSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgLy8gU09JIChTdGFydCBvZiBJbWFnZSlcbiAgICAgIGlmICh2YWx1ZSA9PT0gMHhGRiAmJiBuZXh0ID09PSAweEQ4KSB7XG4gICAgICAgIHN0YXJ0ICs9IDI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgb2Zmc2V0ID0gYXJyYXlbc3RhcnQgKyAyXSAqIDI1NiArIGFycmF5W3N0YXJ0ICsgM107XG4gICAgICAgIHZhciBlbmQgPSBzdGFydCArIG9mZnNldCArIDI7XG4gICAgICAgIHZhciBzZWdtZW50ID0gYXJyYXkuc2xpY2Uoc3RhcnQsIGVuZCk7XG4gICAgICAgIHNlZ21lbnRzLnB1c2goc2VnbWVudCk7XG4gICAgICAgIHN0YXJ0ID0gZW5kO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2VnbWVudHMucmVkdWNlKGZ1bmN0aW9uIChleGlmQXJyYXksIGN1cnJlbnQpIHtcbiAgICAgIGlmIChjdXJyZW50WzBdID09PSAweEZGICYmIGN1cnJlbnRbMV0gPT09IDB4RTEpIHtcbiAgICAgICAgcmV0dXJuIGV4aWZBcnJheS5jb25jYXQoY3VycmVudCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZXhpZkFycmF5O1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnNlcnQgRXhpZiBpbmZvcm1hdGlvbiBpbnRvIHRoZSBnaXZlbiBhcnJheSBidWZmZXIuXG4gICAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGFycmF5QnVmZmVyIC0gVGhlIGFycmF5IGJ1ZmZlciB0byB0cmFuc2Zvcm0uXG4gICAqIEBwYXJhbSB7QXJyYXl9IGV4aWZBcnJheSAtIFRoZSBFeGlmIGluZm9ybWF0aW9uIHRvIGluc2VydC5cbiAgICogQHJldHVybnMge0FycmF5QnVmZmVyfSBUaGUgdHJhbnNmb3JtZWQgYXJyYXkgYnVmZmVyLlxuICAgKi9cbiAgZnVuY3Rpb24gaW5zZXJ0RXhpZihhcnJheUJ1ZmZlciwgZXhpZkFycmF5KSB7XG4gICAgdmFyIGFycmF5ID0gdG9BcnJheShuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcikpO1xuICAgIGlmIChhcnJheVsyXSAhPT0gMHhGRiB8fCBhcnJheVszXSAhPT0gMHhFMCkge1xuICAgICAgcmV0dXJuIGFycmF5QnVmZmVyO1xuICAgIH1cbiAgICB2YXIgYXBwMExlbmd0aCA9IGFycmF5WzRdICogMjU2ICsgYXJyYXlbNV07XG4gICAgdmFyIG5ld0FycmF5QnVmZmVyID0gWzB4RkYsIDB4RDhdLmNvbmNhdChleGlmQXJyYXksIGFycmF5LnNsaWNlKDQgKyBhcHAwTGVuZ3RoKSk7XG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KG5ld0FycmF5QnVmZmVyKTtcbiAgfVxuXG4gIHZhciBBcnJheUJ1ZmZlciQxID0gV0lORE9XLkFycmF5QnVmZmVyLFxuICAgIEZpbGVSZWFkZXIgPSBXSU5ET1cuRmlsZVJlYWRlcjtcbiAgdmFyIFVSTCA9IFdJTkRPVy5VUkwgfHwgV0lORE9XLndlYmtpdFVSTDtcbiAgdmFyIFJFR0VYUF9FWFRFTlNJT04gPSAvXFwuXFx3KyQvO1xuICB2YXIgQW5vdGhlckNvbXByZXNzb3IgPSBXSU5ET1cuQ29tcHJlc3NvcjtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBpbWFnZSBjb21wcmVzc29yLlxuICAgKiBAY2xhc3NcbiAgICovXG4gIHZhciBDb21wcmVzc29yID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgY29uc3RydWN0b3Igb2YgQ29tcHJlc3Nvci5cbiAgICAgKiBAcGFyYW0ge0ZpbGV8QmxvYn0gZmlsZSAtIFRoZSB0YXJnZXQgaW1hZ2UgZmlsZSBmb3IgY29tcHJlc3NpbmcuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIFRoZSBvcHRpb25zIGZvciBjb21wcmVzc2luZy5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBDb21wcmVzc29yKGZpbGUsIG9wdGlvbnMpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb21wcmVzc29yKTtcbiAgICAgIHRoaXMuZmlsZSA9IGZpbGU7XG4gICAgICB0aGlzLmV4aWYgPSBbXTtcbiAgICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIHRoaXMub3B0aW9ucyA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBERUZBVUxUUyksIG9wdGlvbnMpO1xuICAgICAgdGhpcy5hYm9ydGVkID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc3VsdCA9IG51bGw7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG4gICAgX2NyZWF0ZUNsYXNzKENvbXByZXNzb3IsIFt7XG4gICAgICBrZXk6IFwiaW5pdFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBmaWxlID0gdGhpcy5maWxlLFxuICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGlmICghaXNCbG9iKGZpbGUpKSB7XG4gICAgICAgICAgdGhpcy5mYWlsKG5ldyBFcnJvcignVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBGaWxlIG9yIEJsb2Igb2JqZWN0LicpKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1pbWVUeXBlID0gZmlsZS50eXBlO1xuICAgICAgICBpZiAoIWlzSW1hZ2VUeXBlKG1pbWVUeXBlKSkge1xuICAgICAgICAgIHRoaXMuZmFpbChuZXcgRXJyb3IoJ1RoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGFuIGltYWdlIEZpbGUgb3IgQmxvYiBvYmplY3QuJykpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVVSTCB8fCAhRmlsZVJlYWRlcikge1xuICAgICAgICAgIHRoaXMuZmFpbChuZXcgRXJyb3IoJ1RoZSBjdXJyZW50IGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBpbWFnZSBjb21wcmVzc2lvbi4nKSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghQXJyYXlCdWZmZXIkMSkge1xuICAgICAgICAgIG9wdGlvbnMuY2hlY2tPcmllbnRhdGlvbiA9IGZhbHNlO1xuICAgICAgICAgIG9wdGlvbnMucmV0YWluRXhpZiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpc0pQRUdJbWFnZSA9IG1pbWVUeXBlID09PSAnaW1hZ2UvanBlZyc7XG4gICAgICAgIHZhciBjaGVja09yaWVudGF0aW9uID0gaXNKUEVHSW1hZ2UgJiYgb3B0aW9ucy5jaGVja09yaWVudGF0aW9uO1xuICAgICAgICB2YXIgcmV0YWluRXhpZiA9IGlzSlBFR0ltYWdlICYmIG9wdGlvbnMucmV0YWluRXhpZjtcbiAgICAgICAgaWYgKFVSTCAmJiAhY2hlY2tPcmllbnRhdGlvbiAmJiAhcmV0YWluRXhpZikge1xuICAgICAgICAgIHRoaXMubG9hZCh7XG4gICAgICAgICAgICB1cmw6IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSlcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICB0aGlzLnJlYWRlciA9IHJlYWRlcjtcbiAgICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBfcmVmLnRhcmdldDtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB7fTtcbiAgICAgICAgICAgIHZhciBvcmllbnRhdGlvbiA9IDE7XG4gICAgICAgICAgICBpZiAoY2hlY2tPcmllbnRhdGlvbikge1xuICAgICAgICAgICAgICAvLyBSZXNldCB0aGUgb3JpZW50YXRpb24gdmFsdWUgdG8gaXRzIGRlZmF1bHQgdmFsdWUgMVxuICAgICAgICAgICAgICAvLyBhcyBzb21lIGlPUyBicm93c2VycyB3aWxsIHJlbmRlciBpbWFnZSB3aXRoIGl0cyBvcmllbnRhdGlvblxuICAgICAgICAgICAgICBvcmllbnRhdGlvbiA9IHJlc2V0QW5kR2V0T3JpZW50YXRpb24ocmVzdWx0KTtcbiAgICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID4gMSkge1xuICAgICAgICAgICAgICAgIF9leHRlbmRzKGRhdGEsIHBhcnNlT3JpZW50YXRpb24ob3JpZW50YXRpb24pKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJldGFpbkV4aWYpIHtcbiAgICAgICAgICAgICAgX3RoaXMuZXhpZiA9IGdldEV4aWYocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaGVja09yaWVudGF0aW9uIHx8IHJldGFpbkV4aWYpIHtcbiAgICAgICAgICAgICAgaWYgKCFVUkxcblxuICAgICAgICAgICAgICAvLyBHZW5lcmF0ZSBhIG5ldyBVUkwgd2l0aCB0aGUgZGVmYXVsdCBvcmllbnRhdGlvbiB2YWx1ZSAxLlxuICAgICAgICAgICAgICB8fCBvcmllbnRhdGlvbiA+IDEpIHtcbiAgICAgICAgICAgICAgICBkYXRhLnVybCA9IGFycmF5QnVmZmVyVG9EYXRhVVJMKHJlc3VsdCwgbWltZVR5cGUpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGEudXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGF0YS51cmwgPSByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy5sb2FkKGRhdGEpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgcmVhZGVyLm9uYWJvcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5mYWlsKG5ldyBFcnJvcignQWJvcnRlZCB0byByZWFkIHRoZSBpbWFnZSB3aXRoIEZpbGVSZWFkZXIuJykpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5mYWlsKG5ldyBFcnJvcignRmFpbGVkIHRvIHJlYWQgdGhlIGltYWdlIHdpdGggRmlsZVJlYWRlci4nKSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMucmVhZGVyID0gbnVsbDtcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmIChjaGVja09yaWVudGF0aW9uIHx8IHJldGFpbkV4aWYpIHtcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihmaWxlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImxvYWRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkKGRhdGEpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG4gICAgICAgIHZhciBmaWxlID0gdGhpcy5maWxlLFxuICAgICAgICAgIGltYWdlID0gdGhpcy5pbWFnZTtcbiAgICAgICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMi5kcmF3KF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBkYXRhKSwge30sIHtcbiAgICAgICAgICAgIG5hdHVyYWxXaWR0aDogaW1hZ2UubmF0dXJhbFdpZHRoLFxuICAgICAgICAgICAgbmF0dXJhbEhlaWdodDogaW1hZ2UubmF0dXJhbEhlaWdodFxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfTtcbiAgICAgICAgaW1hZ2Uub25hYm9ydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczIuZmFpbChuZXcgRXJyb3IoJ0Fib3J0ZWQgdG8gbG9hZCB0aGUgaW1hZ2UuJykpO1xuICAgICAgICB9O1xuICAgICAgICBpbWFnZS5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMi5mYWlsKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgdGhlIGltYWdlLicpKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBNYXRjaCBhbGwgYnJvd3NlcnMgdGhhdCB1c2UgV2ViS2l0IGFzIHRoZSBsYXlvdXQgZW5naW5lIGluIGlPUyBkZXZpY2VzLFxuICAgICAgICAvLyBzdWNoIGFzIFNhZmFyaSBmb3IgaU9TLCBDaHJvbWUgZm9yIGlPUywgYW5kIGluLWFwcCBicm93c2Vycy5cbiAgICAgICAgaWYgKFdJTkRPVy5uYXZpZ2F0b3IgJiYgLyg/OmlQYWR8aVBob25lfGlQb2QpLio/QXBwbGVXZWJLaXQvaS50ZXN0KFdJTkRPVy5uYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICAgIC8vIEZpeCB0aGUgYFRoZSBvcGVyYXRpb24gaXMgaW5zZWN1cmVgIGVycm9yICgjNTcpXG4gICAgICAgICAgaW1hZ2UuY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJztcbiAgICAgICAgfVxuICAgICAgICBpbWFnZS5hbHQgPSBmaWxlLm5hbWU7XG4gICAgICAgIGltYWdlLnNyYyA9IGRhdGEudXJsO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJkcmF3XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZHJhdyhfcmVmMikge1xuICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcbiAgICAgICAgdmFyIG5hdHVyYWxXaWR0aCA9IF9yZWYyLm5hdHVyYWxXaWR0aCxcbiAgICAgICAgICBuYXR1cmFsSGVpZ2h0ID0gX3JlZjIubmF0dXJhbEhlaWdodCxcbiAgICAgICAgICBfcmVmMiRyb3RhdGUgPSBfcmVmMi5yb3RhdGUsXG4gICAgICAgICAgcm90YXRlID0gX3JlZjIkcm90YXRlID09PSB2b2lkIDAgPyAwIDogX3JlZjIkcm90YXRlLFxuICAgICAgICAgIF9yZWYyJHNjYWxlWCA9IF9yZWYyLnNjYWxlWCxcbiAgICAgICAgICBzY2FsZVggPSBfcmVmMiRzY2FsZVggPT09IHZvaWQgMCA/IDEgOiBfcmVmMiRzY2FsZVgsXG4gICAgICAgICAgX3JlZjIkc2NhbGVZID0gX3JlZjIuc2NhbGVZLFxuICAgICAgICAgIHNjYWxlWSA9IF9yZWYyJHNjYWxlWSA9PT0gdm9pZCAwID8gMSA6IF9yZWYyJHNjYWxlWTtcbiAgICAgICAgdmFyIGZpbGUgPSB0aGlzLmZpbGUsXG4gICAgICAgICAgaW1hZ2UgPSB0aGlzLmltYWdlLFxuICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdmFyIGlzOTBEZWdyZWVzUm90YXRlZCA9IE1hdGguYWJzKHJvdGF0ZSkgJSAxODAgPT09IDkwO1xuICAgICAgICB2YXIgcmVzaXphYmxlID0gKG9wdGlvbnMucmVzaXplID09PSAnY29udGFpbicgfHwgb3B0aW9ucy5yZXNpemUgPT09ICdjb3ZlcicpICYmIGlzUG9zaXRpdmVOdW1iZXIob3B0aW9ucy53aWR0aCkgJiYgaXNQb3NpdGl2ZU51bWJlcihvcHRpb25zLmhlaWdodCk7XG4gICAgICAgIHZhciBtYXhXaWR0aCA9IE1hdGgubWF4KG9wdGlvbnMubWF4V2lkdGgsIDApIHx8IEluZmluaXR5O1xuICAgICAgICB2YXIgbWF4SGVpZ2h0ID0gTWF0aC5tYXgob3B0aW9ucy5tYXhIZWlnaHQsIDApIHx8IEluZmluaXR5O1xuICAgICAgICB2YXIgbWluV2lkdGggPSBNYXRoLm1heChvcHRpb25zLm1pbldpZHRoLCAwKSB8fCAwO1xuICAgICAgICB2YXIgbWluSGVpZ2h0ID0gTWF0aC5tYXgob3B0aW9ucy5taW5IZWlnaHQsIDApIHx8IDA7XG4gICAgICAgIHZhciBhc3BlY3RSYXRpbyA9IG5hdHVyYWxXaWR0aCAvIG5hdHVyYWxIZWlnaHQ7XG4gICAgICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XG4gICAgICAgIGlmIChpczkwRGVncmVlc1JvdGF0ZWQpIHtcbiAgICAgICAgICB2YXIgX3JlZjMgPSBbbWF4SGVpZ2h0LCBtYXhXaWR0aF07XG4gICAgICAgICAgbWF4V2lkdGggPSBfcmVmM1swXTtcbiAgICAgICAgICBtYXhIZWlnaHQgPSBfcmVmM1sxXTtcbiAgICAgICAgICB2YXIgX3JlZjQgPSBbbWluSGVpZ2h0LCBtaW5XaWR0aF07XG4gICAgICAgICAgbWluV2lkdGggPSBfcmVmNFswXTtcbiAgICAgICAgICBtaW5IZWlnaHQgPSBfcmVmNFsxXTtcbiAgICAgICAgICB2YXIgX3JlZjUgPSBbaGVpZ2h0LCB3aWR0aF07XG4gICAgICAgICAgd2lkdGggPSBfcmVmNVswXTtcbiAgICAgICAgICBoZWlnaHQgPSBfcmVmNVsxXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzaXphYmxlKSB7XG4gICAgICAgICAgYXNwZWN0UmF0aW8gPSB3aWR0aCAvIGhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgX2dldEFkanVzdGVkU2l6ZXMgPSBnZXRBZGp1c3RlZFNpemVzKHtcbiAgICAgICAgICBhc3BlY3RSYXRpbzogYXNwZWN0UmF0aW8sXG4gICAgICAgICAgd2lkdGg6IG1heFdpZHRoLFxuICAgICAgICAgIGhlaWdodDogbWF4SGVpZ2h0XG4gICAgICAgIH0sICdjb250YWluJyk7XG4gICAgICAgIG1heFdpZHRoID0gX2dldEFkanVzdGVkU2l6ZXMud2lkdGg7XG4gICAgICAgIG1heEhlaWdodCA9IF9nZXRBZGp1c3RlZFNpemVzLmhlaWdodDtcbiAgICAgICAgdmFyIF9nZXRBZGp1c3RlZFNpemVzMiA9IGdldEFkanVzdGVkU2l6ZXMoe1xuICAgICAgICAgIGFzcGVjdFJhdGlvOiBhc3BlY3RSYXRpbyxcbiAgICAgICAgICB3aWR0aDogbWluV2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBtaW5IZWlnaHRcbiAgICAgICAgfSwgJ2NvdmVyJyk7XG4gICAgICAgIG1pbldpZHRoID0gX2dldEFkanVzdGVkU2l6ZXMyLndpZHRoO1xuICAgICAgICBtaW5IZWlnaHQgPSBfZ2V0QWRqdXN0ZWRTaXplczIuaGVpZ2h0O1xuICAgICAgICBpZiAocmVzaXphYmxlKSB7XG4gICAgICAgICAgdmFyIF9nZXRBZGp1c3RlZFNpemVzMyA9IGdldEFkanVzdGVkU2l6ZXMoe1xuICAgICAgICAgICAgYXNwZWN0UmF0aW86IGFzcGVjdFJhdGlvLFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICAgICAgICB9LCBvcHRpb25zLnJlc2l6ZSk7XG4gICAgICAgICAgd2lkdGggPSBfZ2V0QWRqdXN0ZWRTaXplczMud2lkdGg7XG4gICAgICAgICAgaGVpZ2h0ID0gX2dldEFkanVzdGVkU2l6ZXMzLmhlaWdodDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgX2dldEFkanVzdGVkU2l6ZXM0ID0gZ2V0QWRqdXN0ZWRTaXplcyh7XG4gICAgICAgICAgICBhc3BlY3RSYXRpbzogYXNwZWN0UmF0aW8sXG4gICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHZhciBfZ2V0QWRqdXN0ZWRTaXplczQkd2kgPSBfZ2V0QWRqdXN0ZWRTaXplczQud2lkdGg7XG4gICAgICAgICAgd2lkdGggPSBfZ2V0QWRqdXN0ZWRTaXplczQkd2kgPT09IHZvaWQgMCA/IG5hdHVyYWxXaWR0aCA6IF9nZXRBZGp1c3RlZFNpemVzNCR3aTtcbiAgICAgICAgICB2YXIgX2dldEFkanVzdGVkU2l6ZXM0JGhlID0gX2dldEFkanVzdGVkU2l6ZXM0LmhlaWdodDtcbiAgICAgICAgICBoZWlnaHQgPSBfZ2V0QWRqdXN0ZWRTaXplczQkaGUgPT09IHZvaWQgMCA/IG5hdHVyYWxIZWlnaHQgOiBfZ2V0QWRqdXN0ZWRTaXplczQkaGU7XG4gICAgICAgIH1cbiAgICAgICAgd2lkdGggPSBNYXRoLmZsb29yKG5vcm1hbGl6ZURlY2ltYWxOdW1iZXIoTWF0aC5taW4oTWF0aC5tYXgod2lkdGgsIG1pbldpZHRoKSwgbWF4V2lkdGgpKSk7XG4gICAgICAgIGhlaWdodCA9IE1hdGguZmxvb3Iobm9ybWFsaXplRGVjaW1hbE51bWJlcihNYXRoLm1pbihNYXRoLm1heChoZWlnaHQsIG1pbkhlaWdodCksIG1heEhlaWdodCkpKTtcbiAgICAgICAgdmFyIGRlc3RYID0gLXdpZHRoIC8gMjtcbiAgICAgICAgdmFyIGRlc3RZID0gLWhlaWdodCAvIDI7XG4gICAgICAgIHZhciBkZXN0V2lkdGggPSB3aWR0aDtcbiAgICAgICAgdmFyIGRlc3RIZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHZhciBwYXJhbXMgPSBbXTtcbiAgICAgICAgaWYgKHJlc2l6YWJsZSkge1xuICAgICAgICAgIHZhciBzcmNYID0gMDtcbiAgICAgICAgICB2YXIgc3JjWSA9IDA7XG4gICAgICAgICAgdmFyIHNyY1dpZHRoID0gbmF0dXJhbFdpZHRoO1xuICAgICAgICAgIHZhciBzcmNIZWlnaHQgPSBuYXR1cmFsSGVpZ2h0O1xuICAgICAgICAgIHZhciBfZ2V0QWRqdXN0ZWRTaXplczUgPSBnZXRBZGp1c3RlZFNpemVzKHtcbiAgICAgICAgICAgIGFzcGVjdFJhdGlvOiBhc3BlY3RSYXRpbyxcbiAgICAgICAgICAgIHdpZHRoOiBuYXR1cmFsV2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IG5hdHVyYWxIZWlnaHRcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBjb250YWluOiAnY292ZXInLFxuICAgICAgICAgICAgY292ZXI6ICdjb250YWluJ1xuICAgICAgICAgIH1bb3B0aW9ucy5yZXNpemVdKTtcbiAgICAgICAgICBzcmNXaWR0aCA9IF9nZXRBZGp1c3RlZFNpemVzNS53aWR0aDtcbiAgICAgICAgICBzcmNIZWlnaHQgPSBfZ2V0QWRqdXN0ZWRTaXplczUuaGVpZ2h0O1xuICAgICAgICAgIHNyY1ggPSAobmF0dXJhbFdpZHRoIC0gc3JjV2lkdGgpIC8gMjtcbiAgICAgICAgICBzcmNZID0gKG5hdHVyYWxIZWlnaHQgLSBzcmNIZWlnaHQpIC8gMjtcbiAgICAgICAgICBwYXJhbXMucHVzaChzcmNYLCBzcmNZLCBzcmNXaWR0aCwgc3JjSGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgICBwYXJhbXMucHVzaChkZXN0WCwgZGVzdFksIGRlc3RXaWR0aCwgZGVzdEhlaWdodCk7XG4gICAgICAgIGlmIChpczkwRGVncmVlc1JvdGF0ZWQpIHtcbiAgICAgICAgICB2YXIgX3JlZjYgPSBbaGVpZ2h0LCB3aWR0aF07XG4gICAgICAgICAgd2lkdGggPSBfcmVmNlswXTtcbiAgICAgICAgICBoZWlnaHQgPSBfcmVmNlsxXTtcbiAgICAgICAgfVxuICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgaWYgKCFpc0ltYWdlVHlwZShvcHRpb25zLm1pbWVUeXBlKSkge1xuICAgICAgICAgIG9wdGlvbnMubWltZVR5cGUgPSBmaWxlLnR5cGU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGZpbGxTdHlsZSA9ICd0cmFuc3BhcmVudCc7XG5cbiAgICAgICAgLy8gQ29udmVydHMgUE5HIGZpbGVzIG92ZXIgdGhlIGBjb252ZXJ0U2l6ZWAgdG8gSlBFR3MuXG4gICAgICAgIGlmIChmaWxlLnNpemUgPiBvcHRpb25zLmNvbnZlcnRTaXplICYmIG9wdGlvbnMuY29udmVydFR5cGVzLmluZGV4T2Yob3B0aW9ucy5taW1lVHlwZSkgPj0gMCkge1xuICAgICAgICAgIG9wdGlvbnMubWltZVR5cGUgPSAnaW1hZ2UvanBlZyc7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGlzSlBFR0ltYWdlID0gb3B0aW9ucy5taW1lVHlwZSA9PT0gJ2ltYWdlL2pwZWcnO1xuICAgICAgICBpZiAoaXNKUEVHSW1hZ2UpIHtcbiAgICAgICAgICBmaWxsU3R5bGUgPSAnI2ZmZic7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBPdmVycmlkZSB0aGUgZGVmYXVsdCBmaWxsIGNvbG9yICgjMDAwLCBibGFjaylcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBmaWxsU3R5bGU7XG4gICAgICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIGlmIChvcHRpb25zLmJlZm9yZURyYXcpIHtcbiAgICAgICAgICBvcHRpb25zLmJlZm9yZURyYXcuY2FsbCh0aGlzLCBjb250ZXh0LCBjYW52YXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmFib3J0ZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dC5zYXZlKCk7XG4gICAgICAgIGNvbnRleHQudHJhbnNsYXRlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMik7XG4gICAgICAgIGNvbnRleHQucm90YXRlKHJvdGF0ZSAqIE1hdGguUEkgLyAxODApO1xuICAgICAgICBjb250ZXh0LnNjYWxlKHNjYWxlWCwgc2NhbGVZKTtcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UuYXBwbHkoY29udGV4dCwgW2ltYWdlXS5jb25jYXQocGFyYW1zKSk7XG4gICAgICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICAgICAgICBpZiAob3B0aW9ucy5kcmV3KSB7XG4gICAgICAgICAgb3B0aW9ucy5kcmV3LmNhbGwodGhpcywgY29udGV4dCwgY2FudmFzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5hYm9ydGVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uIGNhbGxiYWNrKGJsb2IpIHtcbiAgICAgICAgICBpZiAoIV90aGlzMy5hYm9ydGVkKSB7XG4gICAgICAgICAgICB2YXIgZG9uZSA9IGZ1bmN0aW9uIGRvbmUocmVzdWx0KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdGhpczMuZG9uZSh7XG4gICAgICAgICAgICAgICAgbmF0dXJhbFdpZHRoOiBuYXR1cmFsV2lkdGgsXG4gICAgICAgICAgICAgICAgbmF0dXJhbEhlaWdodDogbmF0dXJhbEhlaWdodCxcbiAgICAgICAgICAgICAgICByZXN1bHQ6IHJlc3VsdFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoYmxvYiAmJiBpc0pQRUdJbWFnZSAmJiBvcHRpb25zLnJldGFpbkV4aWYgJiYgX3RoaXMzLmV4aWYgJiYgX3RoaXMzLmV4aWYubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICB2YXIgbmV4dCA9IGZ1bmN0aW9uIG5leHQoYXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9uZSh0b0Jsb2IoYXJyYXlCdWZmZXJUb0RhdGFVUkwoaW5zZXJ0RXhpZihhcnJheUJ1ZmZlciwgX3RoaXMzLmV4aWYpLCBvcHRpb25zLm1pbWVUeXBlKSkpO1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBpZiAoYmxvYi5hcnJheUJ1ZmZlcikge1xuICAgICAgICAgICAgICAgIGJsb2IuYXJyYXlCdWZmZXIoKS50aGVuKG5leHQpLmNhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIF90aGlzMy5mYWlsKG5ldyBFcnJvcignRmFpbGVkIHRvIHJlYWQgdGhlIGNvbXByZXNzZWQgaW1hZ2Ugd2l0aCBCbG9iLmFycmF5QnVmZmVyKCkuJykpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgICAgIF90aGlzMy5yZWFkZXIgPSByZWFkZXI7XG4gICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChfcmVmNykge1xuICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IF9yZWY3LnRhcmdldDtcbiAgICAgICAgICAgICAgICAgIG5leHQodGFyZ2V0LnJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZWFkZXIub25hYm9ydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIF90aGlzMy5mYWlsKG5ldyBFcnJvcignQWJvcnRlZCB0byByZWFkIHRoZSBjb21wcmVzc2VkIGltYWdlIHdpdGggRmlsZVJlYWRlci4nKSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZWFkZXIub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIF90aGlzMy5mYWlsKG5ldyBFcnJvcignRmFpbGVkIHRvIHJlYWQgdGhlIGNvbXByZXNzZWQgaW1hZ2Ugd2l0aCBGaWxlUmVhZGVyLicpKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICBfdGhpczMucmVhZGVyID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZG9uZShibG9iKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGlmIChjYW52YXMudG9CbG9iKSB7XG4gICAgICAgICAgY2FudmFzLnRvQmxvYihjYWxsYmFjaywgb3B0aW9ucy5taW1lVHlwZSwgb3B0aW9ucy5xdWFsaXR5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYWxsYmFjayh0b0Jsb2IoY2FudmFzLnRvRGF0YVVSTChvcHRpb25zLm1pbWVUeXBlLCBvcHRpb25zLnF1YWxpdHkpKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZG9uZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRvbmUoX3JlZjgpIHtcbiAgICAgICAgdmFyIG5hdHVyYWxXaWR0aCA9IF9yZWY4Lm5hdHVyYWxXaWR0aCxcbiAgICAgICAgICBuYXR1cmFsSGVpZ2h0ID0gX3JlZjgubmF0dXJhbEhlaWdodCxcbiAgICAgICAgICByZXN1bHQgPSBfcmVmOC5yZXN1bHQ7XG4gICAgICAgIHZhciBmaWxlID0gdGhpcy5maWxlLFxuICAgICAgICAgIGltYWdlID0gdGhpcy5pbWFnZSxcbiAgICAgICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBpZiAoVVJMICYmIGltYWdlLnNyYy5pbmRleE9mKCdibG9iOicpID09PSAwKSB7XG4gICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChpbWFnZS5zcmMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAvLyBSZXR1cm5zIG9yaWdpbmFsIGZpbGUgaWYgdGhlIHJlc3VsdCBpcyBncmVhdGVyIHRoYW4gaXQgYW5kIHdpdGhvdXQgc2l6ZSByZWxhdGVkIG9wdGlvbnNcbiAgICAgICAgICBpZiAob3B0aW9ucy5zdHJpY3QgJiYgIW9wdGlvbnMucmV0YWluRXhpZiAmJiByZXN1bHQuc2l6ZSA+IGZpbGUuc2l6ZSAmJiBvcHRpb25zLm1pbWVUeXBlID09PSBmaWxlLnR5cGUgJiYgIShvcHRpb25zLndpZHRoID4gbmF0dXJhbFdpZHRoIHx8IG9wdGlvbnMuaGVpZ2h0ID4gbmF0dXJhbEhlaWdodCB8fCBvcHRpb25zLm1pbldpZHRoID4gbmF0dXJhbFdpZHRoIHx8IG9wdGlvbnMubWluSGVpZ2h0ID4gbmF0dXJhbEhlaWdodCB8fCBvcHRpb25zLm1heFdpZHRoIDwgbmF0dXJhbFdpZHRoIHx8IG9wdGlvbnMubWF4SGVpZ2h0IDwgbmF0dXJhbEhlaWdodCkpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGZpbGU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIHJlc3VsdC5sYXN0TW9kaWZpZWQgPSBkYXRlLmdldFRpbWUoKTtcbiAgICAgICAgICAgIHJlc3VsdC5sYXN0TW9kaWZpZWREYXRlID0gZGF0ZTtcbiAgICAgICAgICAgIHJlc3VsdC5uYW1lID0gZmlsZS5uYW1lO1xuXG4gICAgICAgICAgICAvLyBDb252ZXJ0IHRoZSBleHRlbnNpb24gdG8gbWF0Y2ggaXRzIHR5cGVcbiAgICAgICAgICAgIGlmIChyZXN1bHQubmFtZSAmJiByZXN1bHQudHlwZSAhPT0gZmlsZS50eXBlKSB7XG4gICAgICAgICAgICAgIHJlc3VsdC5uYW1lID0gcmVzdWx0Lm5hbWUucmVwbGFjZShSRUdFWFBfRVhURU5TSU9OLCBpbWFnZVR5cGVUb0V4dGVuc2lvbihyZXN1bHQudHlwZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBSZXR1cm5zIG9yaWdpbmFsIGZpbGUgaWYgdGhlIHJlc3VsdCBpcyBudWxsIGluIHNvbWUgY2FzZXMuXG4gICAgICAgICAgcmVzdWx0ID0gZmlsZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlc3VsdCA9IHJlc3VsdDtcbiAgICAgICAgaWYgKG9wdGlvbnMuc3VjY2Vzcykge1xuICAgICAgICAgIG9wdGlvbnMuc3VjY2Vzcy5jYWxsKHRoaXMsIHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZmFpbFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGZhaWwoZXJyKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBpZiAob3B0aW9ucy5lcnJvcikge1xuICAgICAgICAgIG9wdGlvbnMuZXJyb3IuY2FsbCh0aGlzLCBlcnIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJhYm9ydFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFib3J0KCkge1xuICAgICAgICBpZiAoIXRoaXMuYWJvcnRlZCkge1xuICAgICAgICAgIHRoaXMuYWJvcnRlZCA9IHRydWU7XG4gICAgICAgICAgaWYgKHRoaXMucmVhZGVyKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWRlci5hYm9ydCgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuaW1hZ2UuY29tcGxldGUpIHtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2Uub25sb2FkID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2Uub25hYm9ydCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZhaWwobmV3IEVycm9yKCdUaGUgY29tcHJlc3Npb24gcHJvY2VzcyBoYXMgYmVlbiBhYm9ydGVkLicpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBHZXQgdGhlIG5vIGNvbmZsaWN0IGNvbXByZXNzb3IgY2xhc3MuXG4gICAgICAgKiBAcmV0dXJucyB7Q29tcHJlc3Nvcn0gVGhlIGNvbXByZXNzb3IgY2xhc3MuXG4gICAgICAgKi9cbiAgICB9XSwgW3tcbiAgICAgIGtleTogXCJub0NvbmZsaWN0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gbm9Db25mbGljdCgpIHtcbiAgICAgICAgd2luZG93LkNvbXByZXNzb3IgPSBBbm90aGVyQ29tcHJlc3NvcjtcbiAgICAgICAgcmV0dXJuIENvbXByZXNzb3I7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2hhbmdlIHRoZSBkZWZhdWx0IG9wdGlvbnMuXG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFRoZSBuZXcgZGVmYXVsdCBvcHRpb25zLlxuICAgICAgICovXG4gICAgfSwge1xuICAgICAga2V5OiBcInNldERlZmF1bHRzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0RGVmYXVsdHMob3B0aW9ucykge1xuICAgICAgICBfZXh0ZW5kcyhERUZBVUxUUywgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBDb21wcmVzc29yO1xuICB9KCk7XG5cbiAgcmV0dXJuIENvbXByZXNzb3I7XG5cbn0pKTtcbiIsICJpbXBvcnQgeyBNYXJrZG93blZpZXcsIE5vdGljZSwgUGx1Z2luLCBURmlsZSwgbm9ybWFsaXplUGF0aCB9IGZyb20gXCJvYnNpZGlhblwiO1xuaW1wb3J0IHsgREVGQVVMVF9TRVRUSU5HUywgQ2FtZXJhRW1iZWRTZXR0aW5ncywgQ2FtZXJhRW1iZWRTZXR0aW5nVGFiIH0gZnJvbSBcIi4vc2V0dGluZ3MuanNcIjtcbmltcG9ydCB7IGNvbXByZXNzSW1hZ2UgfSBmcm9tIFwiLi9jb21wcmVzc29yLmpzXCI7XG5pbXBvcnQgeyBidWlsZEZpbGVOYW1lLCBmb2xkZXJFeGlzdHMsIGdldEF2YWlsYWJsZVBhdGgsIGpvaW5QYXRoIH0gZnJvbSBcIi4vZmlsZS11dGlscy5qc1wiO1xuaW1wb3J0IHsgcGlja0ltYWdlcyB9IGZyb20gXCIuL2lucHV0LXV0aWxzLmpzXCI7XG5pbXBvcnQgeyBHYWxsZXJ5TW9kYWwgfSBmcm9tIFwiLi9nYWxsZXJ5LW1vZGFsLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbWVyYUVtYmVkUGx1Z2luIGV4dGVuZHMgUGx1Z2luIHtcbiAgc2V0dGluZ3M6IENhbWVyYUVtYmVkU2V0dGluZ3MgPSBERUZBVUxUX1NFVFRJTkdTO1xuXG4gIGFzeW5jIG9ubG9hZCgpIHtcbiAgICBhd2FpdCB0aGlzLmxvYWRTZXR0aW5ncygpO1xuICAgIHRoaXMubm9ybWFsaXplR2FsbGVyeVNldHRpbmdzKCk7XG4gICAgYXdhaXQgdGhpcy5zYXZlU2V0dGluZ3MoKTtcbiAgICB0aGlzLmFkZFNldHRpbmdUYWIobmV3IENhbWVyYUVtYmVkU2V0dGluZ1RhYih0aGlzLmFwcCwgdGhpcykpO1xuICAgIHRoaXMuYWRkUmliYm9uSWNvbihcImNhbWVyYVwiLCBcIkNhcHR1cmUgcGhvdG9cIiwgKCkgPT4gdm9pZCB0aGlzLmNhcHR1cmVQaG90bygpKTtcbiAgICB0aGlzLmFkZENvbW1hbmQoeyBpZDogXCJjYXB0dXJlLXBob3RvLWVtYmVkXCIsIG5hbWU6IFwiQ2FwdHVyZSBwaG90byBhbmQgZW1iZWRcIiwgaWNvbjogXCJjYW1lcmFcIiwgY2FsbGJhY2s6ICgpID0+IHZvaWQgdGhpcy5jYXB0dXJlUGhvdG8oKSB9KTtcbiAgICB0aGlzLmFkZENvbW1hbmQoeyBpZDogXCJvcGVuLWdhbGxlcnlcIiwgbmFtZTogXCJPcGVuIGNhbWVyYSBnYWxsZXJ5XCIsIGljb246IFwiaW1hZ2VzXCIsIGNhbGxiYWNrOiAoKSA9PiB0aGlzLm9wZW5HYWxsZXJ5KCkgfSk7XG4gIH1cblxuICBwcml2YXRlIG5vcm1hbGl6ZUdhbGxlcnlTZXR0aW5ncygpIHtcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5nYWxsZXJ5RW5hYmxlZCkgdGhpcy5zZXR0aW5ncy5zYXZlTmVhclRoZU5vdGUgPSBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgY2FwdHVyZVBob3RvKCkge1xuICAgIGlmICh0aGlzLnNldHRpbmdzLmdhbGxlcnlFbmFibGVkKSB0aGlzLm9wZW5HYWxsZXJ5KCk7XG4gICAgZWxzZSB2b2lkIHRoaXMuY2FwdHVyZURpcmVjdGx5KCk7XG4gIH1cblxuICBwcml2YXRlIG9wZW5HYWxsZXJ5KCkge1xuICAgIGNvbnN0IHZpZXcgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlVmlld09mVHlwZShNYXJrZG93blZpZXcpO1xuICAgIGlmICghdmlldz8uZmlsZSkge1xuICAgICAgbmV3IE5vdGljZShcIk9wZW4gYSBNYXJrZG93biBub3RlIGJlZm9yZSB1c2luZyB0aGUgY2FtZXJhIGdhbGxlcnkuXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBmb2xkZXIgPSB0aGlzLnNldHRpbmdzLnBob3Rvc0ZvbGRlci50cmltKCk7XG4gICAgaWYgKCFmb2xkZXIpIHtcbiAgICAgIG5ldyBOb3RpY2UoXCJTZXQgYSBQaG90b3MgZm9sZGVyIGluIENhbWVyYSBFbWJlZCBzZXR0aW5ncyBiZWZvcmUgdXNpbmcgdGhlIGdhbGxlcnkuXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBuZXcgR2FsbGVyeU1vZGFsKHRoaXMuYXBwLCBmb2xkZXIsIHRoaXMuc2V0dGluZ3MuY3JlYXRlRm9sZGVySWZNaXNzaW5nLCAoZmlsZXMpID0+IHtcbiAgICAgIGlmIChmaWxlcy5sZW5ndGggPiAwKSB2b2lkIHRoaXMuZW1iZWRWYXVsdEZpbGVzKGZpbGVzLCB2aWV3KTtcbiAgICB9KS5vcGVuKCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGNhcHR1cmVEaXJlY3RseSgpIHtcbiAgICBjb25zdCB2aWV3ID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZVZpZXdPZlR5cGUoTWFya2Rvd25WaWV3KTtcbiAgICBpZiAoIXZpZXc/LmZpbGUpIHtcbiAgICAgIG5ldyBOb3RpY2UoXCJQbGVhc2Ugb3BlbiBhIE1hcmtkb3duIG5vdGUgdG8gaW5zZXJ0IHRoZSBwaG90by5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGZpbGVzID0gYXdhaXQgcGlja0ltYWdlcyhcImNhbWVyYVwiKTtcbiAgICBpZiAoZmlsZXMubGVuZ3RoID4gMCkgYXdhaXQgdGhpcy5zYXZlQW5kRW1iZWQoZmlsZXMsIHZpZXcpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBlbWJlZFZhdWx0RmlsZXMoZmlsZXM6IFRGaWxlW10sIHZpZXc6IE1hcmtkb3duVmlldykge1xuICAgIGNvbnN0IGFjdGl2ZUZpbGUgPSB2aWV3LmZpbGU7XG4gICAgaWYgKCFhY3RpdmVGaWxlKSByZXR1cm47XG4gICAgY29uc3QgbGlua3MgPSBmaWxlcy5tYXAoKGZpbGUpID0+IGAhJHt0aGlzLmFwcC5maWxlTWFuYWdlci5nZW5lcmF0ZU1hcmtkb3duTGluayhmaWxlLCBhY3RpdmVGaWxlLnBhdGgpfWApO1xuICAgIHZpZXcuZWRpdG9yLnJlcGxhY2VTZWxlY3Rpb24obGlua3Muam9pbihcIlxcblwiKSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHNhdmVBbmRFbWJlZChmaWxlczogRmlsZVtdLCB2aWV3OiBNYXJrZG93blZpZXcpIHtcbiAgICBjb25zdCBhY3RpdmVGaWxlID0gdmlldy5maWxlO1xuICAgIGlmICghYWN0aXZlRmlsZSkgcmV0dXJuO1xuICAgIGNvbnN0IHRhcmdldEZvbGRlclBhdGggPSBhd2FpdCB0aGlzLmVuc3VyZVRhcmdldEZvbGRlcihhY3RpdmVGaWxlLnBhcmVudD8ucGF0aCk7XG4gICAgaWYgKHRhcmdldEZvbGRlclBhdGggPT09IG51bGwpIHJldHVybjtcbiAgICBjb25zdCBsaW5rczogc3RyaW5nW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICAgIGxldCBmaW5hbEZpbGU6IEJsb2IgfCBGaWxlID0gZmlsZTtcbiAgICAgIGlmICh0aGlzLnNldHRpbmdzLmNvbXByZXNzSW1hZ2VzKSBmaW5hbEZpbGUgPSBhd2FpdCBjb21wcmVzc0ltYWdlKGZpbGUsIHRoaXMuc2V0dGluZ3MuY29tcHJlc3NRdWFsaXR5KTtcbiAgICAgIGNvbnN0IHRhcmdldFBhdGggPSBnZXRBdmFpbGFibGVQYXRoKHRoaXMuYXBwLnZhdWx0LCBqb2luUGF0aCh0YXJnZXRGb2xkZXJQYXRoLCBidWlsZEZpbGVOYW1lKGZpbGUpKSk7XG4gICAgICBjb25zdCBjcmVhdGVkID0gYXdhaXQgdGhpcy5hcHAudmF1bHQuY3JlYXRlQmluYXJ5KHRhcmdldFBhdGgsIGF3YWl0IGZpbmFsRmlsZS5hcnJheUJ1ZmZlcigpKTtcbiAgICAgIGxpbmtzLnB1c2goYCEke3RoaXMuYXBwLmZpbGVNYW5hZ2VyLmdlbmVyYXRlTWFya2Rvd25MaW5rKGNyZWF0ZWQsIGFjdGl2ZUZpbGUucGF0aCl9YCk7XG4gICAgfVxuICAgIHZpZXcuZWRpdG9yLnJlcGxhY2VTZWxlY3Rpb24obGlua3Muam9pbihcIlxcblwiKSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGVuc3VyZVRhcmdldEZvbGRlcihub3RlRm9sZGVyUGF0aDogc3RyaW5nIHwgdW5kZWZpbmVkKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gICAgY29uc3QgcmF3ID0gdGhpcy5zZXR0aW5ncy5waG90b3NGb2xkZXIudHJpbSgpO1xuICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuc2V0dGluZ3Muc2F2ZU5lYXJUaGVOb3RlXG4gICAgICA/IChyYXcgPyAobm90ZUZvbGRlclBhdGggPyBgJHtub3RlRm9sZGVyUGF0aH0vJHtyYXd9YCA6IHJhdykgOiAobm90ZUZvbGRlclBhdGggPz8gXCJcIikpXG4gICAgICA6IHJhdztcbiAgICBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplUGF0aCh0YXJnZXQpO1xuICAgIGlmIChub3JtYWxpemVkID09PSBcIlwiKSByZXR1cm4gXCJcIjtcbiAgICBpZiAoZm9sZGVyRXhpc3RzKHRoaXMuYXBwLnZhdWx0LCBub3JtYWxpemVkKSkgcmV0dXJuIG5vcm1hbGl6ZWQ7XG4gICAgaWYgKCF0aGlzLnNldHRpbmdzLmNyZWF0ZUZvbGRlcklmTWlzc2luZykge1xuICAgICAgbmV3IE5vdGljZShgRm9sZGVyIG5vdCBmb3VuZDogJHtub3JtYWxpemVkfWApO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5jcmVhdGVGb2xkZXIobm9ybWFsaXplZCk7XG4gICAgICByZXR1cm4gbm9ybWFsaXplZDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkNhbWVyYSBFbWJlZDogZmFpbGVkIHRvIGNyZWF0ZSBmb2xkZXJcIiwgZXJyb3IpO1xuICAgICAgbmV3IE5vdGljZShgRmFpbGVkIHRvIGNyZWF0ZSBmb2xkZXI6ICR7bm9ybWFsaXplZH1gKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGxvYWRTZXR0aW5ncygpIHtcbiAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9TRVRUSU5HUywgYXdhaXQgdGhpcy5sb2FkRGF0YSgpIGFzIFBhcnRpYWw8Q2FtZXJhRW1iZWRTZXR0aW5ncz4pO1xuICB9XG5cbiAgYXN5bmMgc2F2ZVNldHRpbmdzKCkgeyBhd2FpdCB0aGlzLnNhdmVEYXRhKHRoaXMuc2V0dGluZ3MpOyB9XG59XG4iLCAiaW1wb3J0IHsgQXBwLCBQbHVnaW5TZXR0aW5nVGFiIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgQ2FtZXJhRW1iZWRQbHVnaW4gZnJvbSBcIi4vbWFpbi5qc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbWVyYUVtYmVkU2V0dGluZ3Mge1xuICBwaG90b3NGb2xkZXI6IHN0cmluZztcbiAgY3JlYXRlRm9sZGVySWZNaXNzaW5nOiBib29sZWFuO1xuICBzYXZlTmVhclRoZU5vdGU6IGJvb2xlYW47XG4gIGNvbXByZXNzSW1hZ2VzOiBib29sZWFuO1xuICBjb21wcmVzc1F1YWxpdHk6IG51bWJlcjtcbiAgZ2FsbGVyeUVuYWJsZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1NFVFRJTkdTOiBDYW1lcmFFbWJlZFNldHRpbmdzID0ge1xuICBwaG90b3NGb2xkZXI6IFwiXCIsXG4gIGNyZWF0ZUZvbGRlcklmTWlzc2luZzogdHJ1ZSxcbiAgc2F2ZU5lYXJUaGVOb3RlOiBmYWxzZSxcbiAgY29tcHJlc3NJbWFnZXM6IGZhbHNlLFxuICBjb21wcmVzc1F1YWxpdHk6IDAuOCxcbiAgZ2FsbGVyeUVuYWJsZWQ6IGZhbHNlLFxufTtcblxuZXhwb3J0IGNsYXNzIENhbWVyYUVtYmVkU2V0dGluZ1RhYiBleHRlbmRzIFBsdWdpblNldHRpbmdUYWIge1xuICBwbHVnaW46IENhbWVyYUVtYmVkUGx1Z2luO1xuXG4gIGNvbnN0cnVjdG9yKGFwcDogQXBwLCBwbHVnaW46IENhbWVyYUVtYmVkUGx1Z2luKSB7XG4gICAgc3VwZXIoYXBwLCBwbHVnaW4pO1xuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICB9XG5cbiAgZ2V0U2V0dGluZ0RlZmluaXRpb25zKCkge1xuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiUGxhdGZvcm0gc3VwcG9ydFwiLFxuICAgICAgICBkZXNjOiBcIlRoaXMgcGx1Z2luIGlzIHByaW1hcmlseSBkZXNpZ25lZCBmb3IgQW5kcm9pZC4gU29tZSBmZWF0dXJlcyBtYXkgYmUgbGltaXRlZCBvbiBvdGhlciBwbGF0Zm9ybXMuXCIsXG4gICAgICAgIGNvbnRyb2w6IHsgdHlwZTogXCJpbmZvXCIgYXMgY29uc3QgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiUGhvdG9zIGZvbGRlclwiLFxuICAgICAgICBkZXNjOiBcIlZhdWx0LXJlbGF0aXZlIGZvbGRlciB1c2VkIGZvciBnYWxsZXJ5IHBob3RvcyBhbmQgY2FtZXJhIHBob3RvcyB3aGVuIFNhdmUgbmVhciB0aGUgbm90ZSBpcyBkaXNhYmxlZC5cIixcbiAgICAgICAgY29udHJvbDoge1xuICAgICAgICAgIHR5cGU6IFwidGV4dFwiIGFzIGNvbnN0LFxuICAgICAgICAgIGtleTogXCJwaG90b3NGb2xkZXJcIiBhcyBjb25zdCxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogXCJhdHRhY2htZW50cy9jYW1lcmFcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiQ3JlYXRlIGZvbGRlciBpZiBtaXNzaW5nXCIsXG4gICAgICAgIGRlc2M6IFwiQXV0b21hdGljYWxseSBjcmVhdGUgdGhlIFBob3RvcyBmb2xkZXIgd2hlbiBpdCBkb2VzIG5vdCBleGlzdC5cIixcbiAgICAgICAgY29udHJvbDogeyB0eXBlOiBcInRvZ2dsZVwiIGFzIGNvbnN0LCBrZXk6IFwiY3JlYXRlRm9sZGVySWZNaXNzaW5nXCIgYXMgY29uc3QgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiU2F2ZSBuZWFyIHRoZSBub3RlXCIsXG4gICAgICAgIGRlc2M6IFwiU2F2ZSBjYW1lcmEgcGhvdG9zIGJlc2lkZSB0aGUgY3VycmVudCBub3RlIGluc3RlYWQgb2YgdGhlIGdsb2JhbCBQaG90b3MgZm9sZGVyLlwiLFxuICAgICAgICBjb250cm9sOiB7XG4gICAgICAgICAgdHlwZTogXCJ0b2dnbGVcIiBhcyBjb25zdCxcbiAgICAgICAgICBrZXk6IFwic2F2ZU5lYXJUaGVOb3RlXCIgYXMgY29uc3QsXG4gICAgICAgICAgZGlzYWJsZWQ6ICgpID0+IHRoaXMucGx1Z2luLnNldHRpbmdzLmdhbGxlcnlFbmFibGVkLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJFbmFibGUgZ2FsbGVyeVwiLFxuICAgICAgICBkZXNjOiBcIkFkZHMgdGhlIGN1c3RvbSB2YXVsdC13aWRlIGdhbGxlcnkuIFdoZW4gZW5hYmxlZCwgdGhlIGNhbWVyYSBidXR0b24gb3BlbnMgdGhlIGdhbGxlcnkgaW5zdGVhZCBvZiBkaXJlY3RseSB0YWtpbmcgYSBwaG90by5cIixcbiAgICAgICAgY29udHJvbDogeyB0eXBlOiBcInRvZ2dsZVwiIGFzIGNvbnN0LCBrZXk6IFwiZ2FsbGVyeUVuYWJsZWRcIiBhcyBjb25zdCB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJDb21wcmVzcyBpbWFnZXNcIixcbiAgICAgICAgZGVzYzogXCJSZWR1Y2UgcGhvdG8gZmlsZSBzaXplcyBiZWZvcmUgc2F2aW5nIGNhbWVyYSBjYXB0dXJlcy5cIixcbiAgICAgICAgY29udHJvbDogeyB0eXBlOiBcInRvZ2dsZVwiIGFzIGNvbnN0LCBrZXk6IFwiY29tcHJlc3NJbWFnZXNcIiBhcyBjb25zdCB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJDb21wcmVzcyBxdWFsaXR5XCIsXG4gICAgICAgIGRlc2M6IFwiTG93ZXIgdmFsdWVzIHByb2R1Y2Ugc21hbGxlciBmaWxlcyBidXQgbG93ZXIgaW1hZ2UgcXVhbGl0eS5cIixcbiAgICAgICAgY29udHJvbDoge1xuICAgICAgICAgIHR5cGU6IFwic2xpZGVyXCIgYXMgY29uc3QsXG4gICAgICAgICAga2V5OiBcImNvbXByZXNzUXVhbGl0eVwiIGFzIGNvbnN0LFxuICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICBtYXg6IDAuOSxcbiAgICAgICAgICBzdGVwOiAwLjA1LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdO1xuICB9XG59XG4iLCAiaW1wb3J0IENvbXByZXNzb3IgZnJvbSBcImNvbXByZXNzb3Jqc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY29tcHJlc3NJbWFnZShmaWxlOiBGaWxlLCBxdWFsaXR5OiBudW1iZXIpOiBQcm9taXNlPEJsb2I+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbmV3IENvbXByZXNzb3IoZmlsZSwge1xuICAgICAgICBxdWFsaXR5LFxuICAgICAgICBtYXhXaWR0aDogMTkyMCxcbiAgICAgICAgbWF4SGVpZ2h0OiAxMDgwLFxuICAgICAgICBjb252ZXJ0U2l6ZTogMCxcbiAgICAgICAgc3VjY2VzczogcmVzb2x2ZSxcbiAgICAgICAgZXJyb3I6IHJlamVjdCxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9IiwgImltcG9ydCB7VEZvbGRlciwgVmF1bHR9IGZyb20gXCJvYnNpZGlhblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRGaWxlTmFtZShmaWxlOiBGaWxlKTogc3RyaW5nIHtcbiAgICAvLyBVc2UgYW4gSVNPIHRpbWVzdGFtcCB0byBrZWVwIGZpbGVuYW1lcyBzb3J0YWJsZS5cbiAgICBjb25zdCBzdGFtcCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5yZXBsYWNlKC9bOi5dL2csIFwiLVwiKTtcbiAgICBjb25zdCBmYWxsYmFja0V4dCA9IGV4dGVuc2lvbkZyb21UeXBlKGZpbGUudHlwZSkgPz8gXCJqcGdcIjtcbiAgICBjb25zdCBleHQgPSBleHRlbnNpb25Gcm9tTmFtZShmaWxlLm5hbWUpID8/IGZhbGxiYWNrRXh0O1xuICAgIHJldHVybiBgcGhvdG8tJHtzdGFtcH0uJHtleHR9YDtcbiAgfVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5zaW9uRnJvbU5hbWUobmFtZTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gIGNvbnN0IG1hdGNoID0gbmFtZS5tYXRjaCgvXFwuKFthLXpBLVowLTldKykkLyk7XG4gIHJldHVybiBtYXRjaD8uWzFdID8/IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRlbnNpb25Gcm9tVHlwZShtaW1lVHlwZTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gIGlmICghbWltZVR5cGUuc3RhcnRzV2l0aChcImltYWdlL1wiKSkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IHN1YnR5cGUgPSBtaW1lVHlwZS5zcGxpdChcIi9cIilbMV07XG4gIGlmICghc3VidHlwZSkgcmV0dXJuIG51bGw7XG4gIHJldHVybiBzdWJ0eXBlLnJlcGxhY2UoXCJqcGVnXCIsIFwianBnXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gam9pblBhdGgocGFyZW50UGF0aDogc3RyaW5nIHwgbnVsbCwgZmlsZU5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmICghcGFyZW50UGF0aCkgcmV0dXJuIGZpbGVOYW1lOyAvLyBwYXJlbnRQYXRoIGlzIGVtcHR5IHN0cmluZyBcdTIxOTIgdmF1bHQgcm9vdFxuICByZXR1cm4gYCR7cGFyZW50UGF0aH0vJHtmaWxlTmFtZX1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXZhaWxhYmxlUGF0aCh2YXVsdDogVmF1bHQsIHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIEF2b2lkIG92ZXJ3cml0aW5nIGV4aXN0aW5nIGZpbGVzIGJ5IGFkZGluZyBhIHN1ZmZpeC5cbiAgaWYgKCF2YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgocGF0aCkpIHJldHVybiBwYXRoO1xuXG4gIGNvbnN0IHBhcnRzID0gcGF0aC5zcGxpdChcIi9cIik7XG4gIGNvbnN0IG5hbWUgPSBwYXJ0cy5wb3AoKSA/PyBwYXRoO1xuICBjb25zdCBkaXIgPSBwYXJ0cy5sZW5ndGggPiAwID8gYCR7cGFydHMuam9pbihcIi9cIil9L2AgOiBcIlwiO1xuICBjb25zdCBleHRJbmRleCA9IG5hbWUubGFzdEluZGV4T2YoXCIuXCIpO1xuICBjb25zdCBiYXNlID0gZXh0SW5kZXggPT09IC0xID8gbmFtZSA6IG5hbWUuc2xpY2UoMCwgZXh0SW5kZXgpO1xuICBjb25zdCBleHQgPSBleHRJbmRleCA9PT0gLTEgPyBcIlwiIDogbmFtZS5zbGljZShleHRJbmRleCk7XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMDAwOyBpKyspIHtcbiAgICBjb25zdCBjYW5kaWRhdGUgPSBgJHtkaXJ9JHtiYXNlfS0ke2l9JHtleHR9YDtcbiAgICBpZiAoIXZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChjYW5kaWRhdGUpKSByZXR1cm4gY2FuZGlkYXRlO1xuICB9XG4gIHJldHVybiBgJHtkaXJ9JHtiYXNlfS0ke0RhdGUubm93KCl9JHtleHR9YDtcbn1cblxuLyoqIEhlbHBlciB0byBjaGVjayBpZiBhIGZvbGRlciBleGlzdHMgYXQgdGhlIGdpdmVuIHBhdGguICovXG5leHBvcnQgZnVuY3Rpb24gZm9sZGVyRXhpc3RzKHZhdWx0OiBWYXVsdCwgcGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IGZpbGUgPSB2YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgocGF0aCk7XG4gIHJldHVybiBmaWxlIGluc3RhbmNlb2YgVEZvbGRlcjtcbn1cbiIsICJleHBvcnQgYXN5bmMgZnVuY3Rpb24gcGlja0ltYWdlRnJvbUNhbWVyYShzb3VyY2U6IHN0cmluZyA9IFwiZ2FsbGVyeVwiKTogUHJvbWlzZTxGaWxlIHwgbnVsbD4ge1xuICBjb25zdCBmaWxlcyA9IGF3YWl0IHBpY2tJbWFnZXMoc291cmNlKTtcbiAgcmV0dXJuIGZpbGVzWzBdID8/IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwaWNrSW1hZ2VzKHNvdXJjZTogc3RyaW5nID0gXCJnYWxsZXJ5XCIpOiBQcm9taXNlPEZpbGVbXT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmJvZHkuY3JlYXRlRWwoXCJpbnB1dFwiLCB7IGNsczogXCJjYW1lcmEtaGlkZGVuXCIsIHR5cGU6IFwiZmlsZVwiIH0pO1xuICAgIGlucHV0LmFjY2VwdCA9IFwiaW1hZ2UvKlwiO1xuICAgIGlucHV0Lm11bHRpcGxlID0gc291cmNlICE9PSBcImNhbWVyYVwiO1xuICAgIGlmIChzb3VyY2UgPT09IFwiY2FtZXJhXCIpIGlucHV0LnNldEF0dHJpYnV0ZShcImNhcHR1cmVcIiwgXCJlbnZpcm9ubWVudFwiKTtcblxuICAgIGNvbnN0IHRpbWVvdXRJZCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlucHV0LnJlbW92ZSgpO1xuICAgICAgcmVzb2x2ZShbXSk7XG4gICAgfSwgNjBfMDAwKTtcblxuICAgIGNvbnN0IGNsZWFudXAgPSAoZmlsZXM6IEZpbGVbXSkgPT4ge1xuICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgICAgaW5wdXQucmVtb3ZlKCk7XG4gICAgICByZXNvbHZlKGZpbGVzKTtcbiAgICB9O1xuXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICBjb25zdCBmaWxlcyA9IGlucHV0LmZpbGVzO1xuICAgICAgY2xlYW51cChmaWxlcyA/IEFycmF5LmZyb20oZmlsZXMpIDogW10pO1xuICAgIH0pO1xuXG4gICAgaW5wdXQuY2xpY2soKTtcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsgQXBwLCBNb2RhbCwgTm90aWNlLCBURmlsZSwgc2V0SWNvbiB9IGZyb20gXCJvYnNpZGlhblwiO1xuXG5jb25zdCBJTUFHRV9FWFRFTlNJT05TID0gbmV3IFNldChbXCJqcGdcIiwgXCJqcGVnXCIsIFwicG5nXCIsIFwiZ2lmXCIsIFwid2VicFwiLCBcImJtcFwiLCBcInN2Z1wiLCBcImF2aWZcIl0pO1xuXG5leHBvcnQgY2xhc3MgR2FsbGVyeU1vZGFsIGV4dGVuZHMgTW9kYWwge1xuICBwcml2YXRlIHJlYWRvbmx5IG9uQ2hvb3NlOiAoZmlsZXM6IFRGaWxlW10pID0+IHZvaWQ7XG4gIHByaXZhdGUgcmVhZG9ubHkgcGhvdG9zRm9sZGVyOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVhZG9ubHkgY3JlYXRlRm9sZGVySWZNaXNzaW5nOiBib29sZWFuO1xuICBwcml2YXRlIGl0ZW1zOiBURmlsZVtdID0gW107XG4gIHByaXZhdGUgc2VsZWN0ZWQgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgcHJpdmF0ZSBncmlkITogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgc2VsZWN0aW9uTGFiZWwhOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBzdGF0dXMhOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSB1c2VCdXR0b24hOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgcHJpdmF0ZSBkZWxldGVCdXR0b24hOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgcHJpdmF0ZSBzY2FuSWQgPSAwO1xuICBwcml2YXRlIG9wZW5lZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKGFwcDogQXBwLCBwaG90b3NGb2xkZXI6IHN0cmluZywgY3JlYXRlRm9sZGVySWZNaXNzaW5nOiBib29sZWFuLCBvbkNob29zZTogKGZpbGVzOiBURmlsZVtdKSA9PiB2b2lkKSB7XG4gICAgc3VwZXIoYXBwKTtcbiAgICB0aGlzLnBob3Rvc0ZvbGRlciA9IHBob3Rvc0ZvbGRlci50cmltKCk7XG4gICAgdGhpcy5jcmVhdGVGb2xkZXJJZk1pc3NpbmcgPSBjcmVhdGVGb2xkZXJJZk1pc3Npbmc7XG4gICAgdGhpcy5vbkNob29zZSA9IG9uQ2hvb3NlO1xuICB9XG5cbiAgb25PcGVuKCkge1xuICAgIHRoaXMub3BlbmVkID0gdHJ1ZTtcbiAgICB0aGlzLm1vZGFsRWwuYWRkQ2xhc3MoXCJjYW1lcmEtZ2FsbGVyeS1tb2RhbC1jb250YWluZXJcIik7XG4gICAgY29uc3QgeyBjb250ZW50RWwgfSA9IHRoaXM7XG4gICAgY29udGVudEVsLmFkZENsYXNzKFwiY2FtZXJhLWdhbGxlcnktbW9kYWxcIik7XG4gICAgY29uc3QgaGVhZGVyID0gY29udGVudEVsLmNyZWF0ZURpdih7IGNsczogXCJjYW1lcmEtZ2FsbGVyeS1oZWFkZXJcIiB9KTtcbiAgICBjb25zdCB0aXRsZSA9IGhlYWRlci5jcmVhdGVEaXYoeyBjbHM6IFwiY2FtZXJhLWdhbGxlcnktdGl0bGVcIiB9KTtcbiAgICBzZXRJY29uKHRpdGxlLCBcImltYWdlc1wiKTtcbiAgICB0aXRsZS5jcmVhdGVTcGFuKHsgdGV4dDogXCJHYWxsZXJ5XCIgfSk7XG4gICAgdGhpcy5zZWxlY3Rpb25MYWJlbCA9IGhlYWRlci5jcmVhdGVEaXYoeyBjbHM6IFwiY2FtZXJhLWdhbGxlcnktc2VsZWN0aW9uXCIgfSk7XG4gICAgY29uc3QgdG9vbGJhciA9IGNvbnRlbnRFbC5jcmVhdGVEaXYoeyBjbHM6IFwiY2FtZXJhLWdhbGxlcnktdG9vbGJhclwiIH0pO1xuICAgIGNvbnN0IHRha2UgPSB0b29sYmFyLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHsgY2xzOiBcIm1vZC1jdGFcIiB9KTtcbiAgICBzZXRJY29uKHRha2UsIFwiY2FtZXJhXCIpO1xuICAgIHRha2UuY3JlYXRlU3Bhbih7IHRleHQ6IFwiVGFrZSBwaG90byB0byBnYWxsZXJ5XCIgfSk7XG4gICAgdGFrZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdm9pZCB0aGlzLnRha2VQaG90bygpKTtcbiAgICBjb25zdCB1cGxvYWQgPSB0b29sYmFyLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHsgY2xzOiBcImNhbWVyYS1nYWxsZXJ5LXVwbG9hZFwiIH0pO1xuICAgIHNldEljb24odXBsb2FkLCBcInVwbG9hZFwiKTtcbiAgICB1cGxvYWQuY3JlYXRlU3Bhbih7IHRleHQ6IFwiVXBsb2FkIHRvIGdhbGxlcnlcIiB9KTtcbiAgICB1cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHZvaWQgdGhpcy51cGxvYWRUb0dhbGxlcnkoKSk7XG4gICAgdGhpcy5zdGF0dXMgPSBjb250ZW50RWwuY3JlYXRlRGl2KHsgY2xzOiBcImNhbWVyYS1nYWxsZXJ5LXN0YXR1c1wiIH0pO1xuICAgIHRoaXMuZ3JpZCA9IGNvbnRlbnRFbC5jcmVhdGVEaXYoeyBjbHM6IFwiY2FtZXJhLWdhbGxlcnktZ3JpZFwiIH0pO1xuICAgIGNvbnN0IGZvb3RlciA9IGNvbnRlbnRFbC5jcmVhdGVEaXYoeyBjbHM6IFwiY2FtZXJhLWdhbGxlcnktZm9vdGVyXCIgfSk7XG4gICAgdGhpcy5kZWxldGVCdXR0b24gPSBmb290ZXIuY3JlYXRlRWwoXCJidXR0b25cIiwgeyB0ZXh0OiBcIkRlbGV0ZVwiLCBjbHM6IFwiY2FtZXJhLWdhbGxlcnktZGVsZXRlXCIgfSk7XG4gICAgdGhpcy5kZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHZvaWQgdGhpcy5kZWxldGVTZWxlY3RlZCgpKTtcbiAgICB0aGlzLnVzZUJ1dHRvbiA9IGZvb3Rlci5jcmVhdGVFbChcImJ1dHRvblwiLCB7IHRleHQ6IFwiVXNlIEl0XCIsIGNsczogXCJtb2QtY3RhXCIgfSk7XG4gICAgdGhpcy51c2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMudXNlU2VsZWN0ZWQoKSk7XG4gICAgdGhpcy5zZXRBY3Rpb25CdXR0b25zVmlzaWJsZShmYWxzZSk7XG4gICAgdm9pZCB0aGlzLnNjYW5WYXVsdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBzY2FuVmF1bHQoKSB7XG4gICAgY29uc3QgY3VycmVudFNjYW4gPSArK3RoaXMuc2NhbklkO1xuICAgIHRoaXMuc3RhdHVzLnNldFRleHQoXCJTY2FubmluZyB2YXVsdFx1MjAyNlwiKTtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuYXBwLnZhdWx0LmdldEZpbGVzKCkuZmlsdGVyKChmaWxlKSA9PiBJTUFHRV9FWFRFTlNJT05TLmhhcyhmaWxlLmV4dGVuc2lvbi50b0xvd2VyQ2FzZSgpKSkuc29ydCgoYSwgYikgPT4gYi5zdGF0Lm10aW1lIC0gYS5zdGF0Lm10aW1lKTtcbiAgICBjb25zdCBwYXRocyA9IG5ldyBTZXQoZmlsZXMubWFwKChmaWxlKSA9PiBmaWxlLnBhdGgpKTtcbiAgICB0aGlzLnNlbGVjdGVkLmZvckVhY2goKHBhdGgpID0+IHsgaWYgKCFwYXRocy5oYXMocGF0aCkpIHRoaXMuc2VsZWN0ZWQuZGVsZXRlKHBhdGgpOyB9KTtcbiAgICB0aGlzLmdyaWQuZW1wdHkoKTtcbiAgICB0aGlzLml0ZW1zID0gW107XG4gICAgdGhpcy51cGRhdGVTZWxlY3Rpb24oKTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZmlsZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBpZiAoY3VycmVudFNjYW4gIT09IHRoaXMuc2NhbklkIHx8ICF0aGlzLm9wZW5lZCkgcmV0dXJuO1xuICAgICAgY29uc3QgZmlsZSA9IGZpbGVzW2luZGV4XTtcbiAgICAgIGlmICghZmlsZSkgY29udGludWU7XG4gICAgICB0aGlzLml0ZW1zLnB1c2goZmlsZSk7XG4gICAgICB0aGlzLnJlbmRlckl0ZW0oZmlsZSk7XG4gICAgICBpZiAoaW5kZXggPiAwICYmIGluZGV4ICUgMTAwID09PSAwKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzLnNldFRleHQoYFNjYW5uaW5nXHUyMDI2ICR7aW5kZXgudG9Mb2NhbGVTdHJpbmcoKX0gaW1hZ2VzYCk7XG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlKSA9PiB3aW5kb3cuc2V0VGltZW91dChyZXNvbHZlLCAwKSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjdXJyZW50U2NhbiA9PT0gdGhpcy5zY2FuSWQgJiYgdGhpcy5vcGVuZWQpIHRoaXMuc3RhdHVzLnNldFRleHQoYCR7dGhpcy5pdGVtcy5sZW5ndGgudG9Mb2NhbGVTdHJpbmcoKX0gcGhvdG9zYCk7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlckl0ZW0oZmlsZTogVEZpbGUpIHtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5ncmlkLmNyZWF0ZURpdih7IGNsczogXCJjYW1lcmEtZ2FsbGVyeS1pdGVtXCIgfSk7XG4gICAgaXRlbS5kYXRhc2V0LnBhdGggPSBmaWxlLnBhdGg7XG4gICAgY29uc3QgaW1hZ2UgPSBpdGVtLmNyZWF0ZUVsKFwiaW1nXCIsIHsgY2xzOiBcImNhbWVyYS1nYWxsZXJ5LXRodW1ibmFpbFwiIH0pO1xuICAgIGltYWdlLnNyYyA9IHRoaXMuYXBwLnZhdWx0LmdldFJlc291cmNlUGF0aChmaWxlKTtcbiAgICBpbWFnZS5hbHQgPSBmaWxlLnBhdGg7XG4gICAgaW1hZ2UubG9hZGluZyA9IFwibGF6eVwiO1xuICAgIGNvbnN0IGJhZGdlID0gaXRlbS5jcmVhdGVEaXYoeyBjbHM6IFwiY2FtZXJhLWdhbGxlcnktYmFkZ2VcIiB9KTtcbiAgICBpdGVtLmNyZWF0ZURpdih7IGNsczogXCJjYW1lcmEtZ2FsbGVyeS1uYW1lXCIsIHRleHQ6IGZpbGUubmFtZSB9KTtcbiAgICB0aGlzLnVwZGF0ZUl0ZW1TZWxlY3Rpb24oaXRlbSwgYmFkZ2UsIGZpbGUucGF0aCk7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQuaGFzKGZpbGUucGF0aCkpIHRoaXMuc2VsZWN0ZWQuZGVsZXRlKGZpbGUucGF0aCk7IGVsc2UgdGhpcy5zZWxlY3RlZC5hZGQoZmlsZS5wYXRoKTtcbiAgICAgIHRoaXMudXBkYXRlSXRlbVNlbGVjdGlvbihpdGVtLCBiYWRnZSwgZmlsZS5wYXRoKTtcbiAgICAgIHRoaXMudXBkYXRlU2VsZWN0aW9uKCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGFkZFNhdmVkRmlsZShmaWxlOiBURmlsZSkge1xuICAgIGlmICghSU1BR0VfRVhURU5TSU9OUy5oYXMoZmlsZS5leHRlbnNpb24udG9Mb3dlckNhc2UoKSkgfHwgdGhpcy5pdGVtcy5zb21lKChpdGVtKSA9PiBpdGVtLnBhdGggPT09IGZpbGUucGF0aCkpIHJldHVybjtcbiAgICB0aGlzLml0ZW1zLnVuc2hpZnQoZmlsZSk7XG4gICAgdGhpcy5yZW5kZXJJdGVtQXRUb3AoZmlsZSk7XG4gICAgdGhpcy5zdGF0dXMuc2V0VGV4dChgJHt0aGlzLml0ZW1zLmxlbmd0aC50b0xvY2FsZVN0cmluZygpfSBwaG90b3NgKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVySXRlbUF0VG9wKGZpbGU6IFRGaWxlKSB7XG4gICAgY29uc3QgaXRlbSA9IHRoaXMuZ3JpZC5jcmVhdGVEaXYoeyBjbHM6IFwiY2FtZXJhLWdhbGxlcnktaXRlbVwiIH0pO1xuICAgIGl0ZW0uZGF0YXNldC5wYXRoID0gZmlsZS5wYXRoO1xuICAgIGNvbnN0IGltYWdlID0gaXRlbS5jcmVhdGVFbChcImltZ1wiLCB7IGNsczogXCJjYW1lcmEtZ2FsbGVyeS10aHVtYm5haWxcIiB9KTtcbiAgICBpbWFnZS5zcmMgPSB0aGlzLmFwcC52YXVsdC5nZXRSZXNvdXJjZVBhdGgoZmlsZSk7XG4gICAgaW1hZ2UuYWx0ID0gZmlsZS5wYXRoO1xuICAgIGltYWdlLmxvYWRpbmcgPSBcImVhZ2VyXCI7XG4gICAgY29uc3QgYmFkZ2UgPSBpdGVtLmNyZWF0ZURpdih7IGNsczogXCJjYW1lcmEtZ2FsbGVyeS1iYWRnZVwiIH0pO1xuICAgIGl0ZW0uY3JlYXRlRGl2KHsgY2xzOiBcImNhbWVyYS1nYWxsZXJ5LW5hbWVcIiwgdGV4dDogZmlsZS5uYW1lIH0pO1xuICAgIHRoaXMudXBkYXRlSXRlbVNlbGVjdGlvbihpdGVtLCBiYWRnZSwgZmlsZS5wYXRoKTtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZC5oYXMoZmlsZS5wYXRoKSkgdGhpcy5zZWxlY3RlZC5kZWxldGUoZmlsZS5wYXRoKTsgZWxzZSB0aGlzLnNlbGVjdGVkLmFkZChmaWxlLnBhdGgpO1xuICAgICAgdGhpcy51cGRhdGVJdGVtU2VsZWN0aW9uKGl0ZW0sIGJhZGdlLCBmaWxlLnBhdGgpO1xuICAgICAgdGhpcy51cGRhdGVTZWxlY3Rpb24oKTtcbiAgICB9KTtcbiAgICB0aGlzLmdyaWQucHJlcGVuZChpdGVtKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlSXRlbVNlbGVjdGlvbihpdGVtOiBIVE1MRWxlbWVudCwgYmFkZ2U6IEhUTUxFbGVtZW50LCBwYXRoOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWQuaGFzKHBhdGgpO1xuICAgIGl0ZW0udG9nZ2xlQ2xhc3MoXCJpcy1zZWxlY3RlZFwiLCBzZWxlY3RlZCk7XG4gICAgYmFkZ2UudGV4dENvbnRlbnQgPSBzZWxlY3RlZCA/IFN0cmluZyh0aGlzLmdldFNlbGVjdGlvbk51bWJlcihwYXRoKSkgOiBcIlwiO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTZWxlY3Rpb25OdW1iZXIocGF0aDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBsZXQgbnVtYmVyID0gMDtcbiAgICBmb3IgKGNvbnN0IHNlbGVjdGVkUGF0aCBvZiB0aGlzLnNlbGVjdGVkKSB7IG51bWJlcisrOyBpZiAoc2VsZWN0ZWRQYXRoID09PSBwYXRoKSByZXR1cm4gbnVtYmVyOyB9XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBwcml2YXRlIHNldEFjdGlvbkJ1dHRvbnNWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnVzZUJ1dHRvbi50b2dnbGVWaXNpYmlsaXR5KHZpc2libGUpO1xuICAgIHRoaXMuZGVsZXRlQnV0dG9uLnRvZ2dsZVZpc2liaWxpdHkodmlzaWJsZSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVNlbGVjdGlvbigpIHtcbiAgICBjb25zdCBjb3VudCA9IHRoaXMuc2VsZWN0ZWQuc2l6ZTtcbiAgICB0aGlzLnNlbGVjdGlvbkxhYmVsLnNldFRleHQoY291bnQgPT09IDAgPyBcIlNlbGVjdCBwaG90b3NcIiA6IGAke2NvdW50fSBzZWxlY3RlZGApO1xuICAgIHRoaXMuc2V0QWN0aW9uQnV0dG9uc1Zpc2libGUoY291bnQgPiAwKTtcbiAgfVxuXG4gIHByaXZhdGUgdXNlU2VsZWN0ZWQoKSB7XG4gICAgY29uc3QgZmlsZXM6IFRGaWxlW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IHBhdGggb2YgdGhpcy5zZWxlY3RlZCkge1xuICAgICAgY29uc3QgZmlsZSA9IHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChwYXRoKTtcbiAgICAgIGlmIChmaWxlIGluc3RhbmNlb2YgVEZpbGUpIGZpbGVzLnB1c2goZmlsZSk7XG4gICAgfVxuICAgIGlmICghZmlsZXMubGVuZ3RoKSByZXR1cm47XG4gICAgdGhpcy5vbkNob29zZShmaWxlcyk7XG4gICAgdGhpcy5jbG9zZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBkZWxldGVTZWxlY3RlZCgpIHtcbiAgICBjb25zdCBwYXRocyA9IEFycmF5LmZyb20odGhpcy5zZWxlY3RlZCk7XG4gICAgaWYgKCFwYXRocy5sZW5ndGgpIHJldHVybjtcbiAgICBjb25zdCBjb25maXJtZWQgPSBhd2FpdCB0aGlzLmNvbmZpcm1EZWxldGUocGF0aHMubGVuZ3RoKTtcbiAgICBpZiAoIWNvbmZpcm1lZCkgcmV0dXJuO1xuICAgIGxldCBkZWxldGVkID0gMDtcbiAgICBmb3IgKGNvbnN0IHBhdGggb2YgcGF0aHMpIHtcbiAgICAgIGNvbnN0IGZpbGUgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgocGF0aCk7XG4gICAgICBpZiAoIShmaWxlIGluc3RhbmNlb2YgVEZpbGUpKSBjb250aW51ZTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHRoaXMuYXBwLmZpbGVNYW5hZ2VyLnRyYXNoRmlsZShmaWxlKTtcbiAgICAgICAgZGVsZXRlZCsrO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkNhbWVyYSBFbWJlZDogZmFpbGVkIHRvIGRlbGV0ZSBnYWxsZXJ5IHBob3RvXCIsIHBhdGgsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZWxlY3RlZC5jbGVhcigpO1xuICAgIGlmIChkZWxldGVkID4gMCkgbmV3IE5vdGljZShgRGVsZXRlZCAke2RlbGV0ZWR9IHBob3RvJHtkZWxldGVkID09PSAxID8gXCJcIiA6IFwic1wifS5gKTtcbiAgICBhd2FpdCB0aGlzLnNjYW5WYXVsdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb25maXJtRGVsZXRlKGNvdW50OiBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGNvbnN0IG1vZGFsID0gbmV3IE1vZGFsKHRoaXMuYXBwKTtcbiAgICAgIGxldCBzZXR0bGVkID0gZmFsc2U7XG4gICAgICBjb25zdCBmaW5pc2ggPSAodmFsdWU6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgaWYgKHNldHRsZWQpIHJldHVybjtcbiAgICAgICAgc2V0dGxlZCA9IHRydWU7XG4gICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICBtb2RhbC5jbG9zZSgpO1xuICAgICAgfTtcbiAgICAgIG1vZGFsLnRpdGxlRWwuc2V0VGV4dChcIkRlbGV0ZSBwaG90b3M/XCIpO1xuICAgICAgbW9kYWwuY29udGVudEVsLmNyZWF0ZUVsKFwicFwiLCB7IHRleHQ6IGBNb3ZlICR7Y291bnR9IHNlbGVjdGVkIHBob3RvJHtjb3VudCA9PT0gMSA/IFwiXCIgOiBcInNcIn0gdG8gdGhlIE9ic2lkaWFuIHRyYXNoP2AgfSk7XG4gICAgICBjb25zdCBidXR0b25zID0gbW9kYWwuY29udGVudEVsLmNyZWF0ZURpdih7IGNsczogXCJtb2RhbC1idXR0b24tY29udGFpbmVyXCIgfSk7XG4gICAgICBidXR0b25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHsgdGV4dDogXCJDYW5jZWxcIiB9KS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gZmluaXNoKGZhbHNlKSk7XG4gICAgICBidXR0b25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHsgdGV4dDogXCJEZWxldGVcIiwgY2xzOiBcIm1vZC13YXJuaW5nXCIgfSkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGZpbmlzaCh0cnVlKSk7XG4gICAgICBtb2RhbC5vcGVuKCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHRha2VQaG90bygpIHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmJvZHkuY3JlYXRlRWwoXCJpbnB1dFwiLCB7IGNsczogXCJjYW1lcmEtaGlkZGVuXCIsIHR5cGU6IFwiZmlsZVwiIH0pO1xuICAgIGlucHV0LmFjY2VwdCA9IFwiaW1hZ2UvKlwiO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImNhcHR1cmVcIiwgXCJlbnZpcm9ubWVudFwiKTtcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHsgdm9pZCB0aGlzLmhhbmRsZVBpY2tlZEZpbGVzKGlucHV0LCB0cnVlKTsgfSk7XG4gICAgaW5wdXQuY2xpY2soKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgdXBsb2FkVG9HYWxsZXJ5KCkge1xuICAgIGlmICghdGhpcy5waG90b3NGb2xkZXIpIHsgbmV3IE5vdGljZShcIlNldCBhIFBob3RvcyBmb2xkZXIgaW4gQ2FtZXJhIEVtYmVkIHNldHRpbmdzIGJlZm9yZSB1cGxvYWRpbmcgdG8gdGhlIGdhbGxlcnkuXCIpOyByZXR1cm47IH1cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmJvZHkuY3JlYXRlRWwoXCJpbnB1dFwiLCB7IGNsczogXCJjYW1lcmEtaGlkZGVuXCIsIHR5cGU6IFwiZmlsZVwiIH0pO1xuICAgIGlucHV0LmFjY2VwdCA9IFwiaW1hZ2UvKlwiO1xuICAgIGlucHV0Lm11bHRpcGxlID0gdHJ1ZTtcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHsgdm9pZCB0aGlzLmhhbmRsZVBpY2tlZEZpbGVzKGlucHV0LCBmYWxzZSk7IH0pO1xuICAgIGlucHV0LmNsaWNrKCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGhhbmRsZVBpY2tlZEZpbGVzKGlucHV0OiBIVE1MSW5wdXRFbGVtZW50LCBzaW5nbGU6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBmaWxlcyA9IGlucHV0LmZpbGVzID8gQXJyYXkuZnJvbShpbnB1dC5maWxlcykuc2xpY2UoMCwgc2luZ2xlID8gMSA6IHVuZGVmaW5lZCkgOiBbXTtcbiAgICBpbnB1dC5yZW1vdmUoKTtcbiAgICBpZiAoIWZpbGVzLmxlbmd0aCB8fCAhdGhpcy5vcGVuZWQpIHJldHVybjtcbiAgICBjb25zdCBzYXZlZEZpbGVzOiBURmlsZVtdID0gW107XG4gICAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7IGNvbnN0IHNhdmVkID0gYXdhaXQgdGhpcy5zYXZlVG9HYWxsZXJ5KGZpbGUpOyBpZiAoc2F2ZWQpIHNhdmVkRmlsZXMucHVzaChzYXZlZCk7IH1cbiAgICBpZiAoIXRoaXMub3BlbmVkKSByZXR1cm47XG4gICAgZm9yIChjb25zdCBzYXZlZCBvZiBzYXZlZEZpbGVzKSB0aGlzLmFkZFNhdmVkRmlsZShzYXZlZCk7XG4gICAgaWYgKHNhdmVkRmlsZXMubGVuZ3RoKSB2b2lkIHRoaXMucmVmcmVzaEluQmFja2dyb3VuZCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyByZWZyZXNoSW5CYWNrZ3JvdW5kKCkge1xuICAgIGF3YWl0IG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlKSA9PiB3aW5kb3cuc2V0VGltZW91dChyZXNvbHZlLCAyNTApKTtcbiAgICBpZiAodGhpcy5vcGVuZWQpIGF3YWl0IHRoaXMuc2NhblZhdWx0KCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHNhdmVUb0dhbGxlcnkoZmlsZTogRmlsZSk6IFByb21pc2U8VEZpbGUgfCBudWxsPiB7XG4gICAgaWYgKCF0aGlzLnBob3Rvc0ZvbGRlcikgeyBuZXcgTm90aWNlKFwiU2V0IGEgUGhvdG9zIGZvbGRlciBpbiBDYW1lcmEgRW1iZWQgc2V0dGluZ3MgZmlyc3QuXCIpOyByZXR1cm4gbnVsbDsgfVxuICAgIHRyeSB7XG4gICAgICBpZiAoIXRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aCh0aGlzLnBob3Rvc0ZvbGRlcikpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNyZWF0ZUZvbGRlcklmTWlzc2luZykgeyBuZXcgTm90aWNlKGBQaG90b3MgZm9sZGVyIG5vdCBmb3VuZDogJHt0aGlzLnBob3Rvc0ZvbGRlcn1gKTsgcmV0dXJuIG51bGw7IH1cbiAgICAgICAgYXdhaXQgdGhpcy5hcHAudmF1bHQuY3JlYXRlRm9sZGVyKHRoaXMucGhvdG9zRm9sZGVyKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFVuaXF1ZVBhdGgoYCR7dGhpcy5waG90b3NGb2xkZXJ9LyR7ZmlsZS5uYW1lfWApO1xuICAgICAgY29uc3QgY3JlYXRlZCA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNyZWF0ZUJpbmFyeShwYXRoLCBhd2FpdCBmaWxlLmFycmF5QnVmZmVyKCkpO1xuICAgICAgbmV3IE5vdGljZShgQWRkZWQgJHtmaWxlLm5hbWV9IHRvIGdhbGxlcnkuYCk7XG4gICAgICByZXR1cm4gY3JlYXRlZDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkNhbWVyYSBFbWJlZDogZ2FsbGVyeSBzYXZlIGZhaWxlZFwiLCBlcnJvcik7XG4gICAgICBuZXcgTm90aWNlKGBDb3VsZCBub3Qgc2F2ZSAke2ZpbGUubmFtZX0gdG8gdGhlIGdhbGxlcnkuYCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFVuaXF1ZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoIXRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChwYXRoKSkgcmV0dXJuIHBhdGg7XG4gICAgY29uc3QgZG90ID0gcGF0aC5sYXN0SW5kZXhPZihcIi5cIik7XG4gICAgY29uc3QgYmFzZSA9IGRvdCA+IDAgPyBwYXRoLnNsaWNlKDAsIGRvdCkgOiBwYXRoO1xuICAgIGNvbnN0IGV4dGVuc2lvbiA9IGRvdCA+IDAgPyBwYXRoLnNsaWNlKGRvdCkgOiBcIlwiO1xuICAgIGZvciAobGV0IGNvdW50ZXIgPSAyOyBjb3VudGVyIDwgMTAwMDA7IGNvdW50ZXIrKykge1xuICAgICAgY29uc3QgY2FuZGlkYXRlID0gYCR7YmFzZX0gJHtjb3VudGVyfSR7ZXh0ZW5zaW9ufWA7XG4gICAgICBpZiAoIXRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChjYW5kaWRhdGUpKSByZXR1cm4gY2FuZGlkYXRlO1xuICAgIH1cbiAgICByZXR1cm4gYCR7YmFzZX0gJHtEYXRlLm5vdygpfSR7ZXh0ZW5zaW9ufWA7XG4gIH1cblxuICBvbkNsb3NlKCkgeyB0aGlzLm9wZW5lZCA9IGZhbHNlOyB0aGlzLnNjYW5JZCsrOyB0aGlzLmNvbnRlbnRFbC5lbXB0eSgpOyB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUEsMERBQUFBLFNBQUE7QUFVQSxLQUFDLFNBQVUsUUFBUSxTQUFTO0FBQzFCLGFBQU8sWUFBWSxZQUFZLE9BQU9BLFlBQVcsY0FBY0EsUUFBTyxVQUFVLFFBQVEsSUFDeEYsT0FBTyxXQUFXLGNBQWMsT0FBTyxNQUFNLE9BQU8sT0FBTyxLQUMxRCxTQUFTLE9BQU8sZUFBZSxjQUFjLGFBQWEsVUFBVSxNQUFNLE9BQU8sYUFBYSxRQUFRO0FBQUEsSUFDekcsR0FBRyxTQUFPLFdBQVk7QUFBRTtBQUV0QixlQUFTLFFBQVEsUUFBUSxnQkFBZ0I7QUFDdkMsWUFBSSxPQUFPLE9BQU8sS0FBSyxNQUFNO0FBQzdCLFlBQUksT0FBTyx1QkFBdUI7QUFDaEMsY0FBSSxVQUFVLE9BQU8sc0JBQXNCLE1BQU07QUFDakQsNkJBQW1CLFVBQVUsUUFBUSxPQUFPLFNBQVUsS0FBSztBQUN6RCxtQkFBTyxPQUFPLHlCQUF5QixRQUFRLEdBQUcsRUFBRTtBQUFBLFVBQ3RELENBQUMsSUFBSSxLQUFLLEtBQUssTUFBTSxNQUFNLE9BQU87QUFBQSxRQUNwQztBQUNBLGVBQU87QUFBQSxNQUNUO0FBQ0EsZUFBUyxlQUFlLFFBQVE7QUFDOUIsaUJBQVMsSUFBSSxHQUFH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NUMsYUFBTztBQUFBLElBQ1Q7QUFDQSxRQUFJO0FBQ0YsWUFBTSxLQUFLLElBQUksTUFBTSxhQUFhLFVBQVU7QUFDNUMsYUFBTztBQUFBLElBQ1QsU0FBUyxPQUFPO0FBQ2QsY0FBUSxNQUFNLHlDQUF5QyxLQUFLO0FBQzVELFVBQUksd0JBQU8sNEJBQTRCLFVBQVUsRUFBRTtBQUNuRCxhQUFPO0FBQUEsSUFDVDtBQUFBLEVBQ0Y7QUFBQSxFQUVBLE1BQU0sZUFBZTtBQUNuQixTQUFLLFdBQVcsT0FBTyxPQUFPLENBQUMsR0FBRyxrQkFBa0IsTUFBTSxLQUFLLFNBQVMsQ0FBaUM7QUFBQSxFQUMzRztBQUFBLEVBRUEsTUFBTSxlQUFlO0FBQUUsVUFBTSxLQUFLLFNBQVMsS0FBSyxRQUFRO0FBQUEsRUFBRztBQUM3RDsiLAogICJuYW1lcyI6IFsibW9kdWxlIiwgIndpbmRvdyIsICJzZWxmIiwgImlzQmxvYiIsICJpc1Bvc2l0aXZlTnVtYmVyIiwgIkNvbXByZXNzb3IiLCAiY2FsbGJhY2siLCAiZG9uZSIsICJuZXh0IiwgImltcG9ydF9vYnNpZGlhbiIsICJDb21wcmVzc29yIiwgImltcG9ydF9vYnNpZGlhbiIsICJpbXBvcnRfb2JzaWRpYW4iXQp9Cg==
