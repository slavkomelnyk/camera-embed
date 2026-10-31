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
      function _classCallCheck(a, n) {
        if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
      }
      function _defineProperties(e, r) {
        for (var t = 0; t < r.length; t++) {
          var o = r[t];
          o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey(o.key), o);
        }
      }
      function _createClass(e, r, t) {
        return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
          writable: false
        }), e;
      }
      function _defineProperty(e, r, t) {
        return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
          value: t,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[r] = t, e;
      }
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function(n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      function ownKeys(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r2) {
            return Object.getOwnPropertyDescriptor(e, r2).enumerable;
          })), t.push.apply(t, o);
        }
        return t;
      }
      function _objectSpread2(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
            _defineProperty(e, r2, t[r2]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
            Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
          });
        }
        return e;
      }
      function _toPrimitive(t, r) {
        if ("object" != typeof t || !t) return t;
        var e = t[Symbol.toPrimitive];
        if (void 0 !== e) {
          var i = e.call(t, r || "default");
          if ("object" != typeof i) return i;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === r ? String : Number)(t);
      }
      function _toPropertyKey(t) {
        var i = _toPrimitive(t, "string");
        return "symbol" == typeof i ? i : i + "";
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
      function isCanvasAvailable() {
        try {
          var canvas = document.createElement("canvas");
          canvas.width = 2;
          canvas.height = 1;
          var context = canvas.getContext("2d");
          if (!context) return false;
          var imageData = context.createImageData(2, 1);
          imageData.data[0] = 12;
          imageData.data[1] = 23;
          imageData.data[2] = 34;
          imageData.data[3] = 255;
          imageData.data[4] = 45;
          imageData.data[5] = 56;
          imageData.data[6] = 67;
          imageData.data[7] = 255;
          context.putImageData(imageData, 0, 0);
          var readBack = context.getImageData(0, 0, 2, 1);
          var expected = [12, 23, 34, 255, 45, 56, 67, 255];
          return readBack.data.every(function(value, index) {
            return value === expected[index];
          });
        } catch (error) {
          return false;
        }
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
        return _createClass(Compressor3, [{
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
              if (isCanvasAvailable()) {
                _this2.draw(_objectSpread2(_objectSpread2({}, data), {}, {
                  naturalWidth: image.naturalWidth,
                  naturalHeight: image.naturalHeight
                }));
              } else {
                _this2.done({
                  naturalWidth: image.naturalWidth,
                  naturalHeight: image.naturalHeight,
                  result: null
                });
              }
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
                var fileName = file.name;
                if (fileName && result.type !== file.type) {
                  fileName = fileName.replace(REGEXP_EXTENSION, imageTypeToExtension(result.type));
                }
                try {
                  result = new File([result], fileName, {
                    type: result.type
                  });
                } catch (error) {
                  var date = /* @__PURE__ */ new Date();
                  result.name = fileName;
                  result.lastModified = date.getTime();
                  result.lastModifiedDate = date;
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
var import_obsidian6 = require("obsidian");

// src/settings.ts
var import_obsidian = require("obsidian");
var DEFAULT_SETTINGS = {
  photosFolder: "photos",
  createFolderIfMissing: true,
  saveNearTheNote: false,
  organizePhotosByMonth: false,
  galleryEnabled: false,
  openGalleryInSidebar: false,
  imagePickerEnabled: false,
  compressImages: false,
  compressionMode: "minimal",
  compressionPreset: "balanced",
  compressQuality: 0.8,
  compressMaxDimension: 2048,
  compressFormat: "auto",
  compressKeepExif: false,
  compressMinSizeKB: 0,
  gallerySort: "newest",
  galleryScope: "folder",
  galleryGroupByMonth: true,
  galleryThumbSize: 0
};
var CameraEmbedSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  /** Obsidian 1.13+ renders from this. */
  getSettingDefinitions() {
    const s = () => this.plugin.settings;
    const expert = () => s().compressImages && s().compressionMode === "expert";
    const minimal = () => s().compressImages && s().compressionMode === "minimal";
    return [
      {
        name: "This plugin is primarily designed for Android. Some features may be limited on other platforms."
      },
      {
        type: "group",
        heading: "Choose photo",
        items: [
          {
            name: "Enable image picker (optional)",
            desc: "Show a prompt to choose between taking a new photo or picking an existing one from the gallery.",
            control: {
              type: "toggle",
              key: "imagePickerEnabled",
              // Locked while gallery is on, unless this one is already on (so it can be turned off)
              disabled: () => s().galleryEnabled && !s().imagePickerEnabled
            }
          },
          {
            name: "Enable gallery (optional)",
            desc: "Use the gallery instead of taking a photo directly. The gallery shows the images in your photos folder.",
            control: {
              type: "toggle",
              key: "galleryEnabled",
              // Locked while image picker is on, unless this one is already on
              disabled: () => s().imagePickerEnabled && !s().galleryEnabled
            }
          },
          {
            name: "Open gallery in sidebar",
            desc: "Open the gallery in the right sidebar when using the camera button.",
            visible: () => s().galleryEnabled && !import_obsidian.Platform.isMobile,
            control: {
              type: "toggle",
              key: "openGalleryInSidebar"
            }
          }
        ]
      },
      {
        type: "group",
        heading: "Gallery",
        visible: () => s().galleryEnabled,
        items: [
          {
            name: "Default sort",
            desc: "How photos are ordered when the gallery opens. You can also change this inside the gallery.",
            control: {
              type: "dropdown",
              key: "gallerySort",
              options: { newest: "Newest first", oldest: "Oldest first", name: "Name", size: "Largest first" }
            }
          },
          {
            name: "Show",
            desc: "Photos folder: only the images in your photos folder are read. Whole vault: lists every image in the vault, which is needed to see photos saved next to notes.",
            control: {
              type: "dropdown",
              key: "galleryScope",
              options: { folder: "Photos folder only", vault: "Whole vault" }
            }
          },
          {
            name: "Group by month",
            desc: "Add month headings (only when sorted by date).",
            control: {
              type: "toggle",
              key: "galleryGroupByMonth"
            }
          }
        ]
      },
      {
        type: "group",
        heading: "Photo storage",
        items: [
          {
            name: "Photos folder",
            desc: "Folder used to store photos.",
            control: {
              type: "text",
              key: "photosFolder",
              placeholder: "photos"
            }
          },
          {
            name: "Organize photos by month",
            desc: "Save photos in year and month folders.",
            control: {
              type: "toggle",
              key: "organizePhotosByMonth"
            }
          },
          {
            name: "Create folder if missing",
            desc: "Create the photos folder automatically when needed.",
            control: {
              type: "toggle",
              key: "createFolderIfMissing"
            }
          },
          {
            name: "Save near the note",
            desc: 'Save camera photos beside the current note. In the gallery they only show up when "Show" is set to the whole vault.',
            control: {
              type: "toggle",
              key: "saveNearTheNote"
            }
          }
        ]
      },
      {
        type: "group",
        heading: "Image compression",
        items: [
          {
            name: "Compress images",
            desc: "Reduce photo file sizes before saving. Applies to camera photos, picked photos and gallery uploads.",
            control: {
              type: "toggle",
              key: "compressImages"
            }
          },
          {
            name: "Compression mode",
            desc: "Minimal: pick a preset. Expert: control size, quality, format and metadata yourself.",
            visible: () => s().compressImages,
            control: {
              type: "dropdown",
              key: "compressionMode",
              options: { minimal: "Minimal", expert: "Expert" }
            }
          },
          // ---- Minimal ----
          {
            name: "Compression level",
            desc: "Light: 85% quality, up to 3000 px. Balanced: 75%, up to 2048 px. Strong: 60%, up to 1600 px (smallest files).",
            visible: minimal,
            control: {
              type: "dropdown",
              key: "compressionPreset",
              options: {
                light: "Light",
                balanced: "Balanced (recommended)",
                strong: "Strong"
              }
            }
          },
          // ---- Expert ----
          {
            name: "Quality",
            desc: "Lower values create smaller files with lower image quality. Ignored for lossless PNG output.",
            visible: expert,
            control: {
              type: "slider",
              key: "compressQuality",
              min: 0.1,
              max: 0.95,
              step: 0.05
            }
          },
          {
            name: "Maximum size (pixels)",
            desc: "Longest side of the photo, for both landscape and portrait. 0 keeps the original size.",
            visible: expert,
            control: {
              type: "number",
              key: "compressMaxDimension",
              min: 0
            }
          },
          {
            name: "Output format",
            desc: "Auto keeps the format but turns PNGs over 1 MB into JPEG (transparency becomes white). Original never changes the format. WebP is smaller than JPEG but falls back to JPEG if unsupported.",
            visible: expert,
            control: {
              type: "dropdown",
              key: "compressFormat",
              options: {
                auto: "Auto",
                original: "Keep original format",
                jpeg: "JPEG",
                webp: "WebP"
              }
            }
          },
          {
            name: "Keep EXIF metadata",
            desc: "Keep camera info and GPS location in JPEG files. Off is smaller and better for privacy.",
            visible: expert,
            control: {
              type: "toggle",
              key: "compressKeepExif"
            }
          },
          {
            name: "Skip small files (KB)",
            desc: "Do not compress files smaller than this. 0 compresses everything.",
            visible: expert,
            control: {
              type: "number",
              key: "compressMinSizeKB",
              min: 0
            }
          }
        ]
      }
    ];
  }
};

// src/compressor.ts
var import_compressorjs = __toESM(require_compressor(), 1);
var PRESETS = {
  light: { quality: 0.85, maxDimension: 3e3 },
  balanced: { quality: 0.75, maxDimension: 2048 },
  strong: { quality: 0.6, maxDimension: 1600 }
};
var SKIP_TYPES = /* @__PURE__ */ new Set(["image/gif", "image/svg+xml"]);
var PNG_CONVERT_SIZE = 1e6;
function getCompressOptions(settings) {
  var _a;
  if (settings.compressionMode === "expert") {
    return {
      quality: Math.min(1, Math.max(0.1, settings.compressQuality)),
      maxDimension: Math.max(0, Math.round(settings.compressMaxDimension)),
      format: settings.compressFormat,
      keepExif: settings.compressKeepExif,
      minSizeBytes: Math.max(0, settings.compressMinSizeKB) * 1024
    };
  }
  const preset = (_a = PRESETS[settings.compressionPreset]) != null ? _a : PRESETS.balanced;
  return { ...preset, format: "auto", keepExif: false, minSizeBytes: 0 };
}
function runCompressor(file, options, mimeType, convertSize) {
  const limit = options.maxDimension > 0 ? options.maxDimension : Infinity;
  return new Promise((resolve, reject) => {
    new import_compressorjs.default(file, {
      quality: options.quality,
      maxWidth: limit,
      maxHeight: limit,
      checkOrientation: true,
      // respect EXIF rotation
      retainExif: options.keepExif,
      mimeType,
      convertTypes: "image/png",
      convertSize,
      strict: true,
      success: resolve,
      error: reject
    });
  });
}
async function compressImage(file, options) {
  if (!file.type.startsWith("image/") || SKIP_TYPES.has(file.type)) return file;
  if (file.size < options.minSizeBytes) return file;
  const mimeType = options.format === "jpeg" ? "image/jpeg" : options.format === "webp" ? "image/webp" : "auto";
  const convertSize = options.format === "original" ? Infinity : PNG_CONVERT_SIZE;
  let result = await runCompressor(file, options, mimeType, convertSize);
  if (mimeType === "image/webp" && result.type !== "image/webp") {
    result = await runCompressor(file, options, "image/jpeg", convertSize);
  }
  return result.size < file.size ? result : file;
}

// src/file-utils.ts
var import_obsidian2 = require("obsidian");
var pad = (n) => n < 10 ? `0${n}` : String(n);
function localStamp(date = /* @__PURE__ */ new Date()) {
  const day = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
  const time = `${pad(date.getHours())}-${pad(date.getMinutes())}-${pad(date.getSeconds())}`;
  return `${day}_${time}`;
}
function buildFileName(file, output = file) {
  var _a, _b, _c;
  const ext = (_c = (_b = extensionFromType(output.type)) != null ? _b : (_a = extensionFromName(file.name)) == null ? void 0 : _a.toLowerCase()) != null ? _c : "jpg";
  return `photo-${localStamp()}.${ext}`;
}
function extensionFromName(name) {
  var _a;
  const match = name.match(/\.([a-zA-Z0-9]+)$/);
  return (_a = match == null ? void 0 : match[1]) != null ? _a : null;
}
var TYPE_EXTENSIONS = {
  jpeg: "jpg",
  pjpeg: "jpg",
  "svg+xml": "svg",
  "x-icon": "ico",
  "vnd.microsoft.icon": "ico"
};
function extensionFromType(mimeType) {
  if (!mimeType.startsWith("image/")) return null;
  const subtype = mimeType.slice("image/".length).toLowerCase();
  if (!subtype) return null;
  const mapped = TYPE_EXTENSIONS[subtype];
  if (mapped) return mapped;
  return /^[a-z0-9]+$/.test(subtype) ? subtype : null;
}
function joinPath(parentPath, fileName) {
  if (!parentPath) return fileName;
  return `${parentPath}/${fileName}`;
}
function getMonthlyFolder(parentPath) {
  const now = /* @__PURE__ */ new Date();
  return joinPath(joinPath(parentPath, String(now.getFullYear())), pad(now.getMonth() + 1));
}
async function createFolderPath(vault, path) {
  let currentPath = "";
  for (const segment of path.split("/").filter(Boolean)) {
    currentPath = joinPath(currentPath, segment);
    const existing = vault.getAbstractFileByPath(currentPath);
    if (existing instanceof import_obsidian2.TFolder) continue;
    if (existing) throw new Error(`Cannot create folder because a file exists at ${currentPath}`);
    await vault.createFolder(currentPath);
  }
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
function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
function withEmbedWidth(link, width) {
  if (!width || width <= 0) return link;
  if (link.startsWith("[[") && link.endsWith("]]")) {
    return `${link.slice(0, -2)}|${width}]]`;
  }
  return link.replace(/^\[(.*?)\]\(/, (_match, alt) => `[${alt}|${width}](`);
}

// src/input-utils.ts
function pickImages(source, container) {
  return new Promise((resolve) => {
    const input = container.createEl("input", { cls: "camera-hidden", type: "file" });
    input.accept = "image/*";
    input.multiple = source !== "camera";
    if (source === "camera") input.setAttribute("capture", "environment");
    const finish = (files) => {
      input.remove();
      resolve(files);
    };
    input.addEventListener("change", () => finish(input.files ? Array.from(input.files) : []));
    input.addEventListener("cancel", () => finish([]));
    input.click();
  });
}

// src/gallery-modal.ts
var import_obsidian3 = require("obsidian");
var IMAGE_EXTENSIONS = /* @__PURE__ */ new Set(["jpg", "jpeg", "png", "gif", "webp", "bmp", "svg", "avif"]);
var RENDER_CHUNK = 120;
var MAX_MENU_USAGES = 5;
var LONG_PRESS_MS = 500;
var WIDTH_CHOICES = [300, 500, 800];
var isImage = (file) => IMAGE_EXTENSIONS.has(file.extension.toLowerCase());
var nextFrame = () => new Promise((resolve) => window.requestAnimationFrame(() => resolve()));
var isImageFile = (file) => {
  var _a, _b;
  if (file.type.startsWith("image/")) return true;
  const ext = (_b = (_a = file.name.split(".").pop()) == null ? void 0 : _a.toLowerCase()) != null ? _b : "";
  return IMAGE_EXTENSIONS.has(ext);
};
function collectImages(folder, out = []) {
  for (const child of folder.children) {
    if (child instanceof import_obsidian3.TFile) {
      if (isImage(child)) out.push(child);
    } else if (child instanceof import_obsidian3.TFolder) {
      collectImages(child, out);
    }
  }
  return out;
}
function getUsages(app, file) {
  var _a;
  const resolvedLinks = app.metadataCache.resolvedLinks;
  const usages = [];
  for (const path in resolvedLinks) {
    const targets = resolvedLinks[path];
    if (!targets) continue;
    if (((_a = targets[file.path]) != null ? _a : 0) <= 0) continue;
    const note = app.vault.getAbstractFileByPath(path);
    if (note instanceof import_obsidian3.TFile) usages.push(note);
  }
  return usages;
}
var GalleryModal = class extends import_obsidian3.Modal {
  constructor(app, host, onChoose, closeOnChoose = true) {
    super(app);
    this.allFiles = [];
    this.folderMissing = false;
    this.visibleFiles = [];
    this.itemEls = /* @__PURE__ */ new Map();
    this.selected = /* @__PURE__ */ new Set();
    this.query = "";
    this.observer = null;
    this.loaders = /* @__PURE__ */ new WeakMap();
    this.eventRefs = [];
    this.rebuildTimer = null;
    this.searchTimer = null;
    this.lastMenuTime = 0;
    this.renderId = 0;
    this.opened = false;
    this.dragDepth = 0;
    this.host = host;
    this.onChoose = onChoose;
    this.closeOnChoose = closeOnChoose;
  }
  mount(container) {
    this.onOpen();
    container.appendChild(this.contentEl);
  }
  unmount() {
    this.onClose();
  }
  /* ------------------------------------------------------------------ */
  /* UI                                                                  */
  /* ------------------------------------------------------------------ */
  onOpen() {
    this.opened = true;
    this.modalEl.addClass("camera-gallery-modal-container");
    const { contentEl } = this;
    contentEl.addClass("camera-gallery-modal");
    this.setupDropTarget();
    const settings = this.host.settings;
    const header = contentEl.createDiv({ cls: "camera-gallery-header" });
    const title = header.createDiv({ cls: "camera-gallery-title" });
    (0, import_obsidian3.setIcon)(title, "images");
    title.createSpan({ text: "Gallery" });
    this.selectionLabel = header.createDiv({ cls: "camera-gallery-selection" });
    const toolbar = contentEl.createDiv({ cls: "camera-gallery-toolbar" });
    if (import_obsidian3.Platform.isMobile) {
      const take = toolbar.createEl("button", { cls: "mod-cta" });
      (0, import_obsidian3.setIcon)(take, "camera");
      take.createSpan({ text: "Take photo to gallery" });
      take.addEventListener("click", () => void this.addPhotos("camera"));
    }
    const upload = toolbar.createEl("button", { cls: "camera-gallery-upload" });
    (0, import_obsidian3.setIcon)(upload, "upload");
    upload.createSpan({ text: "Upload to gallery" });
    upload.addEventListener("click", () => void this.addPhotos("gallery"));
    if (import_obsidian3.Platform.isDesktop && this.closeOnChoose && this.host.openGallerySidebar) {
      const sidebar = toolbar.createEl("button", { attr: { "aria-label": "Open the gallery in the sidebar to drag photos into notes" } });
      (0, import_obsidian3.setIcon)(sidebar, "panel-right");
      sidebar.createSpan({ text: "Open in sidebar" });
      sidebar.addEventListener("click", () => {
        var _a, _b;
        this.close();
        void ((_b = (_a = this.host).openGallerySidebar) == null ? void 0 : _b.call(_a));
      });
    }
    const controls = contentEl.createDiv({ cls: "camera-gallery-controls" });
    const search = controls.createDiv({ cls: "camera-gallery-search" });
    const searchInput = search.createEl("input", { type: "search", placeholder: "Search photos\u2026" });
    searchInput.addEventListener("input", () => {
      if (this.searchTimer !== null) window.clearTimeout(this.searchTimer);
      this.searchTimer = window.setTimeout(() => {
        this.query = searchInput.value;
        void this.rebuild();
      }, 150);
    });
    this.addSelect(
      controls,
      { newest: "Newest first", oldest: "Oldest first", name: "Name", size: "Largest first" },
      settings.gallerySort,
      (value) => {
        settings.gallerySort = value;
        void this.persistAndRebuild();
      }
    );
    this.addSelect(
      controls,
      { folder: "Photos folder", vault: "Whole vault" },
      settings.galleryScope,
      (value) => {
        settings.galleryScope = value;
        this.loadFiles();
        void this.persistAndRebuild();
      }
    );
    const groupButton = controls.createEl("button", {
      cls: "camera-gallery-group clickable-icon",
      attr: { "aria-label": "Group by month" }
    });
    (0, import_obsidian3.setIcon)(groupButton, "calendar");
    groupButton.toggleClass("is-active", settings.galleryGroupByMonth);
    groupButton.addEventListener("click", () => {
      settings.galleryGroupByMonth = !settings.galleryGroupByMonth;
      groupButton.toggleClass("is-active", settings.galleryGroupByMonth);
      void this.persistAndRebuild();
    });
    const zoom = controls.createEl("input", { cls: "camera-gallery-zoom", type: "range", attr: { "aria-label": "Thumbnail size" } });
    zoom.min = "80";
    zoom.max = "300";
    zoom.step = "10";
    if (settings.galleryThumbSize > 0) this.applyZoom(settings.galleryThumbSize);
    const cssSize = parseInt(getComputedStyle(contentEl).getPropertyValue("--camera-gallery-size"), 10);
    zoom.value = String(settings.galleryThumbSize > 0 ? settings.galleryThumbSize : Number.isFinite(cssSize) ? cssSize : 150);
    zoom.addEventListener("input", () => this.applyZoom(Number(zoom.value)));
    zoom.addEventListener("change", () => {
      settings.galleryThumbSize = Number(zoom.value);
      void this.host.saveSettings();
    });
    this.status = contentEl.createDiv({ cls: "camera-gallery-status" });
    this.grid = contentEl.createDiv({ cls: "camera-gallery-grid" });
    const footer = contentEl.createDiv({ cls: "camera-gallery-footer" });
    this.deleteButton = footer.createEl("button", { text: "Delete", cls: "camera-gallery-delete" });
    this.deleteButton.addEventListener("click", () => void this.deleteSelected());
    this.previewButton = footer.createEl("button", { text: "Preview", cls: "camera-gallery-preview" });
    this.previewButton.addEventListener("click", () => this.previewSelected());
    this.useButton = footer.createEl("button", { text: "Use it", cls: "mod-cta" });
    this.useButton.addEventListener("click", () => this.useSelected());
    this.setActionButtonsVisible(false);
    this.loadFiles();
    this.registerVaultEvents();
    void this.rebuild();
  }
  onClose() {
    var _a;
    this.opened = false;
    this.renderId++;
    if (this.rebuildTimer !== null) window.clearTimeout(this.rebuildTimer);
    if (this.searchTimer !== null) window.clearTimeout(this.searchTimer);
    this.rebuildTimer = null;
    this.searchTimer = null;
    (_a = this.observer) == null ? void 0 : _a.disconnect();
    this.observer = null;
    for (const ref of this.eventRefs) this.app.vault.offref(ref);
    this.eventRefs = [];
    this.contentEl.empty();
  }
  addSelect(parent, options, value, onChange) {
    const select = parent.createEl("select", { cls: "dropdown" });
    for (const key of Object.keys(options)) {
      select.createEl("option", { value: key, text: options[key] });
    }
    select.value = value;
    select.addEventListener("change", () => onChange(select.value));
    return select;
  }
  applyZoom(size) {
    this.contentEl.setCssProps({ "--camera-gallery-size": `${size}px` });
  }
  async persistAndRebuild() {
    await this.host.saveSettings();
    await this.rebuild();
  }
  /* ------------------------------------------------------------------ */
  /* Live updates                                                        */
  /* ------------------------------------------------------------------ */
  /** The configured photos folder, or "" when none is set. */
  photosFolderPath() {
    const path = (0, import_obsidian3.normalizePath)(this.host.settings.photosFolder.trim());
    return path === "/" ? "" : path;
  }
  /** Whether a change at this path can affect what the gallery shows. */
  inPhotosFolder(path) {
    if (this.host.settings.galleryScope === "vault") return true;
    const folder = this.photosFolderPath();
    return folder !== "" && path.startsWith(`${folder}/`);
  }
  /**
   * Reads the images to show. With the default "Photos folder" scope only that folder is read;
   * the whole vault is only listed when the user chooses the "Whole vault" scope.
   */
  loadFiles() {
    if (this.host.settings.galleryScope === "vault") {
      this.folderMissing = false;
      this.allFiles = this.app.vault.getFiles().filter(isImage);
      return;
    }
    const path = this.photosFolderPath();
    const folder = path ? this.app.vault.getFolderByPath(path) : null;
    this.folderMissing = !folder;
    this.allFiles = folder ? collectImages(folder) : [];
  }
  registerVaultEvents() {
    const vault = this.app.vault;
    this.eventRefs.push(
      // Only changes inside the photos folder matter to the gallery
      vault.on("create", (file) => {
        if (file instanceof import_obsidian3.TFile && isImage(file) && this.inPhotosFolder(file.path)) this.scheduleRebuild();
      }),
      vault.on("delete", (file) => {
        if (this.inPhotosFolder(file.path)) this.scheduleRebuild();
      }),
      vault.on("rename", (file, oldPath) => {
        if (!this.inPhotosFolder(file.path) && !this.inPhotosFolder(oldPath)) return;
        this.renameSelected(oldPath, file.path);
        this.scheduleRebuild();
      })
    );
  }
  /** Keeps a renamed photo selected, in the same selection order. */
  renameSelected(oldPath, newPath) {
    if (!this.selected.has(oldPath)) return;
    this.selected = new Set(Array.from(this.selected, (path) => path === oldPath ? newPath : path));
  }
  /** Several events often arrive together (uploads, folder moves), so wait briefly and rebuild once. */
  scheduleRebuild() {
    if (this.rebuildTimer !== null) window.clearTimeout(this.rebuildTimer);
    this.rebuildTimer = window.setTimeout(() => {
      this.rebuildTimer = null;
      if (!this.opened) return;
      this.loadFiles();
      void this.rebuild(true);
    }, 200);
  }
  /* ------------------------------------------------------------------ */
  /* Filtering, sorting, rendering                                       */
  /* ------------------------------------------------------------------ */
  computeVisible() {
    const settings = this.host.settings;
    const query = this.query.trim().toLowerCase();
    const files = this.allFiles.filter((file) => !query || file.path.toLowerCase().includes(query));
    switch (settings.gallerySort) {
      case "oldest":
        files.sort((a, b) => a.stat.mtime - b.stat.mtime);
        break;
      case "name":
        files.sort((a, b) => a.name.localeCompare(b.name, void 0, { numeric: true }));
        break;
      case "size":
        files.sort((a, b) => b.stat.size - a.stat.size);
        break;
      default:
        files.sort((a, b) => b.stat.mtime - a.stat.mtime);
    }
    return files;
  }
  async rebuild(keepScroll = false) {
    var _a;
    if (!this.opened) return;
    const run = ++this.renderId;
    const files = this.computeVisible();
    this.visibleFiles = files;
    const scrollTop = this.grid.scrollTop;
    const visiblePaths = new Set(files.map((file) => file.path));
    for (const path of Array.from(this.selected)) if (!visiblePaths.has(path)) this.selected.delete(path);
    (_a = this.observer) == null ? void 0 : _a.disconnect();
    this.observer = this.createObserver();
    this.grid.empty();
    this.itemEls.clear();
    this.updateSelection();
    this.updateStatus();
    if (files.length === 0) {
      this.renderEmpty();
      return;
    }
    const settings = this.host.settings;
    const group = settings.galleryGroupByMonth && (settings.gallerySort === "newest" || settings.gallerySort === "oldest");
    let lastMonth = "";
    for (let index = 0; index < files.length; index++) {
      if (run !== this.renderId || !this.opened) return;
      const file = files[index];
      if (!file) continue;
      if (group) {
        const date = new Date(file.stat.mtime);
        const key = `${date.getFullYear()}-${date.getMonth()}`;
        if (key !== lastMonth) {
          lastMonth = key;
          this.grid.createDiv({
            cls: "camera-gallery-month",
            text: date.toLocaleDateString(void 0, { month: "long", year: "numeric" })
          });
        }
      }
      this.createItem(file);
      if ((index + 1) % RENDER_CHUNK === 0) await nextFrame();
    }
    if (run === this.renderId) this.grid.scrollTop = keepScroll ? scrollTop : 0;
  }
  updateStatus() {
    const shown = this.visibleFiles.length;
    const total = this.allFiles.length;
    this.status.setText(shown === total ? `${shown.toLocaleString()} photos` : `${shown.toLocaleString()} of ${total.toLocaleString()} photos`);
  }
  renderEmpty() {
    const empty = this.grid.createDiv({ cls: "camera-gallery-empty" });
    (0, import_obsidian3.setIcon)(empty.createDiv(), "image-off");
    const searching = this.query.trim() !== "";
    let message = "No photos yet.";
    if (searching) message = "No photos match your search.";
    else if (this.host.settings.galleryScope === "folder" && this.photosFolderPath() === "") message = "Set a photos folder in the Camera Embed settings.";
    else if (this.folderMissing) message = "The photos folder does not exist yet. Upload a photo to create it.";
    empty.createDiv({ text: message });
    if (!searching && (this.host.settings.galleryScope === "vault" || this.photosFolderPath() !== "")) {
      const button = empty.createEl("button", { cls: "mod-cta", text: "Upload photos" });
      button.addEventListener("click", () => void this.addPhotos("gallery"));
    }
  }
  /** Thumbnails only load when they get close to the visible area, so big galleries stay fast. */
  createObserver() {
    return new IntersectionObserver(
      (entries) => {
        var _a, _b;
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (_a = this.loaders.get(entry.target)) == null ? void 0 : _a();
          this.loaders.delete(entry.target);
          (_b = this.observer) == null ? void 0 : _b.unobserve(entry.target);
        }
      },
      { root: this.grid, rootMargin: "400px" }
    );
  }
  createItem(file) {
    var _a;
    const item = this.grid.createDiv({ cls: "camera-gallery-item", attr: { role: "button", tabindex: "0" } });
    item.dataset.path = file.path;
    const image = item.createEl("img", { cls: "camera-gallery-thumbnail" });
    image.alt = file.name;
    image.decoding = "async";
    image.draggable = false;
    const markLoaded = () => item.addClass("is-loaded");
    image.addEventListener("load", markLoaded);
    image.addEventListener("error", markLoaded);
    const badge = item.createDiv({ cls: "camera-gallery-badge" });
    item.createDiv({ cls: "camera-gallery-name", text: file.name });
    this.loaders.set(item, () => {
      image.src = this.app.vault.getResourcePath(file);
    });
    (_a = this.observer) == null ? void 0 : _a.observe(item);
    this.itemEls.set(file.path, { item, badge });
    this.paintItem(file.path, this.getSelectionNumber(file.path));
    let longPressed = false;
    item.addEventListener("click", () => {
      if (longPressed) {
        longPressed = false;
        return;
      }
      this.toggleSelection(file.path);
    });
    item.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        this.toggleSelection(file.path);
      }
    });
    item.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      if (Date.now() - this.lastMenuTime < 800) return;
      this.openContextMenu(file.path, (menu) => menu.showAtMouseEvent(event));
    });
    let pressTimer = null;
    const cancelPress = () => {
      if (pressTimer !== null) window.clearTimeout(pressTimer);
      pressTimer = null;
    };
    item.addEventListener("touchstart", (event) => {
      longPressed = false;
      const touch = event.touches[0];
      if (!touch) return;
      const { clientX: x, clientY: y } = touch;
      cancelPress();
      pressTimer = window.setTimeout(() => {
        pressTimer = null;
        longPressed = true;
        this.openContextMenu(file.path, (menu) => menu.showAtPosition({ x, y }));
      }, LONG_PRESS_MS);
    }, { passive: true });
    item.addEventListener("touchmove", cancelPress, { passive: true });
    item.addEventListener("touchend", cancelPress, { passive: true });
    item.addEventListener("touchcancel", cancelPress, { passive: true });
    if (import_obsidian3.Platform.isDesktop) this.setupItemDrag(item, file);
  }
  /* ------------------------------------------------------------------ */
  /* Drag and drop                                                       */
  /* ------------------------------------------------------------------ */
  /** Drop image files from the OS onto the gallery: each one is saved as a copy through the shared pipeline. */
  setupDropTarget() {
    if (!import_obsidian3.Platform.isDesktop) return;
    const target = this.contentEl;
    const overlay = target.createDiv({ cls: "camera-gallery-drop-overlay" });
    (0, import_obsidian3.setIcon)(overlay.createDiv(), "upload");
    overlay.createDiv({ text: "Drop photos to add to gallery" });
    const hasFiles = (event) => {
      var _a, _b;
      return Array.from((_b = (_a = event.dataTransfer) == null ? void 0 : _a.types) != null ? _b : []).includes("Files");
    };
    target.addEventListener("dragenter", (event) => {
      if (!hasFiles(event)) return;
      event.preventDefault();
      this.dragDepth++;
      target.addClass("is-dragover");
    });
    target.addEventListener("dragover", (event) => {
      if (!hasFiles(event)) return;
      event.preventDefault();
      if (event.dataTransfer) event.dataTransfer.dropEffect = "copy";
    });
    target.addEventListener("dragleave", (event) => {
      if (!hasFiles(event)) return;
      this.dragDepth = Math.max(0, this.dragDepth - 1);
      if (this.dragDepth === 0) target.removeClass("is-dragover");
    });
    target.addEventListener("drop", (event) => {
      var _a, _b;
      if (!hasFiles(event)) return;
      event.preventDefault();
      event.stopPropagation();
      this.dragDepth = 0;
      target.removeClass("is-dragover");
      void this.handleDroppedFiles(Array.from((_b = (_a = event.dataTransfer) == null ? void 0 : _a.files) != null ? _b : []));
    });
  }
  async handleDroppedFiles(dropped) {
    const images = dropped.filter(isImageFile);
    const skipped = dropped.length - images.length;
    if (skipped > 0) new import_obsidian3.Notice(`Skipped ${skipped} non-image file${skipped === 1 ? "" : "s"}.`);
    if (images.length === 0 || !this.opened) return;
    const saved = await this.saveFiles(images);
    if (saved.length > 0) new import_obsidian3.Notice(`Added ${saved.length} photo${saved.length === 1 ? "" : "s"} to gallery.`);
  }
  /** Path used to build links when dragging: the note the user was last working in. */
  linkSourcePath() {
    var _a, _b, _c, _d, _e;
    const view = (_a = this.app.workspace.getMostRecentLeaf()) == null ? void 0 : _a.view;
    if (view instanceof import_obsidian3.MarkdownView) return (_c = (_b = view.file) == null ? void 0 : _b.path) != null ? _c : "";
    return (_e = (_d = this.app.workspace.getActiveFile()) == null ? void 0 : _d.path) != null ? _e : "";
  }
  /** Drag a thumbnail (or the whole selection) into a note: drops embed links as text at the cursor. */
  setupItemDrag(item, file) {
    item.draggable = true;
    item.addEventListener("dragstart", (event) => {
      var _a;
      const dataTransfer = event.dataTransfer;
      if (!dataTransfer) return;
      const paths = this.selected.has(file.path) ? Array.from(this.selected) : [file.path];
      const files = paths.map((path) => this.app.vault.getAbstractFileByPath(path)).filter((entry) => entry instanceof import_obsidian3.TFile);
      if (files.length === 0) return;
      const source = this.linkSourcePath();
      const text = files.map((entry) => `!${this.app.fileManager.generateMarkdownLink(entry, source)}`).join("\n");
      dataTransfer.setData("text/plain", text);
      dataTransfer.effectAllowed = "copy";
      if (files.length > 1) {
        const label = this.contentEl.createDiv({ cls: "camera-gallery-drag-image", text: `${files.length} photos` });
        dataTransfer.setDragImage(label, 0, 0);
        window.setTimeout(() => label.remove(), 0);
      }
      for (const path of paths) (_a = this.itemEls.get(path)) == null ? void 0 : _a.item.addClass("is-dragging");
    });
    item.addEventListener("dragend", () => {
      this.grid.querySelectorAll(".is-dragging").forEach((el) => el.removeClass("is-dragging"));
    });
  }
  /* ------------------------------------------------------------------ */
  /* Selection                                                           */
  /* ------------------------------------------------------------------ */
  toggleSelection(path) {
    if (this.selected.has(path)) this.selected.delete(path);
    else this.selected.add(path);
    this.updateSelection(path);
  }
  /** Replaces the whole selection and repaints everything that changed. */
  setSelection(paths) {
    const previous = Array.from(this.selected);
    this.selected = new Set(paths);
    for (const path of previous) if (!this.selected.has(path)) this.paintItem(path, 0);
    this.updateSelection();
  }
  selectedFiles() {
    const files = [];
    for (const path of this.selected) {
      const file = this.app.vault.getAbstractFileByPath(path);
      if (file instanceof import_obsidian3.TFile) files.push(file);
    }
    return files;
  }
  /** Draws one item's selected state and badge number (0 = not selected). */
  paintItem(path, number) {
    const refs = this.itemEls.get(path);
    if (!refs) return;
    refs.item.toggleClass("is-selected", number > 0);
    refs.badge.setText(number > 0 ? String(number) : "");
  }
  /** Renumbers every selected item, so badges never go stale after a deselect. */
  refreshBadges(changedPath) {
    let number = 0;
    for (const path of this.selected) {
      number++;
      this.paintItem(path, number);
    }
    if (changedPath && !this.selected.has(changedPath)) this.paintItem(changedPath, 0);
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
    this.previewButton.toggleVisibility(this.selected.size === 1);
  }
  updateSelection(changedPath) {
    const count = this.selected.size;
    this.selectionLabel.setText(count === 0 ? "Select photos" : `${count} selected`);
    this.setActionButtonsVisible(count > 0);
    this.refreshBadges(changedPath);
  }
  /* ------------------------------------------------------------------ */
  /* Right-click menu                                                    */
  /* ------------------------------------------------------------------ */
  openContextMenu(path, show) {
    if (!this.selected.has(path)) this.setSelection([path]);
    const files = this.selectedFiles();
    const count = files.length;
    const single = count === 1 ? files[0] : void 0;
    if (count === 0) return;
    this.lastMenuTime = Date.now();
    const menu = new import_obsidian3.Menu();
    menu.addItem((item) => item.setTitle(count > 1 ? `Use ${count} photos` : "Use it").setIcon("corner-down-left").onClick(() => this.useSelected()));
    for (const width of WIDTH_CHOICES) {
      menu.addItem((item) => item.setTitle(`Insert at ${width} px`).setIcon("move-horizontal").onClick(() => this.useSelected(width)));
    }
    if (single) {
      menu.addItem((item) => item.setTitle("Preview").setIcon("eye").onClick(() => this.previewFile(single)));
    }
    if (single) {
      menu.addSeparator();
      const usages = getUsages(this.app, single);
      if (usages.length === 0) {
        menu.addItem((item) => item.setTitle("Not used in any note").setIcon("file-x").setDisabled(true));
      } else {
        menu.addItem((item) => item.setTitle(`Used in ${usages.length} note${usages.length === 1 ? "" : "s"}`).setIcon("link").setDisabled(true));
        for (const note of usages.slice(0, MAX_MENU_USAGES)) {
          menu.addItem((item) => item.setTitle(note.basename).setIcon("file-text").onClick(() => void this.app.workspace.openLinkText(note.path, "", false)));
        }
        if (usages.length > MAX_MENU_USAGES) {
          menu.addItem((item) => item.setTitle(`Show all ${usages.length} usages\u2026`).setIcon("list").onClick(() => this.previewFile(single)));
        }
      }
    }
    if (single) {
      menu.addSeparator();
      menu.addItem((item) => item.setTitle("Open in new tab").setIcon("file-plus").onClick(() => {
        void this.app.workspace.getLeaf("tab").openFile(single);
        if (this.closeOnChoose) this.close();
      }));
      menu.addItem((item) => item.setTitle("Rename\u2026").setIcon("pencil").onClick(() => this.renameFile(single)));
      const showInFolder = this.app.showInFolder;
      if (import_obsidian3.Platform.isDesktopApp && typeof showInFolder === "function") {
        menu.addItem((item) => item.setTitle("Show in system explorer").setIcon("folder-open").onClick(() => showInFolder.call(this.app, single.path)));
      }
    }
    menu.addSeparator();
    menu.addItem((item) => item.setTitle("Select all").setIcon("check-square").onClick(() => this.setSelection(this.visibleFiles.map((file) => file.path))));
    menu.addItem((item) => item.setTitle("Clear selection").setIcon("square").onClick(() => this.setSelection([])));
    menu.addSeparator();
    menu.addItem((item) => item.setTitle(count > 1 ? `Delete ${count} photos` : "Delete").setIcon("trash-2").setWarning(true).onClick(() => void this.deleteFiles(files.map((file) => file.path))));
    show(menu);
  }
  renameFile(file) {
    new RenameModal(this.app, file, (newBaseName) => {
      const parent = file.parent && !file.parent.isRoot() ? `${file.parent.path}/` : "";
      const newPath = (0, import_obsidian3.normalizePath)(`${parent}${newBaseName}.${file.extension}`);
      if (newPath === file.path) return;
      if (this.app.vault.getAbstractFileByPath(newPath)) {
        new import_obsidian3.Notice(`A file named "${newBaseName}.${file.extension}" already exists.`);
        return;
      }
      void this.app.fileManager.renameFile(file, newPath).catch((error) => {
        console.error("Camera Embed: rename failed", error);
        new import_obsidian3.Notice("Could not rename the photo.");
      });
    }).open();
  }
  /* ------------------------------------------------------------------ */
  /* Actions                                                             */
  /* ------------------------------------------------------------------ */
  useSelected(width) {
    const files = this.selectedFiles();
    if (!files.length) return;
    this.onChoose(files, width);
    if (this.closeOnChoose) this.close();
  }
  async deleteSelected() {
    const paths = Array.from(this.selected);
    if (!paths.length) return;
    await this.deleteFiles(paths);
  }
  async deleteFiles(paths) {
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
    for (const path of paths) this.selected.delete(path);
    this.updateSelection();
    if (deleted > 0) new import_obsidian3.Notice(`Deleted ${deleted} photo${deleted === 1 ? "" : "s"}.`);
    this.scheduleRebuild();
  }
  previewSelected() {
    const [path] = Array.from(this.selected);
    if (!path) return;
    const file = this.app.vault.getAbstractFileByPath(path);
    if (file instanceof import_obsidian3.TFile) this.previewFile(file);
  }
  previewFile(file) {
    new PhotoPreviewModal(this.app, file, () => void this.deleteFiles([file.path])).open();
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
  /** Saves through the plugin's shared pipeline, honouring "Save near the note". */
  async saveFiles(files) {
    var _a, _b;
    const settings = this.host.settings;
    const noteFolder = settings.saveNearTheNote ? (_b = (_a = this.host).getTargetNoteFolder) == null ? void 0 : _b.call(_a) : void 0;
    const saved = await this.host.savePhotos(files, noteFolder);
    if (saved.length > 0 && noteFolder !== void 0 && settings.galleryScope === "folder") {
      new import_obsidian3.Notice('Saved next to the note. Set the gallery to "Whole vault" to see these photos here.');
    }
    return saved;
  }
  /** Pick (or capture) photos and save them through the plugin's shared save pipeline. */
  async addPhotos(source) {
    const files = await pickImages(source, this.app.workspace.containerEl);
    if (!files.length || !this.opened) return;
    const saved = await this.saveFiles(files);
    if (saved.length > 0) new import_obsidian3.Notice(`Added ${saved.length} photo${saved.length === 1 ? "" : "s"} to gallery.`);
  }
};
var RenameModal = class extends import_obsidian3.Modal {
  constructor(app, file, onSubmit) {
    super(app);
    this.file = file;
    this.onSubmit = onSubmit;
  }
  onOpen() {
    this.titleEl.setText("Rename photo");
    const input = this.contentEl.createEl("input", { type: "text", value: this.file.basename });
    input.setCssProps({ width: "100%" });
    this.contentEl.createEl("p", { text: `The .${this.file.extension} extension is kept. Links in your notes are updated.`, cls: "setting-item-description" });
    const submit = () => {
      const name = input.value.trim().replace(/[\\/:*?"<>|]/g, "");
      if (!name) return;
      this.close();
      this.onSubmit(name);
    };
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        submit();
      }
    });
    const buttons = this.contentEl.createDiv({ cls: "modal-button-container" });
    buttons.createEl("button", { text: "Cancel" }).addEventListener("click", () => this.close());
    buttons.createEl("button", { text: "Rename", cls: "mod-cta" }).addEventListener("click", submit);
    input.focus();
    input.select();
  }
  onClose() {
    this.contentEl.empty();
  }
};
var PhotoPreviewModal = class extends import_obsidian3.Modal {
  constructor(app, file, onDelete) {
    super(app);
    this.file = file;
    this.onDelete = onDelete;
  }
  onOpen() {
    this.modalEl.addClass("camera-photo-preview-modal-container");
    this.titleEl.setText(this.file.name);
    const { contentEl } = this;
    contentEl.addClass("camera-photo-preview-modal");
    const image = contentEl.createEl("img", { cls: "camera-photo-preview-image" });
    image.src = this.app.vault.getResourcePath(this.file);
    image.alt = this.file.name;
    const usages = getUsages(this.app, this.file);
    contentEl.createEl("h3", { text: `Used in ${usages.length} note${usages.length === 1 ? "" : "s"}` });
    const usageList = contentEl.createDiv({ cls: "camera-photo-preview-usages" });
    if (usages.length === 0) usageList.setText("This photo is not linked from any note.");
    for (const usage of usages) {
      const button = usageList.createEl("button", { text: usage.path, cls: "camera-photo-preview-usage" });
      button.addEventListener("click", () => void this.app.workspace.openLinkText(usage.path, "", false));
    }
    const actions = contentEl.createDiv({ cls: "modal-button-container" });
    actions.createEl("button", { text: "Close" }).addEventListener("click", () => this.close());
    actions.createEl("button", { text: "Delete", cls: "mod-warning" }).addEventListener("click", () => {
      this.close();
      this.onDelete();
    });
  }
  onClose() {
    this.contentEl.empty();
  }
};

// src/picker-modal.ts
var import_obsidian4 = require("obsidian");
var PickerModal = class extends import_obsidian4.Modal {
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
    (0, import_obsidian4.setIcon)(cameraIcon, "camera");
    cameraBtn.appendText("Take photo");
    cameraBtn.addEventListener("click", () => {
      this.resolve("camera");
      this.close();
    });
    const galleryBtn = buttonContainer.createEl("button");
    const galleryIcon = galleryBtn.createSpan();
    (0, import_obsidian4.setIcon)(galleryIcon, "images");
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

// src/gallery-view.ts
var import_obsidian5 = require("obsidian");
var GALLERY_VIEW_TYPE = "camera-embed-gallery";
var CameraGalleryView = class extends import_obsidian5.ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    this.plugin = plugin;
  }
  getViewType() {
    return GALLERY_VIEW_TYPE;
  }
  getDisplayText() {
    return "Camera gallery";
  }
  getIcon() {
    return "images";
  }
  async onOpen() {
    const folder = this.plugin.settings.photosFolder.trim();
    this.contentEl.empty();
    this.contentEl.addClass("camera-gallery-view");
    if (!folder) {
      this.contentEl.createEl("p", { text: "Set a photos folder in camera embed settings before using the gallery." });
      return;
    }
    this.gallery = new GalleryModal(
      this.app,
      this.plugin,
      (files, width) => this.useFiles(files, width),
      false
    );
    this.gallery.mount(this.contentEl);
  }
  async onClose() {
    var _a;
    (_a = this.gallery) == null ? void 0 : _a.unmount();
  }
  useFiles(files, width) {
    this.plugin.embedGalleryFiles(files, width);
  }
};

// src/main.ts
var CameraEmbedPlugin = class extends import_obsidian6.Plugin {
  constructor() {
    super(...arguments);
    this.settings = { ...DEFAULT_SETTINGS };
    this.lastMarkdownLeaf = null;
  }
  async onload() {
    await this.loadSettings();
    this.normalizeSettings();
    await this.saveSettings();
    this.addSettingTab(new CameraEmbedSettingTab(this.app, this));
    this.registerEvent(this.app.workspace.on("active-leaf-change", (leaf) => {
      if ((leaf == null ? void 0 : leaf.view) instanceof import_obsidian6.MarkdownView) this.lastMarkdownLeaf = leaf;
    }));
    const iconc = this.settings.galleryEnabled ? "images" : "camera";
    this.addRibbonIcon(iconc, "Capture photo", () => void this.capturePhoto());
    this.addCommand({ id: "capture-photo-embed", name: "Capture photo and embed", icon: iconc, callback: () => void this.capturePhoto() });
    if (import_obsidian6.Platform.isDesktop) {
      this.registerView(GALLERY_VIEW_TYPE, (leaf) => new CameraGalleryView(leaf, this));
      this.addCommand({ id: "open-camera-gallery-sidebar", name: "Open camera gallery in sidebar", icon: "images", callback: () => void this.openGallerySidebar() });
    }
  }
  /** The note to insert into: the active note, else the last note you used, else any open note. */
  getTargetMarkdownView() {
    const workspace = this.app.workspace;
    const active = workspace.getActiveViewOfType(import_obsidian6.MarkdownView);
    if (active == null ? void 0 : active.file) return active;
    const markdownLeaves = workspace.getLeavesOfType("markdown");
    const last = this.lastMarkdownLeaf;
    if (last && markdownLeaves.includes(last) && last.view instanceof import_obsidian6.MarkdownView && last.view.file) {
      return last.view;
    }
    const recent = workspace.getMostRecentLeaf();
    if ((recent == null ? void 0 : recent.view) instanceof import_obsidian6.MarkdownView && recent.view.file) return recent.view;
    for (const leaf of markdownLeaves) {
      if (leaf.view instanceof import_obsidian6.MarkdownView && leaf.view.file) return leaf.view;
    }
    return null;
  }
  /** Folder of the note photos should be saved next to (used by "Save near the note" in the gallery). */
  getTargetNoteFolder() {
    var _a, _b, _c;
    return (_c = (_b = (_a = this.getTargetMarkdownView()) == null ? void 0 : _a.file) == null ? void 0 : _b.parent) == null ? void 0 : _c.path;
  }
  normalizeSettings() {
    if (this.settings.galleryEnabled) this.settings.imagePickerEnabled = false;
    if (!this.settings.galleryEnabled) this.settings.openGalleryInSidebar = false;
  }
  capturePhoto() {
    if (this.settings.galleryEnabled && this.settings.openGalleryInSidebar && import_obsidian6.Platform.isDesktop) {
      void this.openGallerySidebar();
    } else if (this.settings.galleryEnabled) {
      this.openGallery();
    } else if (this.settings.imagePickerEnabled) {
      this.openPicker();
    } else {
      void this.pickAndEmbed("camera");
    }
  }
  openPicker() {
    if (!this.getTargetMarkdownView()) {
      new import_obsidian6.Notice("Please open a Markdown note to insert the photo.");
      return;
    }
    new PickerModal(this.app, (source) => {
      if (source === "camera") void this.pickAndEmbed("camera");
      else if (source === "gallery") void this.pickAndEmbed("gallery");
    }).open();
  }
  openGallery() {
    if (!this.getTargetMarkdownView()) {
      new import_obsidian6.Notice("Open a Markdown note before using the camera gallery.");
      return;
    }
    if (!this.settings.photosFolder.trim()) {
      new import_obsidian6.Notice("Set a photos folder in camera embed settings before using the gallery.");
      return;
    }
    new GalleryModal(this.app, this, (files, width) => {
      if (files.length > 0) this.embedGalleryFiles(files, width);
    }).open();
  }
  embedVaultFiles(files, view, width) {
    const activeFile = view.file;
    if (!activeFile) return;
    if (view.getMode() !== "source") {
      new import_obsidian6.Notice("Switch the note to editing mode to insert photos.");
      return;
    }
    const links = files.map((file) => `!${withEmbedWidth(this.app.fileManager.generateMarkdownLink(file, activeFile.path), width)}`);
    view.editor.replaceSelection(links.join("\n"));
  }
  embedGalleryFiles(files, width) {
    const view = this.getTargetMarkdownView();
    if (!view) {
      new import_obsidian6.Notice("Open a Markdown note to insert the selected photos.");
      return;
    }
    this.embedVaultFiles(files, view, width);
  }
  async pickAndEmbed(source) {
    const view = this.getTargetMarkdownView();
    if (!(view == null ? void 0 : view.file)) {
      new import_obsidian6.Notice("Please open a Markdown note to insert the photo.");
      return;
    }
    const files = await pickImages(source, this.app.workspace.containerEl);
    if (files.length > 0) await this.saveAndEmbed(files, view);
  }
  async openGallerySidebar() {
    const leaf = await this.app.workspace.ensureSideLeaf(GALLERY_VIEW_TYPE, "right", { active: true, reveal: true });
    await this.app.workspace.revealLeaf(leaf);
  }
  async saveAndEmbed(files, view) {
    var _a;
    const activeFile = view.file;
    if (!activeFile) return;
    const saved = await this.savePhotos(files, (_a = activeFile.parent) == null ? void 0 : _a.path);
    if (saved.length === 0) return;
    const links = saved.map((file) => `!${this.app.fileManager.generateMarkdownLink(file, activeFile.path)}`);
    view.editor.replaceSelection(links.join("\n"));
  }
  /**
   * The single place where photos are written to the vault. Used by direct camera
   * capture, the image picker and gallery uploads, so folder, month organisation,
   * compression and file naming behave the same everywhere.
   *
   * @param noteFolderPath folder of the current note (only used by "save near the note")
   */
  async savePhotos(files, noteFolderPath) {
    const folder = await this.ensureTargetFolder(noteFolderPath);
    if (folder === null) return [];
    const options = this.settings.compressImages ? getCompressOptions(this.settings) : null;
    const progress = options && files.length > 1 ? new import_obsidian6.Notice(`Processing ${files.length} photos\u2026`, 0) : null;
    const saved = [];
    let compressFailures = 0;
    let bytesBefore = 0;
    let bytesAfter = 0;
    try {
      for (const file of files) {
        let blob = file;
        if (options) {
          try {
            blob = await compressImage(file, options);
          } catch (error) {
            console.error("Camera Embed: compression failed for", file.name, error);
            compressFailures++;
            blob = file;
          }
        }
        try {
          const path = getAvailablePath(this.app.vault, joinPath(folder, buildFileName(file, blob)));
          saved.push(await this.app.vault.createBinary(path, await blob.arrayBuffer()));
          bytesBefore += file.size;
          bytesAfter += blob.size;
        } catch (error) {
          console.error("Camera Embed: failed to save", file.name, error);
          new import_obsidian6.Notice(`Could not save ${file.name}.`);
        }
      }
    } finally {
      progress == null ? void 0 : progress.hide();
    }
    if (compressFailures > 0) {
      new import_obsidian6.Notice(`Could not compress ${compressFailures} photo${compressFailures === 1 ? "" : "s"}; saved the original${compressFailures === 1 ? "" : "s"} instead.`);
    }
    if (options && saved.length > 0 && bytesAfter < bytesBefore) {
      new import_obsidian6.Notice(`Compressed ${formatBytes(bytesBefore)} \u2192 ${formatBytes(bytesAfter)}`);
    }
    return saved;
  }
  async ensureTargetFolder(noteFolderPath) {
    const raw = this.settings.photosFolder.trim();
    const base = this.settings.saveNearTheNote ? raw ? noteFolderPath ? `${noteFolderPath}/${raw}` : raw : noteFolderPath != null ? noteFolderPath : "" : raw;
    const normalized = (0, import_obsidian6.normalizePath)(this.settings.organizePhotosByMonth ? getMonthlyFolder(base) : base);
    if (normalized === "" || normalized === "/") return "";
    if (folderExists(this.app.vault, normalized)) return normalized;
    if (!this.settings.createFolderIfMissing) {
      new import_obsidian6.Notice(`Folder not found: ${normalized}`);
      return null;
    }
    try {
      await createFolderPath(this.app.vault, normalized);
      return normalized;
    } catch (error) {
      console.error("Camera Embed: failed to create folder", error);
      new import_obsidian6.Notice(`Failed to create folder: ${normalized}`);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzL2NvbXByZXNzb3Jqcy9kaXN0L2NvbXByZXNzb3IuanMiLCAic3JjL21haW4udHMiLCAic3JjL3NldHRpbmdzLnRzIiwgInNyYy9jb21wcmVzc29yLnRzIiwgInNyYy9maWxlLXV0aWxzLnRzIiwgInNyYy9pbnB1dC11dGlscy50cyIsICJzcmMvZ2FsbGVyeS1tb2RhbC50cyIsICJzcmMvcGlja2VyLW1vZGFsLnRzIiwgInNyYy9nYWxsZXJ5LXZpZXcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qIVxuICogQ29tcHJlc3Nvci5qcyB2MS4zLjBcbiAqIGh0dHBzOi8vZmVuZ3l1YW5jaGVuLmdpdGh1Yi5pby9jb21wcmVzc29yanNcbiAqXG4gKiBDb3B5cmlnaHQgMjAxOC1wcmVzZW50IENoZW4gRmVuZ3l1YW5cbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICpcbiAqIERhdGU6IDIwMjYtMDQtMDZUMDc6MTI6NDUuODE2WlxuICovXG5cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcbiAgKGdsb2JhbCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgOiBnbG9iYWwgfHwgc2VsZiwgZ2xvYmFsLkNvbXByZXNzb3IgPSBmYWN0b3J5KCkpO1xufSkodGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhhLCBuKSB7XG4gICAgaWYgKCEoYSBpbnN0YW5jZW9mIG4pKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG4gIGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKGUsIHIpIHtcbiAgICBmb3IgKHZhciB0ID0gMDsgdCA8IHIubGVuZ3RoOyB0KyspIHtcbiAgICAgIHZhciBvID0gclt0XTtcbiAgICAgIG8uZW51bWVyYWJsZSA9IG8uZW51bWVyYWJsZSB8fCAhMSwgby5jb25maWd1cmFibGUgPSAhMCwgXCJ2YWx1ZVwiIGluIG8gJiYgKG8ud3JpdGFibGUgPSAhMCksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBfdG9Qcm9wZXJ0eUtleShvLmtleSksIG8pO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoZSwgciwgdCkge1xuICAgIHJldHVybiByICYmIF9kZWZpbmVQcm9wZXJ0aWVzKGUucHJvdG90eXBlLCByKSwgdCAmJiBfZGVmaW5lUHJvcGVydGllcyhlLCB0KSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIFwicHJvdG90eXBlXCIsIHtcbiAgICAgIHdyaXRhYmxlOiAhMVxuICAgIH0pLCBlO1xuICB9XG4gIGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShlLCByLCB0KSB7XG4gICAgcmV0dXJuIChyID0gX3RvUHJvcGVydHlLZXkocikpIGluIGUgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgciwge1xuICAgICAgdmFsdWU6IHQsXG4gICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgICB3cml0YWJsZTogITBcbiAgICB9KSA6IGVbcl0gPSB0LCBlO1xuICB9XG4gIGZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICAgIHJldHVybiBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gPyBPYmplY3QuYXNzaWduLmJpbmQoKSA6IGZ1bmN0aW9uIChuKSB7XG4gICAgICBmb3IgKHZhciBlID0gMTsgZSA8IGFyZ3VtZW50cy5sZW5ndGg7IGUrKykge1xuICAgICAgICB2YXIgdCA9IGFyZ3VtZW50c1tlXTtcbiAgICAgICAgZm9yICh2YXIgciBpbiB0KSAoe30pLmhhc093blByb3BlcnR5LmNhbGwodCwgcikgJiYgKG5bcl0gPSB0W3JdKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuO1xuICAgIH0sIF9leHRlbmRzLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gIH1cbiAgZnVuY3Rpb24gb3duS2V5cyhlLCByKSB7XG4gICAgdmFyIHQgPSBPYmplY3Qua2V5cyhlKTtcbiAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAgdmFyIG8gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpO1xuICAgICAgciAmJiAobyA9IG8uZmlsdGVyKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsIHIpLmVudW1lcmFibGU7XG4gICAgICB9KSksIHQucHVzaC5hcHBseSh0LCBvKTtcbiAgICB9XG4gICAgcmV0dXJuIHQ7XG4gIH1cbiAgZnVuY3Rpb24gX29iamVjdFNwcmVhZDIoZSkge1xuICAgIGZvciAodmFyIHIgPSAxOyByIDwgYXJndW1lbnRzLmxlbmd0aDsgcisrKSB7XG4gICAgICB2YXIgdCA9IG51bGwgIT0gYXJndW1lbnRzW3JdID8gYXJndW1lbnRzW3JdIDoge307XG4gICAgICByICUgMiA/IG93bktleXMoT2JqZWN0KHQpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAocikge1xuICAgICAgICBfZGVmaW5lUHJvcGVydHkoZSwgciwgdFtyXSk7XG4gICAgICB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnModCkpIDogb3duS2V5cyhPYmplY3QodCkpLmZvckVhY2goZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHIsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCwgcikpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBlO1xuICB9XG4gIGZ1bmN0aW9uIF90b1ByaW1pdGl2ZSh0LCByKSB7XG4gICAgaWYgKFwib2JqZWN0XCIgIT0gdHlwZW9mIHQgfHwgIXQpIHJldHVybiB0O1xuICAgIHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdO1xuICAgIGlmICh2b2lkIDAgIT09IGUpIHtcbiAgICAgIHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpO1xuICAgICAgaWYgKFwib2JqZWN0XCIgIT0gdHlwZW9mIGkpIHJldHVybiBpO1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpO1xuICAgIH1cbiAgICByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpO1xuICB9XG4gIGZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KHQpIHtcbiAgICB2YXIgaSA9IF90b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTtcbiAgICByZXR1cm4gXCJzeW1ib2xcIiA9PSB0eXBlb2YgaSA/IGkgOiBpICsgXCJcIjtcbiAgfVxuXG4gIHZhciBjYW52YXNUb0Jsb2IgPSB7ZXhwb3J0czoge319O1xuXG4gIC8qXG4gICAqIEphdmFTY3JpcHQgQ2FudmFzIHRvIEJsb2JcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2JsdWVpbXAvSmF2YVNjcmlwdC1DYW52YXMtdG8tQmxvYlxuICAgKlxuICAgKiBDb3B5cmlnaHQgMjAxMiwgU2ViYXN0aWFuIFRzY2hhblxuICAgKiBodHRwczovL2JsdWVpbXAubmV0XG4gICAqXG4gICAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZTpcbiAgICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAgICpcbiAgICogQmFzZWQgb24gc3RhY2tvdmVyZmxvdyB1c2VyIFN0b2l2ZSdzIGNvZGUgc25pcHBldDpcbiAgICogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3EvNDk5ODkwOFxuICAgKi9cbiAgKGZ1bmN0aW9uIChtb2R1bGUpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gICAgKGZ1bmN0aW9uICh3aW5kb3cpIHtcblxuICAgICAgdmFyIENhbnZhc1Byb3RvdHlwZSA9IHdpbmRvdy5IVE1MQ2FudmFzRWxlbWVudCAmJiB3aW5kb3cuSFRNTENhbnZhc0VsZW1lbnQucHJvdG90eXBlO1xuICAgICAgdmFyIGhhc0Jsb2JDb25zdHJ1Y3RvciA9IHdpbmRvdy5CbG9iICYmIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gQm9vbGVhbihuZXcgQmxvYigpKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSgpO1xuICAgICAgdmFyIGhhc0FycmF5QnVmZmVyVmlld1N1cHBvcnQgPSBoYXNCbG9iQ29uc3RydWN0b3IgJiYgd2luZG93LlVpbnQ4QXJyYXkgJiYgZnVuY3Rpb24gKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBuZXcgQmxvYihbbmV3IFVpbnQ4QXJyYXkoMTAwKV0pLnNpemUgPT09IDEwMDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSgpO1xuICAgICAgdmFyIEJsb2JCdWlsZGVyID0gd2luZG93LkJsb2JCdWlsZGVyIHx8IHdpbmRvdy5XZWJLaXRCbG9iQnVpbGRlciB8fCB3aW5kb3cuTW96QmxvYkJ1aWxkZXIgfHwgd2luZG93Lk1TQmxvYkJ1aWxkZXI7XG4gICAgICB2YXIgZGF0YVVSSVBhdHRlcm4gPSAvXmRhdGE6KCguKj8pKDtjaGFyc2V0PS4qPyk/KSg7YmFzZTY0KT8sLztcbiAgICAgIHZhciBkYXRhVVJMdG9CbG9iID0gKGhhc0Jsb2JDb25zdHJ1Y3RvciB8fCBCbG9iQnVpbGRlcikgJiYgd2luZG93LmF0b2IgJiYgd2luZG93LkFycmF5QnVmZmVyICYmIHdpbmRvdy5VaW50OEFycmF5ICYmIGZ1bmN0aW9uIChkYXRhVVJJKSB7XG4gICAgICAgIHZhciBtYXRjaGVzLCBtZWRpYVR5cGUsIGlzQmFzZTY0LCBkYXRhU3RyaW5nLCBieXRlU3RyaW5nLCBhcnJheUJ1ZmZlciwgaW50QXJyYXksIGksIGJiO1xuICAgICAgICAvLyBQYXJzZSB0aGUgZGF0YVVSSSBjb21wb25lbnRzIGFzIHBlciBSRkMgMjM5N1xuICAgICAgICBtYXRjaGVzID0gZGF0YVVSSS5tYXRjaChkYXRhVVJJUGF0dGVybik7XG4gICAgICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBkYXRhIFVSSScpO1xuICAgICAgICB9XG4gICAgICAgIC8vIERlZmF1bHQgdG8gdGV4dC9wbGFpbjtjaGFyc2V0PVVTLUFTQ0lJXG4gICAgICAgIG1lZGlhVHlwZSA9IG1hdGNoZXNbMl0gPyBtYXRjaGVzWzFdIDogJ3RleHQvcGxhaW4nICsgKG1hdGNoZXNbM10gfHwgJztjaGFyc2V0PVVTLUFTQ0lJJyk7XG4gICAgICAgIGlzQmFzZTY0ID0gISFtYXRjaGVzWzRdO1xuICAgICAgICBkYXRhU3RyaW5nID0gZGF0YVVSSS5zbGljZShtYXRjaGVzWzBdLmxlbmd0aCk7XG4gICAgICAgIGlmIChpc0Jhc2U2NCkge1xuICAgICAgICAgIC8vIENvbnZlcnQgYmFzZTY0IHRvIHJhdyBiaW5hcnkgZGF0YSBoZWxkIGluIGEgc3RyaW5nOlxuICAgICAgICAgIGJ5dGVTdHJpbmcgPSBhdG9iKGRhdGFTdHJpbmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIENvbnZlcnQgYmFzZTY0L1VSTEVuY29kZWQgZGF0YSBjb21wb25lbnQgdG8gcmF3IGJpbmFyeTpcbiAgICAgICAgICBieXRlU3RyaW5nID0gZGVjb2RlVVJJQ29tcG9uZW50KGRhdGFTdHJpbmcpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFdyaXRlIHRoZSBieXRlcyBvZiB0aGUgc3RyaW5nIHRvIGFuIEFycmF5QnVmZmVyOlxuICAgICAgICBhcnJheUJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihieXRlU3RyaW5nLmxlbmd0aCk7XG4gICAgICAgIGludEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYnl0ZVN0cmluZy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGludEFycmF5W2ldID0gYnl0ZVN0cmluZy5jaGFyQ29kZUF0KGkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFdyaXRlIHRoZSBBcnJheUJ1ZmZlciAob3IgQXJyYXlCdWZmZXJWaWV3KSB0byBhIGJsb2I6XG4gICAgICAgIGlmIChoYXNCbG9iQ29uc3RydWN0b3IpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IEJsb2IoW2hhc0FycmF5QnVmZmVyVmlld1N1cHBvcnQgPyBpbnRBcnJheSA6IGFycmF5QnVmZmVyXSwge1xuICAgICAgICAgICAgdHlwZTogbWVkaWFUeXBlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgYmIgPSBuZXcgQmxvYkJ1aWxkZXIoKTtcbiAgICAgICAgYmIuYXBwZW5kKGFycmF5QnVmZmVyKTtcbiAgICAgICAgcmV0dXJuIGJiLmdldEJsb2IobWVkaWFUeXBlKTtcbiAgICAgIH07XG4gICAgICBpZiAod2luZG93LkhUTUxDYW52YXNFbGVtZW50ICYmICFDYW52YXNQcm90b3R5cGUudG9CbG9iKSB7XG4gICAgICAgIGlmIChDYW52YXNQcm90b3R5cGUubW96R2V0QXNGaWxlKSB7XG4gICAgICAgICAgQ2FudmFzUHJvdG90eXBlLnRvQmxvYiA9IGZ1bmN0aW9uIChjYWxsYmFjaywgdHlwZSwgcXVhbGl0eSkge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGlmIChxdWFsaXR5ICYmIENhbnZhc1Byb3RvdHlwZS50b0RhdGFVUkwgJiYgZGF0YVVSTHRvQmxvYikge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGFVUkx0b0Jsb2Ioc2VsZi50b0RhdGFVUkwodHlwZSwgcXVhbGl0eSkpKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhzZWxmLm1vekdldEFzRmlsZSgnYmxvYicsIHR5cGUpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChDYW52YXNQcm90b3R5cGUudG9EYXRhVVJMICYmIGRhdGFVUkx0b0Jsb2IpIHtcbiAgICAgICAgICBpZiAoQ2FudmFzUHJvdG90eXBlLm1zVG9CbG9iKSB7XG4gICAgICAgICAgICBDYW52YXNQcm90b3R5cGUudG9CbG9iID0gZnVuY3Rpb24gKGNhbGxiYWNrLCB0eXBlLCBxdWFsaXR5KSB7XG4gICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCh0eXBlICYmIHR5cGUgIT09ICdpbWFnZS9wbmcnIHx8IHF1YWxpdHkpICYmIENhbnZhc1Byb3RvdHlwZS50b0RhdGFVUkwgJiYgZGF0YVVSTHRvQmxvYikge1xuICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YVVSTHRvQmxvYihzZWxmLnRvRGF0YVVSTCh0eXBlLCBxdWFsaXR5KSkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBjYWxsYmFjayhzZWxmLm1zVG9CbG9iKHR5cGUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgQ2FudmFzUHJvdG90eXBlLnRvQmxvYiA9IGZ1bmN0aW9uIChjYWxsYmFjaywgdHlwZSwgcXVhbGl0eSkge1xuICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGFVUkx0b0Jsb2Ioc2VsZi50b0RhdGFVUkwodHlwZSwgcXVhbGl0eSkpKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZGF0YVVSTHRvQmxvYjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5kYXRhVVJMdG9CbG9iID0gZGF0YVVSTHRvQmxvYjtcbiAgICAgIH1cbiAgICB9KSh3aW5kb3cpO1xuICB9KShjYW52YXNUb0Jsb2IpO1xuICB2YXIgdG9CbG9iID0gY2FudmFzVG9CbG9iLmV4cG9ydHM7XG5cbiAgdmFyIGlzQmxvYiA9IGZ1bmN0aW9uIGlzQmxvYih2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgQmxvYiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgQmxvYiB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBCbG9iXSc7XG4gIH07XG5cbiAgdmFyIERFRkFVTFRTID0ge1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyBpZiBvdXRwdXQgdGhlIG9yaWdpbmFsIGltYWdlIGluc3RlYWQgb2YgdGhlIGNvbXByZXNzZWQgb25lXG4gICAgICogd2hlbiB0aGUgc2l6ZSBvZiB0aGUgY29tcHJlc3NlZCBpbWFnZSBpcyBncmVhdGVyIHRoYW4gdGhlIG9yaWdpbmFsIG9uZSdzXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgc3RyaWN0OiB0cnVlLFxuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyBpZiByZWFkIHRoZSBpbWFnZSdzIEV4aWYgT3JpZW50YXRpb24gaW5mb3JtYXRpb24sXG4gICAgICogYW5kIHRoZW4gcm90YXRlIG9yIGZsaXAgdGhlIGltYWdlIGF1dG9tYXRpY2FsbHkuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgY2hlY2tPcmllbnRhdGlvbjogdHJ1ZSxcbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgaWYgcmV0YWluIHRoZSBpbWFnZSdzIEV4aWYgaW5mb3JtYXRpb24gYWZ0ZXIgY29tcHJlc3NlZC5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAqL1xuICAgIHJldGFpbkV4aWY6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIFRoZSBtYXggd2lkdGggb2YgdGhlIG91dHB1dCBpbWFnZS5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIG1heFdpZHRoOiBJbmZpbml0eSxcbiAgICAvKipcbiAgICAgKiBUaGUgbWF4IGhlaWdodCBvZiB0aGUgb3V0cHV0IGltYWdlLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgbWF4SGVpZ2h0OiBJbmZpbml0eSxcbiAgICAvKipcbiAgICAgKiBUaGUgbWluIHdpZHRoIG9mIHRoZSBvdXRwdXQgaW1hZ2UuXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBtaW5XaWR0aDogMCxcbiAgICAvKipcbiAgICAgKiBUaGUgbWluIGhlaWdodCBvZiB0aGUgb3V0cHV0IGltYWdlLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgbWluSGVpZ2h0OiAwLFxuICAgIC8qKlxuICAgICAqIFRoZSB3aWR0aCBvZiB0aGUgb3V0cHV0IGltYWdlLlxuICAgICAqIElmIG5vdCBzcGVjaWZpZWQsIHRoZSBuYXR1cmFsIHdpZHRoIG9mIHRoZSBzb3VyY2UgaW1hZ2Ugd2lsbCBiZSB1c2VkLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgd2lkdGg6IHVuZGVmaW5lZCxcbiAgICAvKipcbiAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBvdXRwdXQgaW1hZ2UuXG4gICAgICogSWYgbm90IHNwZWNpZmllZCwgdGhlIG5hdHVyYWwgaGVpZ2h0IG9mIHRoZSBzb3VyY2UgaW1hZ2Ugd2lsbCBiZSB1c2VkLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgaGVpZ2h0OiB1bmRlZmluZWQsXG4gICAgLyoqXG4gICAgICogU2V0cyBob3cgdGhlIHNpemUgb2YgdGhlIGltYWdlIHNob3VsZCBiZSByZXNpemVkIHRvIHRoZSBjb250YWluZXJcbiAgICAgKiBzcGVjaWZpZWQgYnkgdGhlIGB3aWR0aGAgYW5kIGBoZWlnaHRgIG9wdGlvbnMuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICByZXNpemU6ICdub25lJyxcbiAgICAvKipcbiAgICAgKiBUaGUgcXVhbGl0eSBvZiB0aGUgb3V0cHV0IGltYWdlLlxuICAgICAqIEl0IG11c3QgYmUgYSBudW1iZXIgYmV0d2VlbiBgMGAgYW5kIGAxYCxcbiAgICAgKiBhbmQgb25seSBhdmFpbGFibGUgZm9yIGBpbWFnZS9qcGVnYCBhbmQgYGltYWdlL3dlYnBgIGltYWdlcy5cbiAgICAgKiBDaGVjayBvdXQge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IVE1MQ2FudmFzRWxlbWVudC90b0Jsb2IgY2FudmFzLnRvQmxvYn0uXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBxdWFsaXR5OiAwLjgsXG4gICAgLyoqXG4gICAgICogVGhlIG1pbWUgdHlwZSBvZiB0aGUgb3V0cHV0IGltYWdlLlxuICAgICAqIEJ5IGRlZmF1bHQsIHRoZSBvcmlnaW5hbCBtaW1lIHR5cGUgb2YgdGhlIHNvdXJjZSBpbWFnZSBmaWxlIHdpbGwgYmUgdXNlZC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIG1pbWVUeXBlOiAnYXV0bycsXG4gICAgLyoqXG4gICAgICogRmlsZXMgd2hvc2UgZmlsZSB0eXBlIGlzIGluY2x1ZGVkIGluIHRoaXMgbGlzdCxcbiAgICAgKiBhbmQgd2hvc2UgZmlsZSBzaXplIGV4Y2VlZHMgdGhlIGBjb252ZXJ0U2l6ZWAgdmFsdWUgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gSlBFR3MuXG4gICAgICogQHR5cGUge3N0cmluZ1x1RkY1Q0FycmF5fVxuICAgICAqL1xuICAgIGNvbnZlcnRUeXBlczogWydpbWFnZS9wbmcnXSxcbiAgICAvKipcbiAgICAgKiBQTkcgZmlsZXMgb3ZlciB0aGlzIHNpemUgKDUgTUIgYnkgZGVmYXVsdCkgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gSlBFR3MuXG4gICAgICogVG8gZGlzYWJsZSB0aGlzLCBqdXN0IHNldCB0aGUgdmFsdWUgdG8gYEluZmluaXR5YC5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIGNvbnZlcnRTaXplOiA1MDAwMDAwLFxuICAgIC8qKlxuICAgICAqIFRoZSBob29rIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgYmVmb3JlIGRyYXcgdGhlIGltYWdlIGludG8gdGhlIGNhbnZhcyBmb3IgY29tcHJlc3Npb24uXG4gICAgICogQHR5cGUge0Z1bmN0aW9ufVxuICAgICAqIEBwYXJhbSB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSBjb250ZXh0IC0gVGhlIDJkIHJlbmRlcmluZyBjb250ZXh0IG9mIHRoZSBjYW52YXMuXG4gICAgICogQHBhcmFtIHtIVE1MQ2FudmFzRWxlbWVudH0gY2FudmFzIC0gVGhlIGNhbnZhcyBmb3IgY29tcHJlc3Npb24uXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBmdW5jdGlvbiAoY29udGV4dCwgY2FudmFzKSB7XG4gICAgICogICBjb250ZXh0LmZpbGxTdHlsZSA9ICcjZmZmJztcbiAgICAgKiB9XG4gICAgICovXG4gICAgYmVmb3JlRHJhdzogbnVsbCxcbiAgICAvKipcbiAgICAgKiBUaGUgaG9vayBmdW5jdGlvbiB0byBleGVjdXRlIGFmdGVyIGRyZXcgdGhlIGltYWdlIGludG8gdGhlIGNhbnZhcyBmb3IgY29tcHJlc3Npb24uXG4gICAgICogQHR5cGUge0Z1bmN0aW9ufVxuICAgICAqIEBwYXJhbSB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSBjb250ZXh0IC0gVGhlIDJkIHJlbmRlcmluZyBjb250ZXh0IG9mIHRoZSBjYW52YXMuXG4gICAgICogQHBhcmFtIHtIVE1MQ2FudmFzRWxlbWVudH0gY2FudmFzIC0gVGhlIGNhbnZhcyBmb3IgY29tcHJlc3Npb24uXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBmdW5jdGlvbiAoY29udGV4dCwgY2FudmFzKSB7XG4gICAgICogICBjb250ZXh0LmZpbHRlciA9ICdncmF5c2NhbGUoMTAwJSknO1xuICAgICAqIH1cbiAgICAgKi9cbiAgICBkcmV3OiBudWxsLFxuICAgIC8qKlxuICAgICAqIFRoZSBob29rIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgd2hlbiBzdWNjZXNzIHRvIGNvbXByZXNzIHRoZSBpbWFnZS5cbiAgICAgKiBAdHlwZSB7RnVuY3Rpb259XG4gICAgICogQHBhcmFtIHtGaWxlfSBmaWxlIC0gVGhlIGNvbXByZXNzZWQgaW1hZ2UgRmlsZSBvYmplY3QuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBmdW5jdGlvbiAoZmlsZSkge1xuICAgICAqICAgY29uc29sZS5sb2coZmlsZSk7XG4gICAgICogfVxuICAgICAqL1xuICAgIHN1Y2Nlc3M6IG51bGwsXG4gICAgLyoqXG4gICAgICogVGhlIGhvb2sgZnVuY3Rpb24gdG8gZXhlY3V0ZSB3aGVuIGZhaWwgdG8gY29tcHJlc3MgdGhlIGltYWdlLlxuICAgICAqIEB0eXBlIHtGdW5jdGlvbn1cbiAgICAgKiBAcGFyYW0ge0Vycm9yfSBlcnIgLSBBbiBFcnJvciBvYmplY3QuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICogICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XG4gICAgICogfVxuICAgICAqL1xuICAgIGVycm9yOiBudWxsXG4gIH07XG5cbiAgdmFyIElTX0JST1dTRVIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50ICE9PSAndW5kZWZpbmVkJztcbiAgdmFyIFdJTkRPVyA9IElTX0JST1dTRVIgPyB3aW5kb3cgOiB7fTtcblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgcG9zaXRpdmUgbnVtYmVyLlxuICAgKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNoZWNrLlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgcG9zaXRpdmUgbnVtYmVyLCBlbHNlIGBmYWxzZWAuXG4gICAqL1xuICB2YXIgaXNQb3NpdGl2ZU51bWJlciA9IGZ1bmN0aW9uIGlzUG9zaXRpdmVOdW1iZXIodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPiAwICYmIHZhbHVlIDwgSW5maW5pdHk7XG4gIH07XG4gIHZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblxuICAvKipcbiAgICogQ29udmVydCBhcnJheS1saWtlIG9yIGl0ZXJhYmxlIG9iamVjdCB0byBhbiBhcnJheS5cbiAgICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICAgKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYSBuZXcgYXJyYXkuXG4gICAqL1xuICBmdW5jdGlvbiB0b0FycmF5KHZhbHVlKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20gPyBBcnJheS5mcm9tKHZhbHVlKSA6IHNsaWNlLmNhbGwodmFsdWUpO1xuICB9XG4gIHZhciBSRUdFWFBfSU1BR0VfVFlQRSA9IC9eaW1hZ2VcXC8uKyQvO1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBtaW1lIHR5cGUgb2YgaW1hZ2UuXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZ2l2ZW4gaXMgYSBtaW1lIHR5cGUgb2YgaW1hZ2UsIGVsc2UgYGZhbHNlYC5cbiAgICovXG4gIGZ1bmN0aW9uIGlzSW1hZ2VUeXBlKHZhbHVlKSB7XG4gICAgcmV0dXJuIFJFR0VYUF9JTUFHRV9UWVBFLnRlc3QodmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgaW1hZ2UgdHlwZSB0byBleHRlbnNpb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFRoZSBpbWFnZSB0eXBlIHRvIGNvbnZlcnQuXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIHRoZSBpbWFnZSBleHRlbnNpb24uXG4gICAqL1xuICBmdW5jdGlvbiBpbWFnZVR5cGVUb0V4dGVuc2lvbih2YWx1ZSkge1xuICAgIHZhciBleHRlbnNpb24gPSBpc0ltYWdlVHlwZSh2YWx1ZSkgPyB2YWx1ZS5zdWJzdHIoNikgOiAnJztcbiAgICBpZiAoZXh0ZW5zaW9uID09PSAnanBlZycpIHtcbiAgICAgIGV4dGVuc2lvbiA9ICdqcGcnO1xuICAgIH1cbiAgICByZXR1cm4gXCIuXCIuY29uY2F0KGV4dGVuc2lvbik7XG4gIH1cbiAgdmFyIGZyb21DaGFyQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGU7XG5cbiAgLyoqXG4gICAqIEdldCBzdHJpbmcgZnJvbSBjaGFyIGNvZGUgaW4gZGF0YSB2aWV3LlxuICAgKiBAcGFyYW0ge0RhdGFWaWV3fSBkYXRhVmlldyAtIFRoZSBkYXRhIHZpZXcgZm9yIHJlYWQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCAtIFRoZSBzdGFydCBpbmRleC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCAtIFRoZSByZWFkIGxlbmd0aC5cbiAgICogQHJldHVybnMge3N0cmluZ30gVGhlIHJlYWQgcmVzdWx0LlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0U3RyaW5nRnJvbUNoYXJDb2RlKGRhdGFWaWV3LCBzdGFydCwgbGVuZ3RoKSB7XG4gICAgdmFyIHN0ciA9ICcnO1xuICAgIHZhciBpO1xuICAgIGxlbmd0aCArPSBzdGFydDtcbiAgICBmb3IgKGkgPSBzdGFydDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBzdHIgKz0gZnJvbUNoYXJDb2RlKGRhdGFWaWV3LmdldFVpbnQ4KGkpKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBgY2FudmFzLmdldENvbnRleHQoJzJkJykuZ2V0SW1hZ2VEYXRhYCBpcyBhdmFpbGFibGUsXG4gICAqIEZpcmVGb3ggcmFuZG9taXplcyB0aGUgb3V0cHV0IG9mIHRoYXQgZnVuY3Rpb24gaW4gYHByaXZhY3kucmVzaXN0RmluZ2VycHJpbnRpbmdgIG1vZGUgKCMxMzcpXG4gICAqIEBsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlY2EvcGljYS9ibG9iL21hc3Rlci9saWIvdXRpbHMuanNcbiAgICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGl0IGlzIGF2YWlsYWJsZSwgZWxzZSBgZmFsc2VgLlxuICAgKi9cbiAgZnVuY3Rpb24gaXNDYW52YXNBdmFpbGFibGUoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgIGNhbnZhcy53aWR0aCA9IDI7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gMTtcbiAgICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICBpZiAoIWNvbnRleHQpIHJldHVybiBmYWxzZTtcblxuICAgICAgLy8gQ3JlYXRlIDJ4MSBpbWFnZSBkYXRhIGNvbnRhaW5pbmcgUkdCQSB2YWx1ZXMgZm9yIHR3byBwaXhlbHNcbiAgICAgIHZhciBpbWFnZURhdGEgPSBjb250ZXh0LmNyZWF0ZUltYWdlRGF0YSgyLCAxKTtcblxuICAgICAgLy8gRmlyc3QgcGl4ZWw6IFI9MTIsIEc9MjMsIEI9MzQsIEE9MjU1XG4gICAgICBpbWFnZURhdGEuZGF0YVswXSA9IDEyO1xuICAgICAgaW1hZ2VEYXRhLmRhdGFbMV0gPSAyMztcbiAgICAgIGltYWdlRGF0YS5kYXRhWzJdID0gMzQ7XG4gICAgICBpbWFnZURhdGEuZGF0YVszXSA9IDI1NTtcblxuICAgICAgLy8gU2Vjb25kIHBpeGVsOiBSPTQ1LCBHPTU2LCBCPTY3LCBBPTI1NVxuICAgICAgaW1hZ2VEYXRhLmRhdGFbNF0gPSA0NTtcbiAgICAgIGltYWdlRGF0YS5kYXRhWzVdID0gNTY7XG4gICAgICBpbWFnZURhdGEuZGF0YVs2XSA9IDY3O1xuICAgICAgaW1hZ2VEYXRhLmRhdGFbN10gPSAyNTU7XG4gICAgICBjb250ZXh0LnB1dEltYWdlRGF0YShpbWFnZURhdGEsIDAsIDApO1xuICAgICAgdmFyIHJlYWRCYWNrID0gY29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgMiwgMSk7XG5cbiAgICAgIC8vIEV4cGVjdGVkIHBpeGVsIGRhdGEgKG1hdGNoaW5nIHRoZSB3cml0dGVuIHZhbHVlcylcbiAgICAgIHZhciBleHBlY3RlZCA9IFsxMiwgMjMsIDM0LCAyNTUsIDQ1LCA1NiwgNjcsIDI1NV07XG5cbiAgICAgIC8vIENvbXBhcmUgZWxlbWVudCBieSBlbGVtZW50IHRvIGVuc3VyZSB3cml0ZSBhbmQgcmVhZCBjb25zaXN0ZW5jeVxuICAgICAgcmV0dXJuIHJlYWRCYWNrLmRhdGEuZXZlcnkoZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gdmFsdWUgPT09IGV4cGVjdGVkW2luZGV4XTtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHZhciBidG9hID0gV0lORE9XLmJ0b2E7XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybSBhcnJheSBidWZmZXIgdG8gRGF0YSBVUkwuXG4gICAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGFycmF5QnVmZmVyIC0gVGhlIGFycmF5IGJ1ZmZlciB0byB0cmFuc2Zvcm0uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtaW1lVHlwZSAtIFRoZSBtaW1lIHR5cGUgb2YgdGhlIERhdGEgVVJMLlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgcmVzdWx0IERhdGEgVVJMLlxuICAgKi9cbiAgZnVuY3Rpb24gYXJyYXlCdWZmZXJUb0RhdGFVUkwoYXJyYXlCdWZmZXIsIG1pbWVUeXBlKSB7XG4gICAgdmFyIGNodW5rcyA9IFtdO1xuICAgIHZhciBjaHVua1NpemUgPSA4MTkyO1xuICAgIHZhciB1aW50OCA9IG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKTtcbiAgICB3aGlsZSAodWludDgubGVuZ3RoID4gMCkge1xuICAgICAgLy8gWFhYOiBCYWJlbCdzIGB0b0NvbnN1bWFibGVBcnJheWAgaGVscGVyIHdpbGwgdGhyb3cgZXJyb3IgaW4gSUUgb3IgU2FmYXJpIDlcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItc3ByZWFkXG4gICAgICBjaHVua3MucHVzaChmcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgdG9BcnJheSh1aW50OC5zdWJhcnJheSgwLCBjaHVua1NpemUpKSkpO1xuICAgICAgdWludDggPSB1aW50OC5zdWJhcnJheShjaHVua1NpemUpO1xuICAgIH1cbiAgICByZXR1cm4gXCJkYXRhOlwiLmNvbmNhdChtaW1lVHlwZSwgXCI7YmFzZTY0LFwiKS5jb25jYXQoYnRvYShjaHVua3Muam9pbignJykpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgb3JpZW50YXRpb24gdmFsdWUgZnJvbSBnaXZlbiBhcnJheSBidWZmZXIuXG4gICAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGFycmF5QnVmZmVyIC0gVGhlIGFycmF5IGJ1ZmZlciB0byByZWFkLlxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgcmVhZCBvcmllbnRhdGlvbiB2YWx1ZS5cbiAgICovXG4gIGZ1bmN0aW9uIHJlc2V0QW5kR2V0T3JpZW50YXRpb24oYXJyYXlCdWZmZXIpIHtcbiAgICB2YXIgZGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcoYXJyYXlCdWZmZXIpO1xuICAgIHZhciBvcmllbnRhdGlvbjtcblxuICAgIC8vIElnbm9yZXMgcmFuZ2UgZXJyb3Igd2hlbiB0aGUgaW1hZ2UgZG9lcyBub3QgaGF2ZSBjb3JyZWN0IEV4aWYgaW5mb3JtYXRpb25cbiAgICB0cnkge1xuICAgICAgdmFyIGxpdHRsZUVuZGlhbjtcbiAgICAgIHZhciBhcHAxU3RhcnQ7XG4gICAgICB2YXIgaWZkU3RhcnQ7XG5cbiAgICAgIC8vIE9ubHkgaGFuZGxlIEpQRUcgaW1hZ2UgKHN0YXJ0IGJ5IDB4RkZEOClcbiAgICAgIGlmIChkYXRhVmlldy5nZXRVaW50OCgwKSA9PT0gMHhGRiAmJiBkYXRhVmlldy5nZXRVaW50OCgxKSA9PT0gMHhEOCkge1xuICAgICAgICB2YXIgbGVuZ3RoID0gZGF0YVZpZXcuYnl0ZUxlbmd0aDtcbiAgICAgICAgdmFyIG9mZnNldCA9IDI7XG4gICAgICAgIHdoaWxlIChvZmZzZXQgKyAxIDwgbGVuZ3RoKSB7XG4gICAgICAgICAgaWYgKGRhdGFWaWV3LmdldFVpbnQ4KG9mZnNldCkgPT09IDB4RkYgJiYgZGF0YVZpZXcuZ2V0VWludDgob2Zmc2V0ICsgMSkgPT09IDB4RTEpIHtcbiAgICAgICAgICAgIGFwcDFTdGFydCA9IG9mZnNldDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvZmZzZXQgKz0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGFwcDFTdGFydCkge1xuICAgICAgICB2YXIgZXhpZklEQ29kZSA9IGFwcDFTdGFydCArIDQ7XG4gICAgICAgIHZhciB0aWZmT2Zmc2V0ID0gYXBwMVN0YXJ0ICsgMTA7XG4gICAgICAgIGlmIChnZXRTdHJpbmdGcm9tQ2hhckNvZGUoZGF0YVZpZXcsIGV4aWZJRENvZGUsIDQpID09PSAnRXhpZicpIHtcbiAgICAgICAgICB2YXIgZW5kaWFubmVzcyA9IGRhdGFWaWV3LmdldFVpbnQxNih0aWZmT2Zmc2V0KTtcbiAgICAgICAgICBsaXR0bGVFbmRpYW4gPSBlbmRpYW5uZXNzID09PSAweDQ5NDk7XG4gICAgICAgICAgaWYgKGxpdHRsZUVuZGlhbiB8fCBlbmRpYW5uZXNzID09PSAweDRENEQgLyogYmlnRW5kaWFuICovKSB7XG4gICAgICAgICAgICBpZiAoZGF0YVZpZXcuZ2V0VWludDE2KHRpZmZPZmZzZXQgKyAyLCBsaXR0bGVFbmRpYW4pID09PSAweDAwMkEpIHtcbiAgICAgICAgICAgICAgdmFyIGZpcnN0SUZET2Zmc2V0ID0gZGF0YVZpZXcuZ2V0VWludDMyKHRpZmZPZmZzZXQgKyA0LCBsaXR0bGVFbmRpYW4pO1xuICAgICAgICAgICAgICBpZiAoZmlyc3RJRkRPZmZzZXQgPj0gMHgwMDAwMDAwOCkge1xuICAgICAgICAgICAgICAgIGlmZFN0YXJ0ID0gdGlmZk9mZnNldCArIGZpcnN0SUZET2Zmc2V0O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaWZkU3RhcnQpIHtcbiAgICAgICAgdmFyIF9sZW5ndGggPSBkYXRhVmlldy5nZXRVaW50MTYoaWZkU3RhcnQsIGxpdHRsZUVuZGlhbik7XG4gICAgICAgIHZhciBfb2Zmc2V0O1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IF9sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIF9vZmZzZXQgPSBpZmRTdGFydCArIGkgKiAxMiArIDI7XG4gICAgICAgICAgaWYgKGRhdGFWaWV3LmdldFVpbnQxNihfb2Zmc2V0LCBsaXR0bGVFbmRpYW4pID09PSAweDAxMTIgLyogT3JpZW50YXRpb24gKi8pIHtcbiAgICAgICAgICAgIC8vIDggaXMgdGhlIG9mZnNldCBvZiB0aGUgY3VycmVudCB0YWcncyB2YWx1ZVxuICAgICAgICAgICAgX29mZnNldCArPSA4O1xuXG4gICAgICAgICAgICAvLyBHZXQgdGhlIG9yaWdpbmFsIG9yaWVudGF0aW9uIHZhbHVlXG4gICAgICAgICAgICBvcmllbnRhdGlvbiA9IGRhdGFWaWV3LmdldFVpbnQxNihfb2Zmc2V0LCBsaXR0bGVFbmRpYW4pO1xuXG4gICAgICAgICAgICAvLyBPdmVycmlkZSB0aGUgb3JpZW50YXRpb24gd2l0aCBpdHMgZGVmYXVsdCB2YWx1ZVxuICAgICAgICAgICAgZGF0YVZpZXcuc2V0VWludDE2KF9vZmZzZXQsIDEsIGxpdHRsZUVuZGlhbik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBvcmllbnRhdGlvbiA9IDE7XG4gICAgfVxuICAgIHJldHVybiBvcmllbnRhdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZSBFeGlmIE9yaWVudGF0aW9uIHZhbHVlLlxuICAgKiBAcGFyYW0ge251bWJlcn0gb3JpZW50YXRpb24gLSBUaGUgb3JpZW50YXRpb24gdG8gcGFyc2UuXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBwYXJzZWQgcmVzdWx0LlxuICAgKi9cbiAgZnVuY3Rpb24gcGFyc2VPcmllbnRhdGlvbihvcmllbnRhdGlvbikge1xuICAgIHZhciByb3RhdGUgPSAwO1xuICAgIHZhciBzY2FsZVggPSAxO1xuICAgIHZhciBzY2FsZVkgPSAxO1xuICAgIHN3aXRjaCAob3JpZW50YXRpb24pIHtcbiAgICAgIC8vIEZsaXAgaG9yaXpvbnRhbFxuICAgICAgY2FzZSAyOlxuICAgICAgICBzY2FsZVggPSAtMTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8vIFJvdGF0ZSBsZWZ0IDE4MFx1MDBCMFxuICAgICAgY2FzZSAzOlxuICAgICAgICByb3RhdGUgPSAtMTgwO1xuICAgICAgICBicmVhaztcblxuICAgICAgLy8gRmxpcCB2ZXJ0aWNhbFxuICAgICAgY2FzZSA0OlxuICAgICAgICBzY2FsZVkgPSAtMTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8vIEZsaXAgdmVydGljYWwgYW5kIHJvdGF0ZSByaWdodCA5MFx1MDBCMFxuICAgICAgY2FzZSA1OlxuICAgICAgICByb3RhdGUgPSA5MDtcbiAgICAgICAgc2NhbGVZID0gLTE7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvLyBSb3RhdGUgcmlnaHQgOTBcdTAwQjBcbiAgICAgIGNhc2UgNjpcbiAgICAgICAgcm90YXRlID0gOTA7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvLyBGbGlwIGhvcml6b250YWwgYW5kIHJvdGF0ZSByaWdodCA5MFx1MDBCMFxuICAgICAgY2FzZSA3OlxuICAgICAgICByb3RhdGUgPSA5MDtcbiAgICAgICAgc2NhbGVYID0gLTE7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvLyBSb3RhdGUgbGVmdCA5MFx1MDBCMFxuICAgICAgY2FzZSA4OlxuICAgICAgICByb3RhdGUgPSAtOTA7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgcm90YXRlOiByb3RhdGUsXG4gICAgICBzY2FsZVg6IHNjYWxlWCxcbiAgICAgIHNjYWxlWTogc2NhbGVZXG4gICAgfTtcbiAgfVxuICB2YXIgUkVHRVhQX0RFQ0lNQUxTID0gL1xcLlxcZCooPzowfDkpezEyfVxcZCokLztcblxuICAvKipcbiAgICogTm9ybWFsaXplIGRlY2ltYWwgbnVtYmVyLlxuICAgKiBDaGVjayBvdXQge0BsaW5rIGh0dHBzOi8vMC4zMDAwMDAwMDAwMDAwMDAwNC5jb20vfVxuICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gbm9ybWFsaXplLlxuICAgKiBAcGFyYW0ge251bWJlcn0gW3RpbWVzPTEwMDAwMDAwMDAwMF0gLSBUaGUgdGltZXMgZm9yIG5vcm1hbGl6aW5nLlxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBub3JtYWxpemVkIG51bWJlci5cbiAgICovXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZURlY2ltYWxOdW1iZXIodmFsdWUpIHtcbiAgICB2YXIgdGltZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDEwMDAwMDAwMDAwMDtcbiAgICByZXR1cm4gUkVHRVhQX0RFQ0lNQUxTLnRlc3QodmFsdWUpID8gTWF0aC5yb3VuZCh2YWx1ZSAqIHRpbWVzKSAvIHRpbWVzIDogdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBtYXggc2l6ZXMgaW4gYSByZWN0YW5nbGUgdW5kZXIgdGhlIGdpdmVuIGFzcGVjdCByYXRpby5cbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgLSBUaGUgb3JpZ2luYWwgc2l6ZXMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbdHlwZT0nY29udGFpbiddIC0gVGhlIGFkanVzdCB0eXBlLlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgcmVzdWx0IHNpemVzLlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0QWRqdXN0ZWRTaXplcyhfcmVmKSB7XG4gICAgdmFyIGFzcGVjdFJhdGlvID0gX3JlZi5hc3BlY3RSYXRpbyxcbiAgICAgIGhlaWdodCA9IF9yZWYuaGVpZ2h0LFxuICAgICAgd2lkdGggPSBfcmVmLndpZHRoO1xuICAgIHZhciB0eXBlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnbm9uZSc7XG4gICAgdmFyIGlzVmFsaWRXaWR0aCA9IGlzUG9zaXRpdmVOdW1iZXIod2lkdGgpO1xuICAgIHZhciBpc1ZhbGlkSGVpZ2h0ID0gaXNQb3NpdGl2ZU51bWJlcihoZWlnaHQpO1xuICAgIGlmIChpc1ZhbGlkV2lkdGggJiYgaXNWYWxpZEhlaWdodCkge1xuICAgICAgdmFyIGFkanVzdGVkV2lkdGggPSBoZWlnaHQgKiBhc3BlY3RSYXRpbztcbiAgICAgIGlmICgodHlwZSA9PT0gJ2NvbnRhaW4nIHx8IHR5cGUgPT09ICdub25lJykgJiYgYWRqdXN0ZWRXaWR0aCA+IHdpZHRoIHx8IHR5cGUgPT09ICdjb3ZlcicgJiYgYWRqdXN0ZWRXaWR0aCA8IHdpZHRoKSB7XG4gICAgICAgIGhlaWdodCA9IHdpZHRoIC8gYXNwZWN0UmF0aW87XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aWR0aCA9IGhlaWdodCAqIGFzcGVjdFJhdGlvO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNWYWxpZFdpZHRoKSB7XG4gICAgICBoZWlnaHQgPSB3aWR0aCAvIGFzcGVjdFJhdGlvO1xuICAgIH0gZWxzZSBpZiAoaXNWYWxpZEhlaWdodCkge1xuICAgICAgd2lkdGggPSBoZWlnaHQgKiBhc3BlY3RSYXRpbztcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgRXhpZiBpbmZvcm1hdGlvbiBmcm9tIHRoZSBnaXZlbiBhcnJheSBidWZmZXIuXG4gICAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGFycmF5QnVmZmVyIC0gVGhlIGFycmF5IGJ1ZmZlciB0byByZWFkLlxuICAgKiBAcmV0dXJucyB7QXJyYXl9IFRoZSByZWFkIEV4aWYgaW5mb3JtYXRpb24uXG4gICAqL1xuICBmdW5jdGlvbiBnZXRFeGlmKGFycmF5QnVmZmVyKSB7XG4gICAgdmFyIGFycmF5ID0gdG9BcnJheShuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcikpO1xuICAgIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gICAgdmFyIHNlZ21lbnRzID0gW107XG4gICAgdmFyIHN0YXJ0ID0gMDtcbiAgICB3aGlsZSAoc3RhcnQgKyAzIDwgbGVuZ3RoKSB7XG4gICAgICB2YXIgdmFsdWUgPSBhcnJheVtzdGFydF07XG4gICAgICB2YXIgbmV4dCA9IGFycmF5W3N0YXJ0ICsgMV07XG5cbiAgICAgIC8vIFNPUyAoU3RhcnQgb2YgU2NhbilcbiAgICAgIGlmICh2YWx1ZSA9PT0gMHhGRiAmJiBuZXh0ID09PSAweERBKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICAvLyBTT0kgKFN0YXJ0IG9mIEltYWdlKVxuICAgICAgaWYgKHZhbHVlID09PSAweEZGICYmIG5leHQgPT09IDB4RDgpIHtcbiAgICAgICAgc3RhcnQgKz0gMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBvZmZzZXQgPSBhcnJheVtzdGFydCArIDJdICogMjU2ICsgYXJyYXlbc3RhcnQgKyAzXTtcbiAgICAgICAgdmFyIGVuZCA9IHN0YXJ0ICsgb2Zmc2V0ICsgMjtcbiAgICAgICAgdmFyIHNlZ21lbnQgPSBhcnJheS5zbGljZShzdGFydCwgZW5kKTtcbiAgICAgICAgc2VnbWVudHMucHVzaChzZWdtZW50KTtcbiAgICAgICAgc3RhcnQgPSBlbmQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzZWdtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGV4aWZBcnJheSwgY3VycmVudCkge1xuICAgICAgaWYgKGN1cnJlbnRbMF0gPT09IDB4RkYgJiYgY3VycmVudFsxXSA9PT0gMHhFMSkge1xuICAgICAgICByZXR1cm4gZXhpZkFycmF5LmNvbmNhdChjdXJyZW50KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBleGlmQXJyYXk7XG4gICAgfSwgW10pO1xuICB9XG5cbiAgLyoqXG4gICAqIEluc2VydCBFeGlmIGluZm9ybWF0aW9uIGludG8gdGhlIGdpdmVuIGFycmF5IGJ1ZmZlci5cbiAgICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gYXJyYXlCdWZmZXIgLSBUaGUgYXJyYXkgYnVmZmVyIHRvIHRyYW5zZm9ybS5cbiAgICogQHBhcmFtIHtBcnJheX0gZXhpZkFycmF5IC0gVGhlIEV4aWYgaW5mb3JtYXRpb24gdG8gaW5zZXJ0LlxuICAgKiBAcmV0dXJucyB7QXJyYXlCdWZmZXJ9IFRoZSB0cmFuc2Zvcm1lZCBhcnJheSBidWZmZXIuXG4gICAqL1xuICBmdW5jdGlvbiBpbnNlcnRFeGlmKGFycmF5QnVmZmVyLCBleGlmQXJyYXkpIHtcbiAgICB2YXIgYXJyYXkgPSB0b0FycmF5KG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKSk7XG4gICAgaWYgKGFycmF5WzJdICE9PSAweEZGIHx8IGFycmF5WzNdICE9PSAweEUwKSB7XG4gICAgICByZXR1cm4gYXJyYXlCdWZmZXI7XG4gICAgfVxuICAgIHZhciBhcHAwTGVuZ3RoID0gYXJyYXlbNF0gKiAyNTYgKyBhcnJheVs1XTtcbiAgICB2YXIgbmV3QXJyYXlCdWZmZXIgPSBbMHhGRiwgMHhEOF0uY29uY2F0KGV4aWZBcnJheSwgYXJyYXkuc2xpY2UoNCArIGFwcDBMZW5ndGgpKTtcbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkobmV3QXJyYXlCdWZmZXIpO1xuICB9XG5cbiAgdmFyIEFycmF5QnVmZmVyJDEgPSBXSU5ET1cuQXJyYXlCdWZmZXIsXG4gICAgRmlsZVJlYWRlciA9IFdJTkRPVy5GaWxlUmVhZGVyO1xuICB2YXIgVVJMID0gV0lORE9XLlVSTCB8fCBXSU5ET1cud2Via2l0VVJMO1xuICB2YXIgUkVHRVhQX0VYVEVOU0lPTiA9IC9cXC5cXHcrJC87XG4gIHZhciBBbm90aGVyQ29tcHJlc3NvciA9IFdJTkRPVy5Db21wcmVzc29yO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGltYWdlIGNvbXByZXNzb3IuXG4gICAqIEBjbGFzc1xuICAgKi9cbiAgdmFyIENvbXByZXNzb3IgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIFRoZSBjb25zdHJ1Y3RvciBvZiBDb21wcmVzc29yLlxuICAgICAqIEBwYXJhbSB7RmlsZXxCbG9ifSBmaWxlIC0gVGhlIHRhcmdldCBpbWFnZSBmaWxlIGZvciBjb21wcmVzc2luZy5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gVGhlIG9wdGlvbnMgZm9yIGNvbXByZXNzaW5nLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIENvbXByZXNzb3IoZmlsZSwgb3B0aW9ucykge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbXByZXNzb3IpO1xuICAgICAgdGhpcy5maWxlID0gZmlsZTtcbiAgICAgIHRoaXMuZXhpZiA9IFtdO1xuICAgICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgdGhpcy5vcHRpb25zID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIERFRkFVTFRTKSwgb3B0aW9ucyk7XG4gICAgICB0aGlzLmFib3J0ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzdWx0ID0gbnVsbDtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cbiAgICByZXR1cm4gX2NyZWF0ZUNsYXNzKENvbXByZXNzb3IsIFt7XG4gICAgICBrZXk6IFwiaW5pdFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBmaWxlID0gdGhpcy5maWxlLFxuICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGlmICghaXNCbG9iKGZpbGUpKSB7XG4gICAgICAgICAgdGhpcy5mYWlsKG5ldyBFcnJvcignVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBGaWxlIG9yIEJsb2Igb2JqZWN0LicpKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1pbWVUeXBlID0gZmlsZS50eXBlO1xuICAgICAgICBpZiAoIWlzSW1hZ2VUeXBlKG1pbWVUeXBlKSkge1xuICAgICAgICAgIHRoaXMuZmFpbChuZXcgRXJyb3IoJ1RoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGFuIGltYWdlIEZpbGUgb3IgQmxvYiBvYmplY3QuJykpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVVSTCB8fCAhRmlsZVJlYWRlcikge1xuICAgICAgICAgIHRoaXMuZmFpbChuZXcgRXJyb3IoJ1RoZSBjdXJyZW50IGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBpbWFnZSBjb21wcmVzc2lvbi4nKSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghQXJyYXlCdWZmZXIkMSkge1xuICAgICAgICAgIG9wdGlvbnMuY2hlY2tPcmllbnRhdGlvbiA9IGZhbHNlO1xuICAgICAgICAgIG9wdGlvbnMucmV0YWluRXhpZiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpc0pQRUdJbWFnZSA9IG1pbWVUeXBlID09PSAnaW1hZ2UvanBlZyc7XG4gICAgICAgIHZhciBjaGVja09yaWVudGF0aW9uID0gaXNKUEVHSW1hZ2UgJiYgb3B0aW9ucy5jaGVja09yaWVudGF0aW9uO1xuICAgICAgICB2YXIgcmV0YWluRXhpZiA9IGlzSlBFR0ltYWdlICYmIG9wdGlvbnMucmV0YWluRXhpZjtcbiAgICAgICAgaWYgKFVSTCAmJiAhY2hlY2tPcmllbnRhdGlvbiAmJiAhcmV0YWluRXhpZikge1xuICAgICAgICAgIHRoaXMubG9hZCh7XG4gICAgICAgICAgICB1cmw6IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSlcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICB0aGlzLnJlYWRlciA9IHJlYWRlcjtcbiAgICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBfcmVmLnRhcmdldDtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB7fTtcbiAgICAgICAgICAgIHZhciBvcmllbnRhdGlvbiA9IDE7XG4gICAgICAgICAgICBpZiAoY2hlY2tPcmllbnRhdGlvbikge1xuICAgICAgICAgICAgICAvLyBSZXNldCB0aGUgb3JpZW50YXRpb24gdmFsdWUgdG8gaXRzIGRlZmF1bHQgdmFsdWUgMVxuICAgICAgICAgICAgICAvLyBhcyBzb21lIGlPUyBicm93c2VycyB3aWxsIHJlbmRlciBpbWFnZSB3aXRoIGl0cyBvcmllbnRhdGlvblxuICAgICAgICAgICAgICBvcmllbnRhdGlvbiA9IHJlc2V0QW5kR2V0T3JpZW50YXRpb24ocmVzdWx0KTtcbiAgICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID4gMSkge1xuICAgICAgICAgICAgICAgIF9leHRlbmRzKGRhdGEsIHBhcnNlT3JpZW50YXRpb24ob3JpZW50YXRpb24pKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJldGFpbkV4aWYpIHtcbiAgICAgICAgICAgICAgX3RoaXMuZXhpZiA9IGdldEV4aWYocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaGVja09yaWVudGF0aW9uIHx8IHJldGFpbkV4aWYpIHtcbiAgICAgICAgICAgICAgaWYgKCFVUkxcblxuICAgICAgICAgICAgICAvLyBHZW5lcmF0ZSBhIG5ldyBVUkwgd2l0aCB0aGUgZGVmYXVsdCBvcmllbnRhdGlvbiB2YWx1ZSAxLlxuICAgICAgICAgICAgICB8fCBvcmllbnRhdGlvbiA+IDEpIHtcbiAgICAgICAgICAgICAgICBkYXRhLnVybCA9IGFycmF5QnVmZmVyVG9EYXRhVVJMKHJlc3VsdCwgbWltZVR5cGUpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGEudXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGF0YS51cmwgPSByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy5sb2FkKGRhdGEpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgcmVhZGVyLm9uYWJvcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5mYWlsKG5ldyBFcnJvcignQWJvcnRlZCB0byByZWFkIHRoZSBpbWFnZSB3aXRoIEZpbGVSZWFkZXIuJykpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5mYWlsKG5ldyBFcnJvcignRmFpbGVkIHRvIHJlYWQgdGhlIGltYWdlIHdpdGggRmlsZVJlYWRlci4nKSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMucmVhZGVyID0gbnVsbDtcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmIChjaGVja09yaWVudGF0aW9uIHx8IHJldGFpbkV4aWYpIHtcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihmaWxlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImxvYWRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkKGRhdGEpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG4gICAgICAgIHZhciBmaWxlID0gdGhpcy5maWxlLFxuICAgICAgICAgIGltYWdlID0gdGhpcy5pbWFnZTtcbiAgICAgICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChpc0NhbnZhc0F2YWlsYWJsZSgpKSB7XG4gICAgICAgICAgICBfdGhpczIuZHJhdyhfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgZGF0YSksIHt9LCB7XG4gICAgICAgICAgICAgIG5hdHVyYWxXaWR0aDogaW1hZ2UubmF0dXJhbFdpZHRoLFxuICAgICAgICAgICAgICBuYXR1cmFsSGVpZ2h0OiBpbWFnZS5uYXR1cmFsSGVpZ2h0XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzMi5kb25lKHtcbiAgICAgICAgICAgICAgbmF0dXJhbFdpZHRoOiBpbWFnZS5uYXR1cmFsV2lkdGgsXG4gICAgICAgICAgICAgIG5hdHVyYWxIZWlnaHQ6IGltYWdlLm5hdHVyYWxIZWlnaHQsXG4gICAgICAgICAgICAgIHJlc3VsdDogbnVsbFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBpbWFnZS5vbmFib3J0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMi5mYWlsKG5ldyBFcnJvcignQWJvcnRlZCB0byBsb2FkIHRoZSBpbWFnZS4nKSk7XG4gICAgICAgIH07XG4gICAgICAgIGltYWdlLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMyLmZhaWwobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCB0aGUgaW1hZ2UuJykpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIE1hdGNoIGFsbCBicm93c2VycyB0aGF0IHVzZSBXZWJLaXQgYXMgdGhlIGxheW91dCBlbmdpbmUgaW4gaU9TIGRldmljZXMsXG4gICAgICAgIC8vIHN1Y2ggYXMgU2FmYXJpIGZvciBpT1MsIENocm9tZSBmb3IgaU9TLCBhbmQgaW4tYXBwIGJyb3dzZXJzLlxuICAgICAgICBpZiAoV0lORE9XLm5hdmlnYXRvciAmJiAvKD86aVBhZHxpUGhvbmV8aVBvZCkuKj9BcHBsZVdlYktpdC9pLnRlc3QoV0lORE9XLm5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgICAgLy8gRml4IHRoZSBgVGhlIG9wZXJhdGlvbiBpcyBpbnNlY3VyZWAgZXJyb3IgKCM1NylcbiAgICAgICAgICBpbWFnZS5jcm9zc09yaWdpbiA9ICdhbm9ueW1vdXMnO1xuICAgICAgICB9XG4gICAgICAgIGltYWdlLmFsdCA9IGZpbGUubmFtZTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gZGF0YS51cmw7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImRyYXdcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBkcmF3KF9yZWYyKSB7XG4gICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuICAgICAgICB2YXIgbmF0dXJhbFdpZHRoID0gX3JlZjIubmF0dXJhbFdpZHRoLFxuICAgICAgICAgIG5hdHVyYWxIZWlnaHQgPSBfcmVmMi5uYXR1cmFsSGVpZ2h0LFxuICAgICAgICAgIF9yZWYyJHJvdGF0ZSA9IF9yZWYyLnJvdGF0ZSxcbiAgICAgICAgICByb3RhdGUgPSBfcmVmMiRyb3RhdGUgPT09IHZvaWQgMCA/IDAgOiBfcmVmMiRyb3RhdGUsXG4gICAgICAgICAgX3JlZjIkc2NhbGVYID0gX3JlZjIuc2NhbGVYLFxuICAgICAgICAgIHNjYWxlWCA9IF9yZWYyJHNjYWxlWCA9PT0gdm9pZCAwID8gMSA6IF9yZWYyJHNjYWxlWCxcbiAgICAgICAgICBfcmVmMiRzY2FsZVkgPSBfcmVmMi5zY2FsZVksXG4gICAgICAgICAgc2NhbGVZID0gX3JlZjIkc2NhbGVZID09PSB2b2lkIDAgPyAxIDogX3JlZjIkc2NhbGVZO1xuICAgICAgICB2YXIgZmlsZSA9IHRoaXMuZmlsZSxcbiAgICAgICAgICBpbWFnZSA9IHRoaXMuaW1hZ2UsXG4gICAgICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB2YXIgaXM5MERlZ3JlZXNSb3RhdGVkID0gTWF0aC5hYnMocm90YXRlKSAlIDE4MCA9PT0gOTA7XG4gICAgICAgIHZhciByZXNpemFibGUgPSAob3B0aW9ucy5yZXNpemUgPT09ICdjb250YWluJyB8fCBvcHRpb25zLnJlc2l6ZSA9PT0gJ2NvdmVyJykgJiYgaXNQb3NpdGl2ZU51bWJlcihvcHRpb25zLndpZHRoKSAmJiBpc1Bvc2l0aXZlTnVtYmVyKG9wdGlvbnMuaGVpZ2h0KTtcbiAgICAgICAgdmFyIG1heFdpZHRoID0gTWF0aC5tYXgob3B0aW9ucy5tYXhXaWR0aCwgMCkgfHwgSW5maW5pdHk7XG4gICAgICAgIHZhciBtYXhIZWlnaHQgPSBNYXRoLm1heChvcHRpb25zLm1heEhlaWdodCwgMCkgfHwgSW5maW5pdHk7XG4gICAgICAgIHZhciBtaW5XaWR0aCA9IE1hdGgubWF4KG9wdGlvbnMubWluV2lkdGgsIDApIHx8IDA7XG4gICAgICAgIHZhciBtaW5IZWlnaHQgPSBNYXRoLm1heChvcHRpb25zLm1pbkhlaWdodCwgMCkgfHwgMDtcbiAgICAgICAgdmFyIGFzcGVjdFJhdGlvID0gbmF0dXJhbFdpZHRoIC8gbmF0dXJhbEhlaWdodDtcbiAgICAgICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCxcbiAgICAgICAgICBoZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcbiAgICAgICAgaWYgKGlzOTBEZWdyZWVzUm90YXRlZCkge1xuICAgICAgICAgIHZhciBfcmVmMyA9IFttYXhIZWlnaHQsIG1heFdpZHRoXTtcbiAgICAgICAgICBtYXhXaWR0aCA9IF9yZWYzWzBdO1xuICAgICAgICAgIG1heEhlaWdodCA9IF9yZWYzWzFdO1xuICAgICAgICAgIHZhciBfcmVmNCA9IFttaW5IZWlnaHQsIG1pbldpZHRoXTtcbiAgICAgICAgICBtaW5XaWR0aCA9IF9yZWY0WzBdO1xuICAgICAgICAgIG1pbkhlaWdodCA9IF9yZWY0WzFdO1xuICAgICAgICAgIHZhciBfcmVmNSA9IFtoZWlnaHQsIHdpZHRoXTtcbiAgICAgICAgICB3aWR0aCA9IF9yZWY1WzBdO1xuICAgICAgICAgIGhlaWdodCA9IF9yZWY1WzFdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNpemFibGUpIHtcbiAgICAgICAgICBhc3BlY3RSYXRpbyA9IHdpZHRoIC8gaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHZhciBfZ2V0QWRqdXN0ZWRTaXplcyA9IGdldEFkanVzdGVkU2l6ZXMoe1xuICAgICAgICAgIGFzcGVjdFJhdGlvOiBhc3BlY3RSYXRpbyxcbiAgICAgICAgICB3aWR0aDogbWF4V2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBtYXhIZWlnaHRcbiAgICAgICAgfSwgJ2NvbnRhaW4nKTtcbiAgICAgICAgbWF4V2lkdGggPSBfZ2V0QWRqdXN0ZWRTaXplcy53aWR0aDtcbiAgICAgICAgbWF4SGVpZ2h0ID0gX2dldEFkanVzdGVkU2l6ZXMuaGVpZ2h0O1xuICAgICAgICB2YXIgX2dldEFkanVzdGVkU2l6ZXMyID0gZ2V0QWRqdXN0ZWRTaXplcyh7XG4gICAgICAgICAgYXNwZWN0UmF0aW86IGFzcGVjdFJhdGlvLFxuICAgICAgICAgIHdpZHRoOiBtaW5XaWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IG1pbkhlaWdodFxuICAgICAgICB9LCAnY292ZXInKTtcbiAgICAgICAgbWluV2lkdGggPSBfZ2V0QWRqdXN0ZWRTaXplczIud2lkdGg7XG4gICAgICAgIG1pbkhlaWdodCA9IF9nZXRBZGp1c3RlZFNpemVzMi5oZWlnaHQ7XG4gICAgICAgIGlmIChyZXNpemFibGUpIHtcbiAgICAgICAgICB2YXIgX2dldEFkanVzdGVkU2l6ZXMzID0gZ2V0QWRqdXN0ZWRTaXplcyh7XG4gICAgICAgICAgICBhc3BlY3RSYXRpbzogYXNwZWN0UmF0aW8sXG4gICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodFxuICAgICAgICAgIH0sIG9wdGlvbnMucmVzaXplKTtcbiAgICAgICAgICB3aWR0aCA9IF9nZXRBZGp1c3RlZFNpemVzMy53aWR0aDtcbiAgICAgICAgICBoZWlnaHQgPSBfZ2V0QWRqdXN0ZWRTaXplczMuaGVpZ2h0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBfZ2V0QWRqdXN0ZWRTaXplczQgPSBnZXRBZGp1c3RlZFNpemVzKHtcbiAgICAgICAgICAgIGFzcGVjdFJhdGlvOiBhc3BlY3RSYXRpbyxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdmFyIF9nZXRBZGp1c3RlZFNpemVzNCR3aSA9IF9nZXRBZGp1c3RlZFNpemVzNC53aWR0aDtcbiAgICAgICAgICB3aWR0aCA9IF9nZXRBZGp1c3RlZFNpemVzNCR3aSA9PT0gdm9pZCAwID8gbmF0dXJhbFdpZHRoIDogX2dldEFkanVzdGVkU2l6ZXM0JHdpO1xuICAgICAgICAgIHZhciBfZ2V0QWRqdXN0ZWRTaXplczQkaGUgPSBfZ2V0QWRqdXN0ZWRTaXplczQuaGVpZ2h0O1xuICAgICAgICAgIGhlaWdodCA9IF9nZXRBZGp1c3RlZFNpemVzNCRoZSA9PT0gdm9pZCAwID8gbmF0dXJhbEhlaWdodCA6IF9nZXRBZGp1c3RlZFNpemVzNCRoZTtcbiAgICAgICAgfVxuICAgICAgICB3aWR0aCA9IE1hdGguZmxvb3Iobm9ybWFsaXplRGVjaW1hbE51bWJlcihNYXRoLm1pbihNYXRoLm1heCh3aWR0aCwgbWluV2lkdGgpLCBtYXhXaWR0aCkpKTtcbiAgICAgICAgaGVpZ2h0ID0gTWF0aC5mbG9vcihub3JtYWxpemVEZWNpbWFsTnVtYmVyKE1hdGgubWluKE1hdGgubWF4KGhlaWdodCwgbWluSGVpZ2h0KSwgbWF4SGVpZ2h0KSkpO1xuICAgICAgICB2YXIgZGVzdFggPSAtd2lkdGggLyAyO1xuICAgICAgICB2YXIgZGVzdFkgPSAtaGVpZ2h0IC8gMjtcbiAgICAgICAgdmFyIGRlc3RXaWR0aCA9IHdpZHRoO1xuICAgICAgICB2YXIgZGVzdEhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IFtdO1xuICAgICAgICBpZiAocmVzaXphYmxlKSB7XG4gICAgICAgICAgdmFyIHNyY1ggPSAwO1xuICAgICAgICAgIHZhciBzcmNZID0gMDtcbiAgICAgICAgICB2YXIgc3JjV2lkdGggPSBuYXR1cmFsV2lkdGg7XG4gICAgICAgICAgdmFyIHNyY0hlaWdodCA9IG5hdHVyYWxIZWlnaHQ7XG4gICAgICAgICAgdmFyIF9nZXRBZGp1c3RlZFNpemVzNSA9IGdldEFkanVzdGVkU2l6ZXMoe1xuICAgICAgICAgICAgYXNwZWN0UmF0aW86IGFzcGVjdFJhdGlvLFxuICAgICAgICAgICAgd2lkdGg6IG5hdHVyYWxXaWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogbmF0dXJhbEhlaWdodFxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIGNvbnRhaW46ICdjb3ZlcicsXG4gICAgICAgICAgICBjb3ZlcjogJ2NvbnRhaW4nXG4gICAgICAgICAgfVtvcHRpb25zLnJlc2l6ZV0pO1xuICAgICAgICAgIHNyY1dpZHRoID0gX2dldEFkanVzdGVkU2l6ZXM1LndpZHRoO1xuICAgICAgICAgIHNyY0hlaWdodCA9IF9nZXRBZGp1c3RlZFNpemVzNS5oZWlnaHQ7XG4gICAgICAgICAgc3JjWCA9IChuYXR1cmFsV2lkdGggLSBzcmNXaWR0aCkgLyAyO1xuICAgICAgICAgIHNyY1kgPSAobmF0dXJhbEhlaWdodCAtIHNyY0hlaWdodCkgLyAyO1xuICAgICAgICAgIHBhcmFtcy5wdXNoKHNyY1gsIHNyY1ksIHNyY1dpZHRoLCBzcmNIZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIHBhcmFtcy5wdXNoKGRlc3RYLCBkZXN0WSwgZGVzdFdpZHRoLCBkZXN0SGVpZ2h0KTtcbiAgICAgICAgaWYgKGlzOTBEZWdyZWVzUm90YXRlZCkge1xuICAgICAgICAgIHZhciBfcmVmNiA9IFtoZWlnaHQsIHdpZHRoXTtcbiAgICAgICAgICB3aWR0aCA9IF9yZWY2WzBdO1xuICAgICAgICAgIGhlaWdodCA9IF9yZWY2WzFdO1xuICAgICAgICB9XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBpZiAoIWlzSW1hZ2VUeXBlKG9wdGlvbnMubWltZVR5cGUpKSB7XG4gICAgICAgICAgb3B0aW9ucy5taW1lVHlwZSA9IGZpbGUudHlwZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZmlsbFN0eWxlID0gJ3RyYW5zcGFyZW50JztcblxuICAgICAgICAvLyBDb252ZXJ0cyBQTkcgZmlsZXMgb3ZlciB0aGUgYGNvbnZlcnRTaXplYCB0byBKUEVHcy5cbiAgICAgICAgaWYgKGZpbGUuc2l6ZSA+IG9wdGlvbnMuY29udmVydFNpemUgJiYgb3B0aW9ucy5jb252ZXJ0VHlwZXMuaW5kZXhPZihvcHRpb25zLm1pbWVUeXBlKSA+PSAwKSB7XG4gICAgICAgICAgb3B0aW9ucy5taW1lVHlwZSA9ICdpbWFnZS9qcGVnJztcbiAgICAgICAgfVxuICAgICAgICB2YXIgaXNKUEVHSW1hZ2UgPSBvcHRpb25zLm1pbWVUeXBlID09PSAnaW1hZ2UvanBlZyc7XG4gICAgICAgIGlmIChpc0pQRUdJbWFnZSkge1xuICAgICAgICAgIGZpbGxTdHlsZSA9ICcjZmZmJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE92ZXJyaWRlIHRoZSBkZWZhdWx0IGZpbGwgY29sb3IgKCMwMDAsIGJsYWNrKVxuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGZpbGxTdHlsZTtcbiAgICAgICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgaWYgKG9wdGlvbnMuYmVmb3JlRHJhdykge1xuICAgICAgICAgIG9wdGlvbnMuYmVmb3JlRHJhdy5jYWxsKHRoaXMsIGNvbnRleHQsIGNhbnZhcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYWJvcnRlZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0LnNhdmUoKTtcbiAgICAgICAgY29udGV4dC50cmFuc2xhdGUod2lkdGggLyAyLCBoZWlnaHQgLyAyKTtcbiAgICAgICAgY29udGV4dC5yb3RhdGUocm90YXRlICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIGNvbnRleHQuc2NhbGUoc2NhbGVYLCBzY2FsZVkpO1xuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZS5hcHBseShjb250ZXh0LCBbaW1hZ2VdLmNvbmNhdChwYXJhbXMpKTtcbiAgICAgICAgY29udGV4dC5yZXN0b3JlKCk7XG4gICAgICAgIGlmIChvcHRpb25zLmRyZXcpIHtcbiAgICAgICAgICBvcHRpb25zLmRyZXcuY2FsbCh0aGlzLCBjb250ZXh0LCBjYW52YXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmFib3J0ZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNhbGxiYWNrID0gZnVuY3Rpb24gY2FsbGJhY2soYmxvYikge1xuICAgICAgICAgIGlmICghX3RoaXMzLmFib3J0ZWQpIHtcbiAgICAgICAgICAgIHZhciBkb25lID0gZnVuY3Rpb24gZG9uZShyZXN1bHQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5kb25lKHtcbiAgICAgICAgICAgICAgICBuYXR1cmFsV2lkdGg6IG5hdHVyYWxXaWR0aCxcbiAgICAgICAgICAgICAgICBuYXR1cmFsSGVpZ2h0OiBuYXR1cmFsSGVpZ2h0LFxuICAgICAgICAgICAgICAgIHJlc3VsdDogcmVzdWx0XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChibG9iICYmIGlzSlBFR0ltYWdlICYmIG9wdGlvbnMucmV0YWluRXhpZiAmJiBfdGhpczMuZXhpZiAmJiBfdGhpczMuZXhpZi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIHZhciBuZXh0ID0gZnVuY3Rpb24gbmV4dChhcnJheUJ1ZmZlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBkb25lKHRvQmxvYihhcnJheUJ1ZmZlclRvRGF0YVVSTChpbnNlcnRFeGlmKGFycmF5QnVmZmVyLCBfdGhpczMuZXhpZiksIG9wdGlvbnMubWltZVR5cGUpKSk7XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIGlmIChibG9iLmFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgICAgICAgYmxvYi5hcnJheUJ1ZmZlcigpLnRoZW4obmV4dCkuY2F0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgX3RoaXMzLmZhaWwobmV3IEVycm9yKCdGYWlsZWQgdG8gcmVhZCB0aGUgY29tcHJlc3NlZCBpbWFnZSB3aXRoIEJsb2IuYXJyYXlCdWZmZXIoKS4nKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICAgICAgX3RoaXMzLnJlYWRlciA9IHJlYWRlcjtcbiAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKF9yZWY3KSB7XG4gICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gX3JlZjcudGFyZ2V0O1xuICAgICAgICAgICAgICAgICAgbmV4dCh0YXJnZXQucmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJlYWRlci5vbmFib3J0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgX3RoaXMzLmZhaWwobmV3IEVycm9yKCdBYm9ydGVkIHRvIHJlYWQgdGhlIGNvbXByZXNzZWQgaW1hZ2Ugd2l0aCBGaWxlUmVhZGVyLicpKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJlYWRlci5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgX3RoaXMzLmZhaWwobmV3IEVycm9yKCdGYWlsZWQgdG8gcmVhZCB0aGUgY29tcHJlc3NlZCBpbWFnZSB3aXRoIEZpbGVSZWFkZXIuJykpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIF90aGlzMy5yZWFkZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGJsb2IpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkb25lKGJsb2IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGNhbnZhcy50b0Jsb2IpIHtcbiAgICAgICAgICBjYW52YXMudG9CbG9iKGNhbGxiYWNrLCBvcHRpb25zLm1pbWVUeXBlLCBvcHRpb25zLnF1YWxpdHkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhbGxiYWNrKHRvQmxvYihjYW52YXMudG9EYXRhVVJMKG9wdGlvbnMubWltZVR5cGUsIG9wdGlvbnMucXVhbGl0eSkpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJkb25lXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZG9uZShfcmVmOCkge1xuICAgICAgICB2YXIgbmF0dXJhbFdpZHRoID0gX3JlZjgubmF0dXJhbFdpZHRoLFxuICAgICAgICAgIG5hdHVyYWxIZWlnaHQgPSBfcmVmOC5uYXR1cmFsSGVpZ2h0LFxuICAgICAgICAgIHJlc3VsdCA9IF9yZWY4LnJlc3VsdDtcbiAgICAgICAgdmFyIGZpbGUgPSB0aGlzLmZpbGUsXG4gICAgICAgICAgaW1hZ2UgPSB0aGlzLmltYWdlLFxuICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGlmIChVUkwgJiYgaW1hZ2Uuc3JjLmluZGV4T2YoJ2Jsb2I6JykgPT09IDApIHtcbiAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKGltYWdlLnNyYyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgIC8vIFJldHVybnMgb3JpZ2luYWwgZmlsZSBpZiB0aGUgcmVzdWx0IGlzIGdyZWF0ZXIgdGhhbiBpdCBhbmQgd2l0aG91dCBzaXplIHJlbGF0ZWQgb3B0aW9uc1xuICAgICAgICAgIGlmIChvcHRpb25zLnN0cmljdCAmJiAhb3B0aW9ucy5yZXRhaW5FeGlmICYmIHJlc3VsdC5zaXplID4gZmlsZS5zaXplICYmIG9wdGlvbnMubWltZVR5cGUgPT09IGZpbGUudHlwZSAmJiAhKG9wdGlvbnMud2lkdGggPiBuYXR1cmFsV2lkdGggfHwgb3B0aW9ucy5oZWlnaHQgPiBuYXR1cmFsSGVpZ2h0IHx8IG9wdGlvbnMubWluV2lkdGggPiBuYXR1cmFsV2lkdGggfHwgb3B0aW9ucy5taW5IZWlnaHQgPiBuYXR1cmFsSGVpZ2h0IHx8IG9wdGlvbnMubWF4V2lkdGggPCBuYXR1cmFsV2lkdGggfHwgb3B0aW9ucy5tYXhIZWlnaHQgPCBuYXR1cmFsSGVpZ2h0KSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gZmlsZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGZpbGVOYW1lID0gZmlsZS5uYW1lO1xuXG4gICAgICAgICAgICAvLyBDb252ZXJ0IHRoZSBleHRlbnNpb24gdG8gbWF0Y2ggaXRzIHR5cGVcbiAgICAgICAgICAgIGlmIChmaWxlTmFtZSAmJiByZXN1bHQudHlwZSAhPT0gZmlsZS50eXBlKSB7XG4gICAgICAgICAgICAgIGZpbGVOYW1lID0gZmlsZU5hbWUucmVwbGFjZShSRUdFWFBfRVhURU5TSU9OLCBpbWFnZVR5cGVUb0V4dGVuc2lvbihyZXN1bHQudHlwZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgLy8gQ29udmVydCB0aGUgcmVzdWx0aW5nIEJsb2Igb2JqZWN0IGludG8gYSBGaWxlIG9iamVjdCBmb3IgbW9kZXJuIGJyb3dzZXJzLlxuICAgICAgICAgICAgICByZXN1bHQgPSBuZXcgRmlsZShbcmVzdWx0XSwgZmlsZU5hbWUsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiByZXN1bHQudHlwZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgIC8vIEZhbGxiYWNrIHRvIEJsb2IgaWYgdGhlIEZpbGUgY29uc3RydWN0b3IgaXMgbm90IHN1cHBvcnRlZC5cbiAgICAgICAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICByZXN1bHQubmFtZSA9IGZpbGVOYW1lO1xuXG4gICAgICAgICAgICAgIC8vIFRoZSBsYXN0IG1vZGlmaWVkIGRhdGUgaXMgbm90IGFjY3VyYXRlLCBidXQgaXQncyBiZXR0ZXIgdGhhbiBub3RoaW5nLlxuICAgICAgICAgICAgICByZXN1bHQubGFzdE1vZGlmaWVkID0gZGF0ZS5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgIHJlc3VsdC5sYXN0TW9kaWZpZWREYXRlID0gZGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gUmV0dXJucyBvcmlnaW5hbCBmaWxlIGlmIHRoZSByZXN1bHQgaXMgbnVsbCBpbiBzb21lIGNhc2VzLlxuICAgICAgICAgIHJlc3VsdCA9IGZpbGU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgIGlmIChvcHRpb25zLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBvcHRpb25zLnN1Y2Nlc3MuY2FsbCh0aGlzLCByZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImZhaWxcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBmYWlsKGVycikge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgaWYgKG9wdGlvbnMuZXJyb3IpIHtcbiAgICAgICAgICBvcHRpb25zLmVycm9yLmNhbGwodGhpcywgZXJyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiYWJvcnRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhYm9ydCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFib3J0ZWQpIHtcbiAgICAgICAgICB0aGlzLmFib3J0ZWQgPSB0cnVlO1xuICAgICAgICAgIGlmICh0aGlzLnJlYWRlcikge1xuICAgICAgICAgICAgdGhpcy5yZWFkZXIuYWJvcnQoKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmltYWdlLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICB0aGlzLmltYWdlLm9ubG9hZCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmltYWdlLm9uYWJvcnQoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mYWlsKG5ldyBFcnJvcignVGhlIGNvbXByZXNzaW9uIHByb2Nlc3MgaGFzIGJlZW4gYWJvcnRlZC4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogR2V0IHRoZSBubyBjb25mbGljdCBjb21wcmVzc29yIGNsYXNzLlxuICAgICAgICogQHJldHVybnMge0NvbXByZXNzb3J9IFRoZSBjb21wcmVzc29yIGNsYXNzLlxuICAgICAgICovXG4gICAgfV0sIFt7XG4gICAgICBrZXk6IFwibm9Db25mbGljdFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIG5vQ29uZmxpY3QoKSB7XG4gICAgICAgIHdpbmRvdy5Db21wcmVzc29yID0gQW5vdGhlckNvbXByZXNzb3I7XG4gICAgICAgIHJldHVybiBDb21wcmVzc29yO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENoYW5nZSB0aGUgZGVmYXVsdCBvcHRpb25zLlxuICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBUaGUgbmV3IGRlZmF1bHQgb3B0aW9ucy5cbiAgICAgICAqL1xuICAgIH0sIHtcbiAgICAgIGtleTogXCJzZXREZWZhdWx0c1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldERlZmF1bHRzKG9wdGlvbnMpIHtcbiAgICAgICAgX2V4dGVuZHMoREVGQVVMVFMsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1dKTtcbiAgfSgpO1xuXG4gIHJldHVybiBDb21wcmVzc29yO1xuXG59KSk7XG4iLCAiaW1wb3J0IHsgTWFya2Rvd25WaWV3LCBOb3RpY2UsIFBsYXRmb3JtLCBQbHVnaW4sIFRGaWxlLCBXb3Jrc3BhY2VMZWFmLCBub3JtYWxpemVQYXRoIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgeyBERUZBVUxUX1NFVFRJTkdTLCBDYW1lcmFFbWJlZFNldHRpbmdzLCBDYW1lcmFFbWJlZFNldHRpbmdUYWIgfSBmcm9tIFwiLi9zZXR0aW5ncy5qc1wiO1xuaW1wb3J0IHsgY29tcHJlc3NJbWFnZSwgZ2V0Q29tcHJlc3NPcHRpb25zIH0gZnJvbSBcIi4vY29tcHJlc3Nvci5qc1wiO1xuaW1wb3J0IHsgYnVpbGRGaWxlTmFtZSwgY3JlYXRlRm9sZGVyUGF0aCwgZm9sZGVyRXhpc3RzLCBmb3JtYXRCeXRlcywgZ2V0QXZhaWxhYmxlUGF0aCwgZ2V0TW9udGhseUZvbGRlciwgam9pblBhdGgsIHdpdGhFbWJlZFdpZHRoIH0gZnJvbSBcIi4vZmlsZS11dGlscy5qc1wiO1xuaW1wb3J0IHsgcGlja0ltYWdlcywgdHlwZSBQaWNrU291cmNlIH0gZnJvbSBcIi4vaW5wdXQtdXRpbHMuanNcIjtcbmltcG9ydCB7IEdhbGxlcnlNb2RhbCB9IGZyb20gXCIuL2dhbGxlcnktbW9kYWwuanNcIjtcbmltcG9ydCB7IFBpY2tlck1vZGFsIH0gZnJvbSBcIi4vcGlja2VyLW1vZGFsLmpzXCI7XG5pbXBvcnQgeyBDYW1lcmFHYWxsZXJ5VmlldywgR0FMTEVSWV9WSUVXX1RZUEUgfSBmcm9tIFwiLi9nYWxsZXJ5LXZpZXcuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FtZXJhRW1iZWRQbHVnaW4gZXh0ZW5kcyBQbHVnaW4ge1xuICBzZXR0aW5nczogQ2FtZXJhRW1iZWRTZXR0aW5ncyA9IHsgLi4uREVGQVVMVF9TRVRUSU5HUyB9O1xuICBwcml2YXRlIGxhc3RNYXJrZG93bkxlYWY6IFdvcmtzcGFjZUxlYWYgfCBudWxsID0gbnVsbDtcblxuICBhc3luYyBvbmxvYWQoKSB7XG4gICAgYXdhaXQgdGhpcy5sb2FkU2V0dGluZ3MoKTtcbiAgICB0aGlzLm5vcm1hbGl6ZVNldHRpbmdzKCk7XG4gICAgYXdhaXQgdGhpcy5zYXZlU2V0dGluZ3MoKTtcbiAgICB0aGlzLmFkZFNldHRpbmdUYWIobmV3IENhbWVyYUVtYmVkU2V0dGluZ1RhYih0aGlzLmFwcCwgdGhpcykpO1xuICAgIHRoaXMucmVnaXN0ZXJFdmVudCh0aGlzLmFwcC53b3Jrc3BhY2Uub24oXCJhY3RpdmUtbGVhZi1jaGFuZ2VcIiwgKGxlYWYpID0+IHtcbiAgICAgIGlmIChsZWFmPy52aWV3IGluc3RhbmNlb2YgTWFya2Rvd25WaWV3KSB0aGlzLmxhc3RNYXJrZG93bkxlYWYgPSBsZWFmO1xuICAgIH0pKTtcblxuICAgIGNvbnN0IGljb25jID0gdGhpcy5zZXR0aW5ncy5nYWxsZXJ5RW5hYmxlZCA/IFwiaW1hZ2VzXCIgOiBcImNhbWVyYVwiO1xuXG4gICAgdGhpcy5hZGRSaWJib25JY29uKGljb25jLCBcIkNhcHR1cmUgcGhvdG9cIiwgKCkgPT4gdm9pZCB0aGlzLmNhcHR1cmVQaG90bygpKTtcbiAgICB0aGlzLmFkZENvbW1hbmQoeyBpZDogXCJjYXB0dXJlLXBob3RvLWVtYmVkXCIsIG5hbWU6IFwiQ2FwdHVyZSBwaG90byBhbmQgZW1iZWRcIiwgaWNvbjogaWNvbmMsIGNhbGxiYWNrOiAoKSA9PiB2b2lkIHRoaXMuY2FwdHVyZVBob3RvKCkgfSk7XG4gICAgaWYgKFBsYXRmb3JtLmlzRGVza3RvcCkge1xuICAgICAgdGhpcy5yZWdpc3RlclZpZXcoR0FMTEVSWV9WSUVXX1RZUEUsIChsZWFmKSA9PiBuZXcgQ2FtZXJhR2FsbGVyeVZpZXcobGVhZiwgdGhpcykpO1xuICAgICAgdGhpcy5hZGRDb21tYW5kKHsgaWQ6IFwib3Blbi1jYW1lcmEtZ2FsbGVyeS1zaWRlYmFyXCIsIG5hbWU6IFwiT3BlbiBjYW1lcmEgZ2FsbGVyeSBpbiBzaWRlYmFyXCIsIGljb246IFwiaW1hZ2VzXCIsIGNhbGxiYWNrOiAoKSA9PiB2b2lkIHRoaXMub3BlbkdhbGxlcnlTaWRlYmFyKCkgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFRoZSBub3RlIHRvIGluc2VydCBpbnRvOiB0aGUgYWN0aXZlIG5vdGUsIGVsc2UgdGhlIGxhc3Qgbm90ZSB5b3UgdXNlZCwgZWxzZSBhbnkgb3BlbiBub3RlLiAqL1xuICBwcml2YXRlIGdldFRhcmdldE1hcmtkb3duVmlldygpOiBNYXJrZG93blZpZXcgfCBudWxsIHtcbiAgICBjb25zdCB3b3Jrc3BhY2UgPSB0aGlzLmFwcC53b3Jrc3BhY2U7XG5cbiAgICBjb25zdCBhY3RpdmUgPSB3b3Jrc3BhY2UuZ2V0QWN0aXZlVmlld09mVHlwZShNYXJrZG93blZpZXcpO1xuICAgIGlmIChhY3RpdmU/LmZpbGUpIHJldHVybiBhY3RpdmU7XG5cbiAgICBjb25zdCBtYXJrZG93bkxlYXZlcyA9IHdvcmtzcGFjZS5nZXRMZWF2ZXNPZlR5cGUoXCJtYXJrZG93blwiKTtcblxuICAgIGNvbnN0IGxhc3QgPSB0aGlzLmxhc3RNYXJrZG93bkxlYWY7XG4gICAgaWYgKGxhc3QgJiYgbWFya2Rvd25MZWF2ZXMuaW5jbHVkZXMobGFzdCkgJiYgbGFzdC52aWV3IGluc3RhbmNlb2YgTWFya2Rvd25WaWV3ICYmIGxhc3Qudmlldy5maWxlKSB7XG4gICAgICByZXR1cm4gbGFzdC52aWV3O1xuICAgIH1cblxuICAgIGNvbnN0IHJlY2VudCA9IHdvcmtzcGFjZS5nZXRNb3N0UmVjZW50TGVhZigpO1xuICAgIGlmIChyZWNlbnQ/LnZpZXcgaW5zdGFuY2VvZiBNYXJrZG93blZpZXcgJiYgcmVjZW50LnZpZXcuZmlsZSkgcmV0dXJuIHJlY2VudC52aWV3O1xuXG4gICAgZm9yIChjb25zdCBsZWFmIG9mIG1hcmtkb3duTGVhdmVzKSB7XG4gICAgICBpZiAobGVhZi52aWV3IGluc3RhbmNlb2YgTWFya2Rvd25WaWV3ICYmIGxlYWYudmlldy5maWxlKSByZXR1cm4gbGVhZi52aWV3O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKiBGb2xkZXIgb2YgdGhlIG5vdGUgcGhvdG9zIHNob3VsZCBiZSBzYXZlZCBuZXh0IHRvICh1c2VkIGJ5IFwiU2F2ZSBuZWFyIHRoZSBub3RlXCIgaW4gdGhlIGdhbGxlcnkpLiAqL1xuICBnZXRUYXJnZXROb3RlRm9sZGVyKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VGFyZ2V0TWFya2Rvd25WaWV3KCk/LmZpbGU/LnBhcmVudD8ucGF0aDtcbiAgfVxuXG4gIHByaXZhdGUgbm9ybWFsaXplU2V0dGluZ3MoKSB7XG4gICAgLy8gR2FsbGVyeSBhbmQgaW1hZ2UgcGlja2VyIGFyZSBtdXR1YWxseSBleGNsdXNpdmU7IGdhbGxlcnkgd2lucyBpZiBib3RoIGFyZSBzZXRcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5nYWxsZXJ5RW5hYmxlZCkgdGhpcy5zZXR0aW5ncy5pbWFnZVBpY2tlckVuYWJsZWQgPSBmYWxzZTtcbiAgICBpZiAoIXRoaXMuc2V0dGluZ3MuZ2FsbGVyeUVuYWJsZWQpIHRoaXMuc2V0dGluZ3Mub3BlbkdhbGxlcnlJblNpZGViYXIgPSBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgY2FwdHVyZVBob3RvKCkge1xuICAgIGlmICh0aGlzLnNldHRpbmdzLmdhbGxlcnlFbmFibGVkICYmIHRoaXMuc2V0dGluZ3Mub3BlbkdhbGxlcnlJblNpZGViYXIgJiYgUGxhdGZvcm0uaXNEZXNrdG9wKSB7XG4gICAgICB2b2lkIHRoaXMub3BlbkdhbGxlcnlTaWRlYmFyKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNldHRpbmdzLmdhbGxlcnlFbmFibGVkKSB7XG4gICAgICB0aGlzLm9wZW5HYWxsZXJ5KCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNldHRpbmdzLmltYWdlUGlja2VyRW5hYmxlZCkge1xuICAgICAgdGhpcy5vcGVuUGlja2VyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZvaWQgdGhpcy5waWNrQW5kRW1iZWQoXCJjYW1lcmFcIik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvcGVuUGlja2VyKCkge1xuICAgIC8vIENoZWNrIHVwIGZyb250IHNvIHRoZSB1c2VyIGlzbid0IGFza2VkIHRvIHBpY2sgYSBwaG90byB0aGF0IGNhbid0IGJlIGluc2VydGVkXG4gICAgaWYgKCF0aGlzLmdldFRhcmdldE1hcmtkb3duVmlldygpKSB7XG4gICAgICBuZXcgTm90aWNlKFwiUGxlYXNlIG9wZW4gYSBNYXJrZG93biBub3RlIHRvIGluc2VydCB0aGUgcGhvdG8uXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBuZXcgUGlja2VyTW9kYWwodGhpcy5hcHAsIChzb3VyY2UpID0+IHtcbiAgICAgIGlmIChzb3VyY2UgPT09IFwiY2FtZXJhXCIpIHZvaWQgdGhpcy5waWNrQW5kRW1iZWQoXCJjYW1lcmFcIik7XG4gICAgICBlbHNlIGlmIChzb3VyY2UgPT09IFwiZ2FsbGVyeVwiKSB2b2lkIHRoaXMucGlja0FuZEVtYmVkKFwiZ2FsbGVyeVwiKTtcbiAgICB9KS5vcGVuKCk7XG4gIH1cblxuICBwcml2YXRlIG9wZW5HYWxsZXJ5KCkge1xuICAgIGlmICghdGhpcy5nZXRUYXJnZXRNYXJrZG93blZpZXcoKSkge1xuICAgICAgbmV3IE5vdGljZShcIk9wZW4gYSBNYXJrZG93biBub3RlIGJlZm9yZSB1c2luZyB0aGUgY2FtZXJhIGdhbGxlcnkuXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuc2V0dGluZ3MucGhvdG9zRm9sZGVyLnRyaW0oKSkge1xuICAgICAgbmV3IE5vdGljZShcIlNldCBhIHBob3RvcyBmb2xkZXIgaW4gY2FtZXJhIGVtYmVkIHNldHRpbmdzIGJlZm9yZSB1c2luZyB0aGUgZ2FsbGVyeS5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFRoZSBub3RlIGlzIGxvb2tlZCB1cCBhZ2FpbiB3aGVuIHlvdSBwcmVzcyBcIlVzZSBpdFwiLCBzbyBpdCBzdGlsbCB3b3JrcyBpZiB5b3Ugc3dpdGNoZWQgbm90ZXNcbiAgICBuZXcgR2FsbGVyeU1vZGFsKHRoaXMuYXBwLCB0aGlzLCAoZmlsZXMsIHdpZHRoKSA9PiB7XG4gICAgICBpZiAoZmlsZXMubGVuZ3RoID4gMCkgdGhpcy5lbWJlZEdhbGxlcnlGaWxlcyhmaWxlcywgd2lkdGgpO1xuICAgIH0pLm9wZW4oKTtcbiAgfVxuXG4gIHByaXZhdGUgZW1iZWRWYXVsdEZpbGVzKGZpbGVzOiBURmlsZVtdLCB2aWV3OiBNYXJrZG93blZpZXcsIHdpZHRoPzogbnVtYmVyKSB7XG4gICAgY29uc3QgYWN0aXZlRmlsZSA9IHZpZXcuZmlsZTtcbiAgICBpZiAoIWFjdGl2ZUZpbGUpIHJldHVybjtcbiAgICBpZiAodmlldy5nZXRNb2RlKCkgIT09IFwic291cmNlXCIpIHtcbiAgICAgIG5ldyBOb3RpY2UoXCJTd2l0Y2ggdGhlIG5vdGUgdG8gZWRpdGluZyBtb2RlIHRvIGluc2VydCBwaG90b3MuXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBsaW5rcyA9IGZpbGVzLm1hcCgoZmlsZSkgPT4gYCEke3dpdGhFbWJlZFdpZHRoKHRoaXMuYXBwLmZpbGVNYW5hZ2VyLmdlbmVyYXRlTWFya2Rvd25MaW5rKGZpbGUsIGFjdGl2ZUZpbGUucGF0aCksIHdpZHRoKX1gKTtcbiAgICB2aWV3LmVkaXRvci5yZXBsYWNlU2VsZWN0aW9uKGxpbmtzLmpvaW4oXCJcXG5cIikpO1xuICB9XG5cbiAgZW1iZWRHYWxsZXJ5RmlsZXMoZmlsZXM6IFRGaWxlW10sIHdpZHRoPzogbnVtYmVyKSB7XG4gICAgY29uc3QgdmlldyA9IHRoaXMuZ2V0VGFyZ2V0TWFya2Rvd25WaWV3KCk7XG4gICAgaWYgKCF2aWV3KSB7XG4gICAgICBuZXcgTm90aWNlKFwiT3BlbiBhIE1hcmtkb3duIG5vdGUgdG8gaW5zZXJ0IHRoZSBzZWxlY3RlZCBwaG90b3MuXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmVtYmVkVmF1bHRGaWxlcyhmaWxlcywgdmlldywgd2lkdGgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBwaWNrQW5kRW1iZWQoc291cmNlOiBQaWNrU291cmNlKSB7XG4gICAgY29uc3QgdmlldyA9IHRoaXMuZ2V0VGFyZ2V0TWFya2Rvd25WaWV3KCk7XG4gICAgaWYgKCF2aWV3Py5maWxlKSB7XG4gICAgICBuZXcgTm90aWNlKFwiUGxlYXNlIG9wZW4gYSBNYXJrZG93biBub3RlIHRvIGluc2VydCB0aGUgcGhvdG8uXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBmaWxlcyA9IGF3YWl0IHBpY2tJbWFnZXMoc291cmNlLCB0aGlzLmFwcC53b3Jrc3BhY2UuY29udGFpbmVyRWwpO1xuICAgIGlmIChmaWxlcy5sZW5ndGggPiAwKSBhd2FpdCB0aGlzLnNhdmVBbmRFbWJlZChmaWxlcywgdmlldyk7XG4gIH1cblxuICBhc3luYyBvcGVuR2FsbGVyeVNpZGViYXIoKSB7XG4gICAgY29uc3QgbGVhZiA9IGF3YWl0IHRoaXMuYXBwLndvcmtzcGFjZS5lbnN1cmVTaWRlTGVhZihHQUxMRVJZX1ZJRVdfVFlQRSwgXCJyaWdodFwiLCB7IGFjdGl2ZTogdHJ1ZSwgcmV2ZWFsOiB0cnVlIH0pO1xuICAgIGF3YWl0IHRoaXMuYXBwLndvcmtzcGFjZS5yZXZlYWxMZWFmKGxlYWYpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBzYXZlQW5kRW1iZWQoZmlsZXM6IEZpbGVbXSwgdmlldzogTWFya2Rvd25WaWV3KSB7XG4gICAgY29uc3QgYWN0aXZlRmlsZSA9IHZpZXcuZmlsZTtcbiAgICBpZiAoIWFjdGl2ZUZpbGUpIHJldHVybjtcbiAgICBjb25zdCBzYXZlZCA9IGF3YWl0IHRoaXMuc2F2ZVBob3RvcyhmaWxlcywgYWN0aXZlRmlsZS5wYXJlbnQ/LnBhdGgpO1xuICAgIGlmIChzYXZlZC5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICBjb25zdCBsaW5rcyA9IHNhdmVkLm1hcCgoZmlsZSkgPT4gYCEke3RoaXMuYXBwLmZpbGVNYW5hZ2VyLmdlbmVyYXRlTWFya2Rvd25MaW5rKGZpbGUsIGFjdGl2ZUZpbGUucGF0aCl9YCk7XG4gICAgdmlldy5lZGl0b3IucmVwbGFjZVNlbGVjdGlvbihsaW5rcy5qb2luKFwiXFxuXCIpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgc2luZ2xlIHBsYWNlIHdoZXJlIHBob3RvcyBhcmUgd3JpdHRlbiB0byB0aGUgdmF1bHQuIFVzZWQgYnkgZGlyZWN0IGNhbWVyYVxuICAgKiBjYXB0dXJlLCB0aGUgaW1hZ2UgcGlja2VyIGFuZCBnYWxsZXJ5IHVwbG9hZHMsIHNvIGZvbGRlciwgbW9udGggb3JnYW5pc2F0aW9uLFxuICAgKiBjb21wcmVzc2lvbiBhbmQgZmlsZSBuYW1pbmcgYmVoYXZlIHRoZSBzYW1lIGV2ZXJ5d2hlcmUuXG4gICAqXG4gICAqIEBwYXJhbSBub3RlRm9sZGVyUGF0aCBmb2xkZXIgb2YgdGhlIGN1cnJlbnQgbm90ZSAob25seSB1c2VkIGJ5IFwic2F2ZSBuZWFyIHRoZSBub3RlXCIpXG4gICAqL1xuICBhc3luYyBzYXZlUGhvdG9zKGZpbGVzOiBGaWxlW10sIG5vdGVGb2xkZXJQYXRoPzogc3RyaW5nKTogUHJvbWlzZTxURmlsZVtdPiB7XG4gICAgY29uc3QgZm9sZGVyID0gYXdhaXQgdGhpcy5lbnN1cmVUYXJnZXRGb2xkZXIobm90ZUZvbGRlclBhdGgpO1xuICAgIGlmIChmb2xkZXIgPT09IG51bGwpIHJldHVybiBbXTtcblxuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLnNldHRpbmdzLmNvbXByZXNzSW1hZ2VzID8gZ2V0Q29tcHJlc3NPcHRpb25zKHRoaXMuc2V0dGluZ3MpIDogbnVsbDtcbiAgICBjb25zdCBwcm9ncmVzcyA9IG9wdGlvbnMgJiYgZmlsZXMubGVuZ3RoID4gMSA/IG5ldyBOb3RpY2UoYFByb2Nlc3NpbmcgJHtmaWxlcy5sZW5ndGh9IHBob3Rvc1x1MjAyNmAsIDApIDogbnVsbDtcblxuICAgIGNvbnN0IHNhdmVkOiBURmlsZVtdID0gW107XG4gICAgbGV0IGNvbXByZXNzRmFpbHVyZXMgPSAwO1xuICAgIGxldCBieXRlc0JlZm9yZSA9IDA7XG4gICAgbGV0IGJ5dGVzQWZ0ZXIgPSAwO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xuICAgICAgICBsZXQgYmxvYjogQmxvYiA9IGZpbGU7XG4gICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGJsb2IgPSBhd2FpdCBjb21wcmVzc0ltYWdlKGZpbGUsIG9wdGlvbnMpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAvLyBPbmUgYmFkIGZpbGUgbXVzdCBub3QgYWJvcnQgdGhlIHdob2xlIGJhdGNoOiBrZWVwIHRoZSBvcmlnaW5hbC5cbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDYW1lcmEgRW1iZWQ6IGNvbXByZXNzaW9uIGZhaWxlZCBmb3JcIiwgZmlsZS5uYW1lLCBlcnJvcik7XG4gICAgICAgICAgICBjb21wcmVzc0ZhaWx1cmVzKys7XG4gICAgICAgICAgICBibG9iID0gZmlsZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHBhdGggPSBnZXRBdmFpbGFibGVQYXRoKHRoaXMuYXBwLnZhdWx0LCBqb2luUGF0aChmb2xkZXIsIGJ1aWxkRmlsZU5hbWUoZmlsZSwgYmxvYikpKTtcbiAgICAgICAgICBzYXZlZC5wdXNoKGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNyZWF0ZUJpbmFyeShwYXRoLCBhd2FpdCBibG9iLmFycmF5QnVmZmVyKCkpKTtcbiAgICAgICAgICBieXRlc0JlZm9yZSArPSBmaWxlLnNpemU7XG4gICAgICAgICAgYnl0ZXNBZnRlciArPSBibG9iLnNpemU7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkNhbWVyYSBFbWJlZDogZmFpbGVkIHRvIHNhdmVcIiwgZmlsZS5uYW1lLCBlcnJvcik7XG4gICAgICAgICAgbmV3IE5vdGljZShgQ291bGQgbm90IHNhdmUgJHtmaWxlLm5hbWV9LmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHByb2dyZXNzPy5oaWRlKCk7XG4gICAgfVxuXG4gICAgaWYgKGNvbXByZXNzRmFpbHVyZXMgPiAwKSB7XG4gICAgICBuZXcgTm90aWNlKGBDb3VsZCBub3QgY29tcHJlc3MgJHtjb21wcmVzc0ZhaWx1cmVzfSBwaG90byR7Y29tcHJlc3NGYWlsdXJlcyA9PT0gMSA/IFwiXCIgOiBcInNcIn07IHNhdmVkIHRoZSBvcmlnaW5hbCR7Y29tcHJlc3NGYWlsdXJlcyA9PT0gMSA/IFwiXCIgOiBcInNcIn0gaW5zdGVhZC5gKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMgJiYgc2F2ZWQubGVuZ3RoID4gMCAmJiBieXRlc0FmdGVyIDwgYnl0ZXNCZWZvcmUpIHtcbiAgICAgIG5ldyBOb3RpY2UoYENvbXByZXNzZWQgJHtmb3JtYXRCeXRlcyhieXRlc0JlZm9yZSl9IFx1MjE5MiAke2Zvcm1hdEJ5dGVzKGJ5dGVzQWZ0ZXIpfWApO1xuICAgIH1cbiAgICByZXR1cm4gc2F2ZWQ7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGVuc3VyZVRhcmdldEZvbGRlcihub3RlRm9sZGVyUGF0aDogc3RyaW5nIHwgdW5kZWZpbmVkKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gICAgY29uc3QgcmF3ID0gdGhpcy5zZXR0aW5ncy5waG90b3NGb2xkZXIudHJpbSgpO1xuICAgIGNvbnN0IGJhc2UgPSB0aGlzLnNldHRpbmdzLnNhdmVOZWFyVGhlTm90ZVxuICAgICAgPyAocmF3ID8gKG5vdGVGb2xkZXJQYXRoID8gYCR7bm90ZUZvbGRlclBhdGh9LyR7cmF3fWAgOiByYXcpIDogKG5vdGVGb2xkZXJQYXRoID8/IFwiXCIpKVxuICAgICAgOiByYXc7XG4gICAgY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZVBhdGgodGhpcy5zZXR0aW5ncy5vcmdhbml6ZVBob3Rvc0J5TW9udGggPyBnZXRNb250aGx5Rm9sZGVyKGJhc2UpIDogYmFzZSk7XG4gICAgaWYgKG5vcm1hbGl6ZWQgPT09IFwiXCIgfHwgbm9ybWFsaXplZCA9PT0gXCIvXCIpIHJldHVybiBcIlwiO1xuICAgIGlmIChmb2xkZXJFeGlzdHModGhpcy5hcHAudmF1bHQsIG5vcm1hbGl6ZWQpKSByZXR1cm4gbm9ybWFsaXplZDtcbiAgICBpZiAoIXRoaXMuc2V0dGluZ3MuY3JlYXRlRm9sZGVySWZNaXNzaW5nKSB7XG4gICAgICBuZXcgTm90aWNlKGBGb2xkZXIgbm90IGZvdW5kOiAke25vcm1hbGl6ZWR9YCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGNyZWF0ZUZvbGRlclBhdGgodGhpcy5hcHAudmF1bHQsIG5vcm1hbGl6ZWQpO1xuICAgICAgcmV0dXJuIG5vcm1hbGl6ZWQ7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJDYW1lcmEgRW1iZWQ6IGZhaWxlZCB0byBjcmVhdGUgZm9sZGVyXCIsIGVycm9yKTtcbiAgICAgIG5ldyBOb3RpY2UoYEZhaWxlZCB0byBjcmVhdGUgZm9sZGVyOiAke25vcm1hbGl6ZWR9YCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBhc3luYyBsb2FkU2V0dGluZ3MoKSB7XG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfU0VUVElOR1MsIGF3YWl0IHRoaXMubG9hZERhdGEoKSBhcyBQYXJ0aWFsPENhbWVyYUVtYmVkU2V0dGluZ3M+KTtcbiAgfVxuXG4gIGFzeW5jIHNhdmVTZXR0aW5ncygpIHtcbiAgICBhd2FpdCB0aGlzLnNhdmVEYXRhKHRoaXMuc2V0dGluZ3MpO1xuICB9XG59IiwgImltcG9ydCB7IEFwcCwgUGxhdGZvcm0sIFBsdWdpblNldHRpbmdUYWIsIHR5cGUgU2V0dGluZ0RlZmluaXRpb25JdGVtIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgdHlwZSBDYW1lcmFFbWJlZFBsdWdpbiBmcm9tIFwiLi9tYWluLmpzXCI7XG5cbmV4cG9ydCB0eXBlIENvbXByZXNzaW9uTW9kZSA9IFwibWluaW1hbFwiIHwgXCJleHBlcnRcIjtcbmV4cG9ydCB0eXBlIENvbXByZXNzaW9uUHJlc2V0ID0gXCJsaWdodFwiIHwgXCJiYWxhbmNlZFwiIHwgXCJzdHJvbmdcIjtcbmV4cG9ydCB0eXBlIENvbXByZXNzRm9ybWF0ID0gXCJhdXRvXCIgfCBcIm9yaWdpbmFsXCIgfCBcImpwZWdcIiB8IFwid2VicFwiO1xuZXhwb3J0IHR5cGUgR2FsbGVyeVNvcnQgPSBcIm5ld2VzdFwiIHwgXCJvbGRlc3RcIiB8IFwibmFtZVwiIHwgXCJzaXplXCI7XG5leHBvcnQgdHlwZSBHYWxsZXJ5U2NvcGUgPSBcImZvbGRlclwiIHwgXCJ2YXVsdFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbWVyYUVtYmVkU2V0dGluZ3Mge1xuICBwaG90b3NGb2xkZXI6IHN0cmluZztcbiAgY3JlYXRlRm9sZGVySWZNaXNzaW5nOiBib29sZWFuO1xuICBzYXZlTmVhclRoZU5vdGU6IGJvb2xlYW47XG4gIG9yZ2FuaXplUGhvdG9zQnlNb250aDogYm9vbGVhbjtcblxuICBnYWxsZXJ5RW5hYmxlZDogYm9vbGVhbjtcbiAgb3BlbkdhbGxlcnlJblNpZGViYXI6IGJvb2xlYW47XG4gIGltYWdlUGlja2VyRW5hYmxlZDogYm9vbGVhbjtcblxuICBjb21wcmVzc0ltYWdlczogYm9vbGVhbjtcbiAgY29tcHJlc3Npb25Nb2RlOiBDb21wcmVzc2lvbk1vZGU7XG4gIGNvbXByZXNzaW9uUHJlc2V0OiBDb21wcmVzc2lvblByZXNldDtcbiAgLy8gRXhwZXJ0IG1vZGVcbiAgY29tcHJlc3NRdWFsaXR5OiBudW1iZXI7XG4gIGNvbXByZXNzTWF4RGltZW5zaW9uOiBudW1iZXI7IC8vIGxvbmdlc3Qgc2lkZSBpbiBweCwgMCA9IGtlZXAgb3JpZ2luYWwgc2l6ZVxuICBjb21wcmVzc0Zvcm1hdDogQ29tcHJlc3NGb3JtYXQ7XG4gIGNvbXByZXNzS2VlcEV4aWY6IGJvb2xlYW47XG4gIGNvbXByZXNzTWluU2l6ZUtCOiBudW1iZXI7IC8vIHNraXAgZmlsZXMgc21hbGxlciB0aGFuIHRoaXNcblxuICBnYWxsZXJ5U29ydDogR2FsbGVyeVNvcnQ7XG4gIGdhbGxlcnlTY29wZTogR2FsbGVyeVNjb3BlO1xuICBnYWxsZXJ5R3JvdXBCeU1vbnRoOiBib29sZWFuO1xuICBnYWxsZXJ5VGh1bWJTaXplOiBudW1iZXI7IC8vIHB4LCAwID0gYXV0b21hdGljXG59XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1NFVFRJTkdTOiBDYW1lcmFFbWJlZFNldHRpbmdzID0ge1xuICBwaG90b3NGb2xkZXI6IFwicGhvdG9zXCIsXG4gIGNyZWF0ZUZvbGRlcklmTWlzc2luZzogdHJ1ZSxcbiAgc2F2ZU5lYXJUaGVOb3RlOiBmYWxzZSxcbiAgb3JnYW5pemVQaG90b3NCeU1vbnRoOiBmYWxzZSxcblxuICBnYWxsZXJ5RW5hYmxlZDogZmFsc2UsXG4gIG9wZW5HYWxsZXJ5SW5TaWRlYmFyOiBmYWxzZSxcbiAgaW1hZ2VQaWNrZXJFbmFibGVkOiBmYWxzZSxcblxuICBjb21wcmVzc0ltYWdlczogZmFsc2UsXG4gIGNvbXByZXNzaW9uTW9kZTogXCJtaW5pbWFsXCIsXG4gIGNvbXByZXNzaW9uUHJlc2V0OiBcImJhbGFuY2VkXCIsXG4gIGNvbXByZXNzUXVhbGl0eTogMC44LFxuICBjb21wcmVzc01heERpbWVuc2lvbjogMjA0OCxcbiAgY29tcHJlc3NGb3JtYXQ6IFwiYXV0b1wiLFxuICBjb21wcmVzc0tlZXBFeGlmOiBmYWxzZSxcbiAgY29tcHJlc3NNaW5TaXplS0I6IDAsXG5cbiAgZ2FsbGVyeVNvcnQ6IFwibmV3ZXN0XCIsXG4gIGdhbGxlcnlTY29wZTogXCJmb2xkZXJcIixcbiAgZ2FsbGVyeUdyb3VwQnlNb250aDogdHJ1ZSxcbiAgZ2FsbGVyeVRodW1iU2l6ZTogMCxcbn07XG5cbmV4cG9ydCBjbGFzcyBDYW1lcmFFbWJlZFNldHRpbmdUYWIgZXh0ZW5kcyBQbHVnaW5TZXR0aW5nVGFiIHtcbiAgcGx1Z2luOiBDYW1lcmFFbWJlZFBsdWdpbjtcblxuICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBDYW1lcmFFbWJlZFBsdWdpbikge1xuICAgIHN1cGVyKGFwcCwgcGx1Z2luKTtcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgfVxuXG4gIC8qKiBPYnNpZGlhbiAxLjEzKyByZW5kZXJzIGZyb20gdGhpcy4gKi9cbiAgZ2V0U2V0dGluZ0RlZmluaXRpb25zKCk6IFNldHRpbmdEZWZpbml0aW9uSXRlbVtdIHtcbiAgICBjb25zdCBzID0gKCkgPT4gdGhpcy5wbHVnaW4uc2V0dGluZ3M7XG4gICAgY29uc3QgZXhwZXJ0ID0gKCkgPT4gcygpLmNvbXByZXNzSW1hZ2VzICYmIHMoKS5jb21wcmVzc2lvbk1vZGUgPT09IFwiZXhwZXJ0XCI7XG4gICAgY29uc3QgbWluaW1hbCA9ICgpID0+IHMoKS5jb21wcmVzc0ltYWdlcyAmJiBzKCkuY29tcHJlc3Npb25Nb2RlID09PSBcIm1pbmltYWxcIjtcblxuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiVGhpcyBwbHVnaW4gaXMgcHJpbWFyaWx5IGRlc2lnbmVkIGZvciBBbmRyb2lkLiBTb21lIGZlYXR1cmVzIG1heSBiZSBsaW1pdGVkIG9uIG90aGVyIHBsYXRmb3Jtcy5cIixcbiAgICAgIH0sXG5cbiAgICAgIHtcbiAgICAgICAgdHlwZTogXCJncm91cFwiLFxuICAgICAgICBoZWFkaW5nOiBcIkNob29zZSBwaG90b1wiLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiRW5hYmxlIGltYWdlIHBpY2tlciAob3B0aW9uYWwpXCIsXG4gICAgICAgICAgICBkZXNjOiBcIlNob3cgYSBwcm9tcHQgdG8gY2hvb3NlIGJldHdlZW4gdGFraW5nIGEgbmV3IHBob3RvIG9yIHBpY2tpbmcgYW4gZXhpc3Rpbmcgb25lIGZyb20gdGhlIGdhbGxlcnkuXCIsXG4gICAgICAgICAgICBjb250cm9sOiB7XG4gICAgICAgICAgICAgIHR5cGU6IFwidG9nZ2xlXCIsXG4gICAgICAgICAgICAgIGtleTogXCJpbWFnZVBpY2tlckVuYWJsZWRcIixcbiAgICAgICAgICAgICAgLy8gTG9ja2VkIHdoaWxlIGdhbGxlcnkgaXMgb24sIHVubGVzcyB0aGlzIG9uZSBpcyBhbHJlYWR5IG9uIChzbyBpdCBjYW4gYmUgdHVybmVkIG9mZilcbiAgICAgICAgICAgICAgZGlzYWJsZWQ6ICgpID0+IHMoKS5nYWxsZXJ5RW5hYmxlZCAmJiAhcygpLmltYWdlUGlja2VyRW5hYmxlZCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIkVuYWJsZSBnYWxsZXJ5IChvcHRpb25hbClcIixcbiAgICAgICAgICAgIGRlc2M6IFwiVXNlIHRoZSBnYWxsZXJ5IGluc3RlYWQgb2YgdGFraW5nIGEgcGhvdG8gZGlyZWN0bHkuIFRoZSBnYWxsZXJ5IHNob3dzIHRoZSBpbWFnZXMgaW4geW91ciBwaG90b3MgZm9sZGVyLlwiLFxuICAgICAgICAgICAgY29udHJvbDoge1xuICAgICAgICAgICAgICB0eXBlOiBcInRvZ2dsZVwiLFxuICAgICAgICAgICAgICBrZXk6IFwiZ2FsbGVyeUVuYWJsZWRcIixcbiAgICAgICAgICAgICAgLy8gTG9ja2VkIHdoaWxlIGltYWdlIHBpY2tlciBpcyBvbiwgdW5sZXNzIHRoaXMgb25lIGlzIGFscmVhZHkgb25cbiAgICAgICAgICAgICAgZGlzYWJsZWQ6ICgpID0+IHMoKS5pbWFnZVBpY2tlckVuYWJsZWQgJiYgIXMoKS5nYWxsZXJ5RW5hYmxlZCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIk9wZW4gZ2FsbGVyeSBpbiBzaWRlYmFyXCIsXG4gICAgICAgICAgICBkZXNjOiBcIk9wZW4gdGhlIGdhbGxlcnkgaW4gdGhlIHJpZ2h0IHNpZGViYXIgd2hlbiB1c2luZyB0aGUgY2FtZXJhIGJ1dHRvbi5cIixcbiAgICAgICAgICAgIHZpc2libGU6ICgpID0+IHMoKS5nYWxsZXJ5RW5hYmxlZCAmJiAhUGxhdGZvcm0uaXNNb2JpbGUsXG4gICAgICAgICAgICBjb250cm9sOiB7XG4gICAgICAgICAgICAgIHR5cGU6IFwidG9nZ2xlXCIsXG4gICAgICAgICAgICAgIGtleTogXCJvcGVuR2FsbGVyeUluU2lkZWJhclwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcblxuICAgICAge1xuICAgICAgICB0eXBlOiBcImdyb3VwXCIsXG4gICAgICAgIGhlYWRpbmc6IFwiR2FsbGVyeVwiLFxuICAgICAgICB2aXNpYmxlOiAoKSA9PiBzKCkuZ2FsbGVyeUVuYWJsZWQsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJEZWZhdWx0IHNvcnRcIixcbiAgICAgICAgICAgIGRlc2M6IFwiSG93IHBob3RvcyBhcmUgb3JkZXJlZCB3aGVuIHRoZSBnYWxsZXJ5IG9wZW5zLiBZb3UgY2FuIGFsc28gY2hhbmdlIHRoaXMgaW5zaWRlIHRoZSBnYWxsZXJ5LlwiLFxuICAgICAgICAgICAgY29udHJvbDoge1xuICAgICAgICAgICAgICB0eXBlOiBcImRyb3Bkb3duXCIsXG4gICAgICAgICAgICAgIGtleTogXCJnYWxsZXJ5U29ydFwiLFxuICAgICAgICAgICAgICBvcHRpb25zOiB7IG5ld2VzdDogXCJOZXdlc3QgZmlyc3RcIiwgb2xkZXN0OiBcIk9sZGVzdCBmaXJzdFwiLCBuYW1lOiBcIk5hbWVcIiwgc2l6ZTogXCJMYXJnZXN0IGZpcnN0XCIgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIlNob3dcIixcbiAgICAgICAgICAgIGRlc2M6IFwiUGhvdG9zIGZvbGRlcjogb25seSB0aGUgaW1hZ2VzIGluIHlvdXIgcGhvdG9zIGZvbGRlciBhcmUgcmVhZC4gV2hvbGUgdmF1bHQ6IGxpc3RzIGV2ZXJ5IGltYWdlIGluIHRoZSB2YXVsdCwgd2hpY2ggaXMgbmVlZGVkIHRvIHNlZSBwaG90b3Mgc2F2ZWQgbmV4dCB0byBub3Rlcy5cIixcbiAgICAgICAgICAgIGNvbnRyb2w6IHtcbiAgICAgICAgICAgICAgdHlwZTogXCJkcm9wZG93blwiLFxuICAgICAgICAgICAgICBrZXk6IFwiZ2FsbGVyeVNjb3BlXCIsXG4gICAgICAgICAgICAgIG9wdGlvbnM6IHsgZm9sZGVyOiBcIlBob3RvcyBmb2xkZXIgb25seVwiLCB2YXVsdDogXCJXaG9sZSB2YXVsdFwiIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJHcm91cCBieSBtb250aFwiLFxuICAgICAgICAgICAgZGVzYzogXCJBZGQgbW9udGggaGVhZGluZ3MgKG9ubHkgd2hlbiBzb3J0ZWQgYnkgZGF0ZSkuXCIsXG4gICAgICAgICAgICBjb250cm9sOiB7XG4gICAgICAgICAgICAgIHR5cGU6IFwidG9nZ2xlXCIsXG4gICAgICAgICAgICAgIGtleTogXCJnYWxsZXJ5R3JvdXBCeU1vbnRoXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuXG4gICAgICB7XG4gICAgICAgIHR5cGU6IFwiZ3JvdXBcIixcbiAgICAgICAgaGVhZGluZzogXCJQaG90byBzdG9yYWdlXCIsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJQaG90b3MgZm9sZGVyXCIsXG4gICAgICAgICAgICBkZXNjOiBcIkZvbGRlciB1c2VkIHRvIHN0b3JlIHBob3Rvcy5cIixcbiAgICAgICAgICAgIGNvbnRyb2w6IHtcbiAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIGtleTogXCJwaG90b3NGb2xkZXJcIixcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwicGhvdG9zXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJPcmdhbml6ZSBwaG90b3MgYnkgbW9udGhcIixcbiAgICAgICAgICAgIGRlc2M6IFwiU2F2ZSBwaG90b3MgaW4geWVhciBhbmQgbW9udGggZm9sZGVycy5cIixcbiAgICAgICAgICAgIGNvbnRyb2w6IHtcbiAgICAgICAgICAgICAgdHlwZTogXCJ0b2dnbGVcIixcbiAgICAgICAgICAgICAga2V5OiBcIm9yZ2FuaXplUGhvdG9zQnlNb250aFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiQ3JlYXRlIGZvbGRlciBpZiBtaXNzaW5nXCIsXG4gICAgICAgICAgICBkZXNjOiBcIkNyZWF0ZSB0aGUgcGhvdG9zIGZvbGRlciBhdXRvbWF0aWNhbGx5IHdoZW4gbmVlZGVkLlwiLFxuICAgICAgICAgICAgY29udHJvbDoge1xuICAgICAgICAgICAgICB0eXBlOiBcInRvZ2dsZVwiLFxuICAgICAgICAgICAgICBrZXk6IFwiY3JlYXRlRm9sZGVySWZNaXNzaW5nXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJTYXZlIG5lYXIgdGhlIG5vdGVcIixcbiAgICAgICAgICAgIGRlc2M6IFwiU2F2ZSBjYW1lcmEgcGhvdG9zIGJlc2lkZSB0aGUgY3VycmVudCBub3RlLiBJbiB0aGUgZ2FsbGVyeSB0aGV5IG9ubHkgc2hvdyB1cCB3aGVuIFxcXCJTaG93XFxcIiBpcyBzZXQgdG8gdGhlIHdob2xlIHZhdWx0LlwiLFxuICAgICAgICAgICAgY29udHJvbDoge1xuICAgICAgICAgICAgICB0eXBlOiBcInRvZ2dsZVwiLFxuICAgICAgICAgICAgICBrZXk6IFwic2F2ZU5lYXJUaGVOb3RlXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuXG4gICAgICB7XG4gICAgICAgIHR5cGU6IFwiZ3JvdXBcIixcbiAgICAgICAgaGVhZGluZzogXCJJbWFnZSBjb21wcmVzc2lvblwiLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiQ29tcHJlc3MgaW1hZ2VzXCIsXG4gICAgICAgICAgICBkZXNjOiBcIlJlZHVjZSBwaG90byBmaWxlIHNpemVzIGJlZm9yZSBzYXZpbmcuIEFwcGxpZXMgdG8gY2FtZXJhIHBob3RvcywgcGlja2VkIHBob3RvcyBhbmQgZ2FsbGVyeSB1cGxvYWRzLlwiLFxuICAgICAgICAgICAgY29udHJvbDoge1xuICAgICAgICAgICAgICB0eXBlOiBcInRvZ2dsZVwiLFxuICAgICAgICAgICAgICBrZXk6IFwiY29tcHJlc3NJbWFnZXNcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIkNvbXByZXNzaW9uIG1vZGVcIixcbiAgICAgICAgICAgIGRlc2M6IFwiTWluaW1hbDogcGljayBhIHByZXNldC4gRXhwZXJ0OiBjb250cm9sIHNpemUsIHF1YWxpdHksIGZvcm1hdCBhbmQgbWV0YWRhdGEgeW91cnNlbGYuXCIsXG4gICAgICAgICAgICB2aXNpYmxlOiAoKSA9PiBzKCkuY29tcHJlc3NJbWFnZXMsXG4gICAgICAgICAgICBjb250cm9sOiB7XG4gICAgICAgICAgICAgIHR5cGU6IFwiZHJvcGRvd25cIixcbiAgICAgICAgICAgICAga2V5OiBcImNvbXByZXNzaW9uTW9kZVwiLFxuICAgICAgICAgICAgICBvcHRpb25zOiB7IG1pbmltYWw6IFwiTWluaW1hbFwiLCBleHBlcnQ6IFwiRXhwZXJ0XCIgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcblxuICAgICAgICAgIC8vIC0tLS0gTWluaW1hbCAtLS0tXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJDb21wcmVzc2lvbiBsZXZlbFwiLFxuICAgICAgICAgICAgZGVzYzogXCJMaWdodDogODUlIHF1YWxpdHksIHVwIHRvIDMwMDAgcHguIEJhbGFuY2VkOiA3NSUsIHVwIHRvIDIwNDggcHguIFN0cm9uZzogNjAlLCB1cCB0byAxNjAwIHB4IChzbWFsbGVzdCBmaWxlcykuXCIsXG4gICAgICAgICAgICB2aXNpYmxlOiBtaW5pbWFsLFxuICAgICAgICAgICAgY29udHJvbDoge1xuICAgICAgICAgICAgICB0eXBlOiBcImRyb3Bkb3duXCIsXG4gICAgICAgICAgICAgIGtleTogXCJjb21wcmVzc2lvblByZXNldFwiLFxuICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgbGlnaHQ6IFwiTGlnaHRcIixcbiAgICAgICAgICAgICAgICBiYWxhbmNlZDogXCJCYWxhbmNlZCAocmVjb21tZW5kZWQpXCIsXG4gICAgICAgICAgICAgICAgc3Ryb25nOiBcIlN0cm9uZ1wiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgLy8gLS0tLSBFeHBlcnQgLS0tLVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiUXVhbGl0eVwiLFxuICAgICAgICAgICAgZGVzYzogXCJMb3dlciB2YWx1ZXMgY3JlYXRlIHNtYWxsZXIgZmlsZXMgd2l0aCBsb3dlciBpbWFnZSBxdWFsaXR5LiBJZ25vcmVkIGZvciBsb3NzbGVzcyBQTkcgb3V0cHV0LlwiLFxuICAgICAgICAgICAgdmlzaWJsZTogZXhwZXJ0LFxuICAgICAgICAgICAgY29udHJvbDoge1xuICAgICAgICAgICAgICB0eXBlOiBcInNsaWRlclwiLFxuICAgICAgICAgICAgICBrZXk6IFwiY29tcHJlc3NRdWFsaXR5XCIsXG4gICAgICAgICAgICAgIG1pbjogMC4xLFxuICAgICAgICAgICAgICBtYXg6IDAuOTUsXG4gICAgICAgICAgICAgIHN0ZXA6IDAuMDUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJNYXhpbXVtIHNpemUgKHBpeGVscylcIixcbiAgICAgICAgICAgIGRlc2M6IFwiTG9uZ2VzdCBzaWRlIG9mIHRoZSBwaG90bywgZm9yIGJvdGggbGFuZHNjYXBlIGFuZCBwb3J0cmFpdC4gMCBrZWVwcyB0aGUgb3JpZ2luYWwgc2l6ZS5cIixcbiAgICAgICAgICAgIHZpc2libGU6IGV4cGVydCxcbiAgICAgICAgICAgIGNvbnRyb2w6IHtcbiAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgICAga2V5OiBcImNvbXByZXNzTWF4RGltZW5zaW9uXCIsXG4gICAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIk91dHB1dCBmb3JtYXRcIixcbiAgICAgICAgICAgIGRlc2M6IFwiQXV0byBrZWVwcyB0aGUgZm9ybWF0IGJ1dCB0dXJucyBQTkdzIG92ZXIgMSBNQiBpbnRvIEpQRUcgKHRyYW5zcGFyZW5jeSBiZWNvbWVzIHdoaXRlKS4gT3JpZ2luYWwgbmV2ZXIgY2hhbmdlcyB0aGUgZm9ybWF0LiBXZWJQIGlzIHNtYWxsZXIgdGhhbiBKUEVHIGJ1dCBmYWxscyBiYWNrIHRvIEpQRUcgaWYgdW5zdXBwb3J0ZWQuXCIsXG4gICAgICAgICAgICB2aXNpYmxlOiBleHBlcnQsXG4gICAgICAgICAgICBjb250cm9sOiB7XG4gICAgICAgICAgICAgIHR5cGU6IFwiZHJvcGRvd25cIixcbiAgICAgICAgICAgICAga2V5OiBcImNvbXByZXNzRm9ybWF0XCIsXG4gICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkF1dG9cIixcbiAgICAgICAgICAgICAgICBvcmlnaW5hbDogXCJLZWVwIG9yaWdpbmFsIGZvcm1hdFwiLFxuICAgICAgICAgICAgICAgIGpwZWc6IFwiSlBFR1wiLFxuICAgICAgICAgICAgICAgIHdlYnA6IFwiV2ViUFwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiS2VlcCBFWElGIG1ldGFkYXRhXCIsXG4gICAgICAgICAgICBkZXNjOiBcIktlZXAgY2FtZXJhIGluZm8gYW5kIEdQUyBsb2NhdGlvbiBpbiBKUEVHIGZpbGVzLiBPZmYgaXMgc21hbGxlciBhbmQgYmV0dGVyIGZvciBwcml2YWN5LlwiLFxuICAgICAgICAgICAgdmlzaWJsZTogZXhwZXJ0LFxuICAgICAgICAgICAgY29udHJvbDoge1xuICAgICAgICAgICAgICB0eXBlOiBcInRvZ2dsZVwiLFxuICAgICAgICAgICAgICBrZXk6IFwiY29tcHJlc3NLZWVwRXhpZlwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiU2tpcCBzbWFsbCBmaWxlcyAoS0IpXCIsXG4gICAgICAgICAgICBkZXNjOiBcIkRvIG5vdCBjb21wcmVzcyBmaWxlcyBzbWFsbGVyIHRoYW4gdGhpcy4gMCBjb21wcmVzc2VzIGV2ZXJ5dGhpbmcuXCIsXG4gICAgICAgICAgICB2aXNpYmxlOiBleHBlcnQsXG4gICAgICAgICAgICBjb250cm9sOiB7XG4gICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgIGtleTogXCJjb21wcmVzc01pblNpemVLQlwiLFxuICAgICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIF07XG4gIH1cbn0iLCAiaW1wb3J0IENvbXByZXNzb3IgZnJvbSBcImNvbXByZXNzb3Jqc1wiO1xuaW1wb3J0IHR5cGUgeyBDYW1lcmFFbWJlZFNldHRpbmdzLCBDb21wcmVzc0Zvcm1hdCwgQ29tcHJlc3Npb25QcmVzZXQgfSBmcm9tIFwiLi9zZXR0aW5ncy5qc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbXByZXNzT3B0aW9ucyB7XG4gIHF1YWxpdHk6IG51bWJlcjtcbiAgLyoqIExvbmdlc3Qgc2lkZSBpbiBweC4gMCA9IGtlZXAgb3JpZ2luYWwgc2l6ZS4gKi9cbiAgbWF4RGltZW5zaW9uOiBudW1iZXI7XG4gIGZvcm1hdDogQ29tcHJlc3NGb3JtYXQ7XG4gIGtlZXBFeGlmOiBib29sZWFuO1xuICBtaW5TaXplQnl0ZXM6IG51bWJlcjtcbn1cblxuY29uc3QgUFJFU0VUUzogUmVjb3JkPENvbXByZXNzaW9uUHJlc2V0LCB7IHF1YWxpdHk6IG51bWJlcjsgbWF4RGltZW5zaW9uOiBudW1iZXIgfT4gPSB7XG4gIGxpZ2h0OiB7IHF1YWxpdHk6IDAuODUsIG1heERpbWVuc2lvbjogMzAwMCB9LFxuICBiYWxhbmNlZDogeyBxdWFsaXR5OiAwLjc1LCBtYXhEaW1lbnNpb246IDIwNDggfSxcbiAgc3Ryb25nOiB7IHF1YWxpdHk6IDAuNiwgbWF4RGltZW5zaW9uOiAxNjAwIH0sXG59O1xuXG4vLyBHSUZzIG1heSBiZSBhbmltYXRlZCBhbmQgU1ZHcyBhcmUgdmVjdG9yOiBuZXZlciByZS1lbmNvZGUgdGhlbS5cbmNvbnN0IFNLSVBfVFlQRVMgPSBuZXcgU2V0KFtcImltYWdlL2dpZlwiLCBcImltYWdlL3N2Zyt4bWxcIl0pO1xuXG4vLyBcImF1dG9cIiBjb252ZXJ0cyBQTkdzIGFib3ZlIHRoaXMgc2l6ZSB0byBKUEVHLlxuY29uc3QgUE5HX0NPTlZFUlRfU0laRSA9IDFfMDAwXzAwMDtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbXByZXNzT3B0aW9ucyhzZXR0aW5nczogQ2FtZXJhRW1iZWRTZXR0aW5ncyk6IENvbXByZXNzT3B0aW9ucyB7XG4gIGlmIChzZXR0aW5ncy5jb21wcmVzc2lvbk1vZGUgPT09IFwiZXhwZXJ0XCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcXVhbGl0eTogTWF0aC5taW4oMSwgTWF0aC5tYXgoMC4xLCBzZXR0aW5ncy5jb21wcmVzc1F1YWxpdHkpKSxcbiAgICAgIG1heERpbWVuc2lvbjogTWF0aC5tYXgoMCwgTWF0aC5yb3VuZChzZXR0aW5ncy5jb21wcmVzc01heERpbWVuc2lvbikpLFxuICAgICAgZm9ybWF0OiBzZXR0aW5ncy5jb21wcmVzc0Zvcm1hdCxcbiAgICAgIGtlZXBFeGlmOiBzZXR0aW5ncy5jb21wcmVzc0tlZXBFeGlmLFxuICAgICAgbWluU2l6ZUJ5dGVzOiBNYXRoLm1heCgwLCBzZXR0aW5ncy5jb21wcmVzc01pblNpemVLQikgKiAxMDI0LFxuICAgIH07XG4gIH1cbiAgY29uc3QgcHJlc2V0ID0gUFJFU0VUU1tzZXR0aW5ncy5jb21wcmVzc2lvblByZXNldF0gPz8gUFJFU0VUUy5iYWxhbmNlZDtcbiAgcmV0dXJuIHsgLi4ucHJlc2V0LCBmb3JtYXQ6IFwiYXV0b1wiLCBrZWVwRXhpZjogZmFsc2UsIG1pblNpemVCeXRlczogMCB9O1xufVxuXG5mdW5jdGlvbiBydW5Db21wcmVzc29yKGZpbGU6IEZpbGUsIG9wdGlvbnM6IENvbXByZXNzT3B0aW9ucywgbWltZVR5cGU6IHN0cmluZywgY29udmVydFNpemU6IG51bWJlcik6IFByb21pc2U8QmxvYj4ge1xuICAvLyBTZXR0aW5nIGJvdGggbGltaXRzIHRvIHRoZSBzYW1lIHZhbHVlIG1ha2VzIGl0IGEgXCJsb25nZXN0IHNpZGVcIiBsaW1pdCxcbiAgLy8gc28gcG9ydHJhaXQgcGhvdG9zIGFyZSBub3Qgc2hydW5rIG1vcmUgdGhhbiBsYW5kc2NhcGUgb25lcy5cbiAgY29uc3QgbGltaXQgPSBvcHRpb25zLm1heERpbWVuc2lvbiA+IDAgPyBvcHRpb25zLm1heERpbWVuc2lvbiA6IEluZmluaXR5O1xuXG4gIHJldHVybiBuZXcgUHJvbWlzZTxCbG9iPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbmV3IENvbXByZXNzb3IoZmlsZSwge1xuICAgICAgcXVhbGl0eTogb3B0aW9ucy5xdWFsaXR5LFxuICAgICAgbWF4V2lkdGg6IGxpbWl0LFxuICAgICAgbWF4SGVpZ2h0OiBsaW1pdCxcbiAgICAgIGNoZWNrT3JpZW50YXRpb246IHRydWUsIC8vIHJlc3BlY3QgRVhJRiByb3RhdGlvblxuICAgICAgcmV0YWluRXhpZjogb3B0aW9ucy5rZWVwRXhpZixcbiAgICAgIG1pbWVUeXBlLFxuICAgICAgY29udmVydFR5cGVzOiBcImltYWdlL3BuZ1wiLFxuICAgICAgY29udmVydFNpemUsXG4gICAgICBzdHJpY3Q6IHRydWUsXG4gICAgICBzdWNjZXNzOiByZXNvbHZlLFxuICAgICAgZXJyb3I6IHJlamVjdCxcbiAgICB9KTtcbiAgfSk7XG59XG5cbi8qKlxuICogQ29tcHJlc3NlcyBhbiBpbWFnZS4gQWx3YXlzIHJldHVybnMgdGhlIHNtYWxsZXIgb2YgdGhlIG9yaWdpbmFsIGFuZCB0aGUgcmVzdWx0LFxuICogYW5kIHJldHVybnMgdGhlIG9yaWdpbmFsIHVudG91Y2hlZCBmb3IgR0lGL1NWRy9zbWFsbCBmaWxlcy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbXByZXNzSW1hZ2UoZmlsZTogRmlsZSwgb3B0aW9uczogQ29tcHJlc3NPcHRpb25zKTogUHJvbWlzZTxCbG9iPiB7XG4gIGlmICghZmlsZS50eXBlLnN0YXJ0c1dpdGgoXCJpbWFnZS9cIikgfHwgU0tJUF9UWVBFUy5oYXMoZmlsZS50eXBlKSkgcmV0dXJuIGZpbGU7XG4gIGlmIChmaWxlLnNpemUgPCBvcHRpb25zLm1pblNpemVCeXRlcykgcmV0dXJuIGZpbGU7XG5cbiAgY29uc3QgbWltZVR5cGUgPSBvcHRpb25zLmZvcm1hdCA9PT0gXCJqcGVnXCIgPyBcImltYWdlL2pwZWdcIiA6IG9wdGlvbnMuZm9ybWF0ID09PSBcIndlYnBcIiA/IFwiaW1hZ2Uvd2VicFwiIDogXCJhdXRvXCI7XG4gIGNvbnN0IGNvbnZlcnRTaXplID0gb3B0aW9ucy5mb3JtYXQgPT09IFwib3JpZ2luYWxcIiA/IEluZmluaXR5IDogUE5HX0NPTlZFUlRfU0laRTtcblxuICBsZXQgcmVzdWx0ID0gYXdhaXQgcnVuQ29tcHJlc3NvcihmaWxlLCBvcHRpb25zLCBtaW1lVHlwZSwgY29udmVydFNpemUpO1xuXG4gIC8vIFNvbWUgYnJvd3NlcnMgc2lsZW50bHkgZmFsbCBiYWNrIHRvIFBORyB3aGVuIHRoZXkgY2Fubm90IGVuY29kZSBXZWJQLlxuICBpZiAobWltZVR5cGUgPT09IFwiaW1hZ2Uvd2VicFwiICYmIHJlc3VsdC50eXBlICE9PSBcImltYWdlL3dlYnBcIikge1xuICAgIHJlc3VsdCA9IGF3YWl0IHJ1bkNvbXByZXNzb3IoZmlsZSwgb3B0aW9ucywgXCJpbWFnZS9qcGVnXCIsIGNvbnZlcnRTaXplKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQuc2l6ZSA8IGZpbGUuc2l6ZSA/IHJlc3VsdCA6IGZpbGU7XG59IiwgImltcG9ydCB7IFRGb2xkZXIsIFZhdWx0IH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5cbmNvbnN0IHBhZCA9IChuOiBudW1iZXIpOiBzdHJpbmcgPT4gKG4gPCAxMCA/IGAwJHtufWAgOiBTdHJpbmcobikpO1xuXG4vKiogTG9jYWwgdGltZSAobm90IFVUQyk6IDIwMjYtMTAtMzFfMTQtMDUtMDkgKi9cbmZ1bmN0aW9uIGxvY2FsU3RhbXAoZGF0ZSA9IG5ldyBEYXRlKCkpOiBzdHJpbmcge1xuICBjb25zdCBkYXkgPSBgJHtkYXRlLmdldEZ1bGxZZWFyKCl9LSR7cGFkKGRhdGUuZ2V0TW9udGgoKSArIDEpfS0ke3BhZChkYXRlLmdldERhdGUoKSl9YDtcbiAgY29uc3QgdGltZSA9IGAke3BhZChkYXRlLmdldEhvdXJzKCkpfS0ke3BhZChkYXRlLmdldE1pbnV0ZXMoKSl9LSR7cGFkKGRhdGUuZ2V0U2Vjb25kcygpKX1gO1xuICByZXR1cm4gYCR7ZGF5fV8ke3RpbWV9YDtcbn1cblxuLyoqXG4gKiBAcGFyYW0gZmlsZSAgIHRoZSBvcmlnaW5hbCBmaWxlICh1c2VkIGZvciBhIGZhbGxiYWNrIGV4dGVuc2lvbilcbiAqIEBwYXJhbSBvdXRwdXQgdGhlIGJsb2IgdGhhdCB3aWxsIGFjdHVhbGx5IGJlIHdyaXR0ZW4gKG1heSBiZSBjb21wcmVzc2VkL2NvbnZlcnRlZCkuXG4gKiAgICAgICAgICAgICAgIFRoZSBleHRlbnNpb24gY29tZXMgZnJvbSB0aGlzLCBzbyBhIFBORyBjb252ZXJ0ZWQgdG8gSlBFRyBpcyBzYXZlZCBhcyAuanBnLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRGaWxlTmFtZShmaWxlOiBGaWxlLCBvdXRwdXQ6IEJsb2IgPSBmaWxlKTogc3RyaW5nIHtcbiAgY29uc3QgZXh0ID0gZXh0ZW5zaW9uRnJvbVR5cGUob3V0cHV0LnR5cGUpID8/IGV4dGVuc2lvbkZyb21OYW1lKGZpbGUubmFtZSk/LnRvTG93ZXJDYXNlKCkgPz8gXCJqcGdcIjtcbiAgcmV0dXJuIGBwaG90by0ke2xvY2FsU3RhbXAoKX0uJHtleHR9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dGVuc2lvbkZyb21OYW1lKG5hbWU6IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICBjb25zdCBtYXRjaCA9IG5hbWUubWF0Y2goL1xcLihbYS16QS1aMC05XSspJC8pO1xuICByZXR1cm4gbWF0Y2g/LlsxXSA/PyBudWxsO1xufVxuXG5jb25zdCBUWVBFX0VYVEVOU0lPTlM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIGpwZWc6IFwianBnXCIsXG4gIHBqcGVnOiBcImpwZ1wiLFxuICBcInN2Zyt4bWxcIjogXCJzdmdcIixcbiAgXCJ4LWljb25cIjogXCJpY29cIixcbiAgXCJ2bmQubWljcm9zb2Z0Lmljb25cIjogXCJpY29cIixcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRlbnNpb25Gcm9tVHlwZShtaW1lVHlwZTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gIGlmICghbWltZVR5cGUuc3RhcnRzV2l0aChcImltYWdlL1wiKSkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IHN1YnR5cGUgPSBtaW1lVHlwZS5zbGljZShcImltYWdlL1wiLmxlbmd0aCkudG9Mb3dlckNhc2UoKTtcbiAgaWYgKCFzdWJ0eXBlKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgbWFwcGVkID0gVFlQRV9FWFRFTlNJT05TW3N1YnR5cGVdO1xuICBpZiAobWFwcGVkKSByZXR1cm4gbWFwcGVkO1xuICByZXR1cm4gL15bYS16MC05XSskLy50ZXN0KHN1YnR5cGUpID8gc3VidHlwZSA6IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBqb2luUGF0aChwYXJlbnRQYXRoOiBzdHJpbmcgfCBudWxsLCBmaWxlTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKCFwYXJlbnRQYXRoKSByZXR1cm4gZmlsZU5hbWU7IC8vIHBhcmVudFBhdGggaXMgZW1wdHkgc3RyaW5nIFx1MjE5MiB2YXVsdCByb290XG4gIHJldHVybiBgJHtwYXJlbnRQYXRofS8ke2ZpbGVOYW1lfWA7XG59XG5cbi8qKiBVc2VzIHRoZSBsb2NhbCBkYXRlLCBzbyBhIHBob3RvIHRha2VuIGF0IDEgQU0gb24gdGhlIDFzdCBnb2VzIGluIHRoZSByaWdodCBtb250aC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRNb250aGx5Rm9sZGVyKHBhcmVudFBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gIHJldHVybiBqb2luUGF0aChqb2luUGF0aChwYXJlbnRQYXRoLCBTdHJpbmcobm93LmdldEZ1bGxZZWFyKCkpKSwgcGFkKG5vdy5nZXRNb250aCgpICsgMSkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRm9sZGVyUGF0aCh2YXVsdDogVmF1bHQsIHBhdGg6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICBsZXQgY3VycmVudFBhdGggPSBcIlwiO1xuICBmb3IgKGNvbnN0IHNlZ21lbnQgb2YgcGF0aC5zcGxpdChcIi9cIikuZmlsdGVyKEJvb2xlYW4pKSB7XG4gICAgY3VycmVudFBhdGggPSBqb2luUGF0aChjdXJyZW50UGF0aCwgc2VnbWVudCk7XG4gICAgY29uc3QgZXhpc3RpbmcgPSB2YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoY3VycmVudFBhdGgpO1xuICAgIGlmIChleGlzdGluZyBpbnN0YW5jZW9mIFRGb2xkZXIpIGNvbnRpbnVlO1xuICAgIGlmIChleGlzdGluZykgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgY3JlYXRlIGZvbGRlciBiZWNhdXNlIGEgZmlsZSBleGlzdHMgYXQgJHtjdXJyZW50UGF0aH1gKTtcbiAgICBhd2FpdCB2YXVsdC5jcmVhdGVGb2xkZXIoY3VycmVudFBhdGgpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBdmFpbGFibGVQYXRoKHZhdWx0OiBWYXVsdCwgcGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gQXZvaWQgb3ZlcndyaXRpbmcgZXhpc3RpbmcgZmlsZXMgYnkgYWRkaW5nIGEgc3VmZml4LlxuICBpZiAoIXZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChwYXRoKSkgcmV0dXJuIHBhdGg7XG5cbiAgY29uc3QgcGFydHMgPSBwYXRoLnNwbGl0KFwiL1wiKTtcbiAgY29uc3QgbmFtZSA9IHBhcnRzLnBvcCgpID8/IHBhdGg7XG4gIGNvbnN0IGRpciA9IHBhcnRzLmxlbmd0aCA+IDAgPyBgJHtwYXJ0cy5qb2luKFwiL1wiKX0vYCA6IFwiXCI7XG4gIGNvbnN0IGV4dEluZGV4ID0gbmFtZS5sYXN0SW5kZXhPZihcIi5cIik7XG4gIGNvbnN0IGJhc2UgPSBleHRJbmRleCA9PT0gLTEgPyBuYW1lIDogbmFtZS5zbGljZSgwLCBleHRJbmRleCk7XG4gIGNvbnN0IGV4dCA9IGV4dEluZGV4ID09PSAtMSA/IFwiXCIgOiBuYW1lLnNsaWNlKGV4dEluZGV4KTtcblxuICBmb3IgKGxldCBpID0gMTsgaSA8IDEwMDA7IGkrKykge1xuICAgIGNvbnN0IGNhbmRpZGF0ZSA9IGAke2Rpcn0ke2Jhc2V9LSR7aX0ke2V4dH1gO1xuICAgIGlmICghdmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGNhbmRpZGF0ZSkpIHJldHVybiBjYW5kaWRhdGU7XG4gIH1cbiAgcmV0dXJuIGAke2Rpcn0ke2Jhc2V9LSR7RGF0ZS5ub3coKX0ke2V4dH1gO1xufVxuXG4vKiogSGVscGVyIHRvIGNoZWNrIGlmIGEgZm9sZGVyIGV4aXN0cyBhdCB0aGUgZ2l2ZW4gcGF0aC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb2xkZXJFeGlzdHModmF1bHQ6IFZhdWx0LCBwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgY29uc3QgZmlsZSA9IHZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChwYXRoKTtcbiAgcmV0dXJuIGZpbGUgaW5zdGFuY2VvZiBURm9sZGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0Qnl0ZXMoYnl0ZXM6IG51bWJlcik6IHN0cmluZyB7XG4gIGlmIChieXRlcyA8IDEwMjQpIHJldHVybiBgJHtieXRlc30gQmA7XG4gIGlmIChieXRlcyA8IDEwMjQgKiAxMDI0KSByZXR1cm4gYCR7KGJ5dGVzIC8gMTAyNCkudG9GaXhlZCgwKX0gS0JgO1xuICByZXR1cm4gYCR7KGJ5dGVzIC8gKDEwMjQgKiAxMDI0KSkudG9GaXhlZCgxKX0gTUJgO1xufVxuXG4vKipcbiAqIEFkZHMgYW4gaW1hZ2Ugd2lkdGggdG8gYW4gZW1iZWQgbGluaywgdXNpbmcgT2JzaWRpYW4ncyBzaXplIHN5bnRheDpcbiAqICAgW1twaG90by5qcGddXSAgICAgIC0+IFtbcGhvdG8uanBnfDUwMF1dXG4gKiAgIFtwaG90b10ocGhvdG8uanBnKSAtPiBbcGhvdG98NTAwXShwaG90by5qcGcpXG4gKiBSZXR1cm5zIHRoZSBsaW5rIHVuY2hhbmdlZCB3aGVuIG5vIHdpZHRoIGlzIGdpdmVuLlxuICovXG5leHBvcnQgZnVuY3Rpb24gd2l0aEVtYmVkV2lkdGgobGluazogc3RyaW5nLCB3aWR0aD86IG51bWJlcik6IHN0cmluZyB7XG4gIGlmICghd2lkdGggfHwgd2lkdGggPD0gMCkgcmV0dXJuIGxpbms7XG4gIGlmIChsaW5rLnN0YXJ0c1dpdGgoXCJbW1wiKSAmJiBsaW5rLmVuZHNXaXRoKFwiXV1cIikpIHtcbiAgICByZXR1cm4gYCR7bGluay5zbGljZSgwLCAtMil9fCR7d2lkdGh9XV1gO1xuICB9XG4gIHJldHVybiBsaW5rLnJlcGxhY2UoL15cXFsoLio/KVxcXVxcKC8sIChfbWF0Y2gsIGFsdDogc3RyaW5nKSA9PiBgWyR7YWx0fXwke3dpZHRofV0oYCk7XG59IiwgImV4cG9ydCB0eXBlIFBpY2tTb3VyY2UgPSBcImNhbWVyYVwiIHwgXCJnYWxsZXJ5XCI7XG5cbi8qKlxuICogT3BlbnMgdGhlIG5hdGl2ZSBmaWxlL2NhbWVyYSBwaWNrZXIuIFRoZXJlIGlzIGRlbGliZXJhdGVseSBubyB0aW1lb3V0OlxuICogb24gQW5kcm9pZCB0aGUgdXNlciBtYXkgc3RheSBpbiB0aGUgY2FtZXJhIGFwcCBmb3IgYSBsb25nIHRpbWUsIGFuZCBhIHRpbWVyXG4gKiB3b3VsZCB0aHJvdyB0aGUgcGhvdG8gYXdheS4gQ2FuY2VsbGluZyByZXNvbHZlcyB3aXRoIGFuIGVtcHR5IGxpc3QuXG4gKlxuICogQHBhcmFtIGNvbnRhaW5lciBlbGVtZW50IHRoZSBoaWRkZW4gZmlsZSBpbnB1dCBpcyBhdHRhY2hlZCB0byAoaXQgaXMgcmVtb3ZlZCBhZnRlcndhcmRzKVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGlja0ltYWdlcyhzb3VyY2U6IFBpY2tTb3VyY2UsIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiBQcm9taXNlPEZpbGVbXT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IGNvbnRhaW5lci5jcmVhdGVFbChcImlucHV0XCIsIHsgY2xzOiBcImNhbWVyYS1oaWRkZW5cIiwgdHlwZTogXCJmaWxlXCIgfSk7XG4gICAgaW5wdXQuYWNjZXB0ID0gXCJpbWFnZS8qXCI7XG4gICAgaW5wdXQubXVsdGlwbGUgPSBzb3VyY2UgIT09IFwiY2FtZXJhXCI7XG4gICAgaWYgKHNvdXJjZSA9PT0gXCJjYW1lcmFcIikgaW5wdXQuc2V0QXR0cmlidXRlKFwiY2FwdHVyZVwiLCBcImVudmlyb25tZW50XCIpO1xuXG4gICAgY29uc3QgZmluaXNoID0gKGZpbGVzOiBGaWxlW10pID0+IHtcbiAgICAgIGlucHV0LnJlbW92ZSgpO1xuICAgICAgcmVzb2x2ZShmaWxlcyk7XG4gICAgfTtcblxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4gZmluaXNoKGlucHV0LmZpbGVzID8gQXJyYXkuZnJvbShpbnB1dC5maWxlcykgOiBbXSkpO1xuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjYW5jZWxcIiwgKCkgPT4gZmluaXNoKFtdKSk7XG5cbiAgICBpbnB1dC5jbGljaygpO1xuICB9KTtcbn0iLCAiaW1wb3J0IHsgQXBwLCBFdmVudFJlZiwgTWFya2Rvd25WaWV3LCBNZW51LCBNb2RhbCwgTm90aWNlLCBQbGF0Zm9ybSwgVEZpbGUsIFRGb2xkZXIsIG5vcm1hbGl6ZVBhdGgsIHNldEljb24gfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCB7IHBpY2tJbWFnZXMsIHR5cGUgUGlja1NvdXJjZSB9IGZyb20gXCIuL2lucHV0LXV0aWxzLmpzXCI7XG5pbXBvcnQgdHlwZSB7IENhbWVyYUVtYmVkU2V0dGluZ3MsIEdhbGxlcnlTY29wZSwgR2FsbGVyeVNvcnQgfSBmcm9tIFwiLi9zZXR0aW5ncy5qc1wiO1xuXG5jb25zdCBJTUFHRV9FWFRFTlNJT05TID0gbmV3IFNldChbXCJqcGdcIiwgXCJqcGVnXCIsIFwicG5nXCIsIFwiZ2lmXCIsIFwid2VicFwiLCBcImJtcFwiLCBcInN2Z1wiLCBcImF2aWZcIl0pO1xuY29uc3QgUkVOREVSX0NIVU5LID0gMTIwO1xuY29uc3QgTUFYX01FTlVfVVNBR0VTID0gNTtcbmNvbnN0IExPTkdfUFJFU1NfTVMgPSA1MDA7XG5jb25zdCBXSURUSF9DSE9JQ0VTID0gWzMwMCwgNTAwLCA4MDBdO1xuXG4vKiogV2hhdCB0aGUgZ2FsbGVyeSBuZWVkcyBmcm9tIHRoZSBwbHVnaW4uIENhbWVyYUVtYmVkUGx1Z2luIHNhdGlzZmllcyB0aGlzIGFzIGlzLiAqL1xuZXhwb3J0IGludGVyZmFjZSBHYWxsZXJ5SG9zdCB7XG4gIHNldHRpbmdzOiBDYW1lcmFFbWJlZFNldHRpbmdzO1xuICBzYXZlUGhvdG9zKGZpbGVzOiBGaWxlW10sIG5vdGVGb2xkZXJQYXRoPzogc3RyaW5nKTogUHJvbWlzZTxURmlsZVtdPjtcbiAgc2F2ZVNldHRpbmdzKCk6IFByb21pc2U8dm9pZD47XG4gIC8qKiBGb2xkZXIgb2YgdGhlIG5vdGUgeW91IGFyZSB3b3JraW5nIGluIChmb3IgXCJTYXZlIG5lYXIgdGhlIG5vdGVcIikuICovXG4gIGdldFRhcmdldE5vdGVGb2xkZXI/KCk6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgb3BlbkdhbGxlcnlTaWRlYmFyPygpOiBQcm9taXNlPHZvaWQ+O1xufVxuXG5pbnRlcmZhY2UgSXRlbVJlZnMge1xuICBpdGVtOiBIVE1MRWxlbWVudDtcbiAgYmFkZ2U6IEhUTUxFbGVtZW50O1xufVxuXG5jb25zdCBpc0ltYWdlID0gKGZpbGU6IFRGaWxlKSA9PiBJTUFHRV9FWFRFTlNJT05TLmhhcyhmaWxlLmV4dGVuc2lvbi50b0xvd2VyQ2FzZSgpKTtcbmNvbnN0IG5leHRGcmFtZSA9ICgpID0+IG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlKSA9PiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHJlc29sdmUoKSkpO1xuXG4vKiogRmlsZXMgZnJvbSB0aGUgT1M6IHRydXN0IHRoZSBNSU1FIHR5cGUsIGJ1dCBmYWxsIGJhY2sgdG8gdGhlIGV4dGVuc2lvbiAoc29tZSBzeXN0ZW1zIGdpdmUgYW4gZW1wdHkgdHlwZSkuICovXG5jb25zdCBpc0ltYWdlRmlsZSA9IChmaWxlOiBGaWxlKSA9PiB7XG4gIGlmIChmaWxlLnR5cGUuc3RhcnRzV2l0aChcImltYWdlL1wiKSkgcmV0dXJuIHRydWU7XG4gIGNvbnN0IGV4dCA9IGZpbGUubmFtZS5zcGxpdChcIi5cIikucG9wKCk/LnRvTG93ZXJDYXNlKCkgPz8gXCJcIjtcbiAgcmV0dXJuIElNQUdFX0VYVEVOU0lPTlMuaGFzKGV4dCk7XG59O1xuXG4vKipcbiAqIENvbGxlY3RzIHRoZSBpbWFnZXMgaW5zaWRlIG9uZSBmb2xkZXIgKGFuZCBpdHMgc3ViZm9sZGVycykuXG4gKiBUaGUgZ2FsbGVyeSBvbmx5IGV2ZXIgcmVhZHMgdGhlIHBob3RvcyBmb2xkZXIsIG5ldmVyIHRoZSByZXN0IG9mIHRoZSB2YXVsdC5cbiAqL1xuZnVuY3Rpb24gY29sbGVjdEltYWdlcyhmb2xkZXI6IFRGb2xkZXIsIG91dDogVEZpbGVbXSA9IFtdKTogVEZpbGVbXSB7XG4gIGZvciAoY29uc3QgY2hpbGQgb2YgZm9sZGVyLmNoaWxkcmVuKSB7XG4gICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgVEZpbGUpIHtcbiAgICAgIGlmIChpc0ltYWdlKGNoaWxkKSkgb3V0LnB1c2goY2hpbGQpO1xuICAgIH0gZWxzZSBpZiAoY2hpbGQgaW5zdGFuY2VvZiBURm9sZGVyKSB7XG4gICAgICBjb2xsZWN0SW1hZ2VzKGNoaWxkLCBvdXQpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gb3V0O1xufVxuXG4vKiogTm90ZXMgdGhhdCBsaW5rIHRvIHRoaXMgcGhvdG8uICovXG5mdW5jdGlvbiBnZXRVc2FnZXMoYXBwOiBBcHAsIGZpbGU6IFRGaWxlKTogVEZpbGVbXSB7XG4gIGNvbnN0IHJlc29sdmVkTGlua3MgPSBhcHAubWV0YWRhdGFDYWNoZS5yZXNvbHZlZExpbmtzO1xuICBjb25zdCB1c2FnZXM6IFRGaWxlW10gPSBbXTtcbiAgZm9yIChjb25zdCBwYXRoIGluIHJlc29sdmVkTGlua3MpIHtcbiAgICBjb25zdCB0YXJnZXRzID0gcmVzb2x2ZWRMaW5rc1twYXRoXTtcbiAgICBpZiAoIXRhcmdldHMpIGNvbnRpbnVlO1xuICAgIGlmICgodGFyZ2V0c1tmaWxlLnBhdGhdID8/IDApIDw9IDApIGNvbnRpbnVlO1xuICAgIGNvbnN0IG5vdGU6IHVua25vd24gPSBhcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKHBhdGgpO1xuICAgIGlmIChub3RlIGluc3RhbmNlb2YgVEZpbGUpIHVzYWdlcy5wdXNoKG5vdGUpO1xuICB9XG4gIHJldHVybiB1c2FnZXM7XG59XG5cbmV4cG9ydCBjbGFzcyBHYWxsZXJ5TW9kYWwgZXh0ZW5kcyBNb2RhbCB7XG4gIHByaXZhdGUgcmVhZG9ubHkgaG9zdDogR2FsbGVyeUhvc3Q7XG4gIHByaXZhdGUgcmVhZG9ubHkgb25DaG9vc2U6IChmaWxlczogVEZpbGVbXSwgd2lkdGg/OiBudW1iZXIpID0+IHZvaWQ7XG4gIHByaXZhdGUgcmVhZG9ubHkgY2xvc2VPbkNob29zZTogYm9vbGVhbjtcblxuICBwcml2YXRlIGFsbEZpbGVzOiBURmlsZVtdID0gW107XG4gIHByaXZhdGUgZm9sZGVyTWlzc2luZyA9IGZhbHNlO1xuICBwcml2YXRlIHZpc2libGVGaWxlczogVEZpbGVbXSA9IFtdO1xuICBwcml2YXRlIGl0ZW1FbHMgPSBuZXcgTWFwPHN0cmluZywgSXRlbVJlZnM+KCk7XG4gIHByaXZhdGUgc2VsZWN0ZWQgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgcHJpdmF0ZSBxdWVyeSA9IFwiXCI7XG5cbiAgcHJpdmF0ZSBncmlkITogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgc2VsZWN0aW9uTGFiZWwhOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBzdGF0dXMhOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSB1c2VCdXR0b24hOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgcHJpdmF0ZSBkZWxldGVCdXR0b24hOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgcHJpdmF0ZSBwcmV2aWV3QnV0dG9uITogSFRNTEJ1dHRvbkVsZW1lbnQ7XG5cbiAgcHJpdmF0ZSBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBsb2FkZXJzID0gbmV3IFdlYWtNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKTtcbiAgcHJpdmF0ZSBldmVudFJlZnM6IEV2ZW50UmVmW10gPSBbXTtcbiAgcHJpdmF0ZSByZWJ1aWxkVGltZXI6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIHNlYXJjaFRpbWVyOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBsYXN0TWVudVRpbWUgPSAwO1xuICBwcml2YXRlIHJlbmRlcklkID0gMDtcbiAgcHJpdmF0ZSBvcGVuZWQgPSBmYWxzZTtcblxuICBwcml2YXRlIGRyYWdEZXB0aCA9IDA7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgYXBwOiBBcHAsXG4gICAgaG9zdDogR2FsbGVyeUhvc3QsXG4gICAgb25DaG9vc2U6IChmaWxlczogVEZpbGVbXSwgd2lkdGg/OiBudW1iZXIpID0+IHZvaWQsXG4gICAgY2xvc2VPbkNob29zZSA9IHRydWUsXG4gICkge1xuICAgIHN1cGVyKGFwcCk7XG4gICAgdGhpcy5ob3N0ID0gaG9zdDtcbiAgICB0aGlzLm9uQ2hvb3NlID0gb25DaG9vc2U7XG4gICAgdGhpcy5jbG9zZU9uQ2hvb3NlID0gY2xvc2VPbkNob29zZTtcbiAgfVxuXG4gIG1vdW50KGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLm9uT3BlbigpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRlbnRFbCk7XG4gIH1cblxuICB1bm1vdW50KCkgeyB0aGlzLm9uQ2xvc2UoKTsgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAvKiBVSSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gIG9uT3BlbigpIHtcbiAgICB0aGlzLm9wZW5lZCA9IHRydWU7XG4gICAgdGhpcy5tb2RhbEVsLmFkZENsYXNzKFwiY2FtZXJhLWdhbGxlcnktbW9kYWwtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHsgY29udGVudEVsIH0gPSB0aGlzO1xuICAgIGNvbnRlbnRFbC5hZGRDbGFzcyhcImNhbWVyYS1nYWxsZXJ5LW1vZGFsXCIpO1xuICAgIHRoaXMuc2V0dXBEcm9wVGFyZ2V0KCk7XG4gICAgY29uc3Qgc2V0dGluZ3MgPSB0aGlzLmhvc3Quc2V0dGluZ3M7XG5cbiAgICAvLyBIZWFkZXJcbiAgICBjb25zdCBoZWFkZXIgPSBjb250ZW50RWwuY3JlYXRlRGl2KHsgY2xzOiBcImNhbWVyYS1nYWxsZXJ5LWhlYWRlclwiIH0pO1xuICAgIGNvbnN0IHRpdGxlID0gaGVhZGVyLmNyZWF0ZURpdih7IGNsczogXCJjYW1lcmEtZ2FsbGVyeS10aXRsZVwiIH0pO1xuICAgIHNldEljb24odGl0bGUsIFwiaW1hZ2VzXCIpO1xuICAgIHRpdGxlLmNyZWF0ZVNwYW4oeyB0ZXh0OiBcIkdhbGxlcnlcIiB9KTtcbiAgICB0aGlzLnNlbGVjdGlvbkxhYmVsID0gaGVhZGVyLmNyZWF0ZURpdih7IGNsczogXCJjYW1lcmEtZ2FsbGVyeS1zZWxlY3Rpb25cIiB9KTtcblxuICAgIC8vIFRvb2xiYXIgKGFkZGluZyBwaG90b3MpXG4gICAgY29uc3QgdG9vbGJhciA9IGNvbnRlbnRFbC5jcmVhdGVEaXYoeyBjbHM6IFwiY2FtZXJhLWdhbGxlcnktdG9vbGJhclwiIH0pO1xuICAgIGlmIChQbGF0Zm9ybS5pc01vYmlsZSkge1xuICAgICAgY29uc3QgdGFrZSA9IHRvb2xiYXIuY3JlYXRlRWwoXCJidXR0b25cIiwgeyBjbHM6IFwibW9kLWN0YVwiIH0pO1xuICAgICAgc2V0SWNvbih0YWtlLCBcImNhbWVyYVwiKTtcbiAgICAgIHRha2UuY3JlYXRlU3Bhbih7IHRleHQ6IFwiVGFrZSBwaG90byB0byBnYWxsZXJ5XCIgfSk7XG4gICAgICB0YWtlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB2b2lkIHRoaXMuYWRkUGhvdG9zKFwiY2FtZXJhXCIpKTtcbiAgICB9XG4gICAgY29uc3QgdXBsb2FkID0gdG9vbGJhci5jcmVhdGVFbChcImJ1dHRvblwiLCB7IGNsczogXCJjYW1lcmEtZ2FsbGVyeS11cGxvYWRcIiB9KTtcbiAgICBzZXRJY29uKHVwbG9hZCwgXCJ1cGxvYWRcIik7XG4gICAgdXBsb2FkLmNyZWF0ZVNwYW4oeyB0ZXh0OiBcIlVwbG9hZCB0byBnYWxsZXJ5XCIgfSk7XG4gICAgdXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB2b2lkIHRoaXMuYWRkUGhvdG9zKFwiZ2FsbGVyeVwiKSk7XG5cbiAgICBpZiAoUGxhdGZvcm0uaXNEZXNrdG9wICYmIHRoaXMuY2xvc2VPbkNob29zZSAmJiB0aGlzLmhvc3Qub3BlbkdhbGxlcnlTaWRlYmFyKSB7XG4gICAgICBjb25zdCBzaWRlYmFyID0gdG9vbGJhci5jcmVhdGVFbChcImJ1dHRvblwiLCB7IGF0dHI6IHsgXCJhcmlhLWxhYmVsXCI6IFwiT3BlbiB0aGUgZ2FsbGVyeSBpbiB0aGUgc2lkZWJhciB0byBkcmFnIHBob3RvcyBpbnRvIG5vdGVzXCIgfSB9KTtcbiAgICAgIHNldEljb24oc2lkZWJhciwgXCJwYW5lbC1yaWdodFwiKTtcbiAgICAgIHNpZGViYXIuY3JlYXRlU3Bhbih7IHRleHQ6IFwiT3BlbiBpbiBzaWRlYmFyXCIgfSk7XG4gICAgICBzaWRlYmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgdm9pZCB0aGlzLmhvc3Qub3BlbkdhbGxlcnlTaWRlYmFyPy4oKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIENvbnRyb2xzIChzZWFyY2gsIHNvcnQsIHNjb3BlLCBtb250aCBncm91cGluZywgem9vbSlcbiAgICBjb25zdCBjb250cm9scyA9IGNvbnRlbnRFbC5jcmVhdGVEaXYoeyBjbHM6IFwiY2FtZXJhLWdhbGxlcnktY29udHJvbHNcIiB9KTtcblxuICAgIGNvbnN0IHNlYXJjaCA9IGNvbnRyb2xzLmNyZWF0ZURpdih7IGNsczogXCJjYW1lcmEtZ2FsbGVyeS1zZWFyY2hcIiB9KTtcbiAgICBjb25zdCBzZWFyY2hJbnB1dCA9IHNlYXJjaC5jcmVhdGVFbChcImlucHV0XCIsIHsgdHlwZTogXCJzZWFyY2hcIiwgcGxhY2Vob2xkZXI6IFwiU2VhcmNoIHBob3Rvc1x1MjAyNlwiIH0pO1xuICAgIHNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5zZWFyY2hUaW1lciAhPT0gbnVsbCkgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnNlYXJjaFRpbWVyKTtcbiAgICAgIHRoaXMuc2VhcmNoVGltZXIgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMucXVlcnkgPSBzZWFyY2hJbnB1dC52YWx1ZTtcbiAgICAgICAgdm9pZCB0aGlzLnJlYnVpbGQoKTtcbiAgICAgIH0sIDE1MCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZFNlbGVjdDxHYWxsZXJ5U29ydD4oXG4gICAgICBjb250cm9scyxcbiAgICAgIHsgbmV3ZXN0OiBcIk5ld2VzdCBmaXJzdFwiLCBvbGRlc3Q6IFwiT2xkZXN0IGZpcnN0XCIsIG5hbWU6IFwiTmFtZVwiLCBzaXplOiBcIkxhcmdlc3QgZmlyc3RcIiB9LFxuICAgICAgc2V0dGluZ3MuZ2FsbGVyeVNvcnQsXG4gICAgICAodmFsdWUpID0+IHtcbiAgICAgICAgc2V0dGluZ3MuZ2FsbGVyeVNvcnQgPSB2YWx1ZTtcbiAgICAgICAgdm9pZCB0aGlzLnBlcnNpc3RBbmRSZWJ1aWxkKCk7XG4gICAgICB9LFxuICAgICk7XG5cbiAgICB0aGlzLmFkZFNlbGVjdDxHYWxsZXJ5U2NvcGU+KFxuICAgICAgY29udHJvbHMsXG4gICAgICB7IGZvbGRlcjogXCJQaG90b3MgZm9sZGVyXCIsIHZhdWx0OiBcIldob2xlIHZhdWx0XCIgfSxcbiAgICAgIHNldHRpbmdzLmdhbGxlcnlTY29wZSxcbiAgICAgICh2YWx1ZSkgPT4ge1xuICAgICAgICBzZXR0aW5ncy5nYWxsZXJ5U2NvcGUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5sb2FkRmlsZXMoKTtcbiAgICAgICAgdm9pZCB0aGlzLnBlcnNpc3RBbmRSZWJ1aWxkKCk7XG4gICAgICB9LFxuICAgICk7XG5cbiAgICBjb25zdCBncm91cEJ1dHRvbiA9IGNvbnRyb2xzLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICAgIGNsczogXCJjYW1lcmEtZ2FsbGVyeS1ncm91cCBjbGlja2FibGUtaWNvblwiLFxuICAgICAgYXR0cjogeyBcImFyaWEtbGFiZWxcIjogXCJHcm91cCBieSBtb250aFwiIH0sXG4gICAgfSk7XG4gICAgc2V0SWNvbihncm91cEJ1dHRvbiwgXCJjYWxlbmRhclwiKTtcbiAgICBncm91cEJ1dHRvbi50b2dnbGVDbGFzcyhcImlzLWFjdGl2ZVwiLCBzZXR0aW5ncy5nYWxsZXJ5R3JvdXBCeU1vbnRoKTtcbiAgICBncm91cEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgc2V0dGluZ3MuZ2FsbGVyeUdyb3VwQnlNb250aCA9ICFzZXR0aW5ncy5nYWxsZXJ5R3JvdXBCeU1vbnRoO1xuICAgICAgZ3JvdXBCdXR0b24udG9nZ2xlQ2xhc3MoXCJpcy1hY3RpdmVcIiwgc2V0dGluZ3MuZ2FsbGVyeUdyb3VwQnlNb250aCk7XG4gICAgICB2b2lkIHRoaXMucGVyc2lzdEFuZFJlYnVpbGQoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHpvb20gPSBjb250cm9scy5jcmVhdGVFbChcImlucHV0XCIsIHsgY2xzOiBcImNhbWVyYS1nYWxsZXJ5LXpvb21cIiwgdHlwZTogXCJyYW5nZVwiLCBhdHRyOiB7IFwiYXJpYS1sYWJlbFwiOiBcIlRodW1ibmFpbCBzaXplXCIgfSB9KTtcbiAgICB6b29tLm1pbiA9IFwiODBcIjtcbiAgICB6b29tLm1heCA9IFwiMzAwXCI7XG4gICAgem9vbS5zdGVwID0gXCIxMFwiO1xuICAgIGlmIChzZXR0aW5ncy5nYWxsZXJ5VGh1bWJTaXplID4gMCkgdGhpcy5hcHBseVpvb20oc2V0dGluZ3MuZ2FsbGVyeVRodW1iU2l6ZSk7XG4gICAgY29uc3QgY3NzU2l6ZSA9IHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoY29udGVudEVsKS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1jYW1lcmEtZ2FsbGVyeS1zaXplXCIpLCAxMCk7XG4gICAgem9vbS52YWx1ZSA9IFN0cmluZyhzZXR0aW5ncy5nYWxsZXJ5VGh1bWJTaXplID4gMCA/IHNldHRpbmdzLmdhbGxlcnlUaHVtYlNpemUgOiAoTnVtYmVyLmlzRmluaXRlKGNzc1NpemUpID8gY3NzU2l6ZSA6IDE1MCkpO1xuICAgIHpvb20uYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHRoaXMuYXBwbHlab29tKE51bWJlcih6b29tLnZhbHVlKSkpO1xuICAgIHpvb20uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICBzZXR0aW5ncy5nYWxsZXJ5VGh1bWJTaXplID0gTnVtYmVyKHpvb20udmFsdWUpO1xuICAgICAgdm9pZCB0aGlzLmhvc3Quc2F2ZVNldHRpbmdzKCk7XG4gICAgfSk7XG5cbiAgICAvLyBTdGF0dXMsIGdyaWQsIGZvb3RlclxuICAgIHRoaXMuc3RhdHVzID0gY29udGVudEVsLmNyZWF0ZURpdih7IGNsczogXCJjYW1lcmEtZ2FsbGVyeS1zdGF0dXNcIiB9KTtcbiAgICB0aGlzLmdyaWQgPSBjb250ZW50RWwuY3JlYXRlRGl2KHsgY2xzOiBcImNhbWVyYS1nYWxsZXJ5LWdyaWRcIiB9KTtcbiAgICBjb25zdCBmb290ZXIgPSBjb250ZW50RWwuY3JlYXRlRGl2KHsgY2xzOiBcImNhbWVyYS1nYWxsZXJ5LWZvb3RlclwiIH0pO1xuICAgIHRoaXMuZGVsZXRlQnV0dG9uID0gZm9vdGVyLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHsgdGV4dDogXCJEZWxldGVcIiwgY2xzOiBcImNhbWVyYS1nYWxsZXJ5LWRlbGV0ZVwiIH0pO1xuICAgIHRoaXMuZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB2b2lkIHRoaXMuZGVsZXRlU2VsZWN0ZWQoKSk7XG4gICAgdGhpcy5wcmV2aWV3QnV0dG9uID0gZm9vdGVyLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHsgdGV4dDogXCJQcmV2aWV3XCIsIGNsczogXCJjYW1lcmEtZ2FsbGVyeS1wcmV2aWV3XCIgfSk7XG4gICAgdGhpcy5wcmV2aWV3QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLnByZXZpZXdTZWxlY3RlZCgpKTtcbiAgICB0aGlzLnVzZUJ1dHRvbiA9IGZvb3Rlci5jcmVhdGVFbChcImJ1dHRvblwiLCB7IHRleHQ6IFwiVXNlIGl0XCIsIGNsczogXCJtb2QtY3RhXCIgfSk7XG4gICAgdGhpcy51c2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMudXNlU2VsZWN0ZWQoKSk7XG4gICAgdGhpcy5zZXRBY3Rpb25CdXR0b25zVmlzaWJsZShmYWxzZSk7XG5cbiAgICB0aGlzLmxvYWRGaWxlcygpO1xuICAgIHRoaXMucmVnaXN0ZXJWYXVsdEV2ZW50cygpO1xuICAgIHZvaWQgdGhpcy5yZWJ1aWxkKCk7XG4gIH1cblxuICBvbkNsb3NlKCkge1xuICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG4gICAgdGhpcy5yZW5kZXJJZCsrO1xuICAgIGlmICh0aGlzLnJlYnVpbGRUaW1lciAhPT0gbnVsbCkgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnJlYnVpbGRUaW1lcik7XG4gICAgaWYgKHRoaXMuc2VhcmNoVGltZXIgIT09IG51bGwpIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5zZWFyY2hUaW1lcik7XG4gICAgdGhpcy5yZWJ1aWxkVGltZXIgPSBudWxsO1xuICAgIHRoaXMuc2VhcmNoVGltZXIgPSBudWxsO1xuICAgIHRoaXMub2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKTtcbiAgICB0aGlzLm9ic2VydmVyID0gbnVsbDtcbiAgICBmb3IgKGNvbnN0IHJlZiBvZiB0aGlzLmV2ZW50UmVmcykgdGhpcy5hcHAudmF1bHQub2ZmcmVmKHJlZik7XG4gICAgdGhpcy5ldmVudFJlZnMgPSBbXTtcbiAgICB0aGlzLmNvbnRlbnRFbC5lbXB0eSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRTZWxlY3Q8VCBleHRlbmRzIHN0cmluZz4ocGFyZW50OiBIVE1MRWxlbWVudCwgb3B0aW9uczogUmVjb3JkPFQsIHN0cmluZz4sIHZhbHVlOiBULCBvbkNoYW5nZTogKHZhbHVlOiBUKSA9PiB2b2lkKSB7XG4gICAgY29uc3Qgc2VsZWN0ID0gcGFyZW50LmNyZWF0ZUVsKFwic2VsZWN0XCIsIHsgY2xzOiBcImRyb3Bkb3duXCIgfSk7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMob3B0aW9ucykgYXMgVFtdKSB7XG4gICAgICBzZWxlY3QuY3JlYXRlRWwoXCJvcHRpb25cIiwgeyB2YWx1ZToga2V5LCB0ZXh0OiBvcHRpb25zW2tleV0gfSk7XG4gICAgfVxuICAgIHNlbGVjdC52YWx1ZSA9IHZhbHVlO1xuICAgIHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IG9uQ2hhbmdlKHNlbGVjdC52YWx1ZSBhcyBUKSk7XG4gICAgcmV0dXJuIHNlbGVjdDtcbiAgfVxuXG4gIHByaXZhdGUgYXBwbHlab29tKHNpemU6IG51bWJlcikge1xuICAgIHRoaXMuY29udGVudEVsLnNldENzc1Byb3BzKHsgXCItLWNhbWVyYS1nYWxsZXJ5LXNpemVcIjogYCR7c2l6ZX1weGAgfSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHBlcnNpc3RBbmRSZWJ1aWxkKCkge1xuICAgIGF3YWl0IHRoaXMuaG9zdC5zYXZlU2V0dGluZ3MoKTtcbiAgICBhd2FpdCB0aGlzLnJlYnVpbGQoKTtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAvKiBMaXZlIHVwZGF0ZXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gIC8qKiBUaGUgY29uZmlndXJlZCBwaG90b3MgZm9sZGVyLCBvciBcIlwiIHdoZW4gbm9uZSBpcyBzZXQuICovXG4gIHByaXZhdGUgcGhvdG9zRm9sZGVyUGF0aCgpOiBzdHJpbmcge1xuICAgIGNvbnN0IHBhdGggPSBub3JtYWxpemVQYXRoKHRoaXMuaG9zdC5zZXR0aW5ncy5waG90b3NGb2xkZXIudHJpbSgpKTtcbiAgICByZXR1cm4gcGF0aCA9PT0gXCIvXCIgPyBcIlwiIDogcGF0aDtcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIGEgY2hhbmdlIGF0IHRoaXMgcGF0aCBjYW4gYWZmZWN0IHdoYXQgdGhlIGdhbGxlcnkgc2hvd3MuICovXG4gIHByaXZhdGUgaW5QaG90b3NGb2xkZXIocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuaG9zdC5zZXR0aW5ncy5nYWxsZXJ5U2NvcGUgPT09IFwidmF1bHRcIikgcmV0dXJuIHRydWU7XG4gICAgY29uc3QgZm9sZGVyID0gdGhpcy5waG90b3NGb2xkZXJQYXRoKCk7XG4gICAgcmV0dXJuIGZvbGRlciAhPT0gXCJcIiAmJiBwYXRoLnN0YXJ0c1dpdGgoYCR7Zm9sZGVyfS9gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFkcyB0aGUgaW1hZ2VzIHRvIHNob3cuIFdpdGggdGhlIGRlZmF1bHQgXCJQaG90b3MgZm9sZGVyXCIgc2NvcGUgb25seSB0aGF0IGZvbGRlciBpcyByZWFkO1xuICAgKiB0aGUgd2hvbGUgdmF1bHQgaXMgb25seSBsaXN0ZWQgd2hlbiB0aGUgdXNlciBjaG9vc2VzIHRoZSBcIldob2xlIHZhdWx0XCIgc2NvcGUuXG4gICAqL1xuICBwcml2YXRlIGxvYWRGaWxlcygpIHtcbiAgICBpZiAodGhpcy5ob3N0LnNldHRpbmdzLmdhbGxlcnlTY29wZSA9PT0gXCJ2YXVsdFwiKSB7XG4gICAgICB0aGlzLmZvbGRlck1pc3NpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuYWxsRmlsZXMgPSB0aGlzLmFwcC52YXVsdC5nZXRGaWxlcygpLmZpbHRlcihpc0ltYWdlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcGF0aCA9IHRoaXMucGhvdG9zRm9sZGVyUGF0aCgpO1xuICAgIGNvbnN0IGZvbGRlciA9IHBhdGggPyB0aGlzLmFwcC52YXVsdC5nZXRGb2xkZXJCeVBhdGgocGF0aCkgOiBudWxsO1xuICAgIHRoaXMuZm9sZGVyTWlzc2luZyA9ICFmb2xkZXI7XG4gICAgdGhpcy5hbGxGaWxlcyA9IGZvbGRlciA/IGNvbGxlY3RJbWFnZXMoZm9sZGVyKSA6IFtdO1xuICB9XG5cbiAgcHJpdmF0ZSByZWdpc3RlclZhdWx0RXZlbnRzKCkge1xuICAgIGNvbnN0IHZhdWx0ID0gdGhpcy5hcHAudmF1bHQ7XG4gICAgdGhpcy5ldmVudFJlZnMucHVzaChcbiAgICAgIC8vIE9ubHkgY2hhbmdlcyBpbnNpZGUgdGhlIHBob3RvcyBmb2xkZXIgbWF0dGVyIHRvIHRoZSBnYWxsZXJ5XG4gICAgICB2YXVsdC5vbihcImNyZWF0ZVwiLCAoZmlsZSkgPT4ge1xuICAgICAgICBpZiAoZmlsZSBpbnN0YW5jZW9mIFRGaWxlICYmIGlzSW1hZ2UoZmlsZSkgJiYgdGhpcy5pblBob3Rvc0ZvbGRlcihmaWxlLnBhdGgpKSB0aGlzLnNjaGVkdWxlUmVidWlsZCgpO1xuICAgICAgfSksXG4gICAgICB2YXVsdC5vbihcImRlbGV0ZVwiLCAoZmlsZSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5pblBob3Rvc0ZvbGRlcihmaWxlLnBhdGgpKSB0aGlzLnNjaGVkdWxlUmVidWlsZCgpO1xuICAgICAgfSksXG4gICAgICB2YXVsdC5vbihcInJlbmFtZVwiLCAoZmlsZSwgb2xkUGF0aCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuaW5QaG90b3NGb2xkZXIoZmlsZS5wYXRoKSAmJiAhdGhpcy5pblBob3Rvc0ZvbGRlcihvbGRQYXRoKSkgcmV0dXJuO1xuICAgICAgICB0aGlzLnJlbmFtZVNlbGVjdGVkKG9sZFBhdGgsIGZpbGUucGF0aCk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVSZWJ1aWxkKCk7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgLyoqIEtlZXBzIGEgcmVuYW1lZCBwaG90byBzZWxlY3RlZCwgaW4gdGhlIHNhbWUgc2VsZWN0aW9uIG9yZGVyLiAqL1xuICBwcml2YXRlIHJlbmFtZVNlbGVjdGVkKG9sZFBhdGg6IHN0cmluZywgbmV3UGF0aDogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLnNlbGVjdGVkLmhhcyhvbGRQYXRoKSkgcmV0dXJuO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBuZXcgU2V0KEFycmF5LmZyb20odGhpcy5zZWxlY3RlZCwgKHBhdGgpID0+IChwYXRoID09PSBvbGRQYXRoID8gbmV3UGF0aCA6IHBhdGgpKSk7XG4gIH1cblxuICAvKiogU2V2ZXJhbCBldmVudHMgb2Z0ZW4gYXJyaXZlIHRvZ2V0aGVyICh1cGxvYWRzLCBmb2xkZXIgbW92ZXMpLCBzbyB3YWl0IGJyaWVmbHkgYW5kIHJlYnVpbGQgb25jZS4gKi9cbiAgcHJpdmF0ZSBzY2hlZHVsZVJlYnVpbGQoKSB7XG4gICAgaWYgKHRoaXMucmVidWlsZFRpbWVyICE9PSBudWxsKSB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMucmVidWlsZFRpbWVyKTtcbiAgICB0aGlzLnJlYnVpbGRUaW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMucmVidWlsZFRpbWVyID0gbnVsbDtcbiAgICAgIGlmICghdGhpcy5vcGVuZWQpIHJldHVybjtcbiAgICAgIHRoaXMubG9hZEZpbGVzKCk7XG4gICAgICB2b2lkIHRoaXMucmVidWlsZCh0cnVlKTtcbiAgICB9LCAyMDApO1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gIC8qIEZpbHRlcmluZywgc29ydGluZywgcmVuZGVyaW5nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgcHJpdmF0ZSBjb21wdXRlVmlzaWJsZSgpOiBURmlsZVtdIHtcbiAgICBjb25zdCBzZXR0aW5ncyA9IHRoaXMuaG9zdC5zZXR0aW5ncztcbiAgICBjb25zdCBxdWVyeSA9IHRoaXMucXVlcnkudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuYWxsRmlsZXMuZmlsdGVyKChmaWxlKSA9PiAhcXVlcnkgfHwgZmlsZS5wYXRoLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnkpKTtcblxuICAgIHN3aXRjaCAoc2V0dGluZ3MuZ2FsbGVyeVNvcnQpIHtcbiAgICAgIGNhc2UgXCJvbGRlc3RcIjogZmlsZXMuc29ydCgoYSwgYikgPT4gYS5zdGF0Lm10aW1lIC0gYi5zdGF0Lm10aW1lKTsgYnJlYWs7XG4gICAgICBjYXNlIFwibmFtZVwiOiBmaWxlcy5zb3J0KChhLCBiKSA9PiBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUsIHVuZGVmaW5lZCwgeyBudW1lcmljOiB0cnVlIH0pKTsgYnJlYWs7XG4gICAgICBjYXNlIFwic2l6ZVwiOiBmaWxlcy5zb3J0KChhLCBiKSA9PiBiLnN0YXQuc2l6ZSAtIGEuc3RhdC5zaXplKTsgYnJlYWs7XG4gICAgICBkZWZhdWx0OiBmaWxlcy5zb3J0KChhLCBiKSA9PiBiLnN0YXQubXRpbWUgLSBhLnN0YXQubXRpbWUpO1xuICAgIH1cbiAgICByZXR1cm4gZmlsZXM7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHJlYnVpbGQoa2VlcFNjcm9sbCA9IGZhbHNlKSB7XG4gICAgaWYgKCF0aGlzLm9wZW5lZCkgcmV0dXJuO1xuICAgIGNvbnN0IHJ1biA9ICsrdGhpcy5yZW5kZXJJZDtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuY29tcHV0ZVZpc2libGUoKTtcbiAgICB0aGlzLnZpc2libGVGaWxlcyA9IGZpbGVzO1xuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuZ3JpZC5zY3JvbGxUb3A7XG5cbiAgICAvLyBOZXZlciBsZWF2ZSBoaWRkZW4gcGhvdG9zIHNlbGVjdGVkOiBcIlVzZSBpdFwiIGFuZCBcIkRlbGV0ZVwiIHdvdWxkIGFjdCBvbiB0aGluZ3MgeW91IGNhbid0IHNlZS5cbiAgICBjb25zdCB2aXNpYmxlUGF0aHMgPSBuZXcgU2V0KGZpbGVzLm1hcCgoZmlsZSkgPT4gZmlsZS5wYXRoKSk7XG4gICAgZm9yIChjb25zdCBwYXRoIG9mIEFycmF5LmZyb20odGhpcy5zZWxlY3RlZCkpIGlmICghdmlzaWJsZVBhdGhzLmhhcyhwYXRoKSkgdGhpcy5zZWxlY3RlZC5kZWxldGUocGF0aCk7XG5cbiAgICB0aGlzLm9ic2VydmVyPy5kaXNjb25uZWN0KCk7XG4gICAgdGhpcy5vYnNlcnZlciA9IHRoaXMuY3JlYXRlT2JzZXJ2ZXIoKTtcbiAgICB0aGlzLmdyaWQuZW1wdHkoKTtcbiAgICB0aGlzLml0ZW1FbHMuY2xlYXIoKTtcbiAgICB0aGlzLnVwZGF0ZVNlbGVjdGlvbigpO1xuICAgIHRoaXMudXBkYXRlU3RhdHVzKCk7XG5cbiAgICBpZiAoZmlsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLnJlbmRlckVtcHR5KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0dGluZ3MgPSB0aGlzLmhvc3Quc2V0dGluZ3M7XG4gICAgY29uc3QgZ3JvdXAgPSBzZXR0aW5ncy5nYWxsZXJ5R3JvdXBCeU1vbnRoICYmIChzZXR0aW5ncy5nYWxsZXJ5U29ydCA9PT0gXCJuZXdlc3RcIiB8fCBzZXR0aW5ncy5nYWxsZXJ5U29ydCA9PT0gXCJvbGRlc3RcIik7XG4gICAgbGV0IGxhc3RNb250aCA9IFwiXCI7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZmlsZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBpZiAocnVuICE9PSB0aGlzLnJlbmRlcklkIHx8ICF0aGlzLm9wZW5lZCkgcmV0dXJuO1xuICAgICAgY29uc3QgZmlsZSA9IGZpbGVzW2luZGV4XTtcbiAgICAgIGlmICghZmlsZSkgY29udGludWU7XG5cbiAgICAgIGlmIChncm91cCkge1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZmlsZS5zdGF0Lm10aW1lKTtcbiAgICAgICAgY29uc3Qga2V5ID0gYCR7ZGF0ZS5nZXRGdWxsWWVhcigpfS0ke2RhdGUuZ2V0TW9udGgoKX1gO1xuICAgICAgICBpZiAoa2V5ICE9PSBsYXN0TW9udGgpIHtcbiAgICAgICAgICBsYXN0TW9udGggPSBrZXk7XG4gICAgICAgICAgdGhpcy5ncmlkLmNyZWF0ZURpdih7XG4gICAgICAgICAgICBjbHM6IFwiY2FtZXJhLWdhbGxlcnktbW9udGhcIixcbiAgICAgICAgICAgIHRleHQ6IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKHVuZGVmaW5lZCwgeyBtb250aDogXCJsb25nXCIsIHllYXI6IFwibnVtZXJpY1wiIH0pLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY3JlYXRlSXRlbShmaWxlKTtcbiAgICAgIGlmICgoaW5kZXggKyAxKSAlIFJFTkRFUl9DSFVOSyA9PT0gMCkgYXdhaXQgbmV4dEZyYW1lKCk7XG4gICAgfVxuXG4gICAgaWYgKHJ1biA9PT0gdGhpcy5yZW5kZXJJZCkgdGhpcy5ncmlkLnNjcm9sbFRvcCA9IGtlZXBTY3JvbGwgPyBzY3JvbGxUb3AgOiAwO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVTdGF0dXMoKSB7XG4gICAgY29uc3Qgc2hvd24gPSB0aGlzLnZpc2libGVGaWxlcy5sZW5ndGg7XG4gICAgY29uc3QgdG90YWwgPSB0aGlzLmFsbEZpbGVzLmxlbmd0aDtcbiAgICB0aGlzLnN0YXR1cy5zZXRUZXh0KHNob3duID09PSB0b3RhbCA/IGAke3Nob3duLnRvTG9jYWxlU3RyaW5nKCl9IHBob3Rvc2AgOiBgJHtzaG93bi50b0xvY2FsZVN0cmluZygpfSBvZiAke3RvdGFsLnRvTG9jYWxlU3RyaW5nKCl9IHBob3Rvc2ApO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJFbXB0eSgpIHtcbiAgICBjb25zdCBlbXB0eSA9IHRoaXMuZ3JpZC5jcmVhdGVEaXYoeyBjbHM6IFwiY2FtZXJhLWdhbGxlcnktZW1wdHlcIiB9KTtcbiAgICBzZXRJY29uKGVtcHR5LmNyZWF0ZURpdigpLCBcImltYWdlLW9mZlwiKTtcbiAgICBjb25zdCBzZWFyY2hpbmcgPSB0aGlzLnF1ZXJ5LnRyaW0oKSAhPT0gXCJcIjtcbiAgICBsZXQgbWVzc2FnZSA9IFwiTm8gcGhvdG9zIHlldC5cIjtcbiAgICBpZiAoc2VhcmNoaW5nKSBtZXNzYWdlID0gXCJObyBwaG90b3MgbWF0Y2ggeW91ciBzZWFyY2guXCI7XG4gICAgZWxzZSBpZiAodGhpcy5ob3N0LnNldHRpbmdzLmdhbGxlcnlTY29wZSA9PT0gXCJmb2xkZXJcIiAmJiB0aGlzLnBob3Rvc0ZvbGRlclBhdGgoKSA9PT0gXCJcIikgbWVzc2FnZSA9IFwiU2V0IGEgcGhvdG9zIGZvbGRlciBpbiB0aGUgQ2FtZXJhIEVtYmVkIHNldHRpbmdzLlwiO1xuICAgIGVsc2UgaWYgKHRoaXMuZm9sZGVyTWlzc2luZykgbWVzc2FnZSA9IFwiVGhlIHBob3RvcyBmb2xkZXIgZG9lcyBub3QgZXhpc3QgeWV0LiBVcGxvYWQgYSBwaG90byB0byBjcmVhdGUgaXQuXCI7XG4gICAgZW1wdHkuY3JlYXRlRGl2KHsgdGV4dDogbWVzc2FnZSB9KTtcbiAgICBpZiAoIXNlYXJjaGluZyAmJiAodGhpcy5ob3N0LnNldHRpbmdzLmdhbGxlcnlTY29wZSA9PT0gXCJ2YXVsdFwiIHx8IHRoaXMucGhvdG9zRm9sZGVyUGF0aCgpICE9PSBcIlwiKSkge1xuICAgICAgY29uc3QgYnV0dG9uID0gZW1wdHkuY3JlYXRlRWwoXCJidXR0b25cIiwgeyBjbHM6IFwibW9kLWN0YVwiLCB0ZXh0OiBcIlVwbG9hZCBwaG90b3NcIiB9KTtcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdm9pZCB0aGlzLmFkZFBob3RvcyhcImdhbGxlcnlcIikpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBUaHVtYm5haWxzIG9ubHkgbG9hZCB3aGVuIHRoZXkgZ2V0IGNsb3NlIHRvIHRoZSB2aXNpYmxlIGFyZWEsIHNvIGJpZyBnYWxsZXJpZXMgc3RheSBmYXN0LiAqL1xuICBwcml2YXRlIGNyZWF0ZU9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHtcbiAgICByZXR1cm4gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgICAgKGVudHJpZXMpID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XG4gICAgICAgICAgaWYgKCFlbnRyeS5pc0ludGVyc2VjdGluZykgY29udGludWU7XG4gICAgICAgICAgdGhpcy5sb2FkZXJzLmdldChlbnRyeS50YXJnZXQpPy4oKTtcbiAgICAgICAgICB0aGlzLmxvYWRlcnMuZGVsZXRlKGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgdGhpcy5vYnNlcnZlcj8udW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7IHJvb3Q6IHRoaXMuZ3JpZCwgcm9vdE1hcmdpbjogXCI0MDBweFwiIH0sXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlSXRlbShmaWxlOiBURmlsZSkge1xuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmdyaWQuY3JlYXRlRGl2KHsgY2xzOiBcImNhbWVyYS1nYWxsZXJ5LWl0ZW1cIiwgYXR0cjogeyByb2xlOiBcImJ1dHRvblwiLCB0YWJpbmRleDogXCIwXCIgfSB9KTtcbiAgICBpdGVtLmRhdGFzZXQucGF0aCA9IGZpbGUucGF0aDtcbiAgICBjb25zdCBpbWFnZSA9IGl0ZW0uY3JlYXRlRWwoXCJpbWdcIiwgeyBjbHM6IFwiY2FtZXJhLWdhbGxlcnktdGh1bWJuYWlsXCIgfSk7XG4gICAgaW1hZ2UuYWx0ID0gZmlsZS5uYW1lO1xuICAgIGltYWdlLmRlY29kaW5nID0gXCJhc3luY1wiO1xuICAgIGltYWdlLmRyYWdnYWJsZSA9IGZhbHNlOyAvLyB0aGUgd2hvbGUgdGlsZSBpcyB0aGUgZHJhZyBoYW5kbGUsIG5vdCB0aGUgYmFyZSA8aW1nPlxuICAgIGNvbnN0IG1hcmtMb2FkZWQgPSAoKSA9PiBpdGVtLmFkZENsYXNzKFwiaXMtbG9hZGVkXCIpO1xuICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIG1hcmtMb2FkZWQpO1xuICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCBtYXJrTG9hZGVkKTtcbiAgICBjb25zdCBiYWRnZSA9IGl0ZW0uY3JlYXRlRGl2KHsgY2xzOiBcImNhbWVyYS1nYWxsZXJ5LWJhZGdlXCIgfSk7XG4gICAgaXRlbS5jcmVhdGVEaXYoeyBjbHM6IFwiY2FtZXJhLWdhbGxlcnktbmFtZVwiLCB0ZXh0OiBmaWxlLm5hbWUgfSk7XG5cbiAgICB0aGlzLmxvYWRlcnMuc2V0KGl0ZW0sICgpID0+IHsgaW1hZ2Uuc3JjID0gdGhpcy5hcHAudmF1bHQuZ2V0UmVzb3VyY2VQYXRoKGZpbGUpOyB9KTtcbiAgICB0aGlzLm9ic2VydmVyPy5vYnNlcnZlKGl0ZW0pO1xuXG4gICAgdGhpcy5pdGVtRWxzLnNldChmaWxlLnBhdGgsIHsgaXRlbSwgYmFkZ2UgfSk7XG4gICAgdGhpcy5wYWludEl0ZW0oZmlsZS5wYXRoLCB0aGlzLmdldFNlbGVjdGlvbk51bWJlcihmaWxlLnBhdGgpKTtcblxuICAgIC8vIENsaWNrIGFuZCBrZXlib2FyZFxuICAgIGxldCBsb25nUHJlc3NlZCA9IGZhbHNlO1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmIChsb25nUHJlc3NlZCkgeyBsb25nUHJlc3NlZCA9IGZhbHNlOyByZXR1cm47IH0gLy8gdGhlIGxvbmcgcHJlc3MgYWxyZWFkeSBvcGVuZWQgdGhlIG1lbnVcbiAgICAgIHRoaXMudG9nZ2xlU2VsZWN0aW9uKGZpbGUucGF0aCk7XG4gICAgfSk7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIiB8fCBldmVudC5rZXkgPT09IFwiIFwiKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMudG9nZ2xlU2VsZWN0aW9uKGZpbGUucGF0aCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBSaWdodC1jbGljayAoZGVza3RvcCkuIFRoZSBDb250ZXh0TWVudSBrZXkgYW5kIFNoaWZ0K0YxMCBhbHNvIGZpcmUgdGhpcyBldmVudC5cbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAvLyBBIHRvdWNoIGxvbmctcHJlc3MgY2FuIGZpcmUgYm90aCBvdXIgdGltZXIgYW5kIHRoaXMgZXZlbnQ6IG9ubHkgb3BlbiBvbmUgbWVudS5cbiAgICAgIGlmIChEYXRlLm5vdygpIC0gdGhpcy5sYXN0TWVudVRpbWUgPCA4MDApIHJldHVybjtcbiAgICAgIHRoaXMub3BlbkNvbnRleHRNZW51KGZpbGUucGF0aCwgKG1lbnUpID0+IG1lbnUuc2hvd0F0TW91c2VFdmVudChldmVudCkpO1xuICAgIH0pO1xuXG4gICAgLy8gTG9uZy1wcmVzcyAodG91Y2gpXG4gICAgbGV0IHByZXNzVGltZXI6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICAgIGNvbnN0IGNhbmNlbFByZXNzID0gKCkgPT4ge1xuICAgICAgaWYgKHByZXNzVGltZXIgIT09IG51bGwpIHdpbmRvdy5jbGVhclRpbWVvdXQocHJlc3NUaW1lcik7XG4gICAgICBwcmVzc1RpbWVyID0gbnVsbDtcbiAgICB9O1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBsb25nUHJlc3NlZCA9IGZhbHNlO1xuICAgICAgY29uc3QgdG91Y2ggPSBldmVudC50b3VjaGVzWzBdO1xuICAgICAgaWYgKCF0b3VjaCkgcmV0dXJuO1xuICAgICAgY29uc3QgeyBjbGllbnRYOiB4LCBjbGllbnRZOiB5IH0gPSB0b3VjaDtcbiAgICAgIGNhbmNlbFByZXNzKCk7XG4gICAgICBwcmVzc1RpbWVyID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBwcmVzc1RpbWVyID0gbnVsbDtcbiAgICAgICAgbG9uZ1ByZXNzZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm9wZW5Db250ZXh0TWVudShmaWxlLnBhdGgsIChtZW51KSA9PiBtZW51LnNob3dBdFBvc2l0aW9uKHsgeCwgeSB9KSk7XG4gICAgICB9LCBMT05HX1BSRVNTX01TKTtcbiAgICB9LCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIGNhbmNlbFByZXNzLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgY2FuY2VsUHJlc3MsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGNhbmNlbFwiLCBjYW5jZWxQcmVzcywgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICAgIGlmIChQbGF0Zm9ybS5pc0Rlc2t0b3ApIHRoaXMuc2V0dXBJdGVtRHJhZyhpdGVtLCBmaWxlKTtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAvKiBEcmFnIGFuZCBkcm9wICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gIC8qKiBEcm9wIGltYWdlIGZpbGVzIGZyb20gdGhlIE9TIG9udG8gdGhlIGdhbGxlcnk6IGVhY2ggb25lIGlzIHNhdmVkIGFzIGEgY29weSB0aHJvdWdoIHRoZSBzaGFyZWQgcGlwZWxpbmUuICovXG4gIHByaXZhdGUgc2V0dXBEcm9wVGFyZ2V0KCkge1xuICAgIGlmICghUGxhdGZvcm0uaXNEZXNrdG9wKSByZXR1cm47XG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5jb250ZW50RWw7XG5cbiAgICBjb25zdCBvdmVybGF5ID0gdGFyZ2V0LmNyZWF0ZURpdih7IGNsczogXCJjYW1lcmEtZ2FsbGVyeS1kcm9wLW92ZXJsYXlcIiB9KTtcbiAgICBzZXRJY29uKG92ZXJsYXkuY3JlYXRlRGl2KCksIFwidXBsb2FkXCIpO1xuICAgIG92ZXJsYXkuY3JlYXRlRGl2KHsgdGV4dDogXCJEcm9wIHBob3RvcyB0byBhZGQgdG8gZ2FsbGVyeVwiIH0pO1xuXG4gICAgLy8gT25seSByZWFjdCB0byByZWFsIGZpbGVzLCBub3QgdG8gdGV4dCBvciBsaW5rcyBkcmFnZ2VkIGFyb3VuZCBpbnNpZGUgT2JzaWRpYW5cbiAgICBjb25zdCBoYXNGaWxlcyA9IChldmVudDogRHJhZ0V2ZW50KSA9PiBBcnJheS5mcm9tKGV2ZW50LmRhdGFUcmFuc2Zlcj8udHlwZXMgPz8gW10pLmluY2x1ZGVzKFwiRmlsZXNcIik7XG5cbiAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbnRlclwiLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmICghaGFzRmlsZXMoZXZlbnQpKSByZXR1cm47XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5kcmFnRGVwdGgrKztcbiAgICAgIHRhcmdldC5hZGRDbGFzcyhcImlzLWRyYWdvdmVyXCIpO1xuICAgIH0pO1xuICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWhhc0ZpbGVzKGV2ZW50KSkgcmV0dXJuO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChldmVudC5kYXRhVHJhbnNmZXIpIGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gXCJjb3B5XCI7XG4gICAgfSk7XG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnbGVhdmVcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWhhc0ZpbGVzKGV2ZW50KSkgcmV0dXJuO1xuICAgICAgLy8gZHJhZ2VudGVyL2RyYWdsZWF2ZSBhbHNvIGZpcmUgZm9yIGNoaWxkIGVsZW1lbnRzLCBzbyBjb3VudCB0aGVtXG4gICAgICB0aGlzLmRyYWdEZXB0aCA9IE1hdGgubWF4KDAsIHRoaXMuZHJhZ0RlcHRoIC0gMSk7XG4gICAgICBpZiAodGhpcy5kcmFnRGVwdGggPT09IDApIHRhcmdldC5yZW1vdmVDbGFzcyhcImlzLWRyYWdvdmVyXCIpO1xuICAgIH0pO1xuICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmICghaGFzRmlsZXMoZXZlbnQpKSByZXR1cm47XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IC8vIGtlZXAgT2JzaWRpYW4gZnJvbSBhbHNvIGltcG9ydGluZyB0aGUgZmlsZXMgYXMgYXR0YWNobWVudHNcbiAgICAgIHRoaXMuZHJhZ0RlcHRoID0gMDtcbiAgICAgIHRhcmdldC5yZW1vdmVDbGFzcyhcImlzLWRyYWdvdmVyXCIpO1xuICAgICAgdm9pZCB0aGlzLmhhbmRsZURyb3BwZWRGaWxlcyhBcnJheS5mcm9tKGV2ZW50LmRhdGFUcmFuc2Zlcj8uZmlsZXMgPz8gW10pKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgaGFuZGxlRHJvcHBlZEZpbGVzKGRyb3BwZWQ6IEZpbGVbXSkge1xuICAgIGNvbnN0IGltYWdlcyA9IGRyb3BwZWQuZmlsdGVyKGlzSW1hZ2VGaWxlKTtcbiAgICBjb25zdCBza2lwcGVkID0gZHJvcHBlZC5sZW5ndGggLSBpbWFnZXMubGVuZ3RoO1xuICAgIGlmIChza2lwcGVkID4gMCkgbmV3IE5vdGljZShgU2tpcHBlZCAke3NraXBwZWR9IG5vbi1pbWFnZSBmaWxlJHtza2lwcGVkID09PSAxID8gXCJcIiA6IFwic1wifS5gKTtcbiAgICBpZiAoaW1hZ2VzLmxlbmd0aCA9PT0gMCB8fCAhdGhpcy5vcGVuZWQpIHJldHVybjtcblxuICAgIC8vIFNhbWUgcGlwZWxpbmUgYXMgZXZlcnkgb3RoZXIgdXBsb2FkIChmb2xkZXIsIG1vbnRoIGZvbGRlcnMsIGNvbXByZXNzaW9uLCBuYW1pbmcpLlxuICAgIC8vIFRoZSBuZXcgcGhvdG9zIGFwcGVhciB0aHJvdWdoIHRoZSB2YXVsdCBcImNyZWF0ZVwiIGV2ZW50cy5cbiAgICBjb25zdCBzYXZlZCA9IGF3YWl0IHRoaXMuc2F2ZUZpbGVzKGltYWdlcyk7XG4gICAgaWYgKHNhdmVkLmxlbmd0aCA+IDApIG5ldyBOb3RpY2UoYEFkZGVkICR7c2F2ZWQubGVuZ3RofSBwaG90byR7c2F2ZWQubGVuZ3RoID09PSAxID8gXCJcIiA6IFwic1wifSB0byBnYWxsZXJ5LmApO1xuICB9XG5cbiAgLyoqIFBhdGggdXNlZCB0byBidWlsZCBsaW5rcyB3aGVuIGRyYWdnaW5nOiB0aGUgbm90ZSB0aGUgdXNlciB3YXMgbGFzdCB3b3JraW5nIGluLiAqL1xuICBwcml2YXRlIGxpbmtTb3VyY2VQYXRoKCk6IHN0cmluZyB7XG4gICAgY29uc3QgdmlldyA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRNb3N0UmVjZW50TGVhZigpPy52aWV3O1xuICAgIGlmICh2aWV3IGluc3RhbmNlb2YgTWFya2Rvd25WaWV3KSByZXR1cm4gdmlldy5maWxlPy5wYXRoID8/IFwiXCI7XG4gICAgcmV0dXJuIHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVGaWxlKCk/LnBhdGggPz8gXCJcIjtcbiAgfVxuXG4gIC8qKiBEcmFnIGEgdGh1bWJuYWlsIChvciB0aGUgd2hvbGUgc2VsZWN0aW9uKSBpbnRvIGEgbm90ZTogZHJvcHMgZW1iZWQgbGlua3MgYXMgdGV4dCBhdCB0aGUgY3Vyc29yLiAqL1xuICBwcml2YXRlIHNldHVwSXRlbURyYWcoaXRlbTogSFRNTEVsZW1lbnQsIGZpbGU6IFRGaWxlKSB7XG4gICAgaXRlbS5kcmFnZ2FibGUgPSB0cnVlO1xuXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgZGF0YVRyYW5zZmVyID0gZXZlbnQuZGF0YVRyYW5zZmVyO1xuICAgICAgaWYgKCFkYXRhVHJhbnNmZXIpIHJldHVybjtcblxuICAgICAgLy8gRHJhZ2dpbmcgYSBzZWxlY3RlZCBwaG90byBkcmFncyB0aGUgd2hvbGUgc2VsZWN0aW9uOyBvdGhlcndpc2UganVzdCB0aGlzIG9uZVxuICAgICAgY29uc3QgcGF0aHMgPSB0aGlzLnNlbGVjdGVkLmhhcyhmaWxlLnBhdGgpID8gQXJyYXkuZnJvbSh0aGlzLnNlbGVjdGVkKSA6IFtmaWxlLnBhdGhdO1xuICAgICAgY29uc3QgZmlsZXMgPSBwYXRoc1xuICAgICAgICAubWFwKChwYXRoKSA9PiB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgocGF0aCkpXG4gICAgICAgIC5maWx0ZXIoKGVudHJ5KTogZW50cnkgaXMgVEZpbGUgPT4gZW50cnkgaW5zdGFuY2VvZiBURmlsZSk7XG4gICAgICBpZiAoZmlsZXMubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgICAgIGNvbnN0IHNvdXJjZSA9IHRoaXMubGlua1NvdXJjZVBhdGgoKTtcbiAgICAgIGNvbnN0IHRleHQgPSBmaWxlcy5tYXAoKGVudHJ5KSA9PiBgISR7dGhpcy5hcHAuZmlsZU1hbmFnZXIuZ2VuZXJhdGVNYXJrZG93bkxpbmsoZW50cnksIHNvdXJjZSl9YCkuam9pbihcIlxcblwiKTtcbiAgICAgIGRhdGFUcmFuc2Zlci5zZXREYXRhKFwidGV4dC9wbGFpblwiLCB0ZXh0KTtcbiAgICAgIGRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gXCJjb3B5XCI7XG5cbiAgICAgIGlmIChmaWxlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy5jb250ZW50RWwuY3JlYXRlRGl2KHsgY2xzOiBcImNhbWVyYS1nYWxsZXJ5LWRyYWctaW1hZ2VcIiwgdGV4dDogYCR7ZmlsZXMubGVuZ3RofSBwaG90b3NgIH0pO1xuICAgICAgICBkYXRhVHJhbnNmZXIuc2V0RHJhZ0ltYWdlKGxhYmVsLCAwLCAwKTtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gbGFiZWwucmVtb3ZlKCksIDApO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGNvbnN0IHBhdGggb2YgcGF0aHMpIHRoaXMuaXRlbUVscy5nZXQocGF0aCk/Lml0ZW0uYWRkQ2xhc3MoXCJpcy1kcmFnZ2luZ1wiKTtcbiAgICB9KTtcblxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbmRcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5ncmlkLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaXMtZHJhZ2dpbmdcIikuZm9yRWFjaCgoZWwpID0+IGVsLnJlbW92ZUNsYXNzKFwiaXMtZHJhZ2dpbmdcIikpO1xuICAgIH0pO1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gIC8qIFNlbGVjdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgcHJpdmF0ZSB0b2dnbGVTZWxlY3Rpb24ocGF0aDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWQuaGFzKHBhdGgpKSB0aGlzLnNlbGVjdGVkLmRlbGV0ZShwYXRoKTsgZWxzZSB0aGlzLnNlbGVjdGVkLmFkZChwYXRoKTtcbiAgICB0aGlzLnVwZGF0ZVNlbGVjdGlvbihwYXRoKTtcbiAgfVxuXG4gIC8qKiBSZXBsYWNlcyB0aGUgd2hvbGUgc2VsZWN0aW9uIGFuZCByZXBhaW50cyBldmVyeXRoaW5nIHRoYXQgY2hhbmdlZC4gKi9cbiAgcHJpdmF0ZSBzZXRTZWxlY3Rpb24ocGF0aHM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgcHJldmlvdXMgPSBBcnJheS5mcm9tKHRoaXMuc2VsZWN0ZWQpO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBuZXcgU2V0KHBhdGhzKTtcbiAgICBmb3IgKGNvbnN0IHBhdGggb2YgcHJldmlvdXMpIGlmICghdGhpcy5zZWxlY3RlZC5oYXMocGF0aCkpIHRoaXMucGFpbnRJdGVtKHBhdGgsIDApO1xuICAgIHRoaXMudXBkYXRlU2VsZWN0aW9uKCk7XG4gIH1cblxuICBwcml2YXRlIHNlbGVjdGVkRmlsZXMoKTogVEZpbGVbXSB7XG4gICAgY29uc3QgZmlsZXM6IFRGaWxlW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IHBhdGggb2YgdGhpcy5zZWxlY3RlZCkge1xuICAgICAgY29uc3QgZmlsZSA9IHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChwYXRoKTtcbiAgICAgIGlmIChmaWxlIGluc3RhbmNlb2YgVEZpbGUpIGZpbGVzLnB1c2goZmlsZSk7XG4gICAgfVxuICAgIHJldHVybiBmaWxlcztcbiAgfVxuXG4gIC8qKiBEcmF3cyBvbmUgaXRlbSdzIHNlbGVjdGVkIHN0YXRlIGFuZCBiYWRnZSBudW1iZXIgKDAgPSBub3Qgc2VsZWN0ZWQpLiAqL1xuICBwcml2YXRlIHBhaW50SXRlbShwYXRoOiBzdHJpbmcsIG51bWJlcjogbnVtYmVyKSB7XG4gICAgY29uc3QgcmVmcyA9IHRoaXMuaXRlbUVscy5nZXQocGF0aCk7XG4gICAgaWYgKCFyZWZzKSByZXR1cm47XG4gICAgcmVmcy5pdGVtLnRvZ2dsZUNsYXNzKFwiaXMtc2VsZWN0ZWRcIiwgbnVtYmVyID4gMCk7XG4gICAgcmVmcy5iYWRnZS5zZXRUZXh0KG51bWJlciA+IDAgPyBTdHJpbmcobnVtYmVyKSA6IFwiXCIpO1xuICB9XG5cbiAgLyoqIFJlbnVtYmVycyBldmVyeSBzZWxlY3RlZCBpdGVtLCBzbyBiYWRnZXMgbmV2ZXIgZ28gc3RhbGUgYWZ0ZXIgYSBkZXNlbGVjdC4gKi9cbiAgcHJpdmF0ZSByZWZyZXNoQmFkZ2VzKGNoYW5nZWRQYXRoPzogc3RyaW5nKSB7XG4gICAgbGV0IG51bWJlciA9IDA7XG4gICAgZm9yIChjb25zdCBwYXRoIG9mIHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgIG51bWJlcisrO1xuICAgICAgdGhpcy5wYWludEl0ZW0ocGF0aCwgbnVtYmVyKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZWRQYXRoICYmICF0aGlzLnNlbGVjdGVkLmhhcyhjaGFuZ2VkUGF0aCkpIHRoaXMucGFpbnRJdGVtKGNoYW5nZWRQYXRoLCAwKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2VsZWN0aW9uTnVtYmVyKHBhdGg6IHN0cmluZyk6IG51bWJlciB7XG4gICAgbGV0IG51bWJlciA9IDA7XG4gICAgZm9yIChjb25zdCBzZWxlY3RlZFBhdGggb2YgdGhpcy5zZWxlY3RlZCkgeyBudW1iZXIrKzsgaWYgKHNlbGVjdGVkUGF0aCA9PT0gcGF0aCkgcmV0dXJuIG51bWJlcjsgfVxuICAgIHJldHVybiAwO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRBY3Rpb25CdXR0b25zVmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKSB7XG4gICAgdGhpcy51c2VCdXR0b24udG9nZ2xlVmlzaWJpbGl0eSh2aXNpYmxlKTtcbiAgICB0aGlzLmRlbGV0ZUJ1dHRvbi50b2dnbGVWaXNpYmlsaXR5KHZpc2libGUpO1xuICAgIHRoaXMucHJldmlld0J1dHRvbi50b2dnbGVWaXNpYmlsaXR5KHRoaXMuc2VsZWN0ZWQuc2l6ZSA9PT0gMSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVNlbGVjdGlvbihjaGFuZ2VkUGF0aD86IHN0cmluZykge1xuICAgIGNvbnN0IGNvdW50ID0gdGhpcy5zZWxlY3RlZC5zaXplO1xuICAgIHRoaXMuc2VsZWN0aW9uTGFiZWwuc2V0VGV4dChjb3VudCA9PT0gMCA/IFwiU2VsZWN0IHBob3Rvc1wiIDogYCR7Y291bnR9IHNlbGVjdGVkYCk7XG4gICAgdGhpcy5zZXRBY3Rpb25CdXR0b25zVmlzaWJsZShjb3VudCA+IDApO1xuICAgIHRoaXMucmVmcmVzaEJhZGdlcyhjaGFuZ2VkUGF0aCk7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgLyogUmlnaHQtY2xpY2sgbWVudSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICBwcml2YXRlIG9wZW5Db250ZXh0TWVudShwYXRoOiBzdHJpbmcsIHNob3c6IChtZW51OiBNZW51KSA9PiB2b2lkKSB7XG4gICAgLy8gUmlnaHQtY2xpY2tpbmcgYSBwaG90byBvdXRzaWRlIHRoZSBzZWxlY3Rpb24gc2VsZWN0cyBqdXN0IHRoYXQgcGhvdG8uXG4gICAgaWYgKCF0aGlzLnNlbGVjdGVkLmhhcyhwYXRoKSkgdGhpcy5zZXRTZWxlY3Rpb24oW3BhdGhdKTtcblxuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5zZWxlY3RlZEZpbGVzKCk7XG4gICAgY29uc3QgY291bnQgPSBmaWxlcy5sZW5ndGg7XG4gICAgY29uc3Qgc2luZ2xlID0gY291bnQgPT09IDEgPyBmaWxlc1swXSA6IHVuZGVmaW5lZDtcbiAgICBpZiAoY291bnQgPT09IDApIHJldHVybjtcblxuICAgIHRoaXMubGFzdE1lbnVUaW1lID0gRGF0ZS5ub3coKTtcbiAgICBjb25zdCBtZW51ID0gbmV3IE1lbnUoKTtcblxuICAgIC8vIEluc2VydFxuICAgIG1lbnUuYWRkSXRlbSgoaXRlbSkgPT4gaXRlbVxuICAgICAgLnNldFRpdGxlKGNvdW50ID4gMSA/IGBVc2UgJHtjb3VudH0gcGhvdG9zYCA6IFwiVXNlIGl0XCIpXG4gICAgICAuc2V0SWNvbihcImNvcm5lci1kb3duLWxlZnRcIilcbiAgICAgIC5vbkNsaWNrKCgpID0+IHRoaXMudXNlU2VsZWN0ZWQoKSkpO1xuXG4gICAgZm9yIChjb25zdCB3aWR0aCBvZiBXSURUSF9DSE9JQ0VTKSB7XG4gICAgICBtZW51LmFkZEl0ZW0oKGl0ZW0pID0+IGl0ZW1cbiAgICAgICAgLnNldFRpdGxlKGBJbnNlcnQgYXQgJHt3aWR0aH0gcHhgKVxuICAgICAgICAuc2V0SWNvbihcIm1vdmUtaG9yaXpvbnRhbFwiKVxuICAgICAgICAub25DbGljaygoKSA9PiB0aGlzLnVzZVNlbGVjdGVkKHdpZHRoKSkpO1xuICAgIH1cblxuICAgIGlmIChzaW5nbGUpIHtcbiAgICAgIG1lbnUuYWRkSXRlbSgoaXRlbSkgPT4gaXRlbVxuICAgICAgICAuc2V0VGl0bGUoXCJQcmV2aWV3XCIpXG4gICAgICAgIC5zZXRJY29uKFwiZXllXCIpXG4gICAgICAgIC5vbkNsaWNrKCgpID0+IHRoaXMucHJldmlld0ZpbGUoc2luZ2xlKSkpO1xuICAgIH1cblxuICAgIC8vIFVzYWdlcyAoc2luZ2xlIHBob3RvIG9ubHkpXG4gICAgaWYgKHNpbmdsZSkge1xuICAgICAgbWVudS5hZGRTZXBhcmF0b3IoKTtcbiAgICAgIGNvbnN0IHVzYWdlcyA9IGdldFVzYWdlcyh0aGlzLmFwcCwgc2luZ2xlKTtcbiAgICAgIGlmICh1c2FnZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIG1lbnUuYWRkSXRlbSgoaXRlbSkgPT4gaXRlbS5zZXRUaXRsZShcIk5vdCB1c2VkIGluIGFueSBub3RlXCIpLnNldEljb24oXCJmaWxlLXhcIikuc2V0RGlzYWJsZWQodHJ1ZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVudS5hZGRJdGVtKChpdGVtKSA9PiBpdGVtXG4gICAgICAgICAgLnNldFRpdGxlKGBVc2VkIGluICR7dXNhZ2VzLmxlbmd0aH0gbm90ZSR7dXNhZ2VzLmxlbmd0aCA9PT0gMSA/IFwiXCIgOiBcInNcIn1gKVxuICAgICAgICAgIC5zZXRJY29uKFwibGlua1wiKVxuICAgICAgICAgIC5zZXREaXNhYmxlZCh0cnVlKSk7XG4gICAgICAgIGZvciAoY29uc3Qgbm90ZSBvZiB1c2FnZXMuc2xpY2UoMCwgTUFYX01FTlVfVVNBR0VTKSkge1xuICAgICAgICAgIG1lbnUuYWRkSXRlbSgoaXRlbSkgPT4gaXRlbVxuICAgICAgICAgICAgLnNldFRpdGxlKG5vdGUuYmFzZW5hbWUpXG4gICAgICAgICAgICAuc2V0SWNvbihcImZpbGUtdGV4dFwiKVxuICAgICAgICAgICAgLm9uQ2xpY2soKCkgPT4gdm9pZCB0aGlzLmFwcC53b3Jrc3BhY2Uub3BlbkxpbmtUZXh0KG5vdGUucGF0aCwgXCJcIiwgZmFsc2UpKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVzYWdlcy5sZW5ndGggPiBNQVhfTUVOVV9VU0FHRVMpIHtcbiAgICAgICAgICBtZW51LmFkZEl0ZW0oKGl0ZW0pID0+IGl0ZW1cbiAgICAgICAgICAgIC5zZXRUaXRsZShgU2hvdyBhbGwgJHt1c2FnZXMubGVuZ3RofSB1c2FnZXNcdTIwMjZgKVxuICAgICAgICAgICAgLnNldEljb24oXCJsaXN0XCIpXG4gICAgICAgICAgICAub25DbGljaygoKSA9PiB0aGlzLnByZXZpZXdGaWxlKHNpbmdsZSkpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEZpbGUgYWN0aW9ucyAoc2luZ2xlIHBob3RvIG9ubHkpXG4gICAgaWYgKHNpbmdsZSkge1xuICAgICAgbWVudS5hZGRTZXBhcmF0b3IoKTtcbiAgICAgIG1lbnUuYWRkSXRlbSgoaXRlbSkgPT4gaXRlbVxuICAgICAgICAuc2V0VGl0bGUoXCJPcGVuIGluIG5ldyB0YWJcIilcbiAgICAgICAgLnNldEljb24oXCJmaWxlLXBsdXNcIilcbiAgICAgICAgLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgIHZvaWQgdGhpcy5hcHAud29ya3NwYWNlLmdldExlYWYoXCJ0YWJcIikub3BlbkZpbGUoc2luZ2xlKTtcbiAgICAgICAgICBpZiAodGhpcy5jbG9zZU9uQ2hvb3NlKSB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH0pKTtcbiAgICAgIG1lbnUuYWRkSXRlbSgoaXRlbSkgPT4gaXRlbVxuICAgICAgICAuc2V0VGl0bGUoXCJSZW5hbWVcdTIwMjZcIilcbiAgICAgICAgLnNldEljb24oXCJwZW5jaWxcIilcbiAgICAgICAgLm9uQ2xpY2soKCkgPT4gdGhpcy5yZW5hbWVGaWxlKHNpbmdsZSkpKTtcblxuICAgICAgY29uc3Qgc2hvd0luRm9sZGVyID0gKHRoaXMuYXBwIGFzIHVua25vd24gYXMgeyBzaG93SW5Gb2xkZXI/OiAocGF0aDogc3RyaW5nKSA9PiB2b2lkIH0pLnNob3dJbkZvbGRlcjtcbiAgICAgIGlmIChQbGF0Zm9ybS5pc0Rlc2t0b3BBcHAgJiYgdHlwZW9mIHNob3dJbkZvbGRlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIG1lbnUuYWRkSXRlbSgoaXRlbSkgPT4gaXRlbVxuICAgICAgICAgIC5zZXRUaXRsZShcIlNob3cgaW4gc3lzdGVtIGV4cGxvcmVyXCIpXG4gICAgICAgICAgLnNldEljb24oXCJmb2xkZXItb3BlblwiKVxuICAgICAgICAgIC5vbkNsaWNrKCgpID0+IHNob3dJbkZvbGRlci5jYWxsKHRoaXMuYXBwLCBzaW5nbGUucGF0aCkpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTZWxlY3Rpb25cbiAgICBtZW51LmFkZFNlcGFyYXRvcigpO1xuICAgIG1lbnUuYWRkSXRlbSgoaXRlbSkgPT4gaXRlbVxuICAgICAgLnNldFRpdGxlKFwiU2VsZWN0IGFsbFwiKVxuICAgICAgLnNldEljb24oXCJjaGVjay1zcXVhcmVcIilcbiAgICAgIC5vbkNsaWNrKCgpID0+IHRoaXMuc2V0U2VsZWN0aW9uKHRoaXMudmlzaWJsZUZpbGVzLm1hcCgoZmlsZSkgPT4gZmlsZS5wYXRoKSkpKTtcbiAgICBtZW51LmFkZEl0ZW0oKGl0ZW0pID0+IGl0ZW1cbiAgICAgIC5zZXRUaXRsZShcIkNsZWFyIHNlbGVjdGlvblwiKVxuICAgICAgLnNldEljb24oXCJzcXVhcmVcIilcbiAgICAgIC5vbkNsaWNrKCgpID0+IHRoaXMuc2V0U2VsZWN0aW9uKFtdKSkpO1xuXG4gICAgLy8gRGVsZXRlXG4gICAgbWVudS5hZGRTZXBhcmF0b3IoKTtcbiAgICBtZW51LmFkZEl0ZW0oKGl0ZW0pID0+IGl0ZW1cbiAgICAgIC5zZXRUaXRsZShjb3VudCA+IDEgPyBgRGVsZXRlICR7Y291bnR9IHBob3Rvc2AgOiBcIkRlbGV0ZVwiKVxuICAgICAgLnNldEljb24oXCJ0cmFzaC0yXCIpXG4gICAgICAuc2V0V2FybmluZyh0cnVlKVxuICAgICAgLm9uQ2xpY2soKCkgPT4gdm9pZCB0aGlzLmRlbGV0ZUZpbGVzKGZpbGVzLm1hcCgoZmlsZSkgPT4gZmlsZS5wYXRoKSkpKTtcblxuICAgIHNob3cobWVudSk7XG4gIH1cblxuICBwcml2YXRlIHJlbmFtZUZpbGUoZmlsZTogVEZpbGUpIHtcbiAgICBuZXcgUmVuYW1lTW9kYWwodGhpcy5hcHAsIGZpbGUsIChuZXdCYXNlTmFtZSkgPT4ge1xuICAgICAgY29uc3QgcGFyZW50ID0gZmlsZS5wYXJlbnQgJiYgIWZpbGUucGFyZW50LmlzUm9vdCgpID8gYCR7ZmlsZS5wYXJlbnQucGF0aH0vYCA6IFwiXCI7XG4gICAgICBjb25zdCBuZXdQYXRoID0gbm9ybWFsaXplUGF0aChgJHtwYXJlbnR9JHtuZXdCYXNlTmFtZX0uJHtmaWxlLmV4dGVuc2lvbn1gKTtcbiAgICAgIGlmIChuZXdQYXRoID09PSBmaWxlLnBhdGgpIHJldHVybjtcbiAgICAgIGlmICh0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgobmV3UGF0aCkpIHtcbiAgICAgICAgbmV3IE5vdGljZShgQSBmaWxlIG5hbWVkIFwiJHtuZXdCYXNlTmFtZX0uJHtmaWxlLmV4dGVuc2lvbn1cIiBhbHJlYWR5IGV4aXN0cy5gKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gZmlsZU1hbmFnZXIucmVuYW1lRmlsZSBhbHNvIHVwZGF0ZXMgZXZlcnkgbGluayB0aGF0IHBvaW50cyBhdCB0aGUgcGhvdG9cbiAgICAgIHZvaWQgdGhpcy5hcHAuZmlsZU1hbmFnZXIucmVuYW1lRmlsZShmaWxlLCBuZXdQYXRoKS5jYXRjaCgoZXJyb3I6IHVua25vd24pID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkNhbWVyYSBFbWJlZDogcmVuYW1lIGZhaWxlZFwiLCBlcnJvcik7XG4gICAgICAgIG5ldyBOb3RpY2UoXCJDb3VsZCBub3QgcmVuYW1lIHRoZSBwaG90by5cIik7XG4gICAgICB9KTtcbiAgICB9KS5vcGVuKCk7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgLyogQWN0aW9ucyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICBwcml2YXRlIHVzZVNlbGVjdGVkKHdpZHRoPzogbnVtYmVyKSB7XG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLnNlbGVjdGVkRmlsZXMoKTtcbiAgICBpZiAoIWZpbGVzLmxlbmd0aCkgcmV0dXJuO1xuICAgIHRoaXMub25DaG9vc2UoZmlsZXMsIHdpZHRoKTtcbiAgICBpZiAodGhpcy5jbG9zZU9uQ2hvb3NlKSB0aGlzLmNsb3NlKCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGRlbGV0ZVNlbGVjdGVkKCkge1xuICAgIGNvbnN0IHBhdGhzID0gQXJyYXkuZnJvbSh0aGlzLnNlbGVjdGVkKTtcbiAgICBpZiAoIXBhdGhzLmxlbmd0aCkgcmV0dXJuO1xuICAgIGF3YWl0IHRoaXMuZGVsZXRlRmlsZXMocGF0aHMpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBkZWxldGVGaWxlcyhwYXRoczogc3RyaW5nW10pIHtcbiAgICBjb25zdCBjb25maXJtZWQgPSBhd2FpdCB0aGlzLmNvbmZpcm1EZWxldGUocGF0aHMubGVuZ3RoKTtcbiAgICBpZiAoIWNvbmZpcm1lZCkgcmV0dXJuO1xuICAgIGxldCBkZWxldGVkID0gMDtcbiAgICBmb3IgKGNvbnN0IHBhdGggb2YgcGF0aHMpIHtcbiAgICAgIGNvbnN0IGZpbGUgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgocGF0aCk7XG4gICAgICBpZiAoIShmaWxlIGluc3RhbmNlb2YgVEZpbGUpKSBjb250aW51ZTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHRoaXMuYXBwLmZpbGVNYW5hZ2VyLnRyYXNoRmlsZShmaWxlKTtcbiAgICAgICAgZGVsZXRlZCsrO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkNhbWVyYSBFbWJlZDogZmFpbGVkIHRvIGRlbGV0ZSBnYWxsZXJ5IHBob3RvXCIsIHBhdGgsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChjb25zdCBwYXRoIG9mIHBhdGhzKSB0aGlzLnNlbGVjdGVkLmRlbGV0ZShwYXRoKTtcbiAgICB0aGlzLnVwZGF0ZVNlbGVjdGlvbigpO1xuICAgIGlmIChkZWxldGVkID4gMCkgbmV3IE5vdGljZShgRGVsZXRlZCAke2RlbGV0ZWR9IHBob3RvJHtkZWxldGVkID09PSAxID8gXCJcIiA6IFwic1wifS5gKTtcbiAgICB0aGlzLnNjaGVkdWxlUmVidWlsZCgpOyAvLyB2YXVsdCBldmVudHMgZG8gdGhpcyB0b287IHRoaXMgaXMganVzdCBhIHNhZmV0eSBuZXRcbiAgfVxuXG4gIHByaXZhdGUgcHJldmlld1NlbGVjdGVkKCkge1xuICAgIGNvbnN0IFtwYXRoXSA9IEFycmF5LmZyb20odGhpcy5zZWxlY3RlZCk7XG4gICAgaWYgKCFwYXRoKSByZXR1cm47XG4gICAgY29uc3QgZmlsZSA9IHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChwYXRoKTtcbiAgICBpZiAoZmlsZSBpbnN0YW5jZW9mIFRGaWxlKSB0aGlzLnByZXZpZXdGaWxlKGZpbGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBwcmV2aWV3RmlsZShmaWxlOiBURmlsZSkge1xuICAgIG5ldyBQaG90b1ByZXZpZXdNb2RhbCh0aGlzLmFwcCwgZmlsZSwgKCkgPT4gdm9pZCB0aGlzLmRlbGV0ZUZpbGVzKFtmaWxlLnBhdGhdKSkub3BlbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb25maXJtRGVsZXRlKGNvdW50OiBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGNvbnN0IG1vZGFsID0gbmV3IE1vZGFsKHRoaXMuYXBwKTtcbiAgICAgIGxldCBzZXR0bGVkID0gZmFsc2U7XG4gICAgICBjb25zdCBmaW5pc2ggPSAodmFsdWU6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgaWYgKHNldHRsZWQpIHJldHVybjtcbiAgICAgICAgc2V0dGxlZCA9IHRydWU7XG4gICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICBtb2RhbC5jbG9zZSgpO1xuICAgICAgfTtcbiAgICAgIG1vZGFsLnRpdGxlRWwuc2V0VGV4dChcIkRlbGV0ZSBwaG90b3M/XCIpO1xuICAgICAgbW9kYWwuY29udGVudEVsLmNyZWF0ZUVsKFwicFwiLCB7IHRleHQ6IGBNb3ZlICR7Y291bnR9IHNlbGVjdGVkIHBob3RvJHtjb3VudCA9PT0gMSA/IFwiXCIgOiBcInNcIn0gdG8gdGhlIE9ic2lkaWFuIHRyYXNoP2AgfSk7XG4gICAgICBjb25zdCBidXR0b25zID0gbW9kYWwuY29udGVudEVsLmNyZWF0ZURpdih7IGNsczogXCJtb2RhbC1idXR0b24tY29udGFpbmVyXCIgfSk7XG4gICAgICBidXR0b25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHsgdGV4dDogXCJDYW5jZWxcIiB9KS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gZmluaXNoKGZhbHNlKSk7XG4gICAgICBidXR0b25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHsgdGV4dDogXCJEZWxldGVcIiwgY2xzOiBcIm1vZC13YXJuaW5nXCIgfSkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGZpbmlzaCh0cnVlKSk7XG4gICAgICBtb2RhbC5vcGVuKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogU2F2ZXMgdGhyb3VnaCB0aGUgcGx1Z2luJ3Mgc2hhcmVkIHBpcGVsaW5lLCBob25vdXJpbmcgXCJTYXZlIG5lYXIgdGhlIG5vdGVcIi4gKi9cbiAgcHJpdmF0ZSBhc3luYyBzYXZlRmlsZXMoZmlsZXM6IEZpbGVbXSk6IFByb21pc2U8VEZpbGVbXT4ge1xuICAgIGNvbnN0IHNldHRpbmdzID0gdGhpcy5ob3N0LnNldHRpbmdzO1xuICAgIGNvbnN0IG5vdGVGb2xkZXIgPSBzZXR0aW5ncy5zYXZlTmVhclRoZU5vdGUgPyB0aGlzLmhvc3QuZ2V0VGFyZ2V0Tm90ZUZvbGRlcj8uKCkgOiB1bmRlZmluZWQ7XG4gICAgY29uc3Qgc2F2ZWQgPSBhd2FpdCB0aGlzLmhvc3Quc2F2ZVBob3RvcyhmaWxlcywgbm90ZUZvbGRlcik7XG4gICAgaWYgKHNhdmVkLmxlbmd0aCA+IDAgJiYgbm90ZUZvbGRlciAhPT0gdW5kZWZpbmVkICYmIHNldHRpbmdzLmdhbGxlcnlTY29wZSA9PT0gXCJmb2xkZXJcIikge1xuICAgICAgbmV3IE5vdGljZSgnU2F2ZWQgbmV4dCB0byB0aGUgbm90ZS4gU2V0IHRoZSBnYWxsZXJ5IHRvIFwiV2hvbGUgdmF1bHRcIiB0byBzZWUgdGhlc2UgcGhvdG9zIGhlcmUuJyk7XG4gICAgfVxuICAgIHJldHVybiBzYXZlZDtcbiAgfVxuXG4gIC8qKiBQaWNrIChvciBjYXB0dXJlKSBwaG90b3MgYW5kIHNhdmUgdGhlbSB0aHJvdWdoIHRoZSBwbHVnaW4ncyBzaGFyZWQgc2F2ZSBwaXBlbGluZS4gKi9cbiAgcHJpdmF0ZSBhc3luYyBhZGRQaG90b3Moc291cmNlOiBQaWNrU291cmNlKSB7XG4gICAgY29uc3QgZmlsZXMgPSBhd2FpdCBwaWNrSW1hZ2VzKHNvdXJjZSwgdGhpcy5hcHAud29ya3NwYWNlLmNvbnRhaW5lckVsKTtcbiAgICBpZiAoIWZpbGVzLmxlbmd0aCB8fCAhdGhpcy5vcGVuZWQpIHJldHVybjtcblxuICAgIC8vIE5ldyBwaG90b3Mgc2hvdyB1cCB0aHJvdWdoIHRoZSB2YXVsdCBcImNyZWF0ZVwiIGV2ZW50cywgc28gbm90aGluZyBlbHNlIHRvIGRvIGhlcmUuXG4gICAgY29uc3Qgc2F2ZWQgPSBhd2FpdCB0aGlzLnNhdmVGaWxlcyhmaWxlcyk7XG4gICAgaWYgKHNhdmVkLmxlbmd0aCA+IDApIG5ldyBOb3RpY2UoYEFkZGVkICR7c2F2ZWQubGVuZ3RofSBwaG90byR7c2F2ZWQubGVuZ3RoID09PSAxID8gXCJcIiA6IFwic1wifSB0byBnYWxsZXJ5LmApO1xuICB9XG59XG5cbmNsYXNzIFJlbmFtZU1vZGFsIGV4dGVuZHMgTW9kYWwge1xuICBwcml2YXRlIHJlYWRvbmx5IGZpbGU6IFRGaWxlO1xuICBwcml2YXRlIHJlYWRvbmx5IG9uU3VibWl0OiAobmV3QmFzZU5hbWU6IHN0cmluZykgPT4gdm9pZDtcblxuICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgZmlsZTogVEZpbGUsIG9uU3VibWl0OiAobmV3QmFzZU5hbWU6IHN0cmluZykgPT4gdm9pZCkge1xuICAgIHN1cGVyKGFwcCk7XG4gICAgdGhpcy5maWxlID0gZmlsZTtcbiAgICB0aGlzLm9uU3VibWl0ID0gb25TdWJtaXQ7XG4gIH1cblxuICBvbk9wZW4oKSB7XG4gICAgdGhpcy50aXRsZUVsLnNldFRleHQoXCJSZW5hbWUgcGhvdG9cIik7XG4gICAgY29uc3QgaW5wdXQgPSB0aGlzLmNvbnRlbnRFbC5jcmVhdGVFbChcImlucHV0XCIsIHsgdHlwZTogXCJ0ZXh0XCIsIHZhbHVlOiB0aGlzLmZpbGUuYmFzZW5hbWUgfSk7XG4gICAgaW5wdXQuc2V0Q3NzUHJvcHMoeyB3aWR0aDogXCIxMDAlXCIgfSk7XG4gICAgdGhpcy5jb250ZW50RWwuY3JlYXRlRWwoXCJwXCIsIHsgdGV4dDogYFRoZSAuJHt0aGlzLmZpbGUuZXh0ZW5zaW9ufSBleHRlbnNpb24gaXMga2VwdC4gTGlua3MgaW4geW91ciBub3RlcyBhcmUgdXBkYXRlZC5gLCBjbHM6IFwic2V0dGluZy1pdGVtLWRlc2NyaXB0aW9uXCIgfSk7XG5cbiAgICBjb25zdCBzdWJtaXQgPSAoKSA9PiB7XG4gICAgICAvLyBGaWxlIG5hbWVzIGNhbm5vdCBjb250YWluIHRoZXNlIGNoYXJhY3RlcnMgb24gY29tbW9uIHN5c3RlbXMuXG4gICAgICBjb25zdCBuYW1lID0gaW5wdXQudmFsdWUudHJpbSgpLnJlcGxhY2UoL1tcXFxcLzoqP1wiPD58XS9nLCBcIlwiKTtcbiAgICAgIGlmICghbmFtZSkgcmV0dXJuO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgdGhpcy5vblN1Ym1pdChuYW1lKTtcbiAgICB9O1xuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7IGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IHN1Ym1pdCgpOyB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBidXR0b25zID0gdGhpcy5jb250ZW50RWwuY3JlYXRlRGl2KHsgY2xzOiBcIm1vZGFsLWJ1dHRvbi1jb250YWluZXJcIiB9KTtcbiAgICBidXR0b25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHsgdGV4dDogXCJDYW5jZWxcIiB9KS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5jbG9zZSgpKTtcbiAgICBidXR0b25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHsgdGV4dDogXCJSZW5hbWVcIiwgY2xzOiBcIm1vZC1jdGFcIiB9KS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3VibWl0KTtcblxuICAgIGlucHV0LmZvY3VzKCk7XG4gICAgaW5wdXQuc2VsZWN0KCk7XG4gIH1cblxuICBvbkNsb3NlKCkgeyB0aGlzLmNvbnRlbnRFbC5lbXB0eSgpOyB9XG59XG5cbmNsYXNzIFBob3RvUHJldmlld01vZGFsIGV4dGVuZHMgTW9kYWwge1xuICBwcml2YXRlIHJlYWRvbmx5IGZpbGU6IFRGaWxlO1xuICBwcml2YXRlIHJlYWRvbmx5IG9uRGVsZXRlOiAoKSA9PiB2b2lkO1xuXG4gIGNvbnN0cnVjdG9yKGFwcDogQXBwLCBmaWxlOiBURmlsZSwgb25EZWxldGU6ICgpID0+IHZvaWQpIHtcbiAgICBzdXBlcihhcHApO1xuICAgIHRoaXMuZmlsZSA9IGZpbGU7XG4gICAgdGhpcy5vbkRlbGV0ZSA9IG9uRGVsZXRlO1xuICB9XG5cbiAgb25PcGVuKCkge1xuICAgIHRoaXMubW9kYWxFbC5hZGRDbGFzcyhcImNhbWVyYS1waG90by1wcmV2aWV3LW1vZGFsLWNvbnRhaW5lclwiKTtcbiAgICB0aGlzLnRpdGxlRWwuc2V0VGV4dCh0aGlzLmZpbGUubmFtZSk7XG4gICAgY29uc3QgeyBjb250ZW50RWwgfSA9IHRoaXM7XG4gICAgY29udGVudEVsLmFkZENsYXNzKFwiY2FtZXJhLXBob3RvLXByZXZpZXctbW9kYWxcIik7XG4gICAgY29uc3QgaW1hZ2UgPSBjb250ZW50RWwuY3JlYXRlRWwoXCJpbWdcIiwgeyBjbHM6IFwiY2FtZXJhLXBob3RvLXByZXZpZXctaW1hZ2VcIiB9KTtcbiAgICBpbWFnZS5zcmMgPSB0aGlzLmFwcC52YXVsdC5nZXRSZXNvdXJjZVBhdGgodGhpcy5maWxlKTtcbiAgICBpbWFnZS5hbHQgPSB0aGlzLmZpbGUubmFtZTtcblxuICAgIGNvbnN0IHVzYWdlcyA9IGdldFVzYWdlcyh0aGlzLmFwcCwgdGhpcy5maWxlKTtcbiAgICBjb250ZW50RWwuY3JlYXRlRWwoXCJoM1wiLCB7IHRleHQ6IGBVc2VkIGluICR7dXNhZ2VzLmxlbmd0aH0gbm90ZSR7dXNhZ2VzLmxlbmd0aCA9PT0gMSA/IFwiXCIgOiBcInNcIn1gIH0pO1xuICAgIGNvbnN0IHVzYWdlTGlzdCA9IGNvbnRlbnRFbC5jcmVhdGVEaXYoeyBjbHM6IFwiY2FtZXJhLXBob3RvLXByZXZpZXctdXNhZ2VzXCIgfSk7XG4gICAgaWYgKHVzYWdlcy5sZW5ndGggPT09IDApIHVzYWdlTGlzdC5zZXRUZXh0KFwiVGhpcyBwaG90byBpcyBub3QgbGlua2VkIGZyb20gYW55IG5vdGUuXCIpO1xuICAgIGZvciAoY29uc3QgdXNhZ2Ugb2YgdXNhZ2VzKSB7XG4gICAgICBjb25zdCBidXR0b24gPSB1c2FnZUxpc3QuY3JlYXRlRWwoXCJidXR0b25cIiwgeyB0ZXh0OiB1c2FnZS5wYXRoLCBjbHM6IFwiY2FtZXJhLXBob3RvLXByZXZpZXctdXNhZ2VcIiB9KTtcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdm9pZCB0aGlzLmFwcC53b3Jrc3BhY2Uub3BlbkxpbmtUZXh0KHVzYWdlLnBhdGgsIFwiXCIsIGZhbHNlKSk7XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aW9ucyA9IGNvbnRlbnRFbC5jcmVhdGVEaXYoeyBjbHM6IFwibW9kYWwtYnV0dG9uLWNvbnRhaW5lclwiIH0pO1xuICAgIGFjdGlvbnMuY3JlYXRlRWwoXCJidXR0b25cIiwgeyB0ZXh0OiBcIkNsb3NlXCIgfSkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuY2xvc2UoKSk7XG4gICAgYWN0aW9ucy5jcmVhdGVFbChcImJ1dHRvblwiLCB7IHRleHQ6IFwiRGVsZXRlXCIsIGNsczogXCJtb2Qtd2FybmluZ1wiIH0pLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB0aGlzLm9uRGVsZXRlKCk7XG4gICAgfSk7XG4gIH1cblxuICBvbkNsb3NlKCkgeyB0aGlzLmNvbnRlbnRFbC5lbXB0eSgpOyB9XG59IiwgImltcG9ydCB7IEFwcCwgTW9kYWwsIHNldEljb24gfSBmcm9tIFwib2JzaWRpYW5cIjtcblxuZXhwb3J0IGNsYXNzIFBpY2tlck1vZGFsIGV4dGVuZHMgTW9kYWwge1xuICBwcml2YXRlIHJlYWRvbmx5IHJlc29sdmU6ICh2YWx1ZTogXCJjYW1lcmFcIiB8IFwiZ2FsbGVyeVwiIHwgbnVsbCkgPT4gdm9pZDtcblxuICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgb25DaG9vc2U6IChzb3VyY2U6IFwiY2FtZXJhXCIgfCBcImdhbGxlcnlcIiB8IG51bGwpID0+IHZvaWQpIHtcbiAgICBzdXBlcihhcHApO1xuICAgIHRoaXMucmVzb2x2ZSA9IG9uQ2hvb3NlO1xuICB9XG5cbiAgb25PcGVuKCkge1xuICAgIGNvbnN0IHsgY29udGVudEVsIH0gPSB0aGlzO1xuXG4gICAgLy8gSGVhZGluZ1xuICAgIGNvbnRlbnRFbC5jcmVhdGVFbChcImgyXCIsIHsgdGV4dDogXCJJbnNlcnQgcGhvdG9cIiB9KTtcblxuICAgIC8vIENvbnRhaW5lciBmb3IgYnV0dG9uc1xuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGNvbnRlbnRFbC5jcmVhdGVEaXYoeyBjbHM6IFwicGlja2VyLW1vZGFsLWJ1dHRvbnNcIiB9KTtcblxuICAgIC8vIENhbWVyYSBidXR0b25cbiAgICBjb25zdCBjYW1lcmFCdG4gPSBidXR0b25Db250YWluZXIuY3JlYXRlRWwoXCJidXR0b25cIiwgeyBjbHM6IFwibW9kLWN0YVwiIH0pO1xuICAgIGNvbnN0IGNhbWVyYUljb24gPSBjYW1lcmFCdG4uY3JlYXRlU3BhbigpO1xuICAgIHNldEljb24oY2FtZXJhSWNvbiwgXCJjYW1lcmFcIik7XG4gICAgY2FtZXJhQnRuLmFwcGVuZFRleHQoXCJUYWtlIHBob3RvXCIpO1xuICAgIGNhbWVyYUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5yZXNvbHZlKFwiY2FtZXJhXCIpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gR2FsbGVyeSBidXR0b25cbiAgICBjb25zdCBnYWxsZXJ5QnRuID0gYnV0dG9uQ29udGFpbmVyLmNyZWF0ZUVsKFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGdhbGxlcnlJY29uID0gZ2FsbGVyeUJ0bi5jcmVhdGVTcGFuKCk7XG4gICAgc2V0SWNvbihnYWxsZXJ5SWNvbiwgXCJpbWFnZXNcIik7XG4gICAgZ2FsbGVyeUJ0bi5hcHBlbmRUZXh0KFwiQ2hvb3NlIGZyb20gZ2FsbGVyeVwiKTtcbiAgICBnYWxsZXJ5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlc29sdmUoXCJnYWxsZXJ5XCIpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gQ2xvc2UgbW9kYWwgb24gRXNjYXBlXG4gICAgdGhpcy5zY29wZS5yZWdpc3RlcihbXSwgXCJFc2NhcGVcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5yZXNvbHZlKG51bGwpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgb25DbG9zZSgpIHtcbiAgICB0aGlzLmNvbnRlbnRFbC5lbXB0eSgpO1xuICB9XG59IiwgImltcG9ydCB7IEl0ZW1WaWV3LCBURmlsZSwgV29ya3NwYWNlTGVhZiB9IGZyb20gXCJvYnNpZGlhblwiO1xuaW1wb3J0IHsgR2FsbGVyeU1vZGFsIH0gZnJvbSBcIi4vZ2FsbGVyeS1tb2RhbC5qc1wiO1xuaW1wb3J0IHR5cGUgQ2FtZXJhRW1iZWRQbHVnaW4gZnJvbSBcIi4vbWFpbi5qc1wiO1xuXG5leHBvcnQgY29uc3QgR0FMTEVSWV9WSUVXX1RZUEUgPSBcImNhbWVyYS1lbWJlZC1nYWxsZXJ5XCI7XG5cbmV4cG9ydCBjbGFzcyBDYW1lcmFHYWxsZXJ5VmlldyBleHRlbmRzIEl0ZW1WaWV3IHtcbiAgcHJpdmF0ZSByZWFkb25seSBwbHVnaW46IENhbWVyYUVtYmVkUGx1Z2luO1xuICBwcml2YXRlIGdhbGxlcnk/OiBHYWxsZXJ5TW9kYWw7XG5cbiAgY29uc3RydWN0b3IobGVhZjogV29ya3NwYWNlTGVhZiwgcGx1Z2luOiBDYW1lcmFFbWJlZFBsdWdpbikge1xuICAgIHN1cGVyKGxlYWYpO1xuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICB9XG5cbiAgZ2V0Vmlld1R5cGUoKSB7IHJldHVybiBHQUxMRVJZX1ZJRVdfVFlQRTsgfVxuXG4gIGdldERpc3BsYXlUZXh0KCkgeyByZXR1cm4gXCJDYW1lcmEgZ2FsbGVyeVwiOyB9XG5cbiAgZ2V0SWNvbigpIHsgcmV0dXJuIFwiaW1hZ2VzXCI7IH1cblxuICBhc3luYyBvbk9wZW4oKSB7XG4gICAgY29uc3QgZm9sZGVyID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MucGhvdG9zRm9sZGVyLnRyaW0oKTtcbiAgICB0aGlzLmNvbnRlbnRFbC5lbXB0eSgpO1xuICAgIHRoaXMuY29udGVudEVsLmFkZENsYXNzKFwiY2FtZXJhLWdhbGxlcnktdmlld1wiKTtcbiAgICBpZiAoIWZvbGRlcikge1xuICAgICAgdGhpcy5jb250ZW50RWwuY3JlYXRlRWwoXCJwXCIsIHsgdGV4dDogXCJTZXQgYSBwaG90b3MgZm9sZGVyIGluIGNhbWVyYSBlbWJlZCBzZXR0aW5ncyBiZWZvcmUgdXNpbmcgdGhlIGdhbGxlcnkuXCIgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZ2FsbGVyeSA9IG5ldyBHYWxsZXJ5TW9kYWwoXG4gICAgICB0aGlzLmFwcCxcbiAgICAgIHRoaXMucGx1Z2luLFxuICAgICAgKGZpbGVzLCB3aWR0aCkgPT4gdGhpcy51c2VGaWxlcyhmaWxlcywgd2lkdGgpLFxuICAgICAgZmFsc2UsXG4gICAgKTtcbiAgICB0aGlzLmdhbGxlcnkubW91bnQodGhpcy5jb250ZW50RWwpO1xuICB9XG5cbiAgYXN5bmMgb25DbG9zZSgpIHsgdGhpcy5nYWxsZXJ5Py51bm1vdW50KCk7IH1cblxuICBwcml2YXRlIHVzZUZpbGVzKGZpbGVzOiBURmlsZVtdLCB3aWR0aD86IG51bWJlcikge1xuICAgIHRoaXMucGx1Z2luLmVtYmVkR2FsbGVyeUZpbGVzKGZpbGVzLCB3aWR0aCk7XG4gIH1cbn0iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUEsMERBQUFBLFNBQUE7QUFVQSxLQUFDLFNBQVUsUUFBUSxTQUFTO0FBQzFCLGFBQU8sWUFBWSxZQUFZLE9BQU9BLFlBQVcsY0FBY0EsUUFBTyxVQUFVLFFBQVEsSUFDeEYsT0FBTyxXQUFXLGNBQWMsT0FBTyxNQUFNLE9BQU8sT0FBTyxLQUMxRCxTQUFTLE9BQU8sZUFBZSxjQUFjLGFBQWEsVUFBVSxNQUFNLE9BQU8sYUFBYSxRQUFRO0FBQUEsSUFDekcsR0FBRyxTQUFPLFdBQVk7QUFBRTtBQUV0QixlQUFTLGdCQUFnQixHQUFHLEdBQUc7QUFDN0IsWUFBSSxFQUFFLGFBQWEsR0FBSSxPQUFNLElBQUksVUFBVSxtQ0FBbUM7QUFBQSxNQUNoRjtBQUNBLGVBQVMsa0JBQWtCLEdBQUcsR0FBRztBQUMvQixpQkFBUyxJQUFJLEdBQUcsSUFBSSxFQUFFLFFBQVEsS0FBSztBQUNqQyxjQUFJLElBQUksRUFBRSxDQUFDO0FBQ1gsWUFBRSxhQUFhLEVBQUUsY0FBYyxPQUFJLEVBQUUsZUFBZSxNQUFJLFdBQVcsTUFBTSxFQUFFLFdBQVcsT0FBSyxPQUFPLGVBQWUsR0FBRyxlQUFlLEVBQUUsR0FBRyxHQUFHLENBQUM7QUFBQSxRQUM5STtBQUFBLE1BQ0Y7QUFDQSxlQUFTLGFBQWEsR0FBRyxHQUFHLEdBQUc7QUFDN0IsZUFBTyxLQUFLLGtCQUFrQixFQUFFLFdBQVcsQ0FBQyxHQUFHLEtBQUssa0JBQWtCLEdBQUcsQ0FBQyxHQUFHLE9BQU8sZUFBZSxHQUFHLGFBQWE7QUFBQSxVQUNqSCxVQUFVO0FBQUEsUUFDWixDQUFDLEdBQUc7QUFBQSxNQUNOO0FBQ0EsZUFBUyxnQkFBZ0IsR0FBRyxHQUFHLEdBQUc7QUFDaEMsZ0JBQVEsSUFBSSxlQUFlLENBQUMsTUFBTSxJQUFJLE9B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Y0FBYztBQUFBLFlBQ2hFO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQSxjQUNQLE1BQU07QUFBQSxjQUNOLEtBQUs7QUFBQSxZQUNQO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFFQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sU0FBUztBQUFBLFFBQ1QsT0FBTztBQUFBLFVBQ0w7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQSxjQUNQLE1BQU07QUFBQSxjQUNOLEtBQUs7QUFBQSxjQUNMLGFBQWE7QUFBQSxZQUNmO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQSxjQUNQLE1BQU07QUFBQSxjQUNOLEtBQUs7QUFBQSxZQUNQO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQSxjQUNQLE1BQU07QUFBQSxjQUNOLEtBQUs7QUFBQSxZQUNQO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQSxjQUNQLE1BQU07QUFBQSxjQUNOLEtBQUs7QUFBQSxZQUNQO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFFQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sU0FBUztBQUFBLFFBQ1QsT0FBTztBQUFBLFVBQ0w7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQSxjQUNQLE1BQU07QUFBQSxjQUNOLEtBQUs7QUFBQSxZQUNQO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLFNBQVMsTUFBTSxFQUFFLEVBQUU7QUFBQSxZQUNu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QUFBQSxJQUNoSztBQUNBLFFBQUksV0FBVyxNQUFNLFNBQVMsS0FBSyxhQUFhLGFBQWE7QUFDM0QsVUFBSSx3QkFBTyxjQUFjLFlBQVksV0FBVyxDQUFDLFdBQU0sWUFBWSxVQUFVLENBQUMsRUFBRTtBQUFBLElBQ2xGO0FBQ0EsV0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUVBLE1BQWMsbUJBQW1CLGdCQUE0RDtBQUMzRixVQUFNLE1BQU0sS0FBSyxTQUFTLGFBQWEsS0FBSztBQUM1QyxVQUFNLE9BQU8sS0FBSyxTQUFTLGtCQUN0QixNQUFPLGlCQUFpQixHQUFHLGNBQWMsSUFBSSxHQUFHLEtBQUssTUFBUSwwQ0FBa0IsS0FDaEY7QUFDSixVQUFNLGlCQUFhLGdDQUFjLEtBQUssU0FBUyx3QkFBd0IsaUJBQWlCLElBQUksSUFBSSxJQUFJO0FBQ3BHLFFBQUksZUFBZSxNQUFNLGVBQWUsSUFBSyxRQUFPO0FBQ3BELFFBQUksYUFBYSxLQUFLLElBQUksT0FBTyxVQUFVLEVBQUcsUUFBTztBQUNyRCxRQUFJLENBQUMsS0FBSyxTQUFTLHVCQUF1QjtBQUN4QyxVQUFJLHdCQUFPLHFCQUFxQixVQUFVLEVBQUU7QUFDNUMsYUFBTztBQUFBLElBQ1Q7QUFDQSxRQUFJO0FBQ0YsWUFBTSxpQkFBaUIsS0FBSyxJQUFJLE9BQU8sVUFBVTtBQUNqRCxhQUFPO0FBQUEsSUFDVCxTQUFTLE9BQU87QUFDZCxjQUFRLE1BQU0seUNBQXlDLEtBQUs7QUFDNUQsVUFBSSx3QkFBTyw0QkFBNEIsVUFBVSxFQUFFO0FBQ25ELGFBQU87QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUFBLEVBRUEsTUFBTSxlQUFlO0FBQ25CLFNBQUssV0FBVyxPQUFPLE9BQU8sQ0FBQyxHQUFHLGtCQUFrQixNQUFNLEtBQUssU0FBUyxDQUFpQztBQUFBLEVBQzNHO0FBQUEsRUFFQSxNQUFNLGVBQWU7QUFDbkIsVUFBTSxLQUFLLFNBQVMsS0FBSyxRQUFRO0FBQUEsRUFDbkM7QUFDRjsiLAogICJuYW1lcyI6IFsibW9kdWxlIiwgInIiLCAid2luZG93IiwgInNlbGYiLCAiaXNCbG9iIiwgImlzUG9zaXRpdmVOdW1iZXIiLCAiQ29tcHJlc3NvciIsICJjYWxsYmFjayIsICJkb25lIiwgIm5leHQiLCAiaW1wb3J0X29ic2lkaWFuIiwgIkNvbXByZXNzb3IiLCAiaW1wb3J0X29ic2lkaWFuIiwgImltcG9ydF9vYnNpZGlhbiIsICJpbXBvcnRfb2JzaWRpYW4iLCAiaW1wb3J0X29ic2lkaWFuIl0KfQo=
