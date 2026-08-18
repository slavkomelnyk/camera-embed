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
var import_obsidian5 = require("obsidian");

// src/settings.ts
var import_obsidian = require("obsidian");
var DEFAULT_SETTINGS = {
  photosFolder: "photos",
  createFolderIfMissing: true,
  saveNearTheNote: false,
  compressImages: false,
  compressQuality: 0.8,
  galleryEnabled: false,
  openGalleryInSidebar: false,
  organizePhotosByMonth: false
};
var CameraEmbedSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  getSettingDefinitions() {
    return [
      {
        name: "This plugin is primarily designed for Android. Some features may be limited on other platforms."
      },
      {
        type: "group",
        heading: "Gallery",
        items: [
          {
            name: "Enable gallery",
            desc: "Use the gallery instead of taking a photo directly.",
            control: {
              type: "toggle",
              key: "galleryEnabled"
            }
          },
          {
            name: "Open gallery in sidebar",
            desc: "Open the gallery in the right sidebar when using the camera button.",
            visible: () => this.plugin.settings.galleryEnabled && !import_obsidian.Platform.isMobile,
            control: {
              type: "toggle",
              key: "openGalleryInSidebar"
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
            visible: () => !this.plugin.settings.galleryEnabled,
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
            desc: "Reduce photo file sizes before saving.",
            control: {
              type: "toggle",
              key: "compressImages"
            }
          },
          {
            name: "Compression quality",
            desc: "Lower values create smaller files with lower image quality.",
            visible: () => this.plugin.settings.compressImages,
            control: {
              type: "slider",
              key: "compressQuality",
              min: 0,
              max: 0.9,
              step: 0.05
            }
          }
        ]
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
function getMonthlyFolder(parentPath) {
  const [year, month] = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7).split("-");
  if (!year || !month) return parentPath;
  return joinPath(joinPath(parentPath, year), month);
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
  constructor(app, photosFolder, createFolderIfMissing, organizePhotosByMonth, onChoose, closeOnChoose = true) {
    super(app);
    this.items = [];
    this.selected = /* @__PURE__ */ new Set();
    this.scanId = 0;
    this.opened = false;
    this.photosFolder = photosFolder.trim();
    this.createFolderIfMissing = createFolderIfMissing;
    this.organizePhotosByMonth = organizePhotosByMonth;
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
    if (import_obsidian3.Platform.isMobile) {
      const take = toolbar.createEl("button", { cls: "mod-cta" });
      (0, import_obsidian3.setIcon)(take, "camera");
      take.createSpan({ text: "Take photo to gallery" });
      take.addEventListener("click", () => void this.takePhoto());
    }
    const upload = toolbar.createEl("button", { cls: "camera-gallery-upload" });
    (0, import_obsidian3.setIcon)(upload, "upload");
    upload.createSpan({ text: "Upload to gallery" });
    upload.addEventListener("click", () => void this.uploadToGallery());
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
    this.previewButton.toggleVisibility(this.selected.size === 1);
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
    this.selected.clear();
    if (deleted > 0) new import_obsidian3.Notice(`Deleted ${deleted} photo${deleted === 1 ? "" : "s"}.`);
    await this.scanVault();
  }
  previewSelected() {
    const [path] = Array.from(this.selected);
    if (!path) return;
    const file = this.app.vault.getAbstractFileByPath(path);
    if (!(file instanceof import_obsidian3.TFile)) return;
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
      const saved = await this.saveToGallery(file, single);
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
  async saveToGallery(file, isCameraCapture) {
    if (!this.photosFolder) {
      new import_obsidian3.Notice("Set a photos folder in camera embed settings first.");
      return null;
    }
    try {
      const folder = this.organizePhotosByMonth && isCameraCapture ? getMonthlyFolder(this.photosFolder) : this.photosFolder;
      if (!this.app.vault.getAbstractFileByPath(folder)) {
        if (!this.createFolderIfMissing) {
          new import_obsidian3.Notice(`Photos folder not found: ${folder}`);
          return null;
        }
        await createFolderPath(this.app.vault, folder);
      }
      const path = this.getUniquePath(`${folder}/${file.name}`);
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
    const usages = this.getUsages();
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
  getUsages() {
    var _a;
    const resolvedLinks = this.app.metadataCache.resolvedLinks;
    const usages = [];
    for (const path in resolvedLinks) {
      const targets = resolvedLinks[path];
      if (!targets) continue;
      if (((_a = targets[this.file.path]) != null ? _a : 0) <= 0) continue;
      const file = this.app.vault.getAbstractFileByPath(path);
      if (file instanceof import_obsidian3.TFile) usages.push(file);
    }
    return usages;
  }
};

// src/gallery-view.ts
var import_obsidian4 = require("obsidian");
var GALLERY_VIEW_TYPE = "camera-embed-gallery";
var CameraGalleryView = class extends import_obsidian4.ItemView {
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
      folder,
      this.plugin.settings.createFolderIfMissing,
      this.plugin.settings.organizePhotosByMonth,
      (files) => this.useFiles(files),
      false
    );
    this.gallery.mount(this.contentEl);
  }
  async onClose() {
    var _a;
    (_a = this.gallery) == null ? void 0 : _a.unmount();
  }
  useFiles(files) {
    this.plugin.embedGalleryFiles(files);
  }
};

// src/main.ts
var CameraEmbedPlugin = class extends import_obsidian5.Plugin {
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
    if (import_obsidian5.Platform.isDesktop) {
      this.registerView(GALLERY_VIEW_TYPE, (leaf) => new CameraGalleryView(leaf, this));
      this.addCommand({ id: "open-camera-gallery-sidebar", name: "Open camera gallery in sidebar", icon: "images", callback: () => void this.openGallerySidebar() });
    }
  }
  normalizeGallerySettings() {
    if (this.settings.galleryEnabled) this.settings.saveNearTheNote = false;
  }
  capturePhoto() {
    if (this.settings.galleryEnabled && this.settings.openGalleryInSidebar && import_obsidian5.Platform.isDesktop) void this.openGallerySidebar();
    else if (this.settings.galleryEnabled) this.openGallery();
    else void this.captureDirectly();
  }
  openGallery() {
    const view = this.app.workspace.getActiveViewOfType(import_obsidian5.MarkdownView);
    if (!(view == null ? void 0 : view.file)) {
      new import_obsidian5.Notice("Open a Markdown note before using the camera gallery.");
      return;
    }
    const folder = this.settings.photosFolder.trim();
    if (!folder) {
      new import_obsidian5.Notice("Set a photos folder in camera embed settings before using the gallery.");
      return;
    }
    new GalleryModal(this.app, folder, this.settings.createFolderIfMissing, this.settings.organizePhotosByMonth, (files) => {
      if (files.length > 0) void this.embedVaultFiles(files, view);
    }).open();
  }
  async captureDirectly() {
    const view = this.app.workspace.getActiveViewOfType(import_obsidian5.MarkdownView);
    if (!(view == null ? void 0 : view.file)) {
      new import_obsidian5.Notice("Please open a Markdown note to insert the photo.");
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
  embedGalleryFiles(files) {
    const leaf = this.app.workspace.getMostRecentLeaf();
    if (!((leaf == null ? void 0 : leaf.view) instanceof import_obsidian5.MarkdownView)) {
      new import_obsidian5.Notice("Open a Markdown note to insert the selected photos.");
      return;
    }
    void this.embedVaultFiles(files, leaf.view);
  }
  async openGallerySidebar() {
    const leaf = await this.app.workspace.ensureSideLeaf(GALLERY_VIEW_TYPE, "right", { active: true, reveal: true });
    await this.app.workspace.revealLeaf(leaf);
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
    const normalized = (0, import_obsidian5.normalizePath)(this.settings.organizePhotosByMonth ? getMonthlyFolder(target) : target);
    if (normalized === "") return "";
    if (folderExists(this.app.vault, normalized)) return normalized;
    if (!this.settings.createFolderIfMissing) {
      new import_obsidian5.Notice(`Folder not found: ${normalized}`);
      return null;
    }
    try {
      await createFolderPath(this.app.vault, normalized);
      return normalized;
    } catch (error) {
      console.error("Camera Embed: failed to create folder", error);
      new import_obsidian5.Notice(`Failed to create folder: ${normalized}`);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzL2NvbXByZXNzb3Jqcy9kaXN0L2NvbXByZXNzb3IuanMiLCAic3JjL21haW4udHMiLCAic3JjL3NldHRpbmdzLnRzIiwgInNyYy9jb21wcmVzc29yLnRzIiwgInNyYy9maWxlLXV0aWxzLnRzIiwgInNyYy9pbnB1dC11dGlscy50cyIsICJzcmMvZ2FsbGVyeS1tb2RhbC50cyIsICJzcmMvZ2FsbGVyeS12aWV3LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKiFcbiAqIENvbXByZXNzb3IuanMgdjEuMy4wXG4gKiBodHRwczovL2Zlbmd5dWFuY2hlbi5naXRodWIuaW8vY29tcHJlc3NvcmpzXG4gKlxuICogQ29weXJpZ2h0IDIwMTgtcHJlc2VudCBDaGVuIEZlbmd5dWFuXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqXG4gKiBEYXRlOiAyMDI2LTA0LTA2VDA3OjEyOjQ1LjgxNlpcbiAqL1xuXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gIChnbG9iYWwgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIDogZ2xvYmFsIHx8IHNlbGYsIGdsb2JhbC5Db21wcmVzc29yID0gZmFjdG9yeSgpKTtcbn0pKHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soYSwgbikge1xuICAgIGlmICghKGEgaW5zdGFuY2VvZiBuKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxuICBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyhlLCByKSB7XG4gICAgZm9yICh2YXIgdCA9IDA7IHQgPCByLmxlbmd0aDsgdCsrKSB7XG4gICAgICB2YXIgbyA9IHJbdF07XG4gICAgICBvLmVudW1lcmFibGUgPSBvLmVudW1lcmFibGUgfHwgITEsIG8uY29uZmlndXJhYmxlID0gITAsIFwidmFsdWVcIiBpbiBvICYmIChvLndyaXRhYmxlID0gITApLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgX3RvUHJvcGVydHlLZXkoby5rZXkpLCBvKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKGUsIHIsIHQpIHtcbiAgICByZXR1cm4gciAmJiBfZGVmaW5lUHJvcGVydGllcyhlLnByb3RvdHlwZSwgciksIHQgJiYgX2RlZmluZVByb3BlcnRpZXMoZSwgdCksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBcInByb3RvdHlwZVwiLCB7XG4gICAgICB3cml0YWJsZTogITFcbiAgICB9KSwgZTtcbiAgfVxuICBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkoZSwgciwgdCkge1xuICAgIHJldHVybiAociA9IF90b1Byb3BlcnR5S2V5KHIpKSBpbiBlID8gT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHIsIHtcbiAgICAgIHZhbHVlOiB0LFxuICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICBjb25maWd1cmFibGU6ICEwLFxuICAgICAgd3JpdGFibGU6ICEwXG4gICAgfSkgOiBlW3JdID0gdCwgZTtcbiAgfVxuICBmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgICByZXR1cm4gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduID8gT2JqZWN0LmFzc2lnbi5iaW5kKCkgOiBmdW5jdGlvbiAobikge1xuICAgICAgZm9yICh2YXIgZSA9IDE7IGUgPCBhcmd1bWVudHMubGVuZ3RoOyBlKyspIHtcbiAgICAgICAgdmFyIHQgPSBhcmd1bWVudHNbZV07XG4gICAgICAgIGZvciAodmFyIHIgaW4gdCkgKHt9KS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsIHIpICYmIChuW3JdID0gdFtyXSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbjtcbiAgICB9LCBfZXh0ZW5kcy5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICB9XG4gIGZ1bmN0aW9uIG93bktleXMoZSwgcikge1xuICAgIHZhciB0ID0gT2JqZWN0LmtleXMoZSk7XG4gICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgIHZhciBvID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTtcbiAgICAgIHIgJiYgKG8gPSBvLmZpbHRlcihmdW5jdGlvbiAocikge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLCByKS5lbnVtZXJhYmxlO1xuICAgICAgfSkpLCB0LnB1c2guYXBwbHkodCwgbyk7XG4gICAgfVxuICAgIHJldHVybiB0O1xuICB9XG4gIGZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKGUpIHtcbiAgICBmb3IgKHZhciByID0gMTsgciA8IGFyZ3VtZW50cy5sZW5ndGg7IHIrKykge1xuICAgICAgdmFyIHQgPSBudWxsICE9IGFyZ3VtZW50c1tyXSA/IGFyZ3VtZW50c1tyXSA6IHt9O1xuICAgICAgciAlIDIgPyBvd25LZXlzKE9iamVjdCh0KSwgITApLmZvckVhY2goZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KGUsIHIsIHRbcl0pO1xuICAgICAgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGUsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHQpKSA6IG93bktleXMoT2JqZWN0KHQpKS5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCByLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsIHIpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZTtcbiAgfVxuICBmdW5jdGlvbiBfdG9QcmltaXRpdmUodCwgcikge1xuICAgIGlmIChcIm9iamVjdFwiICE9IHR5cGVvZiB0IHx8ICF0KSByZXR1cm4gdDtcbiAgICB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcbiAgICBpZiAodm9pZCAwICE9PSBlKSB7XG4gICAgICB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTtcbiAgICAgIGlmIChcIm9iamVjdFwiICE9IHR5cGVvZiBpKSByZXR1cm4gaTtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTtcbiAgfVxuICBmdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleSh0KSB7XG4gICAgdmFyIGkgPSBfdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7XG4gICAgcmV0dXJuIFwic3ltYm9sXCIgPT0gdHlwZW9mIGkgPyBpIDogaSArIFwiXCI7XG4gIH1cblxuICB2YXIgY2FudmFzVG9CbG9iID0ge2V4cG9ydHM6IHt9fTtcblxuICAvKlxuICAgKiBKYXZhU2NyaXB0IENhbnZhcyB0byBCbG9iXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ibHVlaW1wL0phdmFTY3JpcHQtQ2FudmFzLXRvLUJsb2JcbiAgICpcbiAgICogQ29weXJpZ2h0IDIwMTIsIFNlYmFzdGlhbiBUc2NoYW5cbiAgICogaHR0cHM6Ly9ibHVlaW1wLm5ldFxuICAgKlxuICAgKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2U6XG4gICAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gICAqXG4gICAqIEJhc2VkIG9uIHN0YWNrb3ZlcmZsb3cgdXNlciBTdG9pdmUncyBjb2RlIHNuaXBwZXQ6XG4gICAqIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xLzQ5OTg5MDhcbiAgICovXG4gIChmdW5jdGlvbiAobW9kdWxlKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuICAgIChmdW5jdGlvbiAod2luZG93KSB7XG5cbiAgICAgIHZhciBDYW52YXNQcm90b3R5cGUgPSB3aW5kb3cuSFRNTENhbnZhc0VsZW1lbnQgJiYgd2luZG93LkhUTUxDYW52YXNFbGVtZW50LnByb3RvdHlwZTtcbiAgICAgIHZhciBoYXNCbG9iQ29uc3RydWN0b3IgPSB3aW5kb3cuQmxvYiAmJiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIEJvb2xlYW4obmV3IEJsb2IoKSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0oKTtcbiAgICAgIHZhciBoYXNBcnJheUJ1ZmZlclZpZXdTdXBwb3J0ID0gaGFzQmxvYkNvbnN0cnVjdG9yICYmIHdpbmRvdy5VaW50OEFycmF5ICYmIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gbmV3IEJsb2IoW25ldyBVaW50OEFycmF5KDEwMCldKS5zaXplID09PSAxMDA7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0oKTtcbiAgICAgIHZhciBCbG9iQnVpbGRlciA9IHdpbmRvdy5CbG9iQnVpbGRlciB8fCB3aW5kb3cuV2ViS2l0QmxvYkJ1aWxkZXIgfHwgd2luZG93Lk1vekJsb2JCdWlsZGVyIHx8IHdpbmRvdy5NU0Jsb2JCdWlsZGVyO1xuICAgICAgdmFyIGRhdGFVUklQYXR0ZXJuID0gL15kYXRhOigoLio/KSg7Y2hhcnNldD0uKj8pPykoO2Jhc2U2NCk/LC87XG4gICAgICB2YXIgZGF0YVVSTHRvQmxvYiA9IChoYXNCbG9iQ29uc3RydWN0b3IgfHwgQmxvYkJ1aWxkZXIpICYmIHdpbmRvdy5hdG9iICYmIHdpbmRvdy5BcnJheUJ1ZmZlciAmJiB3aW5kb3cuVWludDhBcnJheSAmJiBmdW5jdGlvbiAoZGF0YVVSSSkge1xuICAgICAgICB2YXIgbWF0Y2hlcywgbWVkaWFUeXBlLCBpc0Jhc2U2NCwgZGF0YVN0cmluZywgYnl0ZVN0cmluZywgYXJyYXlCdWZmZXIsIGludEFycmF5LCBpLCBiYjtcbiAgICAgICAgLy8gUGFyc2UgdGhlIGRhdGFVUkkgY29tcG9uZW50cyBhcyBwZXIgUkZDIDIzOTdcbiAgICAgICAgbWF0Y2hlcyA9IGRhdGFVUkkubWF0Y2goZGF0YVVSSVBhdHRlcm4pO1xuICAgICAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgZGF0YSBVUkknKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBEZWZhdWx0IHRvIHRleHQvcGxhaW47Y2hhcnNldD1VUy1BU0NJSVxuICAgICAgICBtZWRpYVR5cGUgPSBtYXRjaGVzWzJdID8gbWF0Y2hlc1sxXSA6ICd0ZXh0L3BsYWluJyArIChtYXRjaGVzWzNdIHx8ICc7Y2hhcnNldD1VUy1BU0NJSScpO1xuICAgICAgICBpc0Jhc2U2NCA9ICEhbWF0Y2hlc1s0XTtcbiAgICAgICAgZGF0YVN0cmluZyA9IGRhdGFVUkkuc2xpY2UobWF0Y2hlc1swXS5sZW5ndGgpO1xuICAgICAgICBpZiAoaXNCYXNlNjQpIHtcbiAgICAgICAgICAvLyBDb252ZXJ0IGJhc2U2NCB0byByYXcgYmluYXJ5IGRhdGEgaGVsZCBpbiBhIHN0cmluZzpcbiAgICAgICAgICBieXRlU3RyaW5nID0gYXRvYihkYXRhU3RyaW5nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBDb252ZXJ0IGJhc2U2NC9VUkxFbmNvZGVkIGRhdGEgY29tcG9uZW50IHRvIHJhdyBiaW5hcnk6XG4gICAgICAgICAgYnl0ZVN0cmluZyA9IGRlY29kZVVSSUNvbXBvbmVudChkYXRhU3RyaW5nKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBXcml0ZSB0aGUgYnl0ZXMgb2YgdGhlIHN0cmluZyB0byBhbiBBcnJheUJ1ZmZlcjpcbiAgICAgICAgYXJyYXlCdWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoYnl0ZVN0cmluZy5sZW5ndGgpO1xuICAgICAgICBpbnRBcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGJ5dGVTdHJpbmcubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBpbnRBcnJheVtpXSA9IGJ5dGVTdHJpbmcuY2hhckNvZGVBdChpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBXcml0ZSB0aGUgQXJyYXlCdWZmZXIgKG9yIEFycmF5QnVmZmVyVmlldykgdG8gYSBibG9iOlxuICAgICAgICBpZiAoaGFzQmxvYkNvbnN0cnVjdG9yKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBCbG9iKFtoYXNBcnJheUJ1ZmZlclZpZXdTdXBwb3J0ID8gaW50QXJyYXkgOiBhcnJheUJ1ZmZlcl0sIHtcbiAgICAgICAgICAgIHR5cGU6IG1lZGlhVHlwZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGJiID0gbmV3IEJsb2JCdWlsZGVyKCk7XG4gICAgICAgIGJiLmFwcGVuZChhcnJheUJ1ZmZlcik7XG4gICAgICAgIHJldHVybiBiYi5nZXRCbG9iKG1lZGlhVHlwZSk7XG4gICAgICB9O1xuICAgICAgaWYgKHdpbmRvdy5IVE1MQ2FudmFzRWxlbWVudCAmJiAhQ2FudmFzUHJvdG90eXBlLnRvQmxvYikge1xuICAgICAgICBpZiAoQ2FudmFzUHJvdG90eXBlLm1vekdldEFzRmlsZSkge1xuICAgICAgICAgIENhbnZhc1Byb3RvdHlwZS50b0Jsb2IgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIHR5cGUsIHF1YWxpdHkpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBpZiAocXVhbGl0eSAmJiBDYW52YXNQcm90b3R5cGUudG9EYXRhVVJMICYmIGRhdGFVUkx0b0Jsb2IpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhVVJMdG9CbG9iKHNlbGYudG9EYXRhVVJMKHR5cGUsIHF1YWxpdHkpKSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soc2VsZi5tb3pHZXRBc0ZpbGUoJ2Jsb2InLCB0eXBlKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAoQ2FudmFzUHJvdG90eXBlLnRvRGF0YVVSTCAmJiBkYXRhVVJMdG9CbG9iKSB7XG4gICAgICAgICAgaWYgKENhbnZhc1Byb3RvdHlwZS5tc1RvQmxvYikge1xuICAgICAgICAgICAgQ2FudmFzUHJvdG90eXBlLnRvQmxvYiA9IGZ1bmN0aW9uIChjYWxsYmFjaywgdHlwZSwgcXVhbGl0eSkge1xuICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICgodHlwZSAmJiB0eXBlICE9PSAnaW1hZ2UvcG5nJyB8fCBxdWFsaXR5KSAmJiBDYW52YXNQcm90b3R5cGUudG9EYXRhVVJMICYmIGRhdGFVUkx0b0Jsb2IpIHtcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGFVUkx0b0Jsb2Ioc2VsZi50b0RhdGFVUkwodHlwZSwgcXVhbGl0eSkpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgY2FsbGJhY2soc2VsZi5tc1RvQmxvYih0eXBlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIENhbnZhc1Byb3RvdHlwZS50b0Jsb2IgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIHR5cGUsIHF1YWxpdHkpIHtcbiAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhVVJMdG9CbG9iKHNlbGYudG9EYXRhVVJMKHR5cGUsIHF1YWxpdHkpKSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGRhdGFVUkx0b0Jsb2I7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuZGF0YVVSTHRvQmxvYiA9IGRhdGFVUkx0b0Jsb2I7XG4gICAgICB9XG4gICAgfSkod2luZG93KTtcbiAgfSkoY2FudmFzVG9CbG9iKTtcbiAgdmFyIHRvQmxvYiA9IGNhbnZhc1RvQmxvYi5leHBvcnRzO1xuXG4gIHZhciBpc0Jsb2IgPSBmdW5jdGlvbiBpc0Jsb2IodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIEJsb2IgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIEJsb2IgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgQmxvYl0nO1xuICB9O1xuXG4gIHZhciBERUZBVUxUUyA9IHtcbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgaWYgb3V0cHV0IHRoZSBvcmlnaW5hbCBpbWFnZSBpbnN0ZWFkIG9mIHRoZSBjb21wcmVzc2VkIG9uZVxuICAgICAqIHdoZW4gdGhlIHNpemUgb2YgdGhlIGNvbXByZXNzZWQgaW1hZ2UgaXMgZ3JlYXRlciB0aGFuIHRoZSBvcmlnaW5hbCBvbmUnc1xuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHN0cmljdDogdHJ1ZSxcbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgaWYgcmVhZCB0aGUgaW1hZ2UncyBFeGlmIE9yaWVudGF0aW9uIGluZm9ybWF0aW9uLFxuICAgICAqIGFuZCB0aGVuIHJvdGF0ZSBvciBmbGlwIHRoZSBpbWFnZSBhdXRvbWF0aWNhbGx5LlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIGNoZWNrT3JpZW50YXRpb246IHRydWUsXG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIGlmIHJldGFpbiB0aGUgaW1hZ2UncyBFeGlmIGluZm9ybWF0aW9uIGFmdGVyIGNvbXByZXNzZWQuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgKi9cbiAgICByZXRhaW5FeGlmOiBmYWxzZSxcbiAgICAvKipcbiAgICAgKiBUaGUgbWF4IHdpZHRoIG9mIHRoZSBvdXRwdXQgaW1hZ2UuXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBtYXhXaWR0aDogSW5maW5pdHksXG4gICAgLyoqXG4gICAgICogVGhlIG1heCBoZWlnaHQgb2YgdGhlIG91dHB1dCBpbWFnZS5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIG1heEhlaWdodDogSW5maW5pdHksXG4gICAgLyoqXG4gICAgICogVGhlIG1pbiB3aWR0aCBvZiB0aGUgb3V0cHV0IGltYWdlLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgbWluV2lkdGg6IDAsXG4gICAgLyoqXG4gICAgICogVGhlIG1pbiBoZWlnaHQgb2YgdGhlIG91dHB1dCBpbWFnZS5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIG1pbkhlaWdodDogMCxcbiAgICAvKipcbiAgICAgKiBUaGUgd2lkdGggb2YgdGhlIG91dHB1dCBpbWFnZS5cbiAgICAgKiBJZiBub3Qgc3BlY2lmaWVkLCB0aGUgbmF0dXJhbCB3aWR0aCBvZiB0aGUgc291cmNlIGltYWdlIHdpbGwgYmUgdXNlZC5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHdpZHRoOiB1bmRlZmluZWQsXG4gICAgLyoqXG4gICAgICogVGhlIGhlaWdodCBvZiB0aGUgb3V0cHV0IGltYWdlLlxuICAgICAqIElmIG5vdCBzcGVjaWZpZWQsIHRoZSBuYXR1cmFsIGhlaWdodCBvZiB0aGUgc291cmNlIGltYWdlIHdpbGwgYmUgdXNlZC5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIGhlaWdodDogdW5kZWZpbmVkLFxuICAgIC8qKlxuICAgICAqIFNldHMgaG93IHRoZSBzaXplIG9mIHRoZSBpbWFnZSBzaG91bGQgYmUgcmVzaXplZCB0byB0aGUgY29udGFpbmVyXG4gICAgICogc3BlY2lmaWVkIGJ5IHRoZSBgd2lkdGhgIGFuZCBgaGVpZ2h0YCBvcHRpb25zLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgcmVzaXplOiAnbm9uZScsXG4gICAgLyoqXG4gICAgICogVGhlIHF1YWxpdHkgb2YgdGhlIG91dHB1dCBpbWFnZS5cbiAgICAgKiBJdCBtdXN0IGJlIGEgbnVtYmVyIGJldHdlZW4gYDBgIGFuZCBgMWAsXG4gICAgICogYW5kIG9ubHkgYXZhaWxhYmxlIGZvciBgaW1hZ2UvanBlZ2AgYW5kIGBpbWFnZS93ZWJwYCBpbWFnZXMuXG4gICAgICogQ2hlY2sgb3V0IHtAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSFRNTENhbnZhc0VsZW1lbnQvdG9CbG9iIGNhbnZhcy50b0Jsb2J9LlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgcXVhbGl0eTogMC44LFxuICAgIC8qKlxuICAgICAqIFRoZSBtaW1lIHR5cGUgb2YgdGhlIG91dHB1dCBpbWFnZS5cbiAgICAgKiBCeSBkZWZhdWx0LCB0aGUgb3JpZ2luYWwgbWltZSB0eXBlIG9mIHRoZSBzb3VyY2UgaW1hZ2UgZmlsZSB3aWxsIGJlIHVzZWQuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICBtaW1lVHlwZTogJ2F1dG8nLFxuICAgIC8qKlxuICAgICAqIEZpbGVzIHdob3NlIGZpbGUgdHlwZSBpcyBpbmNsdWRlZCBpbiB0aGlzIGxpc3QsXG4gICAgICogYW5kIHdob3NlIGZpbGUgc2l6ZSBleGNlZWRzIHRoZSBgY29udmVydFNpemVgIHZhbHVlIHdpbGwgYmUgY29udmVydGVkIHRvIEpQRUdzLlxuICAgICAqIEB0eXBlIHtzdHJpbmdcdUZGNUNBcnJheX1cbiAgICAgKi9cbiAgICBjb252ZXJ0VHlwZXM6IFsnaW1hZ2UvcG5nJ10sXG4gICAgLyoqXG4gICAgICogUE5HIGZpbGVzIG92ZXIgdGhpcyBzaXplICg1IE1CIGJ5IGRlZmF1bHQpIHdpbGwgYmUgY29udmVydGVkIHRvIEpQRUdzLlxuICAgICAqIFRvIGRpc2FibGUgdGhpcywganVzdCBzZXQgdGhlIHZhbHVlIHRvIGBJbmZpbml0eWAuXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBjb252ZXJ0U2l6ZTogNTAwMDAwMCxcbiAgICAvKipcbiAgICAgKiBUaGUgaG9vayBmdW5jdGlvbiB0byBleGVjdXRlIGJlZm9yZSBkcmF3IHRoZSBpbWFnZSBpbnRvIHRoZSBjYW52YXMgZm9yIGNvbXByZXNzaW9uLlxuICAgICAqIEB0eXBlIHtGdW5jdGlvbn1cbiAgICAgKiBAcGFyYW0ge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gY29udGV4dCAtIFRoZSAyZCByZW5kZXJpbmcgY29udGV4dCBvZiB0aGUgY2FudmFzLlxuICAgICAqIEBwYXJhbSB7SFRNTENhbnZhc0VsZW1lbnR9IGNhbnZhcyAtIFRoZSBjYW52YXMgZm9yIGNvbXByZXNzaW9uLlxuICAgICAqIEBleGFtcGxlXG4gICAgICogZnVuY3Rpb24gKGNvbnRleHQsIGNhbnZhcykge1xuICAgICAqICAgY29udGV4dC5maWxsU3R5bGUgPSAnI2ZmZic7XG4gICAgICogfVxuICAgICAqL1xuICAgIGJlZm9yZURyYXc6IG51bGwsXG4gICAgLyoqXG4gICAgICogVGhlIGhvb2sgZnVuY3Rpb24gdG8gZXhlY3V0ZSBhZnRlciBkcmV3IHRoZSBpbWFnZSBpbnRvIHRoZSBjYW52YXMgZm9yIGNvbXByZXNzaW9uLlxuICAgICAqIEB0eXBlIHtGdW5jdGlvbn1cbiAgICAgKiBAcGFyYW0ge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gY29udGV4dCAtIFRoZSAyZCByZW5kZXJpbmcgY29udGV4dCBvZiB0aGUgY2FudmFzLlxuICAgICAqIEBwYXJhbSB7SFRNTENhbnZhc0VsZW1lbnR9IGNhbnZhcyAtIFRoZSBjYW52YXMgZm9yIGNvbXByZXNzaW9uLlxuICAgICAqIEBleGFtcGxlXG4gICAgICogZnVuY3Rpb24gKGNvbnRleHQsIGNhbnZhcykge1xuICAgICAqICAgY29udGV4dC5maWx0ZXIgPSAnZ3JheXNjYWxlKDEwMCUpJztcbiAgICAgKiB9XG4gICAgICovXG4gICAgZHJldzogbnVsbCxcbiAgICAvKipcbiAgICAgKiBUaGUgaG9vayBmdW5jdGlvbiB0byBleGVjdXRlIHdoZW4gc3VjY2VzcyB0byBjb21wcmVzcyB0aGUgaW1hZ2UuXG4gICAgICogQHR5cGUge0Z1bmN0aW9ufVxuICAgICAqIEBwYXJhbSB7RmlsZX0gZmlsZSAtIFRoZSBjb21wcmVzc2VkIGltYWdlIEZpbGUgb2JqZWN0LlxuICAgICAqIEBleGFtcGxlXG4gICAgICogZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgKiAgIGNvbnNvbGUubG9nKGZpbGUpO1xuICAgICAqIH1cbiAgICAgKi9cbiAgICBzdWNjZXNzOiBudWxsLFxuICAgIC8qKlxuICAgICAqIFRoZSBob29rIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgd2hlbiBmYWlsIHRvIGNvbXByZXNzIHRoZSBpbWFnZS5cbiAgICAgKiBAdHlwZSB7RnVuY3Rpb259XG4gICAgICogQHBhcmFtIHtFcnJvcn0gZXJyIC0gQW4gRXJyb3Igb2JqZWN0LlxuICAgICAqIEBleGFtcGxlXG4gICAgICogZnVuY3Rpb24gKGVycikge1xuICAgICAqICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xuICAgICAqIH1cbiAgICAgKi9cbiAgICBlcnJvcjogbnVsbFxuICB9O1xuXG4gIHZhciBJU19CUk9XU0VSID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCc7XG4gIHZhciBXSU5ET1cgPSBJU19CUk9XU0VSID8gd2luZG93IDoge307XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIHBvc2l0aXZlIG51bWJlci5cbiAgICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAgICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIHBvc2l0aXZlIG51bWJlciwgZWxzZSBgZmFsc2VgLlxuICAgKi9cbiAgdmFyIGlzUG9zaXRpdmVOdW1iZXIgPSBmdW5jdGlvbiBpc1Bvc2l0aXZlTnVtYmVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID4gMCAmJiB2YWx1ZSA8IEluZmluaXR5O1xuICB9O1xuICB2YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgYXJyYXktbGlrZSBvciBpdGVyYWJsZSBvYmplY3QgdG8gYW4gYXJyYXkuXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAgICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGEgbmV3IGFycmF5LlxuICAgKi9cbiAgZnVuY3Rpb24gdG9BcnJheSh2YWx1ZSkge1xuICAgIHJldHVybiBBcnJheS5mcm9tID8gQXJyYXkuZnJvbSh2YWx1ZSkgOiBzbGljZS5jYWxsKHZhbHVlKTtcbiAgfVxuICB2YXIgUkVHRVhQX0lNQUdFX1RZUEUgPSAvXmltYWdlXFwvLiskLztcblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgbWltZSB0eXBlIG9mIGltYWdlLlxuICAgKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNoZWNrLlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGdpdmVuIGlzIGEgbWltZSB0eXBlIG9mIGltYWdlLCBlbHNlIGBmYWxzZWAuXG4gICAqL1xuICBmdW5jdGlvbiBpc0ltYWdlVHlwZSh2YWx1ZSkge1xuICAgIHJldHVybiBSRUdFWFBfSU1BR0VfVFlQRS50ZXN0KHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IGltYWdlIHR5cGUgdG8gZXh0ZW5zaW9uLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSBUaGUgaW1hZ2UgdHlwZSB0byBjb252ZXJ0LlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyB0aGUgaW1hZ2UgZXh0ZW5zaW9uLlxuICAgKi9cbiAgZnVuY3Rpb24gaW1hZ2VUeXBlVG9FeHRlbnNpb24odmFsdWUpIHtcbiAgICB2YXIgZXh0ZW5zaW9uID0gaXNJbWFnZVR5cGUodmFsdWUpID8gdmFsdWUuc3Vic3RyKDYpIDogJyc7XG4gICAgaWYgKGV4dGVuc2lvbiA9PT0gJ2pwZWcnKSB7XG4gICAgICBleHRlbnNpb24gPSAnanBnJztcbiAgICB9XG4gICAgcmV0dXJuIFwiLlwiLmNvbmNhdChleHRlbnNpb24pO1xuICB9XG4gIHZhciBmcm9tQ2hhckNvZGUgPSBTdHJpbmcuZnJvbUNoYXJDb2RlO1xuXG4gIC8qKlxuICAgKiBHZXQgc3RyaW5nIGZyb20gY2hhciBjb2RlIGluIGRhdGEgdmlldy5cbiAgICogQHBhcmFtIHtEYXRhVmlld30gZGF0YVZpZXcgLSBUaGUgZGF0YSB2aWV3IGZvciByZWFkLlxuICAgKiBAcGFyYW0ge251bWJlcn0gc3RhcnQgLSBUaGUgc3RhcnQgaW5kZXguXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGggLSBUaGUgcmVhZCBsZW5ndGguXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSByZWFkIHJlc3VsdC5cbiAgICovXG4gIGZ1bmN0aW9uIGdldFN0cmluZ0Zyb21DaGFyQ29kZShkYXRhVmlldywgc3RhcnQsIGxlbmd0aCkge1xuICAgIHZhciBzdHIgPSAnJztcbiAgICB2YXIgaTtcbiAgICBsZW5ndGggKz0gc3RhcnQ7XG4gICAgZm9yIChpID0gc3RhcnQ7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgc3RyICs9IGZyb21DaGFyQ29kZShkYXRhVmlldy5nZXRVaW50OChpKSk7XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgYGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLmdldEltYWdlRGF0YWAgaXMgYXZhaWxhYmxlLFxuICAgKiBGaXJlRm94IHJhbmRvbWl6ZXMgdGhlIG91dHB1dCBvZiB0aGF0IGZ1bmN0aW9uIGluIGBwcml2YWN5LnJlc2lzdEZpbmdlcnByaW50aW5nYCBtb2RlICgjMTM3KVxuICAgKiBAbGluayBodHRwczovL2dpdGh1Yi5jb20vbm9kZWNhL3BpY2EvYmxvYi9tYXN0ZXIvbGliL3V0aWxzLmpzXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBpdCBpcyBhdmFpbGFibGUsIGVsc2UgYGZhbHNlYC5cbiAgICovXG4gIGZ1bmN0aW9uIGlzQ2FudmFzQXZhaWxhYmxlKCkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICBjYW52YXMud2lkdGggPSAyO1xuICAgICAgY2FudmFzLmhlaWdodCA9IDE7XG4gICAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgaWYgKCFjb250ZXh0KSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIC8vIENyZWF0ZSAyeDEgaW1hZ2UgZGF0YSBjb250YWluaW5nIFJHQkEgdmFsdWVzIGZvciB0d28gcGl4ZWxzXG4gICAgICB2YXIgaW1hZ2VEYXRhID0gY29udGV4dC5jcmVhdGVJbWFnZURhdGEoMiwgMSk7XG5cbiAgICAgIC8vIEZpcnN0IHBpeGVsOiBSPTEyLCBHPTIzLCBCPTM0LCBBPTI1NVxuICAgICAgaW1hZ2VEYXRhLmRhdGFbMF0gPSAxMjtcbiAgICAgIGltYWdlRGF0YS5kYXRhWzFdID0gMjM7XG4gICAgICBpbWFnZURhdGEuZGF0YVsyXSA9IDM0O1xuICAgICAgaW1hZ2VEYXRhLmRhdGFbM10gPSAyNTU7XG5cbiAgICAgIC8vIFNlY29uZCBwaXhlbDogUj00NSwgRz01NiwgQj02NywgQT0yNTVcbiAgICAgIGltYWdlRGF0YS5kYXRhWzRdID0gNDU7XG4gICAgICBpbWFnZURhdGEuZGF0YVs1XSA9IDU2O1xuICAgICAgaW1hZ2VEYXRhLmRhdGFbNl0gPSA2NztcbiAgICAgIGltYWdlRGF0YS5kYXRhWzddID0gMjU1O1xuICAgICAgY29udGV4dC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCAwLCAwKTtcbiAgICAgIHZhciByZWFkQmFjayA9IGNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIDIsIDEpO1xuXG4gICAgICAvLyBFeHBlY3RlZCBwaXhlbCBkYXRhIChtYXRjaGluZyB0aGUgd3JpdHRlbiB2YWx1ZXMpXG4gICAgICB2YXIgZXhwZWN0ZWQgPSBbMTIsIDIzLCAzNCwgMjU1LCA0NSwgNTYsIDY3LCAyNTVdO1xuXG4gICAgICAvLyBDb21wYXJlIGVsZW1lbnQgYnkgZWxlbWVudCB0byBlbnN1cmUgd3JpdGUgYW5kIHJlYWQgY29uc2lzdGVuY3lcbiAgICAgIHJldHVybiByZWFkQmFjay5kYXRhLmV2ZXJ5KGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSBleHBlY3RlZFtpbmRleF07XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICB2YXIgYnRvYSA9IFdJTkRPVy5idG9hO1xuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm0gYXJyYXkgYnVmZmVyIHRvIERhdGEgVVJMLlxuICAgKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBhcnJheUJ1ZmZlciAtIFRoZSBhcnJheSBidWZmZXIgdG8gdHJhbnNmb3JtLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWltZVR5cGUgLSBUaGUgbWltZSB0eXBlIG9mIHRoZSBEYXRhIFVSTC5cbiAgICogQHJldHVybnMge3N0cmluZ30gVGhlIHJlc3VsdCBEYXRhIFVSTC5cbiAgICovXG4gIGZ1bmN0aW9uIGFycmF5QnVmZmVyVG9EYXRhVVJMKGFycmF5QnVmZmVyLCBtaW1lVHlwZSkge1xuICAgIHZhciBjaHVua3MgPSBbXTtcbiAgICB2YXIgY2h1bmtTaXplID0gODE5MjtcbiAgICB2YXIgdWludDggPSBuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcik7XG4gICAgd2hpbGUgKHVpbnQ4Lmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIFhYWDogQmFiZWwncyBgdG9Db25zdW1hYmxlQXJyYXlgIGhlbHBlciB3aWxsIHRocm93IGVycm9yIGluIElFIG9yIFNhZmFyaSA5XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXNwcmVhZFxuICAgICAgY2h1bmtzLnB1c2goZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIHRvQXJyYXkodWludDguc3ViYXJyYXkoMCwgY2h1bmtTaXplKSkpKTtcbiAgICAgIHVpbnQ4ID0gdWludDguc3ViYXJyYXkoY2h1bmtTaXplKTtcbiAgICB9XG4gICAgcmV0dXJuIFwiZGF0YTpcIi5jb25jYXQobWltZVR5cGUsIFwiO2Jhc2U2NCxcIikuY29uY2F0KGJ0b2EoY2h1bmtzLmpvaW4oJycpKSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IG9yaWVudGF0aW9uIHZhbHVlIGZyb20gZ2l2ZW4gYXJyYXkgYnVmZmVyLlxuICAgKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBhcnJheUJ1ZmZlciAtIFRoZSBhcnJheSBidWZmZXIgdG8gcmVhZC5cbiAgICogQHJldHVybnMge251bWJlcn0gVGhlIHJlYWQgb3JpZW50YXRpb24gdmFsdWUuXG4gICAqL1xuICBmdW5jdGlvbiByZXNldEFuZEdldE9yaWVudGF0aW9uKGFycmF5QnVmZmVyKSB7XG4gICAgdmFyIGRhdGFWaWV3ID0gbmV3IERhdGFWaWV3KGFycmF5QnVmZmVyKTtcbiAgICB2YXIgb3JpZW50YXRpb247XG5cbiAgICAvLyBJZ25vcmVzIHJhbmdlIGVycm9yIHdoZW4gdGhlIGltYWdlIGRvZXMgbm90IGhhdmUgY29ycmVjdCBFeGlmIGluZm9ybWF0aW9uXG4gICAgdHJ5IHtcbiAgICAgIHZhciBsaXR0bGVFbmRpYW47XG4gICAgICB2YXIgYXBwMVN0YXJ0O1xuICAgICAgdmFyIGlmZFN0YXJ0O1xuXG4gICAgICAvLyBPbmx5IGhhbmRsZSBKUEVHIGltYWdlIChzdGFydCBieSAweEZGRDgpXG4gICAgICBpZiAoZGF0YVZpZXcuZ2V0VWludDgoMCkgPT09IDB4RkYgJiYgZGF0YVZpZXcuZ2V0VWludDgoMSkgPT09IDB4RDgpIHtcbiAgICAgICAgdmFyIGxlbmd0aCA9IGRhdGFWaWV3LmJ5dGVMZW5ndGg7XG4gICAgICAgIHZhciBvZmZzZXQgPSAyO1xuICAgICAgICB3aGlsZSAob2Zmc2V0ICsgMSA8IGxlbmd0aCkge1xuICAgICAgICAgIGlmIChkYXRhVmlldy5nZXRVaW50OChvZmZzZXQpID09PSAweEZGICYmIGRhdGFWaWV3LmdldFVpbnQ4KG9mZnNldCArIDEpID09PSAweEUxKSB7XG4gICAgICAgICAgICBhcHAxU3RhcnQgPSBvZmZzZXQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgb2Zmc2V0ICs9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChhcHAxU3RhcnQpIHtcbiAgICAgICAgdmFyIGV4aWZJRENvZGUgPSBhcHAxU3RhcnQgKyA0O1xuICAgICAgICB2YXIgdGlmZk9mZnNldCA9IGFwcDFTdGFydCArIDEwO1xuICAgICAgICBpZiAoZ2V0U3RyaW5nRnJvbUNoYXJDb2RlKGRhdGFWaWV3LCBleGlmSURDb2RlLCA0KSA9PT0gJ0V4aWYnKSB7XG4gICAgICAgICAgdmFyIGVuZGlhbm5lc3MgPSBkYXRhVmlldy5nZXRVaW50MTYodGlmZk9mZnNldCk7XG4gICAgICAgICAgbGl0dGxlRW5kaWFuID0gZW5kaWFubmVzcyA9PT0gMHg0OTQ5O1xuICAgICAgICAgIGlmIChsaXR0bGVFbmRpYW4gfHwgZW5kaWFubmVzcyA9PT0gMHg0RDREIC8qIGJpZ0VuZGlhbiAqLykge1xuICAgICAgICAgICAgaWYgKGRhdGFWaWV3LmdldFVpbnQxNih0aWZmT2Zmc2V0ICsgMiwgbGl0dGxlRW5kaWFuKSA9PT0gMHgwMDJBKSB7XG4gICAgICAgICAgICAgIHZhciBmaXJzdElGRE9mZnNldCA9IGRhdGFWaWV3LmdldFVpbnQzMih0aWZmT2Zmc2V0ICsgNCwgbGl0dGxlRW5kaWFuKTtcbiAgICAgICAgICAgICAgaWYgKGZpcnN0SUZET2Zmc2V0ID49IDB4MDAwMDAwMDgpIHtcbiAgICAgICAgICAgICAgICBpZmRTdGFydCA9IHRpZmZPZmZzZXQgKyBmaXJzdElGRE9mZnNldDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGlmZFN0YXJ0KSB7XG4gICAgICAgIHZhciBfbGVuZ3RoID0gZGF0YVZpZXcuZ2V0VWludDE2KGlmZFN0YXJ0LCBsaXR0bGVFbmRpYW4pO1xuICAgICAgICB2YXIgX29mZnNldDtcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBfbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBfb2Zmc2V0ID0gaWZkU3RhcnQgKyBpICogMTIgKyAyO1xuICAgICAgICAgIGlmIChkYXRhVmlldy5nZXRVaW50MTYoX29mZnNldCwgbGl0dGxlRW5kaWFuKSA9PT0gMHgwMTEyIC8qIE9yaWVudGF0aW9uICovKSB7XG4gICAgICAgICAgICAvLyA4IGlzIHRoZSBvZmZzZXQgb2YgdGhlIGN1cnJlbnQgdGFnJ3MgdmFsdWVcbiAgICAgICAgICAgIF9vZmZzZXQgKz0gODtcblxuICAgICAgICAgICAgLy8gR2V0IHRoZSBvcmlnaW5hbCBvcmllbnRhdGlvbiB2YWx1ZVxuICAgICAgICAgICAgb3JpZW50YXRpb24gPSBkYXRhVmlldy5nZXRVaW50MTYoX29mZnNldCwgbGl0dGxlRW5kaWFuKTtcblxuICAgICAgICAgICAgLy8gT3ZlcnJpZGUgdGhlIG9yaWVudGF0aW9uIHdpdGggaXRzIGRlZmF1bHQgdmFsdWVcbiAgICAgICAgICAgIGRhdGFWaWV3LnNldFVpbnQxNihfb2Zmc2V0LCAxLCBsaXR0bGVFbmRpYW4pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgb3JpZW50YXRpb24gPSAxO1xuICAgIH1cbiAgICByZXR1cm4gb3JpZW50YXRpb247XG4gIH1cblxuICAvKipcbiAgICogUGFyc2UgRXhpZiBPcmllbnRhdGlvbiB2YWx1ZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IG9yaWVudGF0aW9uIC0gVGhlIG9yaWVudGF0aW9uIHRvIHBhcnNlLlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgcGFyc2VkIHJlc3VsdC5cbiAgICovXG4gIGZ1bmN0aW9uIHBhcnNlT3JpZW50YXRpb24ob3JpZW50YXRpb24pIHtcbiAgICB2YXIgcm90YXRlID0gMDtcbiAgICB2YXIgc2NhbGVYID0gMTtcbiAgICB2YXIgc2NhbGVZID0gMTtcbiAgICBzd2l0Y2ggKG9yaWVudGF0aW9uKSB7XG4gICAgICAvLyBGbGlwIGhvcml6b250YWxcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgc2NhbGVYID0gLTE7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvLyBSb3RhdGUgbGVmdCAxODBcdTAwQjBcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcm90YXRlID0gLTE4MDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8vIEZsaXAgdmVydGljYWxcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgc2NhbGVZID0gLTE7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvLyBGbGlwIHZlcnRpY2FsIGFuZCByb3RhdGUgcmlnaHQgOTBcdTAwQjBcbiAgICAgIGNhc2UgNTpcbiAgICAgICAgcm90YXRlID0gOTA7XG4gICAgICAgIHNjYWxlWSA9IC0xO1xuICAgICAgICBicmVhaztcblxuICAgICAgLy8gUm90YXRlIHJpZ2h0IDkwXHUwMEIwXG4gICAgICBjYXNlIDY6XG4gICAgICAgIHJvdGF0ZSA9IDkwO1xuICAgICAgICBicmVhaztcblxuICAgICAgLy8gRmxpcCBob3Jpem9udGFsIGFuZCByb3RhdGUgcmlnaHQgOTBcdTAwQjBcbiAgICAgIGNhc2UgNzpcbiAgICAgICAgcm90YXRlID0gOTA7XG4gICAgICAgIHNjYWxlWCA9IC0xO1xuICAgICAgICBicmVhaztcblxuICAgICAgLy8gUm90YXRlIGxlZnQgOTBcdTAwQjBcbiAgICAgIGNhc2UgODpcbiAgICAgICAgcm90YXRlID0gLTkwO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHJvdGF0ZTogcm90YXRlLFxuICAgICAgc2NhbGVYOiBzY2FsZVgsXG4gICAgICBzY2FsZVk6IHNjYWxlWVxuICAgIH07XG4gIH1cbiAgdmFyIFJFR0VYUF9ERUNJTUFMUyA9IC9cXC5cXGQqKD86MHw5KXsxMn1cXGQqJC87XG5cbiAgLyoqXG4gICAqIE5vcm1hbGl6ZSBkZWNpbWFsIG51bWJlci5cbiAgICogQ2hlY2sgb3V0IHtAbGluayBodHRwczovLzAuMzAwMDAwMDAwMDAwMDAwMDQuY29tL31cbiAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIG5vcm1hbGl6ZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IFt0aW1lcz0xMDAwMDAwMDAwMDBdIC0gVGhlIHRpbWVzIGZvciBub3JtYWxpemluZy5cbiAgICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbm9ybWFsaXplZCBudW1iZXIuXG4gICAqL1xuICBmdW5jdGlvbiBub3JtYWxpemVEZWNpbWFsTnVtYmVyKHZhbHVlKSB7XG4gICAgdmFyIHRpbWVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAxMDAwMDAwMDAwMDA7XG4gICAgcmV0dXJuIFJFR0VYUF9ERUNJTUFMUy50ZXN0KHZhbHVlKSA/IE1hdGgucm91bmQodmFsdWUgKiB0aW1lcykgLyB0aW1lcyA6IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbWF4IHNpemVzIGluIGEgcmVjdGFuZ2xlIHVuZGVyIHRoZSBnaXZlbiBhc3BlY3QgcmF0aW8uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gVGhlIG9yaWdpbmFsIHNpemVzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3R5cGU9J2NvbnRhaW4nXSAtIFRoZSBhZGp1c3QgdHlwZS5cbiAgICogQHJldHVybnMge09iamVjdH0gVGhlIHJlc3VsdCBzaXplcy5cbiAgICovXG4gIGZ1bmN0aW9uIGdldEFkanVzdGVkU2l6ZXMoX3JlZikge1xuICAgIHZhciBhc3BlY3RSYXRpbyA9IF9yZWYuYXNwZWN0UmF0aW8sXG4gICAgICBoZWlnaHQgPSBfcmVmLmhlaWdodCxcbiAgICAgIHdpZHRoID0gX3JlZi53aWR0aDtcbiAgICB2YXIgdHlwZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogJ25vbmUnO1xuICAgIHZhciBpc1ZhbGlkV2lkdGggPSBpc1Bvc2l0aXZlTnVtYmVyKHdpZHRoKTtcbiAgICB2YXIgaXNWYWxpZEhlaWdodCA9IGlzUG9zaXRpdmVOdW1iZXIoaGVpZ2h0KTtcbiAgICBpZiAoaXNWYWxpZFdpZHRoICYmIGlzVmFsaWRIZWlnaHQpIHtcbiAgICAgIHZhciBhZGp1c3RlZFdpZHRoID0gaGVpZ2h0ICogYXNwZWN0UmF0aW87XG4gICAgICBpZiAoKHR5cGUgPT09ICdjb250YWluJyB8fCB0eXBlID09PSAnbm9uZScpICYmIGFkanVzdGVkV2lkdGggPiB3aWR0aCB8fCB0eXBlID09PSAnY292ZXInICYmIGFkanVzdGVkV2lkdGggPCB3aWR0aCkge1xuICAgICAgICBoZWlnaHQgPSB3aWR0aCAvIGFzcGVjdFJhdGlvO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2lkdGggPSBoZWlnaHQgKiBhc3BlY3RSYXRpbztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzVmFsaWRXaWR0aCkge1xuICAgICAgaGVpZ2h0ID0gd2lkdGggLyBhc3BlY3RSYXRpbztcbiAgICB9IGVsc2UgaWYgKGlzVmFsaWRIZWlnaHQpIHtcbiAgICAgIHdpZHRoID0gaGVpZ2h0ICogYXNwZWN0UmF0aW87XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogd2lkdGgsXG4gICAgICBoZWlnaHQ6IGhlaWdodFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogR2V0IEV4aWYgaW5mb3JtYXRpb24gZnJvbSB0aGUgZ2l2ZW4gYXJyYXkgYnVmZmVyLlxuICAgKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBhcnJheUJ1ZmZlciAtIFRoZSBhcnJheSBidWZmZXIgdG8gcmVhZC5cbiAgICogQHJldHVybnMge0FycmF5fSBUaGUgcmVhZCBFeGlmIGluZm9ybWF0aW9uLlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0RXhpZihhcnJheUJ1ZmZlcikge1xuICAgIHZhciBhcnJheSA9IHRvQXJyYXkobmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpKTtcbiAgICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICAgIHZhciBzZWdtZW50cyA9IFtdO1xuICAgIHZhciBzdGFydCA9IDA7XG4gICAgd2hpbGUgKHN0YXJ0ICsgMyA8IGxlbmd0aCkge1xuICAgICAgdmFyIHZhbHVlID0gYXJyYXlbc3RhcnRdO1xuICAgICAgdmFyIG5leHQgPSBhcnJheVtzdGFydCArIDFdO1xuXG4gICAgICAvLyBTT1MgKFN0YXJ0IG9mIFNjYW4pXG4gICAgICBpZiAodmFsdWUgPT09IDB4RkYgJiYgbmV4dCA9PT0gMHhEQSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgLy8gU09JIChTdGFydCBvZiBJbWFnZSlcbiAgICAgIGlmICh2YWx1ZSA9PT0gMHhGRiAmJiBuZXh0ID09PSAweEQ4KSB7XG4gICAgICAgIHN0YXJ0ICs9IDI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgb2Zmc2V0ID0gYXJyYXlbc3RhcnQgKyAyXSAqIDI1NiArIGFycmF5W3N0YXJ0ICsgM107XG4gICAgICAgIHZhciBlbmQgPSBzdGFydCArIG9mZnNldCArIDI7XG4gICAgICAgIHZhciBzZWdtZW50ID0gYXJyYXkuc2xpY2Uoc3RhcnQsIGVuZCk7XG4gICAgICAgIHNlZ21lbnRzLnB1c2goc2VnbWVudCk7XG4gICAgICAgIHN0YXJ0ID0gZW5kO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2VnbWVudHMucmVkdWNlKGZ1bmN0aW9uIChleGlmQXJyYXksIGN1cnJlbnQpIHtcbiAgICAgIGlmIChjdXJyZW50WzBdID09PSAweEZGICYmIGN1cnJlbnRbMV0gPT09IDB4RTEpIHtcbiAgICAgICAgcmV0dXJuIGV4aWZBcnJheS5jb25jYXQoY3VycmVudCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZXhpZkFycmF5O1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnNlcnQgRXhpZiBpbmZvcm1hdGlvbiBpbnRvIHRoZSBnaXZlbiBhcnJheSBidWZmZXIuXG4gICAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGFycmF5QnVmZmVyIC0gVGhlIGFycmF5IGJ1ZmZlciB0byB0cmFuc2Zvcm0uXG4gICAqIEBwYXJhbSB7QXJyYXl9IGV4aWZBcnJheSAtIFRoZSBFeGlmIGluZm9ybWF0aW9uIHRvIGluc2VydC5cbiAgICogQHJldHVybnMge0FycmF5QnVmZmVyfSBUaGUgdHJhbnNmb3JtZWQgYXJyYXkgYnVmZmVyLlxuICAgKi9cbiAgZnVuY3Rpb24gaW5zZXJ0RXhpZihhcnJheUJ1ZmZlciwgZXhpZkFycmF5KSB7XG4gICAgdmFyIGFycmF5ID0gdG9BcnJheShuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcikpO1xuICAgIGlmIChhcnJheVsyXSAhPT0gMHhGRiB8fCBhcnJheVszXSAhPT0gMHhFMCkge1xuICAgICAgcmV0dXJuIGFycmF5QnVmZmVyO1xuICAgIH1cbiAgICB2YXIgYXBwMExlbmd0aCA9IGFycmF5WzRdICogMjU2ICsgYXJyYXlbNV07XG4gICAgdmFyIG5ld0FycmF5QnVmZmVyID0gWzB4RkYsIDB4RDhdLmNvbmNhdChleGlmQXJyYXksIGFycmF5LnNsaWNlKDQgKyBhcHAwTGVuZ3RoKSk7XG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KG5ld0FycmF5QnVmZmVyKTtcbiAgfVxuXG4gIHZhciBBcnJheUJ1ZmZlciQxID0gV0lORE9XLkFycmF5QnVmZmVyLFxuICAgIEZpbGVSZWFkZXIgPSBXSU5ET1cuRmlsZVJlYWRlcjtcbiAgdmFyIFVSTCA9IFdJTkRPVy5VUkwgfHwgV0lORE9XLndlYmtpdFVSTDtcbiAgdmFyIFJFR0VYUF9FWFRFTlNJT04gPSAvXFwuXFx3KyQvO1xuICB2YXIgQW5vdGhlckNvbXByZXNzb3IgPSBXSU5ET1cuQ29tcHJlc3NvcjtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBpbWFnZSBjb21wcmVzc29yLlxuICAgKiBAY2xhc3NcbiAgICovXG4gIHZhciBDb21wcmVzc29yID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgY29uc3RydWN0b3Igb2YgQ29tcHJlc3Nvci5cbiAgICAgKiBAcGFyYW0ge0ZpbGV8QmxvYn0gZmlsZSAtIFRoZSB0YXJnZXQgaW1hZ2UgZmlsZSBmb3IgY29tcHJlc3NpbmcuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIFRoZSBvcHRpb25zIGZvciBjb21wcmVzc2luZy5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBDb21wcmVzc29yKGZpbGUsIG9wdGlvbnMpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb21wcmVzc29yKTtcbiAgICAgIHRoaXMuZmlsZSA9IGZpbGU7XG4gICAgICB0aGlzLmV4aWYgPSBbXTtcbiAgICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIHRoaXMub3B0aW9ucyA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBERUZBVUxUUyksIG9wdGlvbnMpO1xuICAgICAgdGhpcy5hYm9ydGVkID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc3VsdCA9IG51bGw7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG4gICAgcmV0dXJuIF9jcmVhdGVDbGFzcyhDb21wcmVzc29yLCBbe1xuICAgICAga2V5OiBcImluaXRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgZmlsZSA9IHRoaXMuZmlsZSxcbiAgICAgICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBpZiAoIWlzQmxvYihmaWxlKSkge1xuICAgICAgICAgIHRoaXMuZmFpbChuZXcgRXJyb3IoJ1RoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgRmlsZSBvciBCbG9iIG9iamVjdC4nKSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBtaW1lVHlwZSA9IGZpbGUudHlwZTtcbiAgICAgICAgaWYgKCFpc0ltYWdlVHlwZShtaW1lVHlwZSkpIHtcbiAgICAgICAgICB0aGlzLmZhaWwobmV3IEVycm9yKCdUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhbiBpbWFnZSBGaWxlIG9yIEJsb2Igb2JqZWN0LicpKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFVUkwgfHwgIUZpbGVSZWFkZXIpIHtcbiAgICAgICAgICB0aGlzLmZhaWwobmV3IEVycm9yKCdUaGUgY3VycmVudCBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgaW1hZ2UgY29tcHJlc3Npb24uJykpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIUFycmF5QnVmZmVyJDEpIHtcbiAgICAgICAgICBvcHRpb25zLmNoZWNrT3JpZW50YXRpb24gPSBmYWxzZTtcbiAgICAgICAgICBvcHRpb25zLnJldGFpbkV4aWYgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaXNKUEVHSW1hZ2UgPSBtaW1lVHlwZSA9PT0gJ2ltYWdlL2pwZWcnO1xuICAgICAgICB2YXIgY2hlY2tPcmllbnRhdGlvbiA9IGlzSlBFR0ltYWdlICYmIG9wdGlvbnMuY2hlY2tPcmllbnRhdGlvbjtcbiAgICAgICAgdmFyIHJldGFpbkV4aWYgPSBpc0pQRUdJbWFnZSAmJiBvcHRpb25zLnJldGFpbkV4aWY7XG4gICAgICAgIGlmIChVUkwgJiYgIWNoZWNrT3JpZW50YXRpb24gJiYgIXJldGFpbkV4aWYpIHtcbiAgICAgICAgICB0aGlzLmxvYWQoe1xuICAgICAgICAgICAgdXJsOiBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgdGhpcy5yZWFkZXIgPSByZWFkZXI7XG4gICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gX3JlZi50YXJnZXQ7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgICAgIHZhciBkYXRhID0ge307XG4gICAgICAgICAgICB2YXIgb3JpZW50YXRpb24gPSAxO1xuICAgICAgICAgICAgaWYgKGNoZWNrT3JpZW50YXRpb24pIHtcbiAgICAgICAgICAgICAgLy8gUmVzZXQgdGhlIG9yaWVudGF0aW9uIHZhbHVlIHRvIGl0cyBkZWZhdWx0IHZhbHVlIDFcbiAgICAgICAgICAgICAgLy8gYXMgc29tZSBpT1MgYnJvd3NlcnMgd2lsbCByZW5kZXIgaW1hZ2Ugd2l0aCBpdHMgb3JpZW50YXRpb25cbiAgICAgICAgICAgICAgb3JpZW50YXRpb24gPSByZXNldEFuZEdldE9yaWVudGF0aW9uKHJlc3VsdCk7XG4gICAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA+IDEpIHtcbiAgICAgICAgICAgICAgICBfZXh0ZW5kcyhkYXRhLCBwYXJzZU9yaWVudGF0aW9uKG9yaWVudGF0aW9uKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXRhaW5FeGlmKSB7XG4gICAgICAgICAgICAgIF90aGlzLmV4aWYgPSBnZXRFeGlmKHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2hlY2tPcmllbnRhdGlvbiB8fCByZXRhaW5FeGlmKSB7XG4gICAgICAgICAgICAgIGlmICghVVJMXG5cbiAgICAgICAgICAgICAgLy8gR2VuZXJhdGUgYSBuZXcgVVJMIHdpdGggdGhlIGRlZmF1bHQgb3JpZW50YXRpb24gdmFsdWUgMS5cbiAgICAgICAgICAgICAgfHwgb3JpZW50YXRpb24gPiAxKSB7XG4gICAgICAgICAgICAgICAgZGF0YS51cmwgPSBhcnJheUJ1ZmZlclRvRGF0YVVSTChyZXN1bHQsIG1pbWVUeXBlKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkYXRhLnVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRhdGEudXJsID0gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXMubG9hZChkYXRhKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJlYWRlci5vbmFib3J0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuZmFpbChuZXcgRXJyb3IoJ0Fib3J0ZWQgdG8gcmVhZCB0aGUgaW1hZ2Ugd2l0aCBGaWxlUmVhZGVyLicpKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJlYWRlci5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuZmFpbChuZXcgRXJyb3IoJ0ZhaWxlZCB0byByZWFkIHRoZSBpbWFnZSB3aXRoIEZpbGVSZWFkZXIuJykpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnJlYWRlciA9IG51bGw7XG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAoY2hlY2tPcmllbnRhdGlvbiB8fCByZXRhaW5FeGlmKSB7XG4gICAgICAgICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJsb2FkXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZChkYXRhKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuICAgICAgICB2YXIgZmlsZSA9IHRoaXMuZmlsZSxcbiAgICAgICAgICBpbWFnZSA9IHRoaXMuaW1hZ2U7XG4gICAgICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoaXNDYW52YXNBdmFpbGFibGUoKSkge1xuICAgICAgICAgICAgX3RoaXMyLmRyYXcoX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIGRhdGEpLCB7fSwge1xuICAgICAgICAgICAgICBuYXR1cmFsV2lkdGg6IGltYWdlLm5hdHVyYWxXaWR0aCxcbiAgICAgICAgICAgICAgbmF0dXJhbEhlaWdodDogaW1hZ2UubmF0dXJhbEhlaWdodFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfdGhpczIuZG9uZSh7XG4gICAgICAgICAgICAgIG5hdHVyYWxXaWR0aDogaW1hZ2UubmF0dXJhbFdpZHRoLFxuICAgICAgICAgICAgICBuYXR1cmFsSGVpZ2h0OiBpbWFnZS5uYXR1cmFsSGVpZ2h0LFxuICAgICAgICAgICAgICByZXN1bHQ6IG51bGxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgaW1hZ2Uub25hYm9ydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczIuZmFpbChuZXcgRXJyb3IoJ0Fib3J0ZWQgdG8gbG9hZCB0aGUgaW1hZ2UuJykpO1xuICAgICAgICB9O1xuICAgICAgICBpbWFnZS5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMi5mYWlsKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgdGhlIGltYWdlLicpKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBNYXRjaCBhbGwgYnJvd3NlcnMgdGhhdCB1c2UgV2ViS2l0IGFzIHRoZSBsYXlvdXQgZW5naW5lIGluIGlPUyBkZXZpY2VzLFxuICAgICAgICAvLyBzdWNoIGFzIFNhZmFyaSBmb3IgaU9TLCBDaHJvbWUgZm9yIGlPUywgYW5kIGluLWFwcCBicm93c2Vycy5cbiAgICAgICAgaWYgKFdJTkRPVy5uYXZpZ2F0b3IgJiYgLyg/OmlQYWR8aVBob25lfGlQb2QpLio/QXBwbGVXZWJLaXQvaS50ZXN0KFdJTkRPVy5uYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICAgIC8vIEZpeCB0aGUgYFRoZSBvcGVyYXRpb24gaXMgaW5zZWN1cmVgIGVycm9yICgjNTcpXG4gICAgICAgICAgaW1hZ2UuY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJztcbiAgICAgICAgfVxuICAgICAgICBpbWFnZS5hbHQgPSBmaWxlLm5hbWU7XG4gICAgICAgIGltYWdlLnNyYyA9IGRhdGEudXJsO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJkcmF3XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZHJhdyhfcmVmMikge1xuICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcbiAgICAgICAgdmFyIG5hdHVyYWxXaWR0aCA9IF9yZWYyLm5hdHVyYWxXaWR0aCxcbiAgICAgICAgICBuYXR1cmFsSGVpZ2h0ID0gX3JlZjIubmF0dXJhbEhlaWdodCxcbiAgICAgICAgICBfcmVmMiRyb3RhdGUgPSBfcmVmMi5yb3RhdGUsXG4gICAgICAgICAgcm90YXRlID0gX3JlZjIkcm90YXRlID09PSB2b2lkIDAgPyAwIDogX3JlZjIkcm90YXRlLFxuICAgICAgICAgIF9yZWYyJHNjYWxlWCA9IF9yZWYyLnNjYWxlWCxcbiAgICAgICAgICBzY2FsZVggPSBfcmVmMiRzY2FsZVggPT09IHZvaWQgMCA/IDEgOiBfcmVmMiRzY2FsZVgsXG4gICAgICAgICAgX3JlZjIkc2NhbGVZID0gX3JlZjIuc2NhbGVZLFxuICAgICAgICAgIHNjYWxlWSA9IF9yZWYyJHNjYWxlWSA9PT0gdm9pZCAwID8gMSA6IF9yZWYyJHNjYWxlWTtcbiAgICAgICAgdmFyIGZpbGUgPSB0aGlzLmZpbGUsXG4gICAgICAgICAgaW1hZ2UgPSB0aGlzLmltYWdlLFxuICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdmFyIGlzOTBEZWdyZWVzUm90YXRlZCA9IE1hdGguYWJzKHJvdGF0ZSkgJSAxODAgPT09IDkwO1xuICAgICAgICB2YXIgcmVzaXphYmxlID0gKG9wdGlvbnMucmVzaXplID09PSAnY29udGFpbicgfHwgb3B0aW9ucy5yZXNpemUgPT09ICdjb3ZlcicpICYmIGlzUG9zaXRpdmVOdW1iZXIob3B0aW9ucy53aWR0aCkgJiYgaXNQb3NpdGl2ZU51bWJlcihvcHRpb25zLmhlaWdodCk7XG4gICAgICAgIHZhciBtYXhXaWR0aCA9IE1hdGgubWF4KG9wdGlvbnMubWF4V2lkdGgsIDApIHx8IEluZmluaXR5O1xuICAgICAgICB2YXIgbWF4SGVpZ2h0ID0gTWF0aC5tYXgob3B0aW9ucy5tYXhIZWlnaHQsIDApIHx8IEluZmluaXR5O1xuICAgICAgICB2YXIgbWluV2lkdGggPSBNYXRoLm1heChvcHRpb25zLm1pbldpZHRoLCAwKSB8fCAwO1xuICAgICAgICB2YXIgbWluSGVpZ2h0ID0gTWF0aC5tYXgob3B0aW9ucy5taW5IZWlnaHQsIDApIHx8IDA7XG4gICAgICAgIHZhciBhc3BlY3RSYXRpbyA9IG5hdHVyYWxXaWR0aCAvIG5hdHVyYWxIZWlnaHQ7XG4gICAgICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XG4gICAgICAgIGlmIChpczkwRGVncmVlc1JvdGF0ZWQpIHtcbiAgICAgICAgICB2YXIgX3JlZjMgPSBbbWF4SGVpZ2h0LCBtYXhXaWR0aF07XG4gICAgICAgICAgbWF4V2lkdGggPSBfcmVmM1swXTtcbiAgICAgICAgICBtYXhIZWlnaHQgPSBfcmVmM1sxXTtcbiAgICAgICAgICB2YXIgX3JlZjQgPSBbbWluSGVpZ2h0LCBtaW5XaWR0aF07XG4gICAgICAgICAgbWluV2lkdGggPSBfcmVmNFswXTtcbiAgICAgICAgICBtaW5IZWlnaHQgPSBfcmVmNFsxXTtcbiAgICAgICAgICB2YXIgX3JlZjUgPSBbaGVpZ2h0LCB3aWR0aF07XG4gICAgICAgICAgd2lkdGggPSBfcmVmNVswXTtcbiAgICAgICAgICBoZWlnaHQgPSBfcmVmNVsxXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzaXphYmxlKSB7XG4gICAgICAgICAgYXNwZWN0UmF0aW8gPSB3aWR0aCAvIGhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgX2dldEFkanVzdGVkU2l6ZXMgPSBnZXRBZGp1c3RlZFNpemVzKHtcbiAgICAgICAgICBhc3BlY3RSYXRpbzogYXNwZWN0UmF0aW8sXG4gICAgICAgICAgd2lkdGg6IG1heFdpZHRoLFxuICAgICAgICAgIGhlaWdodDogbWF4SGVpZ2h0XG4gICAgICAgIH0sICdjb250YWluJyk7XG4gICAgICAgIG1heFdpZHRoID0gX2dldEFkanVzdGVkU2l6ZXMud2lkdGg7XG4gICAgICAgIG1heEhlaWdodCA9IF9nZXRBZGp1c3RlZFNpemVzLmhlaWdodDtcbiAgICAgICAgdmFyIF9nZXRBZGp1c3RlZFNpemVzMiA9IGdldEFkanVzdGVkU2l6ZXMoe1xuICAgICAgICAgIGFzcGVjdFJhdGlvOiBhc3BlY3RSYXRpbyxcbiAgICAgICAgICB3aWR0aDogbWluV2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBtaW5IZWlnaHRcbiAgICAgICAgfSwgJ2NvdmVyJyk7XG4gICAgICAgIG1pbldpZHRoID0gX2dldEFkanVzdGVkU2l6ZXMyLndpZHRoO1xuICAgICAgICBtaW5IZWlnaHQgPSBfZ2V0QWRqdXN0ZWRTaXplczIuaGVpZ2h0O1xuICAgICAgICBpZiAocmVzaXphYmxlKSB7XG4gICAgICAgICAgdmFyIF9nZXRBZGp1c3RlZFNpemVzMyA9IGdldEFkanVzdGVkU2l6ZXMoe1xuICAgICAgICAgICAgYXNwZWN0UmF0aW86IGFzcGVjdFJhdGlvLFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICAgICAgICB9LCBvcHRpb25zLnJlc2l6ZSk7XG4gICAgICAgICAgd2lkdGggPSBfZ2V0QWRqdXN0ZWRTaXplczMud2lkdGg7XG4gICAgICAgICAgaGVpZ2h0ID0gX2dldEFkanVzdGVkU2l6ZXMzLmhlaWdodDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgX2dldEFkanVzdGVkU2l6ZXM0ID0gZ2V0QWRqdXN0ZWRTaXplcyh7XG4gICAgICAgICAgICBhc3BlY3RSYXRpbzogYXNwZWN0UmF0aW8sXG4gICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHZhciBfZ2V0QWRqdXN0ZWRTaXplczQkd2kgPSBfZ2V0QWRqdXN0ZWRTaXplczQud2lkdGg7XG4gICAgICAgICAgd2lkdGggPSBfZ2V0QWRqdXN0ZWRTaXplczQkd2kgPT09IHZvaWQgMCA/IG5hdHVyYWxXaWR0aCA6IF9nZXRBZGp1c3RlZFNpemVzNCR3aTtcbiAgICAgICAgICB2YXIgX2dldEFkanVzdGVkU2l6ZXM0JGhlID0gX2dldEFkanVzdGVkU2l6ZXM0LmhlaWdodDtcbiAgICAgICAgICBoZWlnaHQgPSBfZ2V0QWRqdXN0ZWRTaXplczQkaGUgPT09IHZvaWQgMCA/IG5hdHVyYWxIZWlnaHQgOiBfZ2V0QWRqdXN0ZWRTaXplczQkaGU7XG4gICAgICAgIH1cbiAgICAgICAgd2lkdGggPSBNYXRoLmZsb29yKG5vcm1hbGl6ZURlY2ltYWxOdW1iZXIoTWF0aC5taW4oTWF0aC5tYXgod2lkdGgsIG1pbldpZHRoKSwgbWF4V2lkdGgpKSk7XG4gICAgICAgIGhlaWdodCA9IE1hdGguZmxvb3Iobm9ybWFsaXplRGVjaW1hbE51bWJlcihNYXRoLm1pbihNYXRoLm1heChoZWlnaHQsIG1pbkhlaWdodCksIG1heEhlaWdodCkpKTtcbiAgICAgICAgdmFyIGRlc3RYID0gLXdpZHRoIC8gMjtcbiAgICAgICAgdmFyIGRlc3RZID0gLWhlaWdodCAvIDI7XG4gICAgICAgIHZhciBkZXN0V2lkdGggPSB3aWR0aDtcbiAgICAgICAgdmFyIGRlc3RIZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHZhciBwYXJhbXMgPSBbXTtcbiAgICAgICAgaWYgKHJlc2l6YWJsZSkge1xuICAgICAgICAgIHZhciBzcmNYID0gMDtcbiAgICAgICAgICB2YXIgc3JjWSA9IDA7XG4gICAgICAgICAgdmFyIHNyY1dpZHRoID0gbmF0dXJhbFdpZHRoO1xuICAgICAgICAgIHZhciBzcmNIZWlnaHQgPSBuYXR1cmFsSGVpZ2h0O1xuICAgICAgICAgIHZhciBfZ2V0QWRqdXN0ZWRTaXplczUgPSBnZXRBZGp1c3RlZFNpemVzKHtcbiAgICAgICAgICAgIGFzcGVjdFJhdGlvOiBhc3BlY3RSYXRpbyxcbiAgICAgICAgICAgIHdpZHRoOiBuYXR1cmFsV2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IG5hdHVyYWxIZWlnaHRcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBjb250YWluOiAnY292ZXInLFxuICAgICAgICAgICAgY292ZXI6ICdjb250YWluJ1xuICAgICAgICAgIH1bb3B0aW9ucy5yZXNpemVdKTtcbiAgICAgICAgICBzcmNXaWR0aCA9IF9nZXRBZGp1c3RlZFNpemVzNS53aWR0aDtcbiAgICAgICAgICBzcmNIZWlnaHQgPSBfZ2V0QWRqdXN0ZWRTaXplczUuaGVpZ2h0O1xuICAgICAgICAgIHNyY1ggPSAobmF0dXJhbFdpZHRoIC0gc3JjV2lkdGgpIC8gMjtcbiAgICAgICAgICBzcmNZID0gKG5hdHVyYWxIZWlnaHQgLSBzcmNIZWlnaHQpIC8gMjtcbiAgICAgICAgICBwYXJhbXMucHVzaChzcmNYLCBzcmNZLCBzcmNXaWR0aCwgc3JjSGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgICBwYXJhbXMucHVzaChkZXN0WCwgZGVzdFksIGRlc3RXaWR0aCwgZGVzdEhlaWdodCk7XG4gICAgICAgIGlmIChpczkwRGVncmVlc1JvdGF0ZWQpIHtcbiAgICAgICAgICB2YXIgX3JlZjYgPSBbaGVpZ2h0LCB3aWR0aF07XG4gICAgICAgICAgd2lkdGggPSBfcmVmNlswXTtcbiAgICAgICAgICBoZWlnaHQgPSBfcmVmNlsxXTtcbiAgICAgICAgfVxuICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgaWYgKCFpc0ltYWdlVHlwZShvcHRpb25zLm1pbWVUeXBlKSkge1xuICAgICAgICAgIG9wdGlvbnMubWltZVR5cGUgPSBmaWxlLnR5cGU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGZpbGxTdHlsZSA9ICd0cmFuc3BhcmVudCc7XG5cbiAgICAgICAgLy8gQ29udmVydHMgUE5HIGZpbGVzIG92ZXIgdGhlIGBjb252ZXJ0U2l6ZWAgdG8gSlBFR3MuXG4gICAgICAgIGlmIChmaWxlLnNpemUgPiBvcHRpb25zLmNvbnZlcnRTaXplICYmIG9wdGlvbnMuY29udmVydFR5cGVzLmluZGV4T2Yob3B0aW9ucy5taW1lVHlwZSkgPj0gMCkge1xuICAgICAgICAgIG9wdGlvbnMubWltZVR5cGUgPSAnaW1hZ2UvanBlZyc7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGlzSlBFR0ltYWdlID0gb3B0aW9ucy5taW1lVHlwZSA9PT0gJ2ltYWdlL2pwZWcnO1xuICAgICAgICBpZiAoaXNKUEVHSW1hZ2UpIHtcbiAgICAgICAgICBmaWxsU3R5bGUgPSAnI2ZmZic7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBPdmVycmlkZSB0aGUgZGVmYXVsdCBmaWxsIGNvbG9yICgjMDAwLCBibGFjaylcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBmaWxsU3R5bGU7XG4gICAgICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIGlmIChvcHRpb25zLmJlZm9yZURyYXcpIHtcbiAgICAgICAgICBvcHRpb25zLmJlZm9yZURyYXcuY2FsbCh0aGlzLCBjb250ZXh0LCBjYW52YXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmFib3J0ZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dC5zYXZlKCk7XG4gICAgICAgIGNvbnRleHQudHJhbnNsYXRlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMik7XG4gICAgICAgIGNvbnRleHQucm90YXRlKHJvdGF0ZSAqIE1hdGguUEkgLyAxODApO1xuICAgICAgICBjb250ZXh0LnNjYWxlKHNjYWxlWCwgc2NhbGVZKTtcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UuYXBwbHkoY29udGV4dCwgW2ltYWdlXS5jb25jYXQocGFyYW1zKSk7XG4gICAgICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICAgICAgICBpZiAob3B0aW9ucy5kcmV3KSB7XG4gICAgICAgICAgb3B0aW9ucy5kcmV3LmNhbGwodGhpcywgY29udGV4dCwgY2FudmFzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5hYm9ydGVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uIGNhbGxiYWNrKGJsb2IpIHtcbiAgICAgICAgICBpZiAoIV90aGlzMy5hYm9ydGVkKSB7XG4gICAgICAgICAgICB2YXIgZG9uZSA9IGZ1bmN0aW9uIGRvbmUocmVzdWx0KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdGhpczMuZG9uZSh7XG4gICAgICAgICAgICAgICAgbmF0dXJhbFdpZHRoOiBuYXR1cmFsV2lkdGgsXG4gICAgICAgICAgICAgICAgbmF0dXJhbEhlaWdodDogbmF0dXJhbEhlaWdodCxcbiAgICAgICAgICAgICAgICByZXN1bHQ6IHJlc3VsdFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoYmxvYiAmJiBpc0pQRUdJbWFnZSAmJiBvcHRpb25zLnJldGFpbkV4aWYgJiYgX3RoaXMzLmV4aWYgJiYgX3RoaXMzLmV4aWYubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICB2YXIgbmV4dCA9IGZ1bmN0aW9uIG5leHQoYXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9uZSh0b0Jsb2IoYXJyYXlCdWZmZXJUb0RhdGFVUkwoaW5zZXJ0RXhpZihhcnJheUJ1ZmZlciwgX3RoaXMzLmV4aWYpLCBvcHRpb25zLm1pbWVUeXBlKSkpO1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBpZiAoYmxvYi5hcnJheUJ1ZmZlcikge1xuICAgICAgICAgICAgICAgIGJsb2IuYXJyYXlCdWZmZXIoKS50aGVuKG5leHQpLmNhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIF90aGlzMy5mYWlsKG5ldyBFcnJvcignRmFpbGVkIHRvIHJlYWQgdGhlIGNvbXByZXNzZWQgaW1hZ2Ugd2l0aCBCbG9iLmFycmF5QnVmZmVyKCkuJykpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgICAgIF90aGlzMy5yZWFkZXIgPSByZWFkZXI7XG4gICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChfcmVmNykge1xuICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IF9yZWY3LnRhcmdldDtcbiAgICAgICAgICAgICAgICAgIG5leHQodGFyZ2V0LnJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZWFkZXIub25hYm9ydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIF90aGlzMy5mYWlsKG5ldyBFcnJvcignQWJvcnRlZCB0byByZWFkIHRoZSBjb21wcmVzc2VkIGltYWdlIHdpdGggRmlsZVJlYWRlci4nKSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZWFkZXIub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIF90aGlzMy5mYWlsKG5ldyBFcnJvcignRmFpbGVkIHRvIHJlYWQgdGhlIGNvbXByZXNzZWQgaW1hZ2Ugd2l0aCBGaWxlUmVhZGVyLicpKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICBfdGhpczMucmVhZGVyID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZG9uZShibG9iKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGlmIChjYW52YXMudG9CbG9iKSB7XG4gICAgICAgICAgY2FudmFzLnRvQmxvYihjYWxsYmFjaywgb3B0aW9ucy5taW1lVHlwZSwgb3B0aW9ucy5xdWFsaXR5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYWxsYmFjayh0b0Jsb2IoY2FudmFzLnRvRGF0YVVSTChvcHRpb25zLm1pbWVUeXBlLCBvcHRpb25zLnF1YWxpdHkpKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZG9uZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRvbmUoX3JlZjgpIHtcbiAgICAgICAgdmFyIG5hdHVyYWxXaWR0aCA9IF9yZWY4Lm5hdHVyYWxXaWR0aCxcbiAgICAgICAgICBuYXR1cmFsSGVpZ2h0ID0gX3JlZjgubmF0dXJhbEhlaWdodCxcbiAgICAgICAgICByZXN1bHQgPSBfcmVmOC5yZXN1bHQ7XG4gICAgICAgIHZhciBmaWxlID0gdGhpcy5maWxlLFxuICAgICAgICAgIGltYWdlID0gdGhpcy5pbWFnZSxcbiAgICAgICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBpZiAoVVJMICYmIGltYWdlLnNyYy5pbmRleE9mKCdibG9iOicpID09PSAwKSB7XG4gICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChpbWFnZS5zcmMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAvLyBSZXR1cm5zIG9yaWdpbmFsIGZpbGUgaWYgdGhlIHJlc3VsdCBpcyBncmVhdGVyIHRoYW4gaXQgYW5kIHdpdGhvdXQgc2l6ZSByZWxhdGVkIG9wdGlvbnNcbiAgICAgICAgICBpZiAob3B0aW9ucy5zdHJpY3QgJiYgIW9wdGlvbnMucmV0YWluRXhpZiAmJiByZXN1bHQuc2l6ZSA+IGZpbGUuc2l6ZSAmJiBvcHRpb25zLm1pbWVUeXBlID09PSBmaWxlLnR5cGUgJiYgIShvcHRpb25zLndpZHRoID4gbmF0dXJhbFdpZHRoIHx8IG9wdGlvbnMuaGVpZ2h0ID4gbmF0dXJhbEhlaWdodCB8fCBvcHRpb25zLm1pbldpZHRoID4gbmF0dXJhbFdpZHRoIHx8IG9wdGlvbnMubWluSGVpZ2h0ID4gbmF0dXJhbEhlaWdodCB8fCBvcHRpb25zLm1heFdpZHRoIDwgbmF0dXJhbFdpZHRoIHx8IG9wdGlvbnMubWF4SGVpZ2h0IDwgbmF0dXJhbEhlaWdodCkpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGZpbGU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBmaWxlTmFtZSA9IGZpbGUubmFtZTtcblxuICAgICAgICAgICAgLy8gQ29udmVydCB0aGUgZXh0ZW5zaW9uIHRvIG1hdGNoIGl0cyB0eXBlXG4gICAgICAgICAgICBpZiAoZmlsZU5hbWUgJiYgcmVzdWx0LnR5cGUgIT09IGZpbGUudHlwZSkge1xuICAgICAgICAgICAgICBmaWxlTmFtZSA9IGZpbGVOYW1lLnJlcGxhY2UoUkVHRVhQX0VYVEVOU0lPTiwgaW1hZ2VUeXBlVG9FeHRlbnNpb24ocmVzdWx0LnR5cGUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIC8vIENvbnZlcnQgdGhlIHJlc3VsdGluZyBCbG9iIG9iamVjdCBpbnRvIGEgRmlsZSBvYmplY3QgZm9yIG1vZGVybiBicm93c2Vycy5cbiAgICAgICAgICAgICAgcmVzdWx0ID0gbmV3IEZpbGUoW3Jlc3VsdF0sIGZpbGVOYW1lLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogcmVzdWx0LnR5cGVcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAvLyBGYWxsYmFjayB0byBCbG9iIGlmIHRoZSBGaWxlIGNvbnN0cnVjdG9yIGlzIG5vdCBzdXBwb3J0ZWQuXG4gICAgICAgICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgcmVzdWx0Lm5hbWUgPSBmaWxlTmFtZTtcblxuICAgICAgICAgICAgICAvLyBUaGUgbGFzdCBtb2RpZmllZCBkYXRlIGlzIG5vdCBhY2N1cmF0ZSwgYnV0IGl0J3MgYmV0dGVyIHRoYW4gbm90aGluZy5cbiAgICAgICAgICAgICAgcmVzdWx0Lmxhc3RNb2RpZmllZCA9IGRhdGUuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICByZXN1bHQubGFzdE1vZGlmaWVkRGF0ZSA9IGRhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFJldHVybnMgb3JpZ2luYWwgZmlsZSBpZiB0aGUgcmVzdWx0IGlzIG51bGwgaW4gc29tZSBjYXNlcy5cbiAgICAgICAgICByZXN1bHQgPSBmaWxlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzdWx0ID0gcmVzdWx0O1xuICAgICAgICBpZiAob3B0aW9ucy5zdWNjZXNzKSB7XG4gICAgICAgICAgb3B0aW9ucy5zdWNjZXNzLmNhbGwodGhpcywgcmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJmYWlsXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZmFpbChlcnIpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGlmIChvcHRpb25zLmVycm9yKSB7XG4gICAgICAgICAgb3B0aW9ucy5lcnJvci5jYWxsKHRoaXMsIGVycik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImFib3J0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gYWJvcnQoKSB7XG4gICAgICAgIGlmICghdGhpcy5hYm9ydGVkKSB7XG4gICAgICAgICAgdGhpcy5hYm9ydGVkID0gdHJ1ZTtcbiAgICAgICAgICBpZiAodGhpcy5yZWFkZXIpIHtcbiAgICAgICAgICAgIHRoaXMucmVhZGVyLmFib3J0KCk7XG4gICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5pbWFnZS5jb21wbGV0ZSkge1xuICAgICAgICAgICAgdGhpcy5pbWFnZS5vbmxvYWQgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5pbWFnZS5vbmFib3J0KCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZmFpbChuZXcgRXJyb3IoJ1RoZSBjb21wcmVzc2lvbiBwcm9jZXNzIGhhcyBiZWVuIGFib3J0ZWQuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEdldCB0aGUgbm8gY29uZmxpY3QgY29tcHJlc3NvciBjbGFzcy5cbiAgICAgICAqIEByZXR1cm5zIHtDb21wcmVzc29yfSBUaGUgY29tcHJlc3NvciBjbGFzcy5cbiAgICAgICAqL1xuICAgIH1dLCBbe1xuICAgICAga2V5OiBcIm5vQ29uZmxpY3RcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBub0NvbmZsaWN0KCkge1xuICAgICAgICB3aW5kb3cuQ29tcHJlc3NvciA9IEFub3RoZXJDb21wcmVzc29yO1xuICAgICAgICByZXR1cm4gQ29tcHJlc3NvcjtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDaGFuZ2UgdGhlIGRlZmF1bHQgb3B0aW9ucy5cbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gVGhlIG5ldyBkZWZhdWx0IG9wdGlvbnMuXG4gICAgICAgKi9cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic2V0RGVmYXVsdHNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXREZWZhdWx0cyhvcHRpb25zKSB7XG4gICAgICAgIF9leHRlbmRzKERFRkFVTFRTLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XSk7XG4gIH0oKTtcblxuICByZXR1cm4gQ29tcHJlc3NvcjtcblxufSkpO1xuIiwgImltcG9ydCB7IE1hcmtkb3duVmlldywgTm90aWNlLCBQbGF0Zm9ybSwgUGx1Z2luLCBURmlsZSwgbm9ybWFsaXplUGF0aCB9IGZyb20gXCJvYnNpZGlhblwiO1xuaW1wb3J0IHsgREVGQVVMVF9TRVRUSU5HUywgQ2FtZXJhRW1iZWRTZXR0aW5ncywgQ2FtZXJhRW1iZWRTZXR0aW5nVGFiIH0gZnJvbSBcIi4vc2V0dGluZ3MuanNcIjtcbmltcG9ydCB7IGNvbXByZXNzSW1hZ2UgfSBmcm9tIFwiLi9jb21wcmVzc29yLmpzXCI7XG5pbXBvcnQgeyBidWlsZEZpbGVOYW1lLCBjcmVhdGVGb2xkZXJQYXRoLCBmb2xkZXJFeGlzdHMsIGdldEF2YWlsYWJsZVBhdGgsIGdldE1vbnRobHlGb2xkZXIsIGpvaW5QYXRoIH0gZnJvbSBcIi4vZmlsZS11dGlscy5qc1wiO1xuaW1wb3J0IHsgcGlja0ltYWdlcyB9IGZyb20gXCIuL2lucHV0LXV0aWxzLmpzXCI7XG5pbXBvcnQgeyBHYWxsZXJ5TW9kYWwgfSBmcm9tIFwiLi9nYWxsZXJ5LW1vZGFsLmpzXCI7XG5pbXBvcnQgeyBDYW1lcmFHYWxsZXJ5VmlldywgR0FMTEVSWV9WSUVXX1RZUEUgfSBmcm9tIFwiLi9nYWxsZXJ5LXZpZXcuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FtZXJhRW1iZWRQbHVnaW4gZXh0ZW5kcyBQbHVnaW4ge1xuICBzZXR0aW5nczogQ2FtZXJhRW1iZWRTZXR0aW5ncyA9IERFRkFVTFRfU0VUVElOR1M7XG5cbiAgYXN5bmMgb25sb2FkKCkge1xuICAgIGF3YWl0IHRoaXMubG9hZFNldHRpbmdzKCk7XG4gICAgdGhpcy5ub3JtYWxpemVHYWxsZXJ5U2V0dGluZ3MoKTtcbiAgICBhd2FpdCB0aGlzLnNhdmVTZXR0aW5ncygpO1xuICAgIHRoaXMuYWRkU2V0dGluZ1RhYihuZXcgQ2FtZXJhRW1iZWRTZXR0aW5nVGFiKHRoaXMuYXBwLCB0aGlzKSk7XG5cbiAgICBjb25zdCBpY29uYyA9IHRoaXMuc2V0dGluZ3MuZ2FsbGVyeUVuYWJsZWQgPyBcImltYWdlc1wiIDogXCJjYW1lcmFcIjtcblxuICAgIHRoaXMuYWRkUmliYm9uSWNvbihpY29uYywgXCJDYXB0dXJlIHBob3RvXCIsICgpID0+IHZvaWQgdGhpcy5jYXB0dXJlUGhvdG8oKSk7XG4gICAgdGhpcy5hZGRDb21tYW5kKHsgaWQ6IFwiY2FwdHVyZS1waG90by1lbWJlZFwiLCBuYW1lOiBcIkNhcHR1cmUgcGhvdG8gYW5kIGVtYmVkXCIsIGljb246IGljb25jLCBjYWxsYmFjazogKCkgPT4gdm9pZCB0aGlzLmNhcHR1cmVQaG90bygpIH0pO1xuICAgIGlmIChQbGF0Zm9ybS5pc0Rlc2t0b3ApIHtcbiAgICAgIHRoaXMucmVnaXN0ZXJWaWV3KEdBTExFUllfVklFV19UWVBFLCAobGVhZikgPT4gbmV3IENhbWVyYUdhbGxlcnlWaWV3KGxlYWYsIHRoaXMpKTtcbiAgICAgIHRoaXMuYWRkQ29tbWFuZCh7IGlkOiBcIm9wZW4tY2FtZXJhLWdhbGxlcnktc2lkZWJhclwiLCBuYW1lOiBcIk9wZW4gY2FtZXJhIGdhbGxlcnkgaW4gc2lkZWJhclwiLCBpY29uOiBcImltYWdlc1wiLCBjYWxsYmFjazogKCkgPT4gdm9pZCB0aGlzLm9wZW5HYWxsZXJ5U2lkZWJhcigpIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbm9ybWFsaXplR2FsbGVyeVNldHRpbmdzKCkge1xuICAgIGlmICh0aGlzLnNldHRpbmdzLmdhbGxlcnlFbmFibGVkKSB0aGlzLnNldHRpbmdzLnNhdmVOZWFyVGhlTm90ZSA9IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBjYXB0dXJlUGhvdG8oKSB7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuZ2FsbGVyeUVuYWJsZWQgJiYgdGhpcy5zZXR0aW5ncy5vcGVuR2FsbGVyeUluU2lkZWJhciAmJiBQbGF0Zm9ybS5pc0Rlc2t0b3ApIHZvaWQgdGhpcy5vcGVuR2FsbGVyeVNpZGViYXIoKTtcbiAgICBlbHNlIGlmICh0aGlzLnNldHRpbmdzLmdhbGxlcnlFbmFibGVkKSB0aGlzLm9wZW5HYWxsZXJ5KCk7XG4gICAgZWxzZSB2b2lkIHRoaXMuY2FwdHVyZURpcmVjdGx5KCk7XG4gIH1cblxuICBwcml2YXRlIG9wZW5HYWxsZXJ5KCkge1xuICAgIGNvbnN0IHZpZXcgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlVmlld09mVHlwZShNYXJrZG93blZpZXcpO1xuICAgIGlmICghdmlldz8uZmlsZSkge1xuICAgICAgbmV3IE5vdGljZShcIk9wZW4gYSBNYXJrZG93biBub3RlIGJlZm9yZSB1c2luZyB0aGUgY2FtZXJhIGdhbGxlcnkuXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBmb2xkZXIgPSB0aGlzLnNldHRpbmdzLnBob3Rvc0ZvbGRlci50cmltKCk7XG4gICAgaWYgKCFmb2xkZXIpIHtcbiAgICAgIG5ldyBOb3RpY2UoXCJTZXQgYSBwaG90b3MgZm9sZGVyIGluIGNhbWVyYSBlbWJlZCBzZXR0aW5ncyBiZWZvcmUgdXNpbmcgdGhlIGdhbGxlcnkuXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBuZXcgR2FsbGVyeU1vZGFsKHRoaXMuYXBwLCBmb2xkZXIsIHRoaXMuc2V0dGluZ3MuY3JlYXRlRm9sZGVySWZNaXNzaW5nLCB0aGlzLnNldHRpbmdzLm9yZ2FuaXplUGhvdG9zQnlNb250aCwgKGZpbGVzKSA9PiB7XG4gICAgICBpZiAoZmlsZXMubGVuZ3RoID4gMCkgdm9pZCB0aGlzLmVtYmVkVmF1bHRGaWxlcyhmaWxlcywgdmlldyk7XG4gICAgfSkub3BlbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjYXB0dXJlRGlyZWN0bHkoKSB7XG4gICAgY29uc3QgdmlldyA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1hcmtkb3duVmlldyk7XG4gICAgaWYgKCF2aWV3Py5maWxlKSB7XG4gICAgICBuZXcgTm90aWNlKFwiUGxlYXNlIG9wZW4gYSBNYXJrZG93biBub3RlIHRvIGluc2VydCB0aGUgcGhvdG8uXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBmaWxlcyA9IGF3YWl0IHBpY2tJbWFnZXMoXCJjYW1lcmFcIik7XG4gICAgaWYgKGZpbGVzLmxlbmd0aCA+IDApIGF3YWl0IHRoaXMuc2F2ZUFuZEVtYmVkKGZpbGVzLCB2aWV3KTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgZW1iZWRWYXVsdEZpbGVzKGZpbGVzOiBURmlsZVtdLCB2aWV3OiBNYXJrZG93blZpZXcpIHtcbiAgICBjb25zdCBhY3RpdmVGaWxlID0gdmlldy5maWxlO1xuICAgIGlmICghYWN0aXZlRmlsZSkgcmV0dXJuO1xuICAgIGNvbnN0IGxpbmtzID0gZmlsZXMubWFwKChmaWxlKSA9PiBgISR7dGhpcy5hcHAuZmlsZU1hbmFnZXIuZ2VuZXJhdGVNYXJrZG93bkxpbmsoZmlsZSwgYWN0aXZlRmlsZS5wYXRoKX1gKTtcbiAgICB2aWV3LmVkaXRvci5yZXBsYWNlU2VsZWN0aW9uKGxpbmtzLmpvaW4oXCJcXG5cIikpO1xuICB9XG5cbiAgZW1iZWRHYWxsZXJ5RmlsZXMoZmlsZXM6IFRGaWxlW10pIHtcbiAgICBjb25zdCBsZWFmID0gdGhpcy5hcHAud29ya3NwYWNlLmdldE1vc3RSZWNlbnRMZWFmKCk7XG4gICAgaWYgKCEobGVhZj8udmlldyBpbnN0YW5jZW9mIE1hcmtkb3duVmlldykpIHtcbiAgICAgIG5ldyBOb3RpY2UoXCJPcGVuIGEgTWFya2Rvd24gbm90ZSB0byBpbnNlcnQgdGhlIHNlbGVjdGVkIHBob3Rvcy5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZvaWQgdGhpcy5lbWJlZFZhdWx0RmlsZXMoZmlsZXMsIGxlYWYudmlldyk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIG9wZW5HYWxsZXJ5U2lkZWJhcigpIHtcbiAgICBjb25zdCBsZWFmID0gYXdhaXQgdGhpcy5hcHAud29ya3NwYWNlLmVuc3VyZVNpZGVMZWFmKEdBTExFUllfVklFV19UWVBFLCBcInJpZ2h0XCIsIHsgYWN0aXZlOiB0cnVlLCByZXZlYWw6IHRydWUgfSk7XG4gICAgYXdhaXQgdGhpcy5hcHAud29ya3NwYWNlLnJldmVhbExlYWYobGVhZik7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHNhdmVBbmRFbWJlZChmaWxlczogRmlsZVtdLCB2aWV3OiBNYXJrZG93blZpZXcpIHtcbiAgICBjb25zdCBhY3RpdmVGaWxlID0gdmlldy5maWxlO1xuICAgIGlmICghYWN0aXZlRmlsZSkgcmV0dXJuO1xuICAgIGNvbnN0IHRhcmdldEZvbGRlclBhdGggPSBhd2FpdCB0aGlzLmVuc3VyZVRhcmdldEZvbGRlcihhY3RpdmVGaWxlLnBhcmVudD8ucGF0aCk7XG4gICAgaWYgKHRhcmdldEZvbGRlclBhdGggPT09IG51bGwpIHJldHVybjtcbiAgICBjb25zdCBsaW5rczogc3RyaW5nW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICAgIGxldCBmaW5hbEZpbGU6IEJsb2IgfCBGaWxlID0gZmlsZTtcbiAgICAgIGlmICh0aGlzLnNldHRpbmdzLmNvbXByZXNzSW1hZ2VzKSBmaW5hbEZpbGUgPSBhd2FpdCBjb21wcmVzc0ltYWdlKGZpbGUsIHRoaXMuc2V0dGluZ3MuY29tcHJlc3NRdWFsaXR5KTtcbiAgICAgIGNvbnN0IHRhcmdldFBhdGggPSBnZXRBdmFpbGFibGVQYXRoKHRoaXMuYXBwLnZhdWx0LCBqb2luUGF0aCh0YXJnZXRGb2xkZXJQYXRoLCBidWlsZEZpbGVOYW1lKGZpbGUpKSk7XG4gICAgICBjb25zdCBjcmVhdGVkID0gYXdhaXQgdGhpcy5hcHAudmF1bHQuY3JlYXRlQmluYXJ5KHRhcmdldFBhdGgsIGF3YWl0IGZpbmFsRmlsZS5hcnJheUJ1ZmZlcigpKTtcbiAgICAgIGxpbmtzLnB1c2goYCEke3RoaXMuYXBwLmZpbGVNYW5hZ2VyLmdlbmVyYXRlTWFya2Rvd25MaW5rKGNyZWF0ZWQsIGFjdGl2ZUZpbGUucGF0aCl9YCk7XG4gICAgfVxuICAgIHZpZXcuZWRpdG9yLnJlcGxhY2VTZWxlY3Rpb24obGlua3Muam9pbihcIlxcblwiKSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGVuc3VyZVRhcmdldEZvbGRlcihub3RlRm9sZGVyUGF0aDogc3RyaW5nIHwgdW5kZWZpbmVkKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gICAgY29uc3QgcmF3ID0gdGhpcy5zZXR0aW5ncy5waG90b3NGb2xkZXIudHJpbSgpO1xuICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuc2V0dGluZ3Muc2F2ZU5lYXJUaGVOb3RlXG4gICAgICA/IChyYXcgPyAobm90ZUZvbGRlclBhdGggPyBgJHtub3RlRm9sZGVyUGF0aH0vJHtyYXd9YCA6IHJhdykgOiAobm90ZUZvbGRlclBhdGggPz8gXCJcIikpXG4gICAgICA6IHJhdztcbiAgICBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplUGF0aCh0aGlzLnNldHRpbmdzLm9yZ2FuaXplUGhvdG9zQnlNb250aCA/IGdldE1vbnRobHlGb2xkZXIodGFyZ2V0KSA6IHRhcmdldCk7XG4gICAgaWYgKG5vcm1hbGl6ZWQgPT09IFwiXCIpIHJldHVybiBcIlwiO1xuICAgIGlmIChmb2xkZXJFeGlzdHModGhpcy5hcHAudmF1bHQsIG5vcm1hbGl6ZWQpKSByZXR1cm4gbm9ybWFsaXplZDtcbiAgICBpZiAoIXRoaXMuc2V0dGluZ3MuY3JlYXRlRm9sZGVySWZNaXNzaW5nKSB7XG4gICAgICBuZXcgTm90aWNlKGBGb2xkZXIgbm90IGZvdW5kOiAke25vcm1hbGl6ZWR9YCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGNyZWF0ZUZvbGRlclBhdGgodGhpcy5hcHAudmF1bHQsIG5vcm1hbGl6ZWQpO1xuICAgICAgcmV0dXJuIG5vcm1hbGl6ZWQ7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJDYW1lcmEgRW1iZWQ6IGZhaWxlZCB0byBjcmVhdGUgZm9sZGVyXCIsIGVycm9yKTtcbiAgICAgIG5ldyBOb3RpY2UoYEZhaWxlZCB0byBjcmVhdGUgZm9sZGVyOiAke25vcm1hbGl6ZWR9YCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBhc3luYyBsb2FkU2V0dGluZ3MoKSB7XG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfU0VUVElOR1MsIGF3YWl0IHRoaXMubG9hZERhdGEoKSBhcyBQYXJ0aWFsPENhbWVyYUVtYmVkU2V0dGluZ3M+KTtcbiAgfVxuXG4gIGFzeW5jIHNhdmVTZXR0aW5ncygpIHsgYXdhaXQgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTsgfVxuXG59XG4iLCAiaW1wb3J0IHtBcHAsIFBsYXRmb3JtLCBQbHVnaW5TZXR0aW5nVGFifSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCBDYW1lcmFFbWJlZFBsdWdpbiBmcm9tIFwiLi9tYWluLmpzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FtZXJhRW1iZWRTZXR0aW5ncyB7XG4gIHBob3Rvc0ZvbGRlcjogc3RyaW5nO1xuICBjcmVhdGVGb2xkZXJJZk1pc3Npbmc6IGJvb2xlYW47XG4gIHNhdmVOZWFyVGhlTm90ZTogYm9vbGVhbjtcbiAgY29tcHJlc3NJbWFnZXM6IGJvb2xlYW47XG4gIGNvbXByZXNzUXVhbGl0eTogbnVtYmVyO1xuICBnYWxsZXJ5RW5hYmxlZDogYm9vbGVhbjtcbiAgb3BlbkdhbGxlcnlJblNpZGViYXI6IGJvb2xlYW47XG4gIG9yZ2FuaXplUGhvdG9zQnlNb250aDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfU0VUVElOR1M6IENhbWVyYUVtYmVkU2V0dGluZ3MgPSB7XG4gIHBob3Rvc0ZvbGRlcjogXCJwaG90b3NcIixcbiAgY3JlYXRlRm9sZGVySWZNaXNzaW5nOiB0cnVlLFxuICBzYXZlTmVhclRoZU5vdGU6IGZhbHNlLFxuICBjb21wcmVzc0ltYWdlczogZmFsc2UsXG4gIGNvbXByZXNzUXVhbGl0eTogMC44LFxuICBnYWxsZXJ5RW5hYmxlZDogZmFsc2UsXG4gIG9wZW5HYWxsZXJ5SW5TaWRlYmFyOiBmYWxzZSxcbiAgb3JnYW5pemVQaG90b3NCeU1vbnRoOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBjbGFzcyBDYW1lcmFFbWJlZFNldHRpbmdUYWIgZXh0ZW5kcyBQbHVnaW5TZXR0aW5nVGFiIHtcbiAgcGx1Z2luOiBDYW1lcmFFbWJlZFBsdWdpbjtcblxuICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBDYW1lcmFFbWJlZFBsdWdpbikge1xuICAgIHN1cGVyKGFwcCwgcGx1Z2luKTtcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgfVxuXG4gIGdldFNldHRpbmdEZWZpbml0aW9ucygpIHtcbiAgICByZXR1cm4gW1xuICAgICAge1xuICAgICAgICBuYW1lOiBcIlRoaXMgcGx1Z2luIGlzIHByaW1hcmlseSBkZXNpZ25lZCBmb3IgQW5kcm9pZC4gU29tZSBmZWF0dXJlcyBtYXkgYmUgbGltaXRlZCBvbiBvdGhlciBwbGF0Zm9ybXMuXCIsXG4gICAgICB9LFxuXG4gICAgICB7XG4gICAgICAgIHR5cGU6IFwiZ3JvdXBcIiBhcyBjb25zdCxcbiAgICAgICAgaGVhZGluZzogXCJHYWxsZXJ5XCIsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJFbmFibGUgZ2FsbGVyeVwiLFxuICAgICAgICAgICAgZGVzYzogXCJVc2UgdGhlIGdhbGxlcnkgaW5zdGVhZCBvZiB0YWtpbmcgYSBwaG90byBkaXJlY3RseS5cIixcbiAgICAgICAgICAgIGNvbnRyb2w6IHtcbiAgICAgICAgICAgICAgdHlwZTogXCJ0b2dnbGVcIiBhcyBjb25zdCxcbiAgICAgICAgICAgICAga2V5OiBcImdhbGxlcnlFbmFibGVkXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJPcGVuIGdhbGxlcnkgaW4gc2lkZWJhclwiLFxuICAgICAgICAgICAgZGVzYzogXCJPcGVuIHRoZSBnYWxsZXJ5IGluIHRoZSByaWdodCBzaWRlYmFyIHdoZW4gdXNpbmcgdGhlIGNhbWVyYSBidXR0b24uXCIsXG4gICAgICAgICAgICB2aXNpYmxlOiAoKSA9PiB0aGlzLnBsdWdpbi5zZXR0aW5ncy5nYWxsZXJ5RW5hYmxlZCAmJiAhUGxhdGZvcm0uaXNNb2JpbGUsXG4gICAgICAgICAgICBjb250cm9sOiB7XG4gICAgICAgICAgICAgIHR5cGU6IFwidG9nZ2xlXCIgYXMgY29uc3QsXG4gICAgICAgICAgICAgIGtleTogXCJvcGVuR2FsbGVyeUluU2lkZWJhclwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcblxuICAgICAge1xuICAgICAgICB0eXBlOiBcImdyb3VwXCIgYXMgY29uc3QsXG4gICAgICAgIGhlYWRpbmc6IFwiUGhvdG8gc3RvcmFnZVwiLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiUGhvdG9zIGZvbGRlclwiLFxuICAgICAgICAgICAgZGVzYzogXCJGb2xkZXIgdXNlZCB0byBzdG9yZSBwaG90b3MuXCIsXG4gICAgICAgICAgICBjb250cm9sOiB7XG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiIGFzIGNvbnN0LFxuICAgICAgICAgICAgICBrZXk6IFwicGhvdG9zRm9sZGVyXCIsXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcInBob3Rvc1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiT3JnYW5pemUgcGhvdG9zIGJ5IG1vbnRoXCIsXG4gICAgICAgICAgICBkZXNjOiBcIlNhdmUgcGhvdG9zIGluIHllYXIgYW5kIG1vbnRoIGZvbGRlcnMuXCIsXG4gICAgICAgICAgICBjb250cm9sOiB7XG4gICAgICAgICAgICAgIHR5cGU6IFwidG9nZ2xlXCIgYXMgY29uc3QsXG4gICAgICAgICAgICAgIGtleTogXCJvcmdhbml6ZVBob3Rvc0J5TW9udGhcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIkNyZWF0ZSBmb2xkZXIgaWYgbWlzc2luZ1wiLFxuICAgICAgICAgICAgZGVzYzogXCJDcmVhdGUgdGhlIHBob3RvcyBmb2xkZXIgYXV0b21hdGljYWxseSB3aGVuIG5lZWRlZC5cIixcbiAgICAgICAgICAgIGNvbnRyb2w6IHtcbiAgICAgICAgICAgICAgdHlwZTogXCJ0b2dnbGVcIiBhcyBjb25zdCxcbiAgICAgICAgICAgICAga2V5OiBcImNyZWF0ZUZvbGRlcklmTWlzc2luZ1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiU2F2ZSBuZWFyIHRoZSBub3RlXCIsXG4gICAgICAgICAgICBkZXNjOiBcIlNhdmUgY2FtZXJhIHBob3RvcyBiZXNpZGUgdGhlIGN1cnJlbnQgbm90ZS5cIixcbiAgICAgICAgICAgIHZpc2libGU6ICgpID0+ICF0aGlzLnBsdWdpbi5zZXR0aW5ncy5nYWxsZXJ5RW5hYmxlZCxcbiAgICAgICAgICAgIGNvbnRyb2w6IHtcbiAgICAgICAgICAgICAgdHlwZTogXCJ0b2dnbGVcIiBhcyBjb25zdCxcbiAgICAgICAgICAgICAga2V5OiBcInNhdmVOZWFyVGhlTm90ZVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcblxuICAgICAge1xuICAgICAgICB0eXBlOiBcImdyb3VwXCIgYXMgY29uc3QsXG4gICAgICAgIGhlYWRpbmc6IFwiSW1hZ2UgY29tcHJlc3Npb25cIixcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIkNvbXByZXNzIGltYWdlc1wiLFxuICAgICAgICAgICAgZGVzYzogXCJSZWR1Y2UgcGhvdG8gZmlsZSBzaXplcyBiZWZvcmUgc2F2aW5nLlwiLFxuICAgICAgICAgICAgY29udHJvbDoge1xuICAgICAgICAgICAgICB0eXBlOiBcInRvZ2dsZVwiIGFzIGNvbnN0LFxuICAgICAgICAgICAgICBrZXk6IFwiY29tcHJlc3NJbWFnZXNcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIkNvbXByZXNzaW9uIHF1YWxpdHlcIixcbiAgICAgICAgICAgIGRlc2M6IFwiTG93ZXIgdmFsdWVzIGNyZWF0ZSBzbWFsbGVyIGZpbGVzIHdpdGggbG93ZXIgaW1hZ2UgcXVhbGl0eS5cIixcbiAgICAgICAgICAgIHZpc2libGU6ICgpID0+IHRoaXMucGx1Z2luLnNldHRpbmdzLmNvbXByZXNzSW1hZ2VzLFxuICAgICAgICAgICAgY29udHJvbDoge1xuICAgICAgICAgICAgICB0eXBlOiBcInNsaWRlclwiIGFzIGNvbnN0LFxuICAgICAgICAgICAgICBrZXk6IFwiY29tcHJlc3NRdWFsaXR5XCIsXG4gICAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgICAgbWF4OiAwLjksXG4gICAgICAgICAgICAgIHN0ZXA6IDAuMDUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIF07XG4gIH1cbn0iLCAiaW1wb3J0IENvbXByZXNzb3IgZnJvbSBcImNvbXByZXNzb3Jqc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY29tcHJlc3NJbWFnZShmaWxlOiBGaWxlLCBxdWFsaXR5OiBudW1iZXIpOiBQcm9taXNlPEJsb2I+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbmV3IENvbXByZXNzb3IoZmlsZSwge1xuICAgICAgICBxdWFsaXR5LFxuICAgICAgICBtYXhXaWR0aDogMTkyMCxcbiAgICAgICAgbWF4SGVpZ2h0OiAxMDgwLFxuICAgICAgICBjb252ZXJ0U2l6ZTogMCxcbiAgICAgICAgc3VjY2VzczogcmVzb2x2ZSxcbiAgICAgICAgZXJyb3I6IHJlamVjdCxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9IiwgImltcG9ydCB7VEZvbGRlciwgVmF1bHR9IGZyb20gXCJvYnNpZGlhblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRGaWxlTmFtZShmaWxlOiBGaWxlKTogc3RyaW5nIHtcbiAgICAvLyBVc2UgYW4gSVNPIHRpbWVzdGFtcCB0byBrZWVwIGZpbGVuYW1lcyBzb3J0YWJsZS5cbiAgICBjb25zdCBzdGFtcCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5yZXBsYWNlKC9bOi5dL2csIFwiLVwiKTtcbiAgICBjb25zdCBmYWxsYmFja0V4dCA9IGV4dGVuc2lvbkZyb21UeXBlKGZpbGUudHlwZSkgPz8gXCJqcGdcIjtcbiAgICBjb25zdCBleHQgPSBleHRlbnNpb25Gcm9tTmFtZShmaWxlLm5hbWUpID8/IGZhbGxiYWNrRXh0O1xuICAgIHJldHVybiBgcGhvdG8tJHtzdGFtcH0uJHtleHR9YDtcbiAgfVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5zaW9uRnJvbU5hbWUobmFtZTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gIGNvbnN0IG1hdGNoID0gbmFtZS5tYXRjaCgvXFwuKFthLXpBLVowLTldKykkLyk7XG4gIHJldHVybiBtYXRjaD8uWzFdID8/IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRlbnNpb25Gcm9tVHlwZShtaW1lVHlwZTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gIGlmICghbWltZVR5cGUuc3RhcnRzV2l0aChcImltYWdlL1wiKSkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IHN1YnR5cGUgPSBtaW1lVHlwZS5zcGxpdChcIi9cIilbMV07XG4gIGlmICghc3VidHlwZSkgcmV0dXJuIG51bGw7XG4gIHJldHVybiBzdWJ0eXBlLnJlcGxhY2UoXCJqcGVnXCIsIFwianBnXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gam9pblBhdGgocGFyZW50UGF0aDogc3RyaW5nIHwgbnVsbCwgZmlsZU5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmICghcGFyZW50UGF0aCkgcmV0dXJuIGZpbGVOYW1lOyAvLyBwYXJlbnRQYXRoIGlzIGVtcHR5IHN0cmluZyBcdTIxOTIgdmF1bHQgcm9vdFxuICByZXR1cm4gYCR7cGFyZW50UGF0aH0vJHtmaWxlTmFtZX1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW9udGhseUZvbGRlcihwYXJlbnRQYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBbeWVhciwgbW9udGhdID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDcpLnNwbGl0KFwiLVwiKTtcbiAgaWYgKCF5ZWFyIHx8ICFtb250aCkgcmV0dXJuIHBhcmVudFBhdGg7XG4gIHJldHVybiBqb2luUGF0aChqb2luUGF0aChwYXJlbnRQYXRoLCB5ZWFyKSwgbW9udGgpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRm9sZGVyUGF0aCh2YXVsdDogVmF1bHQsIHBhdGg6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICBsZXQgY3VycmVudFBhdGggPSBcIlwiO1xuICBmb3IgKGNvbnN0IHNlZ21lbnQgb2YgcGF0aC5zcGxpdChcIi9cIikuZmlsdGVyKEJvb2xlYW4pKSB7XG4gICAgY3VycmVudFBhdGggPSBqb2luUGF0aChjdXJyZW50UGF0aCwgc2VnbWVudCk7XG4gICAgY29uc3QgZXhpc3RpbmcgPSB2YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoY3VycmVudFBhdGgpO1xuICAgIGlmIChleGlzdGluZyBpbnN0YW5jZW9mIFRGb2xkZXIpIGNvbnRpbnVlO1xuICAgIGlmIChleGlzdGluZykgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgY3JlYXRlIGZvbGRlciBiZWNhdXNlIGEgZmlsZSBleGlzdHMgYXQgJHtjdXJyZW50UGF0aH1gKTtcbiAgICBhd2FpdCB2YXVsdC5jcmVhdGVGb2xkZXIoY3VycmVudFBhdGgpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBdmFpbGFibGVQYXRoKHZhdWx0OiBWYXVsdCwgcGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gQXZvaWQgb3ZlcndyaXRpbmcgZXhpc3RpbmcgZmlsZXMgYnkgYWRkaW5nIGEgc3VmZml4LlxuICBpZiAoIXZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChwYXRoKSkgcmV0dXJuIHBhdGg7XG5cbiAgY29uc3QgcGFydHMgPSBwYXRoLnNwbGl0KFwiL1wiKTtcbiAgY29uc3QgbmFtZSA9IHBhcnRzLnBvcCgpID8/IHBhdGg7XG4gIGNvbnN0IGRpciA9IHBhcnRzLmxlbmd0aCA+IDAgPyBgJHtwYXJ0cy5qb2luKFwiL1wiKX0vYCA6IFwiXCI7XG4gIGNvbnN0IGV4dEluZGV4ID0gbmFtZS5sYXN0SW5kZXhPZihcIi5cIik7XG4gIGNvbnN0IGJhc2UgPSBleHRJbmRleCA9PT0gLTEgPyBuYW1lIDogbmFtZS5zbGljZSgwLCBleHRJbmRleCk7XG4gIGNvbnN0IGV4dCA9IGV4dEluZGV4ID09PSAtMSA/IFwiXCIgOiBuYW1lLnNsaWNlKGV4dEluZGV4KTtcblxuICBmb3IgKGxldCBpID0gMTsgaSA8IDEwMDA7IGkrKykge1xuICAgIGNvbnN0IGNhbmRpZGF0ZSA9IGAke2Rpcn0ke2Jhc2V9LSR7aX0ke2V4dH1gO1xuICAgIGlmICghdmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGNhbmRpZGF0ZSkpIHJldHVybiBjYW5kaWRhdGU7XG4gIH1cbiAgcmV0dXJuIGAke2Rpcn0ke2Jhc2V9LSR7RGF0ZS5ub3coKX0ke2V4dH1gO1xufVxuXG4vKiogSGVscGVyIHRvIGNoZWNrIGlmIGEgZm9sZGVyIGV4aXN0cyBhdCB0aGUgZ2l2ZW4gcGF0aC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb2xkZXJFeGlzdHModmF1bHQ6IFZhdWx0LCBwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgY29uc3QgZmlsZSA9IHZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChwYXRoKTtcbiAgcmV0dXJuIGZpbGUgaW5zdGFuY2VvZiBURm9sZGVyO1xufVxuIiwgImV4cG9ydCBhc3luYyBmdW5jdGlvbiBwaWNrSW1hZ2VGcm9tQ2FtZXJhKHNvdXJjZTogc3RyaW5nID0gXCJnYWxsZXJ5XCIpOiBQcm9taXNlPEZpbGUgfCBudWxsPiB7XG4gIGNvbnN0IGZpbGVzID0gYXdhaXQgcGlja0ltYWdlcyhzb3VyY2UpO1xuICByZXR1cm4gZmlsZXNbMF0gPz8gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBpY2tJbWFnZXMoc291cmNlOiBzdHJpbmcgPSBcImdhbGxlcnlcIik6IFByb21pc2U8RmlsZVtdPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuYm9keS5jcmVhdGVFbChcImlucHV0XCIsIHsgY2xzOiBcImNhbWVyYS1oaWRkZW5cIiwgdHlwZTogXCJmaWxlXCIgfSk7XG4gICAgaW5wdXQuYWNjZXB0ID0gXCJpbWFnZS8qXCI7XG4gICAgaW5wdXQubXVsdGlwbGUgPSBzb3VyY2UgIT09IFwiY2FtZXJhXCI7XG4gICAgaWYgKHNvdXJjZSA9PT0gXCJjYW1lcmFcIikgaW5wdXQuc2V0QXR0cmlidXRlKFwiY2FwdHVyZVwiLCBcImVudmlyb25tZW50XCIpO1xuXG4gICAgY29uc3QgdGltZW91dElkID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaW5wdXQucmVtb3ZlKCk7XG4gICAgICByZXNvbHZlKFtdKTtcbiAgICB9LCA2MF8wMDApO1xuXG4gICAgY29uc3QgY2xlYW51cCA9IChmaWxlczogRmlsZVtdKSA9PiB7XG4gICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgICBpbnB1dC5yZW1vdmUoKTtcbiAgICAgIHJlc29sdmUoZmlsZXMpO1xuICAgIH07XG5cbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IGZpbGVzID0gaW5wdXQuZmlsZXM7XG4gICAgICBjbGVhbnVwKGZpbGVzID8gQXJyYXkuZnJvbShmaWxlcykgOiBbXSk7XG4gICAgfSk7XG5cbiAgICBpbnB1dC5jbGljaygpO1xuICB9KTtcbn1cbiIsICJpbXBvcnQge0FwcCwgTW9kYWwsIE5vdGljZSwgVEZpbGUsIHNldEljb24sIFBsYXRmb3JtfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCB7IGNyZWF0ZUZvbGRlclBhdGgsIGdldE1vbnRobHlGb2xkZXIgfSBmcm9tIFwiLi9maWxlLXV0aWxzLmpzXCI7XG5cbmNvbnN0IElNQUdFX0VYVEVOU0lPTlMgPSBuZXcgU2V0KFtcImpwZ1wiLCBcImpwZWdcIiwgXCJwbmdcIiwgXCJnaWZcIiwgXCJ3ZWJwXCIsIFwiYm1wXCIsIFwic3ZnXCIsIFwiYXZpZlwiXSk7XG5cbmV4cG9ydCBjbGFzcyBHYWxsZXJ5TW9kYWwgZXh0ZW5kcyBNb2RhbCB7XG4gIHByaXZhdGUgcmVhZG9ubHkgb25DaG9vc2U6IChmaWxlczogVEZpbGVbXSkgPT4gdm9pZDtcbiAgcHJpdmF0ZSByZWFkb25seSBwaG90b3NGb2xkZXI6IHN0cmluZztcbiAgcHJpdmF0ZSByZWFkb25seSBjcmVhdGVGb2xkZXJJZk1pc3Npbmc6IGJvb2xlYW47XG4gIHByaXZhdGUgcmVhZG9ubHkgb3JnYW5pemVQaG90b3NCeU1vbnRoOiBib29sZWFuO1xuICBwcml2YXRlIHJlYWRvbmx5IGNsb3NlT25DaG9vc2U6IGJvb2xlYW47XG4gIHByaXZhdGUgaXRlbXM6IFRGaWxlW10gPSBbXTtcbiAgcHJpdmF0ZSBzZWxlY3RlZCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBwcml2YXRlIGdyaWQhOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBzZWxlY3Rpb25MYWJlbCE6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIHN0YXR1cyE6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIHVzZUJ1dHRvbiE6IEhUTUxCdXR0b25FbGVtZW50O1xuICBwcml2YXRlIGRlbGV0ZUJ1dHRvbiE6IEhUTUxCdXR0b25FbGVtZW50O1xuICBwcml2YXRlIHByZXZpZXdCdXR0b24hOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgcHJpdmF0ZSBzY2FuSWQgPSAwO1xuICBwcml2YXRlIG9wZW5lZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKGFwcDogQXBwLCBwaG90b3NGb2xkZXI6IHN0cmluZywgY3JlYXRlRm9sZGVySWZNaXNzaW5nOiBib29sZWFuLCBvcmdhbml6ZVBob3Rvc0J5TW9udGg6IGJvb2xlYW4sIG9uQ2hvb3NlOiAoZmlsZXM6IFRGaWxlW10pID0+IHZvaWQsIGNsb3NlT25DaG9vc2UgPSB0cnVlKSB7XG4gICAgc3VwZXIoYXBwKTtcbiAgICB0aGlzLnBob3Rvc0ZvbGRlciA9IHBob3Rvc0ZvbGRlci50cmltKCk7XG4gICAgdGhpcy5jcmVhdGVGb2xkZXJJZk1pc3NpbmcgPSBjcmVhdGVGb2xkZXJJZk1pc3Npbmc7XG4gICAgdGhpcy5vcmdhbml6ZVBob3Rvc0J5TW9udGggPSBvcmdhbml6ZVBob3Rvc0J5TW9udGg7XG4gICAgdGhpcy5vbkNob29zZSA9IG9uQ2hvb3NlO1xuICAgIHRoaXMuY2xvc2VPbkNob29zZSA9IGNsb3NlT25DaG9vc2U7XG4gIH1cblxuICBtb3VudChjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5vbk9wZW4oKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250ZW50RWwpO1xuICB9XG5cbiAgdW5tb3VudCgpIHsgdGhpcy5vbkNsb3NlKCk7IH1cblxuICBvbk9wZW4oKSB7XG4gICAgdGhpcy5vcGVuZWQgPSB0cnVlO1xuICAgIHRoaXMubW9kYWxFbC5hZGRDbGFzcyhcImNhbWVyYS1nYWxsZXJ5LW1vZGFsLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCB7IGNvbnRlbnRFbCB9ID0gdGhpcztcbiAgICBjb250ZW50RWwuYWRkQ2xhc3MoXCJjYW1lcmEtZ2FsbGVyeS1tb2RhbFwiKTtcbiAgICBjb25zdCBoZWFkZXIgPSBjb250ZW50RWwuY3JlYXRlRGl2KHsgY2xzOiBcImNhbWVyYS1nYWxsZXJ5LWhlYWRlclwiIH0pO1xuICAgIGNvbnN0IHRpdGxlID0gaGVhZGVyLmNyZWF0ZURpdih7IGNsczogXCJjYW1lcmEtZ2FsbGVyeS10aXRsZVwiIH0pO1xuICAgIHNldEljb24odGl0bGUsIFwiaW1hZ2VzXCIpO1xuICAgIHRpdGxlLmNyZWF0ZVNwYW4oeyB0ZXh0OiBcIkdhbGxlcnlcIiB9KTtcbiAgICB0aGlzLnNlbGVjdGlvbkxhYmVsID0gaGVhZGVyLmNyZWF0ZURpdih7IGNsczogXCJjYW1lcmEtZ2FsbGVyeS1zZWxlY3Rpb25cIiB9KTtcbiAgICBjb25zdCB0b29sYmFyID0gY29udGVudEVsLmNyZWF0ZURpdih7IGNsczogXCJjYW1lcmEtZ2FsbGVyeS10b29sYmFyXCIgfSk7XG4gICAgaWYgKFBsYXRmb3JtLmlzTW9iaWxlKSB7XG4gICAgICBjb25zdCB0YWtlID0gdG9vbGJhci5jcmVhdGVFbChcImJ1dHRvblwiLCB7IGNsczogXCJtb2QtY3RhXCIgfSk7XG4gICAgICBzZXRJY29uKHRha2UsIFwiY2FtZXJhXCIpO1xuICAgICAgdGFrZS5jcmVhdGVTcGFuKHsgdGV4dDogXCJUYWtlIHBob3RvIHRvIGdhbGxlcnlcIiB9KTtcbiAgICAgIHRha2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHZvaWQgdGhpcy50YWtlUGhvdG8oKSk7XG4gICAgfVxuICAgIGNvbnN0IHVwbG9hZCA9IHRvb2xiYXIuY3JlYXRlRWwoXCJidXR0b25cIiwgeyBjbHM6IFwiY2FtZXJhLWdhbGxlcnktdXBsb2FkXCIgfSk7XG4gICAgc2V0SWNvbih1cGxvYWQsIFwidXBsb2FkXCIpO1xuICAgIHVwbG9hZC5jcmVhdGVTcGFuKHsgdGV4dDogXCJVcGxvYWQgdG8gZ2FsbGVyeVwiIH0pO1xuICAgIHVwbG9hZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdm9pZCB0aGlzLnVwbG9hZFRvR2FsbGVyeSgpKTtcbiAgICB0aGlzLnN0YXR1cyA9IGNvbnRlbnRFbC5jcmVhdGVEaXYoeyBjbHM6IFwiY2FtZXJhLWdhbGxlcnktc3RhdHVzXCIgfSk7XG4gICAgdGhpcy5ncmlkID0gY29udGVudEVsLmNyZWF0ZURpdih7IGNsczogXCJjYW1lcmEtZ2FsbGVyeS1ncmlkXCIgfSk7XG4gICAgY29uc3QgZm9vdGVyID0gY29udGVudEVsLmNyZWF0ZURpdih7IGNsczogXCJjYW1lcmEtZ2FsbGVyeS1mb290ZXJcIiB9KTtcbiAgICB0aGlzLmRlbGV0ZUJ1dHRvbiA9IGZvb3Rlci5jcmVhdGVFbChcImJ1dHRvblwiLCB7IHRleHQ6IFwiRGVsZXRlXCIsIGNsczogXCJjYW1lcmEtZ2FsbGVyeS1kZWxldGVcIiB9KTtcbiAgICB0aGlzLmRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdm9pZCB0aGlzLmRlbGV0ZVNlbGVjdGVkKCkpO1xuICAgIHRoaXMucHJldmlld0J1dHRvbiA9IGZvb3Rlci5jcmVhdGVFbChcImJ1dHRvblwiLCB7IHRleHQ6IFwiUHJldmlld1wiLCBjbHM6IFwiY2FtZXJhLWdhbGxlcnktcHJldmlld1wiIH0pO1xuICAgIHRoaXMucHJldmlld0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5wcmV2aWV3U2VsZWN0ZWQoKSk7XG4gICAgdGhpcy51c2VCdXR0b24gPSBmb290ZXIuY3JlYXRlRWwoXCJidXR0b25cIiwgeyB0ZXh0OiBcIlVzZSBpdFwiLCBjbHM6IFwibW9kLWN0YVwiIH0pO1xuICAgIHRoaXMudXNlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLnVzZVNlbGVjdGVkKCkpO1xuICAgIHRoaXMuc2V0QWN0aW9uQnV0dG9uc1Zpc2libGUoZmFsc2UpO1xuICAgIHZvaWQgdGhpcy5zY2FuVmF1bHQoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgc2NhblZhdWx0KCkge1xuICAgIGNvbnN0IGN1cnJlbnRTY2FuID0gKyt0aGlzLnNjYW5JZDtcbiAgICB0aGlzLnN0YXR1cy5zZXRUZXh0KFwiU2Nhbm5pbmcgdmF1bHRcdTIwMjZcIik7XG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmFwcC52YXVsdC5nZXRGaWxlcygpLmZpbHRlcigoZmlsZSkgPT4gSU1BR0VfRVhURU5TSU9OUy5oYXMoZmlsZS5leHRlbnNpb24udG9Mb3dlckNhc2UoKSkpLnNvcnQoKGEsIGIpID0+IGIuc3RhdC5tdGltZSAtIGEuc3RhdC5tdGltZSk7XG4gICAgY29uc3QgcGF0aHMgPSBuZXcgU2V0KGZpbGVzLm1hcCgoZmlsZSkgPT4gZmlsZS5wYXRoKSk7XG4gICAgdGhpcy5zZWxlY3RlZC5mb3JFYWNoKChwYXRoKSA9PiB7IGlmICghcGF0aHMuaGFzKHBhdGgpKSB0aGlzLnNlbGVjdGVkLmRlbGV0ZShwYXRoKTsgfSk7XG4gICAgdGhpcy5ncmlkLmVtcHR5KCk7XG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIHRoaXMudXBkYXRlU2VsZWN0aW9uKCk7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGZpbGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgaWYgKGN1cnJlbnRTY2FuICE9PSB0aGlzLnNjYW5JZCB8fCAhdGhpcy5vcGVuZWQpIHJldHVybjtcbiAgICAgIGNvbnN0IGZpbGUgPSBmaWxlc1tpbmRleF07XG4gICAgICBpZiAoIWZpbGUpIGNvbnRpbnVlO1xuICAgICAgdGhpcy5pdGVtcy5wdXNoKGZpbGUpO1xuICAgICAgdGhpcy5yZW5kZXJJdGVtKGZpbGUpO1xuICAgICAgaWYgKGluZGV4ID4gMCAmJiBpbmRleCAlIDEwMCA9PT0gMCkge1xuICAgICAgICB0aGlzLnN0YXR1cy5zZXRUZXh0KGBTY2FubmluZ1x1MjAyNiAke2luZGV4LnRvTG9jYWxlU3RyaW5nKCl9IGltYWdlc2ApO1xuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4gd2luZG93LnNldFRpbWVvdXQocmVzb2x2ZSwgMCkpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY3VycmVudFNjYW4gPT09IHRoaXMuc2NhbklkICYmIHRoaXMub3BlbmVkKSB0aGlzLnN0YXR1cy5zZXRUZXh0KGAke3RoaXMuaXRlbXMubGVuZ3RoLnRvTG9jYWxlU3RyaW5nKCl9IHBob3Rvc2ApO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJJdGVtKGZpbGU6IFRGaWxlKSB7XG4gICAgY29uc3QgaXRlbSA9IHRoaXMuZ3JpZC5jcmVhdGVEaXYoeyBjbHM6IFwiY2FtZXJhLWdhbGxlcnktaXRlbVwiIH0pO1xuICAgIGl0ZW0uZGF0YXNldC5wYXRoID0gZmlsZS5wYXRoO1xuICAgIGNvbnN0IGltYWdlID0gaXRlbS5jcmVhdGVFbChcImltZ1wiLCB7IGNsczogXCJjYW1lcmEtZ2FsbGVyeS10aHVtYm5haWxcIiB9KTtcbiAgICBpbWFnZS5zcmMgPSB0aGlzLmFwcC52YXVsdC5nZXRSZXNvdXJjZVBhdGgoZmlsZSk7XG4gICAgaW1hZ2UuYWx0ID0gZmlsZS5wYXRoO1xuICAgIGltYWdlLmxvYWRpbmcgPSBcImxhenlcIjtcbiAgICBjb25zdCBiYWRnZSA9IGl0ZW0uY3JlYXRlRGl2KHsgY2xzOiBcImNhbWVyYS1nYWxsZXJ5LWJhZGdlXCIgfSk7XG4gICAgaXRlbS5jcmVhdGVEaXYoeyBjbHM6IFwiY2FtZXJhLWdhbGxlcnktbmFtZVwiLCB0ZXh0OiBmaWxlLm5hbWUgfSk7XG4gICAgdGhpcy51cGRhdGVJdGVtU2VsZWN0aW9uKGl0ZW0sIGJhZGdlLCBmaWxlLnBhdGgpO1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkLmhhcyhmaWxlLnBhdGgpKSB0aGlzLnNlbGVjdGVkLmRlbGV0ZShmaWxlLnBhdGgpOyBlbHNlIHRoaXMuc2VsZWN0ZWQuYWRkKGZpbGUucGF0aCk7XG4gICAgICB0aGlzLnVwZGF0ZUl0ZW1TZWxlY3Rpb24oaXRlbSwgYmFkZ2UsIGZpbGUucGF0aCk7XG4gICAgICB0aGlzLnVwZGF0ZVNlbGVjdGlvbigpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRTYXZlZEZpbGUoZmlsZTogVEZpbGUpIHtcbiAgICBpZiAoIUlNQUdFX0VYVEVOU0lPTlMuaGFzKGZpbGUuZXh0ZW5zaW9uLnRvTG93ZXJDYXNlKCkpIHx8IHRoaXMuaXRlbXMuc29tZSgoaXRlbSkgPT4gaXRlbS5wYXRoID09PSBmaWxlLnBhdGgpKSByZXR1cm47XG4gICAgdGhpcy5pdGVtcy51bnNoaWZ0KGZpbGUpO1xuICAgIHRoaXMucmVuZGVySXRlbUF0VG9wKGZpbGUpO1xuICAgIHRoaXMuc3RhdHVzLnNldFRleHQoYCR7dGhpcy5pdGVtcy5sZW5ndGgudG9Mb2NhbGVTdHJpbmcoKX0gcGhvdG9zYCk7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlckl0ZW1BdFRvcChmaWxlOiBURmlsZSkge1xuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmdyaWQuY3JlYXRlRGl2KHsgY2xzOiBcImNhbWVyYS1nYWxsZXJ5LWl0ZW1cIiB9KTtcbiAgICBpdGVtLmRhdGFzZXQucGF0aCA9IGZpbGUucGF0aDtcbiAgICBjb25zdCBpbWFnZSA9IGl0ZW0uY3JlYXRlRWwoXCJpbWdcIiwgeyBjbHM6IFwiY2FtZXJhLWdhbGxlcnktdGh1bWJuYWlsXCIgfSk7XG4gICAgaW1hZ2Uuc3JjID0gdGhpcy5hcHAudmF1bHQuZ2V0UmVzb3VyY2VQYXRoKGZpbGUpO1xuICAgIGltYWdlLmFsdCA9IGZpbGUucGF0aDtcbiAgICBpbWFnZS5sb2FkaW5nID0gXCJlYWdlclwiO1xuICAgIGNvbnN0IGJhZGdlID0gaXRlbS5jcmVhdGVEaXYoeyBjbHM6IFwiY2FtZXJhLWdhbGxlcnktYmFkZ2VcIiB9KTtcbiAgICBpdGVtLmNyZWF0ZURpdih7IGNsczogXCJjYW1lcmEtZ2FsbGVyeS1uYW1lXCIsIHRleHQ6IGZpbGUubmFtZSB9KTtcbiAgICB0aGlzLnVwZGF0ZUl0ZW1TZWxlY3Rpb24oaXRlbSwgYmFkZ2UsIGZpbGUucGF0aCk7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQuaGFzKGZpbGUucGF0aCkpIHRoaXMuc2VsZWN0ZWQuZGVsZXRlKGZpbGUucGF0aCk7IGVsc2UgdGhpcy5zZWxlY3RlZC5hZGQoZmlsZS5wYXRoKTtcbiAgICAgIHRoaXMudXBkYXRlSXRlbVNlbGVjdGlvbihpdGVtLCBiYWRnZSwgZmlsZS5wYXRoKTtcbiAgICAgIHRoaXMudXBkYXRlU2VsZWN0aW9uKCk7XG4gICAgfSk7XG4gICAgdGhpcy5ncmlkLnByZXBlbmQoaXRlbSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUl0ZW1TZWxlY3Rpb24oaXRlbTogSFRNTEVsZW1lbnQsIGJhZGdlOiBIVE1MRWxlbWVudCwgcGF0aDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkLmhhcyhwYXRoKTtcbiAgICBpdGVtLnRvZ2dsZUNsYXNzKFwiaXMtc2VsZWN0ZWRcIiwgc2VsZWN0ZWQpO1xuICAgIGJhZGdlLnRleHRDb250ZW50ID0gc2VsZWN0ZWQgPyBTdHJpbmcodGhpcy5nZXRTZWxlY3Rpb25OdW1iZXIocGF0aCkpIDogXCJcIjtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2VsZWN0aW9uTnVtYmVyKHBhdGg6IHN0cmluZyk6IG51bWJlciB7XG4gICAgbGV0IG51bWJlciA9IDA7XG4gICAgZm9yIChjb25zdCBzZWxlY3RlZFBhdGggb2YgdGhpcy5zZWxlY3RlZCkgeyBudW1iZXIrKzsgaWYgKHNlbGVjdGVkUGF0aCA9PT0gcGF0aCkgcmV0dXJuIG51bWJlcjsgfVxuICAgIHJldHVybiAwO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRBY3Rpb25CdXR0b25zVmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKSB7XG4gICAgdGhpcy51c2VCdXR0b24udG9nZ2xlVmlzaWJpbGl0eSh2aXNpYmxlKTtcbiAgICB0aGlzLmRlbGV0ZUJ1dHRvbi50b2dnbGVWaXNpYmlsaXR5KHZpc2libGUpO1xuICAgIHRoaXMucHJldmlld0J1dHRvbi50b2dnbGVWaXNpYmlsaXR5KHRoaXMuc2VsZWN0ZWQuc2l6ZSA9PT0gMSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVNlbGVjdGlvbigpIHtcbiAgICBjb25zdCBjb3VudCA9IHRoaXMuc2VsZWN0ZWQuc2l6ZTtcbiAgICB0aGlzLnNlbGVjdGlvbkxhYmVsLnNldFRleHQoY291bnQgPT09IDAgPyBcIlNlbGVjdCBwaG90b3NcIiA6IGAke2NvdW50fSBzZWxlY3RlZGApO1xuICAgIHRoaXMuc2V0QWN0aW9uQnV0dG9uc1Zpc2libGUoY291bnQgPiAwKTtcbiAgfVxuXG4gIHByaXZhdGUgdXNlU2VsZWN0ZWQoKSB7XG4gICAgY29uc3QgZmlsZXM6IFRGaWxlW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IHBhdGggb2YgdGhpcy5zZWxlY3RlZCkge1xuICAgICAgY29uc3QgZmlsZSA9IHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChwYXRoKTtcbiAgICAgIGlmIChmaWxlIGluc3RhbmNlb2YgVEZpbGUpIGZpbGVzLnB1c2goZmlsZSk7XG4gICAgfVxuICAgIGlmICghZmlsZXMubGVuZ3RoKSByZXR1cm47XG4gICAgdGhpcy5vbkNob29zZShmaWxlcyk7XG4gICAgaWYgKHRoaXMuY2xvc2VPbkNob29zZSkgdGhpcy5jbG9zZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBkZWxldGVTZWxlY3RlZCgpIHtcbiAgICBjb25zdCBwYXRocyA9IEFycmF5LmZyb20odGhpcy5zZWxlY3RlZCk7XG4gICAgaWYgKCFwYXRocy5sZW5ndGgpIHJldHVybjtcbiAgICBhd2FpdCB0aGlzLmRlbGV0ZUZpbGVzKHBhdGhzKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgZGVsZXRlRmlsZXMocGF0aHM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgY29uZmlybWVkID0gYXdhaXQgdGhpcy5jb25maXJtRGVsZXRlKHBhdGhzLmxlbmd0aCk7XG4gICAgaWYgKCFjb25maXJtZWQpIHJldHVybjtcbiAgICBsZXQgZGVsZXRlZCA9IDA7XG4gICAgZm9yIChjb25zdCBwYXRoIG9mIHBhdGhzKSB7XG4gICAgICBjb25zdCBmaWxlID0gdGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKHBhdGgpO1xuICAgICAgaWYgKCEoZmlsZSBpbnN0YW5jZW9mIFRGaWxlKSkgY29udGludWU7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCB0aGlzLmFwcC5maWxlTWFuYWdlci50cmFzaEZpbGUoZmlsZSk7XG4gICAgICAgIGRlbGV0ZWQrKztcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDYW1lcmEgRW1iZWQ6IGZhaWxlZCB0byBkZWxldGUgZ2FsbGVyeSBwaG90b1wiLCBwYXRoLCBlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0ZWQuY2xlYXIoKTtcbiAgICBpZiAoZGVsZXRlZCA+IDApIG5ldyBOb3RpY2UoYERlbGV0ZWQgJHtkZWxldGVkfSBwaG90byR7ZGVsZXRlZCA9PT0gMSA/IFwiXCIgOiBcInNcIn0uYCk7XG4gICAgYXdhaXQgdGhpcy5zY2FuVmF1bHQoKTtcbiAgfVxuXG4gIHByaXZhdGUgcHJldmlld1NlbGVjdGVkKCkge1xuICAgIGNvbnN0IFtwYXRoXSA9IEFycmF5LmZyb20odGhpcy5zZWxlY3RlZCk7XG4gICAgaWYgKCFwYXRoKSByZXR1cm47XG4gICAgY29uc3QgZmlsZSA9IHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChwYXRoKTtcbiAgICBpZiAoIShmaWxlIGluc3RhbmNlb2YgVEZpbGUpKSByZXR1cm47XG4gICAgbmV3IFBob3RvUHJldmlld01vZGFsKHRoaXMuYXBwLCBmaWxlLCAoKSA9PiB2b2lkIHRoaXMuZGVsZXRlRmlsZXMoW2ZpbGUucGF0aF0pKS5vcGVuKCk7XG4gIH1cblxuICBwcml2YXRlIGNvbmZpcm1EZWxldGUoY291bnQ6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgY29uc3QgbW9kYWwgPSBuZXcgTW9kYWwodGhpcy5hcHApO1xuICAgICAgbGV0IHNldHRsZWQgPSBmYWxzZTtcbiAgICAgIGNvbnN0IGZpbmlzaCA9ICh2YWx1ZTogYm9vbGVhbikgPT4ge1xuICAgICAgICBpZiAoc2V0dGxlZCkgcmV0dXJuO1xuICAgICAgICBzZXR0bGVkID0gdHJ1ZTtcbiAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgIG1vZGFsLmNsb3NlKCk7XG4gICAgICB9O1xuICAgICAgbW9kYWwudGl0bGVFbC5zZXRUZXh0KFwiRGVsZXRlIHBob3Rvcz9cIik7XG4gICAgICBtb2RhbC5jb250ZW50RWwuY3JlYXRlRWwoXCJwXCIsIHsgdGV4dDogYE1vdmUgJHtjb3VudH0gc2VsZWN0ZWQgcGhvdG8ke2NvdW50ID09PSAxID8gXCJcIiA6IFwic1wifSB0byB0aGUgT2JzaWRpYW4gdHJhc2g/YCB9KTtcbiAgICAgIGNvbnN0IGJ1dHRvbnMgPSBtb2RhbC5jb250ZW50RWwuY3JlYXRlRGl2KHsgY2xzOiBcIm1vZGFsLWJ1dHRvbi1jb250YWluZXJcIiB9KTtcbiAgICAgIGJ1dHRvbnMuY3JlYXRlRWwoXCJidXR0b25cIiwgeyB0ZXh0OiBcIkNhbmNlbFwiIH0pLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBmaW5pc2goZmFsc2UpKTtcbiAgICAgIGJ1dHRvbnMuY3JlYXRlRWwoXCJidXR0b25cIiwgeyB0ZXh0OiBcIkRlbGV0ZVwiLCBjbHM6IFwibW9kLXdhcm5pbmdcIiB9KS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gZmluaXNoKHRydWUpKTtcbiAgICAgIG1vZGFsLm9wZW4oKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgdGFrZVBob3RvKCkge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuYm9keS5jcmVhdGVFbChcImlucHV0XCIsIHsgY2xzOiBcImNhbWVyYS1oaWRkZW5cIiwgdHlwZTogXCJmaWxlXCIgfSk7XG4gICAgaW5wdXQuYWNjZXB0ID0gXCJpbWFnZS8qXCI7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwiY2FwdHVyZVwiLCBcImVudmlyb25tZW50XCIpO1xuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4geyB2b2lkIHRoaXMuaGFuZGxlUGlja2VkRmlsZXMoaW5wdXQsIHRydWUpOyB9KTtcbiAgICBpbnB1dC5jbGljaygpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyB1cGxvYWRUb0dhbGxlcnkoKSB7XG4gICAgaWYgKCF0aGlzLnBob3Rvc0ZvbGRlcikgeyBuZXcgTm90aWNlKFwiU2V0IGEgcGhvdG9zIGZvbGRlciBpbiBjYW1lcmEgZW1iZWQgc2V0dGluZ3MgYmVmb3JlIHVwbG9hZGluZyB0byB0aGUgZ2FsbGVyeS5cIik7IHJldHVybjsgfVxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuYm9keS5jcmVhdGVFbChcImlucHV0XCIsIHsgY2xzOiBcImNhbWVyYS1oaWRkZW5cIiwgdHlwZTogXCJmaWxlXCIgfSk7XG4gICAgaW5wdXQuYWNjZXB0ID0gXCJpbWFnZS8qXCI7XG4gICAgaW5wdXQubXVsdGlwbGUgPSB0cnVlO1xuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4geyB2b2lkIHRoaXMuaGFuZGxlUGlja2VkRmlsZXMoaW5wdXQsIGZhbHNlKTsgfSk7XG4gICAgaW5wdXQuY2xpY2soKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgaGFuZGxlUGlja2VkRmlsZXMoaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQsIHNpbmdsZTogYm9vbGVhbikge1xuICAgIGNvbnN0IGZpbGVzID0gaW5wdXQuZmlsZXMgPyBBcnJheS5mcm9tKGlucHV0LmZpbGVzKS5zbGljZSgwLCBzaW5nbGUgPyAxIDogdW5kZWZpbmVkKSA6IFtdO1xuICAgIGlucHV0LnJlbW92ZSgpO1xuICAgIGlmICghZmlsZXMubGVuZ3RoIHx8ICF0aGlzLm9wZW5lZCkgcmV0dXJuO1xuICAgIGNvbnN0IHNhdmVkRmlsZXM6IFRGaWxlW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHsgY29uc3Qgc2F2ZWQgPSBhd2FpdCB0aGlzLnNhdmVUb0dhbGxlcnkoZmlsZSwgc2luZ2xlKTsgaWYgKHNhdmVkKSBzYXZlZEZpbGVzLnB1c2goc2F2ZWQpOyB9XG4gICAgaWYgKCF0aGlzLm9wZW5lZCkgcmV0dXJuO1xuICAgIGZvciAoY29uc3Qgc2F2ZWQgb2Ygc2F2ZWRGaWxlcykgdGhpcy5hZGRTYXZlZEZpbGUoc2F2ZWQpO1xuICAgIGlmIChzYXZlZEZpbGVzLmxlbmd0aCkgdm9pZCB0aGlzLnJlZnJlc2hJbkJhY2tncm91bmQoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgcmVmcmVzaEluQmFja2dyb3VuZCgpIHtcbiAgICBhd2FpdCBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4gd2luZG93LnNldFRpbWVvdXQocmVzb2x2ZSwgMjUwKSk7XG4gICAgaWYgKHRoaXMub3BlbmVkKSBhd2FpdCB0aGlzLnNjYW5WYXVsdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBzYXZlVG9HYWxsZXJ5KGZpbGU6IEZpbGUsIGlzQ2FtZXJhQ2FwdHVyZTogYm9vbGVhbik6IFByb21pc2U8VEZpbGUgfCBudWxsPiB7XG4gICAgaWYgKCF0aGlzLnBob3Rvc0ZvbGRlcikgeyBuZXcgTm90aWNlKFwiU2V0IGEgcGhvdG9zIGZvbGRlciBpbiBjYW1lcmEgZW1iZWQgc2V0dGluZ3MgZmlyc3QuXCIpOyByZXR1cm4gbnVsbDsgfVxuICAgIHRyeSB7XG4gICAgICBjb25zdCBmb2xkZXIgPSB0aGlzLm9yZ2FuaXplUGhvdG9zQnlNb250aCAmJiBpc0NhbWVyYUNhcHR1cmUgPyBnZXRNb250aGx5Rm9sZGVyKHRoaXMucGhvdG9zRm9sZGVyKSA6IHRoaXMucGhvdG9zRm9sZGVyO1xuICAgICAgaWYgKCF0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoZm9sZGVyKSkge1xuICAgICAgICBpZiAoIXRoaXMuY3JlYXRlRm9sZGVySWZNaXNzaW5nKSB7IG5ldyBOb3RpY2UoYFBob3RvcyBmb2xkZXIgbm90IGZvdW5kOiAke2ZvbGRlcn1gKTsgcmV0dXJuIG51bGw7IH1cbiAgICAgICAgYXdhaXQgY3JlYXRlRm9sZGVyUGF0aCh0aGlzLmFwcC52YXVsdCwgZm9sZGVyKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFVuaXF1ZVBhdGgoYCR7Zm9sZGVyfS8ke2ZpbGUubmFtZX1gKTtcbiAgICAgIGNvbnN0IGNyZWF0ZWQgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5jcmVhdGVCaW5hcnkocGF0aCwgYXdhaXQgZmlsZS5hcnJheUJ1ZmZlcigpKTtcbiAgICAgIG5ldyBOb3RpY2UoYEFkZGVkICR7ZmlsZS5uYW1lfSB0byBnYWxsZXJ5LmApO1xuICAgICAgcmV0dXJuIGNyZWF0ZWQ7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJDYW1lcmEgRW1iZWQ6IGdhbGxlcnkgc2F2ZSBmYWlsZWRcIiwgZXJyb3IpO1xuICAgICAgbmV3IE5vdGljZShgQ291bGQgbm90IHNhdmUgJHtmaWxlLm5hbWV9IHRvIHRoZSBnYWxsZXJ5LmApO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRVbmlxdWVQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKCF0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgocGF0aCkpIHJldHVybiBwYXRoO1xuICAgIGNvbnN0IGRvdCA9IHBhdGgubGFzdEluZGV4T2YoXCIuXCIpO1xuICAgIGNvbnN0IGJhc2UgPSBkb3QgPiAwID8gcGF0aC5zbGljZSgwLCBkb3QpIDogcGF0aDtcbiAgICBjb25zdCBleHRlbnNpb24gPSBkb3QgPiAwID8gcGF0aC5zbGljZShkb3QpIDogXCJcIjtcbiAgICBmb3IgKGxldCBjb3VudGVyID0gMjsgY291bnRlciA8IDEwMDAwOyBjb3VudGVyKyspIHtcbiAgICAgIGNvbnN0IGNhbmRpZGF0ZSA9IGAke2Jhc2V9ICR7Y291bnRlcn0ke2V4dGVuc2lvbn1gO1xuICAgICAgaWYgKCF0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoY2FuZGlkYXRlKSkgcmV0dXJuIGNhbmRpZGF0ZTtcbiAgICB9XG4gICAgcmV0dXJuIGAke2Jhc2V9ICR7RGF0ZS5ub3coKX0ke2V4dGVuc2lvbn1gO1xuICB9XG5cbiAgb25DbG9zZSgpIHsgdGhpcy5vcGVuZWQgPSBmYWxzZTsgdGhpcy5zY2FuSWQrKzsgdGhpcy5jb250ZW50RWwuZW1wdHkoKTsgfVxufVxuXG5jbGFzcyBQaG90b1ByZXZpZXdNb2RhbCBleHRlbmRzIE1vZGFsIHtcbiAgcHJpdmF0ZSByZWFkb25seSBmaWxlOiBURmlsZTtcbiAgcHJpdmF0ZSByZWFkb25seSBvbkRlbGV0ZTogKCkgPT4gdm9pZDtcblxuICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgZmlsZTogVEZpbGUsIG9uRGVsZXRlOiAoKSA9PiB2b2lkKSB7XG4gICAgc3VwZXIoYXBwKTtcbiAgICB0aGlzLmZpbGUgPSBmaWxlO1xuICAgIHRoaXMub25EZWxldGUgPSBvbkRlbGV0ZTtcbiAgfVxuXG4gIG9uT3BlbigpIHtcbiAgICB0aGlzLm1vZGFsRWwuYWRkQ2xhc3MoXCJjYW1lcmEtcGhvdG8tcHJldmlldy1tb2RhbC1jb250YWluZXJcIik7XG4gICAgdGhpcy50aXRsZUVsLnNldFRleHQodGhpcy5maWxlLm5hbWUpO1xuICAgIGNvbnN0IHsgY29udGVudEVsIH0gPSB0aGlzO1xuICAgIGNvbnRlbnRFbC5hZGRDbGFzcyhcImNhbWVyYS1waG90by1wcmV2aWV3LW1vZGFsXCIpO1xuICAgIGNvbnN0IGltYWdlID0gY29udGVudEVsLmNyZWF0ZUVsKFwiaW1nXCIsIHsgY2xzOiBcImNhbWVyYS1waG90by1wcmV2aWV3LWltYWdlXCIgfSk7XG4gICAgaW1hZ2Uuc3JjID0gdGhpcy5hcHAudmF1bHQuZ2V0UmVzb3VyY2VQYXRoKHRoaXMuZmlsZSk7XG4gICAgaW1hZ2UuYWx0ID0gdGhpcy5maWxlLm5hbWU7XG5cbiAgICBjb25zdCB1c2FnZXMgPSB0aGlzLmdldFVzYWdlcygpO1xuICAgIGNvbnRlbnRFbC5jcmVhdGVFbChcImgzXCIsIHsgdGV4dDogYFVzZWQgaW4gJHt1c2FnZXMubGVuZ3RofSBub3RlJHt1c2FnZXMubGVuZ3RoID09PSAxID8gXCJcIiA6IFwic1wifWAgfSk7XG4gICAgY29uc3QgdXNhZ2VMaXN0ID0gY29udGVudEVsLmNyZWF0ZURpdih7IGNsczogXCJjYW1lcmEtcGhvdG8tcHJldmlldy11c2FnZXNcIiB9KTtcbiAgICBpZiAodXNhZ2VzLmxlbmd0aCA9PT0gMCkgdXNhZ2VMaXN0LnNldFRleHQoXCJUaGlzIHBob3RvIGlzIG5vdCBsaW5rZWQgZnJvbSBhbnkgbm90ZS5cIik7XG4gICAgZm9yIChjb25zdCB1c2FnZSBvZiB1c2FnZXMpIHtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IHVzYWdlTGlzdC5jcmVhdGVFbChcImJ1dHRvblwiLCB7IHRleHQ6IHVzYWdlLnBhdGgsIGNsczogXCJjYW1lcmEtcGhvdG8tcHJldmlldy11c2FnZVwiIH0pO1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB2b2lkIHRoaXMuYXBwLndvcmtzcGFjZS5vcGVuTGlua1RleHQodXNhZ2UucGF0aCwgXCJcIiwgZmFsc2UpKTtcbiAgICB9XG5cbiAgICBjb25zdCBhY3Rpb25zID0gY29udGVudEVsLmNyZWF0ZURpdih7IGNsczogXCJtb2RhbC1idXR0b24tY29udGFpbmVyXCIgfSk7XG4gICAgYWN0aW9ucy5jcmVhdGVFbChcImJ1dHRvblwiLCB7IHRleHQ6IFwiQ2xvc2VcIiB9KS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5jbG9zZSgpKTtcbiAgICBhY3Rpb25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHsgdGV4dDogXCJEZWxldGVcIiwgY2xzOiBcIm1vZC13YXJuaW5nXCIgfSkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIHRoaXMub25EZWxldGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VXNhZ2VzKCk6IFRGaWxlW10ge1xuICAgIGNvbnN0IHJlc29sdmVkTGlua3MgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLnJlc29sdmVkTGlua3M7XG4gICAgY29uc3QgdXNhZ2VzOiBURmlsZVtdID0gW107XG4gICAgZm9yIChjb25zdCBwYXRoIGluIHJlc29sdmVkTGlua3MpIHtcbiAgICAgIGNvbnN0IHRhcmdldHMgPSByZXNvbHZlZExpbmtzW3BhdGhdO1xuICAgICAgaWYgKCF0YXJnZXRzKSBjb250aW51ZTtcbiAgICAgIGlmICgodGFyZ2V0c1t0aGlzLmZpbGUucGF0aF0gPz8gMCkgPD0gMCkgY29udGludWU7XG4gICAgICBjb25zdCBmaWxlOiB1bmtub3duID0gdGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKHBhdGgpO1xuICAgICAgaWYgKGZpbGUgaW5zdGFuY2VvZiBURmlsZSkgdXNhZ2VzLnB1c2goZmlsZSk7XG4gICAgfVxuICAgIHJldHVybiB1c2FnZXM7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBJdGVtVmlldywgVEZpbGUsIFdvcmtzcGFjZUxlYWYgfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCB7IEdhbGxlcnlNb2RhbCB9IGZyb20gXCIuL2dhbGxlcnktbW9kYWwuanNcIjtcbmltcG9ydCBDYW1lcmFFbWJlZFBsdWdpbiBmcm9tIFwiLi9tYWluLmpzXCI7XG5cbmV4cG9ydCBjb25zdCBHQUxMRVJZX1ZJRVdfVFlQRSA9IFwiY2FtZXJhLWVtYmVkLWdhbGxlcnlcIjtcblxuZXhwb3J0IGNsYXNzIENhbWVyYUdhbGxlcnlWaWV3IGV4dGVuZHMgSXRlbVZpZXcge1xuICBwcml2YXRlIHJlYWRvbmx5IHBsdWdpbjogQ2FtZXJhRW1iZWRQbHVnaW47XG4gIHByaXZhdGUgZ2FsbGVyeT86IEdhbGxlcnlNb2RhbDtcblxuICBjb25zdHJ1Y3RvcihsZWFmOiBXb3Jrc3BhY2VMZWFmLCBwbHVnaW46IENhbWVyYUVtYmVkUGx1Z2luKSB7XG4gICAgc3VwZXIobGVhZik7XG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gIH1cblxuICBnZXRWaWV3VHlwZSgpIHsgcmV0dXJuIEdBTExFUllfVklFV19UWVBFOyB9XG5cbiAgZ2V0RGlzcGxheVRleHQoKSB7IHJldHVybiBcIkNhbWVyYSBnYWxsZXJ5XCI7IH1cblxuICBnZXRJY29uKCkgeyByZXR1cm4gXCJpbWFnZXNcIjsgfVxuXG4gIGFzeW5jIG9uT3BlbigpIHtcbiAgICBjb25zdCBmb2xkZXIgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5waG90b3NGb2xkZXIudHJpbSgpO1xuICAgIHRoaXMuY29udGVudEVsLmVtcHR5KCk7XG4gICAgdGhpcy5jb250ZW50RWwuYWRkQ2xhc3MoXCJjYW1lcmEtZ2FsbGVyeS12aWV3XCIpO1xuICAgIGlmICghZm9sZGVyKSB7XG4gICAgICB0aGlzLmNvbnRlbnRFbC5jcmVhdGVFbChcInBcIiwgeyB0ZXh0OiBcIlNldCBhIHBob3RvcyBmb2xkZXIgaW4gY2FtZXJhIGVtYmVkIHNldHRpbmdzIGJlZm9yZSB1c2luZyB0aGUgZ2FsbGVyeS5cIiB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5nYWxsZXJ5ID0gbmV3IEdhbGxlcnlNb2RhbChcbiAgICAgIHRoaXMuYXBwLFxuICAgICAgZm9sZGVyLFxuICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuY3JlYXRlRm9sZGVySWZNaXNzaW5nLFxuICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3Mub3JnYW5pemVQaG90b3NCeU1vbnRoLFxuICAgICAgKGZpbGVzKSA9PiB0aGlzLnVzZUZpbGVzKGZpbGVzKSxcbiAgICAgIGZhbHNlLFxuICAgICk7XG4gICAgdGhpcy5nYWxsZXJ5Lm1vdW50KHRoaXMuY29udGVudEVsKTtcbiAgfVxuXG4gIGFzeW5jIG9uQ2xvc2UoKSB7IHRoaXMuZ2FsbGVyeT8udW5tb3VudCgpOyB9XG5cbiAgcHJpdmF0ZSB1c2VGaWxlcyhmaWxlczogVEZpbGVbXSkge1xuICAgIHRoaXMucGx1Z2luLmVtYmVkR2FsbGVyeUZpbGVzKGZpbGVzKTtcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBLDBEQUFBQSxTQUFBO0FBVUEsS0FBQyxTQUFVLFFBQVEsU0FBUztBQUMxQixhQUFPLFlBQVksWUFBWSxPQUFPQSxZQUFXLGNBQWNBLFFBQU8sVUFBVSxRQUFRLElBQ3hGLE9BQU8sV0FBVyxjQUFjLE9BQU8sTUFBTSxPQUFPLE9BQU8sS0FDMUQsU0FBUyxPQUFPLGVBQWUsY0FBYyxhQUFhLFVBQVUsTUFBTSxPQUFPLGFB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QVEsMENBQWtCLEtBQ2hGO0FBQ0osVUFBTSxpQkFBYSxnQ0FBYyxLQUFLLFNBQVMsd0JBQXdCLGlCQUFpQixNQUFNLElBQUksTUFBTTtBQUN4RyxRQUFJLGVBQWUsR0FBSSxRQUFPO0FBQzlCLFFBQUksYUFBYSxLQUFLLElBQUksT0FBTyxVQUFVLEVBQUcsUUFBTztBQUNyRCxRQUFJLENBQUMsS0FBSyxTQUFTLHVCQUF1QjtBQUN4QyxVQUFJLHdCQUFPLHFCQUFxQixVQUFVLEVBQUU7QUFDNUMsYUFBTztBQUFBLElBQ1Q7QUFDQSxRQUFJO0FBQ0YsWUFBTSxpQkFBaUIsS0FBSyxJQUFJLE9BQU8sVUFBVTtBQUNqRCxhQUFPO0FBQUEsSUFDVCxTQUFTLE9BQU87QUFDZCxjQUFRLE1BQU0seUNBQXlDLEtBQUs7QUFDNUQsVUFBSSx3QkFBTyw0QkFBNEIsVUFBVSxFQUFFO0FBQ25ELGFBQU87QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUFBLEVBRUEsTUFBTSxlQUFlO0FBQ25CLFNBQUssV0FBVyxPQUFPLE9BQU8sQ0FBQyxHQUFHLGtCQUFrQixNQUFNLEtBQUssU0FBUyxDQUFpQztBQUFBLEVBQzNHO0FBQUEsRUFFQSxNQUFNLGVBQWU7QUFBRSxVQUFNLEtBQUssU0FBUyxLQUFLLFFBQVE7QUFBQSxFQUFHO0FBRTdEOyIsCiAgIm5hbWVzIjogWyJtb2R1bGUiLCAiciIsICJ3aW5kb3ciLCAic2VsZiIsICJpc0Jsb2IiLCAiaXNQb3NpdGl2ZU51bWJlciIsICJDb21wcmVzc29yIiwgImNhbGxiYWNrIiwgImRvbmUiLCAibmV4dCIsICJpbXBvcnRfb2JzaWRpYW4iLCAiQ29tcHJlc3NvciIsICJpbXBvcnRfb2JzaWRpYW4iLCAiaW1wb3J0X29ic2lkaWFuIiwgImltcG9ydF9vYnNpZGlhbiJdCn0K
