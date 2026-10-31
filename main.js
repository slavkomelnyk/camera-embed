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
  galleryScope: "vault",
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
            desc: "Use the gallery instead of taking a photo directly.",
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
            desc: "Show every image in the vault, or only the images inside your photos folder.",
            control: {
              type: "dropdown",
              key: "galleryScope",
              options: { vault: "Whole vault", folder: "Photos folder only" }
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
            desc: "Save camera photos beside the current note.",
            visible: () => !s().galleryEnabled,
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
  /* ------------------------------------------------------------------ */
  /* display() fallback for Obsidian < 1.13.                             */
  /* On 1.13+ the declarative definitions above are used instead and      */
  /* this method is never called. It renders the same definitions.        */
  /* ------------------------------------------------------------------ */
  display() {
    const { containerEl } = this;
    const scrollTop = containerEl.scrollTop;
    containerEl.empty();
    this.renderFallback(containerEl, this.getSettingDefinitions());
    containerEl.scrollTop = scrollTop;
  }
  renderFallback(container, items) {
    for (const item of items) {
      if (item.visible && !item.visible()) continue;
      if ("items" in item) {
        new import_obsidian.Setting(container).setName(item.heading).setHeading();
        this.renderFallback(container, item.items);
        continue;
      }
      const setting = new import_obsidian.Setting(container).setName(item.name);
      if (item.desc) setting.setDesc(item.desc);
      if (item.control) this.addFallbackControl(setting, item.control);
    }
  }
  addFallbackControl(setting, control) {
    var _a, _b, _c, _d;
    const store = this.plugin.settings;
    const key = control.key;
    const disabled = (_b = (_a = control.disabled) == null ? void 0 : _a.call(control)) != null ? _b : false;
    const commit = async (value, rerender) => {
      store[key] = value;
      await this.plugin.saveSettings();
      if (rerender) this.display();
    };
    switch (control.type) {
      case "toggle":
        setting.addToggle(
          (toggle) => toggle.setValue(Boolean(store[key])).setDisabled(disabled).onChange((value) => void commit(value, true))
        );
        break;
      case "text": {
        const placeholder = (_c = control.placeholder) != null ? _c : "";
        setting.addText(
          (text) => {
            var _a2;
            return text.setPlaceholder(placeholder).setValue(String((_a2 = store[key]) != null ? _a2 : "")).onChange((value) => void commit(value, false));
          }
        );
        break;
      }
      case "slider": {
        const { min = 0, max = 1, step = 0.05 } = control;
        setting.addSlider(
          (slider) => slider.setLimits(min, max, step).setValue(Number(store[key])).setDynamicTooltip().onChange((value) => void commit(value, false))
        );
        break;
      }
      case "dropdown": {
        const options = (_d = control.options) != null ? _d : {};
        setting.addDropdown(
          (dropdown) => dropdown.addOptions(options).setValue(String(store[key])).onChange((value) => void commit(value, true))
        );
        break;
      }
      case "number": {
        const min = control.min;
        setting.addText((text) => {
          var _a2;
          text.inputEl.type = "number";
          if (min !== void 0) text.inputEl.min = String(min);
          text.setValue(String((_a2 = store[key]) != null ? _a2 : 0)).onChange((value) => {
            const parsed = Number(value);
            if (value.trim() === "" || !Number.isFinite(parsed)) return;
            void commit(min !== void 0 ? Math.max(min, parsed) : parsed, false);
          });
        });
        break;
      }
    }
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
var pad = (n) => String(n).padStart(2, "0");
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
function pickImages(source = "gallery") {
  return new Promise((resolve) => {
    const input = activeDocument.body.createEl("input", { cls: "camera-hidden", type: "file" });
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
      { vault: "Whole vault", folder: "Photos folder" },
      settings.galleryScope,
      (value) => {
        settings.galleryScope = value;
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
    this.allFiles = this.app.vault.getFiles().filter(isImage);
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
    for (const [key, label] of Object.entries(options)) {
      select.createEl("option", { value: key, text: label });
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
  registerVaultEvents() {
    const vault = this.app.vault;
    this.eventRefs.push(
      vault.on("create", (file) => {
        if (file instanceof import_obsidian3.TFile && isImage(file)) this.scheduleRebuild();
      }),
      vault.on("delete", () => this.scheduleRebuild()),
      vault.on("rename", (file, oldPath) => {
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
      this.allFiles = this.app.vault.getFiles().filter(isImage);
      void this.rebuild(true);
    }, 200);
  }
  /* ------------------------------------------------------------------ */
  /* Filtering, sorting, rendering                                       */
  /* ------------------------------------------------------------------ */
  computeVisible() {
    const settings = this.host.settings;
    const query = this.query.trim().toLowerCase();
    let prefix = "";
    if (settings.galleryScope === "folder") {
      const folder = (0, import_obsidian3.normalizePath)(settings.photosFolder.trim());
      if (folder && folder !== "/") prefix = `${folder}/`;
    }
    const files = this.allFiles.filter(
      (file) => (!prefix || file.path.startsWith(prefix)) && (!query || file.path.toLowerCase().includes(query))
    );
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
    empty.createDiv({ text: this.query.trim() ? "No photos match your search." : "No photos yet." });
    if (!this.query.trim()) {
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
    const saved = await this.host.savePhotos(images);
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
        const label = activeDocument.body.createDiv({ cls: "camera-gallery-drag-image", text: `${files.length} photos` });
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
    menu.addItem((item) => {
      item.setTitle("Insert with width").setIcon("move-horizontal");
      const sub = item.setSubmenu();
      for (const width of WIDTH_CHOICES) {
        sub.addItem((subItem) => subItem.setTitle(`${width} px`).onClick(() => this.useSelected(width)));
      }
      sub.addItem((subItem) => subItem.setTitle("Original size").onClick(() => this.useSelected()));
    });
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
    menu.addSeparator();
    menu.addItem((item) => item.setTitle(count > 1 ? `Copy ${count} links` : "Copy link").setIcon("copy").onClick(() => void this.copyLinks(files)));
    if (single) {
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
  async copyLinks(files) {
    var _a, _b;
    const source = (_b = (_a = this.app.workspace.getActiveFile()) == null ? void 0 : _a.path) != null ? _b : "";
    const text = files.map((file) => `!${this.app.fileManager.generateMarkdownLink(file, source)}`).join("\n");
    try {
      await navigator.clipboard.writeText(text);
      new import_obsidian3.Notice(files.length === 1 ? "Copied link." : `Copied ${files.length} links.`);
    } catch (error) {
      console.error("Camera Embed: failed to copy", error);
      new import_obsidian3.Notice("Could not copy to the clipboard.");
    }
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
  /** Pick (or capture) photos and save them through the plugin's shared save pipeline. */
  async addPhotos(source) {
    const files = await pickImages(source);
    if (!files.length || !this.opened) return;
    const saved = await this.host.savePhotos(files);
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
  normalizeSettings() {
    if (this.settings.galleryEnabled) {
      this.settings.imagePickerEnabled = false;
      this.settings.saveNearTheNote = false;
    }
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
    const files = await pickImages(source);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzL2NvbXByZXNzb3Jqcy9kaXN0L2NvbXByZXNzb3IuanMiLCAic3JjL21haW4udHMiLCAic3JjL3NldHRpbmdzLnRzIiwgInNyYy9jb21wcmVzc29yLnRzIiwgInNyYy9maWxlLXV0aWxzLnRzIiwgInNyYy9pbnB1dC11dGlscy50cyIsICJzcmMvZ2FsbGVyeS1tb2RhbC50cyIsICJzcmMvcGlja2VyLW1vZGFsLnRzIiwgInNyYy9nYWxsZXJ5LXZpZXcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qIVxuICogQ29tcHJlc3Nvci5qcyB2MS4zLjBcbiAqIGh0dHBzOi8vZmVuZ3l1YW5jaGVuLmdpdGh1Yi5pby9jb21wcmVzc29yanNcbiAqXG4gKiBDb3B5cmlnaHQgMjAxOC1wcmVzZW50IENoZW4gRmVuZ3l1YW5cbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICpcbiAqIERhdGU6IDIwMjYtMDQtMDZUMDc6MTI6NDUuODE2WlxuICovXG5cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcbiAgKGdsb2JhbCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgOiBnbG9iYWwgfHwgc2VsZiwgZ2xvYmFsLkNvbXByZXNzb3IgPSBmYWN0b3J5KCkpO1xufSkodGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhhLCBuKSB7XG4gICAgaWYgKCEoYSBpbnN0YW5jZW9mIG4pKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG4gIGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKGUsIHIpIHtcbiAgICBmb3IgKHZhciB0ID0gMDsgdCA8IHIubGVuZ3RoOyB0KyspIHtcbiAgICAgIHZhciBvID0gclt0XTtcbiAgICAgIG8uZW51bWVyYWJsZSA9IG8uZW51bWVyYWJsZSB8fCAhMSwgby5jb25maWd1cmFibGUgPSAhMCwgXCJ2YWx1ZVwiIGluIG8gJiYgKG8ud3JpdGFibGUgPSAhMCksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBfdG9Qcm9wZXJ0eUtleShvLmtleSksIG8pO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoZSwgciwgdCkge1xuICAgIHJldHVybiByICYmIF9kZWZpbmVQcm9wZXJ0aWVzKGUucHJvdG90eXBlLCByKSwgdCAmJiBfZGVmaW5lUHJvcGVydGllcyhlLCB0KSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIFwicHJvdG90eXBlXCIsIHtcbiAgICAgIHdyaXRhYmxlOiAhMVxuICAgIH0pLCBlO1xuICB9XG4gIGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShlLCByLCB0KSB7XG4gICAgcmV0dXJuIChyID0gX3RvUHJvcGVydHlLZXkocikpIGluIGUgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgciwge1xuICAgICAgdmFsdWU6IHQsXG4gICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgICB3cml0YWJsZTogITBcbiAgICB9KSA6IGVbcl0gPSB0LCBlO1xuICB9XG4gIGZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICAgIHJldHVybiBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gPyBPYmplY3QuYXNzaWduLmJpbmQoKSA6IGZ1bmN0aW9uIChuKSB7XG4gICAgICBmb3IgKHZhciBlID0gMTsgZSA8IGFyZ3VtZW50cy5sZW5ndGg7IGUrKykge1xuICAgICAgICB2YXIgdCA9IGFyZ3VtZW50c1tlXTtcbiAgICAgICAgZm9yICh2YXIgciBpbiB0KSAoe30pLmhhc093blByb3BlcnR5LmNhbGwodCwgcikgJiYgKG5bcl0gPSB0W3JdKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuO1xuICAgIH0sIF9leHRlbmRzLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gIH1cbiAgZnVuY3Rpb24gb3duS2V5cyhlLCByKSB7XG4gICAgdmFyIHQgPSBPYmplY3Qua2V5cyhlKTtcbiAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAgdmFyIG8gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpO1xuICAgICAgciAmJiAobyA9IG8uZmlsdGVyKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsIHIpLmVudW1lcmFibGU7XG4gICAgICB9KSksIHQucHVzaC5hcHBseSh0LCBvKTtcbiAgICB9XG4gICAgcmV0dXJuIHQ7XG4gIH1cbiAgZnVuY3Rpb24gX29iamVjdFNwcmVhZDIoZSkge1xuICAgIGZvciAodmFyIHIgPSAxOyByIDwgYXJndW1lbnRzLmxlbmd0aDsgcisrKSB7XG4gICAgICB2YXIgdCA9IG51bGwgIT0gYXJndW1lbnRzW3JdID8gYXJndW1lbnRzW3JdIDoge307XG4gICAgICByICUgMiA/IG93bktleXMoT2JqZWN0KHQpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAocikge1xuICAgICAgICBfZGVmaW5lUHJvcGVydHkoZSwgciwgdFtyXSk7XG4gICAgICB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnModCkpIDogb3duS2V5cyhPYmplY3QodCkpLmZvckVhY2goZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHIsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCwgcikpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBlO1xuICB9XG4gIGZ1bmN0aW9uIF90b1ByaW1pdGl2ZSh0LCByKSB7XG4gICAgaWYgKFwib2JqZWN0XCIgIT0gdHlwZW9mIHQgfHwgIXQpIHJldHVybiB0O1xuICAgIHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdO1xuICAgIGlmICh2b2lkIDAgIT09IGUpIHtcbiAgICAgIHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpO1xuICAgICAgaWYgKFwib2JqZWN0XCIgIT0gdHlwZW9mIGkpIHJldHVybiBpO1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpO1xuICAgIH1cbiAgICByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpO1xuICB9XG4gIGZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KHQpIHtcbiAgICB2YXIgaSA9IF90b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTtcbiAgICByZXR1cm4gXCJzeW1ib2xcIiA9PSB0eXBlb2YgaSA/IGkgOiBpICsgXCJcIjtcbiAgfVxuXG4gIHZhciBjYW52YXNUb0Jsb2IgPSB7ZXhwb3J0czoge319O1xuXG4gIC8qXG4gICAqIEphdmFTY3JpcHQgQ2FudmFzIHRvIEJsb2JcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2JsdWVpbXAvSmF2YVNjcmlwdC1DYW52YXMtdG8tQmxvYlxuICAgKlxuICAgKiBDb3B5cmlnaHQgMjAxMiwgU2ViYXN0aWFuIFRzY2hhblxuICAgKiBodHRwczovL2JsdWVpbXAubmV0XG4gICAqXG4gICAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZTpcbiAgICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAgICpcbiAgICogQmFzZWQgb24gc3RhY2tvdmVyZmxvdyB1c2VyIFN0b2l2ZSdzIGNvZGUgc25pcHBldDpcbiAgICogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3EvNDk5ODkwOFxuICAgKi9cbiAgKGZ1bmN0aW9uIChtb2R1bGUpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gICAgKGZ1bmN0aW9uICh3aW5kb3cpIHtcblxuICAgICAgdmFyIENhbnZhc1Byb3RvdHlwZSA9IHdpbmRvdy5IVE1MQ2FudmFzRWxlbWVudCAmJiB3aW5kb3cuSFRNTENhbnZhc0VsZW1lbnQucHJvdG90eXBlO1xuICAgICAgdmFyIGhhc0Jsb2JDb25zdHJ1Y3RvciA9IHdpbmRvdy5CbG9iICYmIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gQm9vbGVhbihuZXcgQmxvYigpKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSgpO1xuICAgICAgdmFyIGhhc0FycmF5QnVmZmVyVmlld1N1cHBvcnQgPSBoYXNCbG9iQ29uc3RydWN0b3IgJiYgd2luZG93LlVpbnQ4QXJyYXkgJiYgZnVuY3Rpb24gKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBuZXcgQmxvYihbbmV3IFVpbnQ4QXJyYXkoMTAwKV0pLnNpemUgPT09IDEwMDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSgpO1xuICAgICAgdmFyIEJsb2JCdWlsZGVyID0gd2luZG93LkJsb2JCdWlsZGVyIHx8IHdpbmRvdy5XZWJLaXRCbG9iQnVpbGRlciB8fCB3aW5kb3cuTW96QmxvYkJ1aWxkZXIgfHwgd2luZG93Lk1TQmxvYkJ1aWxkZXI7XG4gICAgICB2YXIgZGF0YVVSSVBhdHRlcm4gPSAvXmRhdGE6KCguKj8pKDtjaGFyc2V0PS4qPyk/KSg7YmFzZTY0KT8sLztcbiAgICAgIHZhciBkYXRhVVJMdG9CbG9iID0gKGhhc0Jsb2JDb25zdHJ1Y3RvciB8fCBCbG9iQnVpbGRlcikgJiYgd2luZG93LmF0b2IgJiYgd2luZG93LkFycmF5QnVmZmVyICYmIHdpbmRvdy5VaW50OEFycmF5ICYmIGZ1bmN0aW9uIChkYXRhVVJJKSB7XG4gICAgICAgIHZhciBtYXRjaGVzLCBtZWRpYVR5cGUsIGlzQmFzZTY0LCBkYXRhU3RyaW5nLCBieXRlU3RyaW5nLCBhcnJheUJ1ZmZlciwgaW50QXJyYXksIGksIGJiO1xuICAgICAgICAvLyBQYXJzZSB0aGUgZGF0YVVSSSBjb21wb25lbnRzIGFzIHBlciBSRkMgMjM5N1xuICAgICAgICBtYXRjaGVzID0gZGF0YVVSSS5tYXRjaChkYXRhVVJJUGF0dGVybik7XG4gICAgICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBkYXRhIFVSSScpO1xuICAgICAgICB9XG4gICAgICAgIC8vIERlZmF1bHQgdG8gdGV4dC9wbGFpbjtjaGFyc2V0PVVTLUFTQ0lJXG4gICAgICAgIG1lZGlhVHlwZSA9IG1hdGNoZXNbMl0gPyBtYXRjaGVzWzFdIDogJ3RleHQvcGxhaW4nICsgKG1hdGNoZXNbM10gfHwgJztjaGFyc2V0PVVTLUFTQ0lJJyk7XG4gICAgICAgIGlzQmFzZTY0ID0gISFtYXRjaGVzWzRdO1xuICAgICAgICBkYXRhU3RyaW5nID0gZGF0YVVSSS5zbGljZShtYXRjaGVzWzBdLmxlbmd0aCk7XG4gICAgICAgIGlmIChpc0Jhc2U2NCkge1xuICAgICAgICAgIC8vIENvbnZlcnQgYmFzZTY0IHRvIHJhdyBiaW5hcnkgZGF0YSBoZWxkIGluIGEgc3RyaW5nOlxuICAgICAgICAgIGJ5dGVTdHJpbmcgPSBhdG9iKGRhdGFTdHJpbmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIENvbnZlcnQgYmFzZTY0L1VSTEVuY29kZWQgZGF0YSBjb21wb25lbnQgdG8gcmF3IGJpbmFyeTpcbiAgICAgICAgICBieXRlU3RyaW5nID0gZGVjb2RlVVJJQ29tcG9uZW50KGRhdGFTdHJpbmcpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFdyaXRlIHRoZSBieXRlcyBvZiB0aGUgc3RyaW5nIHRvIGFuIEFycmF5QnVmZmVyOlxuICAgICAgICBhcnJheUJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihieXRlU3RyaW5nLmxlbmd0aCk7XG4gICAgICAgIGludEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYnl0ZVN0cmluZy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGludEFycmF5W2ldID0gYnl0ZVN0cmluZy5jaGFyQ29kZUF0KGkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFdyaXRlIHRoZSBBcnJheUJ1ZmZlciAob3IgQXJyYXlCdWZmZXJWaWV3KSB0byBhIGJsb2I6XG4gICAgICAgIGlmIChoYXNCbG9iQ29uc3RydWN0b3IpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IEJsb2IoW2hhc0FycmF5QnVmZmVyVmlld1N1cHBvcnQgPyBpbnRBcnJheSA6IGFycmF5QnVmZmVyXSwge1xuICAgICAgICAgICAgdHlwZTogbWVkaWFUeXBlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgYmIgPSBuZXcgQmxvYkJ1aWxkZXIoKTtcbiAgICAgICAgYmIuYXBwZW5kKGFycmF5QnVmZmVyKTtcbiAgICAgICAgcmV0dXJuIGJiLmdldEJsb2IobWVkaWFUeXBlKTtcbiAgICAgIH07XG4gICAgICBpZiAod2luZG93LkhUTUxDYW52YXNFbGVtZW50ICYmICFDYW52YXNQcm90b3R5cGUudG9CbG9iKSB7XG4gICAgICAgIGlmIChDYW52YXNQcm90b3R5cGUubW96R2V0QXNGaWxlKSB7XG4gICAgICAgICAgQ2FudmFzUHJvdG90eXBlLnRvQmxvYiA9IGZ1bmN0aW9uIChjYWxsYmFjaywgdHlwZSwgcXVhbGl0eSkge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGlmIChxdWFsaXR5ICYmIENhbnZhc1Byb3RvdHlwZS50b0RhdGFVUkwgJiYgZGF0YVVSTHRvQmxvYikge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGFVUkx0b0Jsb2Ioc2VsZi50b0RhdGFVUkwodHlwZSwgcXVhbGl0eSkpKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhzZWxmLm1vekdldEFzRmlsZSgnYmxvYicsIHR5cGUpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChDYW52YXNQcm90b3R5cGUudG9EYXRhVVJMICYmIGRhdGFVUkx0b0Jsb2IpIHtcbiAgICAgICAgICBpZiAoQ2FudmFzUHJvdG90eXBlLm1zVG9CbG9iKSB7XG4gICAgICAgICAgICBDYW52YXNQcm90b3R5cGUudG9CbG9iID0gZnVuY3Rpb24gKGNhbGxiYWNrLCB0eXBlLCBxdWFsaXR5KSB7XG4gICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCh0eXBlICYmIHR5cGUgIT09ICdpbWFnZS9wbmcnIHx8IHF1YWxpdHkpICYmIENhbnZhc1Byb3RvdHlwZS50b0RhdGFVUkwgJiYgZGF0YVVSTHRvQmxvYikge1xuICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YVVSTHRvQmxvYihzZWxmLnRvRGF0YVVSTCh0eXBlLCBxdWFsaXR5KSkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBjYWxsYmFjayhzZWxmLm1zVG9CbG9iKHR5cGUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgQ2FudmFzUHJvdG90eXBlLnRvQmxvYiA9IGZ1bmN0aW9uIChjYWxsYmFjaywgdHlwZSwgcXVhbGl0eSkge1xuICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGFVUkx0b0Jsb2Ioc2VsZi50b0RhdGFVUkwodHlwZSwgcXVhbGl0eSkpKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZGF0YVVSTHRvQmxvYjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5kYXRhVVJMdG9CbG9iID0gZGF0YVVSTHRvQmxvYjtcbiAgICAgIH1cbiAgICB9KSh3aW5kb3cpO1xuICB9KShjYW52YXNUb0Jsb2IpO1xuICB2YXIgdG9CbG9iID0gY2FudmFzVG9CbG9iLmV4cG9ydHM7XG5cbiAgdmFyIGlzQmxvYiA9IGZ1bmN0aW9uIGlzQmxvYih2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgQmxvYiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgQmxvYiB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBCbG9iXSc7XG4gIH07XG5cbiAgdmFyIERFRkFVTFRTID0ge1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyBpZiBvdXRwdXQgdGhlIG9yaWdpbmFsIGltYWdlIGluc3RlYWQgb2YgdGhlIGNvbXByZXNzZWQgb25lXG4gICAgICogd2hlbiB0aGUgc2l6ZSBvZiB0aGUgY29tcHJlc3NlZCBpbWFnZSBpcyBncmVhdGVyIHRoYW4gdGhlIG9yaWdpbmFsIG9uZSdzXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgc3RyaWN0OiB0cnVlLFxuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyBpZiByZWFkIHRoZSBpbWFnZSdzIEV4aWYgT3JpZW50YXRpb24gaW5mb3JtYXRpb24sXG4gICAgICogYW5kIHRoZW4gcm90YXRlIG9yIGZsaXAgdGhlIGltYWdlIGF1dG9tYXRpY2FsbHkuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgY2hlY2tPcmllbnRhdGlvbjogdHJ1ZSxcbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgaWYgcmV0YWluIHRoZSBpbWFnZSdzIEV4aWYgaW5mb3JtYXRpb24gYWZ0ZXIgY29tcHJlc3NlZC5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAqL1xuICAgIHJldGFpbkV4aWY6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIFRoZSBtYXggd2lkdGggb2YgdGhlIG91dHB1dCBpbWFnZS5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIG1heFdpZHRoOiBJbmZpbml0eSxcbiAgICAvKipcbiAgICAgKiBUaGUgbWF4IGhlaWdodCBvZiB0aGUgb3V0cHV0IGltYWdlLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgbWF4SGVpZ2h0OiBJbmZpbml0eSxcbiAgICAvKipcbiAgICAgKiBUaGUgbWluIHdpZHRoIG9mIHRoZSBvdXRwdXQgaW1hZ2UuXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBtaW5XaWR0aDogMCxcbiAgICAvKipcbiAgICAgKiBUaGUgbWluIGhlaWdodCBvZiB0aGUgb3V0cHV0IGltYWdlLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgbWluSGVpZ2h0OiAwLFxuICAgIC8qKlxuICAgICAqIFRoZSB3aWR0aCBvZiB0aGUgb3V0cHV0IGltYWdlLlxuICAgICAqIElmIG5vdCBzcGVjaWZpZWQsIHRoZSBuYXR1cmFsIHdpZHRoIG9mIHRoZSBzb3VyY2UgaW1hZ2Ugd2lsbCBiZSB1c2VkLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgd2lkdGg6IHVuZGVmaW5lZCxcbiAgICAvKipcbiAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBvdXRwdXQgaW1hZ2UuXG4gICAgICogSWYgbm90IHNwZWNpZmllZCwgdGhlIG5hdHVyYWwgaGVpZ2h0IG9mIHRoZSBzb3VyY2UgaW1hZ2Ugd2lsbCBiZSB1c2VkLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgaGVpZ2h0OiB1bmRlZmluZWQsXG4gICAgLyoqXG4gICAgICogU2V0cyBob3cgdGhlIHNpemUgb2YgdGhlIGltYWdlIHNob3VsZCBiZSByZXNpemVkIHRvIHRoZSBjb250YWluZXJcbiAgICAgKiBzcGVjaWZpZWQgYnkgdGhlIGB3aWR0aGAgYW5kIGBoZWlnaHRgIG9wdGlvbnMuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICByZXNpemU6ICdub25lJyxcbiAgICAvKipcbiAgICAgKiBUaGUgcXVhbGl0eSBvZiB0aGUgb3V0cHV0IGltYWdlLlxuICAgICAqIEl0IG11c3QgYmUgYSBudW1iZXIgYmV0d2VlbiBgMGAgYW5kIGAxYCxcbiAgICAgKiBhbmQgb25seSBhdmFpbGFibGUgZm9yIGBpbWFnZS9qcGVnYCBhbmQgYGltYWdlL3dlYnBgIGltYWdlcy5cbiAgICAgKiBDaGVjayBvdXQge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IVE1MQ2FudmFzRWxlbWVudC90b0Jsb2IgY2FudmFzLnRvQmxvYn0uXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBxdWFsaXR5OiAwLjgsXG4gICAgLyoqXG4gICAgICogVGhlIG1pbWUgdHlwZSBvZiB0aGUgb3V0cHV0IGltYWdlLlxuICAgICAqIEJ5IGRlZmF1bHQsIHRoZSBvcmlnaW5hbCBtaW1lIHR5cGUgb2YgdGhlIHNvdXJjZSBpbWFnZSBmaWxlIHdpbGwgYmUgdXNlZC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIG1pbWVUeXBlOiAnYXV0bycsXG4gICAgLyoqXG4gICAgICogRmlsZXMgd2hvc2UgZmlsZSB0eXBlIGlzIGluY2x1ZGVkIGluIHRoaXMgbGlzdCxcbiAgICAgKiBhbmQgd2hvc2UgZmlsZSBzaXplIGV4Y2VlZHMgdGhlIGBjb252ZXJ0U2l6ZWAgdmFsdWUgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gSlBFR3MuXG4gICAgICogQHR5cGUge3N0cmluZ1x1RkY1Q0FycmF5fVxuICAgICAqL1xuICAgIGNvbnZlcnRUeXBlczogWydpbWFnZS9wbmcnXSxcbiAgICAvKipcbiAgICAgKiBQTkcgZmlsZXMgb3ZlciB0aGlzIHNpemUgKDUgTUIgYnkgZGVmYXVsdCkgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gSlBFR3MuXG4gICAgICogVG8gZGlzYWJsZSB0aGlzLCBqdXN0IHNldCB0aGUgdmFsdWUgdG8gYEluZmluaXR5YC5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIGNvbnZlcnRTaXplOiA1MDAwMDAwLFxuICAgIC8qKlxuICAgICAqIFRoZSBob29rIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgYmVmb3JlIGRyYXcgdGhlIGltYWdlIGludG8gdGhlIGNhbnZhcyBmb3IgY29tcHJlc3Npb24uXG4gICAgICogQHR5cGUge0Z1bmN0aW9ufVxuICAgICAqIEBwYXJhbSB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSBjb250ZXh0IC0gVGhlIDJkIHJlbmRlcmluZyBjb250ZXh0IG9mIHRoZSBjYW52YXMuXG4gICAgICogQHBhcmFtIHtIVE1MQ2FudmFzRWxlbWVudH0gY2FudmFzIC0gVGhlIGNhbnZhcyBmb3IgY29tcHJlc3Npb24uXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBmdW5jdGlvbiAoY29udGV4dCwgY2FudmFzKSB7XG4gICAgICogICBjb250ZXh0LmZpbGxTdHlsZSA9ICcjZmZmJztcbiAgICAgKiB9XG4gICAgICovXG4gICAgYmVmb3JlRHJhdzogbnVsbCxcbiAgICAvKipcbiAgICAgKiBUaGUgaG9vayBmdW5jdGlvbiB0byBleGVjdXRlIGFmdGVyIGRyZXcgdGhlIGltYWdlIGludG8gdGhlIGNhbnZhcyBmb3IgY29tcHJlc3Npb24uXG4gICAgICogQHR5cGUge0Z1bmN0aW9ufVxuICAgICAqIEBwYXJhbSB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSBjb250ZXh0IC0gVGhlIDJkIHJlbmRlcmluZyBjb250ZXh0IG9mIHRoZSBjYW52YXMuXG4gICAgICogQHBhcmFtIHtIVE1MQ2FudmFzRWxlbWVudH0gY2FudmFzIC0gVGhlIGNhbnZhcyBmb3IgY29tcHJlc3Npb24uXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBmdW5jdGlvbiAoY29udGV4dCwgY2FudmFzKSB7XG4gICAgICogICBjb250ZXh0LmZpbHRlciA9ICdncmF5c2NhbGUoMTAwJSknO1xuICAgICAqIH1cbiAgICAgKi9cbiAgICBkcmV3OiBudWxsLFxuICAgIC8qKlxuICAgICAqIFRoZSBob29rIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgd2hlbiBzdWNjZXNzIHRvIGNvbXByZXNzIHRoZSBpbWFnZS5cbiAgICAgKiBAdHlwZSB7RnVuY3Rpb259XG4gICAgICogQHBhcmFtIHtGaWxlfSBmaWxlIC0gVGhlIGNvbXByZXNzZWQgaW1hZ2UgRmlsZSBvYmplY3QuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBmdW5jdGlvbiAoZmlsZSkge1xuICAgICAqICAgY29uc29sZS5sb2coZmlsZSk7XG4gICAgICogfVxuICAgICAqL1xuICAgIHN1Y2Nlc3M6IG51bGwsXG4gICAgLyoqXG4gICAgICogVGhlIGhvb2sgZnVuY3Rpb24gdG8gZXhlY3V0ZSB3aGVuIGZhaWwgdG8gY29tcHJlc3MgdGhlIGltYWdlLlxuICAgICAqIEB0eXBlIHtGdW5jdGlvbn1cbiAgICAgKiBAcGFyYW0ge0Vycm9yfSBlcnIgLSBBbiBFcnJvciBvYmplY3QuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICogICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XG4gICAgICogfVxuICAgICAqL1xuICAgIGVycm9yOiBudWxsXG4gIH07XG5cbiAgdmFyIElTX0JST1dTRVIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50ICE9PSAndW5kZWZpbmVkJztcbiAgdmFyIFdJTkRPVyA9IElTX0JST1dTRVIgPyB3aW5kb3cgOiB7fTtcblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgcG9zaXRpdmUgbnVtYmVyLlxuICAgKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNoZWNrLlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgcG9zaXRpdmUgbnVtYmVyLCBlbHNlIGBmYWxzZWAuXG4gICAqL1xuICB2YXIgaXNQb3NpdGl2ZU51bWJlciA9IGZ1bmN0aW9uIGlzUG9zaXRpdmVOdW1iZXIodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPiAwICYmIHZhbHVlIDwgSW5maW5pdHk7XG4gIH07XG4gIHZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblxuICAvKipcbiAgICogQ29udmVydCBhcnJheS1saWtlIG9yIGl0ZXJhYmxlIG9iamVjdCB0byBhbiBhcnJheS5cbiAgICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICAgKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYSBuZXcgYXJyYXkuXG4gICAqL1xuICBmdW5jdGlvbiB0b0FycmF5KHZhbHVlKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20gPyBBcnJheS5mcm9tKHZhbHVlKSA6IHNsaWNlLmNhbGwodmFsdWUpO1xuICB9XG4gIHZhciBSRUdFWFBfSU1BR0VfVFlQRSA9IC9eaW1hZ2VcXC8uKyQvO1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBtaW1lIHR5cGUgb2YgaW1hZ2UuXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZ2l2ZW4gaXMgYSBtaW1lIHR5cGUgb2YgaW1hZ2UsIGVsc2UgYGZhbHNlYC5cbiAgICovXG4gIGZ1bmN0aW9uIGlzSW1hZ2VUeXBlKHZhbHVlKSB7XG4gICAgcmV0dXJuIFJFR0VYUF9JTUFHRV9UWVBFLnRlc3QodmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgaW1hZ2UgdHlwZSB0byBleHRlbnNpb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFRoZSBpbWFnZSB0eXBlIHRvIGNvbnZlcnQuXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIHRoZSBpbWFnZSBleHRlbnNpb24uXG4gICAqL1xuICBmdW5jdGlvbiBpbWFnZVR5cGVUb0V4dGVuc2lvbih2YWx1ZSkge1xuICAgIHZhciBleHRlbnNpb24gPSBpc0ltYWdlVHlwZSh2YWx1ZSkgPyB2YWx1ZS5zdWJzdHIoNikgOiAnJztcbiAgICBpZiAoZXh0ZW5zaW9uID09PSAnanBlZycpIHtcbiAgICAgIGV4dGVuc2lvbiA9ICdqcGcnO1xuICAgIH1cbiAgICByZXR1cm4gXCIuXCIuY29uY2F0KGV4dGVuc2lvbik7XG4gIH1cbiAgdmFyIGZyb21DaGFyQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGU7XG5cbiAgLyoqXG4gICAqIEdldCBzdHJpbmcgZnJvbSBjaGFyIGNvZGUgaW4gZGF0YSB2aWV3LlxuICAgKiBAcGFyYW0ge0RhdGFWaWV3fSBkYXRhVmlldyAtIFRoZSBkYXRhIHZpZXcgZm9yIHJlYWQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCAtIFRoZSBzdGFydCBpbmRleC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCAtIFRoZSByZWFkIGxlbmd0aC5cbiAgICogQHJldHVybnMge3N0cmluZ30gVGhlIHJlYWQgcmVzdWx0LlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0U3RyaW5nRnJvbUNoYXJDb2RlKGRhdGFWaWV3LCBzdGFydCwgbGVuZ3RoKSB7XG4gICAgdmFyIHN0ciA9ICcnO1xuICAgIHZhciBpO1xuICAgIGxlbmd0aCArPSBzdGFydDtcbiAgICBmb3IgKGkgPSBzdGFydDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBzdHIgKz0gZnJvbUNoYXJDb2RlKGRhdGFWaWV3LmdldFVpbnQ4KGkpKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBgY2FudmFzLmdldENvbnRleHQoJzJkJykuZ2V0SW1hZ2VEYXRhYCBpcyBhdmFpbGFibGUsXG4gICAqIEZpcmVGb3ggcmFuZG9taXplcyB0aGUgb3V0cHV0IG9mIHRoYXQgZnVuY3Rpb24gaW4gYHByaXZhY3kucmVzaXN0RmluZ2VycHJpbnRpbmdgIG1vZGUgKCMxMzcpXG4gICAqIEBsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlY2EvcGljYS9ibG9iL21hc3Rlci9saWIvdXRpbHMuanNcbiAgICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGl0IGlzIGF2YWlsYWJsZSwgZWxzZSBgZmFsc2VgLlxuICAgKi9cbiAgZnVuY3Rpb24gaXNDYW52YXNBdmFpbGFibGUoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgIGNhbnZhcy53aWR0aCA9IDI7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gMTtcbiAgICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICBpZiAoIWNvbnRleHQpIHJldHVybiBmYWxzZTtcblxuICAgICAgLy8gQ3JlYXRlIDJ4MSBpbWFnZSBkYXRhIGNvbnRhaW5pbmcgUkdCQSB2YWx1ZXMgZm9yIHR3byBwaXhlbHNcbiAgICAgIHZhciBpbWFnZURhdGEgPSBjb250ZXh0LmNyZWF0ZUltYWdlRGF0YSgyLCAxKTtcblxuICAgICAgLy8gRmlyc3QgcGl4ZWw6IFI9MTIsIEc9MjMsIEI9MzQsIEE9MjU1XG4gICAgICBpbWFnZURhdGEuZGF0YVswXSA9IDEyO1xuICAgICAgaW1hZ2VEYXRhLmRhdGFbMV0gPSAyMztcbiAgICAgIGltYWdlRGF0YS5kYXRhWzJdID0gMzQ7XG4gICAgICBpbWFnZURhdGEuZGF0YVszXSA9IDI1NTtcblxuICAgICAgLy8gU2Vjb25kIHBpeGVsOiBSPTQ1LCBHPTU2LCBCPTY3LCBBPTI1NVxuICAgICAgaW1hZ2VEYXRhLmRhdGFbNF0gPSA0NTtcbiAgICAgIGltYWdlRGF0YS5kYXRhWzVdID0gNTY7XG4gICAgICBpbWFnZURhdGEuZGF0YVs2XSA9IDY3O1xuICAgICAgaW1hZ2VEYXRhLmRhdGFbN10gPSAyNTU7XG4gICAgICBjb250ZXh0LnB1dEltYWdlRGF0YShpbWFnZURhdGEsIDAsIDApO1xuICAgICAgdmFyIHJlYWRCYWNrID0gY29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgMiwgMSk7XG5cbiAgICAgIC8vIEV4cGVjdGVkIHBpeGVsIGRhdGEgKG1hdGNoaW5nIHRoZSB3cml0dGVuIHZhbHVlcylcbiAgICAgIHZhciBleHBlY3RlZCA9IFsxMiwgMjMsIDM0LCAyNTUsIDQ1LCA1NiwgNjcsIDI1NV07XG5cbiAgICAgIC8vIENvbXBhcmUgZWxlbWVudCBieSBlbGVtZW50IHRvIGVuc3VyZSB3cml0ZSBhbmQgcmVhZCBjb25zaXN0ZW5jeVxuICAgICAgcmV0dXJuIHJlYWRCYWNrLmRhdGEuZXZlcnkoZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gdmFsdWUgPT09IGV4cGVjdGVkW2luZGV4XTtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHZhciBidG9hID0gV0lORE9XLmJ0b2E7XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybSBhcnJheSBidWZmZXIgdG8gRGF0YSBVUkwuXG4gICAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGFycmF5QnVmZmVyIC0gVGhlIGFycmF5IGJ1ZmZlciB0byB0cmFuc2Zvcm0uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtaW1lVHlwZSAtIFRoZSBtaW1lIHR5cGUgb2YgdGhlIERhdGEgVVJMLlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgcmVzdWx0IERhdGEgVVJMLlxuICAgKi9cbiAgZnVuY3Rpb24gYXJyYXlCdWZmZXJUb0RhdGFVUkwoYXJyYXlCdWZmZXIsIG1pbWVUeXBlKSB7XG4gICAgdmFyIGNodW5rcyA9IFtdO1xuICAgIHZhciBjaHVua1NpemUgPSA4MTkyO1xuICAgIHZhciB1aW50OCA9IG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKTtcbiAgICB3aGlsZSAodWludDgubGVuZ3RoID4gMCkge1xuICAgICAgLy8gWFhYOiBCYWJlbCdzIGB0b0NvbnN1bWFibGVBcnJheWAgaGVscGVyIHdpbGwgdGhyb3cgZXJyb3IgaW4gSUUgb3IgU2FmYXJpIDlcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItc3ByZWFkXG4gICAgICBjaHVua3MucHVzaChmcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgdG9BcnJheSh1aW50OC5zdWJhcnJheSgwLCBjaHVua1NpemUpKSkpO1xuICAgICAgdWludDggPSB1aW50OC5zdWJhcnJheShjaHVua1NpemUpO1xuICAgIH1cbiAgICByZXR1cm4gXCJkYXRhOlwiLmNvbmNhdChtaW1lVHlwZSwgXCI7YmFzZTY0LFwiKS5jb25jYXQoYnRvYShjaHVua3Muam9pbignJykpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgb3JpZW50YXRpb24gdmFsdWUgZnJvbSBnaXZlbiBhcnJheSBidWZmZXIuXG4gICAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGFycmF5QnVmZmVyIC0gVGhlIGFycmF5IGJ1ZmZlciB0byByZWFkLlxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgcmVhZCBvcmllbnRhdGlvbiB2YWx1ZS5cbiAgICovXG4gIGZ1bmN0aW9uIHJlc2V0QW5kR2V0T3JpZW50YXRpb24oYXJyYXlCdWZmZXIpIHtcbiAgICB2YXIgZGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcoYXJyYXlCdWZmZXIpO1xuICAgIHZhciBvcmllbnRhdGlvbjtcblxuICAgIC8vIElnbm9yZXMgcmFuZ2UgZXJyb3Igd2hlbiB0aGUgaW1hZ2UgZG9lcyBub3QgaGF2ZSBjb3JyZWN0IEV4aWYgaW5mb3JtYXRpb25cbiAgICB0cnkge1xuICAgICAgdmFyIGxpdHRsZUVuZGlhbjtcbiAgICAgIHZhciBhcHAxU3RhcnQ7XG4gICAgICB2YXIgaWZkU3RhcnQ7XG5cbiAgICAgIC8vIE9ubHkgaGFuZGxlIEpQRUcgaW1hZ2UgKHN0YXJ0IGJ5IDB4RkZEOClcbiAgICAgIGlmIChkYXRhVmlldy5nZXRVaW50OCgwKSA9PT0gMHhGRiAmJiBkYXRhVmlldy5nZXRVaW50OCgxKSA9PT0gMHhEOCkge1xuICAgICAgICB2YXIgbGVuZ3RoID0gZGF0YVZpZXcuYnl0ZUxlbmd0aDtcbiAgICAgICAgdmFyIG9mZnNldCA9IDI7XG4gICAgICAgIHdoaWxlIChvZmZzZXQgKyAxIDwgbGVuZ3RoKSB7XG4gICAgICAgICAgaWYgKGRhdGFWaWV3LmdldFVpbnQ4KG9mZnNldCkgPT09IDB4RkYgJiYgZGF0YVZpZXcuZ2V0VWludDgob2Zmc2V0ICsgMSkgPT09IDB4RTEpIHtcbiAgICAgICAgICAgIGFwcDFTdGFydCA9IG9mZnNldDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvZmZzZXQgKz0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGFwcDFTdGFydCkge1xuICAgICAgICB2YXIgZXhpZklEQ29kZSA9IGFwcDFTdGFydCArIDQ7XG4gICAgICAgIHZhciB0aWZmT2Zmc2V0ID0gYXBwMVN0YXJ0ICsgMTA7XG4gICAgICAgIGlmIChnZXRTdHJpbmdGcm9tQ2hhckNvZGUoZGF0YVZpZXcsIGV4aWZJRENvZGUsIDQpID09PSAnRXhpZicpIHtcbiAgICAgICAgICB2YXIgZW5kaWFubmVzcyA9IGRhdGFWaWV3LmdldFVpbnQxNih0aWZmT2Zmc2V0KTtcbiAgICAgICAgICBsaXR0bGVFbmRpYW4gPSBlbmRpYW5uZXNzID09PSAweDQ5NDk7XG4gICAgICAgICAgaWYgKGxpdHRsZUVuZGlhbiB8fCBlbmRpYW5uZXNzID09PSAweDRENEQgLyogYmlnRW5kaWFuICovKSB7XG4gICAgICAgICAgICBpZiAoZGF0YVZpZXcuZ2V0VWludDE2KHRpZmZPZmZzZXQgKyAyLCBsaXR0bGVFbmRpYW4pID09PSAweDAwMkEpIHtcbiAgICAgICAgICAgICAgdmFyIGZpcnN0SUZET2Zmc2V0ID0gZGF0YVZpZXcuZ2V0VWludDMyKHRpZmZPZmZzZXQgKyA0LCBsaXR0bGVFbmRpYW4pO1xuICAgICAgICAgICAgICBpZiAoZmlyc3RJRkRPZmZzZXQgPj0gMHgwMDAwMDAwOCkge1xuICAgICAgICAgICAgICAgIGlmZFN0YXJ0ID0gdGlmZk9mZnNldCArIGZpcnN0SUZET2Zmc2V0O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaWZkU3RhcnQpIHtcbiAgICAgICAgdmFyIF9sZW5ndGggPSBkYXRhVmlldy5nZXRVaW50MTYoaWZkU3RhcnQsIGxpdHRsZUVuZGlhbik7XG4gICAgICAgIHZhciBfb2Zmc2V0O1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IF9sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIF9vZmZzZXQgPSBpZmRTdGFydCArIGkgKiAxMiArIDI7XG4gICAgICAgICAgaWYgKGRhdGFWaWV3LmdldFVpbnQxNihfb2Zmc2V0LCBsaXR0bGVFbmRpYW4pID09PSAweDAxMTIgLyogT3JpZW50YXRpb24gKi8pIHtcbiAgICAgICAgICAgIC8vIDggaXMgdGhlIG9mZnNldCBvZiB0aGUgY3VycmVudCB0YWcncyB2YWx1ZVxuICAgICAgICAgICAgX29mZnNldCArPSA4O1xuXG4gICAgICAgICAgICAvLyBHZXQgdGhlIG9yaWdpbmFsIG9yaWVudGF0aW9uIHZhbHVlXG4gICAgICAgICAgICBvcmllbnRhdGlvbiA9IGRhdGFWaWV3LmdldFVpbnQxNihfb2Zmc2V0LCBsaXR0bGVFbmRpYW4pO1xuXG4gICAgICAgICAgICAvLyBPdmVycmlkZSB0aGUgb3JpZW50YXRpb24gd2l0aCBpdHMgZGVmYXVsdCB2YWx1ZVxuICAgICAgICAgICAgZGF0YVZpZXcuc2V0VWludDE2KF9vZmZzZXQsIDEsIGxpdHRsZUVuZGlhbik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBvcmllbnRhdGlvbiA9IDE7XG4gICAgfVxuICAgIHJldHVybiBvcmllbnRhdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZSBFeGlmIE9yaWVudGF0aW9uIHZhbHVlLlxuICAgKiBAcGFyYW0ge251bWJlcn0gb3JpZW50YXRpb24gLSBUaGUgb3JpZW50YXRpb24gdG8gcGFyc2UuXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBwYXJzZWQgcmVzdWx0LlxuICAgKi9cbiAgZnVuY3Rpb24gcGFyc2VPcmllbnRhdGlvbihvcmllbnRhdGlvbikge1xuICAgIHZhciByb3RhdGUgPSAwO1xuICAgIHZhciBzY2FsZVggPSAxO1xuICAgIHZhciBzY2FsZVkgPSAxO1xuICAgIHN3aXRjaCAob3JpZW50YXRpb24pIHtcbiAgICAgIC8vIEZsaXAgaG9yaXpvbnRhbFxuICAgICAgY2FzZSAyOlxuICAgICAgICBzY2FsZVggPSAtMTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8vIFJvdGF0ZSBsZWZ0IDE4MFx1MDBCMFxuICAgICAgY2FzZSAzOlxuICAgICAgICByb3RhdGUgPSAtMTgwO1xuICAgICAgICBicmVhaztcblxuICAgICAgLy8gRmxpcCB2ZXJ0aWNhbFxuICAgICAgY2FzZSA0OlxuICAgICAgICBzY2FsZVkgPSAtMTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8vIEZsaXAgdmVydGljYWwgYW5kIHJvdGF0ZSByaWdodCA5MFx1MDBCMFxuICAgICAgY2FzZSA1OlxuICAgICAgICByb3RhdGUgPSA5MDtcbiAgICAgICAgc2NhbGVZID0gLTE7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvLyBSb3RhdGUgcmlnaHQgOTBcdTAwQjBcbiAgICAgIGNhc2UgNjpcbiAgICAgICAgcm90YXRlID0gOTA7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvLyBGbGlwIGhvcml6b250YWwgYW5kIHJvdGF0ZSByaWdodCA5MFx1MDBCMFxuICAgICAgY2FzZSA3OlxuICAgICAgICByb3RhdGUgPSA5MDtcbiAgICAgICAgc2NhbGVYID0gLTE7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvLyBSb3RhdGUgbGVmdCA5MFx1MDBCMFxuICAgICAgY2FzZSA4OlxuICAgICAgICByb3RhdGUgPSAtOTA7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgcm90YXRlOiByb3RhdGUsXG4gICAgICBzY2FsZVg6IHNjYWxlWCxcbiAgICAgIHNjYWxlWTogc2NhbGVZXG4gICAgfTtcbiAgfVxuICB2YXIgUkVHRVhQX0RFQ0lNQUxTID0gL1xcLlxcZCooPzowfDkpezEyfVxcZCokLztcblxuICAvKipcbiAgICogTm9ybWFsaXplIGRlY2ltYWwgbnVtYmVyLlxuICAgKiBDaGVjayBvdXQge0BsaW5rIGh0dHBzOi8vMC4zMDAwMDAwMDAwMDAwMDAwNC5jb20vfVxuICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gbm9ybWFsaXplLlxuICAgKiBAcGFyYW0ge251bWJlcn0gW3RpbWVzPTEwMDAwMDAwMDAwMF0gLSBUaGUgdGltZXMgZm9yIG5vcm1hbGl6aW5nLlxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBub3JtYWxpemVkIG51bWJlci5cbiAgICovXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZURlY2ltYWxOdW1iZXIodmFsdWUpIHtcbiAgICB2YXIgdGltZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDEwMDAwMDAwMDAwMDtcbiAgICByZXR1cm4gUkVHRVhQX0RFQ0lNQUxTLnRlc3QodmFsdWUpID8gTWF0aC5yb3VuZCh2YWx1ZSAqIHRpbWVzKSAvIHRpbWVzIDogdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBtYXggc2l6ZXMgaW4gYSByZWN0YW5nbGUgdW5kZXIgdGhlIGdpdmVuIGFzcGVjdCByYXRpby5cbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgLSBUaGUgb3JpZ2luYWwgc2l6ZXMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbdHlwZT0nY29udGFpbiddIC0gVGhlIGFkanVzdCB0eXBlLlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgcmVzdWx0IHNpemVzLlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0QWRqdXN0ZWRTaXplcyhfcmVmKSB7XG4gICAgdmFyIGFzcGVjdFJhdGlvID0gX3JlZi5hc3BlY3RSYXRpbyxcbiAgICAgIGhlaWdodCA9IF9yZWYuaGVpZ2h0LFxuICAgICAgd2lkdGggPSBfcmVmLndpZHRoO1xuICAgIHZhciB0eXBlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnbm9uZSc7XG4gICAgdmFyIGlzVmFsaWRXaWR0aCA9IGlzUG9zaXRpdmVOdW1iZXIod2lkdGgpO1xuICAgIHZhciBpc1ZhbGlkSGVpZ2h0ID0gaXNQb3NpdGl2ZU51bWJlcihoZWlnaHQpO1xuICAgIGlmIChpc1ZhbGlkV2lkdGggJiYgaXNWYWxpZEhlaWdodCkge1xuICAgICAgdmFyIGFkanVzdGVkV2lkdGggPSBoZWlnaHQgKiBhc3BlY3RSYXRpbztcbiAgICAgIGlmICgodHlwZSA9PT0gJ2NvbnRhaW4nIHx8IHR5cGUgPT09ICdub25lJykgJiYgYWRqdXN0ZWRXaWR0aCA+IHdpZHRoIHx8IHR5cGUgPT09ICdjb3ZlcicgJiYgYWRqdXN0ZWRXaWR0aCA8IHdpZHRoKSB7XG4gICAgICAgIGhlaWdodCA9IHdpZHRoIC8gYXNwZWN0UmF0aW87XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aWR0aCA9IGhlaWdodCAqIGFzcGVjdFJhdGlvO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNWYWxpZFdpZHRoKSB7XG4gICAgICBoZWlnaHQgPSB3aWR0aCAvIGFzcGVjdFJhdGlvO1xuICAgIH0gZWxzZSBpZiAoaXNWYWxpZEhlaWdodCkge1xuICAgICAgd2lkdGggPSBoZWlnaHQgKiBhc3BlY3RSYXRpbztcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgRXhpZiBpbmZvcm1hdGlvbiBmcm9tIHRoZSBnaXZlbiBhcnJheSBidWZmZXIuXG4gICAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGFycmF5QnVmZmVyIC0gVGhlIGFycmF5IGJ1ZmZlciB0byByZWFkLlxuICAgKiBAcmV0dXJucyB7QXJyYXl9IFRoZSByZWFkIEV4aWYgaW5mb3JtYXRpb24uXG4gICAqL1xuICBmdW5jdGlvbiBnZXRFeGlmKGFycmF5QnVmZmVyKSB7XG4gICAgdmFyIGFycmF5ID0gdG9BcnJheShuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcikpO1xuICAgIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gICAgdmFyIHNlZ21lbnRzID0gW107XG4gICAgdmFyIHN0YXJ0ID0gMDtcbiAgICB3aGlsZSAoc3RhcnQgKyAzIDwgbGVuZ3RoKSB7XG4gICAgICB2YXIgdmFsdWUgPSBhcnJheVtzdGFydF07XG4gICAgICB2YXIgbmV4dCA9IGFycmF5W3N0YXJ0ICsgMV07XG5cbiAgICAgIC8vIFNPUyAoU3RhcnQgb2YgU2NhbilcbiAgICAgIGlmICh2YWx1ZSA9PT0gMHhGRiAmJiBuZXh0ID09PSAweERBKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICAvLyBTT0kgKFN0YXJ0IG9mIEltYWdlKVxuICAgICAgaWYgKHZhbHVlID09PSAweEZGICYmIG5leHQgPT09IDB4RDgpIHtcbiAgICAgICAgc3RhcnQgKz0gMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBvZmZzZXQgPSBhcnJheVtzdGFydCArIDJdICogMjU2ICsgYXJyYXlbc3RhcnQgKyAzXTtcbiAgICAgICAgdmFyIGVuZCA9IHN0YXJ0ICsgb2Zmc2V0ICsgMjtcbiAgICAgICAgdmFyIHNlZ21lbnQgPSBhcnJheS5zbGljZShzdGFydCwgZW5kKTtcbiAgICAgICAgc2VnbWVudHMucHVzaChzZWdtZW50KTtcbiAgICAgICAgc3RhcnQgPSBlbmQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzZWdtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGV4aWZBcnJheSwgY3VycmVudCkge1xuICAgICAgaWYgKGN1cnJlbnRbMF0gPT09IDB4RkYgJiYgY3VycmVudFsxXSA9PT0gMHhFMSkge1xuICAgICAgICByZXR1cm4gZXhpZkFycmF5LmNvbmNhdChjdXJyZW50KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBleGlmQXJyYXk7XG4gICAgfSwgW10pO1xuICB9XG5cbiAgLyoqXG4gICAqIEluc2VydCBFeGlmIGluZm9ybWF0aW9uIGludG8gdGhlIGdpdmVuIGFycmF5IGJ1ZmZlci5cbiAgICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gYXJyYXlCdWZmZXIgLSBUaGUgYXJyYXkgYnVmZmVyIHRvIHRyYW5zZm9ybS5cbiAgICogQHBhcmFtIHtBcnJheX0gZXhpZkFycmF5IC0gVGhlIEV4aWYgaW5mb3JtYXRpb24gdG8gaW5zZXJ0LlxuICAgKiBAcmV0dXJucyB7QXJyYXlCdWZmZXJ9IFRoZSB0cmFuc2Zvcm1lZCBhcnJheSBidWZmZXIuXG4gICAqL1xuICBmdW5jdGlvbiBpbnNlcnRFeGlmKGFycmF5QnVmZmVyLCBleGlmQXJyYXkpIHtcbiAgICB2YXIgYXJyYXkgPSB0b0FycmF5KG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKSk7XG4gICAgaWYgKGFycmF5WzJdICE9PSAweEZGIHx8IGFycmF5WzNdICE9PSAweEUwKSB7XG4gICAgICByZXR1cm4gYXJyYXlCdWZmZXI7XG4gICAgfVxuICAgIHZhciBhcHAwTGVuZ3RoID0gYXJyYXlbNF0gKiAyNTYgKyBhcnJheVs1XTtcbiAgICB2YXIgbmV3QXJyYXlCdWZmZXIgPSBbMHhGRiwgMHhEOF0uY29uY2F0KGV4aWZBcnJheSwgYXJyYXkuc2xpY2UoNCArIGFwcDBMZW5ndGgpKTtcbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkobmV3QXJyYXlCdWZmZXIpO1xuICB9XG5cbiAgdmFyIEFycmF5QnVmZmVyJDEgPSBXSU5ET1cuQXJyYXlCdWZmZXIsXG4gICAgRmlsZVJlYWRlciA9IFdJTkRPVy5GaWxlUmVhZGVyO1xuICB2YXIgVVJMID0gV0lORE9XLlVSTCB8fCBXSU5ET1cud2Via2l0VVJMO1xuICB2YXIgUkVHRVhQX0VYVEVOU0lPTiA9IC9cXC5cXHcrJC87XG4gIHZhciBBbm90aGVyQ29tcHJlc3NvciA9IFdJTkRPVy5Db21wcmVzc29yO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGltYWdlIGNvbXByZXNzb3IuXG4gICAqIEBjbGFzc1xuICAgKi9cbiAgdmFyIENvbXByZXNzb3IgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIFRoZSBjb25zdHJ1Y3RvciBvZiBDb21wcmVzc29yLlxuICAgICAqIEBwYXJhbSB7RmlsZXxCbG9ifSBmaWxlIC0gVGhlIHRhcmdldCBpbWFnZSBmaWxlIGZvciBjb21wcmVzc2luZy5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gVGhlIG9wdGlvbnMgZm9yIGNvbXByZXNzaW5nLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIENvbXByZXNzb3IoZmlsZSwgb3B0aW9ucykge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbXByZXNzb3IpO1xuICAgICAgdGhpcy5maWxlID0gZmlsZTtcbiAgICAgIHRoaXMuZXhpZiA9IFtdO1xuICAgICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgdGhpcy5vcHRpb25zID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIERFRkFVTFRTKSwgb3B0aW9ucyk7XG4gICAgICB0aGlzLmFib3J0ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzdWx0ID0gbnVsbDtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cbiAgICByZXR1cm4gX2NyZWF0ZUNsYXNzKENvbXByZXNzb3IsIFt7XG4gICAgICBrZXk6IFwiaW5pdFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBmaWxlID0gdGhpcy5maWxlLFxuICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGlmICghaXNCbG9iKGZpbGUpKSB7XG4gICAgICAgICAgdGhpcy5mYWlsKG5ldyBFcnJvcignVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBGaWxlIG9yIEJsb2Igb2JqZWN0LicpKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1pbWVUeXBlID0gZmlsZS50eXBlO1xuICAgICAgICBpZiAoIWlzSW1hZ2VUeXBlKG1pbWVUeXBlKSkge1xuICAgICAgICAgIHRoaXMuZmFpbChuZXcgRXJyb3IoJ1RoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGFuIGltYWdlIEZpbGUgb3IgQmxvYiBvYmplY3QuJykpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVVSTCB8fCAhRmlsZVJlYWRlcikge1xuICAgICAgICAgIHRoaXMuZmFpbChuZXcgRXJyb3IoJ1RoZSBjdXJyZW50IGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBpbWFnZSBjb21wcmVzc2lvbi4nKSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghQXJyYXlCdWZmZXIkMSkge1xuICAgICAgICAgIG9wdGlvbnMuY2hlY2tPcmllbnRhdGlvbiA9IGZhbHNlO1xuICAgICAgICAgIG9wdGlvbnMucmV0YWluRXhpZiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpc0pQRUdJbWFnZSA9IG1pbWVUeXBlID09PSAnaW1hZ2UvanBlZyc7XG4gICAgICAgIHZhciBjaGVja09yaWVudGF0aW9uID0gaXNKUEVHSW1hZ2UgJiYgb3B0aW9ucy5jaGVja09yaWVudGF0aW9uO1xuICAgICAgICB2YXIgcmV0YWluRXhpZiA9IGlzSlBFR0ltYWdlICYmIG9wdGlvbnMucmV0YWluRXhpZjtcbiAgICAgICAgaWYgKFVSTCAmJiAhY2hlY2tPcmllbnRhdGlvbiAmJiAhcmV0YWluRXhpZikge1xuICAgICAgICAgIHRoaXMubG9hZCh7XG4gICAgICAgICAgICB1cmw6IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSlcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICB0aGlzLnJlYWRlciA9IHJlYWRlcjtcbiAgICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBfcmVmLnRhcmdldDtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB7fTtcbiAgICAgICAgICAgIHZhciBvcmllbnRhdGlvbiA9IDE7XG4gICAgICAgICAgICBpZiAoY2hlY2tPcmllbnRhdGlvbikge1xuICAgICAgICAgICAgICAvLyBSZXNldCB0aGUgb3JpZW50YXRpb24gdmFsdWUgdG8gaXRzIGRlZmF1bHQgdmFsdWUgMVxuICAgICAgICAgICAgICAvLyBhcyBzb21lIGlPUyBicm93c2VycyB3aWxsIHJlbmRlciBpbWFnZSB3aXRoIGl0cyBvcmllbnRhdGlvblxuICAgICAgICAgICAgICBvcmllbnRhdGlvbiA9IHJlc2V0QW5kR2V0T3JpZW50YXRpb24ocmVzdWx0KTtcbiAgICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID4gMSkge1xuICAgICAgICAgICAgICAgIF9leHRlbmRzKGRhdGEsIHBhcnNlT3JpZW50YXRpb24ob3JpZW50YXRpb24pKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJldGFpbkV4aWYpIHtcbiAgICAgICAgICAgICAgX3RoaXMuZXhpZiA9IGdldEV4aWYocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaGVja09yaWVudGF0aW9uIHx8IHJldGFpbkV4aWYpIHtcbiAgICAgICAgICAgICAgaWYgKCFVUkxcblxuICAgICAgICAgICAgICAvLyBHZW5lcmF0ZSBhIG5ldyBVUkwgd2l0aCB0aGUgZGVmYXVsdCBvcmllbnRhdGlvbiB2YWx1ZSAxLlxuICAgICAgICAgICAgICB8fCBvcmllbnRhdGlvbiA+IDEpIHtcbiAgICAgICAgICAgICAgICBkYXRhLnVybCA9IGFycmF5QnVmZmVyVG9EYXRhVVJMKHJlc3VsdCwgbWltZVR5cGUpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGEudXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGF0YS51cmwgPSByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy5sb2FkKGRhdGEpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgcmVhZGVyLm9uYWJvcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5mYWlsKG5ldyBFcnJvcignQWJvcnRlZCB0byByZWFkIHRoZSBpbWFnZSB3aXRoIEZpbGVSZWFkZXIuJykpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5mYWlsKG5ldyBFcnJvcignRmFpbGVkIHRvIHJlYWQgdGhlIGltYWdlIHdpdGggRmlsZVJlYWRlci4nKSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMucmVhZGVyID0gbnVsbDtcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmIChjaGVja09yaWVudGF0aW9uIHx8IHJldGFpbkV4aWYpIHtcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihmaWxlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImxvYWRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkKGRhdGEpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG4gICAgICAgIHZhciBmaWxlID0gdGhpcy5maWxlLFxuICAgICAgICAgIGltYWdlID0gdGhpcy5pbWFnZTtcbiAgICAgICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChpc0NhbnZhc0F2YWlsYWJsZSgpKSB7XG4gICAgICAgICAgICBfdGhpczIuZHJhdyhfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgZGF0YSksIHt9LCB7XG4gICAgICAgICAgICAgIG5hdHVyYWxXaWR0aDogaW1hZ2UubmF0dXJhbFdpZHRoLFxuICAgICAgICAgICAgICBuYXR1cmFsSGVpZ2h0OiBpbWFnZS5uYXR1cmFsSGVpZ2h0XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzMi5kb25lKHtcbiAgICAgICAgICAgICAgbmF0dXJhbFdpZHRoOiBpbWFnZS5uYXR1cmFsV2lkdGgsXG4gICAgICAgICAgICAgIG5hdHVyYWxIZWlnaHQ6IGltYWdlLm5hdHVyYWxIZWlnaHQsXG4gICAgICAgICAgICAgIHJlc3VsdDogbnVsbFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBpbWFnZS5vbmFib3J0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMi5mYWlsKG5ldyBFcnJvcignQWJvcnRlZCB0byBsb2FkIHRoZSBpbWFnZS4nKSk7XG4gICAgICAgIH07XG4gICAgICAgIGltYWdlLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMyLmZhaWwobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCB0aGUgaW1hZ2UuJykpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIE1hdGNoIGFsbCBicm93c2VycyB0aGF0IHVzZSBXZWJLaXQgYXMgdGhlIGxheW91dCBlbmdpbmUgaW4gaU9TIGRldmljZXMsXG4gICAgICAgIC8vIHN1Y2ggYXMgU2FmYXJpIGZvciBpT1MsIENocm9tZSBmb3IgaU9TLCBhbmQgaW4tYXBwIGJyb3dzZXJzLlxuICAgICAgICBpZiAoV0lORE9XLm5hdmlnYXRvciAmJiAvKD86aVBhZHxpUGhvbmV8aVBvZCkuKj9BcHBsZVdlYktpdC9pLnRlc3QoV0lORE9XLm5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgICAgLy8gRml4IHRoZSBgVGhlIG9wZXJhdGlvbiBpcyBpbnNlY3VyZWAgZXJyb3IgKCM1NylcbiAgICAgICAgICBpbWFnZS5jcm9zc09yaWdpbiA9ICdhbm9ueW1vdXMnO1xuICAgICAgICB9XG4gICAgICAgIGltYWdlLmFsdCA9IGZpbGUubmFtZTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gZGF0YS51cmw7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImRyYXdcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBkcmF3KF9yZWYyKSB7XG4gICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuICAgICAgICB2YXIgbmF0dXJhbFdpZHRoID0gX3JlZjIubmF0dXJhbFdpZHRoLFxuICAgICAgICAgIG5hdHVyYWxIZWlnaHQgPSBfcmVmMi5uYXR1cmFsSGVpZ2h0LFxuICAgICAgICAgIF9yZWYyJHJvdGF0ZSA9IF9yZWYyLnJvdGF0ZSxcbiAgICAgICAgICByb3RhdGUgPSBfcmVmMiRyb3RhdGUgPT09IHZvaWQgMCA/IDAgOiBfcmVmMiRyb3RhdGUsXG4gICAgICAgICAgX3JlZjIkc2NhbGVYID0gX3JlZjIuc2NhbGVYLFxuICAgICAgICAgIHNjYWxlWCA9IF9yZWYyJHNjYWxlWCA9PT0gdm9pZCAwID8gMSA6IF9yZWYyJHNjYWxlWCxcbiAgICAgICAgICBfcmVmMiRzY2FsZVkgPSBfcmVmMi5zY2FsZVksXG4gICAgICAgICAgc2NhbGVZID0gX3JlZjIkc2NhbGVZID09PSB2b2lkIDAgPyAxIDogX3JlZjIkc2NhbGVZO1xuICAgICAgICB2YXIgZmlsZSA9IHRoaXMuZmlsZSxcbiAgICAgICAgICBpbWFnZSA9IHRoaXMuaW1hZ2UsXG4gICAgICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB2YXIgaXM5MERlZ3JlZXNSb3RhdGVkID0gTWF0aC5hYnMocm90YXRlKSAlIDE4MCA9PT0gOTA7XG4gICAgICAgIHZhciByZXNpemFibGUgPSAob3B0aW9ucy5yZXNpemUgPT09ICdjb250YWluJyB8fCBvcHRpb25zLnJlc2l6ZSA9PT0gJ2NvdmVyJykgJiYgaXNQb3NpdGl2ZU51bWJlcihvcHRpb25zLndpZHRoKSAmJiBpc1Bvc2l0aXZlTnVtYmVyKG9wdGlvbnMuaGVpZ2h0KTtcbiAgICAgICAgdmFyIG1heFdpZHRoID0gTWF0aC5tYXgob3B0aW9ucy5tYXhXaWR0aCwgMCkgfHwgSW5maW5pdHk7XG4gICAgICAgIHZhciBtYXhIZWlnaHQgPSBNYXRoLm1heChvcHRpb25zLm1heEhlaWdodCwgMCkgfHwgSW5maW5pdHk7XG4gICAgICAgIHZhciBtaW5XaWR0aCA9IE1hdGgubWF4KG9wdGlvbnMubWluV2lkdGgsIDApIHx8IDA7XG4gICAgICAgIHZhciBtaW5IZWlnaHQgPSBNYXRoLm1heChvcHRpb25zLm1pbkhlaWdodCwgMCkgfHwgMDtcbiAgICAgICAgdmFyIGFzcGVjdFJhdGlvID0gbmF0dXJhbFdpZHRoIC8gbmF0dXJhbEhlaWdodDtcbiAgICAgICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCxcbiAgICAgICAgICBoZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcbiAgICAgICAgaWYgKGlzOTBEZWdyZWVzUm90YXRlZCkge1xuICAgICAgICAgIHZhciBfcmVmMyA9IFttYXhIZWlnaHQsIG1heFdpZHRoXTtcbiAgICAgICAgICBtYXhXaWR0aCA9IF9yZWYzWzBdO1xuICAgICAgICAgIG1heEhlaWdodCA9IF9yZWYzWzFdO1xuICAgICAgICAgIHZhciBfcmVmNCA9IFttaW5IZWlnaHQsIG1pbldpZHRoXTtcbiAgICAgICAgICBtaW5XaWR0aCA9IF9yZWY0WzBdO1xuICAgICAgICAgIG1pbkhlaWdodCA9IF9yZWY0WzFdO1xuICAgICAgICAgIHZhciBfcmVmNSA9IFtoZWlnaHQsIHdpZHRoXTtcbiAgICAgICAgICB3aWR0aCA9IF9yZWY1WzBdO1xuICAgICAgICAgIGhlaWdodCA9IF9yZWY1WzFdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNpemFibGUpIHtcbiAgICAgICAgICBhc3BlY3RSYXRpbyA9IHdpZHRoIC8gaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHZhciBfZ2V0QWRqdXN0ZWRTaXplcyA9IGdldEFkanVzdGVkU2l6ZXMoe1xuICAgICAgICAgIGFzcGVjdFJhdGlvOiBhc3BlY3RSYXRpbyxcbiAgICAgICAgICB3aWR0aDogbWF4V2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBtYXhIZWlnaHRcbiAgICAgICAgfSwgJ2NvbnRhaW4nKTtcbiAgICAgICAgbWF4V2lkdGggPSBfZ2V0QWRqdXN0ZWRTaXplcy53aWR0aDtcbiAgICAgICAgbWF4SGVpZ2h0ID0gX2dldEFkanVzdGVkU2l6ZXMuaGVpZ2h0O1xuICAgICAgICB2YXIgX2dldEFkanVzdGVkU2l6ZXMyID0gZ2V0QWRqdXN0ZWRTaXplcyh7XG4gICAgICAgICAgYXNwZWN0UmF0aW86IGFzcGVjdFJhdGlvLFxuICAgICAgICAgIHdpZHRoOiBtaW5XaWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IG1pbkhlaWdodFxuICAgICAgICB9LCAnY292ZXInKTtcbiAgICAgICAgbWluV2lkdGggPSBfZ2V0QWRqdXN0ZWRTaXplczIud2lkdGg7XG4gICAgICAgIG1pbkhlaWdodCA9IF9nZXRBZGp1c3RlZFNpemVzMi5oZWlnaHQ7XG4gICAgICAgIGlmIChyZXNpemFibGUpIHtcbiAgICAgICAgICB2YXIgX2dldEFkanVzdGVkU2l6ZXMzID0gZ2V0QWRqdXN0ZWRTaXplcyh7XG4gICAgICAgICAgICBhc3BlY3RSYXRpbzogYXNwZWN0UmF0aW8sXG4gICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodFxuICAgICAgICAgIH0sIG9wdGlvbnMucmVzaXplKTtcbiAgICAgICAgICB3aWR0aCA9IF9nZXRBZGp1c3RlZFNpemVzMy53aWR0aDtcbiAgICAgICAgICBoZWlnaHQgPSBfZ2V0QWRqdXN0ZWRTaXplczMuaGVpZ2h0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBfZ2V0QWRqdXN0ZWRTaXplczQgPSBnZXRBZGp1c3RlZFNpemVzKHtcbiAgICAgICAgICAgIGFzcGVjdFJhdGlvOiBhc3BlY3RSYXRpbyxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdmFyIF9nZXRBZGp1c3RlZFNpemVzNCR3aSA9IF9nZXRBZGp1c3RlZFNpemVzNC53aWR0aDtcbiAgICAgICAgICB3aWR0aCA9IF9nZXRBZGp1c3RlZFNpemVzNCR3aSA9PT0gdm9pZCAwID8gbmF0dXJhbFdpZHRoIDogX2dldEFkanVzdGVkU2l6ZXM0JHdpO1xuICAgICAgICAgIHZhciBfZ2V0QWRqdXN0ZWRTaXplczQkaGUgPSBfZ2V0QWRqdXN0ZWRTaXplczQuaGVpZ2h0O1xuICAgICAgICAgIGhlaWdodCA9IF9nZXRBZGp1c3RlZFNpemVzNCRoZSA9PT0gdm9pZCAwID8gbmF0dXJhbEhlaWdodCA6IF9nZXRBZGp1c3RlZFNpemVzNCRoZTtcbiAgICAgICAgfVxuICAgICAgICB3aWR0aCA9IE1hdGguZmxvb3Iobm9ybWFsaXplRGVjaW1hbE51bWJlcihNYXRoLm1pbihNYXRoLm1heCh3aWR0aCwgbWluV2lkdGgpLCBtYXhXaWR0aCkpKTtcbiAgICAgICAgaGVpZ2h0ID0gTWF0aC5mbG9vcihub3JtYWxpemVEZWNpbWFsTnVtYmVyKE1hdGgubWluKE1hdGgubWF4KGhlaWdodCwgbWluSGVpZ2h0KSwgbWF4SGVpZ2h0KSkpO1xuICAgICAgICB2YXIgZGVzdFggPSAtd2lkdGggLyAyO1xuICAgICAgICB2YXIgZGVzdFkgPSAtaGVpZ2h0IC8gMjtcbiAgICAgICAgdmFyIGRlc3RXaWR0aCA9IHdpZHRoO1xuICAgICAgICB2YXIgZGVzdEhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IFtdO1xuICAgICAgICBpZiAocmVzaXphYmxlKSB7XG4gICAgICAgICAgdmFyIHNyY1ggPSAwO1xuICAgICAgICAgIHZhciBzcmNZID0gMDtcbiAgICAgICAgICB2YXIgc3JjV2lkdGggPSBuYXR1cmFsV2lkdGg7XG4gICAgICAgICAgdmFyIHNyY0hlaWdodCA9IG5hdHVyYWxIZWlnaHQ7XG4gICAgICAgICAgdmFyIF9nZXRBZGp1c3RlZFNpemVzNSA9IGdldEFkanVzdGVkU2l6ZXMoe1xuICAgICAgICAgICAgYXNwZWN0UmF0aW86IGFzcGVjdFJhdGlvLFxuICAgICAgICAgICAgd2lkdGg6IG5hdHVyYWxXaWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogbmF0dXJhbEhlaWdodFxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIGNvbnRhaW46ICdjb3ZlcicsXG4gICAgICAgICAgICBjb3ZlcjogJ2NvbnRhaW4nXG4gICAgICAgICAgfVtvcHRpb25zLnJlc2l6ZV0pO1xuICAgICAgICAgIHNyY1dpZHRoID0gX2dldEFkanVzdGVkU2l6ZXM1LndpZHRoO1xuICAgICAgICAgIHNyY0hlaWdodCA9IF9nZXRBZGp1c3RlZFNpemVzNS5oZWlnaHQ7XG4gICAgICAgICAgc3JjWCA9IChuYXR1cmFsV2lkdGggLSBzcmNXaWR0aCkgLyAyO1xuICAgICAgICAgIHNyY1kgPSAobmF0dXJhbEhlaWdodCAtIHNyY0hlaWdodCkgLyAyO1xuICAgICAgICAgIHBhcmFtcy5wdXNoKHNyY1gsIHNyY1ksIHNyY1dpZHRoLCBzcmNIZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIHBhcmFtcy5wdXNoKGRlc3RYLCBkZXN0WSwgZGVzdFdpZHRoLCBkZXN0SGVpZ2h0KTtcbiAgICAgICAgaWYgKGlzOTBEZWdyZWVzUm90YXRlZCkge1xuICAgICAgICAgIHZhciBfcmVmNiA9IFtoZWlnaHQsIHdpZHRoXTtcbiAgICAgICAgICB3aWR0aCA9IF9yZWY2WzBdO1xuICAgICAgICAgIGhlaWdodCA9IF9yZWY2WzFdO1xuICAgICAgICB9XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBpZiAoIWlzSW1hZ2VUeXBlKG9wdGlvbnMubWltZVR5cGUpKSB7XG4gICAgICAgICAgb3B0aW9ucy5taW1lVHlwZSA9IGZpbGUudHlwZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZmlsbFN0eWxlID0gJ3RyYW5zcGFyZW50JztcblxuICAgICAgICAvLyBDb252ZXJ0cyBQTkcgZmlsZXMgb3ZlciB0aGUgYGNvbnZlcnRTaXplYCB0byBKUEVHcy5cbiAgICAgICAgaWYgKGZpbGUuc2l6ZSA+IG9wdGlvbnMuY29udmVydFNpemUgJiYgb3B0aW9ucy5jb252ZXJ0VHlwZXMuaW5kZXhPZihvcHRpb25zLm1pbWVUeXBlKSA+PSAwKSB7XG4gICAgICAgICAgb3B0aW9ucy5taW1lVHlwZSA9ICdpbWFnZS9qcGVnJztcbiAgICAgICAgfVxuICAgICAgICB2YXIgaXNKUEVHSW1hZ2UgPSBvcHRpb25zLm1pbWVUeXBlID09PSAnaW1hZ2UvanBlZyc7XG4gICAgICAgIGlmIChpc0pQRUdJbWFnZSkge1xuICAgICAgICAgIGZpbGxTdHlsZSA9ICcjZmZmJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE92ZXJyaWRlIHRoZSBkZWZhdWx0IGZpbGwgY29sb3IgKCMwMDAsIGJsYWNrKVxuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGZpbGxTdHlsZTtcbiAgICAgICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgaWYgKG9wdGlvbnMuYmVmb3JlRHJhdykge1xuICAgICAgICAgIG9wdGlvbnMuYmVmb3JlRHJhdy5jYWxsKHRoaXMsIGNvbnRleHQsIGNhbnZhcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYWJvcnRlZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0LnNhdmUoKTtcbiAgICAgICAgY29udGV4dC50cmFuc2xhdGUod2lkdGggLyAyLCBoZWlnaHQgLyAyKTtcbiAgICAgICAgY29udGV4dC5yb3RhdGUocm90YXRlICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIGNvbnRleHQuc2NhbGUoc2NhbGVYLCBzY2FsZVkpO1xuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZS5hcHBseShjb250ZXh0LCBbaW1hZ2VdLmNvbmNhdChwYXJhbXMpKTtcbiAgICAgICAgY29udGV4dC5yZXN0b3JlKCk7XG4gICAgICAgIGlmIChvcHRpb25zLmRyZXcpIHtcbiAgICAgICAgICBvcHRpb25zLmRyZXcuY2FsbCh0aGlzLCBjb250ZXh0LCBjYW52YXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmFib3J0ZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNhbGxiYWNrID0gZnVuY3Rpb24gY2FsbGJhY2soYmxvYikge1xuICAgICAgICAgIGlmICghX3RoaXMzLmFib3J0ZWQpIHtcbiAgICAgICAgICAgIHZhciBkb25lID0gZnVuY3Rpb24gZG9uZShyZXN1bHQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5kb25lKHtcbiAgICAgICAgICAgICAgICBuYXR1cmFsV2lkdGg6IG5hdHVyYWxXaWR0aCxcbiAgICAgICAgICAgICAgICBuYXR1cmFsSGVpZ2h0OiBuYXR1cmFsSGVpZ2h0LFxuICAgICAgICAgICAgICAgIHJlc3VsdDogcmVzdWx0XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChibG9iICYmIGlzSlBFR0ltYWdlICYmIG9wdGlvbnMucmV0YWluRXhpZiAmJiBfdGhpczMuZXhpZiAmJiBfdGhpczMuZXhpZi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIHZhciBuZXh0ID0gZnVuY3Rpb24gbmV4dChhcnJheUJ1ZmZlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBkb25lKHRvQmxvYihhcnJheUJ1ZmZlclRvRGF0YVVSTChpbnNlcnRFeGlmKGFycmF5QnVmZmVyLCBfdGhpczMuZXhpZiksIG9wdGlvbnMubWltZVR5cGUpKSk7XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIGlmIChibG9iLmFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgICAgICAgYmxvYi5hcnJheUJ1ZmZlcigpLnRoZW4obmV4dCkuY2F0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgX3RoaXMzLmZhaWwobmV3IEVycm9yKCdGYWlsZWQgdG8gcmVhZCB0aGUgY29tcHJlc3NlZCBpbWFnZSB3aXRoIEJsb2IuYXJyYXlCdWZmZXIoKS4nKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICAgICAgX3RoaXMzLnJlYWRlciA9IHJlYWRlcjtcbiAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKF9yZWY3KSB7XG4gICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gX3JlZjcudGFyZ2V0O1xuICAgICAgICAgICAgICAgICAgbmV4dCh0YXJnZXQucmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJlYWRlci5vbmFib3J0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgX3RoaXMzLmZhaWwobmV3IEVycm9yKCdBYm9ydGVkIHRvIHJlYWQgdGhlIGNvbXByZXNzZWQgaW1hZ2Ugd2l0aCBGaWxlUmVhZGVyLicpKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJlYWRlci5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgX3RoaXMzLmZhaWwobmV3IEVycm9yKCdGYWlsZWQgdG8gcmVhZCB0aGUgY29tcHJlc3NlZCBpbWFnZSB3aXRoIEZpbGVSZWFkZXIuJykpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIF90aGlzMy5yZWFkZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGJsb2IpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkb25lKGJsb2IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGNhbnZhcy50b0Jsb2IpIHtcbiAgICAgICAgICBjYW52YXMudG9CbG9iKGNhbGxiYWNrLCBvcHRpb25zLm1pbWVUeXBlLCBvcHRpb25zLnF1YWxpdHkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhbGxiYWNrKHRvQmxvYihjYW52YXMudG9EYXRhVVJMKG9wdGlvbnMubWltZVR5cGUsIG9wdGlvbnMucXVhbGl0eSkpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJkb25lXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZG9uZShfcmVmOCkge1xuICAgICAgICB2YXIgbmF0dXJhbFdpZHRoID0gX3JlZjgubmF0dXJhbFdpZHRoLFxuICAgICAgICAgIG5hdHVyYWxIZWlnaHQgPSBfcmVmOC5uYXR1cmFsSGVpZ2h0LFxuICAgICAgICAgIHJlc3VsdCA9IF9yZWY4LnJlc3VsdDtcbiAgICAgICAgdmFyIGZpbGUgPSB0aGlzLmZpbGUsXG4gICAgICAgICAgaW1hZ2UgPSB0aGlzLmltYWdlLFxuICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGlmIChVUkwgJiYgaW1hZ2Uuc3JjLmluZGV4T2YoJ2Jsb2I6JykgPT09IDApIHtcbiAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKGltYWdlLnNyYyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgIC8vIFJldHVybnMgb3JpZ2luYWwgZmlsZSBpZiB0aGUgcmVzdWx0IGlzIGdyZWF0ZXIgdGhhbiBpdCBhbmQgd2l0aG91dCBzaXplIHJlbGF0ZWQgb3B0aW9uc1xuICAgICAgICAgIGlmIChvcHRpb25zLnN0cmljdCAmJiAhb3B0aW9ucy5yZXRhaW5FeGlmICYmIHJlc3VsdC5zaXplID4gZmlsZS5zaXplICYmIG9wdGlvbnMubWltZVR5cGUgPT09IGZpbGUudHlwZSAmJiAhKG9wdGlvbnMud2lkdGggPiBuYXR1cmFsV2lkdGggfHwgb3B0aW9ucy5oZWlnaHQgPiBuYXR1cmFsSGVpZ2h0IHx8IG9wdGlvbnMubWluV2lkdGggPiBuYXR1cmFsV2lkdGggfHwgb3B0aW9ucy5taW5IZWlnaHQgPiBuYXR1cmFsSGVpZ2h0IHx8IG9wdGlvbnMubWF4V2lkdGggPCBuYXR1cmFsV2lkdGggfHwgb3B0aW9ucy5tYXhIZWlnaHQgPCBuYXR1cmFsSGVpZ2h0KSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gZmlsZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGZpbGVOYW1lID0gZmlsZS5uYW1lO1xuXG4gICAgICAgICAgICAvLyBDb252ZXJ0IHRoZSBleHRlbnNpb24gdG8gbWF0Y2ggaXRzIHR5cGVcbiAgICAgICAgICAgIGlmIChmaWxlTmFtZSAmJiByZXN1bHQudHlwZSAhPT0gZmlsZS50eXBlKSB7XG4gICAgICAgICAgICAgIGZpbGVOYW1lID0gZmlsZU5hbWUucmVwbGFjZShSRUdFWFBfRVhURU5TSU9OLCBpbWFnZVR5cGVUb0V4dGVuc2lvbihyZXN1bHQudHlwZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgLy8gQ29udmVydCB0aGUgcmVzdWx0aW5nIEJsb2Igb2JqZWN0IGludG8gYSBGaWxlIG9iamVjdCBmb3IgbW9kZXJuIGJyb3dzZXJzLlxuICAgICAgICAgICAgICByZXN1bHQgPSBuZXcgRmlsZShbcmVzdWx0XSwgZmlsZU5hbWUsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiByZXN1bHQudHlwZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgIC8vIEZhbGxiYWNrIHRvIEJsb2IgaWYgdGhlIEZpbGUgY29uc3RydWN0b3IgaXMgbm90IHN1cHBvcnRlZC5cbiAgICAgICAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICByZXN1bHQubmFtZSA9IGZpbGVOYW1lO1xuXG4gICAgICAgICAgICAgIC8vIFRoZSBsYXN0IG1vZGlmaWVkIGRhdGUgaXMgbm90IGFjY3VyYXRlLCBidXQgaXQncyBiZXR0ZXIgdGhhbiBub3RoaW5nLlxuICAgICAgICAgICAgICByZXN1bHQubGFzdE1vZGlmaWVkID0gZGF0ZS5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgIHJlc3VsdC5sYXN0TW9kaWZpZWREYXRlID0gZGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gUmV0dXJucyBvcmlnaW5hbCBmaWxlIGlmIHRoZSByZXN1bHQgaXMgbnVsbCBpbiBzb21lIGNhc2VzLlxuICAgICAgICAgIHJlc3VsdCA9IGZpbGU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgIGlmIChvcHRpb25zLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBvcHRpb25zLnN1Y2Nlc3MuY2FsbCh0aGlzLCByZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImZhaWxcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBmYWlsKGVycikge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgaWYgKG9wdGlvbnMuZXJyb3IpIHtcbiAgICAgICAgICBvcHRpb25zLmVycm9yLmNhbGwodGhpcywgZXJyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiYWJvcnRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhYm9ydCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFib3J0ZWQpIHtcbiAgICAgICAgICB0aGlzLmFib3J0ZWQgPSB0cnVlO1xuICAgICAgICAgIGlmICh0aGlzLnJlYWRlcikge1xuICAgICAgICAgICAgdGhpcy5yZWFkZXIuYWJvcnQoKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmltYWdlLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICB0aGlzLmltYWdlLm9ubG9hZCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmltYWdlLm9uYWJvcnQoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mYWlsKG5ldyBFcnJvcignVGhlIGNvbXByZXNzaW9uIHByb2Nlc3MgaGFzIGJlZW4gYWJvcnRlZC4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogR2V0IHRoZSBubyBjb25mbGljdCBjb21wcmVzc29yIGNsYXNzLlxuICAgICAgICogQHJldHVybnMge0NvbXByZXNzb3J9IFRoZSBjb21wcmVzc29yIGNsYXNzLlxuICAgICAgICovXG4gICAgfV0sIFt7XG4gICAgICBrZXk6IFwibm9Db25mbGljdFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIG5vQ29uZmxpY3QoKSB7XG4gICAgICAgIHdpbmRvdy5Db21wcmVzc29yID0gQW5vdGhlckNvbXByZXNzb3I7XG4gICAgICAgIHJldHVybiBDb21wcmVzc29yO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENoYW5nZSB0aGUgZGVmYXVsdCBvcHRpb25zLlxuICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBUaGUgbmV3IGRlZmF1bHQgb3B0aW9ucy5cbiAgICAgICAqL1xuICAgIH0sIHtcbiAgICAgIGtleTogXCJzZXREZWZhdWx0c1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldERlZmF1bHRzKG9wdGlvbnMpIHtcbiAgICAgICAgX2V4dGVuZHMoREVGQVVMVFMsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1dKTtcbiAgfSgpO1xuXG4gIHJldHVybiBDb21wcmVzc29yO1xuXG59KSk7XG4iLCAiaW1wb3J0IHsgTWFya2Rvd25WaWV3LCBOb3RpY2UsIFBsYXRmb3JtLCBQbHVnaW4sIFRGaWxlLCBXb3Jrc3BhY2VMZWFmLCBub3JtYWxpemVQYXRoIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgeyBERUZBVUxUX1NFVFRJTkdTLCBDYW1lcmFFbWJlZFNldHRpbmdzLCBDYW1lcmFFbWJlZFNldHRpbmdUYWIgfSBmcm9tIFwiLi9zZXR0aW5ncy5qc1wiO1xuaW1wb3J0IHsgY29tcHJlc3NJbWFnZSwgZ2V0Q29tcHJlc3NPcHRpb25zIH0gZnJvbSBcIi4vY29tcHJlc3Nvci5qc1wiO1xuaW1wb3J0IHsgYnVpbGRGaWxlTmFtZSwgY3JlYXRlRm9sZGVyUGF0aCwgZm9sZGVyRXhpc3RzLCBmb3JtYXRCeXRlcywgZ2V0QXZhaWxhYmxlUGF0aCwgZ2V0TW9udGhseUZvbGRlciwgam9pblBhdGgsIHdpdGhFbWJlZFdpZHRoIH0gZnJvbSBcIi4vZmlsZS11dGlscy5qc1wiO1xuaW1wb3J0IHsgcGlja0ltYWdlcywgdHlwZSBQaWNrU291cmNlIH0gZnJvbSBcIi4vaW5wdXQtdXRpbHMuanNcIjtcbmltcG9ydCB7IEdhbGxlcnlNb2RhbCB9IGZyb20gXCIuL2dhbGxlcnktbW9kYWwuanNcIjtcbmltcG9ydCB7IFBpY2tlck1vZGFsIH0gZnJvbSBcIi4vcGlja2VyLW1vZGFsLmpzXCI7XG5pbXBvcnQgeyBDYW1lcmFHYWxsZXJ5VmlldywgR0FMTEVSWV9WSUVXX1RZUEUgfSBmcm9tIFwiLi9nYWxsZXJ5LXZpZXcuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FtZXJhRW1iZWRQbHVnaW4gZXh0ZW5kcyBQbHVnaW4ge1xuICBzZXR0aW5nczogQ2FtZXJhRW1iZWRTZXR0aW5ncyA9IHsgLi4uREVGQVVMVF9TRVRUSU5HUyB9O1xuICBwcml2YXRlIGxhc3RNYXJrZG93bkxlYWY6IFdvcmtzcGFjZUxlYWYgfCBudWxsID0gbnVsbDtcblxuICBhc3luYyBvbmxvYWQoKSB7XG4gICAgYXdhaXQgdGhpcy5sb2FkU2V0dGluZ3MoKTtcbiAgICB0aGlzLm5vcm1hbGl6ZVNldHRpbmdzKCk7XG4gICAgYXdhaXQgdGhpcy5zYXZlU2V0dGluZ3MoKTtcbiAgICB0aGlzLmFkZFNldHRpbmdUYWIobmV3IENhbWVyYUVtYmVkU2V0dGluZ1RhYih0aGlzLmFwcCwgdGhpcykpO1xuICAgIHRoaXMucmVnaXN0ZXJFdmVudCh0aGlzLmFwcC53b3Jrc3BhY2Uub24oXCJhY3RpdmUtbGVhZi1jaGFuZ2VcIiwgKGxlYWYpID0+IHtcbiAgICAgIGlmIChsZWFmPy52aWV3IGluc3RhbmNlb2YgTWFya2Rvd25WaWV3KSB0aGlzLmxhc3RNYXJrZG93bkxlYWYgPSBsZWFmO1xuICAgIH0pKTtcblxuICAgIGNvbnN0IGljb25jID0gdGhpcy5zZXR0aW5ncy5nYWxsZXJ5RW5hYmxlZCA/IFwiaW1hZ2VzXCIgOiBcImNhbWVyYVwiO1xuXG4gICAgdGhpcy5hZGRSaWJib25JY29uKGljb25jLCBcIkNhcHR1cmUgcGhvdG9cIiwgKCkgPT4gdm9pZCB0aGlzLmNhcHR1cmVQaG90bygpKTtcbiAgICB0aGlzLmFkZENvbW1hbmQoeyBpZDogXCJjYXB0dXJlLXBob3RvLWVtYmVkXCIsIG5hbWU6IFwiQ2FwdHVyZSBwaG90byBhbmQgZW1iZWRcIiwgaWNvbjogaWNvbmMsIGNhbGxiYWNrOiAoKSA9PiB2b2lkIHRoaXMuY2FwdHVyZVBob3RvKCkgfSk7XG4gICAgaWYgKFBsYXRmb3JtLmlzRGVza3RvcCkge1xuICAgICAgdGhpcy5yZWdpc3RlclZpZXcoR0FMTEVSWV9WSUVXX1RZUEUsIChsZWFmKSA9PiBuZXcgQ2FtZXJhR2FsbGVyeVZpZXcobGVhZiwgdGhpcykpO1xuICAgICAgdGhpcy5hZGRDb21tYW5kKHsgaWQ6IFwib3Blbi1jYW1lcmEtZ2FsbGVyeS1zaWRlYmFyXCIsIG5hbWU6IFwiT3BlbiBjYW1lcmEgZ2FsbGVyeSBpbiBzaWRlYmFyXCIsIGljb246IFwiaW1hZ2VzXCIsIGNhbGxiYWNrOiAoKSA9PiB2b2lkIHRoaXMub3BlbkdhbGxlcnlTaWRlYmFyKCkgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFRoZSBub3RlIHRvIGluc2VydCBpbnRvOiB0aGUgYWN0aXZlIG5vdGUsIGVsc2UgdGhlIGxhc3Qgbm90ZSB5b3UgdXNlZCwgZWxzZSBhbnkgb3BlbiBub3RlLiAqL1xuICBwcml2YXRlIGdldFRhcmdldE1hcmtkb3duVmlldygpOiBNYXJrZG93blZpZXcgfCBudWxsIHtcbiAgICBjb25zdCB3b3Jrc3BhY2UgPSB0aGlzLmFwcC53b3Jrc3BhY2U7XG5cbiAgICBjb25zdCBhY3RpdmUgPSB3b3Jrc3BhY2UuZ2V0QWN0aXZlVmlld09mVHlwZShNYXJrZG93blZpZXcpO1xuICAgIGlmIChhY3RpdmU/LmZpbGUpIHJldHVybiBhY3RpdmU7XG5cbiAgICBjb25zdCBtYXJrZG93bkxlYXZlcyA9IHdvcmtzcGFjZS5nZXRMZWF2ZXNPZlR5cGUoXCJtYXJrZG93blwiKTtcblxuICAgIGNvbnN0IGxhc3QgPSB0aGlzLmxhc3RNYXJrZG93bkxlYWY7XG4gICAgaWYgKGxhc3QgJiYgbWFya2Rvd25MZWF2ZXMuaW5jbHVkZXMobGFzdCkgJiYgbGFzdC52aWV3IGluc3RhbmNlb2YgTWFya2Rvd25WaWV3ICYmIGxhc3Qudmlldy5maWxlKSB7XG4gICAgICByZXR1cm4gbGFzdC52aWV3O1xuICAgIH1cblxuICAgIGNvbnN0IHJlY2VudCA9IHdvcmtzcGFjZS5nZXRNb3N0UmVjZW50TGVhZigpO1xuICAgIGlmIChyZWNlbnQ/LnZpZXcgaW5zdGFuY2VvZiBNYXJrZG93blZpZXcgJiYgcmVjZW50LnZpZXcuZmlsZSkgcmV0dXJuIHJlY2VudC52aWV3O1xuXG4gICAgZm9yIChjb25zdCBsZWFmIG9mIG1hcmtkb3duTGVhdmVzKSB7XG4gICAgICBpZiAobGVhZi52aWV3IGluc3RhbmNlb2YgTWFya2Rvd25WaWV3ICYmIGxlYWYudmlldy5maWxlKSByZXR1cm4gbGVhZi52aWV3O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgbm9ybWFsaXplU2V0dGluZ3MoKSB7XG4gICAgLy8gR2FsbGVyeSBhbmQgaW1hZ2UgcGlja2VyIGFyZSBtdXR1YWxseSBleGNsdXNpdmU7IGdhbGxlcnkgd2lucyBpZiBib3RoIGFyZSBzZXRcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5nYWxsZXJ5RW5hYmxlZCkge1xuICAgICAgdGhpcy5zZXR0aW5ncy5pbWFnZVBpY2tlckVuYWJsZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2V0dGluZ3Muc2F2ZU5lYXJUaGVOb3RlID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICghdGhpcy5zZXR0aW5ncy5nYWxsZXJ5RW5hYmxlZCkgdGhpcy5zZXR0aW5ncy5vcGVuR2FsbGVyeUluU2lkZWJhciA9IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBjYXB0dXJlUGhvdG8oKSB7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuZ2FsbGVyeUVuYWJsZWQgJiYgdGhpcy5zZXR0aW5ncy5vcGVuR2FsbGVyeUluU2lkZWJhciAmJiBQbGF0Zm9ybS5pc0Rlc2t0b3ApIHtcbiAgICAgIHZvaWQgdGhpcy5vcGVuR2FsbGVyeVNpZGViYXIoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2V0dGluZ3MuZ2FsbGVyeUVuYWJsZWQpIHtcbiAgICAgIHRoaXMub3BlbkdhbGxlcnkoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2V0dGluZ3MuaW1hZ2VQaWNrZXJFbmFibGVkKSB7XG4gICAgICB0aGlzLm9wZW5QaWNrZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdm9pZCB0aGlzLnBpY2tBbmRFbWJlZChcImNhbWVyYVwiKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9wZW5QaWNrZXIoKSB7XG4gICAgLy8gQ2hlY2sgdXAgZnJvbnQgc28gdGhlIHVzZXIgaXNuJ3QgYXNrZWQgdG8gcGljayBhIHBob3RvIHRoYXQgY2FuJ3QgYmUgaW5zZXJ0ZWRcbiAgICBpZiAoIXRoaXMuZ2V0VGFyZ2V0TWFya2Rvd25WaWV3KCkpIHtcbiAgICAgIG5ldyBOb3RpY2UoXCJQbGVhc2Ugb3BlbiBhIE1hcmtkb3duIG5vdGUgdG8gaW5zZXJ0IHRoZSBwaG90by5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG5ldyBQaWNrZXJNb2RhbCh0aGlzLmFwcCwgKHNvdXJjZSkgPT4ge1xuICAgICAgaWYgKHNvdXJjZSA9PT0gXCJjYW1lcmFcIikgdm9pZCB0aGlzLnBpY2tBbmRFbWJlZChcImNhbWVyYVwiKTtcbiAgICAgIGVsc2UgaWYgKHNvdXJjZSA9PT0gXCJnYWxsZXJ5XCIpIHZvaWQgdGhpcy5waWNrQW5kRW1iZWQoXCJnYWxsZXJ5XCIpO1xuICAgIH0pLm9wZW4oKTtcbiAgfVxuXG4gICAgcHJpdmF0ZSBvcGVuR2FsbGVyeSgpIHtcbiAgICBpZiAoIXRoaXMuZ2V0VGFyZ2V0TWFya2Rvd25WaWV3KCkpIHtcbiAgICAgIG5ldyBOb3RpY2UoXCJPcGVuIGEgTWFya2Rvd24gbm90ZSBiZWZvcmUgdXNpbmcgdGhlIGNhbWVyYSBnYWxsZXJ5LlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnNldHRpbmdzLnBob3Rvc0ZvbGRlci50cmltKCkpIHtcbiAgICAgIG5ldyBOb3RpY2UoXCJTZXQgYSBwaG90b3MgZm9sZGVyIGluIGNhbWVyYSBlbWJlZCBzZXR0aW5ncyBiZWZvcmUgdXNpbmcgdGhlIGdhbGxlcnkuXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBUaGUgbm90ZSBpcyBsb29rZWQgdXAgYWdhaW4gd2hlbiB5b3UgcHJlc3MgXCJVc2UgaXRcIiwgc28gaXQgc3RpbGwgd29ya3MgaWYgeW91IHN3aXRjaGVkIG5vdGVzXG4gICAgbmV3IEdhbGxlcnlNb2RhbCh0aGlzLmFwcCwgdGhpcywgKGZpbGVzLCB3aWR0aCkgPT4ge1xuICAgICAgaWYgKGZpbGVzLmxlbmd0aCA+IDApIHRoaXMuZW1iZWRHYWxsZXJ5RmlsZXMoZmlsZXMsIHdpZHRoKTtcbiAgICB9KS5vcGVuKCk7XG4gIH1cblxuICBwcml2YXRlIGVtYmVkVmF1bHRGaWxlcyhmaWxlczogVEZpbGVbXSwgdmlldzogTWFya2Rvd25WaWV3LCB3aWR0aD86IG51bWJlcikge1xuICAgIGNvbnN0IGFjdGl2ZUZpbGUgPSB2aWV3LmZpbGU7XG4gICAgaWYgKCFhY3RpdmVGaWxlKSByZXR1cm47XG4gICAgaWYgKHZpZXcuZ2V0TW9kZSgpICE9PSBcInNvdXJjZVwiKSB7XG4gICAgICBuZXcgTm90aWNlKFwiU3dpdGNoIHRoZSBub3RlIHRvIGVkaXRpbmcgbW9kZSB0byBpbnNlcnQgcGhvdG9zLlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbGlua3MgPSBmaWxlcy5tYXAoKGZpbGUpID0+IGAhJHt3aXRoRW1iZWRXaWR0aCh0aGlzLmFwcC5maWxlTWFuYWdlci5nZW5lcmF0ZU1hcmtkb3duTGluayhmaWxlLCBhY3RpdmVGaWxlLnBhdGgpLCB3aWR0aCl9YCk7XG4gICAgdmlldy5lZGl0b3IucmVwbGFjZVNlbGVjdGlvbihsaW5rcy5qb2luKFwiXFxuXCIpKTtcbiAgfVxuXG4gIGVtYmVkR2FsbGVyeUZpbGVzKGZpbGVzOiBURmlsZVtdLCB3aWR0aD86IG51bWJlcikge1xuICAgIGNvbnN0IHZpZXcgPSB0aGlzLmdldFRhcmdldE1hcmtkb3duVmlldygpO1xuICAgIGlmICghdmlldykge1xuICAgICAgbmV3IE5vdGljZShcIk9wZW4gYSBNYXJrZG93biBub3RlIHRvIGluc2VydCB0aGUgc2VsZWN0ZWQgcGhvdG9zLlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5lbWJlZFZhdWx0RmlsZXMoZmlsZXMsIHZpZXcsIHdpZHRoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgcGlja0FuZEVtYmVkKHNvdXJjZTogUGlja1NvdXJjZSkge1xuICAgIGNvbnN0IHZpZXcgPSB0aGlzLmdldFRhcmdldE1hcmtkb3duVmlldygpO1xuICAgIGlmICghdmlldz8uZmlsZSkge1xuICAgICAgbmV3IE5vdGljZShcIlBsZWFzZSBvcGVuIGEgTWFya2Rvd24gbm90ZSB0byBpbnNlcnQgdGhlIHBob3RvLlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZmlsZXMgPSBhd2FpdCBwaWNrSW1hZ2VzKHNvdXJjZSk7XG4gICAgaWYgKGZpbGVzLmxlbmd0aCA+IDApIGF3YWl0IHRoaXMuc2F2ZUFuZEVtYmVkKGZpbGVzLCB2aWV3KTtcbiAgfVxuXG5cbiAgYXN5bmMgb3BlbkdhbGxlcnlTaWRlYmFyKCkge1xuICAgIGNvbnN0IGxlYWYgPSBhd2FpdCB0aGlzLmFwcC53b3Jrc3BhY2UuZW5zdXJlU2lkZUxlYWYoR0FMTEVSWV9WSUVXX1RZUEUsIFwicmlnaHRcIiwgeyBhY3RpdmU6IHRydWUsIHJldmVhbDogdHJ1ZSB9KTtcbiAgICBhd2FpdCB0aGlzLmFwcC53b3Jrc3BhY2UucmV2ZWFsTGVhZihsZWFmKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgc2F2ZUFuZEVtYmVkKGZpbGVzOiBGaWxlW10sIHZpZXc6IE1hcmtkb3duVmlldykge1xuICAgIGNvbnN0IGFjdGl2ZUZpbGUgPSB2aWV3LmZpbGU7XG4gICAgaWYgKCFhY3RpdmVGaWxlKSByZXR1cm47XG4gICAgY29uc3Qgc2F2ZWQgPSBhd2FpdCB0aGlzLnNhdmVQaG90b3MoZmlsZXMsIGFjdGl2ZUZpbGUucGFyZW50Py5wYXRoKTtcbiAgICBpZiAoc2F2ZWQubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgY29uc3QgbGlua3MgPSBzYXZlZC5tYXAoKGZpbGUpID0+IGAhJHt0aGlzLmFwcC5maWxlTWFuYWdlci5nZW5lcmF0ZU1hcmtkb3duTGluayhmaWxlLCBhY3RpdmVGaWxlLnBhdGgpfWApO1xuICAgIHZpZXcuZWRpdG9yLnJlcGxhY2VTZWxlY3Rpb24obGlua3Muam9pbihcIlxcblwiKSk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHNpbmdsZSBwbGFjZSB3aGVyZSBwaG90b3MgYXJlIHdyaXR0ZW4gdG8gdGhlIHZhdWx0LiBVc2VkIGJ5IGRpcmVjdCBjYW1lcmFcbiAgICogY2FwdHVyZSwgdGhlIGltYWdlIHBpY2tlciBhbmQgZ2FsbGVyeSB1cGxvYWRzLCBzbyBmb2xkZXIsIG1vbnRoIG9yZ2FuaXNhdGlvbixcbiAgICogY29tcHJlc3Npb24gYW5kIGZpbGUgbmFtaW5nIGJlaGF2ZSB0aGUgc2FtZSBldmVyeXdoZXJlLlxuICAgKlxuICAgKiBAcGFyYW0gbm90ZUZvbGRlclBhdGggZm9sZGVyIG9mIHRoZSBjdXJyZW50IG5vdGUgKG9ubHkgdXNlZCBieSBcInNhdmUgbmVhciB0aGUgbm90ZVwiKVxuICAgKi9cbiAgYXN5bmMgc2F2ZVBob3RvcyhmaWxlczogRmlsZVtdLCBub3RlRm9sZGVyUGF0aD86IHN0cmluZyk6IFByb21pc2U8VEZpbGVbXT4ge1xuICAgIGNvbnN0IGZvbGRlciA9IGF3YWl0IHRoaXMuZW5zdXJlVGFyZ2V0Rm9sZGVyKG5vdGVGb2xkZXJQYXRoKTtcbiAgICBpZiAoZm9sZGVyID09PSBudWxsKSByZXR1cm4gW107XG5cbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5zZXR0aW5ncy5jb21wcmVzc0ltYWdlcyA/IGdldENvbXByZXNzT3B0aW9ucyh0aGlzLnNldHRpbmdzKSA6IG51bGw7XG4gICAgY29uc3QgcHJvZ3Jlc3MgPSBvcHRpb25zICYmIGZpbGVzLmxlbmd0aCA+IDEgPyBuZXcgTm90aWNlKGBQcm9jZXNzaW5nICR7ZmlsZXMubGVuZ3RofSBwaG90b3NcdTIwMjZgLCAwKSA6IG51bGw7XG5cbiAgICBjb25zdCBzYXZlZDogVEZpbGVbXSA9IFtdO1xuICAgIGxldCBjb21wcmVzc0ZhaWx1cmVzID0gMDtcbiAgICBsZXQgYnl0ZXNCZWZvcmUgPSAwO1xuICAgIGxldCBieXRlc0FmdGVyID0gMDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICAgICAgbGV0IGJsb2I6IEJsb2IgPSBmaWxlO1xuICAgICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBibG9iID0gYXdhaXQgY29tcHJlc3NJbWFnZShmaWxlLCBvcHRpb25zKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgLy8gT25lIGJhZCBmaWxlIG11c3Qgbm90IGFib3J0IHRoZSB3aG9sZSBiYXRjaDoga2VlcCB0aGUgb3JpZ2luYWwuXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ2FtZXJhIEVtYmVkOiBjb21wcmVzc2lvbiBmYWlsZWQgZm9yXCIsIGZpbGUubmFtZSwgZXJyb3IpO1xuICAgICAgICAgICAgY29tcHJlc3NGYWlsdXJlcysrO1xuICAgICAgICAgICAgYmxvYiA9IGZpbGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBwYXRoID0gZ2V0QXZhaWxhYmxlUGF0aCh0aGlzLmFwcC52YXVsdCwgam9pblBhdGgoZm9sZGVyLCBidWlsZEZpbGVOYW1lKGZpbGUsIGJsb2IpKSk7XG4gICAgICAgICAgc2F2ZWQucHVzaChhd2FpdCB0aGlzLmFwcC52YXVsdC5jcmVhdGVCaW5hcnkocGF0aCwgYXdhaXQgYmxvYi5hcnJheUJ1ZmZlcigpKSk7XG4gICAgICAgICAgYnl0ZXNCZWZvcmUgKz0gZmlsZS5zaXplO1xuICAgICAgICAgIGJ5dGVzQWZ0ZXIgKz0gYmxvYi5zaXplO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDYW1lcmEgRW1iZWQ6IGZhaWxlZCB0byBzYXZlXCIsIGZpbGUubmFtZSwgZXJyb3IpO1xuICAgICAgICAgIG5ldyBOb3RpY2UoYENvdWxkIG5vdCBzYXZlICR7ZmlsZS5uYW1lfS5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBwcm9ncmVzcz8uaGlkZSgpO1xuICAgIH1cblxuICAgIGlmIChjb21wcmVzc0ZhaWx1cmVzID4gMCkge1xuICAgICAgbmV3IE5vdGljZShgQ291bGQgbm90IGNvbXByZXNzICR7Y29tcHJlc3NGYWlsdXJlc30gcGhvdG8ke2NvbXByZXNzRmFpbHVyZXMgPT09IDEgPyBcIlwiIDogXCJzXCJ9OyBzYXZlZCB0aGUgb3JpZ2luYWwke2NvbXByZXNzRmFpbHVyZXMgPT09IDEgPyBcIlwiIDogXCJzXCJ9IGluc3RlYWQuYCk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zICYmIHNhdmVkLmxlbmd0aCA+IDAgJiYgYnl0ZXNBZnRlciA8IGJ5dGVzQmVmb3JlKSB7XG4gICAgICBuZXcgTm90aWNlKGBDb21wcmVzc2VkICR7Zm9ybWF0Qnl0ZXMoYnl0ZXNCZWZvcmUpfSBcdTIxOTIgJHtmb3JtYXRCeXRlcyhieXRlc0FmdGVyKX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIHNhdmVkO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBlbnN1cmVUYXJnZXRGb2xkZXIobm90ZUZvbGRlclBhdGg6IHN0cmluZyB8IHVuZGVmaW5lZCk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4ge1xuICAgIGNvbnN0IHJhdyA9IHRoaXMuc2V0dGluZ3MucGhvdG9zRm9sZGVyLnRyaW0oKTtcbiAgICBjb25zdCBiYXNlID0gdGhpcy5zZXR0aW5ncy5zYXZlTmVhclRoZU5vdGVcbiAgICAgID8gKHJhdyA/IChub3RlRm9sZGVyUGF0aCA/IGAke25vdGVGb2xkZXJQYXRofS8ke3Jhd31gIDogcmF3KSA6IChub3RlRm9sZGVyUGF0aCA/PyBcIlwiKSlcbiAgICAgIDogcmF3O1xuICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVQYXRoKHRoaXMuc2V0dGluZ3Mub3JnYW5pemVQaG90b3NCeU1vbnRoID8gZ2V0TW9udGhseUZvbGRlcihiYXNlKSA6IGJhc2UpO1xuICAgIGlmIChub3JtYWxpemVkID09PSBcIlwiIHx8IG5vcm1hbGl6ZWQgPT09IFwiL1wiKSByZXR1cm4gXCJcIjtcbiAgICBpZiAoZm9sZGVyRXhpc3RzKHRoaXMuYXBwLnZhdWx0LCBub3JtYWxpemVkKSkgcmV0dXJuIG5vcm1hbGl6ZWQ7XG4gICAgaWYgKCF0aGlzLnNldHRpbmdzLmNyZWF0ZUZvbGRlcklmTWlzc2luZykge1xuICAgICAgbmV3IE5vdGljZShgRm9sZGVyIG5vdCBmb3VuZDogJHtub3JtYWxpemVkfWApO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBjcmVhdGVGb2xkZXJQYXRoKHRoaXMuYXBwLnZhdWx0LCBub3JtYWxpemVkKTtcbiAgICAgIHJldHVybiBub3JtYWxpemVkO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiQ2FtZXJhIEVtYmVkOiBmYWlsZWQgdG8gY3JlYXRlIGZvbGRlclwiLCBlcnJvcik7XG4gICAgICBuZXcgTm90aWNlKGBGYWlsZWQgdG8gY3JlYXRlIGZvbGRlcjogJHtub3JtYWxpemVkfWApO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgbG9hZFNldHRpbmdzKCkge1xuICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX1NFVFRJTkdTLCBhd2FpdCB0aGlzLmxvYWREYXRhKCkgYXMgUGFydGlhbDxDYW1lcmFFbWJlZFNldHRpbmdzPik7XG4gIH1cblxuICBhc3luYyBzYXZlU2V0dGluZ3MoKSB7XG4gICAgYXdhaXQgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcbiAgfVxufSIsICJpbXBvcnQgeyBBcHAsIFBsYXRmb3JtLCBQbHVnaW5TZXR0aW5nVGFiLCBTZXR0aW5nIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgdHlwZSBDYW1lcmFFbWJlZFBsdWdpbiBmcm9tIFwiLi9tYWluXCI7XG5cbmV4cG9ydCB0eXBlIENvbXByZXNzaW9uTW9kZSA9IFwibWluaW1hbFwiIHwgXCJleHBlcnRcIjtcbmV4cG9ydCB0eXBlIENvbXByZXNzaW9uUHJlc2V0ID0gXCJsaWdodFwiIHwgXCJiYWxhbmNlZFwiIHwgXCJzdHJvbmdcIjtcbmV4cG9ydCB0eXBlIENvbXByZXNzRm9ybWF0ID0gXCJhdXRvXCIgfCBcIm9yaWdpbmFsXCIgfCBcImpwZWdcIiB8IFwid2VicFwiO1xuZXhwb3J0IHR5cGUgR2FsbGVyeVNvcnQgPSBcIm5ld2VzdFwiIHwgXCJvbGRlc3RcIiB8IFwibmFtZVwiIHwgXCJzaXplXCI7XG5leHBvcnQgdHlwZSBHYWxsZXJ5U2NvcGUgPSBcImZvbGRlclwiIHwgXCJ2YXVsdFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbWVyYUVtYmVkU2V0dGluZ3Mge1xuICBwaG90b3NGb2xkZXI6IHN0cmluZztcbiAgY3JlYXRlRm9sZGVySWZNaXNzaW5nOiBib29sZWFuO1xuICBzYXZlTmVhclRoZU5vdGU6IGJvb2xlYW47XG4gIG9yZ2FuaXplUGhvdG9zQnlNb250aDogYm9vbGVhbjtcblxuICBnYWxsZXJ5RW5hYmxlZDogYm9vbGVhbjtcbiAgb3BlbkdhbGxlcnlJblNpZGViYXI6IGJvb2xlYW47XG4gIGltYWdlUGlja2VyRW5hYmxlZDogYm9vbGVhbjtcblxuICBjb21wcmVzc0ltYWdlczogYm9vbGVhbjtcbiAgY29tcHJlc3Npb25Nb2RlOiBDb21wcmVzc2lvbk1vZGU7XG4gIGNvbXByZXNzaW9uUHJlc2V0OiBDb21wcmVzc2lvblByZXNldDtcbiAgLy8gRXhwZXJ0IG1vZGVcbiAgY29tcHJlc3NRdWFsaXR5OiBudW1iZXI7XG4gIGNvbXByZXNzTWF4RGltZW5zaW9uOiBudW1iZXI7IC8vIGxvbmdlc3Qgc2lkZSBpbiBweCwgMCA9IGtlZXAgb3JpZ2luYWwgc2l6ZVxuICBjb21wcmVzc0Zvcm1hdDogQ29tcHJlc3NGb3JtYXQ7XG4gIGNvbXByZXNzS2VlcEV4aWY6IGJvb2xlYW47XG4gIGNvbXByZXNzTWluU2l6ZUtCOiBudW1iZXI7IC8vIHNraXAgZmlsZXMgc21hbGxlciB0aGFuIHRoaXNcblxuICBnYWxsZXJ5U29ydDogR2FsbGVyeVNvcnQ7XG4gIGdhbGxlcnlTY29wZTogR2FsbGVyeVNjb3BlO1xuICBnYWxsZXJ5R3JvdXBCeU1vbnRoOiBib29sZWFuO1xuICBnYWxsZXJ5VGh1bWJTaXplOiBudW1iZXI7IC8vIHB4LCAwID0gYXV0b21hdGljXG59XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1NFVFRJTkdTOiBDYW1lcmFFbWJlZFNldHRpbmdzID0ge1xuICBwaG90b3NGb2xkZXI6IFwicGhvdG9zXCIsXG4gIGNyZWF0ZUZvbGRlcklmTWlzc2luZzogdHJ1ZSxcbiAgc2F2ZU5lYXJUaGVOb3RlOiBmYWxzZSxcbiAgb3JnYW5pemVQaG90b3NCeU1vbnRoOiBmYWxzZSxcblxuICBnYWxsZXJ5RW5hYmxlZDogZmFsc2UsXG4gIG9wZW5HYWxsZXJ5SW5TaWRlYmFyOiBmYWxzZSxcbiAgaW1hZ2VQaWNrZXJFbmFibGVkOiBmYWxzZSxcblxuICBjb21wcmVzc0ltYWdlczogZmFsc2UsXG4gIGNvbXByZXNzaW9uTW9kZTogXCJtaW5pbWFsXCIsXG4gIGNvbXByZXNzaW9uUHJlc2V0OiBcImJhbGFuY2VkXCIsXG4gIGNvbXByZXNzUXVhbGl0eTogMC44LFxuICBjb21wcmVzc01heERpbWVuc2lvbjogMjA0OCxcbiAgY29tcHJlc3NGb3JtYXQ6IFwiYXV0b1wiLFxuICBjb21wcmVzc0tlZXBFeGlmOiBmYWxzZSxcbiAgY29tcHJlc3NNaW5TaXplS0I6IDAsXG5cbiAgZ2FsbGVyeVNvcnQ6IFwibmV3ZXN0XCIsXG4gIGdhbGxlcnlTY29wZTogXCJ2YXVsdFwiLFxuICBnYWxsZXJ5R3JvdXBCeU1vbnRoOiB0cnVlLFxuICBnYWxsZXJ5VGh1bWJTaXplOiAwLFxufTtcblxuLyogLS0tLSBMb29zZSBzaGFwZXMgdXNlZCBvbmx5IGJ5IHRoZSBkaXNwbGF5KCkgZmFsbGJhY2sgKE9ic2lkaWFuIDwgMS4xMykgLS0tLSAqL1xuaW50ZXJmYWNlIEZhbGxiYWNrQ29udHJvbCB7XG4gIHR5cGU6IFwidG9nZ2xlXCIgfCBcInRleHRcIiB8IFwic2xpZGVyXCIgfCBcImRyb3Bkb3duXCIgfCBcIm51bWJlclwiO1xuICBrZXk6IHN0cmluZztcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIG1pbj86IG51bWJlcjtcbiAgbWF4PzogbnVtYmVyO1xuICBzdGVwPzogbnVtYmVyO1xuICBvcHRpb25zPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcbiAgZGlzYWJsZWQ/OiAoKSA9PiBib29sZWFuO1xufVxuaW50ZXJmYWNlIEZhbGxiYWNrUm93IHtcbiAgbmFtZTogc3RyaW5nO1xuICBkZXNjPzogc3RyaW5nO1xuICB2aXNpYmxlPzogKCkgPT4gYm9vbGVhbjtcbiAgY29udHJvbD86IEZhbGxiYWNrQ29udHJvbDtcbn1cbmludGVyZmFjZSBGYWxsYmFja0dyb3VwIHtcbiAgdHlwZTogXCJncm91cFwiO1xuICBoZWFkaW5nOiBzdHJpbmc7XG4gIHZpc2libGU/OiAoKSA9PiBib29sZWFuO1xuICBpdGVtczogRmFsbGJhY2tSb3dbXTtcbn1cbnR5cGUgRmFsbGJhY2tJdGVtID0gRmFsbGJhY2tSb3cgfCBGYWxsYmFja0dyb3VwO1xuXG5leHBvcnQgY2xhc3MgQ2FtZXJhRW1iZWRTZXR0aW5nVGFiIGV4dGVuZHMgUGx1Z2luU2V0dGluZ1RhYiB7XG4gIHBsdWdpbjogQ2FtZXJhRW1iZWRQbHVnaW47XG5cbiAgY29uc3RydWN0b3IoYXBwOiBBcHAsIHBsdWdpbjogQ2FtZXJhRW1iZWRQbHVnaW4pIHtcbiAgICBzdXBlcihhcHAsIHBsdWdpbik7XG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gIH1cblxuICAvKiogT2JzaWRpYW4gMS4xMysgcmVuZGVycyBmcm9tIHRoaXMuICovXG4gIGdldFNldHRpbmdEZWZpbml0aW9ucygpIHtcbiAgICBjb25zdCBzID0gKCkgPT4gdGhpcy5wbHVnaW4uc2V0dGluZ3M7XG4gICAgY29uc3QgZXhwZXJ0ID0gKCkgPT4gcygpLmNvbXByZXNzSW1hZ2VzICYmIHMoKS5jb21wcmVzc2lvbk1vZGUgPT09IFwiZXhwZXJ0XCI7XG4gICAgY29uc3QgbWluaW1hbCA9ICgpID0+IHMoKS5jb21wcmVzc0ltYWdlcyAmJiBzKCkuY29tcHJlc3Npb25Nb2RlID09PSBcIm1pbmltYWxcIjtcblxuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiVGhpcyBwbHVnaW4gaXMgcHJpbWFyaWx5IGRlc2lnbmVkIGZvciBBbmRyb2lkLiBTb21lIGZlYXR1cmVzIG1heSBiZSBsaW1pdGVkIG9uIG90aGVyIHBsYXRmb3Jtcy5cIixcbiAgICAgIH0sXG5cbiAgICAgIHtcbiAgICAgICAgdHlwZTogXCJncm91cFwiIGFzIGNvbnN0LFxuICAgICAgICBoZWFkaW5nOiBcIkNob29zZSBwaG90b1wiLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiRW5hYmxlIGltYWdlIHBpY2tlciAob3B0aW9uYWwpXCIsXG4gICAgICAgICAgICBkZXNjOiBcIlNob3cgYSBwcm9tcHQgdG8gY2hvb3NlIGJldHdlZW4gdGFraW5nIGEgbmV3IHBob3RvIG9yIHBpY2tpbmcgYW4gZXhpc3Rpbmcgb25lIGZyb20gdGhlIGdhbGxlcnkuXCIsXG4gICAgICAgICAgICBjb250cm9sOiB7XG4gICAgICAgICAgICAgIHR5cGU6IFwidG9nZ2xlXCIgYXMgY29uc3QsXG4gICAgICAgICAgICAgIGtleTogXCJpbWFnZVBpY2tlckVuYWJsZWRcIixcbiAgICAgICAgICAgICAgLy8gTG9ja2VkIHdoaWxlIGdhbGxlcnkgaXMgb24sIHVubGVzcyB0aGlzIG9uZSBpcyBhbHJlYWR5IG9uIChzbyBpdCBjYW4gYmUgdHVybmVkIG9mZilcbiAgICAgICAgICAgICAgZGlzYWJsZWQ6ICgpID0+IHMoKS5nYWxsZXJ5RW5hYmxlZCAmJiAhcygpLmltYWdlUGlja2VyRW5hYmxlZCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIkVuYWJsZSBnYWxsZXJ5IChvcHRpb25hbClcIixcbiAgICAgICAgICAgIGRlc2M6IFwiVXNlIHRoZSBnYWxsZXJ5IGluc3RlYWQgb2YgdGFraW5nIGEgcGhvdG8gZGlyZWN0bHkuXCIsXG4gICAgICAgICAgICBjb250cm9sOiB7XG4gICAgICAgICAgICAgIHR5cGU6IFwidG9nZ2xlXCIgYXMgY29uc3QsXG4gICAgICAgICAgICAgIGtleTogXCJnYWxsZXJ5RW5hYmxlZFwiLFxuICAgICAgICAgICAgICAvLyBMb2NrZWQgd2hpbGUgaW1hZ2UgcGlja2VyIGlzIG9uLCB1bmxlc3MgdGhpcyBvbmUgaXMgYWxyZWFkeSBvblxuICAgICAgICAgICAgICBkaXNhYmxlZDogKCkgPT4gcygpLmltYWdlUGlja2VyRW5hYmxlZCAmJiAhcygpLmdhbGxlcnlFbmFibGVkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiT3BlbiBnYWxsZXJ5IGluIHNpZGViYXJcIixcbiAgICAgICAgICAgIGRlc2M6IFwiT3BlbiB0aGUgZ2FsbGVyeSBpbiB0aGUgcmlnaHQgc2lkZWJhciB3aGVuIHVzaW5nIHRoZSBjYW1lcmEgYnV0dG9uLlwiLFxuICAgICAgICAgICAgdmlzaWJsZTogKCkgPT4gcygpLmdhbGxlcnlFbmFibGVkICYmICFQbGF0Zm9ybS5pc01vYmlsZSxcbiAgICAgICAgICAgIGNvbnRyb2w6IHtcbiAgICAgICAgICAgICAgdHlwZTogXCJ0b2dnbGVcIiBhcyBjb25zdCxcbiAgICAgICAgICAgICAga2V5OiBcIm9wZW5HYWxsZXJ5SW5TaWRlYmFyXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuXG4gICAgICB7XG4gICAgICAgIHR5cGU6IFwiZ3JvdXBcIiBhcyBjb25zdCxcbiAgICAgICAgaGVhZGluZzogXCJHYWxsZXJ5XCIsXG4gICAgICAgIHZpc2libGU6ICgpID0+IHMoKS5nYWxsZXJ5RW5hYmxlZCxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIkRlZmF1bHQgc29ydFwiLFxuICAgICAgICAgICAgZGVzYzogXCJIb3cgcGhvdG9zIGFyZSBvcmRlcmVkIHdoZW4gdGhlIGdhbGxlcnkgb3BlbnMuIFlvdSBjYW4gYWxzbyBjaGFuZ2UgdGhpcyBpbnNpZGUgdGhlIGdhbGxlcnkuXCIsXG4gICAgICAgICAgICBjb250cm9sOiB7XG4gICAgICAgICAgICAgIHR5cGU6IFwiZHJvcGRvd25cIiBhcyBjb25zdCxcbiAgICAgICAgICAgICAga2V5OiBcImdhbGxlcnlTb3J0XCIsXG4gICAgICAgICAgICAgIG9wdGlvbnM6IHsgbmV3ZXN0OiBcIk5ld2VzdCBmaXJzdFwiLCBvbGRlc3Q6IFwiT2xkZXN0IGZpcnN0XCIsIG5hbWU6IFwiTmFtZVwiLCBzaXplOiBcIkxhcmdlc3QgZmlyc3RcIiB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiU2hvd1wiLFxuICAgICAgICAgICAgZGVzYzogXCJTaG93IGV2ZXJ5IGltYWdlIGluIHRoZSB2YXVsdCwgb3Igb25seSB0aGUgaW1hZ2VzIGluc2lkZSB5b3VyIHBob3RvcyBmb2xkZXIuXCIsXG4gICAgICAgICAgICBjb250cm9sOiB7XG4gICAgICAgICAgICAgIHR5cGU6IFwiZHJvcGRvd25cIiBhcyBjb25zdCxcbiAgICAgICAgICAgICAga2V5OiBcImdhbGxlcnlTY29wZVwiLFxuICAgICAgICAgICAgICBvcHRpb25zOiB7IHZhdWx0OiBcIldob2xlIHZhdWx0XCIsIGZvbGRlcjogXCJQaG90b3MgZm9sZGVyIG9ubHlcIiB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiR3JvdXAgYnkgbW9udGhcIixcbiAgICAgICAgICAgIGRlc2M6IFwiQWRkIG1vbnRoIGhlYWRpbmdzIChvbmx5IHdoZW4gc29ydGVkIGJ5IGRhdGUpLlwiLFxuICAgICAgICAgICAgY29udHJvbDoge1xuICAgICAgICAgICAgICB0eXBlOiBcInRvZ2dsZVwiIGFzIGNvbnN0LFxuICAgICAgICAgICAgICBrZXk6IFwiZ2FsbGVyeUdyb3VwQnlNb250aFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcblxuICAgICAge1xuICAgICAgICB0eXBlOiBcImdyb3VwXCIgYXMgY29uc3QsXG4gICAgICAgIGhlYWRpbmc6IFwiUGhvdG8gc3RvcmFnZVwiLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiUGhvdG9zIGZvbGRlclwiLFxuICAgICAgICAgICAgZGVzYzogXCJGb2xkZXIgdXNlZCB0byBzdG9yZSBwaG90b3MuXCIsXG4gICAgICAgICAgICBjb250cm9sOiB7XG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiIGFzIGNvbnN0LFxuICAgICAgICAgICAgICBrZXk6IFwicGhvdG9zRm9sZGVyXCIsXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcInBob3Rvc1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiT3JnYW5pemUgcGhvdG9zIGJ5IG1vbnRoXCIsXG4gICAgICAgICAgICBkZXNjOiBcIlNhdmUgcGhvdG9zIGluIHllYXIgYW5kIG1vbnRoIGZvbGRlcnMuXCIsXG4gICAgICAgICAgICBjb250cm9sOiB7XG4gICAgICAgICAgICAgIHR5cGU6IFwidG9nZ2xlXCIgYXMgY29uc3QsXG4gICAgICAgICAgICAgIGtleTogXCJvcmdhbml6ZVBob3Rvc0J5TW9udGhcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIkNyZWF0ZSBmb2xkZXIgaWYgbWlzc2luZ1wiLFxuICAgICAgICAgICAgZGVzYzogXCJDcmVhdGUgdGhlIHBob3RvcyBmb2xkZXIgYXV0b21hdGljYWxseSB3aGVuIG5lZWRlZC5cIixcbiAgICAgICAgICAgIGNvbnRyb2w6IHtcbiAgICAgICAgICAgICAgdHlwZTogXCJ0b2dnbGVcIiBhcyBjb25zdCxcbiAgICAgICAgICAgICAga2V5OiBcImNyZWF0ZUZvbGRlcklmTWlzc2luZ1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiU2F2ZSBuZWFyIHRoZSBub3RlXCIsXG4gICAgICAgICAgICBkZXNjOiBcIlNhdmUgY2FtZXJhIHBob3RvcyBiZXNpZGUgdGhlIGN1cnJlbnQgbm90ZS5cIixcbiAgICAgICAgICAgIHZpc2libGU6ICgpID0+ICFzKCkuZ2FsbGVyeUVuYWJsZWQsXG4gICAgICAgICAgICBjb250cm9sOiB7XG4gICAgICAgICAgICAgIHR5cGU6IFwidG9nZ2xlXCIgYXMgY29uc3QsXG4gICAgICAgICAgICAgIGtleTogXCJzYXZlTmVhclRoZU5vdGVcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG5cbiAgICAgIHtcbiAgICAgICAgdHlwZTogXCJncm91cFwiIGFzIGNvbnN0LFxuICAgICAgICBoZWFkaW5nOiBcIkltYWdlIGNvbXByZXNzaW9uXCIsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJDb21wcmVzcyBpbWFnZXNcIixcbiAgICAgICAgICAgIGRlc2M6IFwiUmVkdWNlIHBob3RvIGZpbGUgc2l6ZXMgYmVmb3JlIHNhdmluZy4gQXBwbGllcyB0byBjYW1lcmEgcGhvdG9zLCBwaWNrZWQgcGhvdG9zIGFuZCBnYWxsZXJ5IHVwbG9hZHMuXCIsXG4gICAgICAgICAgICBjb250cm9sOiB7XG4gICAgICAgICAgICAgIHR5cGU6IFwidG9nZ2xlXCIgYXMgY29uc3QsXG4gICAgICAgICAgICAgIGtleTogXCJjb21wcmVzc0ltYWdlc1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiQ29tcHJlc3Npb24gbW9kZVwiLFxuICAgICAgICAgICAgZGVzYzogXCJNaW5pbWFsOiBwaWNrIGEgcHJlc2V0LiBFeHBlcnQ6IGNvbnRyb2wgc2l6ZSwgcXVhbGl0eSwgZm9ybWF0IGFuZCBtZXRhZGF0YSB5b3Vyc2VsZi5cIixcbiAgICAgICAgICAgIHZpc2libGU6ICgpID0+IHMoKS5jb21wcmVzc0ltYWdlcyxcbiAgICAgICAgICAgIGNvbnRyb2w6IHtcbiAgICAgICAgICAgICAgdHlwZTogXCJkcm9wZG93blwiIGFzIGNvbnN0LFxuICAgICAgICAgICAgICBrZXk6IFwiY29tcHJlc3Npb25Nb2RlXCIsXG4gICAgICAgICAgICAgIG9wdGlvbnM6IHsgbWluaW1hbDogXCJNaW5pbWFsXCIsIGV4cGVydDogXCJFeHBlcnRcIiB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgLy8gLS0tLSBNaW5pbWFsIC0tLS1cbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIkNvbXByZXNzaW9uIGxldmVsXCIsXG4gICAgICAgICAgICBkZXNjOiBcIkxpZ2h0OiA4NSUgcXVhbGl0eSwgdXAgdG8gMzAwMCBweC4gQmFsYW5jZWQ6IDc1JSwgdXAgdG8gMjA0OCBweC4gU3Ryb25nOiA2MCUsIHVwIHRvIDE2MDAgcHggKHNtYWxsZXN0IGZpbGVzKS5cIixcbiAgICAgICAgICAgIHZpc2libGU6IG1pbmltYWwsXG4gICAgICAgICAgICBjb250cm9sOiB7XG4gICAgICAgICAgICAgIHR5cGU6IFwiZHJvcGRvd25cIiBhcyBjb25zdCxcbiAgICAgICAgICAgICAga2V5OiBcImNvbXByZXNzaW9uUHJlc2V0XCIsXG4gICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBsaWdodDogXCJMaWdodFwiLFxuICAgICAgICAgICAgICAgIGJhbGFuY2VkOiBcIkJhbGFuY2VkIChyZWNvbW1lbmRlZClcIixcbiAgICAgICAgICAgICAgICBzdHJvbmc6IFwiU3Ryb25nXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG5cbiAgICAgICAgICAvLyAtLS0tIEV4cGVydCAtLS0tXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJRdWFsaXR5XCIsXG4gICAgICAgICAgICBkZXNjOiBcIkxvd2VyIHZhbHVlcyBjcmVhdGUgc21hbGxlciBmaWxlcyB3aXRoIGxvd2VyIGltYWdlIHF1YWxpdHkuIElnbm9yZWQgZm9yIGxvc3NsZXNzIFBORyBvdXRwdXQuXCIsXG4gICAgICAgICAgICB2aXNpYmxlOiBleHBlcnQsXG4gICAgICAgICAgICBjb250cm9sOiB7XG4gICAgICAgICAgICAgIHR5cGU6IFwic2xpZGVyXCIgYXMgY29uc3QsXG4gICAgICAgICAgICAgIGtleTogXCJjb21wcmVzc1F1YWxpdHlcIixcbiAgICAgICAgICAgICAgbWluOiAwLjEsXG4gICAgICAgICAgICAgIG1heDogMC45NSxcbiAgICAgICAgICAgICAgc3RlcDogMC4wNSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIk1heGltdW0gc2l6ZSAocGl4ZWxzKVwiLFxuICAgICAgICAgICAgZGVzYzogXCJMb25nZXN0IHNpZGUgb2YgdGhlIHBob3RvLCBmb3IgYm90aCBsYW5kc2NhcGUgYW5kIHBvcnRyYWl0LiAwIGtlZXBzIHRoZSBvcmlnaW5hbCBzaXplLlwiLFxuICAgICAgICAgICAgdmlzaWJsZTogZXhwZXJ0LFxuICAgICAgICAgICAgY29udHJvbDoge1xuICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiIGFzIGNvbnN0LFxuICAgICAgICAgICAgICBrZXk6IFwiY29tcHJlc3NNYXhEaW1lbnNpb25cIixcbiAgICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiT3V0cHV0IGZvcm1hdFwiLFxuICAgICAgICAgICAgZGVzYzogXCJBdXRvIGtlZXBzIHRoZSBmb3JtYXQgYnV0IHR1cm5zIFBOR3Mgb3ZlciAxIE1CIGludG8gSlBFRyAodHJhbnNwYXJlbmN5IGJlY29tZXMgd2hpdGUpLiBPcmlnaW5hbCBuZXZlciBjaGFuZ2VzIHRoZSBmb3JtYXQuIFdlYlAgaXMgc21hbGxlciB0aGFuIEpQRUcgYnV0IGZhbGxzIGJhY2sgdG8gSlBFRyBpZiB1bnN1cHBvcnRlZC5cIixcbiAgICAgICAgICAgIHZpc2libGU6IGV4cGVydCxcbiAgICAgICAgICAgIGNvbnRyb2w6IHtcbiAgICAgICAgICAgICAgdHlwZTogXCJkcm9wZG93blwiIGFzIGNvbnN0LFxuICAgICAgICAgICAgICBrZXk6IFwiY29tcHJlc3NGb3JtYXRcIixcbiAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGF1dG86IFwiQXV0b1wiLFxuICAgICAgICAgICAgICAgIG9yaWdpbmFsOiBcIktlZXAgb3JpZ2luYWwgZm9ybWF0XCIsXG4gICAgICAgICAgICAgICAganBlZzogXCJKUEVHXCIsXG4gICAgICAgICAgICAgICAgd2VicDogXCJXZWJQXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJLZWVwIEVYSUYgbWV0YWRhdGFcIixcbiAgICAgICAgICAgIGRlc2M6IFwiS2VlcCBjYW1lcmEgaW5mbyBhbmQgR1BTIGxvY2F0aW9uIGluIEpQRUcgZmlsZXMuIE9mZiBpcyBzbWFsbGVyIGFuZCBiZXR0ZXIgZm9yIHByaXZhY3kuXCIsXG4gICAgICAgICAgICB2aXNpYmxlOiBleHBlcnQsXG4gICAgICAgICAgICBjb250cm9sOiB7XG4gICAgICAgICAgICAgIHR5cGU6IFwidG9nZ2xlXCIgYXMgY29uc3QsXG4gICAgICAgICAgICAgIGtleTogXCJjb21wcmVzc0tlZXBFeGlmXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJTa2lwIHNtYWxsIGZpbGVzIChLQilcIixcbiAgICAgICAgICAgIGRlc2M6IFwiRG8gbm90IGNvbXByZXNzIGZpbGVzIHNtYWxsZXIgdGhhbiB0aGlzLiAwIGNvbXByZXNzZXMgZXZlcnl0aGluZy5cIixcbiAgICAgICAgICAgIHZpc2libGU6IGV4cGVydCxcbiAgICAgICAgICAgIGNvbnRyb2w6IHtcbiAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIiBhcyBjb25zdCxcbiAgICAgICAgICAgICAga2V5OiBcImNvbXByZXNzTWluU2l6ZUtCXCIsXG4gICAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgXTtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAvKiBkaXNwbGF5KCkgZmFsbGJhY2sgZm9yIE9ic2lkaWFuIDwgMS4xMy4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gIC8qIE9uIDEuMTMrIHRoZSBkZWNsYXJhdGl2ZSBkZWZpbml0aW9ucyBhYm92ZSBhcmUgdXNlZCBpbnN0ZWFkIGFuZCAgICAgICovXG4gIC8qIHRoaXMgbWV0aG9kIGlzIG5ldmVyIGNhbGxlZC4gSXQgcmVuZGVycyB0aGUgc2FtZSBkZWZpbml0aW9ucy4gICAgICAgICovXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICBkaXNwbGF5KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgY29udGFpbmVyRWwgfSA9IHRoaXM7XG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gY29udGFpbmVyRWwuc2Nyb2xsVG9wO1xuICAgIGNvbnRhaW5lckVsLmVtcHR5KCk7XG4gICAgdGhpcy5yZW5kZXJGYWxsYmFjayhjb250YWluZXJFbCwgdGhpcy5nZXRTZXR0aW5nRGVmaW5pdGlvbnMoKSBhcyB1bmtub3duIGFzIEZhbGxiYWNrSXRlbVtdKTtcbiAgICBjb250YWluZXJFbC5zY3JvbGxUb3AgPSBzY3JvbGxUb3A7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlckZhbGxiYWNrKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIGl0ZW1zOiBGYWxsYmFja0l0ZW1bXSkge1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgaWYgKGl0ZW0udmlzaWJsZSAmJiAhaXRlbS52aXNpYmxlKCkpIGNvbnRpbnVlO1xuXG4gICAgICBpZiAoXCJpdGVtc1wiIGluIGl0ZW0pIHtcbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyKS5zZXROYW1lKGl0ZW0uaGVhZGluZykuc2V0SGVhZGluZygpO1xuICAgICAgICB0aGlzLnJlbmRlckZhbGxiYWNrKGNvbnRhaW5lciwgaXRlbS5pdGVtcyk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzZXR0aW5nID0gbmV3IFNldHRpbmcoY29udGFpbmVyKS5zZXROYW1lKGl0ZW0ubmFtZSk7XG4gICAgICBpZiAoaXRlbS5kZXNjKSBzZXR0aW5nLnNldERlc2MoaXRlbS5kZXNjKTtcbiAgICAgIGlmIChpdGVtLmNvbnRyb2wpIHRoaXMuYWRkRmFsbGJhY2tDb250cm9sKHNldHRpbmcsIGl0ZW0uY29udHJvbCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRGYWxsYmFja0NvbnRyb2woc2V0dGluZzogU2V0dGluZywgY29udHJvbDogRmFsbGJhY2tDb250cm9sKSB7XG4gICAgY29uc3Qgc3RvcmUgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncyBhcyB1bmtub3duIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICAgIGNvbnN0IGtleSA9IGNvbnRyb2wua2V5O1xuICAgIGNvbnN0IGRpc2FibGVkID0gY29udHJvbC5kaXNhYmxlZD8uKCkgPz8gZmFsc2U7XG5cbiAgICBjb25zdCBjb21taXQgPSBhc3luYyAodmFsdWU6IHVua25vd24sIHJlcmVuZGVyOiBib29sZWFuKSA9PiB7XG4gICAgICBzdG9yZVtrZXldID0gdmFsdWU7XG4gICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgIGlmIChyZXJlbmRlcikgdGhpcy5kaXNwbGF5KCk7XG4gICAgfTtcblxuICAgIHN3aXRjaCAoY29udHJvbC50eXBlKSB7XG4gICAgICBjYXNlIFwidG9nZ2xlXCI6XG4gICAgICAgIHNldHRpbmcuYWRkVG9nZ2xlKCh0b2dnbGUpID0+XG4gICAgICAgICAgdG9nZ2xlXG4gICAgICAgICAgICAuc2V0VmFsdWUoQm9vbGVhbihzdG9yZVtrZXldKSlcbiAgICAgICAgICAgIC5zZXREaXNhYmxlZChkaXNhYmxlZClcbiAgICAgICAgICAgIC5vbkNoYW5nZSgodmFsdWUpID0+IHZvaWQgY29tbWl0KHZhbHVlLCB0cnVlKSksXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwidGV4dFwiOiB7XG4gICAgICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gY29udHJvbC5wbGFjZWhvbGRlciA/PyBcIlwiO1xuICAgICAgICBzZXR0aW5nLmFkZFRleHQoKHRleHQpID0+XG4gICAgICAgICAgdGV4dFxuICAgICAgICAgICAgLnNldFBsYWNlaG9sZGVyKHBsYWNlaG9sZGVyKVxuICAgICAgICAgICAgLnNldFZhbHVlKFN0cmluZyhzdG9yZVtrZXldID8/IFwiXCIpKVxuICAgICAgICAgICAgLm9uQ2hhbmdlKCh2YWx1ZSkgPT4gdm9pZCBjb21taXQodmFsdWUsIGZhbHNlKSksXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFwic2xpZGVyXCI6IHtcbiAgICAgICAgY29uc3QgeyBtaW4gPSAwLCBtYXggPSAxLCBzdGVwID0gMC4wNSB9ID0gY29udHJvbDtcbiAgICAgICAgc2V0dGluZy5hZGRTbGlkZXIoKHNsaWRlcikgPT5cbiAgICAgICAgICBzbGlkZXJcbiAgICAgICAgICAgIC5zZXRMaW1pdHMobWluLCBtYXgsIHN0ZXApXG4gICAgICAgICAgICAuc2V0VmFsdWUoTnVtYmVyKHN0b3JlW2tleV0pKVxuICAgICAgICAgICAgLnNldER5bmFtaWNUb29sdGlwKClcbiAgICAgICAgICAgIC5vbkNoYW5nZSgodmFsdWUpID0+IHZvaWQgY29tbWl0KHZhbHVlLCBmYWxzZSkpLFxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBcImRyb3Bkb3duXCI6IHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGNvbnRyb2wub3B0aW9ucyA/PyB7fTtcbiAgICAgICAgc2V0dGluZy5hZGREcm9wZG93bigoZHJvcGRvd24pID0+XG4gICAgICAgICAgZHJvcGRvd25cbiAgICAgICAgICAgIC5hZGRPcHRpb25zKG9wdGlvbnMpXG4gICAgICAgICAgICAuc2V0VmFsdWUoU3RyaW5nKHN0b3JlW2tleV0pKVxuICAgICAgICAgICAgLm9uQ2hhbmdlKCh2YWx1ZSkgPT4gdm9pZCBjb21taXQodmFsdWUsIHRydWUpKSxcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgXCJudW1iZXJcIjoge1xuICAgICAgICBjb25zdCBtaW4gPSBjb250cm9sLm1pbjtcbiAgICAgICAgc2V0dGluZy5hZGRUZXh0KCh0ZXh0KSA9PiB7XG4gICAgICAgICAgdGV4dC5pbnB1dEVsLnR5cGUgPSBcIm51bWJlclwiO1xuICAgICAgICAgIGlmIChtaW4gIT09IHVuZGVmaW5lZCkgdGV4dC5pbnB1dEVsLm1pbiA9IFN0cmluZyhtaW4pO1xuICAgICAgICAgIHRleHQuc2V0VmFsdWUoU3RyaW5nKHN0b3JlW2tleV0gPz8gMCkpLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZS50cmltKCkgPT09IFwiXCIgfHwgIU51bWJlci5pc0Zpbml0ZShwYXJzZWQpKSByZXR1cm47XG4gICAgICAgICAgICB2b2lkIGNvbW1pdChtaW4gIT09IHVuZGVmaW5lZCA/IE1hdGgubWF4KG1pbiwgcGFyc2VkKSA6IHBhcnNlZCwgZmFsc2UpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG59IiwgImltcG9ydCBDb21wcmVzc29yIGZyb20gXCJjb21wcmVzc29yanNcIjtcbmltcG9ydCB0eXBlIHsgQ2FtZXJhRW1iZWRTZXR0aW5ncywgQ29tcHJlc3NGb3JtYXQsIENvbXByZXNzaW9uUHJlc2V0IH0gZnJvbSBcIi4vc2V0dGluZ3MuanNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBDb21wcmVzc09wdGlvbnMge1xuICBxdWFsaXR5OiBudW1iZXI7XG4gIC8qKiBMb25nZXN0IHNpZGUgaW4gcHguIDAgPSBrZWVwIG9yaWdpbmFsIHNpemUuICovXG4gIG1heERpbWVuc2lvbjogbnVtYmVyO1xuICBmb3JtYXQ6IENvbXByZXNzRm9ybWF0O1xuICBrZWVwRXhpZjogYm9vbGVhbjtcbiAgbWluU2l6ZUJ5dGVzOiBudW1iZXI7XG59XG5cbmNvbnN0IFBSRVNFVFM6IFJlY29yZDxDb21wcmVzc2lvblByZXNldCwgeyBxdWFsaXR5OiBudW1iZXI7IG1heERpbWVuc2lvbjogbnVtYmVyIH0+ID0ge1xuICBsaWdodDogeyBxdWFsaXR5OiAwLjg1LCBtYXhEaW1lbnNpb246IDMwMDAgfSxcbiAgYmFsYW5jZWQ6IHsgcXVhbGl0eTogMC43NSwgbWF4RGltZW5zaW9uOiAyMDQ4IH0sXG4gIHN0cm9uZzogeyBxdWFsaXR5OiAwLjYsIG1heERpbWVuc2lvbjogMTYwMCB9LFxufTtcblxuLy8gR0lGcyBtYXkgYmUgYW5pbWF0ZWQgYW5kIFNWR3MgYXJlIHZlY3RvcjogbmV2ZXIgcmUtZW5jb2RlIHRoZW0uXG5jb25zdCBTS0lQX1RZUEVTID0gbmV3IFNldChbXCJpbWFnZS9naWZcIiwgXCJpbWFnZS9zdmcreG1sXCJdKTtcblxuLy8gXCJhdXRvXCIgY29udmVydHMgUE5HcyBhYm92ZSB0aGlzIHNpemUgdG8gSlBFRy5cbmNvbnN0IFBOR19DT05WRVJUX1NJWkUgPSAxXzAwMF8wMDA7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb21wcmVzc09wdGlvbnMoc2V0dGluZ3M6IENhbWVyYUVtYmVkU2V0dGluZ3MpOiBDb21wcmVzc09wdGlvbnMge1xuICBpZiAoc2V0dGluZ3MuY29tcHJlc3Npb25Nb2RlID09PSBcImV4cGVydFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHF1YWxpdHk6IE1hdGgubWluKDEsIE1hdGgubWF4KDAuMSwgc2V0dGluZ3MuY29tcHJlc3NRdWFsaXR5KSksXG4gICAgICBtYXhEaW1lbnNpb246IE1hdGgubWF4KDAsIE1hdGgucm91bmQoc2V0dGluZ3MuY29tcHJlc3NNYXhEaW1lbnNpb24pKSxcbiAgICAgIGZvcm1hdDogc2V0dGluZ3MuY29tcHJlc3NGb3JtYXQsXG4gICAgICBrZWVwRXhpZjogc2V0dGluZ3MuY29tcHJlc3NLZWVwRXhpZixcbiAgICAgIG1pblNpemVCeXRlczogTWF0aC5tYXgoMCwgc2V0dGluZ3MuY29tcHJlc3NNaW5TaXplS0IpICogMTAyNCxcbiAgICB9O1xuICB9XG4gIGNvbnN0IHByZXNldCA9IFBSRVNFVFNbc2V0dGluZ3MuY29tcHJlc3Npb25QcmVzZXRdID8/IFBSRVNFVFMuYmFsYW5jZWQ7XG4gIHJldHVybiB7IC4uLnByZXNldCwgZm9ybWF0OiBcImF1dG9cIiwga2VlcEV4aWY6IGZhbHNlLCBtaW5TaXplQnl0ZXM6IDAgfTtcbn1cblxuZnVuY3Rpb24gcnVuQ29tcHJlc3NvcihmaWxlOiBGaWxlLCBvcHRpb25zOiBDb21wcmVzc09wdGlvbnMsIG1pbWVUeXBlOiBzdHJpbmcsIGNvbnZlcnRTaXplOiBudW1iZXIpOiBQcm9taXNlPEJsb2I+IHtcbiAgLy8gU2V0dGluZyBib3RoIGxpbWl0cyB0byB0aGUgc2FtZSB2YWx1ZSBtYWtlcyBpdCBhIFwibG9uZ2VzdCBzaWRlXCIgbGltaXQsXG4gIC8vIHNvIHBvcnRyYWl0IHBob3RvcyBhcmUgbm90IHNocnVuayBtb3JlIHRoYW4gbGFuZHNjYXBlIG9uZXMuXG4gIGNvbnN0IGxpbWl0ID0gb3B0aW9ucy5tYXhEaW1lbnNpb24gPiAwID8gb3B0aW9ucy5tYXhEaW1lbnNpb24gOiBJbmZpbml0eTtcblxuICByZXR1cm4gbmV3IFByb21pc2U8QmxvYj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIG5ldyBDb21wcmVzc29yKGZpbGUsIHtcbiAgICAgIHF1YWxpdHk6IG9wdGlvbnMucXVhbGl0eSxcbiAgICAgIG1heFdpZHRoOiBsaW1pdCxcbiAgICAgIG1heEhlaWdodDogbGltaXQsXG4gICAgICBjaGVja09yaWVudGF0aW9uOiB0cnVlLCAvLyByZXNwZWN0IEVYSUYgcm90YXRpb25cbiAgICAgIHJldGFpbkV4aWY6IG9wdGlvbnMua2VlcEV4aWYsXG4gICAgICBtaW1lVHlwZSxcbiAgICAgIGNvbnZlcnRUeXBlczogXCJpbWFnZS9wbmdcIixcbiAgICAgIGNvbnZlcnRTaXplLFxuICAgICAgc3RyaWN0OiB0cnVlLFxuICAgICAgc3VjY2VzczogcmVzb2x2ZSxcbiAgICAgIGVycm9yOiByZWplY3QsXG4gICAgfSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIENvbXByZXNzZXMgYW4gaW1hZ2UuIEFsd2F5cyByZXR1cm5zIHRoZSBzbWFsbGVyIG9mIHRoZSBvcmlnaW5hbCBhbmQgdGhlIHJlc3VsdCxcbiAqIGFuZCByZXR1cm5zIHRoZSBvcmlnaW5hbCB1bnRvdWNoZWQgZm9yIEdJRi9TVkcvc21hbGwgZmlsZXMuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb21wcmVzc0ltYWdlKGZpbGU6IEZpbGUsIG9wdGlvbnM6IENvbXByZXNzT3B0aW9ucyk6IFByb21pc2U8QmxvYj4ge1xuICBpZiAoIWZpbGUudHlwZS5zdGFydHNXaXRoKFwiaW1hZ2UvXCIpIHx8IFNLSVBfVFlQRVMuaGFzKGZpbGUudHlwZSkpIHJldHVybiBmaWxlO1xuICBpZiAoZmlsZS5zaXplIDwgb3B0aW9ucy5taW5TaXplQnl0ZXMpIHJldHVybiBmaWxlO1xuXG4gIGNvbnN0IG1pbWVUeXBlID0gb3B0aW9ucy5mb3JtYXQgPT09IFwianBlZ1wiID8gXCJpbWFnZS9qcGVnXCIgOiBvcHRpb25zLmZvcm1hdCA9PT0gXCJ3ZWJwXCIgPyBcImltYWdlL3dlYnBcIiA6IFwiYXV0b1wiO1xuICBjb25zdCBjb252ZXJ0U2l6ZSA9IG9wdGlvbnMuZm9ybWF0ID09PSBcIm9yaWdpbmFsXCIgPyBJbmZpbml0eSA6IFBOR19DT05WRVJUX1NJWkU7XG5cbiAgbGV0IHJlc3VsdCA9IGF3YWl0IHJ1bkNvbXByZXNzb3IoZmlsZSwgb3B0aW9ucywgbWltZVR5cGUsIGNvbnZlcnRTaXplKTtcblxuICAvLyBTb21lIGJyb3dzZXJzIHNpbGVudGx5IGZhbGwgYmFjayB0byBQTkcgd2hlbiB0aGV5IGNhbm5vdCBlbmNvZGUgV2ViUC5cbiAgaWYgKG1pbWVUeXBlID09PSBcImltYWdlL3dlYnBcIiAmJiByZXN1bHQudHlwZSAhPT0gXCJpbWFnZS93ZWJwXCIpIHtcbiAgICByZXN1bHQgPSBhd2FpdCBydW5Db21wcmVzc29yKGZpbGUsIG9wdGlvbnMsIFwiaW1hZ2UvanBlZ1wiLCBjb252ZXJ0U2l6ZSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0LnNpemUgPCBmaWxlLnNpemUgPyByZXN1bHQgOiBmaWxlO1xufSIsICJpbXBvcnQgeyBURm9sZGVyLCBWYXVsdCB9IGZyb20gXCJvYnNpZGlhblwiO1xuXG5jb25zdCBwYWQgPSAobjogbnVtYmVyKSA9PiBTdHJpbmcobikucGFkU3RhcnQoMiwgXCIwXCIpO1xuXG4vKiogTG9jYWwgdGltZSAobm90IFVUQyk6IDIwMjYtMTAtMzFfMTQtMDUtMDkgKi9cbmZ1bmN0aW9uIGxvY2FsU3RhbXAoZGF0ZSA9IG5ldyBEYXRlKCkpOiBzdHJpbmcge1xuICBjb25zdCBkYXkgPSBgJHtkYXRlLmdldEZ1bGxZZWFyKCl9LSR7cGFkKGRhdGUuZ2V0TW9udGgoKSArIDEpfS0ke3BhZChkYXRlLmdldERhdGUoKSl9YDtcbiAgY29uc3QgdGltZSA9IGAke3BhZChkYXRlLmdldEhvdXJzKCkpfS0ke3BhZChkYXRlLmdldE1pbnV0ZXMoKSl9LSR7cGFkKGRhdGUuZ2V0U2Vjb25kcygpKX1gO1xuICByZXR1cm4gYCR7ZGF5fV8ke3RpbWV9YDtcbn1cblxuLyoqXG4gKiBAcGFyYW0gZmlsZSAgIHRoZSBvcmlnaW5hbCBmaWxlICh1c2VkIGZvciBhIGZhbGxiYWNrIGV4dGVuc2lvbilcbiAqIEBwYXJhbSBvdXRwdXQgdGhlIGJsb2IgdGhhdCB3aWxsIGFjdHVhbGx5IGJlIHdyaXR0ZW4gKG1heSBiZSBjb21wcmVzc2VkL2NvbnZlcnRlZCkuXG4gKiAgICAgICAgICAgICAgIFRoZSBleHRlbnNpb24gY29tZXMgZnJvbSB0aGlzLCBzbyBhIFBORyBjb252ZXJ0ZWQgdG8gSlBFRyBpcyBzYXZlZCBhcyAuanBnLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRGaWxlTmFtZShmaWxlOiBGaWxlLCBvdXRwdXQ6IEJsb2IgPSBmaWxlKTogc3RyaW5nIHtcbiAgY29uc3QgZXh0ID0gZXh0ZW5zaW9uRnJvbVR5cGUob3V0cHV0LnR5cGUpID8/IGV4dGVuc2lvbkZyb21OYW1lKGZpbGUubmFtZSk/LnRvTG93ZXJDYXNlKCkgPz8gXCJqcGdcIjtcbiAgcmV0dXJuIGBwaG90by0ke2xvY2FsU3RhbXAoKX0uJHtleHR9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dGVuc2lvbkZyb21OYW1lKG5hbWU6IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICBjb25zdCBtYXRjaCA9IG5hbWUubWF0Y2goL1xcLihbYS16QS1aMC05XSspJC8pO1xuICByZXR1cm4gbWF0Y2g/LlsxXSA/PyBudWxsO1xufVxuXG5jb25zdCBUWVBFX0VYVEVOU0lPTlM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIGpwZWc6IFwianBnXCIsXG4gIHBqcGVnOiBcImpwZ1wiLFxuICBcInN2Zyt4bWxcIjogXCJzdmdcIixcbiAgXCJ4LWljb25cIjogXCJpY29cIixcbiAgXCJ2bmQubWljcm9zb2Z0Lmljb25cIjogXCJpY29cIixcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRlbnNpb25Gcm9tVHlwZShtaW1lVHlwZTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gIGlmICghbWltZVR5cGUuc3RhcnRzV2l0aChcImltYWdlL1wiKSkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IHN1YnR5cGUgPSBtaW1lVHlwZS5zbGljZShcImltYWdlL1wiLmxlbmd0aCkudG9Mb3dlckNhc2UoKTtcbiAgaWYgKCFzdWJ0eXBlKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgbWFwcGVkID0gVFlQRV9FWFRFTlNJT05TW3N1YnR5cGVdO1xuICBpZiAobWFwcGVkKSByZXR1cm4gbWFwcGVkO1xuICByZXR1cm4gL15bYS16MC05XSskLy50ZXN0KHN1YnR5cGUpID8gc3VidHlwZSA6IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBqb2luUGF0aChwYXJlbnRQYXRoOiBzdHJpbmcgfCBudWxsLCBmaWxlTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKCFwYXJlbnRQYXRoKSByZXR1cm4gZmlsZU5hbWU7IC8vIHBhcmVudFBhdGggaXMgZW1wdHkgc3RyaW5nIFx1MjE5MiB2YXVsdCByb290XG4gIHJldHVybiBgJHtwYXJlbnRQYXRofS8ke2ZpbGVOYW1lfWA7XG59XG5cbi8qKiBVc2VzIHRoZSBsb2NhbCBkYXRlLCBzbyBhIHBob3RvIHRha2VuIGF0IDEgQU0gb24gdGhlIDFzdCBnb2VzIGluIHRoZSByaWdodCBtb250aC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRNb250aGx5Rm9sZGVyKHBhcmVudFBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gIHJldHVybiBqb2luUGF0aChqb2luUGF0aChwYXJlbnRQYXRoLCBTdHJpbmcobm93LmdldEZ1bGxZZWFyKCkpKSwgcGFkKG5vdy5nZXRNb250aCgpICsgMSkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRm9sZGVyUGF0aCh2YXVsdDogVmF1bHQsIHBhdGg6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICBsZXQgY3VycmVudFBhdGggPSBcIlwiO1xuICBmb3IgKGNvbnN0IHNlZ21lbnQgb2YgcGF0aC5zcGxpdChcIi9cIikuZmlsdGVyKEJvb2xlYW4pKSB7XG4gICAgY3VycmVudFBhdGggPSBqb2luUGF0aChjdXJyZW50UGF0aCwgc2VnbWVudCk7XG4gICAgY29uc3QgZXhpc3RpbmcgPSB2YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoY3VycmVudFBhdGgpO1xuICAgIGlmIChleGlzdGluZyBpbnN0YW5jZW9mIFRGb2xkZXIpIGNvbnRpbnVlO1xuICAgIGlmIChleGlzdGluZykgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgY3JlYXRlIGZvbGRlciBiZWNhdXNlIGEgZmlsZSBleGlzdHMgYXQgJHtjdXJyZW50UGF0aH1gKTtcbiAgICBhd2FpdCB2YXVsdC5jcmVhdGVGb2xkZXIoY3VycmVudFBhdGgpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBdmFpbGFibGVQYXRoKHZhdWx0OiBWYXVsdCwgcGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gQXZvaWQgb3ZlcndyaXRpbmcgZXhpc3RpbmcgZmlsZXMgYnkgYWRkaW5nIGEgc3VmZml4LlxuICBpZiAoIXZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChwYXRoKSkgcmV0dXJuIHBhdGg7XG5cbiAgY29uc3QgcGFydHMgPSBwYXRoLnNwbGl0KFwiL1wiKTtcbiAgY29uc3QgbmFtZSA9IHBhcnRzLnBvcCgpID8/IHBhdGg7XG4gIGNvbnN0IGRpciA9IHBhcnRzLmxlbmd0aCA+IDAgPyBgJHtwYXJ0cy5qb2luKFwiL1wiKX0vYCA6IFwiXCI7XG4gIGNvbnN0IGV4dEluZGV4ID0gbmFtZS5sYXN0SW5kZXhPZihcIi5cIik7XG4gIGNvbnN0IGJhc2UgPSBleHRJbmRleCA9PT0gLTEgPyBuYW1lIDogbmFtZS5zbGljZSgwLCBleHRJbmRleCk7XG4gIGNvbnN0IGV4dCA9IGV4dEluZGV4ID09PSAtMSA/IFwiXCIgOiBuYW1lLnNsaWNlKGV4dEluZGV4KTtcblxuICBmb3IgKGxldCBpID0gMTsgaSA8IDEwMDA7IGkrKykge1xuICAgIGNvbnN0IGNhbmRpZGF0ZSA9IGAke2Rpcn0ke2Jhc2V9LSR7aX0ke2V4dH1gO1xuICAgIGlmICghdmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGNhbmRpZGF0ZSkpIHJldHVybiBjYW5kaWRhdGU7XG4gIH1cbiAgcmV0dXJuIGAke2Rpcn0ke2Jhc2V9LSR7RGF0ZS5ub3coKX0ke2V4dH1gO1xufVxuXG4vKiogSGVscGVyIHRvIGNoZWNrIGlmIGEgZm9sZGVyIGV4aXN0cyBhdCB0aGUgZ2l2ZW4gcGF0aC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb2xkZXJFeGlzdHModmF1bHQ6IFZhdWx0LCBwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgY29uc3QgZmlsZSA9IHZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChwYXRoKTtcbiAgcmV0dXJuIGZpbGUgaW5zdGFuY2VvZiBURm9sZGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0Qnl0ZXMoYnl0ZXM6IG51bWJlcik6IHN0cmluZyB7XG4gIGlmIChieXRlcyA8IDEwMjQpIHJldHVybiBgJHtieXRlc30gQmA7XG4gIGlmIChieXRlcyA8IDEwMjQgKiAxMDI0KSByZXR1cm4gYCR7KGJ5dGVzIC8gMTAyNCkudG9GaXhlZCgwKX0gS0JgO1xuICByZXR1cm4gYCR7KGJ5dGVzIC8gKDEwMjQgKiAxMDI0KSkudG9GaXhlZCgxKX0gTUJgO1xufVxuXG4vKipcbiAqIEFkZHMgYW4gaW1hZ2Ugd2lkdGggdG8gYW4gZW1iZWQgbGluaywgdXNpbmcgT2JzaWRpYW4ncyBzaXplIHN5bnRheDpcbiAqICAgW1twaG90by5qcGddXSAgICAgIC0+IFtbcGhvdG8uanBnfDUwMF1dXG4gKiAgIFtwaG90b10ocGhvdG8uanBnKSAtPiBbcGhvdG98NTAwXShwaG90by5qcGcpXG4gKiBSZXR1cm5zIHRoZSBsaW5rIHVuY2hhbmdlZCB3aGVuIG5vIHdpZHRoIGlzIGdpdmVuLlxuICovXG5leHBvcnQgZnVuY3Rpb24gd2l0aEVtYmVkV2lkdGgobGluazogc3RyaW5nLCB3aWR0aD86IG51bWJlcik6IHN0cmluZyB7XG4gIGlmICghd2lkdGggfHwgd2lkdGggPD0gMCkgcmV0dXJuIGxpbms7XG4gIGlmIChsaW5rLnN0YXJ0c1dpdGgoXCJbW1wiKSAmJiBsaW5rLmVuZHNXaXRoKFwiXV1cIikpIHtcbiAgICByZXR1cm4gYCR7bGluay5zbGljZSgwLCAtMil9fCR7d2lkdGh9XV1gO1xuICB9XG4gIHJldHVybiBsaW5rLnJlcGxhY2UoL15cXFsoLio/KVxcXVxcKC8sIChfbWF0Y2gsIGFsdDogc3RyaW5nKSA9PiBgWyR7YWx0fXwke3dpZHRofV0oYCk7XG59IiwgImV4cG9ydCB0eXBlIFBpY2tTb3VyY2UgPSBcImNhbWVyYVwiIHwgXCJnYWxsZXJ5XCI7XG5cbi8qKlxuICogT3BlbnMgdGhlIG5hdGl2ZSBmaWxlL2NhbWVyYSBwaWNrZXIuIFRoZXJlIGlzIGRlbGliZXJhdGVseSBubyB0aW1lb3V0OlxuICogb24gQW5kcm9pZCB0aGUgdXNlciBtYXkgc3RheSBpbiB0aGUgY2FtZXJhIGFwcCBmb3IgYSBsb25nIHRpbWUsIGFuZCBhIHRpbWVyXG4gKiB3b3VsZCB0aHJvdyB0aGUgcGhvdG8gYXdheS4gQ2FuY2VsbGluZyByZXNvbHZlcyB3aXRoIGFuIGVtcHR5IGxpc3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwaWNrSW1hZ2VzKHNvdXJjZTogUGlja1NvdXJjZSA9IFwiZ2FsbGVyeVwiKTogUHJvbWlzZTxGaWxlW10+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgY29uc3QgaW5wdXQgPSBhY3RpdmVEb2N1bWVudC5ib2R5LmNyZWF0ZUVsKFwiaW5wdXRcIiwgeyBjbHM6IFwiY2FtZXJhLWhpZGRlblwiLCB0eXBlOiBcImZpbGVcIiB9KTtcbiAgICBpbnB1dC5hY2NlcHQgPSBcImltYWdlLypcIjtcbiAgICBpbnB1dC5tdWx0aXBsZSA9IHNvdXJjZSAhPT0gXCJjYW1lcmFcIjtcbiAgICBpZiAoc291cmNlID09PSBcImNhbWVyYVwiKSBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJjYXB0dXJlXCIsIFwiZW52aXJvbm1lbnRcIik7XG5cbiAgICBjb25zdCBmaW5pc2ggPSAoZmlsZXM6IEZpbGVbXSkgPT4ge1xuICAgICAgaW5wdXQucmVtb3ZlKCk7XG4gICAgICByZXNvbHZlKGZpbGVzKTtcbiAgICB9O1xuXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiBmaW5pc2goaW5wdXQuZmlsZXMgPyBBcnJheS5mcm9tKGlucHV0LmZpbGVzKSA6IFtdKSk7XG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNhbmNlbFwiLCAoKSA9PiBmaW5pc2goW10pKTtcblxuICAgIGlucHV0LmNsaWNrKCk7XG4gIH0pO1xufSIsICJpbXBvcnQgeyBBcHAsIEV2ZW50UmVmLCBNZW51LCBNb2RhbCwgTm90aWNlLCBQbGF0Zm9ybSwgVEZpbGUsIG5vcm1hbGl6ZVBhdGgsIHNldEljb24sIE1hcmtkb3duVmlldyB9IGZyb20gXCJvYnNpZGlhblwiO1xuaW1wb3J0IHsgd2l0aEVtYmVkV2lkdGggfSBmcm9tIFwiLi9maWxlLXV0aWxzLmpzXCI7XG5pbXBvcnQgeyBwaWNrSW1hZ2VzLCB0eXBlIFBpY2tTb3VyY2UgfSBmcm9tIFwiLi9pbnB1dC11dGlscy5qc1wiO1xuaW1wb3J0IHR5cGUgeyBDYW1lcmFFbWJlZFNldHRpbmdzLCBHYWxsZXJ5U2NvcGUsIEdhbGxlcnlTb3J0IH0gZnJvbSBcIi4vc2V0dGluZ3MuanNcIjtcblxuY29uc3QgSU1BR0VfRVhURU5TSU9OUyA9IG5ldyBTZXQoW1wianBnXCIsIFwianBlZ1wiLCBcInBuZ1wiLCBcImdpZlwiLCBcIndlYnBcIiwgXCJibXBcIiwgXCJzdmdcIiwgXCJhdmlmXCJdKTtcbmNvbnN0IFJFTkRFUl9DSFVOSyA9IDEyMDtcbmNvbnN0IE1BWF9NRU5VX1VTQUdFUyA9IDU7XG5jb25zdCBMT05HX1BSRVNTX01TID0gNTAwO1xuY29uc3QgV0lEVEhfQ0hPSUNFUyA9IFszMDAsIDUwMCwgODAwXTtcblxuLyoqIFdoYXQgdGhlIGdhbGxlcnkgbmVlZHMgZnJvbSB0aGUgcGx1Z2luLiBDYW1lcmFFbWJlZFBsdWdpbiBzYXRpc2ZpZXMgdGhpcyBhcyBpcy4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgR2FsbGVyeUhvc3Qge1xuICBzZXR0aW5nczogQ2FtZXJhRW1iZWRTZXR0aW5ncztcbiAgc2F2ZVBob3RvcyhmaWxlczogRmlsZVtdKTogUHJvbWlzZTxURmlsZVtdPjtcbiAgc2F2ZVNldHRpbmdzKCk6IFByb21pc2U8dm9pZD47XG4gIG9wZW5HYWxsZXJ5U2lkZWJhcj8oKTogUHJvbWlzZTx2b2lkPjtcbn1cblxuaW50ZXJmYWNlIEl0ZW1SZWZzIHtcbiAgaXRlbTogSFRNTEVsZW1lbnQ7XG4gIGJhZGdlOiBIVE1MRWxlbWVudDtcbn1cblxuY29uc3QgaXNJbWFnZSA9IChmaWxlOiBURmlsZSkgPT4gSU1BR0VfRVhURU5TSU9OUy5oYXMoZmlsZS5leHRlbnNpb24udG9Mb3dlckNhc2UoKSk7XG5jb25zdCBuZXh0RnJhbWUgPSAoKSA9PiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiByZXNvbHZlKCkpKTtcblxuLyoqIEZpbGVzIGZyb20gdGhlIE9TOiB0cnVzdCB0aGUgTUlNRSB0eXBlLCBidXQgZmFsbCBiYWNrIHRvIHRoZSBleHRlbnNpb24gKHNvbWUgc3lzdGVtcyBnaXZlIGFuIGVtcHR5IHR5cGUpLiAqL1xuY29uc3QgaXNJbWFnZUZpbGUgPSAoZmlsZTogRmlsZSkgPT4ge1xuICBpZiAoZmlsZS50eXBlLnN0YXJ0c1dpdGgoXCJpbWFnZS9cIikpIHJldHVybiB0cnVlO1xuICBjb25zdCBleHQgPSBmaWxlLm5hbWUuc3BsaXQoXCIuXCIpLnBvcCgpPy50b0xvd2VyQ2FzZSgpID8/IFwiXCI7XG4gIHJldHVybiBJTUFHRV9FWFRFTlNJT05TLmhhcyhleHQpO1xufTtcblxuLyoqIE5vdGVzIHRoYXQgbGluayB0byB0aGlzIHBob3RvLiAqL1xuZnVuY3Rpb24gZ2V0VXNhZ2VzKGFwcDogQXBwLCBmaWxlOiBURmlsZSk6IFRGaWxlW10ge1xuICBjb25zdCByZXNvbHZlZExpbmtzID0gYXBwLm1ldGFkYXRhQ2FjaGUucmVzb2x2ZWRMaW5rcztcbiAgY29uc3QgdXNhZ2VzOiBURmlsZVtdID0gW107XG4gIGZvciAoY29uc3QgcGF0aCBpbiByZXNvbHZlZExpbmtzKSB7XG4gICAgY29uc3QgdGFyZ2V0cyA9IHJlc29sdmVkTGlua3NbcGF0aF07XG4gICAgaWYgKCF0YXJnZXRzKSBjb250aW51ZTtcbiAgICBpZiAoKHRhcmdldHNbZmlsZS5wYXRoXSA/PyAwKSA8PSAwKSBjb250aW51ZTtcbiAgICBjb25zdCBub3RlOiB1bmtub3duID0gYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChwYXRoKTtcbiAgICBpZiAobm90ZSBpbnN0YW5jZW9mIFRGaWxlKSB1c2FnZXMucHVzaChub3RlKTtcbiAgfVxuICByZXR1cm4gdXNhZ2VzO1xufVxuXG5leHBvcnQgY2xhc3MgR2FsbGVyeU1vZGFsIGV4dGVuZHMgTW9kYWwge1xuICBwcml2YXRlIHJlYWRvbmx5IGhvc3Q6IEdhbGxlcnlIb3N0O1xuICBwcml2YXRlIHJlYWRvbmx5IG9uQ2hvb3NlOiAoZmlsZXM6IFRGaWxlW10sIHdpZHRoPzogbnVtYmVyKSA9PiB2b2lkO1xuICBwcml2YXRlIHJlYWRvbmx5IGNsb3NlT25DaG9vc2U6IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSBhbGxGaWxlczogVEZpbGVbXSA9IFtdO1xuICBwcml2YXRlIHZpc2libGVGaWxlczogVEZpbGVbXSA9IFtdO1xuICBwcml2YXRlIGl0ZW1FbHMgPSBuZXcgTWFwPHN0cmluZywgSXRlbVJlZnM+KCk7XG4gIHByaXZhdGUgc2VsZWN0ZWQgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgcHJpdmF0ZSBxdWVyeSA9IFwiXCI7XG5cbiAgcHJpdmF0ZSBncmlkITogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgc2VsZWN0aW9uTGFiZWwhOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBzdGF0dXMhOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSB1c2VCdXR0b24hOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgcHJpdmF0ZSBkZWxldGVCdXR0b24hOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgcHJpdmF0ZSBwcmV2aWV3QnV0dG9uITogSFRNTEJ1dHRvbkVsZW1lbnQ7XG5cbiAgcHJpdmF0ZSBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBsb2FkZXJzID0gbmV3IFdlYWtNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKTtcbiAgcHJpdmF0ZSBldmVudFJlZnM6IEV2ZW50UmVmW10gPSBbXTtcbiAgcHJpdmF0ZSByZWJ1aWxkVGltZXI6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIHNlYXJjaFRpbWVyOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBsYXN0TWVudVRpbWUgPSAwO1xuICBwcml2YXRlIHJlbmRlcklkID0gMDtcbiAgcHJpdmF0ZSBvcGVuZWQgPSBmYWxzZTtcblxuICBwcml2YXRlIGRyYWdEZXB0aCA9IDA7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgYXBwOiBBcHAsXG4gICAgaG9zdDogR2FsbGVyeUhvc3QsXG4gICAgb25DaG9vc2U6IChmaWxlczogVEZpbGVbXSwgd2lkdGg/OiBudW1iZXIpID0+IHZvaWQsXG4gICAgY2xvc2VPbkNob29zZSA9IHRydWUsXG4gICkge1xuICAgIHN1cGVyKGFwcCk7XG4gICAgdGhpcy5ob3N0ID0gaG9zdDtcbiAgICB0aGlzLm9uQ2hvb3NlID0gb25DaG9vc2U7XG4gICAgdGhpcy5jbG9zZU9uQ2hvb3NlID0gY2xvc2VPbkNob29zZTtcbiAgfVxuXG4gIG1vdW50KGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLm9uT3BlbigpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRlbnRFbCk7XG4gIH1cblxuICB1bm1vdW50KCkgeyB0aGlzLm9uQ2xvc2UoKTsgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAvKiBVSSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gIG9uT3BlbigpIHtcbiAgICB0aGlzLm9wZW5lZCA9IHRydWU7XG4gICAgdGhpcy5tb2RhbEVsLmFkZENsYXNzKFwiY2FtZXJhLWdhbGxlcnktbW9kYWwtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHsgY29udGVudEVsIH0gPSB0aGlzO1xuICAgIGNvbnRlbnRFbC5hZGRDbGFzcyhcImNhbWVyYS1nYWxsZXJ5LW1vZGFsXCIpO1xuICAgIHRoaXMuc2V0dXBEcm9wVGFyZ2V0KCk7XG4gICAgY29uc3Qgc2V0dGluZ3MgPSB0aGlzLmhvc3Quc2V0dGluZ3M7XG5cbiAgICAvLyBIZWFkZXJcbiAgICBjb25zdCBoZWFkZXIgPSBjb250ZW50RWwuY3JlYXRlRGl2KHsgY2xzOiBcImNhbWVyYS1nYWxsZXJ5LWhlYWRlclwiIH0pO1xuICAgIGNvbnN0IHRpdGxlID0gaGVhZGVyLmNyZWF0ZURpdih7IGNsczogXCJjYW1lcmEtZ2FsbGVyeS10aXRsZVwiIH0pO1xuICAgIHNldEljb24odGl0bGUsIFwiaW1hZ2VzXCIpO1xuICAgIHRpdGxlLmNyZWF0ZVNwYW4oeyB0ZXh0OiBcIkdhbGxlcnlcIiB9KTtcbiAgICB0aGlzLnNlbGVjdGlvbkxhYmVsID0gaGVhZGVyLmNyZWF0ZURpdih7IGNsczogXCJjYW1lcmEtZ2FsbGVyeS1zZWxlY3Rpb25cIiB9KTtcblxuICAgIC8vIFRvb2xiYXIgKGFkZGluZyBwaG90b3MpXG4gICAgY29uc3QgdG9vbGJhciA9IGNvbnRlbnRFbC5jcmVhdGVEaXYoeyBjbHM6IFwiY2FtZXJhLWdhbGxlcnktdG9vbGJhclwiIH0pO1xuICAgIGlmIChQbGF0Zm9ybS5pc01vYmlsZSkge1xuICAgICAgY29uc3QgdGFrZSA9IHRvb2xiYXIuY3JlYXRlRWwoXCJidXR0b25cIiwgeyBjbHM6IFwibW9kLWN0YVwiIH0pO1xuICAgICAgc2V0SWNvbih0YWtlLCBcImNhbWVyYVwiKTtcbiAgICAgIHRha2UuY3JlYXRlU3Bhbih7IHRleHQ6IFwiVGFrZSBwaG90byB0byBnYWxsZXJ5XCIgfSk7XG4gICAgICB0YWtlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB2b2lkIHRoaXMuYWRkUGhvdG9zKFwiY2FtZXJhXCIpKTtcbiAgICB9XG4gICAgY29uc3QgdXBsb2FkID0gdG9vbGJhci5jcmVhdGVFbChcImJ1dHRvblwiLCB7IGNsczogXCJjYW1lcmEtZ2FsbGVyeS11cGxvYWRcIiB9KTtcbiAgICBzZXRJY29uKHVwbG9hZCwgXCJ1cGxvYWRcIik7XG4gICAgdXBsb2FkLmNyZWF0ZVNwYW4oeyB0ZXh0OiBcIlVwbG9hZCB0byBnYWxsZXJ5XCIgfSk7XG4gICAgdXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB2b2lkIHRoaXMuYWRkUGhvdG9zKFwiZ2FsbGVyeVwiKSk7XG5cbiAgICBpZiAoUGxhdGZvcm0uaXNEZXNrdG9wICYmIHRoaXMuY2xvc2VPbkNob29zZSAmJiB0aGlzLmhvc3Qub3BlbkdhbGxlcnlTaWRlYmFyKSB7XG4gICAgICBjb25zdCBzaWRlYmFyID0gdG9vbGJhci5jcmVhdGVFbChcImJ1dHRvblwiLCB7IGF0dHI6IHsgXCJhcmlhLWxhYmVsXCI6IFwiT3BlbiB0aGUgZ2FsbGVyeSBpbiB0aGUgc2lkZWJhciB0byBkcmFnIHBob3RvcyBpbnRvIG5vdGVzXCIgfSB9KTtcbiAgICAgIHNldEljb24oc2lkZWJhciwgXCJwYW5lbC1yaWdodFwiKTtcbiAgICAgIHNpZGViYXIuY3JlYXRlU3Bhbih7IHRleHQ6IFwiT3BlbiBpbiBzaWRlYmFyXCIgfSk7XG4gICAgICBzaWRlYmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgdm9pZCB0aGlzLmhvc3Qub3BlbkdhbGxlcnlTaWRlYmFyPy4oKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIENvbnRyb2xzIChzZWFyY2gsIHNvcnQsIHNjb3BlLCBtb250aCBncm91cGluZywgem9vbSlcbiAgICBjb25zdCBjb250cm9scyA9IGNvbnRlbnRFbC5jcmVhdGVEaXYoeyBjbHM6IFwiY2FtZXJhLWdhbGxlcnktY29udHJvbHNcIiB9KTtcblxuICAgIGNvbnN0IHNlYXJjaCA9IGNvbnRyb2xzLmNyZWF0ZURpdih7IGNsczogXCJjYW1lcmEtZ2FsbGVyeS1zZWFyY2hcIiB9KTtcbiAgICBjb25zdCBzZWFyY2hJbnB1dCA9IHNlYXJjaC5jcmVhdGVFbChcImlucHV0XCIsIHsgdHlwZTogXCJzZWFyY2hcIiwgcGxhY2Vob2xkZXI6IFwiU2VhcmNoIHBob3Rvc1x1MjAyNlwiIH0pO1xuICAgIHNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5zZWFyY2hUaW1lciAhPT0gbnVsbCkgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnNlYXJjaFRpbWVyKTtcbiAgICAgIHRoaXMuc2VhcmNoVGltZXIgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMucXVlcnkgPSBzZWFyY2hJbnB1dC52YWx1ZTtcbiAgICAgICAgdm9pZCB0aGlzLnJlYnVpbGQoKTtcbiAgICAgIH0sIDE1MCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZFNlbGVjdDxHYWxsZXJ5U29ydD4oXG4gICAgICBjb250cm9scyxcbiAgICAgIHsgbmV3ZXN0OiBcIk5ld2VzdCBmaXJzdFwiLCBvbGRlc3Q6IFwiT2xkZXN0IGZpcnN0XCIsIG5hbWU6IFwiTmFtZVwiLCBzaXplOiBcIkxhcmdlc3QgZmlyc3RcIiB9LFxuICAgICAgc2V0dGluZ3MuZ2FsbGVyeVNvcnQsXG4gICAgICAodmFsdWUpID0+IHtcbiAgICAgICAgc2V0dGluZ3MuZ2FsbGVyeVNvcnQgPSB2YWx1ZTtcbiAgICAgICAgdm9pZCB0aGlzLnBlcnNpc3RBbmRSZWJ1aWxkKCk7XG4gICAgICB9LFxuICAgICk7XG5cbiAgICB0aGlzLmFkZFNlbGVjdDxHYWxsZXJ5U2NvcGU+KFxuICAgICAgY29udHJvbHMsXG4gICAgICB7IHZhdWx0OiBcIldob2xlIHZhdWx0XCIsIGZvbGRlcjogXCJQaG90b3MgZm9sZGVyXCIgfSxcbiAgICAgIHNldHRpbmdzLmdhbGxlcnlTY29wZSxcbiAgICAgICh2YWx1ZSkgPT4ge1xuICAgICAgICBzZXR0aW5ncy5nYWxsZXJ5U2NvcGUgPSB2YWx1ZTtcbiAgICAgICAgdm9pZCB0aGlzLnBlcnNpc3RBbmRSZWJ1aWxkKCk7XG4gICAgICB9LFxuICAgICk7XG5cbiAgICBjb25zdCBncm91cEJ1dHRvbiA9IGNvbnRyb2xzLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICAgIGNsczogXCJjYW1lcmEtZ2FsbGVyeS1ncm91cCBjbGlja2FibGUtaWNvblwiLFxuICAgICAgYXR0cjogeyBcImFyaWEtbGFiZWxcIjogXCJHcm91cCBieSBtb250aFwiIH0sXG4gICAgfSk7XG4gICAgc2V0SWNvbihncm91cEJ1dHRvbiwgXCJjYWxlbmRhclwiKTtcbiAgICBncm91cEJ1dHRvbi50b2dnbGVDbGFzcyhcImlzLWFjdGl2ZVwiLCBzZXR0aW5ncy5nYWxsZXJ5R3JvdXBCeU1vbnRoKTtcbiAgICBncm91cEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgc2V0dGluZ3MuZ2FsbGVyeUdyb3VwQnlNb250aCA9ICFzZXR0aW5ncy5nYWxsZXJ5R3JvdXBCeU1vbnRoO1xuICAgICAgZ3JvdXBCdXR0b24udG9nZ2xlQ2xhc3MoXCJpcy1hY3RpdmVcIiwgc2V0dGluZ3MuZ2FsbGVyeUdyb3VwQnlNb250aCk7XG4gICAgICB2b2lkIHRoaXMucGVyc2lzdEFuZFJlYnVpbGQoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHpvb20gPSBjb250cm9scy5jcmVhdGVFbChcImlucHV0XCIsIHsgY2xzOiBcImNhbWVyYS1nYWxsZXJ5LXpvb21cIiwgdHlwZTogXCJyYW5nZVwiLCBhdHRyOiB7IFwiYXJpYS1sYWJlbFwiOiBcIlRodW1ibmFpbCBzaXplXCIgfSB9KTtcbiAgICB6b29tLm1pbiA9IFwiODBcIjtcbiAgICB6b29tLm1heCA9IFwiMzAwXCI7XG4gICAgem9vbS5zdGVwID0gXCIxMFwiO1xuICAgIGlmIChzZXR0aW5ncy5nYWxsZXJ5VGh1bWJTaXplID4gMCkgdGhpcy5hcHBseVpvb20oc2V0dGluZ3MuZ2FsbGVyeVRodW1iU2l6ZSk7XG4gICAgY29uc3QgY3NzU2l6ZSA9IHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoY29udGVudEVsKS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1jYW1lcmEtZ2FsbGVyeS1zaXplXCIpLCAxMCk7XG4gICAgem9vbS52YWx1ZSA9IFN0cmluZyhzZXR0aW5ncy5nYWxsZXJ5VGh1bWJTaXplID4gMCA/IHNldHRpbmdzLmdhbGxlcnlUaHVtYlNpemUgOiAoTnVtYmVyLmlzRmluaXRlKGNzc1NpemUpID8gY3NzU2l6ZSA6IDE1MCkpO1xuICAgIHpvb20uYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHRoaXMuYXBwbHlab29tKE51bWJlcih6b29tLnZhbHVlKSkpO1xuICAgIHpvb20uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICBzZXR0aW5ncy5nYWxsZXJ5VGh1bWJTaXplID0gTnVtYmVyKHpvb20udmFsdWUpO1xuICAgICAgdm9pZCB0aGlzLmhvc3Quc2F2ZVNldHRpbmdzKCk7XG4gICAgfSk7XG5cbiAgICAvLyBTdGF0dXMsIGdyaWQsIGZvb3RlclxuICAgIHRoaXMuc3RhdHVzID0gY29udGVudEVsLmNyZWF0ZURpdih7IGNsczogXCJjYW1lcmEtZ2FsbGVyeS1zdGF0dXNcIiB9KTtcbiAgICB0aGlzLmdyaWQgPSBjb250ZW50RWwuY3JlYXRlRGl2KHsgY2xzOiBcImNhbWVyYS1nYWxsZXJ5LWdyaWRcIiB9KTtcbiAgICBjb25zdCBmb290ZXIgPSBjb250ZW50RWwuY3JlYXRlRGl2KHsgY2xzOiBcImNhbWVyYS1nYWxsZXJ5LWZvb3RlclwiIH0pO1xuICAgIHRoaXMuZGVsZXRlQnV0dG9uID0gZm9vdGVyLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHsgdGV4dDogXCJEZWxldGVcIiwgY2xzOiBcImNhbWVyYS1nYWxsZXJ5LWRlbGV0ZVwiIH0pO1xuICAgIHRoaXMuZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB2b2lkIHRoaXMuZGVsZXRlU2VsZWN0ZWQoKSk7XG4gICAgdGhpcy5wcmV2aWV3QnV0dG9uID0gZm9vdGVyLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHsgdGV4dDogXCJQcmV2aWV3XCIsIGNsczogXCJjYW1lcmEtZ2FsbGVyeS1wcmV2aWV3XCIgfSk7XG4gICAgdGhpcy5wcmV2aWV3QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLnByZXZpZXdTZWxlY3RlZCgpKTtcbiAgICB0aGlzLnVzZUJ1dHRvbiA9IGZvb3Rlci5jcmVhdGVFbChcImJ1dHRvblwiLCB7IHRleHQ6IFwiVXNlIGl0XCIsIGNsczogXCJtb2QtY3RhXCIgfSk7XG4gICAgdGhpcy51c2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMudXNlU2VsZWN0ZWQoKSk7XG4gICAgdGhpcy5zZXRBY3Rpb25CdXR0b25zVmlzaWJsZShmYWxzZSk7XG5cbiAgICB0aGlzLmFsbEZpbGVzID0gdGhpcy5hcHAudmF1bHQuZ2V0RmlsZXMoKS5maWx0ZXIoaXNJbWFnZSk7XG4gICAgdGhpcy5yZWdpc3RlclZhdWx0RXZlbnRzKCk7XG4gICAgdm9pZCB0aGlzLnJlYnVpbGQoKTtcbiAgfVxuXG4gIG9uQ2xvc2UoKSB7XG4gICAgdGhpcy5vcGVuZWQgPSBmYWxzZTtcbiAgICB0aGlzLnJlbmRlcklkKys7XG4gICAgaWYgKHRoaXMucmVidWlsZFRpbWVyICE9PSBudWxsKSB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMucmVidWlsZFRpbWVyKTtcbiAgICBpZiAodGhpcy5zZWFyY2hUaW1lciAhPT0gbnVsbCkgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnNlYXJjaFRpbWVyKTtcbiAgICB0aGlzLnJlYnVpbGRUaW1lciA9IG51bGw7XG4gICAgdGhpcy5zZWFyY2hUaW1lciA9IG51bGw7XG4gICAgdGhpcy5vYnNlcnZlcj8uZGlzY29ubmVjdCgpO1xuICAgIHRoaXMub2JzZXJ2ZXIgPSBudWxsO1xuICAgIGZvciAoY29uc3QgcmVmIG9mIHRoaXMuZXZlbnRSZWZzKSB0aGlzLmFwcC52YXVsdC5vZmZyZWYocmVmKTtcbiAgICB0aGlzLmV2ZW50UmVmcyA9IFtdO1xuICAgIHRoaXMuY29udGVudEVsLmVtcHR5KCk7XG4gIH1cblxuICBwcml2YXRlIGFkZFNlbGVjdDxUIGV4dGVuZHMgc3RyaW5nPihwYXJlbnQ6IEhUTUxFbGVtZW50LCBvcHRpb25zOiBSZWNvcmQ8VCwgc3RyaW5nPiwgdmFsdWU6IFQsIG9uQ2hhbmdlOiAodmFsdWU6IFQpID0+IHZvaWQpIHtcbiAgICBjb25zdCBzZWxlY3QgPSBwYXJlbnQuY3JlYXRlRWwoXCJzZWxlY3RcIiwgeyBjbHM6IFwiZHJvcGRvd25cIiB9KTtcbiAgICBmb3IgKGNvbnN0IFtrZXksIGxhYmVsXSBvZiBPYmplY3QuZW50cmllcyhvcHRpb25zKSBhcyBbVCwgc3RyaW5nXVtdKSB7XG4gICAgICBzZWxlY3QuY3JlYXRlRWwoXCJvcHRpb25cIiwgeyB2YWx1ZToga2V5LCB0ZXh0OiBsYWJlbCB9KTtcbiAgICB9XG4gICAgc2VsZWN0LnZhbHVlID0gdmFsdWU7XG4gICAgc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4gb25DaGFuZ2Uoc2VsZWN0LnZhbHVlIGFzIFQpKTtcbiAgICByZXR1cm4gc2VsZWN0O1xuICB9XG5cbiAgcHJpdmF0ZSBhcHBseVpvb20oc2l6ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5jb250ZW50RWwuc2V0Q3NzUHJvcHMoeyBcIi0tY2FtZXJhLWdhbGxlcnktc2l6ZVwiOiBgJHtzaXplfXB4YCB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgcGVyc2lzdEFuZFJlYnVpbGQoKSB7XG4gICAgYXdhaXQgdGhpcy5ob3N0LnNhdmVTZXR0aW5ncygpO1xuICAgIGF3YWl0IHRoaXMucmVidWlsZCgpO1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gIC8qIExpdmUgdXBkYXRlcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgcHJpdmF0ZSByZWdpc3RlclZhdWx0RXZlbnRzKCkge1xuICAgIGNvbnN0IHZhdWx0ID0gdGhpcy5hcHAudmF1bHQ7XG4gICAgdGhpcy5ldmVudFJlZnMucHVzaChcbiAgICAgIHZhdWx0Lm9uKFwiY3JlYXRlXCIsIChmaWxlKSA9PiB7IGlmIChmaWxlIGluc3RhbmNlb2YgVEZpbGUgJiYgaXNJbWFnZShmaWxlKSkgdGhpcy5zY2hlZHVsZVJlYnVpbGQoKTsgfSksXG4gICAgICB2YXVsdC5vbihcImRlbGV0ZVwiLCAoKSA9PiB0aGlzLnNjaGVkdWxlUmVidWlsZCgpKSxcbiAgICAgIHZhdWx0Lm9uKFwicmVuYW1lXCIsIChmaWxlLCBvbGRQYXRoKSA9PiB7XG4gICAgICAgIHRoaXMucmVuYW1lU2VsZWN0ZWQob2xkUGF0aCwgZmlsZS5wYXRoKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZVJlYnVpbGQoKTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICAvKiogS2VlcHMgYSByZW5hbWVkIHBob3RvIHNlbGVjdGVkLCBpbiB0aGUgc2FtZSBzZWxlY3Rpb24gb3JkZXIuICovXG4gIHByaXZhdGUgcmVuYW1lU2VsZWN0ZWQob2xkUGF0aDogc3RyaW5nLCBuZXdQYXRoOiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMuc2VsZWN0ZWQuaGFzKG9sZFBhdGgpKSByZXR1cm47XG4gICAgdGhpcy5zZWxlY3RlZCA9IG5ldyBTZXQoQXJyYXkuZnJvbSh0aGlzLnNlbGVjdGVkLCAocGF0aCkgPT4gKHBhdGggPT09IG9sZFBhdGggPyBuZXdQYXRoIDogcGF0aCkpKTtcbiAgfVxuXG4gIC8qKiBTZXZlcmFsIGV2ZW50cyBvZnRlbiBhcnJpdmUgdG9nZXRoZXIgKHVwbG9hZHMsIGZvbGRlciBtb3ZlcyksIHNvIHdhaXQgYnJpZWZseSBhbmQgcmVidWlsZCBvbmNlLiAqL1xuICBwcml2YXRlIHNjaGVkdWxlUmVidWlsZCgpIHtcbiAgICBpZiAodGhpcy5yZWJ1aWxkVGltZXIgIT09IG51bGwpIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5yZWJ1aWxkVGltZXIpO1xuICAgIHRoaXMucmVidWlsZFRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5yZWJ1aWxkVGltZXIgPSBudWxsO1xuICAgICAgaWYgKCF0aGlzLm9wZW5lZCkgcmV0dXJuO1xuICAgICAgdGhpcy5hbGxGaWxlcyA9IHRoaXMuYXBwLnZhdWx0LmdldEZpbGVzKCkuZmlsdGVyKGlzSW1hZ2UpO1xuICAgICAgdm9pZCB0aGlzLnJlYnVpbGQodHJ1ZSk7XG4gICAgfSwgMjAwKTtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAvKiBGaWx0ZXJpbmcsIHNvcnRpbmcsIHJlbmRlcmluZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gIHByaXZhdGUgY29tcHV0ZVZpc2libGUoKTogVEZpbGVbXSB7XG4gICAgY29uc3Qgc2V0dGluZ3MgPSB0aGlzLmhvc3Quc2V0dGluZ3M7XG4gICAgY29uc3QgcXVlcnkgPSB0aGlzLnF1ZXJ5LnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgbGV0IHByZWZpeCA9IFwiXCI7XG4gICAgaWYgKHNldHRpbmdzLmdhbGxlcnlTY29wZSA9PT0gXCJmb2xkZXJcIikge1xuICAgICAgY29uc3QgZm9sZGVyID0gbm9ybWFsaXplUGF0aChzZXR0aW5ncy5waG90b3NGb2xkZXIudHJpbSgpKTtcbiAgICAgIGlmIChmb2xkZXIgJiYgZm9sZGVyICE9PSBcIi9cIikgcHJlZml4ID0gYCR7Zm9sZGVyfS9gO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5hbGxGaWxlcy5maWx0ZXIoXG4gICAgICAoZmlsZSkgPT4gKCFwcmVmaXggfHwgZmlsZS5wYXRoLnN0YXJ0c1dpdGgocHJlZml4KSkgJiYgKCFxdWVyeSB8fCBmaWxlLnBhdGgudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxdWVyeSkpLFxuICAgICk7XG5cbiAgICBzd2l0Y2ggKHNldHRpbmdzLmdhbGxlcnlTb3J0KSB7XG4gICAgICBjYXNlIFwib2xkZXN0XCI6IGZpbGVzLnNvcnQoKGEsIGIpID0+IGEuc3RhdC5tdGltZSAtIGIuc3RhdC5tdGltZSk7IGJyZWFrO1xuICAgICAgY2FzZSBcIm5hbWVcIjogZmlsZXMuc29ydCgoYSwgYikgPT4gYS5uYW1lLmxvY2FsZUNvbXBhcmUoYi5uYW1lLCB1bmRlZmluZWQsIHsgbnVtZXJpYzogdHJ1ZSB9KSk7IGJyZWFrO1xuICAgICAgY2FzZSBcInNpemVcIjogZmlsZXMuc29ydCgoYSwgYikgPT4gYi5zdGF0LnNpemUgLSBhLnN0YXQuc2l6ZSk7IGJyZWFrO1xuICAgICAgZGVmYXVsdDogZmlsZXMuc29ydCgoYSwgYikgPT4gYi5zdGF0Lm10aW1lIC0gYS5zdGF0Lm10aW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIGZpbGVzO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyByZWJ1aWxkKGtlZXBTY3JvbGwgPSBmYWxzZSkge1xuICAgIGlmICghdGhpcy5vcGVuZWQpIHJldHVybjtcbiAgICBjb25zdCBydW4gPSArK3RoaXMucmVuZGVySWQ7XG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmNvbXB1dGVWaXNpYmxlKCk7XG4gICAgdGhpcy52aXNpYmxlRmlsZXMgPSBmaWxlcztcbiAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLmdyaWQuc2Nyb2xsVG9wO1xuXG4gICAgLy8gTmV2ZXIgbGVhdmUgaGlkZGVuIHBob3RvcyBzZWxlY3RlZDogXCJVc2UgaXRcIiBhbmQgXCJEZWxldGVcIiB3b3VsZCBhY3Qgb24gdGhpbmdzIHlvdSBjYW4ndCBzZWUuXG4gICAgY29uc3QgdmlzaWJsZVBhdGhzID0gbmV3IFNldChmaWxlcy5tYXAoKGZpbGUpID0+IGZpbGUucGF0aCkpO1xuICAgIGZvciAoY29uc3QgcGF0aCBvZiBBcnJheS5mcm9tKHRoaXMuc2VsZWN0ZWQpKSBpZiAoIXZpc2libGVQYXRocy5oYXMocGF0aCkpIHRoaXMuc2VsZWN0ZWQuZGVsZXRlKHBhdGgpO1xuXG4gICAgdGhpcy5vYnNlcnZlcj8uZGlzY29ubmVjdCgpO1xuICAgIHRoaXMub2JzZXJ2ZXIgPSB0aGlzLmNyZWF0ZU9ic2VydmVyKCk7XG4gICAgdGhpcy5ncmlkLmVtcHR5KCk7XG4gICAgdGhpcy5pdGVtRWxzLmNsZWFyKCk7XG4gICAgdGhpcy51cGRhdGVTZWxlY3Rpb24oKTtcbiAgICB0aGlzLnVwZGF0ZVN0YXR1cygpO1xuXG4gICAgaWYgKGZpbGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5yZW5kZXJFbXB0eSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNldHRpbmdzID0gdGhpcy5ob3N0LnNldHRpbmdzO1xuICAgIGNvbnN0IGdyb3VwID0gc2V0dGluZ3MuZ2FsbGVyeUdyb3VwQnlNb250aCAmJiAoc2V0dGluZ3MuZ2FsbGVyeVNvcnQgPT09IFwibmV3ZXN0XCIgfHwgc2V0dGluZ3MuZ2FsbGVyeVNvcnQgPT09IFwib2xkZXN0XCIpO1xuICAgIGxldCBsYXN0TW9udGggPSBcIlwiO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGZpbGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgaWYgKHJ1biAhPT0gdGhpcy5yZW5kZXJJZCB8fCAhdGhpcy5vcGVuZWQpIHJldHVybjtcbiAgICAgIGNvbnN0IGZpbGUgPSBmaWxlc1tpbmRleF07XG4gICAgICBpZiAoIWZpbGUpIGNvbnRpbnVlO1xuXG4gICAgICBpZiAoZ3JvdXApIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGZpbGUuc3RhdC5tdGltZSk7XG4gICAgICAgIGNvbnN0IGtleSA9IGAke2RhdGUuZ2V0RnVsbFllYXIoKX0tJHtkYXRlLmdldE1vbnRoKCl9YDtcbiAgICAgICAgaWYgKGtleSAhPT0gbGFzdE1vbnRoKSB7XG4gICAgICAgICAgbGFzdE1vbnRoID0ga2V5O1xuICAgICAgICAgIHRoaXMuZ3JpZC5jcmVhdGVEaXYoe1xuICAgICAgICAgICAgY2xzOiBcImNhbWVyYS1nYWxsZXJ5LW1vbnRoXCIsXG4gICAgICAgICAgICB0ZXh0OiBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyh1bmRlZmluZWQsIHsgbW9udGg6IFwibG9uZ1wiLCB5ZWFyOiBcIm51bWVyaWNcIiB9KSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmNyZWF0ZUl0ZW0oZmlsZSk7XG4gICAgICBpZiAoKGluZGV4ICsgMSkgJSBSRU5ERVJfQ0hVTksgPT09IDApIGF3YWl0IG5leHRGcmFtZSgpO1xuICAgIH1cblxuICAgIGlmIChydW4gPT09IHRoaXMucmVuZGVySWQpIHRoaXMuZ3JpZC5zY3JvbGxUb3AgPSBrZWVwU2Nyb2xsID8gc2Nyb2xsVG9wIDogMDtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlU3RhdHVzKCkge1xuICAgIGNvbnN0IHNob3duID0gdGhpcy52aXNpYmxlRmlsZXMubGVuZ3RoO1xuICAgIGNvbnN0IHRvdGFsID0gdGhpcy5hbGxGaWxlcy5sZW5ndGg7XG4gICAgdGhpcy5zdGF0dXMuc2V0VGV4dChzaG93biA9PT0gdG90YWwgPyBgJHtzaG93bi50b0xvY2FsZVN0cmluZygpfSBwaG90b3NgIDogYCR7c2hvd24udG9Mb2NhbGVTdHJpbmcoKX0gb2YgJHt0b3RhbC50b0xvY2FsZVN0cmluZygpfSBwaG90b3NgKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyRW1wdHkoKSB7XG4gICAgY29uc3QgZW1wdHkgPSB0aGlzLmdyaWQuY3JlYXRlRGl2KHsgY2xzOiBcImNhbWVyYS1nYWxsZXJ5LWVtcHR5XCIgfSk7XG4gICAgc2V0SWNvbihlbXB0eS5jcmVhdGVEaXYoKSwgXCJpbWFnZS1vZmZcIik7XG4gICAgZW1wdHkuY3JlYXRlRGl2KHsgdGV4dDogdGhpcy5xdWVyeS50cmltKCkgPyBcIk5vIHBob3RvcyBtYXRjaCB5b3VyIHNlYXJjaC5cIiA6IFwiTm8gcGhvdG9zIHlldC5cIiB9KTtcbiAgICBpZiAoIXRoaXMucXVlcnkudHJpbSgpKSB7XG4gICAgICBjb25zdCBidXR0b24gPSBlbXB0eS5jcmVhdGVFbChcImJ1dHRvblwiLCB7IGNsczogXCJtb2QtY3RhXCIsIHRleHQ6IFwiVXBsb2FkIHBob3Rvc1wiIH0pO1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB2b2lkIHRoaXMuYWRkUGhvdG9zKFwiZ2FsbGVyeVwiKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFRodW1ibmFpbHMgb25seSBsb2FkIHdoZW4gdGhleSBnZXQgY2xvc2UgdG8gdGhlIHZpc2libGUgYXJlYSwgc28gYmlnIGdhbGxlcmllcyBzdGF5IGZhc3QuICovXG4gIHByaXZhdGUgY3JlYXRlT2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIge1xuICAgIHJldHVybiBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgICAoZW50cmllcykgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcbiAgICAgICAgICBpZiAoIWVudHJ5LmlzSW50ZXJzZWN0aW5nKSBjb250aW51ZTtcbiAgICAgICAgICB0aGlzLmxvYWRlcnMuZ2V0KGVudHJ5LnRhcmdldCk/LigpO1xuICAgICAgICAgIHRoaXMubG9hZGVycy5kZWxldGUoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICB0aGlzLm9ic2VydmVyPy51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHsgcm9vdDogdGhpcy5ncmlkLCByb290TWFyZ2luOiBcIjQwMHB4XCIgfSxcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVJdGVtKGZpbGU6IFRGaWxlKSB7XG4gICAgY29uc3QgaXRlbSA9IHRoaXMuZ3JpZC5jcmVhdGVEaXYoeyBjbHM6IFwiY2FtZXJhLWdhbGxlcnktaXRlbVwiLCBhdHRyOiB7IHJvbGU6IFwiYnV0dG9uXCIsIHRhYmluZGV4OiBcIjBcIiB9IH0pO1xuICAgIGl0ZW0uZGF0YXNldC5wYXRoID0gZmlsZS5wYXRoO1xuICAgIGNvbnN0IGltYWdlID0gaXRlbS5jcmVhdGVFbChcImltZ1wiLCB7IGNsczogXCJjYW1lcmEtZ2FsbGVyeS10aHVtYm5haWxcIiB9KTtcbiAgICBpbWFnZS5hbHQgPSBmaWxlLm5hbWU7XG4gICAgaW1hZ2UuZGVjb2RpbmcgPSBcImFzeW5jXCI7XG4gICAgaW1hZ2UuZHJhZ2dhYmxlID0gZmFsc2U7IC8vIHRoZSB3aG9sZSB0aWxlIGlzIHRoZSBkcmFnIGhhbmRsZSwgbm90IHRoZSBiYXJlIDxpbWc+XG4gICAgY29uc3QgbWFya0xvYWRlZCA9ICgpID0+IGl0ZW0uYWRkQ2xhc3MoXCJpcy1sb2FkZWRcIik7XG4gICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgbWFya0xvYWRlZCk7XG4gICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIG1hcmtMb2FkZWQpO1xuICAgIGNvbnN0IGJhZGdlID0gaXRlbS5jcmVhdGVEaXYoeyBjbHM6IFwiY2FtZXJhLWdhbGxlcnktYmFkZ2VcIiB9KTtcbiAgICBpdGVtLmNyZWF0ZURpdih7IGNsczogXCJjYW1lcmEtZ2FsbGVyeS1uYW1lXCIsIHRleHQ6IGZpbGUubmFtZSB9KTtcblxuICAgIHRoaXMubG9hZGVycy5zZXQoaXRlbSwgKCkgPT4geyBpbWFnZS5zcmMgPSB0aGlzLmFwcC52YXVsdC5nZXRSZXNvdXJjZVBhdGgoZmlsZSk7IH0pO1xuICAgIHRoaXMub2JzZXJ2ZXI/Lm9ic2VydmUoaXRlbSk7XG5cbiAgICB0aGlzLml0ZW1FbHMuc2V0KGZpbGUucGF0aCwgeyBpdGVtLCBiYWRnZSB9KTtcbiAgICB0aGlzLnBhaW50SXRlbShmaWxlLnBhdGgsIHRoaXMuZ2V0U2VsZWN0aW9uTnVtYmVyKGZpbGUucGF0aCkpO1xuXG4gICAgLy8gQ2xpY2sgYW5kIGtleWJvYXJkXG4gICAgbGV0IGxvbmdQcmVzc2VkID0gZmFsc2U7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKGxvbmdQcmVzc2VkKSB7IGxvbmdQcmVzc2VkID0gZmFsc2U7IHJldHVybjsgfSAvLyB0aGUgbG9uZyBwcmVzcyBhbHJlYWR5IG9wZW5lZCB0aGUgbWVudVxuICAgICAgdGhpcy50b2dnbGVTZWxlY3Rpb24oZmlsZS5wYXRoKTtcbiAgICB9KTtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiIHx8IGV2ZW50LmtleSA9PT0gXCIgXCIpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy50b2dnbGVTZWxlY3Rpb24oZmlsZS5wYXRoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFJpZ2h0LWNsaWNrIChkZXNrdG9wKS4gVGhlIENvbnRleHRNZW51IGtleSBhbmQgU2hpZnQrRjEwIGFsc28gZmlyZSB0aGlzIGV2ZW50LlxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNvbnRleHRtZW51XCIsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIC8vIEEgdG91Y2ggbG9uZy1wcmVzcyBjYW4gZmlyZSBib3RoIG91ciB0aW1lciBhbmQgdGhpcyBldmVudDogb25seSBvcGVuIG9uZSBtZW51LlxuICAgICAgaWYgKERhdGUubm93KCkgLSB0aGlzLmxhc3RNZW51VGltZSA8IDgwMCkgcmV0dXJuO1xuICAgICAgdGhpcy5vcGVuQ29udGV4dE1lbnUoZmlsZS5wYXRoLCAobWVudSkgPT4gbWVudS5zaG93QXRNb3VzZUV2ZW50KGV2ZW50KSk7XG4gICAgfSk7XG5cbiAgICAvLyBMb25nLXByZXNzICh0b3VjaClcbiAgICBsZXQgcHJlc3NUaW1lcjogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gICAgY29uc3QgY2FuY2VsUHJlc3MgPSAoKSA9PiB7XG4gICAgICBpZiAocHJlc3NUaW1lciAhPT0gbnVsbCkgd2luZG93LmNsZWFyVGltZW91dChwcmVzc1RpbWVyKTtcbiAgICAgIHByZXNzVGltZXIgPSBudWxsO1xuICAgIH07XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCAoZXZlbnQpID0+IHtcbiAgICAgIGxvbmdQcmVzc2VkID0gZmFsc2U7XG4gICAgICBjb25zdCB0b3VjaCA9IGV2ZW50LnRvdWNoZXNbMF07XG4gICAgICBpZiAoIXRvdWNoKSByZXR1cm47XG4gICAgICBjb25zdCB7IGNsaWVudFg6IHgsIGNsaWVudFk6IHkgfSA9IHRvdWNoO1xuICAgICAgY2FuY2VsUHJlc3MoKTtcbiAgICAgIHByZXNzVGltZXIgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHByZXNzVGltZXIgPSBudWxsO1xuICAgICAgICBsb25nUHJlc3NlZCA9IHRydWU7XG4gICAgICAgIHRoaXMub3BlbkNvbnRleHRNZW51KGZpbGUucGF0aCwgKG1lbnUpID0+IG1lbnUuc2hvd0F0UG9zaXRpb24oeyB4LCB5IH0pKTtcbiAgICAgIH0sIExPTkdfUFJFU1NfTVMpO1xuICAgIH0sIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgY2FuY2VsUHJlc3MsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBjYW5jZWxQcmVzcywgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoY2FuY2VsXCIsIGNhbmNlbFByZXNzLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgaWYgKFBsYXRmb3JtLmlzRGVza3RvcCkgdGhpcy5zZXR1cEl0ZW1EcmFnKGl0ZW0sIGZpbGUpO1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gIC8qIERyYWcgYW5kIGRyb3AgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgLyoqIERyb3AgaW1hZ2UgZmlsZXMgZnJvbSB0aGUgT1Mgb250byB0aGUgZ2FsbGVyeTogZWFjaCBvbmUgaXMgc2F2ZWQgYXMgYSBjb3B5IHRocm91Z2ggdGhlIHNoYXJlZCBwaXBlbGluZS4gKi9cbiAgcHJpdmF0ZSBzZXR1cERyb3BUYXJnZXQoKSB7XG4gICAgaWYgKCFQbGF0Zm9ybS5pc0Rlc2t0b3ApIHJldHVybjtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmNvbnRlbnRFbDtcblxuICAgIGNvbnN0IG92ZXJsYXkgPSB0YXJnZXQuY3JlYXRlRGl2KHsgY2xzOiBcImNhbWVyYS1nYWxsZXJ5LWRyb3Atb3ZlcmxheVwiIH0pO1xuICAgIHNldEljb24ob3ZlcmxheS5jcmVhdGVEaXYoKSwgXCJ1cGxvYWRcIik7XG4gICAgb3ZlcmxheS5jcmVhdGVEaXYoeyB0ZXh0OiBcIkRyb3AgcGhvdG9zIHRvIGFkZCB0byBnYWxsZXJ5XCIgfSk7XG5cbiAgICAvLyBPbmx5IHJlYWN0IHRvIHJlYWwgZmlsZXMsIG5vdCB0byB0ZXh0IG9yIGxpbmtzIGRyYWdnZWQgYXJvdW5kIGluc2lkZSBPYnNpZGlhblxuICAgIGNvbnN0IGhhc0ZpbGVzID0gKGV2ZW50OiBEcmFnRXZlbnQpID0+IEFycmF5LmZyb20oZXZlbnQuZGF0YVRyYW5zZmVyPy50eXBlcyA/PyBbXSkuaW5jbHVkZXMoXCJGaWxlc1wiKTtcblxuICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VudGVyXCIsIChldmVudCkgPT4ge1xuICAgICAgaWYgKCFoYXNGaWxlcyhldmVudCkpIHJldHVybjtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLmRyYWdEZXB0aCsrO1xuICAgICAgdGFyZ2V0LmFkZENsYXNzKFwiaXMtZHJhZ292ZXJcIik7XG4gICAgfSk7XG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmICghaGFzRmlsZXMoZXZlbnQpKSByZXR1cm47XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKGV2ZW50LmRhdGFUcmFuc2ZlcikgZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSBcImNvcHlcIjtcbiAgICB9KTtcbiAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdsZWF2ZVwiLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmICghaGFzRmlsZXMoZXZlbnQpKSByZXR1cm47XG4gICAgICAvLyBkcmFnZW50ZXIvZHJhZ2xlYXZlIGFsc28gZmlyZSBmb3IgY2hpbGQgZWxlbWVudHMsIHNvIGNvdW50IHRoZW1cbiAgICAgIHRoaXMuZHJhZ0RlcHRoID0gTWF0aC5tYXgoMCwgdGhpcy5kcmFnRGVwdGggLSAxKTtcbiAgICAgIGlmICh0aGlzLmRyYWdEZXB0aCA9PT0gMCkgdGFyZ2V0LnJlbW92ZUNsYXNzKFwiaXMtZHJhZ292ZXJcIik7XG4gICAgfSk7XG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIChldmVudCkgPT4ge1xuICAgICAgaWYgKCFoYXNGaWxlcyhldmVudCkpIHJldHVybjtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgLy8ga2VlcCBPYnNpZGlhbiBmcm9tIGFsc28gaW1wb3J0aW5nIHRoZSBmaWxlcyBhcyBhdHRhY2htZW50c1xuICAgICAgdGhpcy5kcmFnRGVwdGggPSAwO1xuICAgICAgdGFyZ2V0LnJlbW92ZUNsYXNzKFwiaXMtZHJhZ292ZXJcIik7XG4gICAgICB2b2lkIHRoaXMuaGFuZGxlRHJvcHBlZEZpbGVzKEFycmF5LmZyb20oZXZlbnQuZGF0YVRyYW5zZmVyPy5maWxlcyA/PyBbXSkpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBoYW5kbGVEcm9wcGVkRmlsZXMoZHJvcHBlZDogRmlsZVtdKSB7XG4gICAgY29uc3QgaW1hZ2VzID0gZHJvcHBlZC5maWx0ZXIoaXNJbWFnZUZpbGUpO1xuICAgIGNvbnN0IHNraXBwZWQgPSBkcm9wcGVkLmxlbmd0aCAtIGltYWdlcy5sZW5ndGg7XG4gICAgaWYgKHNraXBwZWQgPiAwKSBuZXcgTm90aWNlKGBTa2lwcGVkICR7c2tpcHBlZH0gbm9uLWltYWdlIGZpbGUke3NraXBwZWQgPT09IDEgPyBcIlwiIDogXCJzXCJ9LmApO1xuICAgIGlmIChpbWFnZXMubGVuZ3RoID09PSAwIHx8ICF0aGlzLm9wZW5lZCkgcmV0dXJuO1xuXG4gICAgLy8gU2FtZSBwaXBlbGluZSBhcyBldmVyeSBvdGhlciB1cGxvYWQgKGZvbGRlciwgbW9udGggZm9sZGVycywgY29tcHJlc3Npb24sIG5hbWluZykuXG4gICAgLy8gVGhlIG5ldyBwaG90b3MgYXBwZWFyIHRocm91Z2ggdGhlIHZhdWx0IFwiY3JlYXRlXCIgZXZlbnRzLlxuICAgIGNvbnN0IHNhdmVkID0gYXdhaXQgdGhpcy5ob3N0LnNhdmVQaG90b3MoaW1hZ2VzKTtcbiAgICBpZiAoc2F2ZWQubGVuZ3RoID4gMCkgbmV3IE5vdGljZShgQWRkZWQgJHtzYXZlZC5sZW5ndGh9IHBob3RvJHtzYXZlZC5sZW5ndGggPT09IDEgPyBcIlwiIDogXCJzXCJ9IHRvIGdhbGxlcnkuYCk7XG4gIH1cblxuICAvKiogUGF0aCB1c2VkIHRvIGJ1aWxkIGxpbmtzIHdoZW4gZHJhZ2dpbmc6IHRoZSBub3RlIHRoZSB1c2VyIHdhcyBsYXN0IHdvcmtpbmcgaW4uICovXG4gIHByaXZhdGUgbGlua1NvdXJjZVBhdGgoKTogc3RyaW5nIHtcbiAgICBjb25zdCB2aWV3ID0gdGhpcy5hcHAud29ya3NwYWNlLmdldE1vc3RSZWNlbnRMZWFmKCk/LnZpZXc7XG4gICAgaWYgKHZpZXcgaW5zdGFuY2VvZiBNYXJrZG93blZpZXcpIHJldHVybiB2aWV3LmZpbGU/LnBhdGggPz8gXCJcIjtcbiAgICByZXR1cm4gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZUZpbGUoKT8ucGF0aCA/PyBcIlwiO1xuICB9XG5cbiAgLyoqIERyYWcgYSB0aHVtYm5haWwgKG9yIHRoZSB3aG9sZSBzZWxlY3Rpb24pIGludG8gYSBub3RlOiBkcm9wcyBlbWJlZCBsaW5rcyBhcyB0ZXh0IGF0IHRoZSBjdXJzb3IuICovXG4gIHByaXZhdGUgc2V0dXBJdGVtRHJhZyhpdGVtOiBIVE1MRWxlbWVudCwgZmlsZTogVEZpbGUpIHtcbiAgICBpdGVtLmRyYWdnYWJsZSA9IHRydWU7XG5cbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBkYXRhVHJhbnNmZXIgPSBldmVudC5kYXRhVHJhbnNmZXI7XG4gICAgICBpZiAoIWRhdGFUcmFuc2ZlcikgcmV0dXJuO1xuXG4gICAgICAvLyBEcmFnZ2luZyBhIHNlbGVjdGVkIHBob3RvIGRyYWdzIHRoZSB3aG9sZSBzZWxlY3Rpb247IG90aGVyd2lzZSBqdXN0IHRoaXMgb25lXG4gICAgICBjb25zdCBwYXRocyA9IHRoaXMuc2VsZWN0ZWQuaGFzKGZpbGUucGF0aCkgPyBBcnJheS5mcm9tKHRoaXMuc2VsZWN0ZWQpIDogW2ZpbGUucGF0aF07XG4gICAgICBjb25zdCBmaWxlcyA9IHBhdGhzXG4gICAgICAgIC5tYXAoKHBhdGgpID0+IHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChwYXRoKSlcbiAgICAgICAgLmZpbHRlcigoZW50cnkpOiBlbnRyeSBpcyBURmlsZSA9PiBlbnRyeSBpbnN0YW5jZW9mIFRGaWxlKTtcbiAgICAgIGlmIChmaWxlcy5sZW5ndGggPT09IDApIHJldHVybjtcblxuICAgICAgY29uc3Qgc291cmNlID0gdGhpcy5saW5rU291cmNlUGF0aCgpO1xuICAgICAgY29uc3QgdGV4dCA9IGZpbGVzLm1hcCgoZW50cnkpID0+IGAhJHt0aGlzLmFwcC5maWxlTWFuYWdlci5nZW5lcmF0ZU1hcmtkb3duTGluayhlbnRyeSwgc291cmNlKX1gKS5qb2luKFwiXFxuXCIpO1xuICAgICAgZGF0YVRyYW5zZmVyLnNldERhdGEoXCJ0ZXh0L3BsYWluXCIsIHRleHQpO1xuICAgICAgZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSBcImNvcHlcIjtcblxuICAgICAgaWYgKGZpbGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgY29uc3QgbGFiZWwgPSBhY3RpdmVEb2N1bWVudC5ib2R5LmNyZWF0ZURpdih7IGNsczogXCJjYW1lcmEtZ2FsbGVyeS1kcmFnLWltYWdlXCIsIHRleHQ6IGAke2ZpbGVzLmxlbmd0aH0gcGhvdG9zYCB9KTtcbiAgICAgICAgZGF0YVRyYW5zZmVyLnNldERyYWdJbWFnZShsYWJlbCwgMCwgMCk7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IGxhYmVsLnJlbW92ZSgpLCAwKTtcbiAgICAgIH1cblxuICAgICAgZm9yIChjb25zdCBwYXRoIG9mIHBhdGhzKSB0aGlzLml0ZW1FbHMuZ2V0KHBhdGgpPy5pdGVtLmFkZENsYXNzKFwiaXMtZHJhZ2dpbmdcIik7XG4gICAgfSk7XG5cbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW5kXCIsICgpID0+IHtcbiAgICAgIHRoaXMuZ3JpZC5xdWVyeVNlbGVjdG9yQWxsKFwiLmlzLWRyYWdnaW5nXCIpLmZvckVhY2goKGVsKSA9PiBlbC5yZW1vdmVDbGFzcyhcImlzLWRyYWdnaW5nXCIpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAvKiBTZWxlY3Rpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gIHByaXZhdGUgdG9nZ2xlU2VsZWN0aW9uKHBhdGg6IHN0cmluZykge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkLmhhcyhwYXRoKSkgdGhpcy5zZWxlY3RlZC5kZWxldGUocGF0aCk7IGVsc2UgdGhpcy5zZWxlY3RlZC5hZGQocGF0aCk7XG4gICAgdGhpcy51cGRhdGVTZWxlY3Rpb24ocGF0aCk7XG4gIH1cblxuICAvKiogUmVwbGFjZXMgdGhlIHdob2xlIHNlbGVjdGlvbiBhbmQgcmVwYWludHMgZXZlcnl0aGluZyB0aGF0IGNoYW5nZWQuICovXG4gIHByaXZhdGUgc2V0U2VsZWN0aW9uKHBhdGhzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHByZXZpb3VzID0gQXJyYXkuZnJvbSh0aGlzLnNlbGVjdGVkKTtcbiAgICB0aGlzLnNlbGVjdGVkID0gbmV3IFNldChwYXRocyk7XG4gICAgZm9yIChjb25zdCBwYXRoIG9mIHByZXZpb3VzKSBpZiAoIXRoaXMuc2VsZWN0ZWQuaGFzKHBhdGgpKSB0aGlzLnBhaW50SXRlbShwYXRoLCAwKTtcbiAgICB0aGlzLnVwZGF0ZVNlbGVjdGlvbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZWxlY3RlZEZpbGVzKCk6IFRGaWxlW10ge1xuICAgIGNvbnN0IGZpbGVzOiBURmlsZVtdID0gW107XG4gICAgZm9yIChjb25zdCBwYXRoIG9mIHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgIGNvbnN0IGZpbGUgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgocGF0aCk7XG4gICAgICBpZiAoZmlsZSBpbnN0YW5jZW9mIFRGaWxlKSBmaWxlcy5wdXNoKGZpbGUpO1xuICAgIH1cbiAgICByZXR1cm4gZmlsZXM7XG4gIH1cblxuICAvKiogRHJhd3Mgb25lIGl0ZW0ncyBzZWxlY3RlZCBzdGF0ZSBhbmQgYmFkZ2UgbnVtYmVyICgwID0gbm90IHNlbGVjdGVkKS4gKi9cbiAgcHJpdmF0ZSBwYWludEl0ZW0ocGF0aDogc3RyaW5nLCBudW1iZXI6IG51bWJlcikge1xuICAgIGNvbnN0IHJlZnMgPSB0aGlzLml0ZW1FbHMuZ2V0KHBhdGgpO1xuICAgIGlmICghcmVmcykgcmV0dXJuO1xuICAgIHJlZnMuaXRlbS50b2dnbGVDbGFzcyhcImlzLXNlbGVjdGVkXCIsIG51bWJlciA+IDApO1xuICAgIHJlZnMuYmFkZ2Uuc2V0VGV4dChudW1iZXIgPiAwID8gU3RyaW5nKG51bWJlcikgOiBcIlwiKTtcbiAgfVxuXG4gIC8qKiBSZW51bWJlcnMgZXZlcnkgc2VsZWN0ZWQgaXRlbSwgc28gYmFkZ2VzIG5ldmVyIGdvIHN0YWxlIGFmdGVyIGEgZGVzZWxlY3QuICovXG4gIHByaXZhdGUgcmVmcmVzaEJhZGdlcyhjaGFuZ2VkUGF0aD86IHN0cmluZykge1xuICAgIGxldCBudW1iZXIgPSAwO1xuICAgIGZvciAoY29uc3QgcGF0aCBvZiB0aGlzLnNlbGVjdGVkKSB7XG4gICAgICBudW1iZXIrKztcbiAgICAgIHRoaXMucGFpbnRJdGVtKHBhdGgsIG51bWJlcik7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VkUGF0aCAmJiAhdGhpcy5zZWxlY3RlZC5oYXMoY2hhbmdlZFBhdGgpKSB0aGlzLnBhaW50SXRlbShjaGFuZ2VkUGF0aCwgMCk7XG4gIH1cblxuICBwcml2YXRlIGdldFNlbGVjdGlvbk51bWJlcihwYXRoOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGxldCBudW1iZXIgPSAwO1xuICAgIGZvciAoY29uc3Qgc2VsZWN0ZWRQYXRoIG9mIHRoaXMuc2VsZWN0ZWQpIHsgbnVtYmVyKys7IGlmIChzZWxlY3RlZFBhdGggPT09IHBhdGgpIHJldHVybiBudW1iZXI7IH1cbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIHByaXZhdGUgc2V0QWN0aW9uQnV0dG9uc1Zpc2libGUodmlzaWJsZTogYm9vbGVhbikge1xuICAgIHRoaXMudXNlQnV0dG9uLnRvZ2dsZVZpc2liaWxpdHkodmlzaWJsZSk7XG4gICAgdGhpcy5kZWxldGVCdXR0b24udG9nZ2xlVmlzaWJpbGl0eSh2aXNpYmxlKTtcbiAgICB0aGlzLnByZXZpZXdCdXR0b24udG9nZ2xlVmlzaWJpbGl0eSh0aGlzLnNlbGVjdGVkLnNpemUgPT09IDEpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVTZWxlY3Rpb24oY2hhbmdlZFBhdGg/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBjb3VudCA9IHRoaXMuc2VsZWN0ZWQuc2l6ZTtcbiAgICB0aGlzLnNlbGVjdGlvbkxhYmVsLnNldFRleHQoY291bnQgPT09IDAgPyBcIlNlbGVjdCBwaG90b3NcIiA6IGAke2NvdW50fSBzZWxlY3RlZGApO1xuICAgIHRoaXMuc2V0QWN0aW9uQnV0dG9uc1Zpc2libGUoY291bnQgPiAwKTtcbiAgICB0aGlzLnJlZnJlc2hCYWRnZXMoY2hhbmdlZFBhdGgpO1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gIC8qIFJpZ2h0LWNsaWNrIG1lbnUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgcHJpdmF0ZSBvcGVuQ29udGV4dE1lbnUocGF0aDogc3RyaW5nLCBzaG93OiAobWVudTogTWVudSkgPT4gdm9pZCkge1xuICAgIC8vIFJpZ2h0LWNsaWNraW5nIGEgcGhvdG8gb3V0c2lkZSB0aGUgc2VsZWN0aW9uIHNlbGVjdHMganVzdCB0aGF0IHBob3RvLlxuICAgIGlmICghdGhpcy5zZWxlY3RlZC5oYXMocGF0aCkpIHRoaXMuc2V0U2VsZWN0aW9uKFtwYXRoXSk7XG5cbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuc2VsZWN0ZWRGaWxlcygpO1xuICAgIGNvbnN0IGNvdW50ID0gZmlsZXMubGVuZ3RoO1xuICAgIGNvbnN0IHNpbmdsZSA9IGNvdW50ID09PSAxID8gZmlsZXNbMF0gOiB1bmRlZmluZWQ7XG4gICAgaWYgKGNvdW50ID09PSAwKSByZXR1cm47XG5cbiAgICB0aGlzLmxhc3RNZW51VGltZSA9IERhdGUubm93KCk7XG4gICAgY29uc3QgbWVudSA9IG5ldyBNZW51KCk7XG5cbiAgICAvLyBJbnNlcnRcbiAgICBtZW51LmFkZEl0ZW0oKGl0ZW0pID0+IGl0ZW1cbiAgICAgIC5zZXRUaXRsZShjb3VudCA+IDEgPyBgVXNlICR7Y291bnR9IHBob3Rvc2AgOiBcIlVzZSBpdFwiKVxuICAgICAgLnNldEljb24oXCJjb3JuZXItZG93bi1sZWZ0XCIpXG4gICAgICAub25DbGljaygoKSA9PiB0aGlzLnVzZVNlbGVjdGVkKCkpKTtcblxuICAgIG1lbnUuYWRkSXRlbSgoaXRlbSkgPT4ge1xuICAgICAgaXRlbS5zZXRUaXRsZShcIkluc2VydCB3aXRoIHdpZHRoXCIpLnNldEljb24oXCJtb3ZlLWhvcml6b250YWxcIik7XG4gICAgICBjb25zdCBzdWIgPSBpdGVtLnNldFN1Ym1lbnUoKTtcbiAgICAgIGZvciAoY29uc3Qgd2lkdGggb2YgV0lEVEhfQ0hPSUNFUykge1xuICAgICAgICBzdWIuYWRkSXRlbSgoc3ViSXRlbSkgPT4gc3ViSXRlbS5zZXRUaXRsZShgJHt3aWR0aH0gcHhgKS5vbkNsaWNrKCgpID0+IHRoaXMudXNlU2VsZWN0ZWQod2lkdGgpKSk7XG4gICAgICB9XG4gICAgICBzdWIuYWRkSXRlbSgoc3ViSXRlbSkgPT4gc3ViSXRlbS5zZXRUaXRsZShcIk9yaWdpbmFsIHNpemVcIikub25DbGljaygoKSA9PiB0aGlzLnVzZVNlbGVjdGVkKCkpKTtcbiAgICB9KTtcblxuICAgIGlmIChzaW5nbGUpIHtcbiAgICAgIG1lbnUuYWRkSXRlbSgoaXRlbSkgPT4gaXRlbVxuICAgICAgICAuc2V0VGl0bGUoXCJQcmV2aWV3XCIpXG4gICAgICAgIC5zZXRJY29uKFwiZXllXCIpXG4gICAgICAgIC5vbkNsaWNrKCgpID0+IHRoaXMucHJldmlld0ZpbGUoc2luZ2xlKSkpO1xuICAgIH1cblxuICAgIC8vIFVzYWdlcyAoc2luZ2xlIHBob3RvIG9ubHkpXG4gICAgaWYgKHNpbmdsZSkge1xuICAgICAgbWVudS5hZGRTZXBhcmF0b3IoKTtcbiAgICAgIGNvbnN0IHVzYWdlcyA9IGdldFVzYWdlcyh0aGlzLmFwcCwgc2luZ2xlKTtcbiAgICAgIGlmICh1c2FnZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIG1lbnUuYWRkSXRlbSgoaXRlbSkgPT4gaXRlbS5zZXRUaXRsZShcIk5vdCB1c2VkIGluIGFueSBub3RlXCIpLnNldEljb24oXCJmaWxlLXhcIikuc2V0RGlzYWJsZWQodHJ1ZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVudS5hZGRJdGVtKChpdGVtKSA9PiBpdGVtXG4gICAgICAgICAgLnNldFRpdGxlKGBVc2VkIGluICR7dXNhZ2VzLmxlbmd0aH0gbm90ZSR7dXNhZ2VzLmxlbmd0aCA9PT0gMSA/IFwiXCIgOiBcInNcIn1gKVxuICAgICAgICAgIC5zZXRJY29uKFwibGlua1wiKVxuICAgICAgICAgIC5zZXREaXNhYmxlZCh0cnVlKSk7XG4gICAgICAgIGZvciAoY29uc3Qgbm90ZSBvZiB1c2FnZXMuc2xpY2UoMCwgTUFYX01FTlVfVVNBR0VTKSkge1xuICAgICAgICAgIG1lbnUuYWRkSXRlbSgoaXRlbSkgPT4gaXRlbVxuICAgICAgICAgICAgLnNldFRpdGxlKG5vdGUuYmFzZW5hbWUpXG4gICAgICAgICAgICAuc2V0SWNvbihcImZpbGUtdGV4dFwiKVxuICAgICAgICAgICAgLm9uQ2xpY2soKCkgPT4gdm9pZCB0aGlzLmFwcC53b3Jrc3BhY2Uub3BlbkxpbmtUZXh0KG5vdGUucGF0aCwgXCJcIiwgZmFsc2UpKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVzYWdlcy5sZW5ndGggPiBNQVhfTUVOVV9VU0FHRVMpIHtcbiAgICAgICAgICBtZW51LmFkZEl0ZW0oKGl0ZW0pID0+IGl0ZW1cbiAgICAgICAgICAgIC5zZXRUaXRsZShgU2hvdyBhbGwgJHt1c2FnZXMubGVuZ3RofSB1c2FnZXNcdTIwMjZgKVxuICAgICAgICAgICAgLnNldEljb24oXCJsaXN0XCIpXG4gICAgICAgICAgICAub25DbGljaygoKSA9PiB0aGlzLnByZXZpZXdGaWxlKHNpbmdsZSkpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEZpbGUgYWN0aW9uc1xuICAgIG1lbnUuYWRkU2VwYXJhdG9yKCk7XG4gICAgbWVudS5hZGRJdGVtKChpdGVtKSA9PiBpdGVtXG4gICAgICAuc2V0VGl0bGUoY291bnQgPiAxID8gYENvcHkgJHtjb3VudH0gbGlua3NgIDogXCJDb3B5IGxpbmtcIilcbiAgICAgIC5zZXRJY29uKFwiY29weVwiKVxuICAgICAgLm9uQ2xpY2soKCkgPT4gdm9pZCB0aGlzLmNvcHlMaW5rcyhmaWxlcykpKTtcblxuICAgIGlmIChzaW5nbGUpIHtcbiAgICAgIG1lbnUuYWRkSXRlbSgoaXRlbSkgPT4gaXRlbVxuICAgICAgICAuc2V0VGl0bGUoXCJPcGVuIGluIG5ldyB0YWJcIilcbiAgICAgICAgLnNldEljb24oXCJmaWxlLXBsdXNcIilcbiAgICAgICAgLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgIHZvaWQgdGhpcy5hcHAud29ya3NwYWNlLmdldExlYWYoXCJ0YWJcIikub3BlbkZpbGUoc2luZ2xlKTtcbiAgICAgICAgICBpZiAodGhpcy5jbG9zZU9uQ2hvb3NlKSB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH0pKTtcbiAgICAgIG1lbnUuYWRkSXRlbSgoaXRlbSkgPT4gaXRlbVxuICAgICAgICAuc2V0VGl0bGUoXCJSZW5hbWVcdTIwMjZcIilcbiAgICAgICAgLnNldEljb24oXCJwZW5jaWxcIilcbiAgICAgICAgLm9uQ2xpY2soKCkgPT4gdGhpcy5yZW5hbWVGaWxlKHNpbmdsZSkpKTtcblxuICAgICAgY29uc3Qgc2hvd0luRm9sZGVyID0gKHRoaXMuYXBwIGFzIHVua25vd24gYXMgeyBzaG93SW5Gb2xkZXI/OiAocGF0aDogc3RyaW5nKSA9PiB2b2lkIH0pLnNob3dJbkZvbGRlcjtcbiAgICAgIGlmIChQbGF0Zm9ybS5pc0Rlc2t0b3BBcHAgJiYgdHlwZW9mIHNob3dJbkZvbGRlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIG1lbnUuYWRkSXRlbSgoaXRlbSkgPT4gaXRlbVxuICAgICAgICAgIC5zZXRUaXRsZShcIlNob3cgaW4gc3lzdGVtIGV4cGxvcmVyXCIpXG4gICAgICAgICAgLnNldEljb24oXCJmb2xkZXItb3BlblwiKVxuICAgICAgICAgIC5vbkNsaWNrKCgpID0+IHNob3dJbkZvbGRlci5jYWxsKHRoaXMuYXBwLCBzaW5nbGUucGF0aCkpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTZWxlY3Rpb25cbiAgICBtZW51LmFkZFNlcGFyYXRvcigpO1xuICAgIG1lbnUuYWRkSXRlbSgoaXRlbSkgPT4gaXRlbVxuICAgICAgLnNldFRpdGxlKFwiU2VsZWN0IGFsbFwiKVxuICAgICAgLnNldEljb24oXCJjaGVjay1zcXVhcmVcIilcbiAgICAgIC5vbkNsaWNrKCgpID0+IHRoaXMuc2V0U2VsZWN0aW9uKHRoaXMudmlzaWJsZUZpbGVzLm1hcCgoZmlsZSkgPT4gZmlsZS5wYXRoKSkpKTtcbiAgICBtZW51LmFkZEl0ZW0oKGl0ZW0pID0+IGl0ZW1cbiAgICAgIC5zZXRUaXRsZShcIkNsZWFyIHNlbGVjdGlvblwiKVxuICAgICAgLnNldEljb24oXCJzcXVhcmVcIilcbiAgICAgIC5vbkNsaWNrKCgpID0+IHRoaXMuc2V0U2VsZWN0aW9uKFtdKSkpO1xuXG4gICAgLy8gRGVsZXRlXG4gICAgbWVudS5hZGRTZXBhcmF0b3IoKTtcbiAgICBtZW51LmFkZEl0ZW0oKGl0ZW0pID0+IGl0ZW1cbiAgICAgIC5zZXRUaXRsZShjb3VudCA+IDEgPyBgRGVsZXRlICR7Y291bnR9IHBob3Rvc2AgOiBcIkRlbGV0ZVwiKVxuICAgICAgLnNldEljb24oXCJ0cmFzaC0yXCIpXG4gICAgICAuc2V0V2FybmluZyh0cnVlKVxuICAgICAgLm9uQ2xpY2soKCkgPT4gdm9pZCB0aGlzLmRlbGV0ZUZpbGVzKGZpbGVzLm1hcCgoZmlsZSkgPT4gZmlsZS5wYXRoKSkpKTtcblxuICAgIHNob3cobWVudSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGNvcHlMaW5rcyhmaWxlczogVEZpbGVbXSkge1xuICAgIGNvbnN0IHNvdXJjZSA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVGaWxlKCk/LnBhdGggPz8gXCJcIjtcbiAgICBjb25zdCB0ZXh0ID0gZmlsZXMubWFwKChmaWxlKSA9PiBgISR7dGhpcy5hcHAuZmlsZU1hbmFnZXIuZ2VuZXJhdGVNYXJrZG93bkxpbmsoZmlsZSwgc291cmNlKX1gKS5qb2luKFwiXFxuXCIpO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh0ZXh0KTtcbiAgICAgIG5ldyBOb3RpY2UoZmlsZXMubGVuZ3RoID09PSAxID8gXCJDb3BpZWQgbGluay5cIiA6IGBDb3BpZWQgJHtmaWxlcy5sZW5ndGh9IGxpbmtzLmApO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiQ2FtZXJhIEVtYmVkOiBmYWlsZWQgdG8gY29weVwiLCBlcnJvcik7XG4gICAgICBuZXcgTm90aWNlKFwiQ291bGQgbm90IGNvcHkgdG8gdGhlIGNsaXBib2FyZC5cIik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW5hbWVGaWxlKGZpbGU6IFRGaWxlKSB7XG4gICAgbmV3IFJlbmFtZU1vZGFsKHRoaXMuYXBwLCBmaWxlLCAobmV3QmFzZU5hbWUpID0+IHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IGZpbGUucGFyZW50ICYmICFmaWxlLnBhcmVudC5pc1Jvb3QoKSA/IGAke2ZpbGUucGFyZW50LnBhdGh9L2AgOiBcIlwiO1xuICAgICAgY29uc3QgbmV3UGF0aCA9IG5vcm1hbGl6ZVBhdGgoYCR7cGFyZW50fSR7bmV3QmFzZU5hbWV9LiR7ZmlsZS5leHRlbnNpb259YCk7XG4gICAgICBpZiAobmV3UGF0aCA9PT0gZmlsZS5wYXRoKSByZXR1cm47XG4gICAgICBpZiAodGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKG5ld1BhdGgpKSB7XG4gICAgICAgIG5ldyBOb3RpY2UoYEEgZmlsZSBuYW1lZCBcIiR7bmV3QmFzZU5hbWV9LiR7ZmlsZS5leHRlbnNpb259XCIgYWxyZWFkeSBleGlzdHMuYCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIGZpbGVNYW5hZ2VyLnJlbmFtZUZpbGUgYWxzbyB1cGRhdGVzIGV2ZXJ5IGxpbmsgdGhhdCBwb2ludHMgYXQgdGhlIHBob3RvXG4gICAgICB2b2lkIHRoaXMuYXBwLmZpbGVNYW5hZ2VyLnJlbmFtZUZpbGUoZmlsZSwgbmV3UGF0aCkuY2F0Y2goKGVycm9yOiB1bmtub3duKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDYW1lcmEgRW1iZWQ6IHJlbmFtZSBmYWlsZWRcIiwgZXJyb3IpO1xuICAgICAgICBuZXcgTm90aWNlKFwiQ291bGQgbm90IHJlbmFtZSB0aGUgcGhvdG8uXCIpO1xuICAgICAgfSk7XG4gICAgfSkub3BlbigpO1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gIC8qIEFjdGlvbnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgcHJpdmF0ZSB1c2VTZWxlY3RlZCh3aWR0aD86IG51bWJlcikge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5zZWxlY3RlZEZpbGVzKCk7XG4gICAgaWYgKCFmaWxlcy5sZW5ndGgpIHJldHVybjtcbiAgICB0aGlzLm9uQ2hvb3NlKGZpbGVzLCB3aWR0aCk7XG4gICAgaWYgKHRoaXMuY2xvc2VPbkNob29zZSkgdGhpcy5jbG9zZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBkZWxldGVTZWxlY3RlZCgpIHtcbiAgICBjb25zdCBwYXRocyA9IEFycmF5LmZyb20odGhpcy5zZWxlY3RlZCk7XG4gICAgaWYgKCFwYXRocy5sZW5ndGgpIHJldHVybjtcbiAgICBhd2FpdCB0aGlzLmRlbGV0ZUZpbGVzKHBhdGhzKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgZGVsZXRlRmlsZXMocGF0aHM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgY29uZmlybWVkID0gYXdhaXQgdGhpcy5jb25maXJtRGVsZXRlKHBhdGhzLmxlbmd0aCk7XG4gICAgaWYgKCFjb25maXJtZWQpIHJldHVybjtcbiAgICBsZXQgZGVsZXRlZCA9IDA7XG4gICAgZm9yIChjb25zdCBwYXRoIG9mIHBhdGhzKSB7XG4gICAgICBjb25zdCBmaWxlID0gdGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKHBhdGgpO1xuICAgICAgaWYgKCEoZmlsZSBpbnN0YW5jZW9mIFRGaWxlKSkgY29udGludWU7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCB0aGlzLmFwcC5maWxlTWFuYWdlci50cmFzaEZpbGUoZmlsZSk7XG4gICAgICAgIGRlbGV0ZWQrKztcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDYW1lcmEgRW1iZWQ6IGZhaWxlZCB0byBkZWxldGUgZ2FsbGVyeSBwaG90b1wiLCBwYXRoLCBlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoY29uc3QgcGF0aCBvZiBwYXRocykgdGhpcy5zZWxlY3RlZC5kZWxldGUocGF0aCk7XG4gICAgdGhpcy51cGRhdGVTZWxlY3Rpb24oKTtcbiAgICBpZiAoZGVsZXRlZCA+IDApIG5ldyBOb3RpY2UoYERlbGV0ZWQgJHtkZWxldGVkfSBwaG90byR7ZGVsZXRlZCA9PT0gMSA/IFwiXCIgOiBcInNcIn0uYCk7XG4gICAgdGhpcy5zY2hlZHVsZVJlYnVpbGQoKTsgLy8gdmF1bHQgZXZlbnRzIGRvIHRoaXMgdG9vOyB0aGlzIGlzIGp1c3QgYSBzYWZldHkgbmV0XG4gIH1cblxuICBwcml2YXRlIHByZXZpZXdTZWxlY3RlZCgpIHtcbiAgICBjb25zdCBbcGF0aF0gPSBBcnJheS5mcm9tKHRoaXMuc2VsZWN0ZWQpO1xuICAgIGlmICghcGF0aCkgcmV0dXJuO1xuICAgIGNvbnN0IGZpbGUgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgocGF0aCk7XG4gICAgaWYgKGZpbGUgaW5zdGFuY2VvZiBURmlsZSkgdGhpcy5wcmV2aWV3RmlsZShmaWxlKTtcbiAgfVxuXG4gIHByaXZhdGUgcHJldmlld0ZpbGUoZmlsZTogVEZpbGUpIHtcbiAgICBuZXcgUGhvdG9QcmV2aWV3TW9kYWwodGhpcy5hcHAsIGZpbGUsICgpID0+IHZvaWQgdGhpcy5kZWxldGVGaWxlcyhbZmlsZS5wYXRoXSkpLm9wZW4oKTtcbiAgfVxuXG4gIHByaXZhdGUgY29uZmlybURlbGV0ZShjb3VudDogbnVtYmVyKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBjb25zdCBtb2RhbCA9IG5ldyBNb2RhbCh0aGlzLmFwcCk7XG4gICAgICBsZXQgc2V0dGxlZCA9IGZhbHNlO1xuICAgICAgY29uc3QgZmluaXNoID0gKHZhbHVlOiBib29sZWFuKSA9PiB7XG4gICAgICAgIGlmIChzZXR0bGVkKSByZXR1cm47XG4gICAgICAgIHNldHRsZWQgPSB0cnVlO1xuICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgbW9kYWwuY2xvc2UoKTtcbiAgICAgIH07XG4gICAgICBtb2RhbC50aXRsZUVsLnNldFRleHQoXCJEZWxldGUgcGhvdG9zP1wiKTtcbiAgICAgIG1vZGFsLmNvbnRlbnRFbC5jcmVhdGVFbChcInBcIiwgeyB0ZXh0OiBgTW92ZSAke2NvdW50fSBzZWxlY3RlZCBwaG90byR7Y291bnQgPT09IDEgPyBcIlwiIDogXCJzXCJ9IHRvIHRoZSBPYnNpZGlhbiB0cmFzaD9gIH0pO1xuICAgICAgY29uc3QgYnV0dG9ucyA9IG1vZGFsLmNvbnRlbnRFbC5jcmVhdGVEaXYoeyBjbHM6IFwibW9kYWwtYnV0dG9uLWNvbnRhaW5lclwiIH0pO1xuICAgICAgYnV0dG9ucy5jcmVhdGVFbChcImJ1dHRvblwiLCB7IHRleHQ6IFwiQ2FuY2VsXCIgfSkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGZpbmlzaChmYWxzZSkpO1xuICAgICAgYnV0dG9ucy5jcmVhdGVFbChcImJ1dHRvblwiLCB7IHRleHQ6IFwiRGVsZXRlXCIsIGNsczogXCJtb2Qtd2FybmluZ1wiIH0pLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBmaW5pc2godHJ1ZSkpO1xuICAgICAgbW9kYWwub3BlbigpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIFBpY2sgKG9yIGNhcHR1cmUpIHBob3RvcyBhbmQgc2F2ZSB0aGVtIHRocm91Z2ggdGhlIHBsdWdpbidzIHNoYXJlZCBzYXZlIHBpcGVsaW5lLiAqL1xuICBwcml2YXRlIGFzeW5jIGFkZFBob3Rvcyhzb3VyY2U6IFBpY2tTb3VyY2UpIHtcbiAgICBjb25zdCBmaWxlcyA9IGF3YWl0IHBpY2tJbWFnZXMoc291cmNlKTtcbiAgICBpZiAoIWZpbGVzLmxlbmd0aCB8fCAhdGhpcy5vcGVuZWQpIHJldHVybjtcblxuICAgIC8vIE5ldyBwaG90b3Mgc2hvdyB1cCB0aHJvdWdoIHRoZSB2YXVsdCBcImNyZWF0ZVwiIGV2ZW50cywgc28gbm90aGluZyBlbHNlIHRvIGRvIGhlcmUuXG4gICAgY29uc3Qgc2F2ZWQgPSBhd2FpdCB0aGlzLmhvc3Quc2F2ZVBob3RvcyhmaWxlcyk7XG4gICAgaWYgKHNhdmVkLmxlbmd0aCA+IDApIG5ldyBOb3RpY2UoYEFkZGVkICR7c2F2ZWQubGVuZ3RofSBwaG90byR7c2F2ZWQubGVuZ3RoID09PSAxID8gXCJcIiA6IFwic1wifSB0byBnYWxsZXJ5LmApO1xuICB9XG59XG5cbmNsYXNzIFJlbmFtZU1vZGFsIGV4dGVuZHMgTW9kYWwge1xuICBwcml2YXRlIHJlYWRvbmx5IGZpbGU6IFRGaWxlO1xuICBwcml2YXRlIHJlYWRvbmx5IG9uU3VibWl0OiAobmV3QmFzZU5hbWU6IHN0cmluZykgPT4gdm9pZDtcblxuICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgZmlsZTogVEZpbGUsIG9uU3VibWl0OiAobmV3QmFzZU5hbWU6IHN0cmluZykgPT4gdm9pZCkge1xuICAgIHN1cGVyKGFwcCk7XG4gICAgdGhpcy5maWxlID0gZmlsZTtcbiAgICB0aGlzLm9uU3VibWl0ID0gb25TdWJtaXQ7XG4gIH1cblxuICBvbk9wZW4oKSB7XG4gICAgdGhpcy50aXRsZUVsLnNldFRleHQoXCJSZW5hbWUgcGhvdG9cIik7XG4gICAgY29uc3QgaW5wdXQgPSB0aGlzLmNvbnRlbnRFbC5jcmVhdGVFbChcImlucHV0XCIsIHsgdHlwZTogXCJ0ZXh0XCIsIHZhbHVlOiB0aGlzLmZpbGUuYmFzZW5hbWUgfSk7XG4gICAgaW5wdXQuc2V0Q3NzUHJvcHMoeyB3aWR0aDogXCIxMDAlXCIgfSk7XG4gICAgdGhpcy5jb250ZW50RWwuY3JlYXRlRWwoXCJwXCIsIHsgdGV4dDogYFRoZSAuJHt0aGlzLmZpbGUuZXh0ZW5zaW9ufSBleHRlbnNpb24gaXMga2VwdC4gTGlua3MgaW4geW91ciBub3RlcyBhcmUgdXBkYXRlZC5gLCBjbHM6IFwic2V0dGluZy1pdGVtLWRlc2NyaXB0aW9uXCIgfSk7XG5cbiAgICBjb25zdCBzdWJtaXQgPSAoKSA9PiB7XG4gICAgICAvLyBGaWxlIG5hbWVzIGNhbm5vdCBjb250YWluIHRoZXNlIGNoYXJhY3RlcnMgb24gY29tbW9uIHN5c3RlbXMuXG4gICAgICBjb25zdCBuYW1lID0gaW5wdXQudmFsdWUudHJpbSgpLnJlcGxhY2UoL1tcXFxcLzoqP1wiPD58XS9nLCBcIlwiKTtcbiAgICAgIGlmICghbmFtZSkgcmV0dXJuO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgdGhpcy5vblN1Ym1pdChuYW1lKTtcbiAgICB9O1xuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7IGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IHN1Ym1pdCgpOyB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBidXR0b25zID0gdGhpcy5jb250ZW50RWwuY3JlYXRlRGl2KHsgY2xzOiBcIm1vZGFsLWJ1dHRvbi1jb250YWluZXJcIiB9KTtcbiAgICBidXR0b25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHsgdGV4dDogXCJDYW5jZWxcIiB9KS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5jbG9zZSgpKTtcbiAgICBidXR0b25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHsgdGV4dDogXCJSZW5hbWVcIiwgY2xzOiBcIm1vZC1jdGFcIiB9KS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3VibWl0KTtcblxuICAgIGlucHV0LmZvY3VzKCk7XG4gICAgaW5wdXQuc2VsZWN0KCk7XG4gIH1cblxuICBvbkNsb3NlKCkgeyB0aGlzLmNvbnRlbnRFbC5lbXB0eSgpOyB9XG59XG5cbmNsYXNzIFBob3RvUHJldmlld01vZGFsIGV4dGVuZHMgTW9kYWwge1xuICBwcml2YXRlIHJlYWRvbmx5IGZpbGU6IFRGaWxlO1xuICBwcml2YXRlIHJlYWRvbmx5IG9uRGVsZXRlOiAoKSA9PiB2b2lkO1xuXG4gIGNvbnN0cnVjdG9yKGFwcDogQXBwLCBmaWxlOiBURmlsZSwgb25EZWxldGU6ICgpID0+IHZvaWQpIHtcbiAgICBzdXBlcihhcHApO1xuICAgIHRoaXMuZmlsZSA9IGZpbGU7XG4gICAgdGhpcy5vbkRlbGV0ZSA9IG9uRGVsZXRlO1xuICB9XG5cbiAgb25PcGVuKCkge1xuICAgIHRoaXMubW9kYWxFbC5hZGRDbGFzcyhcImNhbWVyYS1waG90by1wcmV2aWV3LW1vZGFsLWNvbnRhaW5lclwiKTtcbiAgICB0aGlzLnRpdGxlRWwuc2V0VGV4dCh0aGlzLmZpbGUubmFtZSk7XG4gICAgY29uc3QgeyBjb250ZW50RWwgfSA9IHRoaXM7XG4gICAgY29udGVudEVsLmFkZENsYXNzKFwiY2FtZXJhLXBob3RvLXByZXZpZXctbW9kYWxcIik7XG4gICAgY29uc3QgaW1hZ2UgPSBjb250ZW50RWwuY3JlYXRlRWwoXCJpbWdcIiwgeyBjbHM6IFwiY2FtZXJhLXBob3RvLXByZXZpZXctaW1hZ2VcIiB9KTtcbiAgICBpbWFnZS5zcmMgPSB0aGlzLmFwcC52YXVsdC5nZXRSZXNvdXJjZVBhdGgodGhpcy5maWxlKTtcbiAgICBpbWFnZS5hbHQgPSB0aGlzLmZpbGUubmFtZTtcblxuICAgIGNvbnN0IHVzYWdlcyA9IGdldFVzYWdlcyh0aGlzLmFwcCwgdGhpcy5maWxlKTtcbiAgICBjb250ZW50RWwuY3JlYXRlRWwoXCJoM1wiLCB7IHRleHQ6IGBVc2VkIGluICR7dXNhZ2VzLmxlbmd0aH0gbm90ZSR7dXNhZ2VzLmxlbmd0aCA9PT0gMSA/IFwiXCIgOiBcInNcIn1gIH0pO1xuICAgIGNvbnN0IHVzYWdlTGlzdCA9IGNvbnRlbnRFbC5jcmVhdGVEaXYoeyBjbHM6IFwiY2FtZXJhLXBob3RvLXByZXZpZXctdXNhZ2VzXCIgfSk7XG4gICAgaWYgKHVzYWdlcy5sZW5ndGggPT09IDApIHVzYWdlTGlzdC5zZXRUZXh0KFwiVGhpcyBwaG90byBpcyBub3QgbGlua2VkIGZyb20gYW55IG5vdGUuXCIpO1xuICAgIGZvciAoY29uc3QgdXNhZ2Ugb2YgdXNhZ2VzKSB7XG4gICAgICBjb25zdCBidXR0b24gPSB1c2FnZUxpc3QuY3JlYXRlRWwoXCJidXR0b25cIiwgeyB0ZXh0OiB1c2FnZS5wYXRoLCBjbHM6IFwiY2FtZXJhLXBob3RvLXByZXZpZXctdXNhZ2VcIiB9KTtcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdm9pZCB0aGlzLmFwcC53b3Jrc3BhY2Uub3BlbkxpbmtUZXh0KHVzYWdlLnBhdGgsIFwiXCIsIGZhbHNlKSk7XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aW9ucyA9IGNvbnRlbnRFbC5jcmVhdGVEaXYoeyBjbHM6IFwibW9kYWwtYnV0dG9uLWNvbnRhaW5lclwiIH0pO1xuICAgIGFjdGlvbnMuY3JlYXRlRWwoXCJidXR0b25cIiwgeyB0ZXh0OiBcIkNsb3NlXCIgfSkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuY2xvc2UoKSk7XG4gICAgYWN0aW9ucy5jcmVhdGVFbChcImJ1dHRvblwiLCB7IHRleHQ6IFwiRGVsZXRlXCIsIGNsczogXCJtb2Qtd2FybmluZ1wiIH0pLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB0aGlzLm9uRGVsZXRlKCk7XG4gICAgfSk7XG4gIH1cblxuICBvbkNsb3NlKCkgeyB0aGlzLmNvbnRlbnRFbC5lbXB0eSgpOyB9XG59IiwgImltcG9ydCB7IEFwcCwgTW9kYWwsIHNldEljb24gfSBmcm9tIFwib2JzaWRpYW5cIjtcblxuZXhwb3J0IGNsYXNzIFBpY2tlck1vZGFsIGV4dGVuZHMgTW9kYWwge1xuICBwcml2YXRlIHJlYWRvbmx5IHJlc29sdmU6ICh2YWx1ZTogXCJjYW1lcmFcIiB8IFwiZ2FsbGVyeVwiIHwgbnVsbCkgPT4gdm9pZDtcblxuICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgb25DaG9vc2U6IChzb3VyY2U6IFwiY2FtZXJhXCIgfCBcImdhbGxlcnlcIiB8IG51bGwpID0+IHZvaWQpIHtcbiAgICBzdXBlcihhcHApO1xuICAgIHRoaXMucmVzb2x2ZSA9IG9uQ2hvb3NlO1xuICB9XG5cbiAgb25PcGVuKCkge1xuICAgIGNvbnN0IHsgY29udGVudEVsIH0gPSB0aGlzO1xuXG4gICAgLy8gSGVhZGluZ1xuICAgIGNvbnRlbnRFbC5jcmVhdGVFbChcImgyXCIsIHsgdGV4dDogXCJJbnNlcnQgcGhvdG9cIiB9KTtcblxuICAgIC8vIENvbnRhaW5lciBmb3IgYnV0dG9uc1xuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGNvbnRlbnRFbC5jcmVhdGVEaXYoeyBjbHM6IFwicGlja2VyLW1vZGFsLWJ1dHRvbnNcIiB9KTtcblxuICAgIC8vIENhbWVyYSBidXR0b25cbiAgICBjb25zdCBjYW1lcmFCdG4gPSBidXR0b25Db250YWluZXIuY3JlYXRlRWwoXCJidXR0b25cIiwgeyBjbHM6IFwibW9kLWN0YVwiIH0pO1xuICAgIGNvbnN0IGNhbWVyYUljb24gPSBjYW1lcmFCdG4uY3JlYXRlU3BhbigpO1xuICAgIHNldEljb24oY2FtZXJhSWNvbiwgXCJjYW1lcmFcIik7XG4gICAgY2FtZXJhQnRuLmFwcGVuZFRleHQoXCJUYWtlIHBob3RvXCIpO1xuICAgIGNhbWVyYUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5yZXNvbHZlKFwiY2FtZXJhXCIpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gR2FsbGVyeSBidXR0b25cbiAgICBjb25zdCBnYWxsZXJ5QnRuID0gYnV0dG9uQ29udGFpbmVyLmNyZWF0ZUVsKFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGdhbGxlcnlJY29uID0gZ2FsbGVyeUJ0bi5jcmVhdGVTcGFuKCk7XG4gICAgc2V0SWNvbihnYWxsZXJ5SWNvbiwgXCJpbWFnZXNcIik7XG4gICAgZ2FsbGVyeUJ0bi5hcHBlbmRUZXh0KFwiQ2hvb3NlIGZyb20gZ2FsbGVyeVwiKTtcbiAgICBnYWxsZXJ5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlc29sdmUoXCJnYWxsZXJ5XCIpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gQ2xvc2UgbW9kYWwgb24gRXNjYXBlXG4gICAgdGhpcy5zY29wZS5yZWdpc3RlcihbXSwgXCJFc2NhcGVcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5yZXNvbHZlKG51bGwpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgb25DbG9zZSgpIHtcbiAgICB0aGlzLmNvbnRlbnRFbC5lbXB0eSgpO1xuICB9XG59IiwgImltcG9ydCB7IEl0ZW1WaWV3LCBURmlsZSwgV29ya3NwYWNlTGVhZiB9IGZyb20gXCJvYnNpZGlhblwiO1xuaW1wb3J0IHsgR2FsbGVyeU1vZGFsIH0gZnJvbSBcIi4vZ2FsbGVyeS1tb2RhbC5qc1wiO1xuaW1wb3J0IHR5cGUgQ2FtZXJhRW1iZWRQbHVnaW4gZnJvbSBcIi4vbWFpbi5qc1wiO1xuXG5leHBvcnQgY29uc3QgR0FMTEVSWV9WSUVXX1RZUEUgPSBcImNhbWVyYS1lbWJlZC1nYWxsZXJ5XCI7XG5cbmV4cG9ydCBjbGFzcyBDYW1lcmFHYWxsZXJ5VmlldyBleHRlbmRzIEl0ZW1WaWV3IHtcbiAgcHJpdmF0ZSByZWFkb25seSBwbHVnaW46IENhbWVyYUVtYmVkUGx1Z2luO1xuICBwcml2YXRlIGdhbGxlcnk/OiBHYWxsZXJ5TW9kYWw7XG5cbiAgY29uc3RydWN0b3IobGVhZjogV29ya3NwYWNlTGVhZiwgcGx1Z2luOiBDYW1lcmFFbWJlZFBsdWdpbikge1xuICAgIHN1cGVyKGxlYWYpO1xuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICB9XG5cbiAgZ2V0Vmlld1R5cGUoKSB7IHJldHVybiBHQUxMRVJZX1ZJRVdfVFlQRTsgfVxuXG4gIGdldERpc3BsYXlUZXh0KCkgeyByZXR1cm4gXCJDYW1lcmEgZ2FsbGVyeVwiOyB9XG5cbiAgZ2V0SWNvbigpIHsgcmV0dXJuIFwiaW1hZ2VzXCI7IH1cblxuICBhc3luYyBvbk9wZW4oKSB7XG4gICAgY29uc3QgZm9sZGVyID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MucGhvdG9zRm9sZGVyLnRyaW0oKTtcbiAgICB0aGlzLmNvbnRlbnRFbC5lbXB0eSgpO1xuICAgIHRoaXMuY29udGVudEVsLmFkZENsYXNzKFwiY2FtZXJhLWdhbGxlcnktdmlld1wiKTtcbiAgICBpZiAoIWZvbGRlcikge1xuICAgICAgdGhpcy5jb250ZW50RWwuY3JlYXRlRWwoXCJwXCIsIHsgdGV4dDogXCJTZXQgYSBwaG90b3MgZm9sZGVyIGluIGNhbWVyYSBlbWJlZCBzZXR0aW5ncyBiZWZvcmUgdXNpbmcgdGhlIGdhbGxlcnkuXCIgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZ2FsbGVyeSA9IG5ldyBHYWxsZXJ5TW9kYWwoXG4gICAgICB0aGlzLmFwcCxcbiAgICAgIHRoaXMucGx1Z2luLFxuICAgICAgKGZpbGVzLCB3aWR0aCkgPT4gdGhpcy51c2VGaWxlcyhmaWxlcywgd2lkdGgpLFxuICAgICAgZmFsc2UsXG4gICAgKTtcbiAgICB0aGlzLmdhbGxlcnkubW91bnQodGhpcy5jb250ZW50RWwpO1xuICB9XG5cbiAgYXN5bmMgb25DbG9zZSgpIHsgdGhpcy5nYWxsZXJ5Py51bm1vdW50KCk7IH1cblxuICBwcml2YXRlIHVzZUZpbGVzKGZpbGVzOiBURmlsZVtdLCB3aWR0aD86IG51bWJlcikge1xuICAgIHRoaXMucGx1Z2luLmVtYmVkR2FsbGVyeUZpbGVzKGZpbGVzLCB3aWR0aCk7XG4gIH1cbn0iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUEsMERBQUFBLFNBQUE7QUFVQSxLQUFDLFNBQVUsUUFBUSxTQUFTO0FBQzFCLGFBQU8sWUFBWSxZQUFZLE9BQU9BLFlBQVcsY0FBY0EsUUFBTyxVQUFVLFFBQVEsSUFDeEYsT0FBTyxXQUFXLGNBQWMsT0FBTyxNQUFNLE9BQU8sT0FBTyxLQUMxRCxTQUFTLE9BQU8sZUFBZSxjQUFjLGFBQWEsVUFBVSxNQUFNLE9BQU8sYUFBYSxRQUFRO0FBQUEsSUFDekcsR0FBRyxTQUFPLFdBQVk7QUFBRTtBQUV0QixlQUFTLGdCQUFnQixHQUFHLEdBQUc7QUFDN0IsWUFBSSxFQUFFLGFBQWEsR0FBSSxPQUFNLElBQUksVUFBVSxtQ0FBbUM7QUFBQSxNQUNoRjtBQUNBLGVBQVMsa0JBQWtCLEdBQUcsR0FBRztBQUMvQixpQkFBUyxJQUFJLEdBQUcsSUFBSSxFQUFFLFFBQVEsS0FBSztBQUNqQyxjQUFJLElBQUksRUFBRSxDQUFDO0FBQ1gsWUFBRSxhQUFhLEVBQUUsY0FBYyxPQUFJLEVBQUUsZUFBZSxNQUFJLFdBQVcsTUFBTSxFQUFFLFdBQVcsT0FBSyxPQUFPLGVBQWUsR0FBRyxlQUFlLEVBQUUsR0FBRyxHQUFHLENBQUM7QUFBQSxRQUM5STtBQUFBLE1BQ0Y7QUFDQSxlQUFTLGFBQWEsR0FBRyxHQUFHLEdBQUc7QUFDN0IsZUFBTyxLQUFLLGtCQUFrQixFQUFFLFdBQVcsQ0FBQyxHQUFHLEtB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d0JBQU8sY0FBYyxZQUFZLFdBQVcsQ0FBQyxXQUFNLFlBQVksVUFBVSxDQUFDLEVBQUU7QUFBQSxJQUNsRjtBQUNBLFdBQU87QUFBQSxFQUNUO0FBQUEsRUFFQSxNQUFjLG1CQUFtQixnQkFBNEQ7QUFDM0YsVUFBTSxNQUFNLEtBQUssU0FBUyxhQUFhLEtBQUs7QUFDNUMsVUFBTSxPQUFPLEtBQUssU0FBUyxrQkFDdEIsTUFBTyxpQkFBaUIsR0FBRyxjQUFjLElBQUksR0FBRyxLQUFLLE1BQVEsMENBQWtCLEtBQ2hGO0FBQ0osVUFBTSxpQkFBYSxnQ0FBYyxLQUFLLFNBQVMsd0JBQXdCLGlCQUFpQixJQUFJLElBQUksSUFBSTtBQUNwRyxRQUFJLGVBQWUsTUFBTSxlQUFlLElBQUssUUFBTztBQUNwRCxRQUFJLGFBQWEsS0FBSyxJQUFJLE9BQU8sVUFBVSxFQUFHLFFBQU87QUFDckQsUUFBSSxDQUFDLEtBQUssU0FBUyx1QkFBdUI7QUFDeEMsVUFBSSx3QkFBTyxxQkFBcUIsVUFBVSxFQUFFO0FBQzVDLGFBQU87QUFBQSxJQUNUO0FBQ0EsUUFBSTtBQUNGLFlBQU0saUJBQWlCLEtBQUssSUFBSSxPQUFPLFVBQVU7QUFDakQsYUFBTztBQUFBLElBQ1QsU0FBUyxPQUFPO0FBQ2QsY0FBUSxNQUFNLHlDQUF5QyxLQUFLO0FBQzVELFVBQUksd0JBQU8sNEJBQTRCLFVBQVUsRUFBRTtBQUNuRCxhQUFPO0FBQUEsSUFDVDtBQUFBLEVBQ0Y7QUFBQSxFQUVBLE1BQU0sZUFBZTtBQUNuQixTQUFLLFdBQVcsT0FBTyxPQUFPLENBQUMsR0FBRyxrQkFBa0IsTUFBTSxLQUFLLFNBQVMsQ0FBaUM7QUFBQSxFQUMzRztBQUFBLEVBRUEsTUFBTSxlQUFlO0FBQ25CLFVBQU0sS0FBSyxTQUFTLEtBQUssUUFBUTtBQUFBLEVBQ25DO0FBQ0Y7IiwKICAibmFtZXMiOiBbIm1vZHVsZSIsICJyIiwgIndpbmRvdyIsICJzZWxmIiwgImlzQmxvYiIsICJpc1Bvc2l0aXZlTnVtYmVyIiwgIkNvbXByZXNzb3IiLCAiY2FsbGJhY2siLCAiZG9uZSIsICJuZXh0IiwgImltcG9ydF9vYnNpZGlhbiIsICJfYSIsICJDb21wcmVzc29yIiwgImltcG9ydF9vYnNpZGlhbiIsICJpbXBvcnRfb2JzaWRpYW4iLCAiaW1wb3J0X29ic2lkaWFuIiwgImltcG9ydF9vYnNpZGlhbiJdCn0K
