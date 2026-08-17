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
  photosFolder: "photos",
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
  display() {
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
    this.useButton = footer.createEl("button", { text: "Use it", cls: "mod-cta" });
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
      new import_obsidian3.Notice("Set a photos folder in camera embed settings before uploading to the gallery.");
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
      new import_obsidian3.Notice("Set a photos folder in camera embed settings first.");
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
    const iconc = this.settings.galleryEnabled ? "images" : "camera";
    this.addRibbonIcon(iconc, "Capture photo", () => void this.capturePhoto());
    this.addCommand({ id: "capture-photo-embed", name: "Capture photo and embed", icon: iconc, callback: () => void this.capturePhoto() });
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
      new import_obsidian4.Notice("Set a photos folder in camera embed settings before using the gallery.");
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzL2NvbXByZXNzb3Jqcy9kaXN0L2NvbXByZXNzb3IuanMiLCAic3JjL21haW4udHMiLCAic3JjL3NldHRpbmdzLnRzIiwgInNyYy9jb21wcmVzc29yLnRzIiwgInNyYy9maWxlLXV0aWxzLnRzIiwgInNyYy9pbnB1dC11dGlscy50cyIsICJzcmMvZ2FsbGVyeS1tb2RhbC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyohXG4gKiBDb21wcmVzc29yLmpzIHYxLjIuMVxuICogaHR0cHM6Ly9mZW5neXVhbmNoZW4uZ2l0aHViLmlvL2NvbXByZXNzb3Jqc1xuICpcbiAqIENvcHlyaWdodCAyMDE4LXByZXNlbnQgQ2hlbiBGZW5neXVhblxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKlxuICogRGF0ZTogMjAyMy0wMi0yOFQxNDowOTo0MS43MzJaXG4gKi9cblxuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAoZ2xvYmFsID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsVGhpcyA6IGdsb2JhbCB8fCBzZWxmLCBnbG9iYWwuQ29tcHJlc3NvciA9IGZhY3RvcnkoKSk7XG59KSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbiAgZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcbiAgICAgIGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgIH0pKSwga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICAgIH1cbiAgICByZXR1cm4ga2V5cztcbiAgfVxuICBmdW5jdGlvbiBfb2JqZWN0U3ByZWFkMih0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307XG4gICAgICBpICUgMiA/IG93bktleXMoT2JqZWN0KHNvdXJjZSksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKSA6IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG4gIGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgIH0pO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfVxuICBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gICAga2V5ID0gX3RvUHJvcGVydHlLZXkoa2V5KTtcbiAgICBpZiAoa2V5IGluIG9iaikge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH1cbiAgZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gICAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduID8gT2JqZWN0LmFzc2lnbi5iaW5kKCkgOiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG4gICAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cbiAgZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7XG4gICAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0O1xuICAgIHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcbiAgICBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTtcbiAgICAgIGlmICh0eXBlb2YgcmVzICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzO1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpO1xuICAgIH1cbiAgICByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTtcbiAgfVxuICBmdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHtcbiAgICB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7XG4gICAgcmV0dXJuIHR5cGVvZiBrZXkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTtcbiAgfVxuXG4gIHZhciBjYW52YXNUb0Jsb2IgPSB7ZXhwb3J0czoge319O1xuXG4gIC8qXG4gICAqIEphdmFTY3JpcHQgQ2FudmFzIHRvIEJsb2JcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2JsdWVpbXAvSmF2YVNjcmlwdC1DYW52YXMtdG8tQmxvYlxuICAgKlxuICAgKiBDb3B5cmlnaHQgMjAxMiwgU2ViYXN0aWFuIFRzY2hhblxuICAgKiBodHRwczovL2JsdWVpbXAubmV0XG4gICAqXG4gICAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZTpcbiAgICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAgICpcbiAgICogQmFzZWQgb24gc3RhY2tvdmVyZmxvdyB1c2VyIFN0b2l2ZSdzIGNvZGUgc25pcHBldDpcbiAgICogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3EvNDk5ODkwOFxuICAgKi9cbiAgKGZ1bmN0aW9uIChtb2R1bGUpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gICAgKGZ1bmN0aW9uICh3aW5kb3cpIHtcblxuICAgICAgdmFyIENhbnZhc1Byb3RvdHlwZSA9IHdpbmRvdy5IVE1MQ2FudmFzRWxlbWVudCAmJiB3aW5kb3cuSFRNTENhbnZhc0VsZW1lbnQucHJvdG90eXBlO1xuICAgICAgdmFyIGhhc0Jsb2JDb25zdHJ1Y3RvciA9IHdpbmRvdy5CbG9iICYmIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gQm9vbGVhbihuZXcgQmxvYigpKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSgpO1xuICAgICAgdmFyIGhhc0FycmF5QnVmZmVyVmlld1N1cHBvcnQgPSBoYXNCbG9iQ29uc3RydWN0b3IgJiYgd2luZG93LlVpbnQ4QXJyYXkgJiYgZnVuY3Rpb24gKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBuZXcgQmxvYihbbmV3IFVpbnQ4QXJyYXkoMTAwKV0pLnNpemUgPT09IDEwMDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSgpO1xuICAgICAgdmFyIEJsb2JCdWlsZGVyID0gd2luZG93LkJsb2JCdWlsZGVyIHx8IHdpbmRvdy5XZWJLaXRCbG9iQnVpbGRlciB8fCB3aW5kb3cuTW96QmxvYkJ1aWxkZXIgfHwgd2luZG93Lk1TQmxvYkJ1aWxkZXI7XG4gICAgICB2YXIgZGF0YVVSSVBhdHRlcm4gPSAvXmRhdGE6KCguKj8pKDtjaGFyc2V0PS4qPyk/KSg7YmFzZTY0KT8sLztcbiAgICAgIHZhciBkYXRhVVJMdG9CbG9iID0gKGhhc0Jsb2JDb25zdHJ1Y3RvciB8fCBCbG9iQnVpbGRlcikgJiYgd2luZG93LmF0b2IgJiYgd2luZG93LkFycmF5QnVmZmVyICYmIHdpbmRvdy5VaW50OEFycmF5ICYmIGZ1bmN0aW9uIChkYXRhVVJJKSB7XG4gICAgICAgIHZhciBtYXRjaGVzLCBtZWRpYVR5cGUsIGlzQmFzZTY0LCBkYXRhU3RyaW5nLCBieXRlU3RyaW5nLCBhcnJheUJ1ZmZlciwgaW50QXJyYXksIGksIGJiO1xuICAgICAgICAvLyBQYXJzZSB0aGUgZGF0YVVSSSBjb21wb25lbnRzIGFzIHBlciBSRkMgMjM5N1xuICAgICAgICBtYXRjaGVzID0gZGF0YVVSSS5tYXRjaChkYXRhVVJJUGF0dGVybik7XG4gICAgICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBkYXRhIFVSSScpO1xuICAgICAgICB9XG4gICAgICAgIC8vIERlZmF1bHQgdG8gdGV4dC9wbGFpbjtjaGFyc2V0PVVTLUFTQ0lJXG4gICAgICAgIG1lZGlhVHlwZSA9IG1hdGNoZXNbMl0gPyBtYXRjaGVzWzFdIDogJ3RleHQvcGxhaW4nICsgKG1hdGNoZXNbM10gfHwgJztjaGFyc2V0PVVTLUFTQ0lJJyk7XG4gICAgICAgIGlzQmFzZTY0ID0gISFtYXRjaGVzWzRdO1xuICAgICAgICBkYXRhU3RyaW5nID0gZGF0YVVSSS5zbGljZShtYXRjaGVzWzBdLmxlbmd0aCk7XG4gICAgICAgIGlmIChpc0Jhc2U2NCkge1xuICAgICAgICAgIC8vIENvbnZlcnQgYmFzZTY0IHRvIHJhdyBiaW5hcnkgZGF0YSBoZWxkIGluIGEgc3RyaW5nOlxuICAgICAgICAgIGJ5dGVTdHJpbmcgPSBhdG9iKGRhdGFTdHJpbmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIENvbnZlcnQgYmFzZTY0L1VSTEVuY29kZWQgZGF0YSBjb21wb25lbnQgdG8gcmF3IGJpbmFyeTpcbiAgICAgICAgICBieXRlU3RyaW5nID0gZGVjb2RlVVJJQ29tcG9uZW50KGRhdGFTdHJpbmcpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFdyaXRlIHRoZSBieXRlcyBvZiB0aGUgc3RyaW5nIHRvIGFuIEFycmF5QnVmZmVyOlxuICAgICAgICBhcnJheUJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihieXRlU3RyaW5nLmxlbmd0aCk7XG4gICAgICAgIGludEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYnl0ZVN0cmluZy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGludEFycmF5W2ldID0gYnl0ZVN0cmluZy5jaGFyQ29kZUF0KGkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFdyaXRlIHRoZSBBcnJheUJ1ZmZlciAob3IgQXJyYXlCdWZmZXJWaWV3KSB0byBhIGJsb2I6XG4gICAgICAgIGlmIChoYXNCbG9iQ29uc3RydWN0b3IpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IEJsb2IoW2hhc0FycmF5QnVmZmVyVmlld1N1cHBvcnQgPyBpbnRBcnJheSA6IGFycmF5QnVmZmVyXSwge1xuICAgICAgICAgICAgdHlwZTogbWVkaWFUeXBlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgYmIgPSBuZXcgQmxvYkJ1aWxkZXIoKTtcbiAgICAgICAgYmIuYXBwZW5kKGFycmF5QnVmZmVyKTtcbiAgICAgICAgcmV0dXJuIGJiLmdldEJsb2IobWVkaWFUeXBlKTtcbiAgICAgIH07XG4gICAgICBpZiAod2luZG93LkhUTUxDYW52YXNFbGVtZW50ICYmICFDYW52YXNQcm90b3R5cGUudG9CbG9iKSB7XG4gICAgICAgIGlmIChDYW52YXNQcm90b3R5cGUubW96R2V0QXNGaWxlKSB7XG4gICAgICAgICAgQ2FudmFzUHJvdG90eXBlLnRvQmxvYiA9IGZ1bmN0aW9uIChjYWxsYmFjaywgdHlwZSwgcXVhbGl0eSkge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGlmIChxdWFsaXR5ICYmIENhbnZhc1Byb3RvdHlwZS50b0RhdGFVUkwgJiYgZGF0YVVSTHRvQmxvYikge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGFVUkx0b0Jsb2Ioc2VsZi50b0RhdGFVUkwodHlwZSwgcXVhbGl0eSkpKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhzZWxmLm1vekdldEFzRmlsZSgnYmxvYicsIHR5cGUpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChDYW52YXNQcm90b3R5cGUudG9EYXRhVVJMICYmIGRhdGFVUkx0b0Jsb2IpIHtcbiAgICAgICAgICBpZiAoQ2FudmFzUHJvdG90eXBlLm1zVG9CbG9iKSB7XG4gICAgICAgICAgICBDYW52YXNQcm90b3R5cGUudG9CbG9iID0gZnVuY3Rpb24gKGNhbGxiYWNrLCB0eXBlLCBxdWFsaXR5KSB7XG4gICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCh0eXBlICYmIHR5cGUgIT09ICdpbWFnZS9wbmcnIHx8IHF1YWxpdHkpICYmIENhbnZhc1Byb3RvdHlwZS50b0RhdGFVUkwgJiYgZGF0YVVSTHRvQmxvYikge1xuICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YVVSTHRvQmxvYihzZWxmLnRvRGF0YVVSTCh0eXBlLCBxdWFsaXR5KSkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBjYWxsYmFjayhzZWxmLm1zVG9CbG9iKHR5cGUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgQ2FudmFzUHJvdG90eXBlLnRvQmxvYiA9IGZ1bmN0aW9uIChjYWxsYmFjaywgdHlwZSwgcXVhbGl0eSkge1xuICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGFVUkx0b0Jsb2Ioc2VsZi50b0RhdGFVUkwodHlwZSwgcXVhbGl0eSkpKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZGF0YVVSTHRvQmxvYjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5kYXRhVVJMdG9CbG9iID0gZGF0YVVSTHRvQmxvYjtcbiAgICAgIH1cbiAgICB9KSh3aW5kb3cpO1xuICB9KShjYW52YXNUb0Jsb2IpO1xuICB2YXIgdG9CbG9iID0gY2FudmFzVG9CbG9iLmV4cG9ydHM7XG5cbiAgdmFyIGlzQmxvYiA9IGZ1bmN0aW9uIGlzQmxvYih2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgQmxvYiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgQmxvYiB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBCbG9iXSc7XG4gIH07XG5cbiAgdmFyIERFRkFVTFRTID0ge1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyBpZiBvdXRwdXQgdGhlIG9yaWdpbmFsIGltYWdlIGluc3RlYWQgb2YgdGhlIGNvbXByZXNzZWQgb25lXG4gICAgICogd2hlbiB0aGUgc2l6ZSBvZiB0aGUgY29tcHJlc3NlZCBpbWFnZSBpcyBncmVhdGVyIHRoYW4gdGhlIG9yaWdpbmFsIG9uZSdzXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgc3RyaWN0OiB0cnVlLFxuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyBpZiByZWFkIHRoZSBpbWFnZSdzIEV4aWYgT3JpZW50YXRpb24gaW5mb3JtYXRpb24sXG4gICAgICogYW5kIHRoZW4gcm90YXRlIG9yIGZsaXAgdGhlIGltYWdlIGF1dG9tYXRpY2FsbHkuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgY2hlY2tPcmllbnRhdGlvbjogdHJ1ZSxcbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgaWYgcmV0YWluIHRoZSBpbWFnZSdzIEV4aWYgaW5mb3JtYXRpb24gYWZ0ZXIgY29tcHJlc3NlZC5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAqL1xuICAgIHJldGFpbkV4aWY6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIFRoZSBtYXggd2lkdGggb2YgdGhlIG91dHB1dCBpbWFnZS5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIG1heFdpZHRoOiBJbmZpbml0eSxcbiAgICAvKipcbiAgICAgKiBUaGUgbWF4IGhlaWdodCBvZiB0aGUgb3V0cHV0IGltYWdlLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgbWF4SGVpZ2h0OiBJbmZpbml0eSxcbiAgICAvKipcbiAgICAgKiBUaGUgbWluIHdpZHRoIG9mIHRoZSBvdXRwdXQgaW1hZ2UuXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBtaW5XaWR0aDogMCxcbiAgICAvKipcbiAgICAgKiBUaGUgbWluIGhlaWdodCBvZiB0aGUgb3V0cHV0IGltYWdlLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgbWluSGVpZ2h0OiAwLFxuICAgIC8qKlxuICAgICAqIFRoZSB3aWR0aCBvZiB0aGUgb3V0cHV0IGltYWdlLlxuICAgICAqIElmIG5vdCBzcGVjaWZpZWQsIHRoZSBuYXR1cmFsIHdpZHRoIG9mIHRoZSBzb3VyY2UgaW1hZ2Ugd2lsbCBiZSB1c2VkLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgd2lkdGg6IHVuZGVmaW5lZCxcbiAgICAvKipcbiAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBvdXRwdXQgaW1hZ2UuXG4gICAgICogSWYgbm90IHNwZWNpZmllZCwgdGhlIG5hdHVyYWwgaGVpZ2h0IG9mIHRoZSBzb3VyY2UgaW1hZ2Ugd2lsbCBiZSB1c2VkLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgaGVpZ2h0OiB1bmRlZmluZWQsXG4gICAgLyoqXG4gICAgICogU2V0cyBob3cgdGhlIHNpemUgb2YgdGhlIGltYWdlIHNob3VsZCBiZSByZXNpemVkIHRvIHRoZSBjb250YWluZXJcbiAgICAgKiBzcGVjaWZpZWQgYnkgdGhlIGB3aWR0aGAgYW5kIGBoZWlnaHRgIG9wdGlvbnMuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICByZXNpemU6ICdub25lJyxcbiAgICAvKipcbiAgICAgKiBUaGUgcXVhbGl0eSBvZiB0aGUgb3V0cHV0IGltYWdlLlxuICAgICAqIEl0IG11c3QgYmUgYSBudW1iZXIgYmV0d2VlbiBgMGAgYW5kIGAxYCxcbiAgICAgKiBhbmQgb25seSBhdmFpbGFibGUgZm9yIGBpbWFnZS9qcGVnYCBhbmQgYGltYWdlL3dlYnBgIGltYWdlcy5cbiAgICAgKiBDaGVjayBvdXQge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IVE1MQ2FudmFzRWxlbWVudC90b0Jsb2IgY2FudmFzLnRvQmxvYn0uXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBxdWFsaXR5OiAwLjgsXG4gICAgLyoqXG4gICAgICogVGhlIG1pbWUgdHlwZSBvZiB0aGUgb3V0cHV0IGltYWdlLlxuICAgICAqIEJ5IGRlZmF1bHQsIHRoZSBvcmlnaW5hbCBtaW1lIHR5cGUgb2YgdGhlIHNvdXJjZSBpbWFnZSBmaWxlIHdpbGwgYmUgdXNlZC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIG1pbWVUeXBlOiAnYXV0bycsXG4gICAgLyoqXG4gICAgICogRmlsZXMgd2hvc2UgZmlsZSB0eXBlIGlzIGluY2x1ZGVkIGluIHRoaXMgbGlzdCxcbiAgICAgKiBhbmQgd2hvc2UgZmlsZSBzaXplIGV4Y2VlZHMgdGhlIGBjb252ZXJ0U2l6ZWAgdmFsdWUgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gSlBFR3MuXG4gICAgICogQHR5cGUge3N0cmluZ1x1RkY1Q0FycmF5fVxuICAgICAqL1xuICAgIGNvbnZlcnRUeXBlczogWydpbWFnZS9wbmcnXSxcbiAgICAvKipcbiAgICAgKiBQTkcgZmlsZXMgb3ZlciB0aGlzIHNpemUgKDUgTUIgYnkgZGVmYXVsdCkgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gSlBFR3MuXG4gICAgICogVG8gZGlzYWJsZSB0aGlzLCBqdXN0IHNldCB0aGUgdmFsdWUgdG8gYEluZmluaXR5YC5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIGNvbnZlcnRTaXplOiA1MDAwMDAwLFxuICAgIC8qKlxuICAgICAqIFRoZSBob29rIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgYmVmb3JlIGRyYXcgdGhlIGltYWdlIGludG8gdGhlIGNhbnZhcyBmb3IgY29tcHJlc3Npb24uXG4gICAgICogQHR5cGUge0Z1bmN0aW9ufVxuICAgICAqIEBwYXJhbSB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSBjb250ZXh0IC0gVGhlIDJkIHJlbmRlcmluZyBjb250ZXh0IG9mIHRoZSBjYW52YXMuXG4gICAgICogQHBhcmFtIHtIVE1MQ2FudmFzRWxlbWVudH0gY2FudmFzIC0gVGhlIGNhbnZhcyBmb3IgY29tcHJlc3Npb24uXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBmdW5jdGlvbiAoY29udGV4dCwgY2FudmFzKSB7XG4gICAgICogICBjb250ZXh0LmZpbGxTdHlsZSA9ICcjZmZmJztcbiAgICAgKiB9XG4gICAgICovXG4gICAgYmVmb3JlRHJhdzogbnVsbCxcbiAgICAvKipcbiAgICAgKiBUaGUgaG9vayBmdW5jdGlvbiB0byBleGVjdXRlIGFmdGVyIGRyZXcgdGhlIGltYWdlIGludG8gdGhlIGNhbnZhcyBmb3IgY29tcHJlc3Npb24uXG4gICAgICogQHR5cGUge0Z1bmN0aW9ufVxuICAgICAqIEBwYXJhbSB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSBjb250ZXh0IC0gVGhlIDJkIHJlbmRlcmluZyBjb250ZXh0IG9mIHRoZSBjYW52YXMuXG4gICAgICogQHBhcmFtIHtIVE1MQ2FudmFzRWxlbWVudH0gY2FudmFzIC0gVGhlIGNhbnZhcyBmb3IgY29tcHJlc3Npb24uXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBmdW5jdGlvbiAoY29udGV4dCwgY2FudmFzKSB7XG4gICAgICogICBjb250ZXh0LmZpbHRlciA9ICdncmF5c2NhbGUoMTAwJSknO1xuICAgICAqIH1cbiAgICAgKi9cbiAgICBkcmV3OiBudWxsLFxuICAgIC8qKlxuICAgICAqIFRoZSBob29rIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgd2hlbiBzdWNjZXNzIHRvIGNvbXByZXNzIHRoZSBpbWFnZS5cbiAgICAgKiBAdHlwZSB7RnVuY3Rpb259XG4gICAgICogQHBhcmFtIHtGaWxlfSBmaWxlIC0gVGhlIGNvbXByZXNzZWQgaW1hZ2UgRmlsZSBvYmplY3QuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBmdW5jdGlvbiAoZmlsZSkge1xuICAgICAqICAgY29uc29sZS5sb2coZmlsZSk7XG4gICAgICogfVxuICAgICAqL1xuICAgIHN1Y2Nlc3M6IG51bGwsXG4gICAgLyoqXG4gICAgICogVGhlIGhvb2sgZnVuY3Rpb24gdG8gZXhlY3V0ZSB3aGVuIGZhaWwgdG8gY29tcHJlc3MgdGhlIGltYWdlLlxuICAgICAqIEB0eXBlIHtGdW5jdGlvbn1cbiAgICAgKiBAcGFyYW0ge0Vycm9yfSBlcnIgLSBBbiBFcnJvciBvYmplY3QuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICogICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XG4gICAgICogfVxuICAgICAqL1xuICAgIGVycm9yOiBudWxsXG4gIH07XG5cbiAgdmFyIElTX0JST1dTRVIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50ICE9PSAndW5kZWZpbmVkJztcbiAgdmFyIFdJTkRPVyA9IElTX0JST1dTRVIgPyB3aW5kb3cgOiB7fTtcblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgcG9zaXRpdmUgbnVtYmVyLlxuICAgKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNoZWNrLlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgcG9zaXRpdmUgbnVtYmVyLCBlbHNlIGBmYWxzZWAuXG4gICAqL1xuICB2YXIgaXNQb3NpdGl2ZU51bWJlciA9IGZ1bmN0aW9uIGlzUG9zaXRpdmVOdW1iZXIodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPiAwICYmIHZhbHVlIDwgSW5maW5pdHk7XG4gIH07XG4gIHZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblxuICAvKipcbiAgICogQ29udmVydCBhcnJheS1saWtlIG9yIGl0ZXJhYmxlIG9iamVjdCB0byBhbiBhcnJheS5cbiAgICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICAgKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYSBuZXcgYXJyYXkuXG4gICAqL1xuICBmdW5jdGlvbiB0b0FycmF5KHZhbHVlKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20gPyBBcnJheS5mcm9tKHZhbHVlKSA6IHNsaWNlLmNhbGwodmFsdWUpO1xuICB9XG4gIHZhciBSRUdFWFBfSU1BR0VfVFlQRSA9IC9eaW1hZ2VcXC8uKyQvO1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBtaW1lIHR5cGUgb2YgaW1hZ2UuXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZ2l2ZW4gaXMgYSBtaW1lIHR5cGUgb2YgaW1hZ2UsIGVsc2UgYGZhbHNlYC5cbiAgICovXG4gIGZ1bmN0aW9uIGlzSW1hZ2VUeXBlKHZhbHVlKSB7XG4gICAgcmV0dXJuIFJFR0VYUF9JTUFHRV9UWVBFLnRlc3QodmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgaW1hZ2UgdHlwZSB0byBleHRlbnNpb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFRoZSBpbWFnZSB0eXBlIHRvIGNvbnZlcnQuXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIHRoZSBpbWFnZSBleHRlbnNpb24uXG4gICAqL1xuICBmdW5jdGlvbiBpbWFnZVR5cGVUb0V4dGVuc2lvbih2YWx1ZSkge1xuICAgIHZhciBleHRlbnNpb24gPSBpc0ltYWdlVHlwZSh2YWx1ZSkgPyB2YWx1ZS5zdWJzdHIoNikgOiAnJztcbiAgICBpZiAoZXh0ZW5zaW9uID09PSAnanBlZycpIHtcbiAgICAgIGV4dGVuc2lvbiA9ICdqcGcnO1xuICAgIH1cbiAgICByZXR1cm4gXCIuXCIuY29uY2F0KGV4dGVuc2lvbik7XG4gIH1cbiAgdmFyIGZyb21DaGFyQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGU7XG5cbiAgLyoqXG4gICAqIEdldCBzdHJpbmcgZnJvbSBjaGFyIGNvZGUgaW4gZGF0YSB2aWV3LlxuICAgKiBAcGFyYW0ge0RhdGFWaWV3fSBkYXRhVmlldyAtIFRoZSBkYXRhIHZpZXcgZm9yIHJlYWQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCAtIFRoZSBzdGFydCBpbmRleC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCAtIFRoZSByZWFkIGxlbmd0aC5cbiAgICogQHJldHVybnMge3N0cmluZ30gVGhlIHJlYWQgcmVzdWx0LlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0U3RyaW5nRnJvbUNoYXJDb2RlKGRhdGFWaWV3LCBzdGFydCwgbGVuZ3RoKSB7XG4gICAgdmFyIHN0ciA9ICcnO1xuICAgIHZhciBpO1xuICAgIGxlbmd0aCArPSBzdGFydDtcbiAgICBmb3IgKGkgPSBzdGFydDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBzdHIgKz0gZnJvbUNoYXJDb2RlKGRhdGFWaWV3LmdldFVpbnQ4KGkpKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuICB2YXIgYnRvYSA9IFdJTkRPVy5idG9hO1xuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm0gYXJyYXkgYnVmZmVyIHRvIERhdGEgVVJMLlxuICAgKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBhcnJheUJ1ZmZlciAtIFRoZSBhcnJheSBidWZmZXIgdG8gdHJhbnNmb3JtLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWltZVR5cGUgLSBUaGUgbWltZSB0eXBlIG9mIHRoZSBEYXRhIFVSTC5cbiAgICogQHJldHVybnMge3N0cmluZ30gVGhlIHJlc3VsdCBEYXRhIFVSTC5cbiAgICovXG4gIGZ1bmN0aW9uIGFycmF5QnVmZmVyVG9EYXRhVVJMKGFycmF5QnVmZmVyLCBtaW1lVHlwZSkge1xuICAgIHZhciBjaHVua3MgPSBbXTtcbiAgICB2YXIgY2h1bmtTaXplID0gODE5MjtcbiAgICB2YXIgdWludDggPSBuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcik7XG4gICAgd2hpbGUgKHVpbnQ4Lmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIFhYWDogQmFiZWwncyBgdG9Db25zdW1hYmxlQXJyYXlgIGhlbHBlciB3aWxsIHRocm93IGVycm9yIGluIElFIG9yIFNhZmFyaSA5XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXNwcmVhZFxuICAgICAgY2h1bmtzLnB1c2goZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIHRvQXJyYXkodWludDguc3ViYXJyYXkoMCwgY2h1bmtTaXplKSkpKTtcbiAgICAgIHVpbnQ4ID0gdWludDguc3ViYXJyYXkoY2h1bmtTaXplKTtcbiAgICB9XG4gICAgcmV0dXJuIFwiZGF0YTpcIi5jb25jYXQobWltZVR5cGUsIFwiO2Jhc2U2NCxcIikuY29uY2F0KGJ0b2EoY2h1bmtzLmpvaW4oJycpKSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IG9yaWVudGF0aW9uIHZhbHVlIGZyb20gZ2l2ZW4gYXJyYXkgYnVmZmVyLlxuICAgKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBhcnJheUJ1ZmZlciAtIFRoZSBhcnJheSBidWZmZXIgdG8gcmVhZC5cbiAgICogQHJldHVybnMge251bWJlcn0gVGhlIHJlYWQgb3JpZW50YXRpb24gdmFsdWUuXG4gICAqL1xuICBmdW5jdGlvbiByZXNldEFuZEdldE9yaWVudGF0aW9uKGFycmF5QnVmZmVyKSB7XG4gICAgdmFyIGRhdGFWaWV3ID0gbmV3IERhdGFWaWV3KGFycmF5QnVmZmVyKTtcbiAgICB2YXIgb3JpZW50YXRpb247XG5cbiAgICAvLyBJZ25vcmVzIHJhbmdlIGVycm9yIHdoZW4gdGhlIGltYWdlIGRvZXMgbm90IGhhdmUgY29ycmVjdCBFeGlmIGluZm9ybWF0aW9uXG4gICAgdHJ5IHtcbiAgICAgIHZhciBsaXR0bGVFbmRpYW47XG4gICAgICB2YXIgYXBwMVN0YXJ0O1xuICAgICAgdmFyIGlmZFN0YXJ0O1xuXG4gICAgICAvLyBPbmx5IGhhbmRsZSBKUEVHIGltYWdlIChzdGFydCBieSAweEZGRDgpXG4gICAgICBpZiAoZGF0YVZpZXcuZ2V0VWludDgoMCkgPT09IDB4RkYgJiYgZGF0YVZpZXcuZ2V0VWludDgoMSkgPT09IDB4RDgpIHtcbiAgICAgICAgdmFyIGxlbmd0aCA9IGRhdGFWaWV3LmJ5dGVMZW5ndGg7XG4gICAgICAgIHZhciBvZmZzZXQgPSAyO1xuICAgICAgICB3aGlsZSAob2Zmc2V0ICsgMSA8IGxlbmd0aCkge1xuICAgICAgICAgIGlmIChkYXRhVmlldy5nZXRVaW50OChvZmZzZXQpID09PSAweEZGICYmIGRhdGFWaWV3LmdldFVpbnQ4KG9mZnNldCArIDEpID09PSAweEUxKSB7XG4gICAgICAgICAgICBhcHAxU3RhcnQgPSBvZmZzZXQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgb2Zmc2V0ICs9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChhcHAxU3RhcnQpIHtcbiAgICAgICAgdmFyIGV4aWZJRENvZGUgPSBhcHAxU3RhcnQgKyA0O1xuICAgICAgICB2YXIgdGlmZk9mZnNldCA9IGFwcDFTdGFydCArIDEwO1xuICAgICAgICBpZiAoZ2V0U3RyaW5nRnJvbUNoYXJDb2RlKGRhdGFWaWV3LCBleGlmSURDb2RlLCA0KSA9PT0gJ0V4aWYnKSB7XG4gICAgICAgICAgdmFyIGVuZGlhbm5lc3MgPSBkYXRhVmlldy5nZXRVaW50MTYodGlmZk9mZnNldCk7XG4gICAgICAgICAgbGl0dGxlRW5kaWFuID0gZW5kaWFubmVzcyA9PT0gMHg0OTQ5O1xuICAgICAgICAgIGlmIChsaXR0bGVFbmRpYW4gfHwgZW5kaWFubmVzcyA9PT0gMHg0RDREIC8qIGJpZ0VuZGlhbiAqLykge1xuICAgICAgICAgICAgaWYgKGRhdGFWaWV3LmdldFVpbnQxNih0aWZmT2Zmc2V0ICsgMiwgbGl0dGxlRW5kaWFuKSA9PT0gMHgwMDJBKSB7XG4gICAgICAgICAgICAgIHZhciBmaXJzdElGRE9mZnNldCA9IGRhdGFWaWV3LmdldFVpbnQzMih0aWZmT2Zmc2V0ICsgNCwgbGl0dGxlRW5kaWFuKTtcbiAgICAgICAgICAgICAgaWYgKGZpcnN0SUZET2Zmc2V0ID49IDB4MDAwMDAwMDgpIHtcbiAgICAgICAgICAgICAgICBpZmRTdGFydCA9IHRpZmZPZmZzZXQgKyBmaXJzdElGRE9mZnNldDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGlmZFN0YXJ0KSB7XG4gICAgICAgIHZhciBfbGVuZ3RoID0gZGF0YVZpZXcuZ2V0VWludDE2KGlmZFN0YXJ0LCBsaXR0bGVFbmRpYW4pO1xuICAgICAgICB2YXIgX29mZnNldDtcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBfbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBfb2Zmc2V0ID0gaWZkU3RhcnQgKyBpICogMTIgKyAyO1xuICAgICAgICAgIGlmIChkYXRhVmlldy5nZXRVaW50MTYoX29mZnNldCwgbGl0dGxlRW5kaWFuKSA9PT0gMHgwMTEyIC8qIE9yaWVudGF0aW9uICovKSB7XG4gICAgICAgICAgICAvLyA4IGlzIHRoZSBvZmZzZXQgb2YgdGhlIGN1cnJlbnQgdGFnJ3MgdmFsdWVcbiAgICAgICAgICAgIF9vZmZzZXQgKz0gODtcblxuICAgICAgICAgICAgLy8gR2V0IHRoZSBvcmlnaW5hbCBvcmllbnRhdGlvbiB2YWx1ZVxuICAgICAgICAgICAgb3JpZW50YXRpb24gPSBkYXRhVmlldy5nZXRVaW50MTYoX29mZnNldCwgbGl0dGxlRW5kaWFuKTtcblxuICAgICAgICAgICAgLy8gT3ZlcnJpZGUgdGhlIG9yaWVudGF0aW9uIHdpdGggaXRzIGRlZmF1bHQgdmFsdWVcbiAgICAgICAgICAgIGRhdGFWaWV3LnNldFVpbnQxNihfb2Zmc2V0LCAxLCBsaXR0bGVFbmRpYW4pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgb3JpZW50YXRpb24gPSAxO1xuICAgIH1cbiAgICByZXR1cm4gb3JpZW50YXRpb247XG4gIH1cblxuICAvKipcbiAgICogUGFyc2UgRXhpZiBPcmllbnRhdGlvbiB2YWx1ZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IG9yaWVudGF0aW9uIC0gVGhlIG9yaWVudGF0aW9uIHRvIHBhcnNlLlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgcGFyc2VkIHJlc3VsdC5cbiAgICovXG4gIGZ1bmN0aW9uIHBhcnNlT3JpZW50YXRpb24ob3JpZW50YXRpb24pIHtcbiAgICB2YXIgcm90YXRlID0gMDtcbiAgICB2YXIgc2NhbGVYID0gMTtcbiAgICB2YXIgc2NhbGVZID0gMTtcbiAgICBzd2l0Y2ggKG9yaWVudGF0aW9uKSB7XG4gICAgICAvLyBGbGlwIGhvcml6b250YWxcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgc2NhbGVYID0gLTE7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvLyBSb3RhdGUgbGVmdCAxODBcdTAwQjBcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcm90YXRlID0gLTE4MDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8vIEZsaXAgdmVydGljYWxcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgc2NhbGVZID0gLTE7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvLyBGbGlwIHZlcnRpY2FsIGFuZCByb3RhdGUgcmlnaHQgOTBcdTAwQjBcbiAgICAgIGNhc2UgNTpcbiAgICAgICAgcm90YXRlID0gOTA7XG4gICAgICAgIHNjYWxlWSA9IC0xO1xuICAgICAgICBicmVhaztcblxuICAgICAgLy8gUm90YXRlIHJpZ2h0IDkwXHUwMEIwXG4gICAgICBjYXNlIDY6XG4gICAgICAgIHJvdGF0ZSA9IDkwO1xuICAgICAgICBicmVhaztcblxuICAgICAgLy8gRmxpcCBob3Jpem9udGFsIGFuZCByb3RhdGUgcmlnaHQgOTBcdTAwQjBcbiAgICAgIGNhc2UgNzpcbiAgICAgICAgcm90YXRlID0gOTA7XG4gICAgICAgIHNjYWxlWCA9IC0xO1xuICAgICAgICBicmVhaztcblxuICAgICAgLy8gUm90YXRlIGxlZnQgOTBcdTAwQjBcbiAgICAgIGNhc2UgODpcbiAgICAgICAgcm90YXRlID0gLTkwO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHJvdGF0ZTogcm90YXRlLFxuICAgICAgc2NhbGVYOiBzY2FsZVgsXG4gICAgICBzY2FsZVk6IHNjYWxlWVxuICAgIH07XG4gIH1cbiAgdmFyIFJFR0VYUF9ERUNJTUFMUyA9IC9cXC5cXGQqKD86MHw5KXsxMn1cXGQqJC87XG5cbiAgLyoqXG4gICAqIE5vcm1hbGl6ZSBkZWNpbWFsIG51bWJlci5cbiAgICogQ2hlY2sgb3V0IHtAbGluayBodHRwczovLzAuMzAwMDAwMDAwMDAwMDAwMDQuY29tL31cbiAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIG5vcm1hbGl6ZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IFt0aW1lcz0xMDAwMDAwMDAwMDBdIC0gVGhlIHRpbWVzIGZvciBub3JtYWxpemluZy5cbiAgICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbm9ybWFsaXplZCBudW1iZXIuXG4gICAqL1xuICBmdW5jdGlvbiBub3JtYWxpemVEZWNpbWFsTnVtYmVyKHZhbHVlKSB7XG4gICAgdmFyIHRpbWVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAxMDAwMDAwMDAwMDA7XG4gICAgcmV0dXJuIFJFR0VYUF9ERUNJTUFMUy50ZXN0KHZhbHVlKSA/IE1hdGgucm91bmQodmFsdWUgKiB0aW1lcykgLyB0aW1lcyA6IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbWF4IHNpemVzIGluIGEgcmVjdGFuZ2xlIHVuZGVyIHRoZSBnaXZlbiBhc3BlY3QgcmF0aW8uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gVGhlIG9yaWdpbmFsIHNpemVzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3R5cGU9J2NvbnRhaW4nXSAtIFRoZSBhZGp1c3QgdHlwZS5cbiAgICogQHJldHVybnMge09iamVjdH0gVGhlIHJlc3VsdCBzaXplcy5cbiAgICovXG4gIGZ1bmN0aW9uIGdldEFkanVzdGVkU2l6ZXMoX3JlZikge1xuICAgIHZhciBhc3BlY3RSYXRpbyA9IF9yZWYuYXNwZWN0UmF0aW8sXG4gICAgICBoZWlnaHQgPSBfcmVmLmhlaWdodCxcbiAgICAgIHdpZHRoID0gX3JlZi53aWR0aDtcbiAgICB2YXIgdHlwZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogJ25vbmUnO1xuICAgIHZhciBpc1ZhbGlkV2lkdGggPSBpc1Bvc2l0aXZlTnVtYmVyKHdpZHRoKTtcbiAgICB2YXIgaXNWYWxpZEhlaWdodCA9IGlzUG9zaXRpdmVOdW1iZXIoaGVpZ2h0KTtcbiAgICBpZiAoaXNWYWxpZFdpZHRoICYmIGlzVmFsaWRIZWlnaHQpIHtcbiAgICAgIHZhciBhZGp1c3RlZFdpZHRoID0gaGVpZ2h0ICogYXNwZWN0UmF0aW87XG4gICAgICBpZiAoKHR5cGUgPT09ICdjb250YWluJyB8fCB0eXBlID09PSAnbm9uZScpICYmIGFkanVzdGVkV2lkdGggPiB3aWR0aCB8fCB0eXBlID09PSAnY292ZXInICYmIGFkanVzdGVkV2lkdGggPCB3aWR0aCkge1xuICAgICAgICBoZWlnaHQgPSB3aWR0aCAvIGFzcGVjdFJhdGlvO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2lkdGggPSBoZWlnaHQgKiBhc3BlY3RSYXRpbztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzVmFsaWRXaWR0aCkge1xuICAgICAgaGVpZ2h0ID0gd2lkdGggLyBhc3BlY3RSYXRpbztcbiAgICB9IGVsc2UgaWYgKGlzVmFsaWRIZWlnaHQpIHtcbiAgICAgIHdpZHRoID0gaGVpZ2h0ICogYXNwZWN0UmF0aW87XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogd2lkdGgsXG4gICAgICBoZWlnaHQ6IGhlaWdodFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogR2V0IEV4aWYgaW5mb3JtYXRpb24gZnJvbSB0aGUgZ2l2ZW4gYXJyYXkgYnVmZmVyLlxuICAgKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBhcnJheUJ1ZmZlciAtIFRoZSBhcnJheSBidWZmZXIgdG8gcmVhZC5cbiAgICogQHJldHVybnMge0FycmF5fSBUaGUgcmVhZCBFeGlmIGluZm9ybWF0aW9uLlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0RXhpZihhcnJheUJ1ZmZlcikge1xuICAgIHZhciBhcnJheSA9IHRvQXJyYXkobmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpKTtcbiAgICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICAgIHZhciBzZWdtZW50cyA9IFtdO1xuICAgIHZhciBzdGFydCA9IDA7XG4gICAgd2hpbGUgKHN0YXJ0ICsgMyA8IGxlbmd0aCkge1xuICAgICAgdmFyIHZhbHVlID0gYXJyYXlbc3RhcnRdO1xuICAgICAgdmFyIG5leHQgPSBhcnJheVtzdGFydCArIDFdO1xuXG4gICAgICAvLyBTT1MgKFN0YXJ0IG9mIFNjYW4pXG4gICAgICBpZiAodmFsdWUgPT09IDB4RkYgJiYgbmV4dCA9PT0gMHhEQSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgLy8gU09JIChTdGFydCBvZiBJbWFnZSlcbiAgICAgIGlmICh2YWx1ZSA9PT0gMHhGRiAmJiBuZXh0ID09PSAweEQ4KSB7XG4gICAgICAgIHN0YXJ0ICs9IDI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgb2Zmc2V0ID0gYXJyYXlbc3RhcnQgKyAyXSAqIDI1NiArIGFycmF5W3N0YXJ0ICsgM107XG4gICAgICAgIHZhciBlbmQgPSBzdGFydCArIG9mZnNldCArIDI7XG4gICAgICAgIHZhciBzZWdtZW50ID0gYXJyYXkuc2xpY2Uoc3RhcnQsIGVuZCk7XG4gICAgICAgIHNlZ21lbnRzLnB1c2goc2VnbWVudCk7XG4gICAgICAgIHN0YXJ0ID0gZW5kO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2VnbWVudHMucmVkdWNlKGZ1bmN0aW9uIChleGlmQXJyYXksIGN1cnJlbnQpIHtcbiAgICAgIGlmIChjdXJyZW50WzBdID09PSAweEZGICYmIGN1cnJlbnRbMV0gPT09IDB4RTEpIHtcbiAgICAgICAgcmV0dXJuIGV4aWZBcnJheS5jb25jYXQoY3VycmVudCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZXhpZkFycmF5O1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnNlcnQgRXhpZiBpbmZvcm1hdGlvbiBpbnRvIHRoZSBnaXZlbiBhcnJheSBidWZmZXIuXG4gICAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGFycmF5QnVmZmVyIC0gVGhlIGFycmF5IGJ1ZmZlciB0byB0cmFuc2Zvcm0uXG4gICAqIEBwYXJhbSB7QXJyYXl9IGV4aWZBcnJheSAtIFRoZSBFeGlmIGluZm9ybWF0aW9uIHRvIGluc2VydC5cbiAgICogQHJldHVybnMge0FycmF5QnVmZmVyfSBUaGUgdHJhbnNmb3JtZWQgYXJyYXkgYnVmZmVyLlxuICAgKi9cbiAgZnVuY3Rpb24gaW5zZXJ0RXhpZihhcnJheUJ1ZmZlciwgZXhpZkFycmF5KSB7XG4gICAgdmFyIGFycmF5ID0gdG9BcnJheShuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcikpO1xuICAgIGlmIChhcnJheVsyXSAhPT0gMHhGRiB8fCBhcnJheVszXSAhPT0gMHhFMCkge1xuICAgICAgcmV0dXJuIGFycmF5QnVmZmVyO1xuICAgIH1cbiAgICB2YXIgYXBwMExlbmd0aCA9IGFycmF5WzRdICogMjU2ICsgYXJyYXlbNV07XG4gICAgdmFyIG5ld0FycmF5QnVmZmVyID0gWzB4RkYsIDB4RDhdLmNvbmNhdChleGlmQXJyYXksIGFycmF5LnNsaWNlKDQgKyBhcHAwTGVuZ3RoKSk7XG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KG5ld0FycmF5QnVmZmVyKTtcbiAgfVxuXG4gIHZhciBBcnJheUJ1ZmZlciQxID0gV0lORE9XLkFycmF5QnVmZmVyLFxuICAgIEZpbGVSZWFkZXIgPSBXSU5ET1cuRmlsZVJlYWRlcjtcbiAgdmFyIFVSTCA9IFdJTkRPVy5VUkwgfHwgV0lORE9XLndlYmtpdFVSTDtcbiAgdmFyIFJFR0VYUF9FWFRFTlNJT04gPSAvXFwuXFx3KyQvO1xuICB2YXIgQW5vdGhlckNvbXByZXNzb3IgPSBXSU5ET1cuQ29tcHJlc3NvcjtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBpbWFnZSBjb21wcmVzc29yLlxuICAgKiBAY2xhc3NcbiAgICovXG4gIHZhciBDb21wcmVzc29yID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgY29uc3RydWN0b3Igb2YgQ29tcHJlc3Nvci5cbiAgICAgKiBAcGFyYW0ge0ZpbGV8QmxvYn0gZmlsZSAtIFRoZSB0YXJnZXQgaW1hZ2UgZmlsZSBmb3IgY29tcHJlc3NpbmcuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIFRoZSBvcHRpb25zIGZvciBjb21wcmVzc2luZy5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBDb21wcmVzc29yKGZpbGUsIG9wdGlvbnMpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb21wcmVzc29yKTtcbiAgICAgIHRoaXMuZmlsZSA9IGZpbGU7XG4gICAgICB0aGlzLmV4aWYgPSBbXTtcbiAgICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIHRoaXMub3B0aW9ucyA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBERUZBVUxUUyksIG9wdGlvbnMpO1xuICAgICAgdGhpcy5hYm9ydGVkID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc3VsdCA9IG51bGw7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG4gICAgX2NyZWF0ZUNsYXNzKENvbXByZXNzb3IsIFt7XG4gICAgICBrZXk6IFwiaW5pdFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBmaWxlID0gdGhpcy5maWxlLFxuICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGlmICghaXNCbG9iKGZpbGUpKSB7XG4gICAgICAgICAgdGhpcy5mYWlsKG5ldyBFcnJvcignVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBGaWxlIG9yIEJsb2Igb2JqZWN0LicpKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1pbWVUeXBlID0gZmlsZS50eXBlO1xuICAgICAgICBpZiAoIWlzSW1hZ2VUeXBlKG1pbWVUeXBlKSkge1xuICAgICAgICAgIHRoaXMuZmFpbChuZXcgRXJyb3IoJ1RoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGFuIGltYWdlIEZpbGUgb3IgQmxvYiBvYmplY3QuJykpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVVSTCB8fCAhRmlsZVJlYWRlcikge1xuICAgICAgICAgIHRoaXMuZmFpbChuZXcgRXJyb3IoJ1RoZSBjdXJyZW50IGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBpbWFnZSBjb21wcmVzc2lvbi4nKSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghQXJyYXlCdWZmZXIkMSkge1xuICAgICAgICAgIG9wdGlvbnMuY2hlY2tPcmllbnRhdGlvbiA9IGZhbHNlO1xuICAgICAgICAgIG9wdGlvbnMucmV0YWluRXhpZiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpc0pQRUdJbWFnZSA9IG1pbWVUeXBlID09PSAnaW1hZ2UvanBlZyc7XG4gICAgICAgIHZhciBjaGVja09yaWVudGF0aW9uID0gaXNKUEVHSW1hZ2UgJiYgb3B0aW9ucy5jaGVja09yaWVudGF0aW9uO1xuICAgICAgICB2YXIgcmV0YWluRXhpZiA9IGlzSlBFR0ltYWdlICYmIG9wdGlvbnMucmV0YWluRXhpZjtcbiAgICAgICAgaWYgKFVSTCAmJiAhY2hlY2tPcmllbnRhdGlvbiAmJiAhcmV0YWluRXhpZikge1xuICAgICAgICAgIHRoaXMubG9hZCh7XG4gICAgICAgICAgICB1cmw6IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSlcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICB0aGlzLnJlYWRlciA9IHJlYWRlcjtcbiAgICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBfcmVmLnRhcmdldDtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB7fTtcbiAgICAgICAgICAgIHZhciBvcmllbnRhdGlvbiA9IDE7XG4gICAgICAgICAgICBpZiAoY2hlY2tPcmllbnRhdGlvbikge1xuICAgICAgICAgICAgICAvLyBSZXNldCB0aGUgb3JpZW50YXRpb24gdmFsdWUgdG8gaXRzIGRlZmF1bHQgdmFsdWUgMVxuICAgICAgICAgICAgICAvLyBhcyBzb21lIGlPUyBicm93c2VycyB3aWxsIHJlbmRlciBpbWFnZSB3aXRoIGl0cyBvcmllbnRhdGlvblxuICAgICAgICAgICAgICBvcmllbnRhdGlvbiA9IHJlc2V0QW5kR2V0T3JpZW50YXRpb24ocmVzdWx0KTtcbiAgICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID4gMSkge1xuICAgICAgICAgICAgICAgIF9leHRlbmRzKGRhdGEsIHBhcnNlT3JpZW50YXRpb24ob3JpZW50YXRpb24pKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJldGFpbkV4aWYpIHtcbiAgICAgICAgICAgICAgX3RoaXMuZXhpZiA9IGdldEV4aWYocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaGVja09yaWVudGF0aW9uIHx8IHJldGFpbkV4aWYpIHtcbiAgICAgICAgICAgICAgaWYgKCFVUkxcblxuICAgICAgICAgICAgICAvLyBHZW5lcmF0ZSBhIG5ldyBVUkwgd2l0aCB0aGUgZGVmYXVsdCBvcmllbnRhdGlvbiB2YWx1ZSAxLlxuICAgICAgICAgICAgICB8fCBvcmllbnRhdGlvbiA+IDEpIHtcbiAgICAgICAgICAgICAgICBkYXRhLnVybCA9IGFycmF5QnVmZmVyVG9EYXRhVVJMKHJlc3VsdCwgbWltZVR5cGUpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGEudXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGF0YS51cmwgPSByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy5sb2FkKGRhdGEpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgcmVhZGVyLm9uYWJvcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5mYWlsKG5ldyBFcnJvcignQWJvcnRlZCB0byByZWFkIHRoZSBpbWFnZSB3aXRoIEZpbGVSZWFkZXIuJykpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5mYWlsKG5ldyBFcnJvcignRmFpbGVkIHRvIHJlYWQgdGhlIGltYWdlIHdpdGggRmlsZVJlYWRlci4nKSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMucmVhZGVyID0gbnVsbDtcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmIChjaGVja09yaWVudGF0aW9uIHx8IHJldGFpbkV4aWYpIHtcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihmaWxlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImxvYWRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkKGRhdGEpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG4gICAgICAgIHZhciBmaWxlID0gdGhpcy5maWxlLFxuICAgICAgICAgIGltYWdlID0gdGhpcy5pbWFnZTtcbiAgICAgICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMi5kcmF3KF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBkYXRhKSwge30sIHtcbiAgICAgICAgICAgIG5hdHVyYWxXaWR0aDogaW1hZ2UubmF0dXJhbFdpZHRoLFxuICAgICAgICAgICAgbmF0dXJhbEhlaWdodDogaW1hZ2UubmF0dXJhbEhlaWdodFxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfTtcbiAgICAgICAgaW1hZ2Uub25hYm9ydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczIuZmFpbChuZXcgRXJyb3IoJ0Fib3J0ZWQgdG8gbG9hZCB0aGUgaW1hZ2UuJykpO1xuICAgICAgICB9O1xuICAgICAgICBpbWFnZS5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMi5mYWlsKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgdGhlIGltYWdlLicpKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBNYXRjaCBhbGwgYnJvd3NlcnMgdGhhdCB1c2UgV2ViS2l0IGFzIHRoZSBsYXlvdXQgZW5naW5lIGluIGlPUyBkZXZpY2VzLFxuICAgICAgICAvLyBzdWNoIGFzIFNhZmFyaSBmb3IgaU9TLCBDaHJvbWUgZm9yIGlPUywgYW5kIGluLWFwcCBicm93c2Vycy5cbiAgICAgICAgaWYgKFdJTkRPVy5uYXZpZ2F0b3IgJiYgLyg/OmlQYWR8aVBob25lfGlQb2QpLio/QXBwbGVXZWJLaXQvaS50ZXN0KFdJTkRPVy5uYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICAgIC8vIEZpeCB0aGUgYFRoZSBvcGVyYXRpb24gaXMgaW5zZWN1cmVgIGVycm9yICgjNTcpXG4gICAgICAgICAgaW1hZ2UuY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJztcbiAgICAgICAgfVxuICAgICAgICBpbWFnZS5hbHQgPSBmaWxlLm5hbWU7XG4gICAgICAgIGltYWdlLnNyYyA9IGRhdGEudXJsO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJkcmF3XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZHJhdyhfcmVmMikge1xuICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcbiAgICAgICAgdmFyIG5hdHVyYWxXaWR0aCA9IF9yZWYyLm5hdHVyYWxXaWR0aCxcbiAgICAgICAgICBuYXR1cmFsSGVpZ2h0ID0gX3JlZjIubmF0dXJhbEhlaWdodCxcbiAgICAgICAgICBfcmVmMiRyb3RhdGUgPSBfcmVmMi5yb3RhdGUsXG4gICAgICAgICAgcm90YXRlID0gX3JlZjIkcm90YXRlID09PSB2b2lkIDAgPyAwIDogX3JlZjIkcm90YXRlLFxuICAgICAgICAgIF9yZWYyJHNjYWxlWCA9IF9yZWYyLnNjYWxlWCxcbiAgICAgICAgICBzY2FsZVggPSBfcmVmMiRzY2FsZVggPT09IHZvaWQgMCA/IDEgOiBfcmVmMiRzY2FsZVgsXG4gICAgICAgICAgX3JlZjIkc2NhbGVZID0gX3JlZjIuc2NhbGVZLFxuICAgICAgICAgIHNjYWxlWSA9IF9yZWYyJHNjYWxlWSA9PT0gdm9pZCAwID8gMSA6IF9yZWYyJHNjYWxlWTtcbiAgICAgICAgdmFyIGZpbGUgPSB0aGlzLmZpbGUsXG4gICAgICAgICAgaW1hZ2UgPSB0aGlzLmltYWdlLFxuICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdmFyIGlzOTBEZWdyZWVzUm90YXRlZCA9IE1hdGguYWJzKHJvdGF0ZSkgJSAxODAgPT09IDkwO1xuICAgICAgICB2YXIgcmVzaXphYmxlID0gKG9wdGlvbnMucmVzaXplID09PSAnY29udGFpbicgfHwgb3B0aW9ucy5yZXNpemUgPT09ICdjb3ZlcicpICYmIGlzUG9zaXRpdmVOdW1iZXIob3B0aW9ucy53aWR0aCkgJiYgaXNQb3NpdGl2ZU51bWJlcihvcHRpb25zLmhlaWdodCk7XG4gICAgICAgIHZhciBtYXhXaWR0aCA9IE1hdGgubWF4KG9wdGlvbnMubWF4V2lkdGgsIDApIHx8IEluZmluaXR5O1xuICAgICAgICB2YXIgbWF4SGVpZ2h0ID0gTWF0aC5tYXgob3B0aW9ucy5tYXhIZWlnaHQsIDApIHx8IEluZmluaXR5O1xuICAgICAgICB2YXIgbWluV2lkdGggPSBNYXRoLm1heChvcHRpb25zLm1pbldpZHRoLCAwKSB8fCAwO1xuICAgICAgICB2YXIgbWluSGVpZ2h0ID0gTWF0aC5tYXgob3B0aW9ucy5taW5IZWlnaHQsIDApIHx8IDA7XG4gICAgICAgIHZhciBhc3BlY3RSYXRpbyA9IG5hdHVyYWxXaWR0aCAvIG5hdHVyYWxIZWlnaHQ7XG4gICAgICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XG4gICAgICAgIGlmIChpczkwRGVncmVlc1JvdGF0ZWQpIHtcbiAgICAgICAgICB2YXIgX3JlZjMgPSBbbWF4SGVpZ2h0LCBtYXhXaWR0aF07XG4gICAgICAgICAgbWF4V2lkdGggPSBfcmVmM1swXTtcbiAgICAgICAgICBtYXhIZWlnaHQgPSBfcmVmM1sxXTtcbiAgICAgICAgICB2YXIgX3JlZjQgPSBbbWluSGVpZ2h0LCBtaW5XaWR0aF07XG4gICAgICAgICAgbWluV2lkdGggPSBfcmVmNFswXTtcbiAgICAgICAgICBtaW5IZWlnaHQgPSBfcmVmNFsxXTtcbiAgICAgICAgICB2YXIgX3JlZjUgPSBbaGVpZ2h0LCB3aWR0aF07XG4gICAgICAgICAgd2lkdGggPSBfcmVmNVswXTtcbiAgICAgICAgICBoZWlnaHQgPSBfcmVmNVsxXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzaXphYmxlKSB7XG4gICAgICAgICAgYXNwZWN0UmF0aW8gPSB3aWR0aCAvIGhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgX2dldEFkanVzdGVkU2l6ZXMgPSBnZXRBZGp1c3RlZFNpemVzKHtcbiAgICAgICAgICBhc3BlY3RSYXRpbzogYXNwZWN0UmF0aW8sXG4gICAgICAgICAgd2lkdGg6IG1heFdpZHRoLFxuICAgICAgICAgIGhlaWdodDogbWF4SGVpZ2h0XG4gICAgICAgIH0sICdjb250YWluJyk7XG4gICAgICAgIG1heFdpZHRoID0gX2dldEFkanVzdGVkU2l6ZXMud2lkdGg7XG4gICAgICAgIG1heEhlaWdodCA9IF9nZXRBZGp1c3RlZFNpemVzLmhlaWdodDtcbiAgICAgICAgdmFyIF9nZXRBZGp1c3RlZFNpemVzMiA9IGdldEFkanVzdGVkU2l6ZXMoe1xuICAgICAgICAgIGFzcGVjdFJhdGlvOiBhc3BlY3RSYXRpbyxcbiAgICAgICAgICB3aWR0aDogbWluV2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBtaW5IZWlnaHRcbiAgICAgICAgfSwgJ2NvdmVyJyk7XG4gICAgICAgIG1pbldpZHRoID0gX2dldEFkanVzdGVkU2l6ZXMyLndpZHRoO1xuICAgICAgICBtaW5IZWlnaHQgPSBfZ2V0QWRqdXN0ZWRTaXplczIuaGVpZ2h0O1xuICAgICAgICBpZiAocmVzaXphYmxlKSB7XG4gICAgICAgICAgdmFyIF9nZXRBZGp1c3RlZFNpemVzMyA9IGdldEFkanVzdGVkU2l6ZXMoe1xuICAgICAgICAgICAgYXNwZWN0UmF0aW86IGFzcGVjdFJhdGlvLFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICAgICAgICB9LCBvcHRpb25zLnJlc2l6ZSk7XG4gICAgICAgICAgd2lkdGggPSBfZ2V0QWRqdXN0ZWRTaXplczMud2lkdGg7XG4gICAgICAgICAgaGVpZ2h0ID0gX2dldEFkanVzdGVkU2l6ZXMzLmhlaWdodDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgX2dldEFkanVzdGVkU2l6ZXM0ID0gZ2V0QWRqdXN0ZWRTaXplcyh7XG4gICAgICAgICAgICBhc3BlY3RSYXRpbzogYXNwZWN0UmF0aW8sXG4gICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHZhciBfZ2V0QWRqdXN0ZWRTaXplczQkd2kgPSBfZ2V0QWRqdXN0ZWRTaXplczQud2lkdGg7XG4gICAgICAgICAgd2lkdGggPSBfZ2V0QWRqdXN0ZWRTaXplczQkd2kgPT09IHZvaWQgMCA/IG5hdHVyYWxXaWR0aCA6IF9nZXRBZGp1c3RlZFNpemVzNCR3aTtcbiAgICAgICAgICB2YXIgX2dldEFkanVzdGVkU2l6ZXM0JGhlID0gX2dldEFkanVzdGVkU2l6ZXM0LmhlaWdodDtcbiAgICAgICAgICBoZWlnaHQgPSBfZ2V0QWRqdXN0ZWRTaXplczQkaGUgPT09IHZvaWQgMCA/IG5hdHVyYWxIZWlnaHQgOiBfZ2V0QWRqdXN0ZWRTaXplczQkaGU7XG4gICAgICAgIH1cbiAgICAgICAgd2lkdGggPSBNYXRoLmZsb29yKG5vcm1hbGl6ZURlY2ltYWxOdW1iZXIoTWF0aC5taW4oTWF0aC5tYXgod2lkdGgsIG1pbldpZHRoKSwgbWF4V2lkdGgpKSk7XG4gICAgICAgIGhlaWdodCA9IE1hdGguZmxvb3Iobm9ybWFsaXplRGVjaW1hbE51bWJlcihNYXRoLm1pbihNYXRoLm1heChoZWlnaHQsIG1pbkhlaWdodCksIG1heEhlaWdodCkpKTtcbiAgICAgICAgdmFyIGRlc3RYID0gLXdpZHRoIC8gMjtcbiAgICAgICAgdmFyIGRlc3RZID0gLWhlaWdodCAvIDI7XG4gICAgICAgIHZhciBkZXN0V2lkdGggPSB3aWR0aDtcbiAgICAgICAgdmFyIGRlc3RIZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHZhciBwYXJhbXMgPSBbXTtcbiAgICAgICAgaWYgKHJlc2l6YWJsZSkge1xuICAgICAgICAgIHZhciBzcmNYID0gMDtcbiAgICAgICAgICB2YXIgc3JjWSA9IDA7XG4gICAgICAgICAgdmFyIHNyY1dpZHRoID0gbmF0dXJhbFdpZHRoO1xuICAgICAgICAgIHZhciBzcmNIZWlnaHQgPSBuYXR1cmFsSGVpZ2h0O1xuICAgICAgICAgIHZhciBfZ2V0QWRqdXN0ZWRTaXplczUgPSBnZXRBZGp1c3RlZFNpemVzKHtcbiAgICAgICAgICAgIGFzcGVjdFJhdGlvOiBhc3BlY3RSYXRpbyxcbiAgICAgICAgICAgIHdpZHRoOiBuYXR1cmFsV2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IG5hdHVyYWxIZWlnaHRcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBjb250YWluOiAnY292ZXInLFxuICAgICAgICAgICAgY292ZXI6ICdjb250YWluJ1xuICAgICAgICAgIH1bb3B0aW9ucy5yZXNpemVdKTtcbiAgICAgICAgICBzcmNXaWR0aCA9IF9nZXRBZGp1c3RlZFNpemVzNS53aWR0aDtcbiAgICAgICAgICBzcmNIZWlnaHQgPSBfZ2V0QWRqdXN0ZWRTaXplczUuaGVpZ2h0O1xuICAgICAgICAgIHNyY1ggPSAobmF0dXJhbFdpZHRoIC0gc3JjV2lkdGgpIC8gMjtcbiAgICAgICAgICBzcmNZID0gKG5hdHVyYWxIZWlnaHQgLSBzcmNIZWlnaHQpIC8gMjtcbiAgICAgICAgICBwYXJhbXMucHVzaChzcmNYLCBzcmNZLCBzcmNXaWR0aCwgc3JjSGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgICBwYXJhbXMucHVzaChkZXN0WCwgZGVzdFksIGRlc3RXaWR0aCwgZGVzdEhlaWdodCk7XG4gICAgICAgIGlmIChpczkwRGVncmVlc1JvdGF0ZWQpIHtcbiAgICAgICAgICB2YXIgX3JlZjYgPSBbaGVpZ2h0LCB3aWR0aF07XG4gICAgICAgICAgd2lkdGggPSBfcmVmNlswXTtcbiAgICAgICAgICBoZWlnaHQgPSBfcmVmNlsxXTtcbiAgICAgICAgfVxuICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgaWYgKCFpc0ltYWdlVHlwZShvcHRpb25zLm1pbWVUeXBlKSkge1xuICAgICAgICAgIG9wdGlvbnMubWltZVR5cGUgPSBmaWxlLnR5cGU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGZpbGxTdHlsZSA9ICd0cmFuc3BhcmVudCc7XG5cbiAgICAgICAgLy8gQ29udmVydHMgUE5HIGZpbGVzIG92ZXIgdGhlIGBjb252ZXJ0U2l6ZWAgdG8gSlBFR3MuXG4gICAgICAgIGlmIChmaWxlLnNpemUgPiBvcHRpb25zLmNvbnZlcnRTaXplICYmIG9wdGlvbnMuY29udmVydFR5cGVzLmluZGV4T2Yob3B0aW9ucy5taW1lVHlwZSkgPj0gMCkge1xuICAgICAgICAgIG9wdGlvbnMubWltZVR5cGUgPSAnaW1hZ2UvanBlZyc7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGlzSlBFR0ltYWdlID0gb3B0aW9ucy5taW1lVHlwZSA9PT0gJ2ltYWdlL2pwZWcnO1xuICAgICAgICBpZiAoaXNKUEVHSW1hZ2UpIHtcbiAgICAgICAgICBmaWxsU3R5bGUgPSAnI2ZmZic7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBPdmVycmlkZSB0aGUgZGVmYXVsdCBmaWxsIGNvbG9yICgjMDAwLCBibGFjaylcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBmaWxsU3R5bGU7XG4gICAgICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIGlmIChvcHRpb25zLmJlZm9yZURyYXcpIHtcbiAgICAgICAgICBvcHRpb25zLmJlZm9yZURyYXcuY2FsbCh0aGlzLCBjb250ZXh0LCBjYW52YXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmFib3J0ZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dC5zYXZlKCk7XG4gICAgICAgIGNvbnRleHQudHJhbnNsYXRlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMik7XG4gICAgICAgIGNvbnRleHQucm90YXRlKHJvdGF0ZSAqIE1hdGguUEkgLyAxODApO1xuICAgICAgICBjb250ZXh0LnNjYWxlKHNjYWxlWCwgc2NhbGVZKTtcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UuYXBwbHkoY29udGV4dCwgW2ltYWdlXS5jb25jYXQocGFyYW1zKSk7XG4gICAgICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICAgICAgICBpZiAob3B0aW9ucy5kcmV3KSB7XG4gICAgICAgICAgb3B0aW9ucy5kcmV3LmNhbGwodGhpcywgY29udGV4dCwgY2FudmFzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5hYm9ydGVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uIGNhbGxiYWNrKGJsb2IpIHtcbiAgICAgICAgICBpZiAoIV90aGlzMy5hYm9ydGVkKSB7XG4gICAgICAgICAgICB2YXIgZG9uZSA9IGZ1bmN0aW9uIGRvbmUocmVzdWx0KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdGhpczMuZG9uZSh7XG4gICAgICAgICAgICAgICAgbmF0dXJhbFdpZHRoOiBuYXR1cmFsV2lkdGgsXG4gICAgICAgICAgICAgICAgbmF0dXJhbEhlaWdodDogbmF0dXJhbEhlaWdodCxcbiAgICAgICAgICAgICAgICByZXN1bHQ6IHJlc3VsdFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoYmxvYiAmJiBpc0pQRUdJbWFnZSAmJiBvcHRpb25zLnJldGFpbkV4aWYgJiYgX3RoaXMzLmV4aWYgJiYgX3RoaXMzLmV4aWYubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICB2YXIgbmV4dCA9IGZ1bmN0aW9uIG5leHQoYXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9uZSh0b0Jsb2IoYXJyYXlCdWZmZXJUb0RhdGFVUkwoaW5zZXJ0RXhpZihhcnJheUJ1ZmZlciwgX3RoaXMzLmV4aWYpLCBvcHRpb25zLm1pbWVUeXBlKSkpO1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBpZiAoYmxvYi5hcnJheUJ1ZmZlcikge1xuICAgICAgICAgICAgICAgIGJsb2IuYXJyYXlCdWZmZXIoKS50aGVuKG5leHQpLmNhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIF90aGlzMy5mYWlsKG5ldyBFcnJvcignRmFpbGVkIHRvIHJlYWQgdGhlIGNvbXByZXNzZWQgaW1hZ2Ugd2l0aCBCbG9iLmFycmF5QnVmZmVyKCkuJykpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgICAgIF90aGlzMy5yZWFkZXIgPSByZWFkZXI7XG4gICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChfcmVmNykge1xuICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IF9yZWY3LnRhcmdldDtcbiAgICAgICAgICAgICAgICAgIG5leHQodGFyZ2V0LnJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZWFkZXIub25hYm9ydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIF90aGlzMy5mYWlsKG5ldyBFcnJvcignQWJvcnRlZCB0byByZWFkIHRoZSBjb21wcmVzc2VkIGltYWdlIHdpdGggRmlsZVJlYWRlci4nKSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZWFkZXIub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIF90aGlzMy5mYWlsKG5ldyBFcnJvcignRmFpbGVkIHRvIHJlYWQgdGhlIGNvbXByZXNzZWQgaW1hZ2Ugd2l0aCBGaWxlUmVhZGVyLicpKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICBfdGhpczMucmVhZGVyID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZG9uZShibG9iKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGlmIChjYW52YXMudG9CbG9iKSB7XG4gICAgICAgICAgY2FudmFzLnRvQmxvYihjYWxsYmFjaywgb3B0aW9ucy5taW1lVHlwZSwgb3B0aW9ucy5xdWFsaXR5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYWxsYmFjayh0b0Jsb2IoY2FudmFzLnRvRGF0YVVSTChvcHRpb25zLm1pbWVUeXBlLCBvcHRpb25zLnF1YWxpdHkpKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZG9uZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRvbmUoX3JlZjgpIHtcbiAgICAgICAgdmFyIG5hdHVyYWxXaWR0aCA9IF9yZWY4Lm5hdHVyYWxXaWR0aCxcbiAgICAgICAgICBuYXR1cmFsSGVpZ2h0ID0gX3JlZjgubmF0dXJhbEhlaWdodCxcbiAgICAgICAgICByZXN1bHQgPSBfcmVmOC5yZXN1bHQ7XG4gICAgICAgIHZhciBmaWxlID0gdGhpcy5maWxlLFxuICAgICAgICAgIGltYWdlID0gdGhpcy5pbWFnZSxcbiAgICAgICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBpZiAoVVJMICYmIGltYWdlLnNyYy5pbmRleE9mKCdibG9iOicpID09PSAwKSB7XG4gICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChpbWFnZS5zcmMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAvLyBSZXR1cm5zIG9yaWdpbmFsIGZpbGUgaWYgdGhlIHJlc3VsdCBpcyBncmVhdGVyIHRoYW4gaXQgYW5kIHdpdGhvdXQgc2l6ZSByZWxhdGVkIG9wdGlvbnNcbiAgICAgICAgICBpZiAob3B0aW9ucy5zdHJpY3QgJiYgIW9wdGlvbnMucmV0YWluRXhpZiAmJiByZXN1bHQuc2l6ZSA+IGZpbGUuc2l6ZSAmJiBvcHRpb25zLm1pbWVUeXBlID09PSBmaWxlLnR5cGUgJiYgIShvcHRpb25zLndpZHRoID4gbmF0dXJhbFdpZHRoIHx8IG9wdGlvbnMuaGVpZ2h0ID4gbmF0dXJhbEhlaWdodCB8fCBvcHRpb25zLm1pbldpZHRoID4gbmF0dXJhbFdpZHRoIHx8IG9wdGlvbnMubWluSGVpZ2h0ID4gbmF0dXJhbEhlaWdodCB8fCBvcHRpb25zLm1heFdpZHRoIDwgbmF0dXJhbFdpZHRoIHx8IG9wdGlvbnMubWF4SGVpZ2h0IDwgbmF0dXJhbEhlaWdodCkpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGZpbGU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIHJlc3VsdC5sYXN0TW9kaWZpZWQgPSBkYXRlLmdldFRpbWUoKTtcbiAgICAgICAgICAgIHJlc3VsdC5sYXN0TW9kaWZpZWREYXRlID0gZGF0ZTtcbiAgICAgICAgICAgIHJlc3VsdC5uYW1lID0gZmlsZS5uYW1lO1xuXG4gICAgICAgICAgICAvLyBDb252ZXJ0IHRoZSBleHRlbnNpb24gdG8gbWF0Y2ggaXRzIHR5cGVcbiAgICAgICAgICAgIGlmIChyZXN1bHQubmFtZSAmJiByZXN1bHQudHlwZSAhPT0gZmlsZS50eXBlKSB7XG4gICAgICAgICAgICAgIHJlc3VsdC5uYW1lID0gcmVzdWx0Lm5hbWUucmVwbGFjZShSRUdFWFBfRVhURU5TSU9OLCBpbWFnZVR5cGVUb0V4dGVuc2lvbihyZXN1bHQudHlwZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBSZXR1cm5zIG9yaWdpbmFsIGZpbGUgaWYgdGhlIHJlc3VsdCBpcyBudWxsIGluIHNvbWUgY2FzZXMuXG4gICAgICAgICAgcmVzdWx0ID0gZmlsZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlc3VsdCA9IHJlc3VsdDtcbiAgICAgICAgaWYgKG9wdGlvbnMuc3VjY2Vzcykge1xuICAgICAgICAgIG9wdGlvbnMuc3VjY2Vzcy5jYWxsKHRoaXMsIHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZmFpbFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGZhaWwoZXJyKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBpZiAob3B0aW9ucy5lcnJvcikge1xuICAgICAgICAgIG9wdGlvbnMuZXJyb3IuY2FsbCh0aGlzLCBlcnIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJhYm9ydFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFib3J0KCkge1xuICAgICAgICBpZiAoIXRoaXMuYWJvcnRlZCkge1xuICAgICAgICAgIHRoaXMuYWJvcnRlZCA9IHRydWU7XG4gICAgICAgICAgaWYgKHRoaXMucmVhZGVyKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWRlci5hYm9ydCgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuaW1hZ2UuY29tcGxldGUpIHtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2Uub25sb2FkID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2Uub25hYm9ydCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZhaWwobmV3IEVycm9yKCdUaGUgY29tcHJlc3Npb24gcHJvY2VzcyBoYXMgYmVlbiBhYm9ydGVkLicpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBHZXQgdGhlIG5vIGNvbmZsaWN0IGNvbXByZXNzb3IgY2xhc3MuXG4gICAgICAgKiBAcmV0dXJucyB7Q29tcHJlc3Nvcn0gVGhlIGNvbXByZXNzb3IgY2xhc3MuXG4gICAgICAgKi9cbiAgICB9XSwgW3tcbiAgICAgIGtleTogXCJub0NvbmZsaWN0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gbm9Db25mbGljdCgpIHtcbiAgICAgICAgd2luZG93LkNvbXByZXNzb3IgPSBBbm90aGVyQ29tcHJlc3NvcjtcbiAgICAgICAgcmV0dXJuIENvbXByZXNzb3I7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2hhbmdlIHRoZSBkZWZhdWx0IG9wdGlvbnMuXG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFRoZSBuZXcgZGVmYXVsdCBvcHRpb25zLlxuICAgICAgICovXG4gICAgfSwge1xuICAgICAga2V5OiBcInNldERlZmF1bHRzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0RGVmYXVsdHMob3B0aW9ucykge1xuICAgICAgICBfZXh0ZW5kcyhERUZBVUxUUywgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBDb21wcmVzc29yO1xuICB9KCk7XG5cbiAgcmV0dXJuIENvbXByZXNzb3I7XG5cbn0pKTtcbiIsICJpbXBvcnQgeyBNYXJrZG93blZpZXcsIE5vdGljZSwgUGx1Z2luLCBURmlsZSwgbm9ybWFsaXplUGF0aCB9IGZyb20gXCJvYnNpZGlhblwiO1xuaW1wb3J0IHsgREVGQVVMVF9TRVRUSU5HUywgQ2FtZXJhRW1iZWRTZXR0aW5ncywgQ2FtZXJhRW1iZWRTZXR0aW5nVGFiIH0gZnJvbSBcIi4vc2V0dGluZ3MuanNcIjtcbmltcG9ydCB7IGNvbXByZXNzSW1hZ2UgfSBmcm9tIFwiLi9jb21wcmVzc29yLmpzXCI7XG5pbXBvcnQgeyBidWlsZEZpbGVOYW1lLCBmb2xkZXJFeGlzdHMsIGdldEF2YWlsYWJsZVBhdGgsIGpvaW5QYXRoIH0gZnJvbSBcIi4vZmlsZS11dGlscy5qc1wiO1xuaW1wb3J0IHsgcGlja0ltYWdlcyB9IGZyb20gXCIuL2lucHV0LXV0aWxzLmpzXCI7XG5pbXBvcnQgeyBHYWxsZXJ5TW9kYWwgfSBmcm9tIFwiLi9nYWxsZXJ5LW1vZGFsLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbWVyYUVtYmVkUGx1Z2luIGV4dGVuZHMgUGx1Z2luIHtcbiAgc2V0dGluZ3M6IENhbWVyYUVtYmVkU2V0dGluZ3MgPSBERUZBVUxUX1NFVFRJTkdTO1xuXG4gIGFzeW5jIG9ubG9hZCgpIHtcbiAgICBhd2FpdCB0aGlzLmxvYWRTZXR0aW5ncygpO1xuICAgIHRoaXMubm9ybWFsaXplR2FsbGVyeVNldHRpbmdzKCk7XG4gICAgYXdhaXQgdGhpcy5zYXZlU2V0dGluZ3MoKTtcbiAgICB0aGlzLmFkZFNldHRpbmdUYWIobmV3IENhbWVyYUVtYmVkU2V0dGluZ1RhYih0aGlzLmFwcCwgdGhpcykpO1xuXG4gICAgY29uc3QgaWNvbmMgPSB0aGlzLnNldHRpbmdzLmdhbGxlcnlFbmFibGVkID8gXCJpbWFnZXNcIiA6IFwiY2FtZXJhXCI7XG5cbiAgICB0aGlzLmFkZFJpYmJvbkljb24oaWNvbmMsIFwiQ2FwdHVyZSBwaG90b1wiLCAoKSA9PiB2b2lkIHRoaXMuY2FwdHVyZVBob3RvKCkpO1xuICAgIHRoaXMuYWRkQ29tbWFuZCh7IGlkOiBcImNhcHR1cmUtcGhvdG8tZW1iZWRcIiwgbmFtZTogXCJDYXB0dXJlIHBob3RvIGFuZCBlbWJlZFwiLCBpY29uOiBpY29uYywgY2FsbGJhY2s6ICgpID0+IHZvaWQgdGhpcy5jYXB0dXJlUGhvdG8oKSB9KTtcbiAgfVxuXG4gIHByaXZhdGUgbm9ybWFsaXplR2FsbGVyeVNldHRpbmdzKCkge1xuICAgIGlmICh0aGlzLnNldHRpbmdzLmdhbGxlcnlFbmFibGVkKSB0aGlzLnNldHRpbmdzLnNhdmVOZWFyVGhlTm90ZSA9IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBjYXB0dXJlUGhvdG8oKSB7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuZ2FsbGVyeUVuYWJsZWQpIHRoaXMub3BlbkdhbGxlcnkoKTtcbiAgICBlbHNlIHZvaWQgdGhpcy5jYXB0dXJlRGlyZWN0bHkoKTtcbiAgfVxuXG4gIHByaXZhdGUgb3BlbkdhbGxlcnkoKSB7XG4gICAgY29uc3QgdmlldyA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1hcmtkb3duVmlldyk7XG4gICAgaWYgKCF2aWV3Py5maWxlKSB7XG4gICAgICBuZXcgTm90aWNlKFwiT3BlbiBhIE1hcmtkb3duIG5vdGUgYmVmb3JlIHVzaW5nIHRoZSBjYW1lcmEgZ2FsbGVyeS5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGZvbGRlciA9IHRoaXMuc2V0dGluZ3MucGhvdG9zRm9sZGVyLnRyaW0oKTtcbiAgICBpZiAoIWZvbGRlcikge1xuICAgICAgbmV3IE5vdGljZShcIlNldCBhIHBob3RvcyBmb2xkZXIgaW4gY2FtZXJhIGVtYmVkIHNldHRpbmdzIGJlZm9yZSB1c2luZyB0aGUgZ2FsbGVyeS5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG5ldyBHYWxsZXJ5TW9kYWwodGhpcy5hcHAsIGZvbGRlciwgdGhpcy5zZXR0aW5ncy5jcmVhdGVGb2xkZXJJZk1pc3NpbmcsIChmaWxlcykgPT4ge1xuICAgICAgaWYgKGZpbGVzLmxlbmd0aCA+IDApIHZvaWQgdGhpcy5lbWJlZFZhdWx0RmlsZXMoZmlsZXMsIHZpZXcpO1xuICAgIH0pLm9wZW4oKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgY2FwdHVyZURpcmVjdGx5KCkge1xuICAgIGNvbnN0IHZpZXcgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlVmlld09mVHlwZShNYXJrZG93blZpZXcpO1xuICAgIGlmICghdmlldz8uZmlsZSkge1xuICAgICAgbmV3IE5vdGljZShcIlBsZWFzZSBvcGVuIGEgTWFya2Rvd24gbm90ZSB0byBpbnNlcnQgdGhlIHBob3RvLlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZmlsZXMgPSBhd2FpdCBwaWNrSW1hZ2VzKFwiY2FtZXJhXCIpO1xuICAgIGlmIChmaWxlcy5sZW5ndGggPiAwKSBhd2FpdCB0aGlzLnNhdmVBbmRFbWJlZChmaWxlcywgdmlldyk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGVtYmVkVmF1bHRGaWxlcyhmaWxlczogVEZpbGVbXSwgdmlldzogTWFya2Rvd25WaWV3KSB7XG4gICAgY29uc3QgYWN0aXZlRmlsZSA9IHZpZXcuZmlsZTtcbiAgICBpZiAoIWFjdGl2ZUZpbGUpIHJldHVybjtcbiAgICBjb25zdCBsaW5rcyA9IGZpbGVzLm1hcCgoZmlsZSkgPT4gYCEke3RoaXMuYXBwLmZpbGVNYW5hZ2VyLmdlbmVyYXRlTWFya2Rvd25MaW5rKGZpbGUsIGFjdGl2ZUZpbGUucGF0aCl9YCk7XG4gICAgdmlldy5lZGl0b3IucmVwbGFjZVNlbGVjdGlvbihsaW5rcy5qb2luKFwiXFxuXCIpKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgc2F2ZUFuZEVtYmVkKGZpbGVzOiBGaWxlW10sIHZpZXc6IE1hcmtkb3duVmlldykge1xuICAgIGNvbnN0IGFjdGl2ZUZpbGUgPSB2aWV3LmZpbGU7XG4gICAgaWYgKCFhY3RpdmVGaWxlKSByZXR1cm47XG4gICAgY29uc3QgdGFyZ2V0Rm9sZGVyUGF0aCA9IGF3YWl0IHRoaXMuZW5zdXJlVGFyZ2V0Rm9sZGVyKGFjdGl2ZUZpbGUucGFyZW50Py5wYXRoKTtcbiAgICBpZiAodGFyZ2V0Rm9sZGVyUGF0aCA9PT0gbnVsbCkgcmV0dXJuO1xuICAgIGNvbnN0IGxpbmtzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xuICAgICAgbGV0IGZpbmFsRmlsZTogQmxvYiB8IEZpbGUgPSBmaWxlO1xuICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuY29tcHJlc3NJbWFnZXMpIGZpbmFsRmlsZSA9IGF3YWl0IGNvbXByZXNzSW1hZ2UoZmlsZSwgdGhpcy5zZXR0aW5ncy5jb21wcmVzc1F1YWxpdHkpO1xuICAgICAgY29uc3QgdGFyZ2V0UGF0aCA9IGdldEF2YWlsYWJsZVBhdGgodGhpcy5hcHAudmF1bHQsIGpvaW5QYXRoKHRhcmdldEZvbGRlclBhdGgsIGJ1aWxkRmlsZU5hbWUoZmlsZSkpKTtcbiAgICAgIGNvbnN0IGNyZWF0ZWQgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5jcmVhdGVCaW5hcnkodGFyZ2V0UGF0aCwgYXdhaXQgZmluYWxGaWxlLmFycmF5QnVmZmVyKCkpO1xuICAgICAgbGlua3MucHVzaChgISR7dGhpcy5hcHAuZmlsZU1hbmFnZXIuZ2VuZXJhdGVNYXJrZG93bkxpbmsoY3JlYXRlZCwgYWN0aXZlRmlsZS5wYXRoKX1gKTtcbiAgICB9XG4gICAgdmlldy5lZGl0b3IucmVwbGFjZVNlbGVjdGlvbihsaW5rcy5qb2luKFwiXFxuXCIpKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgZW5zdXJlVGFyZ2V0Rm9sZGVyKG5vdGVGb2xkZXJQYXRoOiBzdHJpbmcgfCB1bmRlZmluZWQpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcbiAgICBjb25zdCByYXcgPSB0aGlzLnNldHRpbmdzLnBob3Rvc0ZvbGRlci50cmltKCk7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5zZXR0aW5ncy5zYXZlTmVhclRoZU5vdGVcbiAgICAgID8gKHJhdyA/IChub3RlRm9sZGVyUGF0aCA/IGAke25vdGVGb2xkZXJQYXRofS8ke3Jhd31gIDogcmF3KSA6IChub3RlRm9sZGVyUGF0aCA/PyBcIlwiKSlcbiAgICAgIDogcmF3O1xuICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVQYXRoKHRhcmdldCk7XG4gICAgaWYgKG5vcm1hbGl6ZWQgPT09IFwiXCIpIHJldHVybiBcIlwiO1xuICAgIGlmIChmb2xkZXJFeGlzdHModGhpcy5hcHAudmF1bHQsIG5vcm1hbGl6ZWQpKSByZXR1cm4gbm9ybWFsaXplZDtcbiAgICBpZiAoIXRoaXMuc2V0dGluZ3MuY3JlYXRlRm9sZGVySWZNaXNzaW5nKSB7XG4gICAgICBuZXcgTm90aWNlKGBGb2xkZXIgbm90IGZvdW5kOiAke25vcm1hbGl6ZWR9YCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNyZWF0ZUZvbGRlcihub3JtYWxpemVkKTtcbiAgICAgIHJldHVybiBub3JtYWxpemVkO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiQ2FtZXJhIEVtYmVkOiBmYWlsZWQgdG8gY3JlYXRlIGZvbGRlclwiLCBlcnJvcik7XG4gICAgICBuZXcgTm90aWNlKGBGYWlsZWQgdG8gY3JlYXRlIGZvbGRlcjogJHtub3JtYWxpemVkfWApO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgbG9hZFNldHRpbmdzKCkge1xuICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX1NFVFRJTkdTLCBhd2FpdCB0aGlzLmxvYWREYXRhKCkgYXMgUGFydGlhbDxDYW1lcmFFbWJlZFNldHRpbmdzPik7XG4gIH1cblxuICBhc3luYyBzYXZlU2V0dGluZ3MoKSB7IGF3YWl0IHRoaXMuc2F2ZURhdGEodGhpcy5zZXR0aW5ncyk7IH1cbn1cbiIsICJpbXBvcnQgeyBBcHAsIFBsdWdpblNldHRpbmdUYWIgfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCBDYW1lcmFFbWJlZFBsdWdpbiBmcm9tIFwiLi9tYWluLmpzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FtZXJhRW1iZWRTZXR0aW5ncyB7XG4gIHBob3Rvc0ZvbGRlcjogc3RyaW5nO1xuICBjcmVhdGVGb2xkZXJJZk1pc3Npbmc6IGJvb2xlYW47XG4gIHNhdmVOZWFyVGhlTm90ZTogYm9vbGVhbjtcbiAgY29tcHJlc3NJbWFnZXM6IGJvb2xlYW47XG4gIGNvbXByZXNzUXVhbGl0eTogbnVtYmVyO1xuICBnYWxsZXJ5RW5hYmxlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfU0VUVElOR1M6IENhbWVyYUVtYmVkU2V0dGluZ3MgPSB7XG4gIHBob3Rvc0ZvbGRlcjogXCJwaG90b3NcIixcbiAgY3JlYXRlRm9sZGVySWZNaXNzaW5nOiB0cnVlLFxuICBzYXZlTmVhclRoZU5vdGU6IGZhbHNlLFxuICBjb21wcmVzc0ltYWdlczogZmFsc2UsXG4gIGNvbXByZXNzUXVhbGl0eTogMC44LFxuICBnYWxsZXJ5RW5hYmxlZDogZmFsc2UsXG59O1xuXG5leHBvcnQgY2xhc3MgQ2FtZXJhRW1iZWRTZXR0aW5nVGFiIGV4dGVuZHMgUGx1Z2luU2V0dGluZ1RhYiB7XG4gIHBsdWdpbjogQ2FtZXJhRW1iZWRQbHVnaW47XG5cbiAgY29uc3RydWN0b3IoYXBwOiBBcHAsIHBsdWdpbjogQ2FtZXJhRW1iZWRQbHVnaW4pIHtcbiAgICBzdXBlcihhcHAsIHBsdWdpbik7XG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gIH1cblxuICBkaXNwbGF5KCk6IHZvaWQge1xuICAgIC8vIFNldHRpbmdzIGFyZSByZW5kZXJlZCBieSBPYnNpZGlhbidzIGRlY2xhcmF0aXZlIHNldHRpbmdzIEFQSS5cbiAgfVxuXG4gIGdldFNldHRpbmdEZWZpbml0aW9ucygpIHtcbiAgICByZXR1cm4gW1xuICAgICAge1xuICAgICAgICBuYW1lOiBcIlBsYXRmb3JtIHN1cHBvcnRcIixcbiAgICAgICAgZGVzYzogXCJUaGlzIHBsdWdpbiBpcyBwcmltYXJpbHkgZGVzaWduZWQgZm9yIEFuZHJvaWQuIFNvbWUgZmVhdHVyZXMgbWF5IGJlIGxpbWl0ZWQgb24gb3RoZXIgcGxhdGZvcm1zLlwiLFxuICAgICAgICBjb250cm9sOiB7IHR5cGU6IFwiaW5mb1wiIGFzIGNvbnN0IH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcIlBob3RvcyBmb2xkZXJcIixcbiAgICAgICAgZGVzYzogXCJWYXVsdC1yZWxhdGl2ZSBmb2xkZXIgdXNlZCBmb3IgZ2FsbGVyeSBwaG90b3MgYW5kIGNhbWVyYSBwaG90b3Mgd2hlbiBTYXZlIG5lYXIgdGhlIG5vdGUgaXMgZGlzYWJsZWQuXCIsXG4gICAgICAgIGNvbnRyb2w6IHtcbiAgICAgICAgICB0eXBlOiBcInRleHRcIiBhcyBjb25zdCxcbiAgICAgICAgICBrZXk6IFwicGhvdG9zRm9sZGVyXCIgYXMgY29uc3QsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IFwiYXR0YWNobWVudHMvY2FtZXJhXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcIkNyZWF0ZSBmb2xkZXIgaWYgbWlzc2luZ1wiLFxuICAgICAgICBkZXNjOiBcIkF1dG9tYXRpY2FsbHkgY3JlYXRlIHRoZSBQaG90b3MgZm9sZGVyIHdoZW4gaXQgZG9lcyBub3QgZXhpc3QuXCIsXG4gICAgICAgIGNvbnRyb2w6IHsgdHlwZTogXCJ0b2dnbGVcIiBhcyBjb25zdCwga2V5OiBcImNyZWF0ZUZvbGRlcklmTWlzc2luZ1wiIGFzIGNvbnN0IH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcIlNhdmUgbmVhciB0aGUgbm90ZVwiLFxuICAgICAgICBkZXNjOiBcIlNhdmUgY2FtZXJhIHBob3RvcyBiZXNpZGUgdGhlIGN1cnJlbnQgbm90ZSBpbnN0ZWFkIG9mIHRoZSBnbG9iYWwgUGhvdG9zIGZvbGRlci5cIixcbiAgICAgICAgY29udHJvbDoge1xuICAgICAgICAgIHR5cGU6IFwidG9nZ2xlXCIgYXMgY29uc3QsXG4gICAgICAgICAga2V5OiBcInNhdmVOZWFyVGhlTm90ZVwiIGFzIGNvbnN0LFxuICAgICAgICAgIGRpc2FibGVkOiAoKSA9PiB0aGlzLnBsdWdpbi5zZXR0aW5ncy5nYWxsZXJ5RW5hYmxlZCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiRW5hYmxlIGdhbGxlcnlcIixcbiAgICAgICAgZGVzYzogXCJBZGRzIHRoZSBjdXN0b20gdmF1bHQtd2lkZSBnYWxsZXJ5LiBXaGVuIGVuYWJsZWQsIHRoZSBjYW1lcmEgYnV0dG9uIG9wZW5zIHRoZSBnYWxsZXJ5IGluc3RlYWQgb2YgZGlyZWN0bHkgdGFraW5nIGEgcGhvdG8uXCIsXG4gICAgICAgIGNvbnRyb2w6IHsgdHlwZTogXCJ0b2dnbGVcIiBhcyBjb25zdCwga2V5OiBcImdhbGxlcnlFbmFibGVkXCIgYXMgY29uc3QgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiQ29tcHJlc3MgaW1hZ2VzXCIsXG4gICAgICAgIGRlc2M6IFwiUmVkdWNlIHBob3RvIGZpbGUgc2l6ZXMgYmVmb3JlIHNhdmluZyBjYW1lcmEgY2FwdHVyZXMuXCIsXG4gICAgICAgIGNvbnRyb2w6IHsgdHlwZTogXCJ0b2dnbGVcIiBhcyBjb25zdCwga2V5OiBcImNvbXByZXNzSW1hZ2VzXCIgYXMgY29uc3QgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiQ29tcHJlc3MgcXVhbGl0eVwiLFxuICAgICAgICBkZXNjOiBcIkxvd2VyIHZhbHVlcyBwcm9kdWNlIHNtYWxsZXIgZmlsZXMgYnV0IGxvd2VyIGltYWdlIHF1YWxpdHkuXCIsXG4gICAgICAgIGNvbnRyb2w6IHtcbiAgICAgICAgICB0eXBlOiBcInNsaWRlclwiIGFzIGNvbnN0LFxuICAgICAgICAgIGtleTogXCJjb21wcmVzc1F1YWxpdHlcIiBhcyBjb25zdCxcbiAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgbWF4OiAwLjksXG4gICAgICAgICAgc3RlcDogMC4wNSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXTtcbiAgfVxufVxuIiwgImltcG9ydCBDb21wcmVzc29yIGZyb20gXCJjb21wcmVzc29yanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXByZXNzSW1hZ2UoZmlsZTogRmlsZSwgcXVhbGl0eTogbnVtYmVyKTogUHJvbWlzZTxCbG9iPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIG5ldyBDb21wcmVzc29yKGZpbGUsIHtcbiAgICAgICAgcXVhbGl0eSxcbiAgICAgICAgbWF4V2lkdGg6IDE5MjAsXG4gICAgICAgIG1heEhlaWdodDogMTA4MCxcbiAgICAgICAgY29udmVydFNpemU6IDAsXG4gICAgICAgIHN1Y2Nlc3M6IHJlc29sdmUsXG4gICAgICAgIGVycm9yOiByZWplY3QsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSIsICJpbXBvcnQge1RGb2xkZXIsIFZhdWx0fSBmcm9tIFwib2JzaWRpYW5cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkRmlsZU5hbWUoZmlsZTogRmlsZSk6IHN0cmluZyB7XG4gICAgLy8gVXNlIGFuIElTTyB0aW1lc3RhbXAgdG8ga2VlcCBmaWxlbmFtZXMgc29ydGFibGUuXG4gICAgY29uc3Qgc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkucmVwbGFjZSgvWzouXS9nLCBcIi1cIik7XG4gICAgY29uc3QgZmFsbGJhY2tFeHQgPSBleHRlbnNpb25Gcm9tVHlwZShmaWxlLnR5cGUpID8/IFwianBnXCI7XG4gICAgY29uc3QgZXh0ID0gZXh0ZW5zaW9uRnJvbU5hbWUoZmlsZS5uYW1lKSA/PyBmYWxsYmFja0V4dDtcbiAgICByZXR1cm4gYHBob3RvLSR7c3RhbXB9LiR7ZXh0fWA7XG4gIH1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dGVuc2lvbkZyb21OYW1lKG5hbWU6IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICBjb25zdCBtYXRjaCA9IG5hbWUubWF0Y2goL1xcLihbYS16QS1aMC05XSspJC8pO1xuICByZXR1cm4gbWF0Y2g/LlsxXSA/PyBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5zaW9uRnJvbVR5cGUobWltZVR5cGU6IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICBpZiAoIW1pbWVUeXBlLnN0YXJ0c1dpdGgoXCJpbWFnZS9cIikpIHJldHVybiBudWxsO1xuICBjb25zdCBzdWJ0eXBlID0gbWltZVR5cGUuc3BsaXQoXCIvXCIpWzFdO1xuICBpZiAoIXN1YnR5cGUpIHJldHVybiBudWxsO1xuICByZXR1cm4gc3VidHlwZS5yZXBsYWNlKFwianBlZ1wiLCBcImpwZ1wiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGpvaW5QYXRoKHBhcmVudFBhdGg6IHN0cmluZyB8IG51bGwsIGZpbGVOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoIXBhcmVudFBhdGgpIHJldHVybiBmaWxlTmFtZTsgLy8gcGFyZW50UGF0aCBpcyBlbXB0eSBzdHJpbmcgXHUyMTkyIHZhdWx0IHJvb3RcbiAgcmV0dXJuIGAke3BhcmVudFBhdGh9LyR7ZmlsZU5hbWV9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEF2YWlsYWJsZVBhdGgodmF1bHQ6IFZhdWx0LCBwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyBBdm9pZCBvdmVyd3JpdGluZyBleGlzdGluZyBmaWxlcyBieSBhZGRpbmcgYSBzdWZmaXguXG4gIGlmICghdmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKHBhdGgpKSByZXR1cm4gcGF0aDtcblxuICBjb25zdCBwYXJ0cyA9IHBhdGguc3BsaXQoXCIvXCIpO1xuICBjb25zdCBuYW1lID0gcGFydHMucG9wKCkgPz8gcGF0aDtcbiAgY29uc3QgZGlyID0gcGFydHMubGVuZ3RoID4gMCA/IGAke3BhcnRzLmpvaW4oXCIvXCIpfS9gIDogXCJcIjtcbiAgY29uc3QgZXh0SW5kZXggPSBuYW1lLmxhc3RJbmRleE9mKFwiLlwiKTtcbiAgY29uc3QgYmFzZSA9IGV4dEluZGV4ID09PSAtMSA/IG5hbWUgOiBuYW1lLnNsaWNlKDAsIGV4dEluZGV4KTtcbiAgY29uc3QgZXh0ID0gZXh0SW5kZXggPT09IC0xID8gXCJcIiA6IG5hbWUuc2xpY2UoZXh0SW5kZXgpO1xuXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgMTAwMDsgaSsrKSB7XG4gICAgY29uc3QgY2FuZGlkYXRlID0gYCR7ZGlyfSR7YmFzZX0tJHtpfSR7ZXh0fWA7XG4gICAgaWYgKCF2YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoY2FuZGlkYXRlKSkgcmV0dXJuIGNhbmRpZGF0ZTtcbiAgfVxuICByZXR1cm4gYCR7ZGlyfSR7YmFzZX0tJHtEYXRlLm5vdygpfSR7ZXh0fWA7XG59XG5cbi8qKiBIZWxwZXIgdG8gY2hlY2sgaWYgYSBmb2xkZXIgZXhpc3RzIGF0IHRoZSBnaXZlbiBwYXRoLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvbGRlckV4aXN0cyh2YXVsdDogVmF1bHQsIHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBjb25zdCBmaWxlID0gdmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKHBhdGgpO1xuICByZXR1cm4gZmlsZSBpbnN0YW5jZW9mIFRGb2xkZXI7XG59XG4iLCAiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBpY2tJbWFnZUZyb21DYW1lcmEoc291cmNlOiBzdHJpbmcgPSBcImdhbGxlcnlcIik6IFByb21pc2U8RmlsZSB8IG51bGw+IHtcbiAgY29uc3QgZmlsZXMgPSBhd2FpdCBwaWNrSW1hZ2VzKHNvdXJjZSk7XG4gIHJldHVybiBmaWxlc1swXSA/PyBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGlja0ltYWdlcyhzb3VyY2U6IHN0cmluZyA9IFwiZ2FsbGVyeVwiKTogUHJvbWlzZTxGaWxlW10+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5ib2R5LmNyZWF0ZUVsKFwiaW5wdXRcIiwgeyBjbHM6IFwiY2FtZXJhLWhpZGRlblwiLCB0eXBlOiBcImZpbGVcIiB9KTtcbiAgICBpbnB1dC5hY2NlcHQgPSBcImltYWdlLypcIjtcbiAgICBpbnB1dC5tdWx0aXBsZSA9IHNvdXJjZSAhPT0gXCJjYW1lcmFcIjtcbiAgICBpZiAoc291cmNlID09PSBcImNhbWVyYVwiKSBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJjYXB0dXJlXCIsIFwiZW52aXJvbm1lbnRcIik7XG5cbiAgICBjb25zdCB0aW1lb3V0SWQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpbnB1dC5yZW1vdmUoKTtcbiAgICAgIHJlc29sdmUoW10pO1xuICAgIH0sIDYwXzAwMCk7XG5cbiAgICBjb25zdCBjbGVhbnVwID0gKGZpbGVzOiBGaWxlW10pID0+IHtcbiAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICAgIGlucHV0LnJlbW92ZSgpO1xuICAgICAgcmVzb2x2ZShmaWxlcyk7XG4gICAgfTtcblxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgZmlsZXMgPSBpbnB1dC5maWxlcztcbiAgICAgIGNsZWFudXAoZmlsZXMgPyBBcnJheS5mcm9tKGZpbGVzKSA6IFtdKTtcbiAgICB9KTtcblxuICAgIGlucHV0LmNsaWNrKCk7XG4gIH0pO1xufVxuIiwgImltcG9ydCB7IEFwcCwgTW9kYWwsIE5vdGljZSwgVEZpbGUsIHNldEljb24gfSBmcm9tIFwib2JzaWRpYW5cIjtcblxuY29uc3QgSU1BR0VfRVhURU5TSU9OUyA9IG5ldyBTZXQoW1wianBnXCIsIFwianBlZ1wiLCBcInBuZ1wiLCBcImdpZlwiLCBcIndlYnBcIiwgXCJibXBcIiwgXCJzdmdcIiwgXCJhdmlmXCJdKTtcblxuZXhwb3J0IGNsYXNzIEdhbGxlcnlNb2RhbCBleHRlbmRzIE1vZGFsIHtcbiAgcHJpdmF0ZSByZWFkb25seSBvbkNob29zZTogKGZpbGVzOiBURmlsZVtdKSA9PiB2b2lkO1xuICBwcml2YXRlIHJlYWRvbmx5IHBob3Rvc0ZvbGRlcjogc3RyaW5nO1xuICBwcml2YXRlIHJlYWRvbmx5IGNyZWF0ZUZvbGRlcklmTWlzc2luZzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBpdGVtczogVEZpbGVbXSA9IFtdO1xuICBwcml2YXRlIHNlbGVjdGVkID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gIHByaXZhdGUgZ3JpZCE6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIHNlbGVjdGlvbkxhYmVsITogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgc3RhdHVzITogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgdXNlQnV0dG9uITogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIHByaXZhdGUgZGVsZXRlQnV0dG9uITogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIHByaXZhdGUgc2NhbklkID0gMDtcbiAgcHJpdmF0ZSBvcGVuZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGhvdG9zRm9sZGVyOiBzdHJpbmcsIGNyZWF0ZUZvbGRlcklmTWlzc2luZzogYm9vbGVhbiwgb25DaG9vc2U6IChmaWxlczogVEZpbGVbXSkgPT4gdm9pZCkge1xuICAgIHN1cGVyKGFwcCk7XG4gICAgdGhpcy5waG90b3NGb2xkZXIgPSBwaG90b3NGb2xkZXIudHJpbSgpO1xuICAgIHRoaXMuY3JlYXRlRm9sZGVySWZNaXNzaW5nID0gY3JlYXRlRm9sZGVySWZNaXNzaW5nO1xuICAgIHRoaXMub25DaG9vc2UgPSBvbkNob29zZTtcbiAgfVxuXG4gIG9uT3BlbigpIHtcbiAgICB0aGlzLm9wZW5lZCA9IHRydWU7XG4gICAgdGhpcy5tb2RhbEVsLmFkZENsYXNzKFwiY2FtZXJhLWdhbGxlcnktbW9kYWwtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHsgY29udGVudEVsIH0gPSB0aGlzO1xuICAgIGNvbnRlbnRFbC5hZGRDbGFzcyhcImNhbWVyYS1nYWxsZXJ5LW1vZGFsXCIpO1xuICAgIGNvbnN0IGhlYWRlciA9IGNvbnRlbnRFbC5jcmVhdGVEaXYoeyBjbHM6IFwiY2FtZXJhLWdhbGxlcnktaGVhZGVyXCIgfSk7XG4gICAgY29uc3QgdGl0bGUgPSBoZWFkZXIuY3JlYXRlRGl2KHsgY2xzOiBcImNhbWVyYS1nYWxsZXJ5LXRpdGxlXCIgfSk7XG4gICAgc2V0SWNvbih0aXRsZSwgXCJpbWFnZXNcIik7XG4gICAgdGl0bGUuY3JlYXRlU3Bhbih7IHRleHQ6IFwiR2FsbGVyeVwiIH0pO1xuICAgIHRoaXMuc2VsZWN0aW9uTGFiZWwgPSBoZWFkZXIuY3JlYXRlRGl2KHsgY2xzOiBcImNhbWVyYS1nYWxsZXJ5LXNlbGVjdGlvblwiIH0pO1xuICAgIGNvbnN0IHRvb2xiYXIgPSBjb250ZW50RWwuY3JlYXRlRGl2KHsgY2xzOiBcImNhbWVyYS1nYWxsZXJ5LXRvb2xiYXJcIiB9KTtcbiAgICBjb25zdCB0YWtlID0gdG9vbGJhci5jcmVhdGVFbChcImJ1dHRvblwiLCB7IGNsczogXCJtb2QtY3RhXCIgfSk7XG4gICAgc2V0SWNvbih0YWtlLCBcImNhbWVyYVwiKTtcbiAgICB0YWtlLmNyZWF0ZVNwYW4oeyB0ZXh0OiBcIlRha2UgcGhvdG8gdG8gZ2FsbGVyeVwiIH0pO1xuICAgIHRha2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHZvaWQgdGhpcy50YWtlUGhvdG8oKSk7XG4gICAgY29uc3QgdXBsb2FkID0gdG9vbGJhci5jcmVhdGVFbChcImJ1dHRvblwiLCB7IGNsczogXCJjYW1lcmEtZ2FsbGVyeS11cGxvYWRcIiB9KTtcbiAgICBzZXRJY29uKHVwbG9hZCwgXCJ1cGxvYWRcIik7XG4gICAgdXBsb2FkLmNyZWF0ZVNwYW4oeyB0ZXh0OiBcIlVwbG9hZCB0byBnYWxsZXJ5XCIgfSk7XG4gICAgdXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB2b2lkIHRoaXMudXBsb2FkVG9HYWxsZXJ5KCkpO1xuICAgIHRoaXMuc3RhdHVzID0gY29udGVudEVsLmNyZWF0ZURpdih7IGNsczogXCJjYW1lcmEtZ2FsbGVyeS1zdGF0dXNcIiB9KTtcbiAgICB0aGlzLmdyaWQgPSBjb250ZW50RWwuY3JlYXRlRGl2KHsgY2xzOiBcImNhbWVyYS1nYWxsZXJ5LWdyaWRcIiB9KTtcbiAgICBjb25zdCBmb290ZXIgPSBjb250ZW50RWwuY3JlYXRlRGl2KHsgY2xzOiBcImNhbWVyYS1nYWxsZXJ5LWZvb3RlclwiIH0pO1xuICAgIHRoaXMuZGVsZXRlQnV0dG9uID0gZm9vdGVyLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHsgdGV4dDogXCJEZWxldGVcIiwgY2xzOiBcImNhbWVyYS1nYWxsZXJ5LWRlbGV0ZVwiIH0pO1xuICAgIHRoaXMuZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB2b2lkIHRoaXMuZGVsZXRlU2VsZWN0ZWQoKSk7XG4gICAgdGhpcy51c2VCdXR0b24gPSBmb290ZXIuY3JlYXRlRWwoXCJidXR0b25cIiwgeyB0ZXh0OiBcIlVzZSBpdFwiLCBjbHM6IFwibW9kLWN0YVwiIH0pO1xuICAgIHRoaXMudXNlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLnVzZVNlbGVjdGVkKCkpO1xuICAgIHRoaXMuc2V0QWN0aW9uQnV0dG9uc1Zpc2libGUoZmFsc2UpO1xuICAgIHZvaWQgdGhpcy5zY2FuVmF1bHQoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgc2NhblZhdWx0KCkge1xuICAgIGNvbnN0IGN1cnJlbnRTY2FuID0gKyt0aGlzLnNjYW5JZDtcbiAgICB0aGlzLnN0YXR1cy5zZXRUZXh0KFwiU2Nhbm5pbmcgdmF1bHRcdTIwMjZcIik7XG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmFwcC52YXVsdC5nZXRGaWxlcygpLmZpbHRlcigoZmlsZSkgPT4gSU1BR0VfRVhURU5TSU9OUy5oYXMoZmlsZS5leHRlbnNpb24udG9Mb3dlckNhc2UoKSkpLnNvcnQoKGEsIGIpID0+IGIuc3RhdC5tdGltZSAtIGEuc3RhdC5tdGltZSk7XG4gICAgY29uc3QgcGF0aHMgPSBuZXcgU2V0KGZpbGVzLm1hcCgoZmlsZSkgPT4gZmlsZS5wYXRoKSk7XG4gICAgdGhpcy5zZWxlY3RlZC5mb3JFYWNoKChwYXRoKSA9PiB7IGlmICghcGF0aHMuaGFzKHBhdGgpKSB0aGlzLnNlbGVjdGVkLmRlbGV0ZShwYXRoKTsgfSk7XG4gICAgdGhpcy5ncmlkLmVtcHR5KCk7XG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIHRoaXMudXBkYXRlU2VsZWN0aW9uKCk7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGZpbGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgaWYgKGN1cnJlbnRTY2FuICE9PSB0aGlzLnNjYW5JZCB8fCAhdGhpcy5vcGVuZWQpIHJldHVybjtcbiAgICAgIGNvbnN0IGZpbGUgPSBmaWxlc1tpbmRleF07XG4gICAgICBpZiAoIWZpbGUpIGNvbnRpbnVlO1xuICAgICAgdGhpcy5pdGVtcy5wdXNoKGZpbGUpO1xuICAgICAgdGhpcy5yZW5kZXJJdGVtKGZpbGUpO1xuICAgICAgaWYgKGluZGV4ID4gMCAmJiBpbmRleCAlIDEwMCA9PT0gMCkge1xuICAgICAgICB0aGlzLnN0YXR1cy5zZXRUZXh0KGBTY2FubmluZ1x1MjAyNiAke2luZGV4LnRvTG9jYWxlU3RyaW5nKCl9IGltYWdlc2ApO1xuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4gd2luZG93LnNldFRpbWVvdXQocmVzb2x2ZSwgMCkpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY3VycmVudFNjYW4gPT09IHRoaXMuc2NhbklkICYmIHRoaXMub3BlbmVkKSB0aGlzLnN0YXR1cy5zZXRUZXh0KGAke3RoaXMuaXRlbXMubGVuZ3RoLnRvTG9jYWxlU3RyaW5nKCl9IHBob3Rvc2ApO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJJdGVtKGZpbGU6IFRGaWxlKSB7XG4gICAgY29uc3QgaXRlbSA9IHRoaXMuZ3JpZC5jcmVhdGVEaXYoeyBjbHM6IFwiY2FtZXJhLWdhbGxlcnktaXRlbVwiIH0pO1xuICAgIGl0ZW0uZGF0YXNldC5wYXRoID0gZmlsZS5wYXRoO1xuICAgIGNvbnN0IGltYWdlID0gaXRlbS5jcmVhdGVFbChcImltZ1wiLCB7IGNsczogXCJjYW1lcmEtZ2FsbGVyeS10aHVtYm5haWxcIiB9KTtcbiAgICBpbWFnZS5zcmMgPSB0aGlzLmFwcC52YXVsdC5nZXRSZXNvdXJjZVBhdGgoZmlsZSk7XG4gICAgaW1hZ2UuYWx0ID0gZmlsZS5wYXRoO1xuICAgIGltYWdlLmxvYWRpbmcgPSBcImxhenlcIjtcbiAgICBjb25zdCBiYWRnZSA9IGl0ZW0uY3JlYXRlRGl2KHsgY2xzOiBcImNhbWVyYS1nYWxsZXJ5LWJhZGdlXCIgfSk7XG4gICAgaXRlbS5jcmVhdGVEaXYoeyBjbHM6IFwiY2FtZXJhLWdhbGxlcnktbmFtZVwiLCB0ZXh0OiBmaWxlLm5hbWUgfSk7XG4gICAgdGhpcy51cGRhdGVJdGVtU2VsZWN0aW9uKGl0ZW0sIGJhZGdlLCBmaWxlLnBhdGgpO1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkLmhhcyhmaWxlLnBhdGgpKSB0aGlzLnNlbGVjdGVkLmRlbGV0ZShmaWxlLnBhdGgpOyBlbHNlIHRoaXMuc2VsZWN0ZWQuYWRkKGZpbGUucGF0aCk7XG4gICAgICB0aGlzLnVwZGF0ZUl0ZW1TZWxlY3Rpb24oaXRlbSwgYmFkZ2UsIGZpbGUucGF0aCk7XG4gICAgICB0aGlzLnVwZGF0ZVNlbGVjdGlvbigpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRTYXZlZEZpbGUoZmlsZTogVEZpbGUpIHtcbiAgICBpZiAoIUlNQUdFX0VYVEVOU0lPTlMuaGFzKGZpbGUuZXh0ZW5zaW9uLnRvTG93ZXJDYXNlKCkpIHx8IHRoaXMuaXRlbXMuc29tZSgoaXRlbSkgPT4gaXRlbS5wYXRoID09PSBmaWxlLnBhdGgpKSByZXR1cm47XG4gICAgdGhpcy5pdGVtcy51bnNoaWZ0KGZpbGUpO1xuICAgIHRoaXMucmVuZGVySXRlbUF0VG9wKGZpbGUpO1xuICAgIHRoaXMuc3RhdHVzLnNldFRleHQoYCR7dGhpcy5pdGVtcy5sZW5ndGgudG9Mb2NhbGVTdHJpbmcoKX0gcGhvdG9zYCk7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlckl0ZW1BdFRvcChmaWxlOiBURmlsZSkge1xuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmdyaWQuY3JlYXRlRGl2KHsgY2xzOiBcImNhbWVyYS1nYWxsZXJ5LWl0ZW1cIiB9KTtcbiAgICBpdGVtLmRhdGFzZXQucGF0aCA9IGZpbGUucGF0aDtcbiAgICBjb25zdCBpbWFnZSA9IGl0ZW0uY3JlYXRlRWwoXCJpbWdcIiwgeyBjbHM6IFwiY2FtZXJhLWdhbGxlcnktdGh1bWJuYWlsXCIgfSk7XG4gICAgaW1hZ2Uuc3JjID0gdGhpcy5hcHAudmF1bHQuZ2V0UmVzb3VyY2VQYXRoKGZpbGUpO1xuICAgIGltYWdlLmFsdCA9IGZpbGUucGF0aDtcbiAgICBpbWFnZS5sb2FkaW5nID0gXCJlYWdlclwiO1xuICAgIGNvbnN0IGJhZGdlID0gaXRlbS5jcmVhdGVEaXYoeyBjbHM6IFwiY2FtZXJhLWdhbGxlcnktYmFkZ2VcIiB9KTtcbiAgICBpdGVtLmNyZWF0ZURpdih7IGNsczogXCJjYW1lcmEtZ2FsbGVyeS1uYW1lXCIsIHRleHQ6IGZpbGUubmFtZSB9KTtcbiAgICB0aGlzLnVwZGF0ZUl0ZW1TZWxlY3Rpb24oaXRlbSwgYmFkZ2UsIGZpbGUucGF0aCk7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQuaGFzKGZpbGUucGF0aCkpIHRoaXMuc2VsZWN0ZWQuZGVsZXRlKGZpbGUucGF0aCk7IGVsc2UgdGhpcy5zZWxlY3RlZC5hZGQoZmlsZS5wYXRoKTtcbiAgICAgIHRoaXMudXBkYXRlSXRlbVNlbGVjdGlvbihpdGVtLCBiYWRnZSwgZmlsZS5wYXRoKTtcbiAgICAgIHRoaXMudXBkYXRlU2VsZWN0aW9uKCk7XG4gICAgfSk7XG4gICAgdGhpcy5ncmlkLnByZXBlbmQoaXRlbSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUl0ZW1TZWxlY3Rpb24oaXRlbTogSFRNTEVsZW1lbnQsIGJhZGdlOiBIVE1MRWxlbWVudCwgcGF0aDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkLmhhcyhwYXRoKTtcbiAgICBpdGVtLnRvZ2dsZUNsYXNzKFwiaXMtc2VsZWN0ZWRcIiwgc2VsZWN0ZWQpO1xuICAgIGJhZGdlLnRleHRDb250ZW50ID0gc2VsZWN0ZWQgPyBTdHJpbmcodGhpcy5nZXRTZWxlY3Rpb25OdW1iZXIocGF0aCkpIDogXCJcIjtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2VsZWN0aW9uTnVtYmVyKHBhdGg6IHN0cmluZyk6IG51bWJlciB7XG4gICAgbGV0IG51bWJlciA9IDA7XG4gICAgZm9yIChjb25zdCBzZWxlY3RlZFBhdGggb2YgdGhpcy5zZWxlY3RlZCkgeyBudW1iZXIrKzsgaWYgKHNlbGVjdGVkUGF0aCA9PT0gcGF0aCkgcmV0dXJuIG51bWJlcjsgfVxuICAgIHJldHVybiAwO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRBY3Rpb25CdXR0b25zVmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKSB7XG4gICAgdGhpcy51c2VCdXR0b24udG9nZ2xlVmlzaWJpbGl0eSh2aXNpYmxlKTtcbiAgICB0aGlzLmRlbGV0ZUJ1dHRvbi50b2dnbGVWaXNpYmlsaXR5KHZpc2libGUpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVTZWxlY3Rpb24oKSB7XG4gICAgY29uc3QgY291bnQgPSB0aGlzLnNlbGVjdGVkLnNpemU7XG4gICAgdGhpcy5zZWxlY3Rpb25MYWJlbC5zZXRUZXh0KGNvdW50ID09PSAwID8gXCJTZWxlY3QgcGhvdG9zXCIgOiBgJHtjb3VudH0gc2VsZWN0ZWRgKTtcbiAgICB0aGlzLnNldEFjdGlvbkJ1dHRvbnNWaXNpYmxlKGNvdW50ID4gMCk7XG4gIH1cblxuICBwcml2YXRlIHVzZVNlbGVjdGVkKCkge1xuICAgIGNvbnN0IGZpbGVzOiBURmlsZVtdID0gW107XG4gICAgZm9yIChjb25zdCBwYXRoIG9mIHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgIGNvbnN0IGZpbGUgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgocGF0aCk7XG4gICAgICBpZiAoZmlsZSBpbnN0YW5jZW9mIFRGaWxlKSBmaWxlcy5wdXNoKGZpbGUpO1xuICAgIH1cbiAgICBpZiAoIWZpbGVzLmxlbmd0aCkgcmV0dXJuO1xuICAgIHRoaXMub25DaG9vc2UoZmlsZXMpO1xuICAgIHRoaXMuY2xvc2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgZGVsZXRlU2VsZWN0ZWQoKSB7XG4gICAgY29uc3QgcGF0aHMgPSBBcnJheS5mcm9tKHRoaXMuc2VsZWN0ZWQpO1xuICAgIGlmICghcGF0aHMubGVuZ3RoKSByZXR1cm47XG4gICAgY29uc3QgY29uZmlybWVkID0gYXdhaXQgdGhpcy5jb25maXJtRGVsZXRlKHBhdGhzLmxlbmd0aCk7XG4gICAgaWYgKCFjb25maXJtZWQpIHJldHVybjtcbiAgICBsZXQgZGVsZXRlZCA9IDA7XG4gICAgZm9yIChjb25zdCBwYXRoIG9mIHBhdGhzKSB7XG4gICAgICBjb25zdCBmaWxlID0gdGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKHBhdGgpO1xuICAgICAgaWYgKCEoZmlsZSBpbnN0YW5jZW9mIFRGaWxlKSkgY29udGludWU7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCB0aGlzLmFwcC5maWxlTWFuYWdlci50cmFzaEZpbGUoZmlsZSk7XG4gICAgICAgIGRlbGV0ZWQrKztcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDYW1lcmEgRW1iZWQ6IGZhaWxlZCB0byBkZWxldGUgZ2FsbGVyeSBwaG90b1wiLCBwYXRoLCBlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0ZWQuY2xlYXIoKTtcbiAgICBpZiAoZGVsZXRlZCA+IDApIG5ldyBOb3RpY2UoYERlbGV0ZWQgJHtkZWxldGVkfSBwaG90byR7ZGVsZXRlZCA9PT0gMSA/IFwiXCIgOiBcInNcIn0uYCk7XG4gICAgYXdhaXQgdGhpcy5zY2FuVmF1bHQoKTtcbiAgfVxuXG4gIHByaXZhdGUgY29uZmlybURlbGV0ZShjb3VudDogbnVtYmVyKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBjb25zdCBtb2RhbCA9IG5ldyBNb2RhbCh0aGlzLmFwcCk7XG4gICAgICBsZXQgc2V0dGxlZCA9IGZhbHNlO1xuICAgICAgY29uc3QgZmluaXNoID0gKHZhbHVlOiBib29sZWFuKSA9PiB7XG4gICAgICAgIGlmIChzZXR0bGVkKSByZXR1cm47XG4gICAgICAgIHNldHRsZWQgPSB0cnVlO1xuICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgbW9kYWwuY2xvc2UoKTtcbiAgICAgIH07XG4gICAgICBtb2RhbC50aXRsZUVsLnNldFRleHQoXCJEZWxldGUgcGhvdG9zP1wiKTtcbiAgICAgIG1vZGFsLmNvbnRlbnRFbC5jcmVhdGVFbChcInBcIiwgeyB0ZXh0OiBgTW92ZSAke2NvdW50fSBzZWxlY3RlZCBwaG90byR7Y291bnQgPT09IDEgPyBcIlwiIDogXCJzXCJ9IHRvIHRoZSBPYnNpZGlhbiB0cmFzaD9gIH0pO1xuICAgICAgY29uc3QgYnV0dG9ucyA9IG1vZGFsLmNvbnRlbnRFbC5jcmVhdGVEaXYoeyBjbHM6IFwibW9kYWwtYnV0dG9uLWNvbnRhaW5lclwiIH0pO1xuICAgICAgYnV0dG9ucy5jcmVhdGVFbChcImJ1dHRvblwiLCB7IHRleHQ6IFwiQ2FuY2VsXCIgfSkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGZpbmlzaChmYWxzZSkpO1xuICAgICAgYnV0dG9ucy5jcmVhdGVFbChcImJ1dHRvblwiLCB7IHRleHQ6IFwiRGVsZXRlXCIsIGNsczogXCJtb2Qtd2FybmluZ1wiIH0pLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBmaW5pc2godHJ1ZSkpO1xuICAgICAgbW9kYWwub3BlbigpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyB0YWtlUGhvdG8oKSB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5ib2R5LmNyZWF0ZUVsKFwiaW5wdXRcIiwgeyBjbHM6IFwiY2FtZXJhLWhpZGRlblwiLCB0eXBlOiBcImZpbGVcIiB9KTtcbiAgICBpbnB1dC5hY2NlcHQgPSBcImltYWdlLypcIjtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJjYXB0dXJlXCIsIFwiZW52aXJvbm1lbnRcIik7XG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7IHZvaWQgdGhpcy5oYW5kbGVQaWNrZWRGaWxlcyhpbnB1dCwgdHJ1ZSk7IH0pO1xuICAgIGlucHV0LmNsaWNrKCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHVwbG9hZFRvR2FsbGVyeSgpIHtcbiAgICBpZiAoIXRoaXMucGhvdG9zRm9sZGVyKSB7IG5ldyBOb3RpY2UoXCJTZXQgYSBwaG90b3MgZm9sZGVyIGluIGNhbWVyYSBlbWJlZCBzZXR0aW5ncyBiZWZvcmUgdXBsb2FkaW5nIHRvIHRoZSBnYWxsZXJ5LlwiKTsgcmV0dXJuOyB9XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5ib2R5LmNyZWF0ZUVsKFwiaW5wdXRcIiwgeyBjbHM6IFwiY2FtZXJhLWhpZGRlblwiLCB0eXBlOiBcImZpbGVcIiB9KTtcbiAgICBpbnB1dC5hY2NlcHQgPSBcImltYWdlLypcIjtcbiAgICBpbnB1dC5tdWx0aXBsZSA9IHRydWU7XG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7IHZvaWQgdGhpcy5oYW5kbGVQaWNrZWRGaWxlcyhpbnB1dCwgZmFsc2UpOyB9KTtcbiAgICBpbnB1dC5jbGljaygpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBoYW5kbGVQaWNrZWRGaWxlcyhpbnB1dDogSFRNTElucHV0RWxlbWVudCwgc2luZ2xlOiBib29sZWFuKSB7XG4gICAgY29uc3QgZmlsZXMgPSBpbnB1dC5maWxlcyA/IEFycmF5LmZyb20oaW5wdXQuZmlsZXMpLnNsaWNlKDAsIHNpbmdsZSA/IDEgOiB1bmRlZmluZWQpIDogW107XG4gICAgaW5wdXQucmVtb3ZlKCk7XG4gICAgaWYgKCFmaWxlcy5sZW5ndGggfHwgIXRoaXMub3BlbmVkKSByZXR1cm47XG4gICAgY29uc3Qgc2F2ZWRGaWxlczogVEZpbGVbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykgeyBjb25zdCBzYXZlZCA9IGF3YWl0IHRoaXMuc2F2ZVRvR2FsbGVyeShmaWxlKTsgaWYgKHNhdmVkKSBzYXZlZEZpbGVzLnB1c2goc2F2ZWQpOyB9XG4gICAgaWYgKCF0aGlzLm9wZW5lZCkgcmV0dXJuO1xuICAgIGZvciAoY29uc3Qgc2F2ZWQgb2Ygc2F2ZWRGaWxlcykgdGhpcy5hZGRTYXZlZEZpbGUoc2F2ZWQpO1xuICAgIGlmIChzYXZlZEZpbGVzLmxlbmd0aCkgdm9pZCB0aGlzLnJlZnJlc2hJbkJhY2tncm91bmQoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgcmVmcmVzaEluQmFja2dyb3VuZCgpIHtcbiAgICBhd2FpdCBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4gd2luZG93LnNldFRpbWVvdXQocmVzb2x2ZSwgMjUwKSk7XG4gICAgaWYgKHRoaXMub3BlbmVkKSBhd2FpdCB0aGlzLnNjYW5WYXVsdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBzYXZlVG9HYWxsZXJ5KGZpbGU6IEZpbGUpOiBQcm9taXNlPFRGaWxlIHwgbnVsbD4ge1xuICAgIGlmICghdGhpcy5waG90b3NGb2xkZXIpIHsgbmV3IE5vdGljZShcIlNldCBhIHBob3RvcyBmb2xkZXIgaW4gY2FtZXJhIGVtYmVkIHNldHRpbmdzIGZpcnN0LlwiKTsgcmV0dXJuIG51bGw7IH1cbiAgICB0cnkge1xuICAgICAgaWYgKCF0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgodGhpcy5waG90b3NGb2xkZXIpKSB7XG4gICAgICAgIGlmICghdGhpcy5jcmVhdGVGb2xkZXJJZk1pc3NpbmcpIHsgbmV3IE5vdGljZShgUGhvdG9zIGZvbGRlciBub3QgZm91bmQ6ICR7dGhpcy5waG90b3NGb2xkZXJ9YCk7IHJldHVybiBudWxsOyB9XG4gICAgICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNyZWF0ZUZvbGRlcih0aGlzLnBob3Rvc0ZvbGRlcik7XG4gICAgICB9XG4gICAgICBjb25zdCBwYXRoID0gdGhpcy5nZXRVbmlxdWVQYXRoKGAke3RoaXMucGhvdG9zRm9sZGVyfS8ke2ZpbGUubmFtZX1gKTtcbiAgICAgIGNvbnN0IGNyZWF0ZWQgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5jcmVhdGVCaW5hcnkocGF0aCwgYXdhaXQgZmlsZS5hcnJheUJ1ZmZlcigpKTtcbiAgICAgIG5ldyBOb3RpY2UoYEFkZGVkICR7ZmlsZS5uYW1lfSB0byBnYWxsZXJ5LmApO1xuICAgICAgcmV0dXJuIGNyZWF0ZWQ7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJDYW1lcmEgRW1iZWQ6IGdhbGxlcnkgc2F2ZSBmYWlsZWRcIiwgZXJyb3IpO1xuICAgICAgbmV3IE5vdGljZShgQ291bGQgbm90IHNhdmUgJHtmaWxlLm5hbWV9IHRvIHRoZSBnYWxsZXJ5LmApO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRVbmlxdWVQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKCF0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgocGF0aCkpIHJldHVybiBwYXRoO1xuICAgIGNvbnN0IGRvdCA9IHBhdGgubGFzdEluZGV4T2YoXCIuXCIpO1xuICAgIGNvbnN0IGJhc2UgPSBkb3QgPiAwID8gcGF0aC5zbGljZSgwLCBkb3QpIDogcGF0aDtcbiAgICBjb25zdCBleHRlbnNpb24gPSBkb3QgPiAwID8gcGF0aC5zbGljZShkb3QpIDogXCJcIjtcbiAgICBmb3IgKGxldCBjb3VudGVyID0gMjsgY291bnRlciA8IDEwMDAwOyBjb3VudGVyKyspIHtcbiAgICAgIGNvbnN0IGNhbmRpZGF0ZSA9IGAke2Jhc2V9ICR7Y291bnRlcn0ke2V4dGVuc2lvbn1gO1xuICAgICAgaWYgKCF0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoY2FuZGlkYXRlKSkgcmV0dXJuIGNhbmRpZGF0ZTtcbiAgICB9XG4gICAgcmV0dXJuIGAke2Jhc2V9ICR7RGF0ZS5ub3coKX0ke2V4dGVuc2lvbn1gO1xuICB9XG5cbiAgb25DbG9zZSgpIHsgdGhpcy5vcGVuZWQgPSBmYWxzZTsgdGhpcy5zY2FuSWQrKzsgdGhpcy5jb250ZW50RWwuZW1wdHkoKTsgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBLDBEQUFBQSxTQUFBO0FBVUEsS0FBQyxTQUFVLFFBQVEsU0FBUztBQUMxQixhQUFPLFlBQVksWUFBWSxPQUFPQSxZQUFXLGNBQWNBLFFBQU8sVUFBVSxRQUFRLElBQ3hGLE9BQU8sV0FBVyxjQUFjLE9BQU8sTUFBTSxPQUFPLE9BQU8sS0FDMUQsU0FBUyxPQUFPLGVBQWUsY0FBYyxhQUFhLFVBQVUsTUFBTSxPQUFPLGFBQWEsUUFBUTtBQUFBLElBQ3pHLEdBQUcsU0FBTyxXQUFZO0FBQUU7QUFFdEIsZUFBUyxRQUFRLFFBQVEsZ0JBQWdCO0FBQ3ZDLFlBQUksT0FBTyxPQUFPLEtBQUssTUFBTTtBQUM3QixZQUFJLE9BQU8sdUJBQXVCO0FBQ2hDLGNBQUksVUFBVSxPQUFPLHNCQUFzQixNQUFNO0FBQ2pELDZCQUFtQixVQUFVLFFBQVEsT0FBTyxTQUFVLEtBQUs7QUFDekQsbUJBQU8sT0FBTyx5QkFBeUIsUUFBUSxHQUFHLEVBQUU7QUFBQSxVQUN0RCxDQUFDLElBQUksS0FBSyxLQUFLLE1BQU0sTUFBTSxPQUFPO0FBQUEsUUFDcEM7QUFDQSxlQUFPO0FBQUEsTUFDVDtB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cUJBQXFCLFVBQVUsRUFBRTtBQUM1QyxhQUFPO0FBQUEsSUFDVDtBQUNBLFFBQUk7QUFDRixZQUFNLEtBQUssSUFBSSxNQUFNLGFBQWEsVUFBVTtBQUM1QyxhQUFPO0FBQUEsSUFDVCxTQUFTLE9BQU87QUFDZCxjQUFRLE1BQU0seUNBQXlDLEtBQUs7QUFDNUQsVUFBSSx3QkFBTyw0QkFBNEIsVUFBVSxFQUFFO0FBQ25ELGFBQU87QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUFBLEVBRUEsTUFBTSxlQUFlO0FBQ25CLFNBQUssV0FBVyxPQUFPLE9BQU8sQ0FBQyxHQUFHLGtCQUFrQixNQUFNLEtBQUssU0FBUyxDQUFpQztBQUFBLEVBQzNHO0FBQUEsRUFFQSxNQUFNLGVBQWU7QUFBRSxVQUFNLEtBQUssU0FBUyxLQUFLLFFBQVE7QUFBQSxFQUFHO0FBQzdEOyIsCiAgIm5hbWVzIjogWyJtb2R1bGUiLCAid2luZG93IiwgInNlbGYiLCAiaXNCbG9iIiwgImlzUG9zaXRpdmVOdW1iZXIiLCAiQ29tcHJlc3NvciIsICJjYWxsYmFjayIsICJkb25lIiwgIm5leHQiLCAiaW1wb3J0X29ic2lkaWFuIiwgIkNvbXByZXNzb3IiLCAiaW1wb3J0X29ic2lkaWFuIiwgImltcG9ydF9vYnNpZGlhbiJdCn0K
