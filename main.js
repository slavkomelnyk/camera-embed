"use strict";
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
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
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
        if (typeof input !== "object" || input === null)
          return input;
        var prim = input[Symbol.toPrimitive];
        if (prim !== void 0) {
          var res = prim.call(input, hint || "default");
          if (typeof res !== "object")
            return res;
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
          case 2:
            scaleX = -1;
            break;
          case 3:
            rotate = -180;
            break;
          case 4:
            scaleY = -1;
            break;
          case 5:
            rotate = 90;
            scaleY = -1;
            break;
          case 6:
            rotate = 90;
            break;
          case 7:
            rotate = 90;
            scaleX = -1;
            break;
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

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => AndroidCameraEmbedPlugin
});
module.exports = __toCommonJS(main_exports);
var import_compressorjs = __toESM(require_compressor());
var import_obsidian = require("obsidian");
var DEFAULT_SETTINGS = {
  photosFolder: "",
  createFolderIfMissing: true,
  compressImages: false,
  compressQuality: 0.8
};
var AndroidCameraEmbedPlugin = class extends import_obsidian.Plugin {
  constructor() {
    super(...arguments);
    this.settings = DEFAULT_SETTINGS;
  }
  async onload() {
    await this.loadSettings();
    this.addSettingTab(new AndroidCameraEmbedSettingTab(this.app, this));
    (0, import_obsidian.addIcon)(
      "android-camera",
      '<svg viewBox="0 0 100 100"><path fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" d="M81 79H19c-4 0-8-4-8-8V33c0-4 4-8 8-8h13l6-10h24l6 10h13c4 0 8 4 8 8v38c0 4-4 8-8 8Z"/><circle fill="none" stroke="currentColor" stroke-width="6" cx="50" cy="52" r="17"/></svg>'
    );
    this.addRibbonIcon("android-camera", "Capture photo", () => {
      void this.captureAndEmbed();
    });
    this.addCommand({
      id: "capture-photo-embed",
      name: "Capture photo and embed",
      icon: "android-camera",
      callback: () => {
        void this.captureAndEmbed();
      }
    });
  }
  async captureAndEmbed() {
    const view = this.app.workspace.getActiveViewOfType(import_obsidian.MarkdownView);
    if (!view) {
      new import_obsidian.Notice("Please open a markdown note to insert the photo.");
      return;
    }
    const activeFile = view.file;
    if (!activeFile) {
      new import_obsidian.Notice("No active note to insert the photo.");
      return;
    }
    const file = await this.pickImageFromCamera();
    if (!file) {
      return;
    }
    let finalFile = file;
    if (this.settings.compressImages) {
      finalFile = await this.compressImage(file);
    }
    const arrayBuffer = await finalFile.arrayBuffer();
    const parent = this.app.fileManager.getNewFileParent(activeFile.path);
    const targetFolderPath = await this.ensureTargetFolder(parent);
    if (!targetFolderPath) {
      return;
    }
    const fileName = this.buildFileName(file);
    const targetPath = this.getAvailablePath(
      this.joinPath(targetFolderPath, fileName)
    );
    const created = await this.app.vault.createBinary(targetPath, arrayBuffer);
    const link = this.app.fileManager.generateMarkdownLink(created, activeFile.path);
    view.editor.replaceSelection(`!${link}`);
  }
  async compressImage(file) {
    return new Promise((resolve, reject) => {
      new import_compressorjs.default(file, {
        quality: this.settings.compressQuality,
        maxWidth: 1920,
        maxHeight: 1080,
        convertSize: 0,
        success: resolve,
        error: reject
      });
    });
  }
  pickImageFromCamera() {
    return new Promise((resolve) => {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";
      input.capture = "environment";
      input.addClass("android-camera-hidden");
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
  buildFileName(file) {
    var _a, _b;
    const stamp = (/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-");
    const fallbackExt = (_a = this.extensionFromType(file.type)) != null ? _a : "jpg";
    const ext = (_b = this.extensionFromName(file.name)) != null ? _b : fallbackExt;
    return `photo-${stamp}.${ext}`;
  }
  extensionFromName(name) {
    const match = name.match(/\.([a-zA-Z0-9]+)$/);
    return match ? match[1] : null;
  }
  extensionFromType(mimeType) {
    if (!mimeType.startsWith("image/")) {
      return null;
    }
    const subtype = mimeType.split("/")[1];
    if (!subtype) {
      return null;
    }
    return subtype.replace("jpeg", "jpg");
  }
  joinPath(parentPath, fileName) {
    if (!parentPath) {
      return fileName;
    }
    return `${parentPath}/${fileName}`;
  }
  getAvailablePath(path) {
    var _a;
    if (!this.app.vault.getAbstractFileByPath(path)) {
      return path;
    }
    const parts = path.split("/");
    const name = (_a = parts.pop()) != null ? _a : path;
    const dir = parts.length > 0 ? `${parts.join("/")}/` : "";
    const extIndex = name.lastIndexOf(".");
    const base = extIndex === -1 ? name : name.slice(0, extIndex);
    const ext = extIndex === -1 ? "" : name.slice(extIndex);
    for (let i = 1; i < 1e3; i += 1) {
      const candidate = `${dir}${base}-${i}${ext}`;
      if (!this.app.vault.getAbstractFileByPath(candidate)) {
        return candidate;
      }
    }
    return `${dir}${base}-${Date.now()}${ext}`;
  }
  async ensureTargetFolder(parent) {
    const rawPath = this.settings.photosFolder.trim();
    if (!rawPath) {
      return parent.path;
    }
    const normalized = (0, import_obsidian.normalizePath)(rawPath);
    const existing = this.app.vault.getAbstractFileByPath(normalized);
    if (existing instanceof import_obsidian.TFolder) {
      return existing.path;
    }
    if (!this.settings.createFolderIfMissing) {
      new import_obsidian.Notice(`Folder not found: ${normalized}`);
      return null;
    }
    try {
      await this.app.vault.createFolder(normalized);
      return normalized;
    } catch (error) {
      new import_obsidian.Notice(`Failed to create folder: ${normalized}`);
      console.error(`${error}`);
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
var AndroidCameraEmbedSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    new import_obsidian.Setting(containerEl).setName("Obsidian Camera Embed").setHeading();
    new import_obsidian.Setting(containerEl).setName("Android only").setDesc("This plugin is intended for Android and is not supported on iOS or desktop.");
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
    new import_obsidian.Setting(containerEl).setName("Compress images").setHeading();
    new import_obsidian.Setting(containerEl).setName("Compress images").setDesc("Reduce photo file sizes by compressing them before saving.").addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.compressImages).onChange(async (value) => {
        this.plugin.settings.compressImages = value;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Compress Quality").setDesc("Adjust the quality of compressed images. Lower values result in smaller files but worse quality.").addSlider(
      (slider) => slider.setLimits(0, 0.9, 0.05).setValue(this.plugin.settings.compressQuality).onChange(async (value) => {
        this.plugin.settings.compressQuality = value;
        await this.plugin.saveSettings();
      })
    );
  }
};
/*! Bundled license information:

compressorjs/dist/compressor.js:
  (*!
   * Compressor.js v1.2.1
   * https://fengyuanchen.github.io/compressorjs
   *
   * Copyright 2018-present Chen Fengyuan
   * Released under the MIT license
   *
   * Date: 2023-02-28T14:09:41.732Z
   *)
*/
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzL2NvbXByZXNzb3Jqcy9kaXN0L2NvbXByZXNzb3IuanMiLCAibWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyohXG4gKiBDb21wcmVzc29yLmpzIHYxLjIuMVxuICogaHR0cHM6Ly9mZW5neXVhbmNoZW4uZ2l0aHViLmlvL2NvbXByZXNzb3Jqc1xuICpcbiAqIENvcHlyaWdodCAyMDE4LXByZXNlbnQgQ2hlbiBGZW5neXVhblxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKlxuICogRGF0ZTogMjAyMy0wMi0yOFQxNDowOTo0MS43MzJaXG4gKi9cblxuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAoZ2xvYmFsID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsVGhpcyA6IGdsb2JhbCB8fCBzZWxmLCBnbG9iYWwuQ29tcHJlc3NvciA9IGZhY3RvcnkoKSk7XG59KSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbiAgZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcbiAgICAgIGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgIH0pKSwga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICAgIH1cbiAgICByZXR1cm4ga2V5cztcbiAgfVxuICBmdW5jdGlvbiBfb2JqZWN0U3ByZWFkMih0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307XG4gICAgICBpICUgMiA/IG93bktleXMoT2JqZWN0KHNvdXJjZSksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKSA6IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG4gIGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgIH0pO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfVxuICBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gICAga2V5ID0gX3RvUHJvcGVydHlLZXkoa2V5KTtcbiAgICBpZiAoa2V5IGluIG9iaikge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH1cbiAgZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gICAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduID8gT2JqZWN0LmFzc2lnbi5iaW5kKCkgOiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG4gICAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cbiAgZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7XG4gICAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0O1xuICAgIHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcbiAgICBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTtcbiAgICAgIGlmICh0eXBlb2YgcmVzICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzO1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpO1xuICAgIH1cbiAgICByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTtcbiAgfVxuICBmdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHtcbiAgICB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7XG4gICAgcmV0dXJuIHR5cGVvZiBrZXkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTtcbiAgfVxuXG4gIHZhciBjYW52YXNUb0Jsb2IgPSB7ZXhwb3J0czoge319O1xuXG4gIC8qXG4gICAqIEphdmFTY3JpcHQgQ2FudmFzIHRvIEJsb2JcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2JsdWVpbXAvSmF2YVNjcmlwdC1DYW52YXMtdG8tQmxvYlxuICAgKlxuICAgKiBDb3B5cmlnaHQgMjAxMiwgU2ViYXN0aWFuIFRzY2hhblxuICAgKiBodHRwczovL2JsdWVpbXAubmV0XG4gICAqXG4gICAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZTpcbiAgICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAgICpcbiAgICogQmFzZWQgb24gc3RhY2tvdmVyZmxvdyB1c2VyIFN0b2l2ZSdzIGNvZGUgc25pcHBldDpcbiAgICogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3EvNDk5ODkwOFxuICAgKi9cbiAgKGZ1bmN0aW9uIChtb2R1bGUpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gICAgKGZ1bmN0aW9uICh3aW5kb3cpIHtcblxuICAgICAgdmFyIENhbnZhc1Byb3RvdHlwZSA9IHdpbmRvdy5IVE1MQ2FudmFzRWxlbWVudCAmJiB3aW5kb3cuSFRNTENhbnZhc0VsZW1lbnQucHJvdG90eXBlO1xuICAgICAgdmFyIGhhc0Jsb2JDb25zdHJ1Y3RvciA9IHdpbmRvdy5CbG9iICYmIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gQm9vbGVhbihuZXcgQmxvYigpKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSgpO1xuICAgICAgdmFyIGhhc0FycmF5QnVmZmVyVmlld1N1cHBvcnQgPSBoYXNCbG9iQ29uc3RydWN0b3IgJiYgd2luZG93LlVpbnQ4QXJyYXkgJiYgZnVuY3Rpb24gKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBuZXcgQmxvYihbbmV3IFVpbnQ4QXJyYXkoMTAwKV0pLnNpemUgPT09IDEwMDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSgpO1xuICAgICAgdmFyIEJsb2JCdWlsZGVyID0gd2luZG93LkJsb2JCdWlsZGVyIHx8IHdpbmRvdy5XZWJLaXRCbG9iQnVpbGRlciB8fCB3aW5kb3cuTW96QmxvYkJ1aWxkZXIgfHwgd2luZG93Lk1TQmxvYkJ1aWxkZXI7XG4gICAgICB2YXIgZGF0YVVSSVBhdHRlcm4gPSAvXmRhdGE6KCguKj8pKDtjaGFyc2V0PS4qPyk/KSg7YmFzZTY0KT8sLztcbiAgICAgIHZhciBkYXRhVVJMdG9CbG9iID0gKGhhc0Jsb2JDb25zdHJ1Y3RvciB8fCBCbG9iQnVpbGRlcikgJiYgd2luZG93LmF0b2IgJiYgd2luZG93LkFycmF5QnVmZmVyICYmIHdpbmRvdy5VaW50OEFycmF5ICYmIGZ1bmN0aW9uIChkYXRhVVJJKSB7XG4gICAgICAgIHZhciBtYXRjaGVzLCBtZWRpYVR5cGUsIGlzQmFzZTY0LCBkYXRhU3RyaW5nLCBieXRlU3RyaW5nLCBhcnJheUJ1ZmZlciwgaW50QXJyYXksIGksIGJiO1xuICAgICAgICAvLyBQYXJzZSB0aGUgZGF0YVVSSSBjb21wb25lbnRzIGFzIHBlciBSRkMgMjM5N1xuICAgICAgICBtYXRjaGVzID0gZGF0YVVSSS5tYXRjaChkYXRhVVJJUGF0dGVybik7XG4gICAgICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBkYXRhIFVSSScpO1xuICAgICAgICB9XG4gICAgICAgIC8vIERlZmF1bHQgdG8gdGV4dC9wbGFpbjtjaGFyc2V0PVVTLUFTQ0lJXG4gICAgICAgIG1lZGlhVHlwZSA9IG1hdGNoZXNbMl0gPyBtYXRjaGVzWzFdIDogJ3RleHQvcGxhaW4nICsgKG1hdGNoZXNbM10gfHwgJztjaGFyc2V0PVVTLUFTQ0lJJyk7XG4gICAgICAgIGlzQmFzZTY0ID0gISFtYXRjaGVzWzRdO1xuICAgICAgICBkYXRhU3RyaW5nID0gZGF0YVVSSS5zbGljZShtYXRjaGVzWzBdLmxlbmd0aCk7XG4gICAgICAgIGlmIChpc0Jhc2U2NCkge1xuICAgICAgICAgIC8vIENvbnZlcnQgYmFzZTY0IHRvIHJhdyBiaW5hcnkgZGF0YSBoZWxkIGluIGEgc3RyaW5nOlxuICAgICAgICAgIGJ5dGVTdHJpbmcgPSBhdG9iKGRhdGFTdHJpbmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIENvbnZlcnQgYmFzZTY0L1VSTEVuY29kZWQgZGF0YSBjb21wb25lbnQgdG8gcmF3IGJpbmFyeTpcbiAgICAgICAgICBieXRlU3RyaW5nID0gZGVjb2RlVVJJQ29tcG9uZW50KGRhdGFTdHJpbmcpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFdyaXRlIHRoZSBieXRlcyBvZiB0aGUgc3RyaW5nIHRvIGFuIEFycmF5QnVmZmVyOlxuICAgICAgICBhcnJheUJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihieXRlU3RyaW5nLmxlbmd0aCk7XG4gICAgICAgIGludEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYnl0ZVN0cmluZy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGludEFycmF5W2ldID0gYnl0ZVN0cmluZy5jaGFyQ29kZUF0KGkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFdyaXRlIHRoZSBBcnJheUJ1ZmZlciAob3IgQXJyYXlCdWZmZXJWaWV3KSB0byBhIGJsb2I6XG4gICAgICAgIGlmIChoYXNCbG9iQ29uc3RydWN0b3IpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IEJsb2IoW2hhc0FycmF5QnVmZmVyVmlld1N1cHBvcnQgPyBpbnRBcnJheSA6IGFycmF5QnVmZmVyXSwge1xuICAgICAgICAgICAgdHlwZTogbWVkaWFUeXBlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgYmIgPSBuZXcgQmxvYkJ1aWxkZXIoKTtcbiAgICAgICAgYmIuYXBwZW5kKGFycmF5QnVmZmVyKTtcbiAgICAgICAgcmV0dXJuIGJiLmdldEJsb2IobWVkaWFUeXBlKTtcbiAgICAgIH07XG4gICAgICBpZiAod2luZG93LkhUTUxDYW52YXNFbGVtZW50ICYmICFDYW52YXNQcm90b3R5cGUudG9CbG9iKSB7XG4gICAgICAgIGlmIChDYW52YXNQcm90b3R5cGUubW96R2V0QXNGaWxlKSB7XG4gICAgICAgICAgQ2FudmFzUHJvdG90eXBlLnRvQmxvYiA9IGZ1bmN0aW9uIChjYWxsYmFjaywgdHlwZSwgcXVhbGl0eSkge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGlmIChxdWFsaXR5ICYmIENhbnZhc1Byb3RvdHlwZS50b0RhdGFVUkwgJiYgZGF0YVVSTHRvQmxvYikge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGFVUkx0b0Jsb2Ioc2VsZi50b0RhdGFVUkwodHlwZSwgcXVhbGl0eSkpKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhzZWxmLm1vekdldEFzRmlsZSgnYmxvYicsIHR5cGUpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChDYW52YXNQcm90b3R5cGUudG9EYXRhVVJMICYmIGRhdGFVUkx0b0Jsb2IpIHtcbiAgICAgICAgICBpZiAoQ2FudmFzUHJvdG90eXBlLm1zVG9CbG9iKSB7XG4gICAgICAgICAgICBDYW52YXNQcm90b3R5cGUudG9CbG9iID0gZnVuY3Rpb24gKGNhbGxiYWNrLCB0eXBlLCBxdWFsaXR5KSB7XG4gICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCh0eXBlICYmIHR5cGUgIT09ICdpbWFnZS9wbmcnIHx8IHF1YWxpdHkpICYmIENhbnZhc1Byb3RvdHlwZS50b0RhdGFVUkwgJiYgZGF0YVVSTHRvQmxvYikge1xuICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YVVSTHRvQmxvYihzZWxmLnRvRGF0YVVSTCh0eXBlLCBxdWFsaXR5KSkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBjYWxsYmFjayhzZWxmLm1zVG9CbG9iKHR5cGUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgQ2FudmFzUHJvdG90eXBlLnRvQmxvYiA9IGZ1bmN0aW9uIChjYWxsYmFjaywgdHlwZSwgcXVhbGl0eSkge1xuICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGFVUkx0b0Jsb2Ioc2VsZi50b0RhdGFVUkwodHlwZSwgcXVhbGl0eSkpKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZGF0YVVSTHRvQmxvYjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5kYXRhVVJMdG9CbG9iID0gZGF0YVVSTHRvQmxvYjtcbiAgICAgIH1cbiAgICB9KSh3aW5kb3cpO1xuICB9KShjYW52YXNUb0Jsb2IpO1xuICB2YXIgdG9CbG9iID0gY2FudmFzVG9CbG9iLmV4cG9ydHM7XG5cbiAgdmFyIGlzQmxvYiA9IGZ1bmN0aW9uIGlzQmxvYih2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgQmxvYiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgQmxvYiB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBCbG9iXSc7XG4gIH07XG5cbiAgdmFyIERFRkFVTFRTID0ge1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyBpZiBvdXRwdXQgdGhlIG9yaWdpbmFsIGltYWdlIGluc3RlYWQgb2YgdGhlIGNvbXByZXNzZWQgb25lXG4gICAgICogd2hlbiB0aGUgc2l6ZSBvZiB0aGUgY29tcHJlc3NlZCBpbWFnZSBpcyBncmVhdGVyIHRoYW4gdGhlIG9yaWdpbmFsIG9uZSdzXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgc3RyaWN0OiB0cnVlLFxuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyBpZiByZWFkIHRoZSBpbWFnZSdzIEV4aWYgT3JpZW50YXRpb24gaW5mb3JtYXRpb24sXG4gICAgICogYW5kIHRoZW4gcm90YXRlIG9yIGZsaXAgdGhlIGltYWdlIGF1dG9tYXRpY2FsbHkuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgY2hlY2tPcmllbnRhdGlvbjogdHJ1ZSxcbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgaWYgcmV0YWluIHRoZSBpbWFnZSdzIEV4aWYgaW5mb3JtYXRpb24gYWZ0ZXIgY29tcHJlc3NlZC5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAqL1xuICAgIHJldGFpbkV4aWY6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIFRoZSBtYXggd2lkdGggb2YgdGhlIG91dHB1dCBpbWFnZS5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIG1heFdpZHRoOiBJbmZpbml0eSxcbiAgICAvKipcbiAgICAgKiBUaGUgbWF4IGhlaWdodCBvZiB0aGUgb3V0cHV0IGltYWdlLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgbWF4SGVpZ2h0OiBJbmZpbml0eSxcbiAgICAvKipcbiAgICAgKiBUaGUgbWluIHdpZHRoIG9mIHRoZSBvdXRwdXQgaW1hZ2UuXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBtaW5XaWR0aDogMCxcbiAgICAvKipcbiAgICAgKiBUaGUgbWluIGhlaWdodCBvZiB0aGUgb3V0cHV0IGltYWdlLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgbWluSGVpZ2h0OiAwLFxuICAgIC8qKlxuICAgICAqIFRoZSB3aWR0aCBvZiB0aGUgb3V0cHV0IGltYWdlLlxuICAgICAqIElmIG5vdCBzcGVjaWZpZWQsIHRoZSBuYXR1cmFsIHdpZHRoIG9mIHRoZSBzb3VyY2UgaW1hZ2Ugd2lsbCBiZSB1c2VkLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgd2lkdGg6IHVuZGVmaW5lZCxcbiAgICAvKipcbiAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBvdXRwdXQgaW1hZ2UuXG4gICAgICogSWYgbm90IHNwZWNpZmllZCwgdGhlIG5hdHVyYWwgaGVpZ2h0IG9mIHRoZSBzb3VyY2UgaW1hZ2Ugd2lsbCBiZSB1c2VkLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgaGVpZ2h0OiB1bmRlZmluZWQsXG4gICAgLyoqXG4gICAgICogU2V0cyBob3cgdGhlIHNpemUgb2YgdGhlIGltYWdlIHNob3VsZCBiZSByZXNpemVkIHRvIHRoZSBjb250YWluZXJcbiAgICAgKiBzcGVjaWZpZWQgYnkgdGhlIGB3aWR0aGAgYW5kIGBoZWlnaHRgIG9wdGlvbnMuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICByZXNpemU6ICdub25lJyxcbiAgICAvKipcbiAgICAgKiBUaGUgcXVhbGl0eSBvZiB0aGUgb3V0cHV0IGltYWdlLlxuICAgICAqIEl0IG11c3QgYmUgYSBudW1iZXIgYmV0d2VlbiBgMGAgYW5kIGAxYCxcbiAgICAgKiBhbmQgb25seSBhdmFpbGFibGUgZm9yIGBpbWFnZS9qcGVnYCBhbmQgYGltYWdlL3dlYnBgIGltYWdlcy5cbiAgICAgKiBDaGVjayBvdXQge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IVE1MQ2FudmFzRWxlbWVudC90b0Jsb2IgY2FudmFzLnRvQmxvYn0uXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBxdWFsaXR5OiAwLjgsXG4gICAgLyoqXG4gICAgICogVGhlIG1pbWUgdHlwZSBvZiB0aGUgb3V0cHV0IGltYWdlLlxuICAgICAqIEJ5IGRlZmF1bHQsIHRoZSBvcmlnaW5hbCBtaW1lIHR5cGUgb2YgdGhlIHNvdXJjZSBpbWFnZSBmaWxlIHdpbGwgYmUgdXNlZC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIG1pbWVUeXBlOiAnYXV0bycsXG4gICAgLyoqXG4gICAgICogRmlsZXMgd2hvc2UgZmlsZSB0eXBlIGlzIGluY2x1ZGVkIGluIHRoaXMgbGlzdCxcbiAgICAgKiBhbmQgd2hvc2UgZmlsZSBzaXplIGV4Y2VlZHMgdGhlIGBjb252ZXJ0U2l6ZWAgdmFsdWUgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gSlBFR3MuXG4gICAgICogQHR5cGUge3N0cmluZ1x1RkY1Q0FycmF5fVxuICAgICAqL1xuICAgIGNvbnZlcnRUeXBlczogWydpbWFnZS9wbmcnXSxcbiAgICAvKipcbiAgICAgKiBQTkcgZmlsZXMgb3ZlciB0aGlzIHNpemUgKDUgTUIgYnkgZGVmYXVsdCkgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gSlBFR3MuXG4gICAgICogVG8gZGlzYWJsZSB0aGlzLCBqdXN0IHNldCB0aGUgdmFsdWUgdG8gYEluZmluaXR5YC5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIGNvbnZlcnRTaXplOiA1MDAwMDAwLFxuICAgIC8qKlxuICAgICAqIFRoZSBob29rIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgYmVmb3JlIGRyYXcgdGhlIGltYWdlIGludG8gdGhlIGNhbnZhcyBmb3IgY29tcHJlc3Npb24uXG4gICAgICogQHR5cGUge0Z1bmN0aW9ufVxuICAgICAqIEBwYXJhbSB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSBjb250ZXh0IC0gVGhlIDJkIHJlbmRlcmluZyBjb250ZXh0IG9mIHRoZSBjYW52YXMuXG4gICAgICogQHBhcmFtIHtIVE1MQ2FudmFzRWxlbWVudH0gY2FudmFzIC0gVGhlIGNhbnZhcyBmb3IgY29tcHJlc3Npb24uXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBmdW5jdGlvbiAoY29udGV4dCwgY2FudmFzKSB7XG4gICAgICogICBjb250ZXh0LmZpbGxTdHlsZSA9ICcjZmZmJztcbiAgICAgKiB9XG4gICAgICovXG4gICAgYmVmb3JlRHJhdzogbnVsbCxcbiAgICAvKipcbiAgICAgKiBUaGUgaG9vayBmdW5jdGlvbiB0byBleGVjdXRlIGFmdGVyIGRyZXcgdGhlIGltYWdlIGludG8gdGhlIGNhbnZhcyBmb3IgY29tcHJlc3Npb24uXG4gICAgICogQHR5cGUge0Z1bmN0aW9ufVxuICAgICAqIEBwYXJhbSB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSBjb250ZXh0IC0gVGhlIDJkIHJlbmRlcmluZyBjb250ZXh0IG9mIHRoZSBjYW52YXMuXG4gICAgICogQHBhcmFtIHtIVE1MQ2FudmFzRWxlbWVudH0gY2FudmFzIC0gVGhlIGNhbnZhcyBmb3IgY29tcHJlc3Npb24uXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBmdW5jdGlvbiAoY29udGV4dCwgY2FudmFzKSB7XG4gICAgICogICBjb250ZXh0LmZpbHRlciA9ICdncmF5c2NhbGUoMTAwJSknO1xuICAgICAqIH1cbiAgICAgKi9cbiAgICBkcmV3OiBudWxsLFxuICAgIC8qKlxuICAgICAqIFRoZSBob29rIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgd2hlbiBzdWNjZXNzIHRvIGNvbXByZXNzIHRoZSBpbWFnZS5cbiAgICAgKiBAdHlwZSB7RnVuY3Rpb259XG4gICAgICogQHBhcmFtIHtGaWxlfSBmaWxlIC0gVGhlIGNvbXByZXNzZWQgaW1hZ2UgRmlsZSBvYmplY3QuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBmdW5jdGlvbiAoZmlsZSkge1xuICAgICAqICAgY29uc29sZS5sb2coZmlsZSk7XG4gICAgICogfVxuICAgICAqL1xuICAgIHN1Y2Nlc3M6IG51bGwsXG4gICAgLyoqXG4gICAgICogVGhlIGhvb2sgZnVuY3Rpb24gdG8gZXhlY3V0ZSB3aGVuIGZhaWwgdG8gY29tcHJlc3MgdGhlIGltYWdlLlxuICAgICAqIEB0eXBlIHtGdW5jdGlvbn1cbiAgICAgKiBAcGFyYW0ge0Vycm9yfSBlcnIgLSBBbiBFcnJvciBvYmplY3QuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICogICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XG4gICAgICogfVxuICAgICAqL1xuICAgIGVycm9yOiBudWxsXG4gIH07XG5cbiAgdmFyIElTX0JST1dTRVIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50ICE9PSAndW5kZWZpbmVkJztcbiAgdmFyIFdJTkRPVyA9IElTX0JST1dTRVIgPyB3aW5kb3cgOiB7fTtcblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgcG9zaXRpdmUgbnVtYmVyLlxuICAgKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNoZWNrLlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgcG9zaXRpdmUgbnVtYmVyLCBlbHNlIGBmYWxzZWAuXG4gICAqL1xuICB2YXIgaXNQb3NpdGl2ZU51bWJlciA9IGZ1bmN0aW9uIGlzUG9zaXRpdmVOdW1iZXIodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPiAwICYmIHZhbHVlIDwgSW5maW5pdHk7XG4gIH07XG4gIHZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblxuICAvKipcbiAgICogQ29udmVydCBhcnJheS1saWtlIG9yIGl0ZXJhYmxlIG9iamVjdCB0byBhbiBhcnJheS5cbiAgICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICAgKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYSBuZXcgYXJyYXkuXG4gICAqL1xuICBmdW5jdGlvbiB0b0FycmF5KHZhbHVlKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20gPyBBcnJheS5mcm9tKHZhbHVlKSA6IHNsaWNlLmNhbGwodmFsdWUpO1xuICB9XG4gIHZhciBSRUdFWFBfSU1BR0VfVFlQRSA9IC9eaW1hZ2VcXC8uKyQvO1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBtaW1lIHR5cGUgb2YgaW1hZ2UuXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZ2l2ZW4gaXMgYSBtaW1lIHR5cGUgb2YgaW1hZ2UsIGVsc2UgYGZhbHNlYC5cbiAgICovXG4gIGZ1bmN0aW9uIGlzSW1hZ2VUeXBlKHZhbHVlKSB7XG4gICAgcmV0dXJuIFJFR0VYUF9JTUFHRV9UWVBFLnRlc3QodmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgaW1hZ2UgdHlwZSB0byBleHRlbnNpb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFRoZSBpbWFnZSB0eXBlIHRvIGNvbnZlcnQuXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIHRoZSBpbWFnZSBleHRlbnNpb24uXG4gICAqL1xuICBmdW5jdGlvbiBpbWFnZVR5cGVUb0V4dGVuc2lvbih2YWx1ZSkge1xuICAgIHZhciBleHRlbnNpb24gPSBpc0ltYWdlVHlwZSh2YWx1ZSkgPyB2YWx1ZS5zdWJzdHIoNikgOiAnJztcbiAgICBpZiAoZXh0ZW5zaW9uID09PSAnanBlZycpIHtcbiAgICAgIGV4dGVuc2lvbiA9ICdqcGcnO1xuICAgIH1cbiAgICByZXR1cm4gXCIuXCIuY29uY2F0KGV4dGVuc2lvbik7XG4gIH1cbiAgdmFyIGZyb21DaGFyQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGU7XG5cbiAgLyoqXG4gICAqIEdldCBzdHJpbmcgZnJvbSBjaGFyIGNvZGUgaW4gZGF0YSB2aWV3LlxuICAgKiBAcGFyYW0ge0RhdGFWaWV3fSBkYXRhVmlldyAtIFRoZSBkYXRhIHZpZXcgZm9yIHJlYWQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCAtIFRoZSBzdGFydCBpbmRleC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCAtIFRoZSByZWFkIGxlbmd0aC5cbiAgICogQHJldHVybnMge3N0cmluZ30gVGhlIHJlYWQgcmVzdWx0LlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0U3RyaW5nRnJvbUNoYXJDb2RlKGRhdGFWaWV3LCBzdGFydCwgbGVuZ3RoKSB7XG4gICAgdmFyIHN0ciA9ICcnO1xuICAgIHZhciBpO1xuICAgIGxlbmd0aCArPSBzdGFydDtcbiAgICBmb3IgKGkgPSBzdGFydDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBzdHIgKz0gZnJvbUNoYXJDb2RlKGRhdGFWaWV3LmdldFVpbnQ4KGkpKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuICB2YXIgYnRvYSA9IFdJTkRPVy5idG9hO1xuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm0gYXJyYXkgYnVmZmVyIHRvIERhdGEgVVJMLlxuICAgKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBhcnJheUJ1ZmZlciAtIFRoZSBhcnJheSBidWZmZXIgdG8gdHJhbnNmb3JtLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWltZVR5cGUgLSBUaGUgbWltZSB0eXBlIG9mIHRoZSBEYXRhIFVSTC5cbiAgICogQHJldHVybnMge3N0cmluZ30gVGhlIHJlc3VsdCBEYXRhIFVSTC5cbiAgICovXG4gIGZ1bmN0aW9uIGFycmF5QnVmZmVyVG9EYXRhVVJMKGFycmF5QnVmZmVyLCBtaW1lVHlwZSkge1xuICAgIHZhciBjaHVua3MgPSBbXTtcbiAgICB2YXIgY2h1bmtTaXplID0gODE5MjtcbiAgICB2YXIgdWludDggPSBuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcik7XG4gICAgd2hpbGUgKHVpbnQ4Lmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIFhYWDogQmFiZWwncyBgdG9Db25zdW1hYmxlQXJyYXlgIGhlbHBlciB3aWxsIHRocm93IGVycm9yIGluIElFIG9yIFNhZmFyaSA5XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXNwcmVhZFxuICAgICAgY2h1bmtzLnB1c2goZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIHRvQXJyYXkodWludDguc3ViYXJyYXkoMCwgY2h1bmtTaXplKSkpKTtcbiAgICAgIHVpbnQ4ID0gdWludDguc3ViYXJyYXkoY2h1bmtTaXplKTtcbiAgICB9XG4gICAgcmV0dXJuIFwiZGF0YTpcIi5jb25jYXQobWltZVR5cGUsIFwiO2Jhc2U2NCxcIikuY29uY2F0KGJ0b2EoY2h1bmtzLmpvaW4oJycpKSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IG9yaWVudGF0aW9uIHZhbHVlIGZyb20gZ2l2ZW4gYXJyYXkgYnVmZmVyLlxuICAgKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBhcnJheUJ1ZmZlciAtIFRoZSBhcnJheSBidWZmZXIgdG8gcmVhZC5cbiAgICogQHJldHVybnMge251bWJlcn0gVGhlIHJlYWQgb3JpZW50YXRpb24gdmFsdWUuXG4gICAqL1xuICBmdW5jdGlvbiByZXNldEFuZEdldE9yaWVudGF0aW9uKGFycmF5QnVmZmVyKSB7XG4gICAgdmFyIGRhdGFWaWV3ID0gbmV3IERhdGFWaWV3KGFycmF5QnVmZmVyKTtcbiAgICB2YXIgb3JpZW50YXRpb247XG5cbiAgICAvLyBJZ25vcmVzIHJhbmdlIGVycm9yIHdoZW4gdGhlIGltYWdlIGRvZXMgbm90IGhhdmUgY29ycmVjdCBFeGlmIGluZm9ybWF0aW9uXG4gICAgdHJ5IHtcbiAgICAgIHZhciBsaXR0bGVFbmRpYW47XG4gICAgICB2YXIgYXBwMVN0YXJ0O1xuICAgICAgdmFyIGlmZFN0YXJ0O1xuXG4gICAgICAvLyBPbmx5IGhhbmRsZSBKUEVHIGltYWdlIChzdGFydCBieSAweEZGRDgpXG4gICAgICBpZiAoZGF0YVZpZXcuZ2V0VWludDgoMCkgPT09IDB4RkYgJiYgZGF0YVZpZXcuZ2V0VWludDgoMSkgPT09IDB4RDgpIHtcbiAgICAgICAgdmFyIGxlbmd0aCA9IGRhdGFWaWV3LmJ5dGVMZW5ndGg7XG4gICAgICAgIHZhciBvZmZzZXQgPSAyO1xuICAgICAgICB3aGlsZSAob2Zmc2V0ICsgMSA8IGxlbmd0aCkge1xuICAgICAgICAgIGlmIChkYXRhVmlldy5nZXRVaW50OChvZmZzZXQpID09PSAweEZGICYmIGRhdGFWaWV3LmdldFVpbnQ4KG9mZnNldCArIDEpID09PSAweEUxKSB7XG4gICAgICAgICAgICBhcHAxU3RhcnQgPSBvZmZzZXQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgb2Zmc2V0ICs9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChhcHAxU3RhcnQpIHtcbiAgICAgICAgdmFyIGV4aWZJRENvZGUgPSBhcHAxU3RhcnQgKyA0O1xuICAgICAgICB2YXIgdGlmZk9mZnNldCA9IGFwcDFTdGFydCArIDEwO1xuICAgICAgICBpZiAoZ2V0U3RyaW5nRnJvbUNoYXJDb2RlKGRhdGFWaWV3LCBleGlmSURDb2RlLCA0KSA9PT0gJ0V4aWYnKSB7XG4gICAgICAgICAgdmFyIGVuZGlhbm5lc3MgPSBkYXRhVmlldy5nZXRVaW50MTYodGlmZk9mZnNldCk7XG4gICAgICAgICAgbGl0dGxlRW5kaWFuID0gZW5kaWFubmVzcyA9PT0gMHg0OTQ5O1xuICAgICAgICAgIGlmIChsaXR0bGVFbmRpYW4gfHwgZW5kaWFubmVzcyA9PT0gMHg0RDREIC8qIGJpZ0VuZGlhbiAqLykge1xuICAgICAgICAgICAgaWYgKGRhdGFWaWV3LmdldFVpbnQxNih0aWZmT2Zmc2V0ICsgMiwgbGl0dGxlRW5kaWFuKSA9PT0gMHgwMDJBKSB7XG4gICAgICAgICAgICAgIHZhciBmaXJzdElGRE9mZnNldCA9IGRhdGFWaWV3LmdldFVpbnQzMih0aWZmT2Zmc2V0ICsgNCwgbGl0dGxlRW5kaWFuKTtcbiAgICAgICAgICAgICAgaWYgKGZpcnN0SUZET2Zmc2V0ID49IDB4MDAwMDAwMDgpIHtcbiAgICAgICAgICAgICAgICBpZmRTdGFydCA9IHRpZmZPZmZzZXQgKyBmaXJzdElGRE9mZnNldDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGlmZFN0YXJ0KSB7XG4gICAgICAgIHZhciBfbGVuZ3RoID0gZGF0YVZpZXcuZ2V0VWludDE2KGlmZFN0YXJ0LCBsaXR0bGVFbmRpYW4pO1xuICAgICAgICB2YXIgX29mZnNldDtcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBfbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBfb2Zmc2V0ID0gaWZkU3RhcnQgKyBpICogMTIgKyAyO1xuICAgICAgICAgIGlmIChkYXRhVmlldy5nZXRVaW50MTYoX29mZnNldCwgbGl0dGxlRW5kaWFuKSA9PT0gMHgwMTEyIC8qIE9yaWVudGF0aW9uICovKSB7XG4gICAgICAgICAgICAvLyA4IGlzIHRoZSBvZmZzZXQgb2YgdGhlIGN1cnJlbnQgdGFnJ3MgdmFsdWVcbiAgICAgICAgICAgIF9vZmZzZXQgKz0gODtcblxuICAgICAgICAgICAgLy8gR2V0IHRoZSBvcmlnaW5hbCBvcmllbnRhdGlvbiB2YWx1ZVxuICAgICAgICAgICAgb3JpZW50YXRpb24gPSBkYXRhVmlldy5nZXRVaW50MTYoX29mZnNldCwgbGl0dGxlRW5kaWFuKTtcblxuICAgICAgICAgICAgLy8gT3ZlcnJpZGUgdGhlIG9yaWVudGF0aW9uIHdpdGggaXRzIGRlZmF1bHQgdmFsdWVcbiAgICAgICAgICAgIGRhdGFWaWV3LnNldFVpbnQxNihfb2Zmc2V0LCAxLCBsaXR0bGVFbmRpYW4pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgb3JpZW50YXRpb24gPSAxO1xuICAgIH1cbiAgICByZXR1cm4gb3JpZW50YXRpb247XG4gIH1cblxuICAvKipcbiAgICogUGFyc2UgRXhpZiBPcmllbnRhdGlvbiB2YWx1ZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IG9yaWVudGF0aW9uIC0gVGhlIG9yaWVudGF0aW9uIHRvIHBhcnNlLlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgcGFyc2VkIHJlc3VsdC5cbiAgICovXG4gIGZ1bmN0aW9uIHBhcnNlT3JpZW50YXRpb24ob3JpZW50YXRpb24pIHtcbiAgICB2YXIgcm90YXRlID0gMDtcbiAgICB2YXIgc2NhbGVYID0gMTtcbiAgICB2YXIgc2NhbGVZID0gMTtcbiAgICBzd2l0Y2ggKG9yaWVudGF0aW9uKSB7XG4gICAgICAvLyBGbGlwIGhvcml6b250YWxcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgc2NhbGVYID0gLTE7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvLyBSb3RhdGUgbGVmdCAxODBcdTAwQjBcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcm90YXRlID0gLTE4MDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8vIEZsaXAgdmVydGljYWxcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgc2NhbGVZID0gLTE7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvLyBGbGlwIHZlcnRpY2FsIGFuZCByb3RhdGUgcmlnaHQgOTBcdTAwQjBcbiAgICAgIGNhc2UgNTpcbiAgICAgICAgcm90YXRlID0gOTA7XG4gICAgICAgIHNjYWxlWSA9IC0xO1xuICAgICAgICBicmVhaztcblxuICAgICAgLy8gUm90YXRlIHJpZ2h0IDkwXHUwMEIwXG4gICAgICBjYXNlIDY6XG4gICAgICAgIHJvdGF0ZSA9IDkwO1xuICAgICAgICBicmVhaztcblxuICAgICAgLy8gRmxpcCBob3Jpem9udGFsIGFuZCByb3RhdGUgcmlnaHQgOTBcdTAwQjBcbiAgICAgIGNhc2UgNzpcbiAgICAgICAgcm90YXRlID0gOTA7XG4gICAgICAgIHNjYWxlWCA9IC0xO1xuICAgICAgICBicmVhaztcblxuICAgICAgLy8gUm90YXRlIGxlZnQgOTBcdTAwQjBcbiAgICAgIGNhc2UgODpcbiAgICAgICAgcm90YXRlID0gLTkwO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHJvdGF0ZTogcm90YXRlLFxuICAgICAgc2NhbGVYOiBzY2FsZVgsXG4gICAgICBzY2FsZVk6IHNjYWxlWVxuICAgIH07XG4gIH1cbiAgdmFyIFJFR0VYUF9ERUNJTUFMUyA9IC9cXC5cXGQqKD86MHw5KXsxMn1cXGQqJC87XG5cbiAgLyoqXG4gICAqIE5vcm1hbGl6ZSBkZWNpbWFsIG51bWJlci5cbiAgICogQ2hlY2sgb3V0IHtAbGluayBodHRwczovLzAuMzAwMDAwMDAwMDAwMDAwMDQuY29tL31cbiAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIG5vcm1hbGl6ZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IFt0aW1lcz0xMDAwMDAwMDAwMDBdIC0gVGhlIHRpbWVzIGZvciBub3JtYWxpemluZy5cbiAgICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbm9ybWFsaXplZCBudW1iZXIuXG4gICAqL1xuICBmdW5jdGlvbiBub3JtYWxpemVEZWNpbWFsTnVtYmVyKHZhbHVlKSB7XG4gICAgdmFyIHRpbWVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAxMDAwMDAwMDAwMDA7XG4gICAgcmV0dXJuIFJFR0VYUF9ERUNJTUFMUy50ZXN0KHZhbHVlKSA/IE1hdGgucm91bmQodmFsdWUgKiB0aW1lcykgLyB0aW1lcyA6IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbWF4IHNpemVzIGluIGEgcmVjdGFuZ2xlIHVuZGVyIHRoZSBnaXZlbiBhc3BlY3QgcmF0aW8uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gVGhlIG9yaWdpbmFsIHNpemVzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3R5cGU9J2NvbnRhaW4nXSAtIFRoZSBhZGp1c3QgdHlwZS5cbiAgICogQHJldHVybnMge09iamVjdH0gVGhlIHJlc3VsdCBzaXplcy5cbiAgICovXG4gIGZ1bmN0aW9uIGdldEFkanVzdGVkU2l6ZXMoX3JlZikge1xuICAgIHZhciBhc3BlY3RSYXRpbyA9IF9yZWYuYXNwZWN0UmF0aW8sXG4gICAgICBoZWlnaHQgPSBfcmVmLmhlaWdodCxcbiAgICAgIHdpZHRoID0gX3JlZi53aWR0aDtcbiAgICB2YXIgdHlwZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogJ25vbmUnO1xuICAgIHZhciBpc1ZhbGlkV2lkdGggPSBpc1Bvc2l0aXZlTnVtYmVyKHdpZHRoKTtcbiAgICB2YXIgaXNWYWxpZEhlaWdodCA9IGlzUG9zaXRpdmVOdW1iZXIoaGVpZ2h0KTtcbiAgICBpZiAoaXNWYWxpZFdpZHRoICYmIGlzVmFsaWRIZWlnaHQpIHtcbiAgICAgIHZhciBhZGp1c3RlZFdpZHRoID0gaGVpZ2h0ICogYXNwZWN0UmF0aW87XG4gICAgICBpZiAoKHR5cGUgPT09ICdjb250YWluJyB8fCB0eXBlID09PSAnbm9uZScpICYmIGFkanVzdGVkV2lkdGggPiB3aWR0aCB8fCB0eXBlID09PSAnY292ZXInICYmIGFkanVzdGVkV2lkdGggPCB3aWR0aCkge1xuICAgICAgICBoZWlnaHQgPSB3aWR0aCAvIGFzcGVjdFJhdGlvO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2lkdGggPSBoZWlnaHQgKiBhc3BlY3RSYXRpbztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzVmFsaWRXaWR0aCkge1xuICAgICAgaGVpZ2h0ID0gd2lkdGggLyBhc3BlY3RSYXRpbztcbiAgICB9IGVsc2UgaWYgKGlzVmFsaWRIZWlnaHQpIHtcbiAgICAgIHdpZHRoID0gaGVpZ2h0ICogYXNwZWN0UmF0aW87XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogd2lkdGgsXG4gICAgICBoZWlnaHQ6IGhlaWdodFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogR2V0IEV4aWYgaW5mb3JtYXRpb24gZnJvbSB0aGUgZ2l2ZW4gYXJyYXkgYnVmZmVyLlxuICAgKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBhcnJheUJ1ZmZlciAtIFRoZSBhcnJheSBidWZmZXIgdG8gcmVhZC5cbiAgICogQHJldHVybnMge0FycmF5fSBUaGUgcmVhZCBFeGlmIGluZm9ybWF0aW9uLlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0RXhpZihhcnJheUJ1ZmZlcikge1xuICAgIHZhciBhcnJheSA9IHRvQXJyYXkobmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpKTtcbiAgICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICAgIHZhciBzZWdtZW50cyA9IFtdO1xuICAgIHZhciBzdGFydCA9IDA7XG4gICAgd2hpbGUgKHN0YXJ0ICsgMyA8IGxlbmd0aCkge1xuICAgICAgdmFyIHZhbHVlID0gYXJyYXlbc3RhcnRdO1xuICAgICAgdmFyIG5leHQgPSBhcnJheVtzdGFydCArIDFdO1xuXG4gICAgICAvLyBTT1MgKFN0YXJ0IG9mIFNjYW4pXG4gICAgICBpZiAodmFsdWUgPT09IDB4RkYgJiYgbmV4dCA9PT0gMHhEQSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgLy8gU09JIChTdGFydCBvZiBJbWFnZSlcbiAgICAgIGlmICh2YWx1ZSA9PT0gMHhGRiAmJiBuZXh0ID09PSAweEQ4KSB7XG4gICAgICAgIHN0YXJ0ICs9IDI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgb2Zmc2V0ID0gYXJyYXlbc3RhcnQgKyAyXSAqIDI1NiArIGFycmF5W3N0YXJ0ICsgM107XG4gICAgICAgIHZhciBlbmQgPSBzdGFydCArIG9mZnNldCArIDI7XG4gICAgICAgIHZhciBzZWdtZW50ID0gYXJyYXkuc2xpY2Uoc3RhcnQsIGVuZCk7XG4gICAgICAgIHNlZ21lbnRzLnB1c2goc2VnbWVudCk7XG4gICAgICAgIHN0YXJ0ID0gZW5kO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2VnbWVudHMucmVkdWNlKGZ1bmN0aW9uIChleGlmQXJyYXksIGN1cnJlbnQpIHtcbiAgICAgIGlmIChjdXJyZW50WzBdID09PSAweEZGICYmIGN1cnJlbnRbMV0gPT09IDB4RTEpIHtcbiAgICAgICAgcmV0dXJuIGV4aWZBcnJheS5jb25jYXQoY3VycmVudCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZXhpZkFycmF5O1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnNlcnQgRXhpZiBpbmZvcm1hdGlvbiBpbnRvIHRoZSBnaXZlbiBhcnJheSBidWZmZXIuXG4gICAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGFycmF5QnVmZmVyIC0gVGhlIGFycmF5IGJ1ZmZlciB0byB0cmFuc2Zvcm0uXG4gICAqIEBwYXJhbSB7QXJyYXl9IGV4aWZBcnJheSAtIFRoZSBFeGlmIGluZm9ybWF0aW9uIHRvIGluc2VydC5cbiAgICogQHJldHVybnMge0FycmF5QnVmZmVyfSBUaGUgdHJhbnNmb3JtZWQgYXJyYXkgYnVmZmVyLlxuICAgKi9cbiAgZnVuY3Rpb24gaW5zZXJ0RXhpZihhcnJheUJ1ZmZlciwgZXhpZkFycmF5KSB7XG4gICAgdmFyIGFycmF5ID0gdG9BcnJheShuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcikpO1xuICAgIGlmIChhcnJheVsyXSAhPT0gMHhGRiB8fCBhcnJheVszXSAhPT0gMHhFMCkge1xuICAgICAgcmV0dXJuIGFycmF5QnVmZmVyO1xuICAgIH1cbiAgICB2YXIgYXBwMExlbmd0aCA9IGFycmF5WzRdICogMjU2ICsgYXJyYXlbNV07XG4gICAgdmFyIG5ld0FycmF5QnVmZmVyID0gWzB4RkYsIDB4RDhdLmNvbmNhdChleGlmQXJyYXksIGFycmF5LnNsaWNlKDQgKyBhcHAwTGVuZ3RoKSk7XG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KG5ld0FycmF5QnVmZmVyKTtcbiAgfVxuXG4gIHZhciBBcnJheUJ1ZmZlciQxID0gV0lORE9XLkFycmF5QnVmZmVyLFxuICAgIEZpbGVSZWFkZXIgPSBXSU5ET1cuRmlsZVJlYWRlcjtcbiAgdmFyIFVSTCA9IFdJTkRPVy5VUkwgfHwgV0lORE9XLndlYmtpdFVSTDtcbiAgdmFyIFJFR0VYUF9FWFRFTlNJT04gPSAvXFwuXFx3KyQvO1xuICB2YXIgQW5vdGhlckNvbXByZXNzb3IgPSBXSU5ET1cuQ29tcHJlc3NvcjtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBpbWFnZSBjb21wcmVzc29yLlxuICAgKiBAY2xhc3NcbiAgICovXG4gIHZhciBDb21wcmVzc29yID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgY29uc3RydWN0b3Igb2YgQ29tcHJlc3Nvci5cbiAgICAgKiBAcGFyYW0ge0ZpbGV8QmxvYn0gZmlsZSAtIFRoZSB0YXJnZXQgaW1hZ2UgZmlsZSBmb3IgY29tcHJlc3NpbmcuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIFRoZSBvcHRpb25zIGZvciBjb21wcmVzc2luZy5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBDb21wcmVzc29yKGZpbGUsIG9wdGlvbnMpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb21wcmVzc29yKTtcbiAgICAgIHRoaXMuZmlsZSA9IGZpbGU7XG4gICAgICB0aGlzLmV4aWYgPSBbXTtcbiAgICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIHRoaXMub3B0aW9ucyA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBERUZBVUxUUyksIG9wdGlvbnMpO1xuICAgICAgdGhpcy5hYm9ydGVkID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc3VsdCA9IG51bGw7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG4gICAgX2NyZWF0ZUNsYXNzKENvbXByZXNzb3IsIFt7XG4gICAgICBrZXk6IFwiaW5pdFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBmaWxlID0gdGhpcy5maWxlLFxuICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGlmICghaXNCbG9iKGZpbGUpKSB7XG4gICAgICAgICAgdGhpcy5mYWlsKG5ldyBFcnJvcignVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBGaWxlIG9yIEJsb2Igb2JqZWN0LicpKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1pbWVUeXBlID0gZmlsZS50eXBlO1xuICAgICAgICBpZiAoIWlzSW1hZ2VUeXBlKG1pbWVUeXBlKSkge1xuICAgICAgICAgIHRoaXMuZmFpbChuZXcgRXJyb3IoJ1RoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGFuIGltYWdlIEZpbGUgb3IgQmxvYiBvYmplY3QuJykpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVVSTCB8fCAhRmlsZVJlYWRlcikge1xuICAgICAgICAgIHRoaXMuZmFpbChuZXcgRXJyb3IoJ1RoZSBjdXJyZW50IGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBpbWFnZSBjb21wcmVzc2lvbi4nKSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghQXJyYXlCdWZmZXIkMSkge1xuICAgICAgICAgIG9wdGlvbnMuY2hlY2tPcmllbnRhdGlvbiA9IGZhbHNlO1xuICAgICAgICAgIG9wdGlvbnMucmV0YWluRXhpZiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpc0pQRUdJbWFnZSA9IG1pbWVUeXBlID09PSAnaW1hZ2UvanBlZyc7XG4gICAgICAgIHZhciBjaGVja09yaWVudGF0aW9uID0gaXNKUEVHSW1hZ2UgJiYgb3B0aW9ucy5jaGVja09yaWVudGF0aW9uO1xuICAgICAgICB2YXIgcmV0YWluRXhpZiA9IGlzSlBFR0ltYWdlICYmIG9wdGlvbnMucmV0YWluRXhpZjtcbiAgICAgICAgaWYgKFVSTCAmJiAhY2hlY2tPcmllbnRhdGlvbiAmJiAhcmV0YWluRXhpZikge1xuICAgICAgICAgIHRoaXMubG9hZCh7XG4gICAgICAgICAgICB1cmw6IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSlcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICB0aGlzLnJlYWRlciA9IHJlYWRlcjtcbiAgICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBfcmVmLnRhcmdldDtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB7fTtcbiAgICAgICAgICAgIHZhciBvcmllbnRhdGlvbiA9IDE7XG4gICAgICAgICAgICBpZiAoY2hlY2tPcmllbnRhdGlvbikge1xuICAgICAgICAgICAgICAvLyBSZXNldCB0aGUgb3JpZW50YXRpb24gdmFsdWUgdG8gaXRzIGRlZmF1bHQgdmFsdWUgMVxuICAgICAgICAgICAgICAvLyBhcyBzb21lIGlPUyBicm93c2VycyB3aWxsIHJlbmRlciBpbWFnZSB3aXRoIGl0cyBvcmllbnRhdGlvblxuICAgICAgICAgICAgICBvcmllbnRhdGlvbiA9IHJlc2V0QW5kR2V0T3JpZW50YXRpb24ocmVzdWx0KTtcbiAgICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID4gMSkge1xuICAgICAgICAgICAgICAgIF9leHRlbmRzKGRhdGEsIHBhcnNlT3JpZW50YXRpb24ob3JpZW50YXRpb24pKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJldGFpbkV4aWYpIHtcbiAgICAgICAgICAgICAgX3RoaXMuZXhpZiA9IGdldEV4aWYocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaGVja09yaWVudGF0aW9uIHx8IHJldGFpbkV4aWYpIHtcbiAgICAgICAgICAgICAgaWYgKCFVUkxcblxuICAgICAgICAgICAgICAvLyBHZW5lcmF0ZSBhIG5ldyBVUkwgd2l0aCB0aGUgZGVmYXVsdCBvcmllbnRhdGlvbiB2YWx1ZSAxLlxuICAgICAgICAgICAgICB8fCBvcmllbnRhdGlvbiA+IDEpIHtcbiAgICAgICAgICAgICAgICBkYXRhLnVybCA9IGFycmF5QnVmZmVyVG9EYXRhVVJMKHJlc3VsdCwgbWltZVR5cGUpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGEudXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGF0YS51cmwgPSByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy5sb2FkKGRhdGEpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgcmVhZGVyLm9uYWJvcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5mYWlsKG5ldyBFcnJvcignQWJvcnRlZCB0byByZWFkIHRoZSBpbWFnZSB3aXRoIEZpbGVSZWFkZXIuJykpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5mYWlsKG5ldyBFcnJvcignRmFpbGVkIHRvIHJlYWQgdGhlIGltYWdlIHdpdGggRmlsZVJlYWRlci4nKSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMucmVhZGVyID0gbnVsbDtcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmIChjaGVja09yaWVudGF0aW9uIHx8IHJldGFpbkV4aWYpIHtcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihmaWxlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImxvYWRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkKGRhdGEpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG4gICAgICAgIHZhciBmaWxlID0gdGhpcy5maWxlLFxuICAgICAgICAgIGltYWdlID0gdGhpcy5pbWFnZTtcbiAgICAgICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMi5kcmF3KF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBkYXRhKSwge30sIHtcbiAgICAgICAgICAgIG5hdHVyYWxXaWR0aDogaW1hZ2UubmF0dXJhbFdpZHRoLFxuICAgICAgICAgICAgbmF0dXJhbEhlaWdodDogaW1hZ2UubmF0dXJhbEhlaWdodFxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfTtcbiAgICAgICAgaW1hZ2Uub25hYm9ydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczIuZmFpbChuZXcgRXJyb3IoJ0Fib3J0ZWQgdG8gbG9hZCB0aGUgaW1hZ2UuJykpO1xuICAgICAgICB9O1xuICAgICAgICBpbWFnZS5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMi5mYWlsKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgdGhlIGltYWdlLicpKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBNYXRjaCBhbGwgYnJvd3NlcnMgdGhhdCB1c2UgV2ViS2l0IGFzIHRoZSBsYXlvdXQgZW5naW5lIGluIGlPUyBkZXZpY2VzLFxuICAgICAgICAvLyBzdWNoIGFzIFNhZmFyaSBmb3IgaU9TLCBDaHJvbWUgZm9yIGlPUywgYW5kIGluLWFwcCBicm93c2Vycy5cbiAgICAgICAgaWYgKFdJTkRPVy5uYXZpZ2F0b3IgJiYgLyg/OmlQYWR8aVBob25lfGlQb2QpLio/QXBwbGVXZWJLaXQvaS50ZXN0KFdJTkRPVy5uYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICAgIC8vIEZpeCB0aGUgYFRoZSBvcGVyYXRpb24gaXMgaW5zZWN1cmVgIGVycm9yICgjNTcpXG4gICAgICAgICAgaW1hZ2UuY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJztcbiAgICAgICAgfVxuICAgICAgICBpbWFnZS5hbHQgPSBmaWxlLm5hbWU7XG4gICAgICAgIGltYWdlLnNyYyA9IGRhdGEudXJsO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJkcmF3XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZHJhdyhfcmVmMikge1xuICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcbiAgICAgICAgdmFyIG5hdHVyYWxXaWR0aCA9IF9yZWYyLm5hdHVyYWxXaWR0aCxcbiAgICAgICAgICBuYXR1cmFsSGVpZ2h0ID0gX3JlZjIubmF0dXJhbEhlaWdodCxcbiAgICAgICAgICBfcmVmMiRyb3RhdGUgPSBfcmVmMi5yb3RhdGUsXG4gICAgICAgICAgcm90YXRlID0gX3JlZjIkcm90YXRlID09PSB2b2lkIDAgPyAwIDogX3JlZjIkcm90YXRlLFxuICAgICAgICAgIF9yZWYyJHNjYWxlWCA9IF9yZWYyLnNjYWxlWCxcbiAgICAgICAgICBzY2FsZVggPSBfcmVmMiRzY2FsZVggPT09IHZvaWQgMCA/IDEgOiBfcmVmMiRzY2FsZVgsXG4gICAgICAgICAgX3JlZjIkc2NhbGVZID0gX3JlZjIuc2NhbGVZLFxuICAgICAgICAgIHNjYWxlWSA9IF9yZWYyJHNjYWxlWSA9PT0gdm9pZCAwID8gMSA6IF9yZWYyJHNjYWxlWTtcbiAgICAgICAgdmFyIGZpbGUgPSB0aGlzLmZpbGUsXG4gICAgICAgICAgaW1hZ2UgPSB0aGlzLmltYWdlLFxuICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdmFyIGlzOTBEZWdyZWVzUm90YXRlZCA9IE1hdGguYWJzKHJvdGF0ZSkgJSAxODAgPT09IDkwO1xuICAgICAgICB2YXIgcmVzaXphYmxlID0gKG9wdGlvbnMucmVzaXplID09PSAnY29udGFpbicgfHwgb3B0aW9ucy5yZXNpemUgPT09ICdjb3ZlcicpICYmIGlzUG9zaXRpdmVOdW1iZXIob3B0aW9ucy53aWR0aCkgJiYgaXNQb3NpdGl2ZU51bWJlcihvcHRpb25zLmhlaWdodCk7XG4gICAgICAgIHZhciBtYXhXaWR0aCA9IE1hdGgubWF4KG9wdGlvbnMubWF4V2lkdGgsIDApIHx8IEluZmluaXR5O1xuICAgICAgICB2YXIgbWF4SGVpZ2h0ID0gTWF0aC5tYXgob3B0aW9ucy5tYXhIZWlnaHQsIDApIHx8IEluZmluaXR5O1xuICAgICAgICB2YXIgbWluV2lkdGggPSBNYXRoLm1heChvcHRpb25zLm1pbldpZHRoLCAwKSB8fCAwO1xuICAgICAgICB2YXIgbWluSGVpZ2h0ID0gTWF0aC5tYXgob3B0aW9ucy5taW5IZWlnaHQsIDApIHx8IDA7XG4gICAgICAgIHZhciBhc3BlY3RSYXRpbyA9IG5hdHVyYWxXaWR0aCAvIG5hdHVyYWxIZWlnaHQ7XG4gICAgICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XG4gICAgICAgIGlmIChpczkwRGVncmVlc1JvdGF0ZWQpIHtcbiAgICAgICAgICB2YXIgX3JlZjMgPSBbbWF4SGVpZ2h0LCBtYXhXaWR0aF07XG4gICAgICAgICAgbWF4V2lkdGggPSBfcmVmM1swXTtcbiAgICAgICAgICBtYXhIZWlnaHQgPSBfcmVmM1sxXTtcbiAgICAgICAgICB2YXIgX3JlZjQgPSBbbWluSGVpZ2h0LCBtaW5XaWR0aF07XG4gICAgICAgICAgbWluV2lkdGggPSBfcmVmNFswXTtcbiAgICAgICAgICBtaW5IZWlnaHQgPSBfcmVmNFsxXTtcbiAgICAgICAgICB2YXIgX3JlZjUgPSBbaGVpZ2h0LCB3aWR0aF07XG4gICAgICAgICAgd2lkdGggPSBfcmVmNVswXTtcbiAgICAgICAgICBoZWlnaHQgPSBfcmVmNVsxXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzaXphYmxlKSB7XG4gICAgICAgICAgYXNwZWN0UmF0aW8gPSB3aWR0aCAvIGhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgX2dldEFkanVzdGVkU2l6ZXMgPSBnZXRBZGp1c3RlZFNpemVzKHtcbiAgICAgICAgICBhc3BlY3RSYXRpbzogYXNwZWN0UmF0aW8sXG4gICAgICAgICAgd2lkdGg6IG1heFdpZHRoLFxuICAgICAgICAgIGhlaWdodDogbWF4SGVpZ2h0XG4gICAgICAgIH0sICdjb250YWluJyk7XG4gICAgICAgIG1heFdpZHRoID0gX2dldEFkanVzdGVkU2l6ZXMud2lkdGg7XG4gICAgICAgIG1heEhlaWdodCA9IF9nZXRBZGp1c3RlZFNpemVzLmhlaWdodDtcbiAgICAgICAgdmFyIF9nZXRBZGp1c3RlZFNpemVzMiA9IGdldEFkanVzdGVkU2l6ZXMoe1xuICAgICAgICAgIGFzcGVjdFJhdGlvOiBhc3BlY3RSYXRpbyxcbiAgICAgICAgICB3aWR0aDogbWluV2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBtaW5IZWlnaHRcbiAgICAgICAgfSwgJ2NvdmVyJyk7XG4gICAgICAgIG1pbldpZHRoID0gX2dldEFkanVzdGVkU2l6ZXMyLndpZHRoO1xuICAgICAgICBtaW5IZWlnaHQgPSBfZ2V0QWRqdXN0ZWRTaXplczIuaGVpZ2h0O1xuICAgICAgICBpZiAocmVzaXphYmxlKSB7XG4gICAgICAgICAgdmFyIF9nZXRBZGp1c3RlZFNpemVzMyA9IGdldEFkanVzdGVkU2l6ZXMoe1xuICAgICAgICAgICAgYXNwZWN0UmF0aW86IGFzcGVjdFJhdGlvLFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICAgICAgICB9LCBvcHRpb25zLnJlc2l6ZSk7XG4gICAgICAgICAgd2lkdGggPSBfZ2V0QWRqdXN0ZWRTaXplczMud2lkdGg7XG4gICAgICAgICAgaGVpZ2h0ID0gX2dldEFkanVzdGVkU2l6ZXMzLmhlaWdodDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgX2dldEFkanVzdGVkU2l6ZXM0ID0gZ2V0QWRqdXN0ZWRTaXplcyh7XG4gICAgICAgICAgICBhc3BlY3RSYXRpbzogYXNwZWN0UmF0aW8sXG4gICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHZhciBfZ2V0QWRqdXN0ZWRTaXplczQkd2kgPSBfZ2V0QWRqdXN0ZWRTaXplczQud2lkdGg7XG4gICAgICAgICAgd2lkdGggPSBfZ2V0QWRqdXN0ZWRTaXplczQkd2kgPT09IHZvaWQgMCA/IG5hdHVyYWxXaWR0aCA6IF9nZXRBZGp1c3RlZFNpemVzNCR3aTtcbiAgICAgICAgICB2YXIgX2dldEFkanVzdGVkU2l6ZXM0JGhlID0gX2dldEFkanVzdGVkU2l6ZXM0LmhlaWdodDtcbiAgICAgICAgICBoZWlnaHQgPSBfZ2V0QWRqdXN0ZWRTaXplczQkaGUgPT09IHZvaWQgMCA/IG5hdHVyYWxIZWlnaHQgOiBfZ2V0QWRqdXN0ZWRTaXplczQkaGU7XG4gICAgICAgIH1cbiAgICAgICAgd2lkdGggPSBNYXRoLmZsb29yKG5vcm1hbGl6ZURlY2ltYWxOdW1iZXIoTWF0aC5taW4oTWF0aC5tYXgod2lkdGgsIG1pbldpZHRoKSwgbWF4V2lkdGgpKSk7XG4gICAgICAgIGhlaWdodCA9IE1hdGguZmxvb3Iobm9ybWFsaXplRGVjaW1hbE51bWJlcihNYXRoLm1pbihNYXRoLm1heChoZWlnaHQsIG1pbkhlaWdodCksIG1heEhlaWdodCkpKTtcbiAgICAgICAgdmFyIGRlc3RYID0gLXdpZHRoIC8gMjtcbiAgICAgICAgdmFyIGRlc3RZID0gLWhlaWdodCAvIDI7XG4gICAgICAgIHZhciBkZXN0V2lkdGggPSB3aWR0aDtcbiAgICAgICAgdmFyIGRlc3RIZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHZhciBwYXJhbXMgPSBbXTtcbiAgICAgICAgaWYgKHJlc2l6YWJsZSkge1xuICAgICAgICAgIHZhciBzcmNYID0gMDtcbiAgICAgICAgICB2YXIgc3JjWSA9IDA7XG4gICAgICAgICAgdmFyIHNyY1dpZHRoID0gbmF0dXJhbFdpZHRoO1xuICAgICAgICAgIHZhciBzcmNIZWlnaHQgPSBuYXR1cmFsSGVpZ2h0O1xuICAgICAgICAgIHZhciBfZ2V0QWRqdXN0ZWRTaXplczUgPSBnZXRBZGp1c3RlZFNpemVzKHtcbiAgICAgICAgICAgIGFzcGVjdFJhdGlvOiBhc3BlY3RSYXRpbyxcbiAgICAgICAgICAgIHdpZHRoOiBuYXR1cmFsV2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IG5hdHVyYWxIZWlnaHRcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBjb250YWluOiAnY292ZXInLFxuICAgICAgICAgICAgY292ZXI6ICdjb250YWluJ1xuICAgICAgICAgIH1bb3B0aW9ucy5yZXNpemVdKTtcbiAgICAgICAgICBzcmNXaWR0aCA9IF9nZXRBZGp1c3RlZFNpemVzNS53aWR0aDtcbiAgICAgICAgICBzcmNIZWlnaHQgPSBfZ2V0QWRqdXN0ZWRTaXplczUuaGVpZ2h0O1xuICAgICAgICAgIHNyY1ggPSAobmF0dXJhbFdpZHRoIC0gc3JjV2lkdGgpIC8gMjtcbiAgICAgICAgICBzcmNZID0gKG5hdHVyYWxIZWlnaHQgLSBzcmNIZWlnaHQpIC8gMjtcbiAgICAgICAgICBwYXJhbXMucHVzaChzcmNYLCBzcmNZLCBzcmNXaWR0aCwgc3JjSGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgICBwYXJhbXMucHVzaChkZXN0WCwgZGVzdFksIGRlc3RXaWR0aCwgZGVzdEhlaWdodCk7XG4gICAgICAgIGlmIChpczkwRGVncmVlc1JvdGF0ZWQpIHtcbiAgICAgICAgICB2YXIgX3JlZjYgPSBbaGVpZ2h0LCB3aWR0aF07XG4gICAgICAgICAgd2lkdGggPSBfcmVmNlswXTtcbiAgICAgICAgICBoZWlnaHQgPSBfcmVmNlsxXTtcbiAgICAgICAgfVxuICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgaWYgKCFpc0ltYWdlVHlwZShvcHRpb25zLm1pbWVUeXBlKSkge1xuICAgICAgICAgIG9wdGlvbnMubWltZVR5cGUgPSBmaWxlLnR5cGU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGZpbGxTdHlsZSA9ICd0cmFuc3BhcmVudCc7XG5cbiAgICAgICAgLy8gQ29udmVydHMgUE5HIGZpbGVzIG92ZXIgdGhlIGBjb252ZXJ0U2l6ZWAgdG8gSlBFR3MuXG4gICAgICAgIGlmIChmaWxlLnNpemUgPiBvcHRpb25zLmNvbnZlcnRTaXplICYmIG9wdGlvbnMuY29udmVydFR5cGVzLmluZGV4T2Yob3B0aW9ucy5taW1lVHlwZSkgPj0gMCkge1xuICAgICAgICAgIG9wdGlvbnMubWltZVR5cGUgPSAnaW1hZ2UvanBlZyc7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGlzSlBFR0ltYWdlID0gb3B0aW9ucy5taW1lVHlwZSA9PT0gJ2ltYWdlL2pwZWcnO1xuICAgICAgICBpZiAoaXNKUEVHSW1hZ2UpIHtcbiAgICAgICAgICBmaWxsU3R5bGUgPSAnI2ZmZic7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBPdmVycmlkZSB0aGUgZGVmYXVsdCBmaWxsIGNvbG9yICgjMDAwLCBibGFjaylcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBmaWxsU3R5bGU7XG4gICAgICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIGlmIChvcHRpb25zLmJlZm9yZURyYXcpIHtcbiAgICAgICAgICBvcHRpb25zLmJlZm9yZURyYXcuY2FsbCh0aGlzLCBjb250ZXh0LCBjYW52YXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmFib3J0ZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dC5zYXZlKCk7XG4gICAgICAgIGNvbnRleHQudHJhbnNsYXRlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMik7XG4gICAgICAgIGNvbnRleHQucm90YXRlKHJvdGF0ZSAqIE1hdGguUEkgLyAxODApO1xuICAgICAgICBjb250ZXh0LnNjYWxlKHNjYWxlWCwgc2NhbGVZKTtcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UuYXBwbHkoY29udGV4dCwgW2ltYWdlXS5jb25jYXQocGFyYW1zKSk7XG4gICAgICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICAgICAgICBpZiAob3B0aW9ucy5kcmV3KSB7XG4gICAgICAgICAgb3B0aW9ucy5kcmV3LmNhbGwodGhpcywgY29udGV4dCwgY2FudmFzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5hYm9ydGVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uIGNhbGxiYWNrKGJsb2IpIHtcbiAgICAgICAgICBpZiAoIV90aGlzMy5hYm9ydGVkKSB7XG4gICAgICAgICAgICB2YXIgZG9uZSA9IGZ1bmN0aW9uIGRvbmUocmVzdWx0KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdGhpczMuZG9uZSh7XG4gICAgICAgICAgICAgICAgbmF0dXJhbFdpZHRoOiBuYXR1cmFsV2lkdGgsXG4gICAgICAgICAgICAgICAgbmF0dXJhbEhlaWdodDogbmF0dXJhbEhlaWdodCxcbiAgICAgICAgICAgICAgICByZXN1bHQ6IHJlc3VsdFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoYmxvYiAmJiBpc0pQRUdJbWFnZSAmJiBvcHRpb25zLnJldGFpbkV4aWYgJiYgX3RoaXMzLmV4aWYgJiYgX3RoaXMzLmV4aWYubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICB2YXIgbmV4dCA9IGZ1bmN0aW9uIG5leHQoYXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9uZSh0b0Jsb2IoYXJyYXlCdWZmZXJUb0RhdGFVUkwoaW5zZXJ0RXhpZihhcnJheUJ1ZmZlciwgX3RoaXMzLmV4aWYpLCBvcHRpb25zLm1pbWVUeXBlKSkpO1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBpZiAoYmxvYi5hcnJheUJ1ZmZlcikge1xuICAgICAgICAgICAgICAgIGJsb2IuYXJyYXlCdWZmZXIoKS50aGVuKG5leHQpLmNhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIF90aGlzMy5mYWlsKG5ldyBFcnJvcignRmFpbGVkIHRvIHJlYWQgdGhlIGNvbXByZXNzZWQgaW1hZ2Ugd2l0aCBCbG9iLmFycmF5QnVmZmVyKCkuJykpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgICAgIF90aGlzMy5yZWFkZXIgPSByZWFkZXI7XG4gICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChfcmVmNykge1xuICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IF9yZWY3LnRhcmdldDtcbiAgICAgICAgICAgICAgICAgIG5leHQodGFyZ2V0LnJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZWFkZXIub25hYm9ydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIF90aGlzMy5mYWlsKG5ldyBFcnJvcignQWJvcnRlZCB0byByZWFkIHRoZSBjb21wcmVzc2VkIGltYWdlIHdpdGggRmlsZVJlYWRlci4nKSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZWFkZXIub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIF90aGlzMy5mYWlsKG5ldyBFcnJvcignRmFpbGVkIHRvIHJlYWQgdGhlIGNvbXByZXNzZWQgaW1hZ2Ugd2l0aCBGaWxlUmVhZGVyLicpKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICBfdGhpczMucmVhZGVyID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZG9uZShibG9iKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGlmIChjYW52YXMudG9CbG9iKSB7XG4gICAgICAgICAgY2FudmFzLnRvQmxvYihjYWxsYmFjaywgb3B0aW9ucy5taW1lVHlwZSwgb3B0aW9ucy5xdWFsaXR5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYWxsYmFjayh0b0Jsb2IoY2FudmFzLnRvRGF0YVVSTChvcHRpb25zLm1pbWVUeXBlLCBvcHRpb25zLnF1YWxpdHkpKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZG9uZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRvbmUoX3JlZjgpIHtcbiAgICAgICAgdmFyIG5hdHVyYWxXaWR0aCA9IF9yZWY4Lm5hdHVyYWxXaWR0aCxcbiAgICAgICAgICBuYXR1cmFsSGVpZ2h0ID0gX3JlZjgubmF0dXJhbEhlaWdodCxcbiAgICAgICAgICByZXN1bHQgPSBfcmVmOC5yZXN1bHQ7XG4gICAgICAgIHZhciBmaWxlID0gdGhpcy5maWxlLFxuICAgICAgICAgIGltYWdlID0gdGhpcy5pbWFnZSxcbiAgICAgICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBpZiAoVVJMICYmIGltYWdlLnNyYy5pbmRleE9mKCdibG9iOicpID09PSAwKSB7XG4gICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChpbWFnZS5zcmMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAvLyBSZXR1cm5zIG9yaWdpbmFsIGZpbGUgaWYgdGhlIHJlc3VsdCBpcyBncmVhdGVyIHRoYW4gaXQgYW5kIHdpdGhvdXQgc2l6ZSByZWxhdGVkIG9wdGlvbnNcbiAgICAgICAgICBpZiAob3B0aW9ucy5zdHJpY3QgJiYgIW9wdGlvbnMucmV0YWluRXhpZiAmJiByZXN1bHQuc2l6ZSA+IGZpbGUuc2l6ZSAmJiBvcHRpb25zLm1pbWVUeXBlID09PSBmaWxlLnR5cGUgJiYgIShvcHRpb25zLndpZHRoID4gbmF0dXJhbFdpZHRoIHx8IG9wdGlvbnMuaGVpZ2h0ID4gbmF0dXJhbEhlaWdodCB8fCBvcHRpb25zLm1pbldpZHRoID4gbmF0dXJhbFdpZHRoIHx8IG9wdGlvbnMubWluSGVpZ2h0ID4gbmF0dXJhbEhlaWdodCB8fCBvcHRpb25zLm1heFdpZHRoIDwgbmF0dXJhbFdpZHRoIHx8IG9wdGlvbnMubWF4SGVpZ2h0IDwgbmF0dXJhbEhlaWdodCkpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGZpbGU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIHJlc3VsdC5sYXN0TW9kaWZpZWQgPSBkYXRlLmdldFRpbWUoKTtcbiAgICAgICAgICAgIHJlc3VsdC5sYXN0TW9kaWZpZWREYXRlID0gZGF0ZTtcbiAgICAgICAgICAgIHJlc3VsdC5uYW1lID0gZmlsZS5uYW1lO1xuXG4gICAgICAgICAgICAvLyBDb252ZXJ0IHRoZSBleHRlbnNpb24gdG8gbWF0Y2ggaXRzIHR5cGVcbiAgICAgICAgICAgIGlmIChyZXN1bHQubmFtZSAmJiByZXN1bHQudHlwZSAhPT0gZmlsZS50eXBlKSB7XG4gICAgICAgICAgICAgIHJlc3VsdC5uYW1lID0gcmVzdWx0Lm5hbWUucmVwbGFjZShSRUdFWFBfRVhURU5TSU9OLCBpbWFnZVR5cGVUb0V4dGVuc2lvbihyZXN1bHQudHlwZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBSZXR1cm5zIG9yaWdpbmFsIGZpbGUgaWYgdGhlIHJlc3VsdCBpcyBudWxsIGluIHNvbWUgY2FzZXMuXG4gICAgICAgICAgcmVzdWx0ID0gZmlsZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlc3VsdCA9IHJlc3VsdDtcbiAgICAgICAgaWYgKG9wdGlvbnMuc3VjY2Vzcykge1xuICAgICAgICAgIG9wdGlvbnMuc3VjY2Vzcy5jYWxsKHRoaXMsIHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZmFpbFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGZhaWwoZXJyKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBpZiAob3B0aW9ucy5lcnJvcikge1xuICAgICAgICAgIG9wdGlvbnMuZXJyb3IuY2FsbCh0aGlzLCBlcnIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJhYm9ydFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFib3J0KCkge1xuICAgICAgICBpZiAoIXRoaXMuYWJvcnRlZCkge1xuICAgICAgICAgIHRoaXMuYWJvcnRlZCA9IHRydWU7XG4gICAgICAgICAgaWYgKHRoaXMucmVhZGVyKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWRlci5hYm9ydCgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuaW1hZ2UuY29tcGxldGUpIHtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2Uub25sb2FkID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2Uub25hYm9ydCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZhaWwobmV3IEVycm9yKCdUaGUgY29tcHJlc3Npb24gcHJvY2VzcyBoYXMgYmVlbiBhYm9ydGVkLicpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBHZXQgdGhlIG5vIGNvbmZsaWN0IGNvbXByZXNzb3IgY2xhc3MuXG4gICAgICAgKiBAcmV0dXJucyB7Q29tcHJlc3Nvcn0gVGhlIGNvbXByZXNzb3IgY2xhc3MuXG4gICAgICAgKi9cbiAgICB9XSwgW3tcbiAgICAgIGtleTogXCJub0NvbmZsaWN0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gbm9Db25mbGljdCgpIHtcbiAgICAgICAgd2luZG93LkNvbXByZXNzb3IgPSBBbm90aGVyQ29tcHJlc3NvcjtcbiAgICAgICAgcmV0dXJuIENvbXByZXNzb3I7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2hhbmdlIHRoZSBkZWZhdWx0IG9wdGlvbnMuXG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFRoZSBuZXcgZGVmYXVsdCBvcHRpb25zLlxuICAgICAgICovXG4gICAgfSwge1xuICAgICAga2V5OiBcInNldERlZmF1bHRzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0RGVmYXVsdHMob3B0aW9ucykge1xuICAgICAgICBfZXh0ZW5kcyhERUZBVUxUUywgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBDb21wcmVzc29yO1xuICB9KCk7XG5cbiAgcmV0dXJuIENvbXByZXNzb3I7XG5cbn0pKTtcbiIsICJpbXBvcnQgQ29tcHJlc3NvciBmcm9tIFwiY29tcHJlc3NvcmpzXCI7XG5pbXBvcnQge1xuICBNYXJrZG93blZpZXcsXG4gIE5vdGljZSxcbiAgQXBwLFxuICBQbHVnaW4sXG4gIFBsdWdpblNldHRpbmdUYWIsXG4gIFNldHRpbmcsXG4gIFRGb2xkZXIsXG4gIG5vcm1hbGl6ZVBhdGgsXG4gIGFkZEljb24sXG59IGZyb20gXCJvYnNpZGlhblwiO1xuXG5pbnRlcmZhY2UgQW5kcm9pZENhbWVyYUVtYmVkU2V0dGluZ3Mge1xuICBwaG90b3NGb2xkZXI6IHN0cmluZztcbiAgY3JlYXRlRm9sZGVySWZNaXNzaW5nOiBib29sZWFuO1xuICBjb21wcmVzc0ltYWdlczogYm9vbGVhbjtcbiAgY29tcHJlc3NRdWFsaXR5OiBudW1iZXI7XG59XG5cbmNvbnN0IERFRkFVTFRfU0VUVElOR1M6IEFuZHJvaWRDYW1lcmFFbWJlZFNldHRpbmdzID0ge1xuICBwaG90b3NGb2xkZXI6IFwiXCIsXG4gIGNyZWF0ZUZvbGRlcklmTWlzc2luZzogdHJ1ZSxcbiAgY29tcHJlc3NJbWFnZXM6IGZhbHNlLFxuICBjb21wcmVzc1F1YWxpdHk6IDAuOCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuZHJvaWRDYW1lcmFFbWJlZFBsdWdpbiBleHRlbmRzIFBsdWdpbiB7XG4gIHNldHRpbmdzOiBBbmRyb2lkQ2FtZXJhRW1iZWRTZXR0aW5ncyA9IERFRkFVTFRfU0VUVElOR1M7XG5cbiAgYXN5bmMgb25sb2FkKCkge1xuICAgIC8vIExvYWQgcGVyc2lzdGVkIHNldHRpbmdzIGJlZm9yZSB3aXJpbmcgVUkuXG4gICAgYXdhaXQgdGhpcy5sb2FkU2V0dGluZ3MoKTtcblxuICAgIHRoaXMuYWRkU2V0dGluZ1RhYihuZXcgQW5kcm9pZENhbWVyYUVtYmVkU2V0dGluZ1RhYih0aGlzLmFwcCwgdGhpcykpO1xuXG4gICAgLy8gUmVnaXN0ZXIgY3VzdG9tIGNhbWVyYSBpY29uIHdpdGggdmlld0JveCAwIDAgMTAwIDEwMCAocmVxdWlyZWQgYnkgT2JzaWRpYW4pXG4gICAgYWRkSWNvbihcbiAgICAgIFwiYW5kcm9pZC1jYW1lcmFcIixcbiAgICAgICc8c3ZnIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiPjxwYXRoIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiNlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNODEgNzlIMTljLTQgMC04LTQtOC04VjMzYzAtNCA0LTggOC04aDEzbDYtMTBoMjRsNiAxMGgxM2M0IDAgOCA0IDggOHYzOGMwIDQtNCA4LTggOFpcIi8+PGNpcmNsZSBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjZcIiBjeD1cIjUwXCIgY3k9XCI1MlwiIHI9XCIxN1wiLz48L3N2Zz4nXG4gICAgKTtcblxuICAgIHRoaXMuYWRkUmliYm9uSWNvbihcImFuZHJvaWQtY2FtZXJhXCIsIFwiQ2FwdHVyZSBwaG90b1wiLCAoKSA9PiB7XG4gICAgICB2b2lkIHRoaXMuY2FwdHVyZUFuZEVtYmVkKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6IFwiY2FwdHVyZS1waG90by1lbWJlZFwiLFxuICAgICAgbmFtZTogXCJDYXB0dXJlIHBob3RvIGFuZCBlbWJlZFwiLFxuICAgICAgaWNvbjogXCJhbmRyb2lkLWNhbWVyYVwiLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgdm9pZCB0aGlzLmNhcHR1cmVBbmRFbWJlZCgpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgY2FwdHVyZUFuZEVtYmVkKCkge1xuICAgIC8vIEVuc3VyZSB0aGVyZSdzIGFuIGFjdGl2ZSBtYXJrZG93biBlZGl0b3IgdG8gaW5zZXJ0IHRoZSBpbWFnZS5cbiAgICBjb25zdCB2aWV3ID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZVZpZXdPZlR5cGUoTWFya2Rvd25WaWV3KTtcbiAgICBpZiAoIXZpZXcpIHtcbiAgICAgIG5ldyBOb3RpY2UoXCJQbGVhc2Ugb3BlbiBhIG1hcmtkb3duIG5vdGUgdG8gaW5zZXJ0IHRoZSBwaG90by5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZlRmlsZSA9IHZpZXcuZmlsZTtcbiAgICBpZiAoIWFjdGl2ZUZpbGUpIHtcbiAgICAgIG5ldyBOb3RpY2UoXCJObyBhY3RpdmUgbm90ZSB0byBpbnNlcnQgdGhlIHBob3RvLlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBPcGVuIHRoZSBkZXZpY2UgY2FtZXJhIGFuZCBsZXQgdGhlIHVzZXIgY2FwdHVyZSBhIHBob3RvLlxuICAgIGNvbnN0IGZpbGUgPSBhd2FpdCB0aGlzLnBpY2tJbWFnZUZyb21DYW1lcmEoKTtcbiAgICBpZiAoIWZpbGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgZmluYWxGaWxlOiBCbG9iIHwgRmlsZSA9IGZpbGU7XG5cbiAgICBpZiAodGhpcy5zZXR0aW5ncy5jb21wcmVzc0ltYWdlcykge1xuICAgICAgZmluYWxGaWxlID0gYXdhaXQgdGhpcy5jb21wcmVzc0ltYWdlKGZpbGUpO1xuICAgIH1cblxuICAgIC8vIFNhdmUgdGhlIHBob3RvIGludG8gdGhlIHZhdWx0LlxuICAgIGNvbnN0IGFycmF5QnVmZmVyID0gYXdhaXQgZmluYWxGaWxlLmFycmF5QnVmZmVyKCk7XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5hcHAuZmlsZU1hbmFnZXIuZ2V0TmV3RmlsZVBhcmVudChhY3RpdmVGaWxlLnBhdGgpO1xuICAgIGNvbnN0IHRhcmdldEZvbGRlclBhdGggPSBhd2FpdCB0aGlzLmVuc3VyZVRhcmdldEZvbGRlcihwYXJlbnQpO1xuICAgIGlmICghdGFyZ2V0Rm9sZGVyUGF0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbGVOYW1lID0gdGhpcy5idWlsZEZpbGVOYW1lKGZpbGUpO1xuICAgIGNvbnN0IHRhcmdldFBhdGggPSB0aGlzLmdldEF2YWlsYWJsZVBhdGgoXG4gICAgICB0aGlzLmpvaW5QYXRoKHRhcmdldEZvbGRlclBhdGgsIGZpbGVOYW1lKVxuICAgICk7XG4gICAgY29uc3QgY3JlYXRlZCA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNyZWF0ZUJpbmFyeSh0YXJnZXRQYXRoLCBhcnJheUJ1ZmZlcik7XG5cbiAgICAvLyBJbnNlcnQgYSBtYXJrZG93biBlbWJlZCBmb3IgdGhlIHNhdmVkIGltYWdlLlxuICAgIGNvbnN0IGxpbmsgPSB0aGlzLmFwcC5maWxlTWFuYWdlci5nZW5lcmF0ZU1hcmtkb3duTGluayhjcmVhdGVkLCBhY3RpdmVGaWxlLnBhdGgpO1xuICAgIHZpZXcuZWRpdG9yLnJlcGxhY2VTZWxlY3Rpb24oYCEke2xpbmt9YCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGNvbXByZXNzSW1hZ2UoZmlsZTogRmlsZSk6IFByb21pc2U8QmxvYj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBuZXcgQ29tcHJlc3NvcihmaWxlLCB7XG4gICAgICAgIHF1YWxpdHk6IHRoaXMuc2V0dGluZ3MuY29tcHJlc3NRdWFsaXR5LFxuICAgICAgICBtYXhXaWR0aDogMTkyMCxcbiAgICAgICAgbWF4SGVpZ2h0OiAxMDgwLFxuICAgICAgICBjb252ZXJ0U2l6ZTogMCxcbiAgICAgICAgc3VjY2VzczogcmVzb2x2ZSxcbiAgICAgICAgZXJyb3I6IHJlamVjdCxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBwaWNrSW1hZ2VGcm9tQ2FtZXJhKCk6IFByb21pc2U8RmlsZSB8IG51bGw+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIC8vIE1vYmlsZSBicm93c2VycyB1c2UgdGhlIGNhcHR1cmUgYXR0cmlidXRlIHRvIG9wZW4gdGhlIGNhbWVyYS5cbiAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgaW5wdXQudHlwZSA9IFwiZmlsZVwiO1xuICAgICAgaW5wdXQuYWNjZXB0ID0gXCJpbWFnZS8qXCI7XG4gICAgICBpbnB1dC5jYXB0dXJlID0gXCJlbnZpcm9ubWVudFwiO1xuICAgICAgaW5wdXQuYWRkQ2xhc3MoXCJhbmRyb2lkLWNhbWVyYS1oaWRkZW5cIik7XG5cbiAgICAgIGNvbnN0IHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpbnB1dC5yZW1vdmUoKTtcbiAgICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgIH0sIDYwXzAwMCk7XG5cbiAgICAgIGNvbnN0IGNsZWFudXAgPSAoZmlsZTogRmlsZSB8IG51bGwpID0+IHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgICAgIGlucHV0LnJlbW92ZSgpO1xuICAgICAgICByZXNvbHZlKGZpbGUpO1xuICAgICAgfTtcblxuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBpbnB1dC5maWxlcyAmJiBpbnB1dC5maWxlcy5sZW5ndGggPiAwID8gaW5wdXQuZmlsZXNbMF0gOiBudWxsO1xuICAgICAgICBjbGVhbnVwKGZpbGUpO1xuICAgICAgfSk7XG5cbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgaW5wdXQuY2xpY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRGaWxlTmFtZShmaWxlOiBGaWxlKTogc3RyaW5nIHtcbiAgICAvLyBVc2UgYW4gSVNPIHRpbWVzdGFtcCB0byBrZWVwIGZpbGVuYW1lcyBzb3J0YWJsZS5cbiAgICBjb25zdCBzdGFtcCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5yZXBsYWNlKC9bOi5dL2csIFwiLVwiKTtcbiAgICBjb25zdCBmYWxsYmFja0V4dCA9IHRoaXMuZXh0ZW5zaW9uRnJvbVR5cGUoZmlsZS50eXBlKSA/PyBcImpwZ1wiO1xuICAgIGNvbnN0IGV4dCA9IHRoaXMuZXh0ZW5zaW9uRnJvbU5hbWUoZmlsZS5uYW1lKSA/PyBmYWxsYmFja0V4dDtcbiAgICByZXR1cm4gYHBob3RvLSR7c3RhbXB9LiR7ZXh0fWA7XG4gIH1cblxuICBwcml2YXRlIGV4dGVuc2lvbkZyb21OYW1lKG5hbWU6IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICAgIGNvbnN0IG1hdGNoID0gbmFtZS5tYXRjaCgvXFwuKFthLXpBLVowLTldKykkLyk7XG4gICAgcmV0dXJuIG1hdGNoID8gbWF0Y2hbMV0gOiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBleHRlbnNpb25Gcm9tVHlwZShtaW1lVHlwZTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgaWYgKCFtaW1lVHlwZS5zdGFydHNXaXRoKFwiaW1hZ2UvXCIpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3Qgc3VidHlwZSA9IG1pbWVUeXBlLnNwbGl0KFwiL1wiKVsxXTtcbiAgICBpZiAoIXN1YnR5cGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gc3VidHlwZS5yZXBsYWNlKFwianBlZ1wiLCBcImpwZ1wiKTtcbiAgfVxuXG4gIHByaXZhdGUgam9pblBhdGgocGFyZW50UGF0aDogc3RyaW5nLCBmaWxlTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoIXBhcmVudFBhdGgpIHtcbiAgICAgIHJldHVybiBmaWxlTmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIGAke3BhcmVudFBhdGh9LyR7ZmlsZU5hbWV9YDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QXZhaWxhYmxlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIC8vIEF2b2lkIG92ZXJ3cml0aW5nIGV4aXN0aW5nIGZpbGVzIGJ5IGFkZGluZyBhIHN1ZmZpeC5cbiAgICBpZiAoIXRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChwYXRoKSkge1xuICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfVxuXG4gICAgY29uc3QgcGFydHMgPSBwYXRoLnNwbGl0KFwiL1wiKTtcbiAgICBjb25zdCBuYW1lID0gcGFydHMucG9wKCkgPz8gcGF0aDtcbiAgICBjb25zdCBkaXIgPSBwYXJ0cy5sZW5ndGggPiAwID8gYCR7cGFydHMuam9pbihcIi9cIil9L2AgOiBcIlwiO1xuICAgIGNvbnN0IGV4dEluZGV4ID0gbmFtZS5sYXN0SW5kZXhPZihcIi5cIik7XG4gICAgY29uc3QgYmFzZSA9IGV4dEluZGV4ID09PSAtMSA/IG5hbWUgOiBuYW1lLnNsaWNlKDAsIGV4dEluZGV4KTtcbiAgICBjb25zdCBleHQgPSBleHRJbmRleCA9PT0gLTEgPyBcIlwiIDogbmFtZS5zbGljZShleHRJbmRleCk7XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDEwMDA7IGkgKz0gMSkge1xuICAgICAgY29uc3QgY2FuZGlkYXRlID0gYCR7ZGlyfSR7YmFzZX0tJHtpfSR7ZXh0fWA7XG4gICAgICBpZiAoIXRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChjYW5kaWRhdGUpKSB7XG4gICAgICAgIHJldHVybiBjYW5kaWRhdGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGAke2Rpcn0ke2Jhc2V9LSR7RGF0ZS5ub3coKX0ke2V4dH1gO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBlbnN1cmVUYXJnZXRGb2xkZXIocGFyZW50OiBURm9sZGVyKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gICAgLy8gUmVzb2x2ZSB0aGUgZGVzdGluYXRpb24gZm9sZGVyIGJhc2VkIG9uIHNldHRpbmdzLlxuICAgIGNvbnN0IHJhd1BhdGggPSB0aGlzLnNldHRpbmdzLnBob3Rvc0ZvbGRlci50cmltKCk7XG4gICAgaWYgKCFyYXdQYXRoKSB7XG4gICAgICByZXR1cm4gcGFyZW50LnBhdGg7XG4gICAgfVxuXG4gICAgY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZVBhdGgocmF3UGF0aCk7XG4gICAgY29uc3QgZXhpc3RpbmcgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgobm9ybWFsaXplZCk7XG4gICAgaWYgKGV4aXN0aW5nIGluc3RhbmNlb2YgVEZvbGRlcikge1xuICAgICAgcmV0dXJuIGV4aXN0aW5nLnBhdGg7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnNldHRpbmdzLmNyZWF0ZUZvbGRlcklmTWlzc2luZykge1xuICAgICAgbmV3IE5vdGljZShgRm9sZGVyIG5vdCBmb3VuZDogJHtub3JtYWxpemVkfWApO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIC8vIENyZWF0ZSB0aGUgZm9sZGVyIHRyZWUgaWYgZGVzaXJlZC5cbiAgICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNyZWF0ZUZvbGRlcihub3JtYWxpemVkKTtcbiAgICAgIHJldHVybiBub3JtYWxpemVkO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBuZXcgTm90aWNlKGBGYWlsZWQgdG8gY3JlYXRlIGZvbGRlcjogJHtub3JtYWxpemVkfWApO1xuICAgICAgY29uc29sZS5lcnJvcihgJHtlcnJvcn1gKVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBsb2FkU2V0dGluZ3MoKSB7XG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfU0VUVElOR1MsIGF3YWl0IHRoaXMubG9hZERhdGEoKSk7XG4gIH1cblxuICBhc3luYyBzYXZlU2V0dGluZ3MoKSB7XG4gICAgYXdhaXQgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcbiAgfVxufVxuXG5jbGFzcyBBbmRyb2lkQ2FtZXJhRW1iZWRTZXR0aW5nVGFiIGV4dGVuZHMgUGx1Z2luU2V0dGluZ1RhYiB7XG4gIHBsdWdpbjogQW5kcm9pZENhbWVyYUVtYmVkUGx1Z2luO1xuXG4gIGNvbnN0cnVjdG9yKGFwcDogQXBwLCBwbHVnaW46IEFuZHJvaWRDYW1lcmFFbWJlZFBsdWdpbikge1xuICAgIHN1cGVyKGFwcCwgcGx1Z2luKTtcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgfVxuXG4gIGRpc3BsYXkoKTogdm9pZCB7XG4gICAgY29uc3QgeyBjb250YWluZXJFbCB9ID0gdGhpcztcbiAgICBjb250YWluZXJFbC5lbXB0eSgpO1xuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKS5zZXROYW1lKFwiT2JzaWRpYW4gQ2FtZXJhIEVtYmVkXCIpLnNldEhlYWRpbmcoKTtcbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKFwiQW5kcm9pZCBvbmx5XCIpXG4gICAgICAuc2V0RGVzYyhcIlRoaXMgcGx1Z2luIGlzIGludGVuZGVkIGZvciBBbmRyb2lkIGFuZCBpcyBub3Qgc3VwcG9ydGVkIG9uIGlPUyBvciBkZXNrdG9wLlwiKTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUoXCJQaG90b3MgZm9sZGVyXCIpXG4gICAgICAuc2V0RGVzYyhcbiAgICAgICAgXCJPcHRpb25hbCwgdXNlIGEgdmF1bHQtcmVsYXRpdmUgcGF0aCBsaWtlIGF0dGFjaG1lbnRzL2NhbWVyYSwgbGVhdmUgYmxhbmsgdG8gc3RvcmUgbmV4dCB0byB0aGUgbm90ZS5cIlxuICAgICAgKVxuICAgICAgLmFkZFRleHQoKHRleHQpID0+XG4gICAgICAgIHRleHRcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MucGhvdG9zRm9sZGVyKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnBob3Rvc0ZvbGRlciA9IHZhbHVlO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKFwiQ3JlYXRlIGZvbGRlciBpZiBtaXNzaW5nXCIpXG4gICAgICAuc2V0RGVzYyhcIkF1dG9tYXRpY2FsbHkgY3JlYXRlIHRoZSBwaG90b3MgZm9sZGVyIGlmIGl0IGRvZXMgbm90IGV4aXN0LlwiKVxuICAgICAgLmFkZFRvZ2dsZSgodG9nZ2xlKSA9PlxuICAgICAgICB0b2dnbGVcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuY3JlYXRlRm9sZGVySWZNaXNzaW5nKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmNyZWF0ZUZvbGRlcklmTWlzc2luZyA9IHZhbHVlO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbCkuc2V0TmFtZShcIkNvbXByZXNzIGltYWdlc1wiKS5zZXRIZWFkaW5nKCk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKFwiQ29tcHJlc3MgaW1hZ2VzXCIpXG4gICAgICAuc2V0RGVzYyhcIlJlZHVjZSBwaG90byBmaWxlIHNpemVzIGJ5IGNvbXByZXNzaW5nIHRoZW0gYmVmb3JlIHNhdmluZy5cIilcbiAgICAgIC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT5cbiAgICAgICAgdG9nZ2xlXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmNvbXByZXNzSW1hZ2VzKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmNvbXByZXNzSW1hZ2VzID0gdmFsdWU7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUoXCJDb21wcmVzcyBRdWFsaXR5XCIpXG4gICAgICAuc2V0RGVzYyhcIkFkanVzdCB0aGUgcXVhbGl0eSBvZiBjb21wcmVzc2VkIGltYWdlcy4gTG93ZXIgdmFsdWVzIHJlc3VsdCBpbiBzbWFsbGVyIGZpbGVzIGJ1dCB3b3JzZSBxdWFsaXR5LlwiKVxuICAgICAgLmFkZFNsaWRlcihzbGlkZXIgPT5cbiAgICAgICAgc2xpZGVyXG4gICAgICAgICAgLnNldExpbWl0cygwLCAwLjksIDAuMDUpIC8vIG1pbiAwLjEsIG1heCAxLCBzdGVwIDAuMDVcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuY29tcHJlc3NRdWFsaXR5KVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmNvbXByZXNzUXVhbGl0eSA9IHZhbHVlO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgIClcblxuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBLDBEQUFBQSxTQUFBO0FBVUEsS0FBQyxTQUFVLFFBQVEsU0FBUztBQUMxQixhQUFPLFlBQVksWUFBWSxPQUFPQSxZQUFXLGNBQWNBLFFBQU8sVUFBVSxRQUFRLElBQ3hGLE9BQU8sV0FBVyxjQUFjLE9BQU8sTUFBTSxPQUFPLE9BQU8sS0FDMUQsU0FBUyxPQUFPLGVBQWUsY0FBYyxhQUFhLFVBQVUsTUFBTSxPQUFPLGFBQWEsUUFBUTtBQUFBLElBQ3pHLEdBQUcsU0FBTyxXQUFZO0FBQUU7QUFFdEIsZUFBUyxRQUFRLFFBQVEsZ0JBQWdCO0FBQ3ZDLFlBQUksT0FBTyxPQUFPLEtBQUssTUFBTTtBQUM3QixZQUFJLE9BQU8sdUJBQXVCO0FBQ2hDLGNBQUksVUFBVSxPQUFPLHNCQUFzQixNQUFNO0FBQ2pELDZCQUFtQixVQUFVLFFBQVEsT0FBTyxTQUFVLEtBQUs7QUFDekQsbUJBQU8sT0FBTyx5QkFBeUIsUUFBUSxHQUFHLEVBQUU7QUFBQSxVQUN0RCxDQUFDLElBQUksS0FBSyxLQUFLLE1BQU0sTUFBTSxPQUFPO0FBQUEsUUFDcEM7QUFDQSxlQUFPO0FBQUEsTUFDVDtBQUNBLGVBQVMsZUFBZSxRQUFRO0FBQzlC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WUFBWSxJQUFJO0FBQ3hCLGdCQUFZLE1BQU07QUFDbEIsUUFBSSx3QkFBUSxXQUFXLEVBQUUsUUFBUSx1QkFBdUIsRUFBRSxXQUFXO0FBQ3JFLFFBQUksd0JBQVEsV0FBVyxFQUNwQixRQUFRLGNBQWMsRUFDdEIsUUFBUSw2RUFBNkU7QUFFeEYsUUFBSSx3QkFBUSxXQUFXLEVBQ3BCLFFBQVEsZUFBZSxFQUN2QjtBQUFBLE1BQ0M7QUFBQSxJQUNGLEVBQ0M7QUFBQSxNQUFRLENBQUMsU0FDUixLQUNHLFNBQVMsS0FBSyxPQUFPLFNBQVMsWUFBWSxFQUMxQyxTQUFTLE9BQU8sVUFBVTtBQUN6QixhQUFLLE9BQU8sU0FBUyxlQUFlO0FBQ3BDLGNBQU0sS0FBSyxPQUFPLGFBQWE7QUFBQSxNQUNqQyxDQUFDO0FBQUEsSUFDTDtBQUVGLFFBQUksd0JBQVEsV0FBVyxFQUNwQixRQUFRLDBCQUEwQixFQUNsQyxRQUFRLDhEQUE4RCxFQUN0RTtBQUFBLE1BQVUsQ0FBQyxXQUNWLE9BQ0csU0FBUyxLQUFLLE9BQU8sU0FBUyxxQkFBcUIsRUFDbkQsU0FBUyxPQUFPLFVBQVU7QUFDekIsYUFBSyxPQUFPLFNBQVMsd0JBQXdCO0FBQzdDLGNBQU0sS0FBSyxPQUFPLGFBQWE7QUFBQSxNQUNqQyxDQUFDO0FBQUEsSUFDTDtBQUVGLFFBQUksd0JBQVEsV0FBVyxFQUFFLFFBQVEsaUJBQWlCLEVBQUUsV0FBVztBQUUvRCxRQUFJLHdCQUFRLFdBQVcsRUFDcEIsUUFBUSxpQkFBaUIsRUFDekIsUUFBUSw0REFBNEQsRUFDcEU7QUFBQSxNQUFVLENBQUMsV0FDVixPQUNHLFNBQVMsS0FBSyxPQUFPLFNBQVMsY0FBYyxFQUM1QyxTQUFTLE9BQU8sVUFBVTtBQUN6QixhQUFLLE9BQU8sU0FBUyxpQkFBaUI7QUFDdEMsY0FBTSxLQUFLLE9BQU8sYUFBYTtBQUFBLE1BQ2pDLENBQUM7QUFBQSxJQUNMO0FBRUYsUUFBSSx3QkFBUSxXQUFXLEVBQ3BCLFFBQVEsa0JBQWtCLEVBQzFCLFFBQVEsa0dBQWtHLEVBQzFHO0FBQUEsTUFBVSxZQUNULE9BQ0csVUFBVSxHQUFHLEtBQUssSUFBSSxFQUN0QixTQUFTLEtBQUssT0FBTyxTQUFTLGVBQWUsRUFDN0MsU0FBUyxPQUFPLFVBQVU7QUFDekIsYUFBSyxPQUFPLFNBQVMsa0JBQWtCO0FBQ3ZDLGNBQU0sS0FBSyxPQUFPLGFBQWE7QUFBQSxNQUNqQyxDQUFDO0FBQUEsSUFDTDtBQUFBLEVBRUo7QUFDRjsiLAogICJuYW1lcyI6IFsibW9kdWxlIiwgIndpbmRvdyIsICJzZWxmIiwgImlzQmxvYiIsICJpc1Bvc2l0aXZlTnVtYmVyIiwgIkNvbXByZXNzb3IiLCAiY2FsbGJhY2siLCAiZG9uZSIsICJuZXh0IiwgIkNvbXByZXNzb3IiXQp9Cg==
