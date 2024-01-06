"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/listing/get-all-listings";
exports.ids = ["pages/api/listing/get-all-listings"];
exports.modules = {

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("multer");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "console":
/*!**************************!*\
  !*** external "console" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("console");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./pages/api/listing/get-all-listings.js":
/*!***********************************************!*\
  !*** ./pages/api/listing/get-all-listings.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multer */ \"multer\");\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_models_listingModel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/models/listingModel.js */ \"(api)/./src/models/listingModel.js\");\n/* harmony import */ var console__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! console */ \"console\");\n/* harmony import */ var console__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(console__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_dbConfig_dbConfig_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../src/dbConfig/dbConfig.js */ \"(api)/./src/dbConfig/dbConfig.js\");\n\n\n\n\n\n\n(0,_src_dbConfig_dbConfig_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])().then(() => {\n  console.log(\"connected\");\n}).catch(() => {\n  console.log(\"not connected\");\n});\nconsole.log(_src_dbConfig_dbConfig_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\nconst storage = multer__WEBPACK_IMPORTED_MODULE_0___default().diskStorage({\n  destination: function (req, file, cb) {\n    const uploadPath = \"./uploads\";\n    const subfolder = \"listing\"; // Create \"uploads\" folder if it doesn't exist\n\n    if (!fs__WEBPACK_IMPORTED_MODULE_1___default().existsSync(uploadPath)) {\n      fs__WEBPACK_IMPORTED_MODULE_1___default().mkdirSync(uploadPath);\n    } // Create subfolder inside \"uploads\"\n\n\n    const subfolderPath = path__WEBPACK_IMPORTED_MODULE_2___default().join(uploadPath, subfolder);\n\n    if (!fs__WEBPACK_IMPORTED_MODULE_1___default().existsSync(subfolderPath)) {\n      fs__WEBPACK_IMPORTED_MODULE_1___default().mkdirSync(subfolderPath);\n    }\n\n    cb(null, subfolderPath);\n  },\n  filename: function (req, file, cb) {\n    const name = file.originalname; // abc.png\n\n    const ext = path__WEBPACK_IMPORTED_MODULE_2___default().extname(name); // .png\n\n    const nameArr = name.split(\".\"); // [abc,png]\n\n    nameArr.pop();\n    const fname = nameArr.join(\".\"); //abc\n\n    const fullname = fname + \"-\" + Date.now() + ext; // abc-12345.png\n\n    cb(null, fullname);\n  }\n});\nconst upload = multer__WEBPACK_IMPORTED_MODULE_0___default()({\n  storage: storage\n});\nasync function GET(req, res) {\n  try {\n    const listingData = await _src_models_listingModel_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].aggregate([{\n      $lookup: {\n        from: \"categories\",\n        localField: \"category\",\n        foreignField: \"_id\",\n        as: \"categories\"\n      }\n    }, {\n      $unwind: \"$categories\"\n    }]).option({\n      maxTimeMS: 30000\n    });\n\n    if (listingData) {\n      return res.status(200).json({\n        data: listingData,\n        message: \"Success\"\n      });\n    }\n  } catch (error) {\n    console.log(error);\n    return res.status(500).json({\n      message: error.message\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbGlzdGluZy9nZXQtYWxsLWxpc3RpbmdzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FLLHFFQUFTLEdBQ05DLElBREgsQ0FDUSxNQUFNO0FBQ1ZDLEVBQUFBLE9BQU8sQ0FBQ0gsR0FBUixDQUFZLFdBQVo7QUFDRCxDQUhILEVBSUdJLEtBSkgsQ0FJUyxNQUFNO0FBQ1hELEVBQUFBLE9BQU8sQ0FBQ0gsR0FBUixDQUFZLGVBQVo7QUFDRCxDQU5IO0FBUUFHLE9BQU8sQ0FBQ0gsR0FBUixDQUFZQyxpRUFBWjtBQUVBLE1BQU1JLE9BQU8sR0FBR1QseURBQUEsQ0FBbUI7QUFDakNXLEVBQUFBLFdBQVcsRUFBRSxVQUFVQyxHQUFWLEVBQWVDLElBQWYsRUFBcUJDLEVBQXJCLEVBQXlCO0FBQ3BDLFVBQU1DLFVBQVUsR0FBRyxXQUFuQjtBQUNBLFVBQU1DLFNBQVMsR0FBRyxTQUFsQixDQUZvQyxDQUlwQzs7QUFDQSxRQUFJLENBQUNmLG9EQUFBLENBQWNjLFVBQWQsQ0FBTCxFQUFnQztBQUM5QmQsTUFBQUEsbURBQUEsQ0FBYWMsVUFBYjtBQUNELEtBUG1DLENBU3BDOzs7QUFDQSxVQUFNSSxhQUFhLEdBQUdqQixnREFBQSxDQUFVYSxVQUFWLEVBQXNCQyxTQUF0QixDQUF0Qjs7QUFDQSxRQUFJLENBQUNmLG9EQUFBLENBQWNrQixhQUFkLENBQUwsRUFBbUM7QUFDakNsQixNQUFBQSxtREFBQSxDQUFha0IsYUFBYjtBQUNEOztBQUVETCxJQUFBQSxFQUFFLENBQUMsSUFBRCxFQUFPSyxhQUFQLENBQUY7QUFDRCxHQWpCZ0M7QUFrQmpDRSxFQUFBQSxRQUFRLEVBQUUsVUFBVVQsR0FBVixFQUFlQyxJQUFmLEVBQXFCQyxFQUFyQixFQUF5QjtBQUNqQyxVQUFNUSxJQUFJLEdBQUdULElBQUksQ0FBQ1UsWUFBbEIsQ0FEaUMsQ0FDRDs7QUFDaEMsVUFBTUMsR0FBRyxHQUFHdEIsbURBQUEsQ0FBYW9CLElBQWIsQ0FBWixDQUZpQyxDQUVEOztBQUNoQyxVQUFNSSxPQUFPLEdBQUdKLElBQUksQ0FBQ0ssS0FBTCxDQUFXLEdBQVgsQ0FBaEIsQ0FIaUMsQ0FHQTs7QUFDakNELElBQUFBLE9BQU8sQ0FBQ0UsR0FBUjtBQUNBLFVBQU1DLEtBQUssR0FBR0gsT0FBTyxDQUFDTixJQUFSLENBQWEsR0FBYixDQUFkLENBTGlDLENBS0E7O0FBQ2pDLFVBQU1VLFFBQVEsR0FBR0QsS0FBSyxHQUFHLEdBQVIsR0FBY0UsSUFBSSxDQUFDQyxHQUFMLEVBQWQsR0FBMkJSLEdBQTVDLENBTmlDLENBTWdCOztBQUNqRFYsSUFBQUEsRUFBRSxDQUFDLElBQUQsRUFBT2dCLFFBQVAsQ0FBRjtBQUNEO0FBMUJnQyxDQUFuQixDQUFoQjtBQTZCQSxNQUFNRyxNQUFNLEdBQUdqQyw2Q0FBTSxDQUFDO0FBQUVTLEVBQUFBLE9BQU8sRUFBRUE7QUFBWCxDQUFELENBQXJCO0FBRWUsZUFBZXlCLEdBQWYsQ0FBbUJ0QixHQUFuQixFQUF3QnVCLEdBQXhCLEVBQTZCO0FBQzFDLE1BQUk7QUFDRixVQUFNQyxXQUFXLEdBQUcsTUFBTWpDLDZFQUFBLENBQWtCLENBQzFDO0FBQ0VtQyxNQUFBQSxPQUFPLEVBQUU7QUFDUEMsUUFBQUEsSUFBSSxFQUFFLFlBREM7QUFFUEMsUUFBQUEsVUFBVSxFQUFFLFVBRkw7QUFHUEMsUUFBQUEsWUFBWSxFQUFFLEtBSFA7QUFJUEMsUUFBQUEsRUFBRSxFQUFFO0FBSkc7QUFEWCxLQUQwQyxFQVMxQztBQUFFQyxNQUFBQSxPQUFPLEVBQUU7QUFBWCxLQVQwQyxDQUFsQixFQVV2QkMsTUFWdUIsQ0FVaEI7QUFBRUMsTUFBQUEsU0FBUyxFQUFFO0FBQWIsS0FWZ0IsQ0FBMUI7O0FBWUEsUUFBSVQsV0FBSixFQUFpQjtBQUNmLGFBQU9ELEdBQUcsQ0FBQ1csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQzFCQyxRQUFBQSxJQUFJLEVBQUVaLFdBRG9CO0FBRTFCYSxRQUFBQSxPQUFPLEVBQUU7QUFGaUIsT0FBckIsQ0FBUDtBQUlEO0FBQ0YsR0FuQkQsQ0FtQkUsT0FBT0MsS0FBUCxFQUFjO0FBQ2QzQyxJQUFBQSxPQUFPLENBQUNILEdBQVIsQ0FBWThDLEtBQVo7QUFDQSxXQUFPZixHQUFHLENBQUNXLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUMxQkUsTUFBQUEsT0FBTyxFQUFFQyxLQUFLLENBQUNEO0FBRFcsS0FBckIsQ0FBUDtBQUdEO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maW94ZW4vLi9wYWdlcy9hcGkvbGlzdGluZy9nZXQtYWxsLWxpc3RpbmdzLmpzPzA4N2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG11bHRlciBmcm9tIFwibXVsdGVyXCI7XHJcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IExpc3RpbmcgZnJvbSBcIi4uLy4uLy4uL3NyYy9tb2RlbHMvbGlzdGluZ01vZGVsLmpzXCI7XHJcbmltcG9ydCB7IGxvZyB9IGZyb20gXCJjb25zb2xlXCI7XHJcbmltcG9ydCBjb25uZWN0REIgZnJvbSBcIi4uLy4uLy4uL3NyYy9kYkNvbmZpZy9kYkNvbmZpZy5qc1wiO1xyXG5jb25uZWN0REIoKVxyXG4gIC50aGVuKCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiY29ubmVjdGVkXCIpO1xyXG4gIH0pXHJcbiAgLmNhdGNoKCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwibm90IGNvbm5lY3RlZFwiKTtcclxuICB9KTtcclxuXHJcbmNvbnNvbGUubG9nKGNvbm5lY3REQik7XHJcblxyXG5jb25zdCBzdG9yYWdlID0gbXVsdGVyLmRpc2tTdG9yYWdlKHtcclxuICBkZXN0aW5hdGlvbjogZnVuY3Rpb24gKHJlcSwgZmlsZSwgY2IpIHtcclxuICAgIGNvbnN0IHVwbG9hZFBhdGggPSBcIi4vdXBsb2Fkc1wiO1xyXG4gICAgY29uc3Qgc3ViZm9sZGVyID0gXCJsaXN0aW5nXCI7XHJcblxyXG4gICAgLy8gQ3JlYXRlIFwidXBsb2Fkc1wiIGZvbGRlciBpZiBpdCBkb2Vzbid0IGV4aXN0XHJcbiAgICBpZiAoIWZzLmV4aXN0c1N5bmModXBsb2FkUGF0aCkpIHtcclxuICAgICAgZnMubWtkaXJTeW5jKHVwbG9hZFBhdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENyZWF0ZSBzdWJmb2xkZXIgaW5zaWRlIFwidXBsb2Fkc1wiXHJcbiAgICBjb25zdCBzdWJmb2xkZXJQYXRoID0gcGF0aC5qb2luKHVwbG9hZFBhdGgsIHN1YmZvbGRlcik7XHJcbiAgICBpZiAoIWZzLmV4aXN0c1N5bmMoc3ViZm9sZGVyUGF0aCkpIHtcclxuICAgICAgZnMubWtkaXJTeW5jKHN1YmZvbGRlclBhdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNiKG51bGwsIHN1YmZvbGRlclBhdGgpO1xyXG4gIH0sXHJcbiAgZmlsZW5hbWU6IGZ1bmN0aW9uIChyZXEsIGZpbGUsIGNiKSB7XHJcbiAgICBjb25zdCBuYW1lID0gZmlsZS5vcmlnaW5hbG5hbWU7IC8vIGFiYy5wbmdcclxuICAgIGNvbnN0IGV4dCA9IHBhdGguZXh0bmFtZShuYW1lKTsgLy8gLnBuZ1xyXG4gICAgY29uc3QgbmFtZUFyciA9IG5hbWUuc3BsaXQoXCIuXCIpOyAvLyBbYWJjLHBuZ11cclxuICAgIG5hbWVBcnIucG9wKCk7XHJcbiAgICBjb25zdCBmbmFtZSA9IG5hbWVBcnIuam9pbihcIi5cIik7IC8vYWJjXHJcbiAgICBjb25zdCBmdWxsbmFtZSA9IGZuYW1lICsgXCItXCIgKyBEYXRlLm5vdygpICsgZXh0OyAvLyBhYmMtMTIzNDUucG5nXHJcbiAgICBjYihudWxsLCBmdWxsbmFtZSk7XHJcbiAgfSxcclxufSk7XHJcblxyXG5jb25zdCB1cGxvYWQgPSBtdWx0ZXIoeyBzdG9yYWdlOiBzdG9yYWdlIH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcSwgcmVzKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGxpc3RpbmdEYXRhID0gYXdhaXQgTGlzdGluZy5hZ2dyZWdhdGUoW1xyXG4gICAgICB7XHJcbiAgICAgICAgJGxvb2t1cDoge1xyXG4gICAgICAgICAgZnJvbTogXCJjYXRlZ29yaWVzXCIsXHJcbiAgICAgICAgICBsb2NhbEZpZWxkOiBcImNhdGVnb3J5XCIsXHJcbiAgICAgICAgICBmb3JlaWduRmllbGQ6IFwiX2lkXCIsXHJcbiAgICAgICAgICBhczogXCJjYXRlZ29yaWVzXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgeyAkdW53aW5kOiBcIiRjYXRlZ29yaWVzXCIgfSxcclxuICAgIF0pLm9wdGlvbih7IG1heFRpbWVNUzogMzAwMDAgfSk7XHJcblxyXG4gICAgaWYgKGxpc3RpbmdEYXRhKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgZGF0YTogbGlzdGluZ0RhdGEsXHJcbiAgICAgICAgbWVzc2FnZTogXCJTdWNjZXNzXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oe1xyXG4gICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJtdWx0ZXIiLCJmcyIsInBhdGgiLCJMaXN0aW5nIiwibG9nIiwiY29ubmVjdERCIiwidGhlbiIsImNvbnNvbGUiLCJjYXRjaCIsInN0b3JhZ2UiLCJkaXNrU3RvcmFnZSIsImRlc3RpbmF0aW9uIiwicmVxIiwiZmlsZSIsImNiIiwidXBsb2FkUGF0aCIsInN1YmZvbGRlciIsImV4aXN0c1N5bmMiLCJta2RpclN5bmMiLCJzdWJmb2xkZXJQYXRoIiwiam9pbiIsImZpbGVuYW1lIiwibmFtZSIsIm9yaWdpbmFsbmFtZSIsImV4dCIsImV4dG5hbWUiLCJuYW1lQXJyIiwic3BsaXQiLCJwb3AiLCJmbmFtZSIsImZ1bGxuYW1lIiwiRGF0ZSIsIm5vdyIsInVwbG9hZCIsIkdFVCIsInJlcyIsImxpc3RpbmdEYXRhIiwiYWdncmVnYXRlIiwiJGxvb2t1cCIsImZyb20iLCJsb2NhbEZpZWxkIiwiZm9yZWlnbkZpZWxkIiwiYXMiLCIkdW53aW5kIiwib3B0aW9uIiwibWF4VGltZU1TIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJtZXNzYWdlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/listing/get-all-listings.js\n");

/***/ }),

/***/ "(api)/./src/dbConfig/dbConfig.js":
/*!**********************************!*\
  !*** ./src/dbConfig/dbConfig.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\n\nconst connectDB = async () => {\n  try {\n    const connectionInstance = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(`${process.env.MONGO_URI}`);\n    console.log(`\\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);\n  } catch (error) {\n    console.log(\"MONGODB connection FAILED \", error);\n    process.exit(1);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvZGJDb25maWcvZGJDb25maWcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0FDLG9EQUFBOztBQUVBLE1BQU1FLFNBQVMsR0FBRyxZQUFZO0FBQzVCLE1BQUk7QUFDRixVQUFNQyxrQkFBa0IsR0FBRyxNQUFNSix1REFBQSxDQUM5QixHQUFFTSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsU0FBVSxFQURNLENBQWpDO0FBR0FDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUNHLG9DQUFtQ04sa0JBQWtCLENBQUNPLFVBQW5CLENBQThCQyxJQUFLLEVBRHpFO0FBR0QsR0FQRCxDQU9FLE9BQU9DLEtBQVAsRUFBYztBQUNkSixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSw0QkFBWixFQUEwQ0csS0FBMUM7QUFDQVAsSUFBQUEsT0FBTyxDQUFDUSxJQUFSLENBQWEsQ0FBYjtBQUNEO0FBQ0YsQ0FaRDs7QUFjQSxpRUFBZVgsU0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zpb3hlbi8uL3NyYy9kYkNvbmZpZy9kYkNvbmZpZy5qcz84ZDFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxucmVxdWlyZShcImRvdGVudlwiKS5jb25maWcoKTtcclxuXHJcbmNvbnN0IGNvbm5lY3REQiA9IGFzeW5jICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgY29ubmVjdGlvbkluc3RhbmNlID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChcclxuICAgICAgYCR7cHJvY2Vzcy5lbnYuTU9OR09fVVJJfWBcclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgYFxcbiBNb25nb0RCIGNvbm5lY3RlZCAhISBEQiBIT1NUOiAke2Nvbm5lY3Rpb25JbnN0YW5jZS5jb25uZWN0aW9uLmhvc3R9YFxyXG4gICAgKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coXCJNT05HT0RCIGNvbm5lY3Rpb24gRkFJTEVEIFwiLCBlcnJvcik7XHJcbiAgICBwcm9jZXNzLmV4aXQoMSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERCO1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJyZXF1aXJlIiwiY29uZmlnIiwiY29ubmVjdERCIiwiY29ubmVjdGlvbkluc3RhbmNlIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT19VUkkiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdGlvbiIsImhvc3QiLCJlcnJvciIsImV4aXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/dbConfig/dbConfig.js\n");

/***/ }),

/***/ "(api)/./src/models/listingModel.js":
/*!************************************!*\
  !*** ./src/models/listingModel.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst listingSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n  placeName: {\n    type: String,\n    required: true\n  },\n  category: {\n    type: [String],\n    required: true\n  },\n  keywords: {\n    type: String,\n    required: true\n  },\n  description: {\n    type: String,\n    required: true\n  },\n  name: {\n    type: String,\n    required: true\n  },\n  email: {\n    type: String,\n    required: true\n  },\n  phone: {\n    type: Number,\n    required: true\n  },\n  website: {\n    type: String\n  },\n  designation: {\n    type: String,\n    required: true\n  },\n  company: {\n    type: String,\n    required: true\n  },\n  facebook: {\n    type: String\n  },\n  twitter: {\n    type: String\n  },\n  linked: {\n    type: String\n  },\n  skype: {\n    type: String\n  }\n}, {\n  timestamps: true\n});\nconst Listing = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Listing) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Listing\", listingSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Listing);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbW9kZWxzL2xpc3RpbmdNb2RlbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBLE1BQU1FLGFBQWEsR0FBRyxJQUFJRCw0Q0FBSixDQUNwQjtBQUNFRSxFQUFBQSxTQUFTLEVBQUU7QUFDVEMsSUFBQUEsSUFBSSxFQUFFQyxNQURHO0FBRVRDLElBQUFBLFFBQVEsRUFBRTtBQUZELEdBRGI7QUFLRUMsRUFBQUEsUUFBUSxFQUFFO0FBQ1JILElBQUFBLElBQUksRUFBRSxDQUFDQyxNQUFELENBREU7QUFFUkMsSUFBQUEsUUFBUSxFQUFFO0FBRkYsR0FMWjtBQVNFRSxFQUFBQSxRQUFRLEVBQUU7QUFDUkosSUFBQUEsSUFBSSxFQUFFQyxNQURFO0FBRVJDLElBQUFBLFFBQVEsRUFBRTtBQUZGLEdBVFo7QUFhRUcsRUFBQUEsV0FBVyxFQUFFO0FBQ1hMLElBQUFBLElBQUksRUFBRUMsTUFESztBQUVYQyxJQUFBQSxRQUFRLEVBQUU7QUFGQyxHQWJmO0FBaUJFSSxFQUFBQSxJQUFJLEVBQUU7QUFDSk4sSUFBQUEsSUFBSSxFQUFFQyxNQURGO0FBRUpDLElBQUFBLFFBQVEsRUFBRTtBQUZOLEdBakJSO0FBcUJFSyxFQUFBQSxLQUFLLEVBQUU7QUFDTFAsSUFBQUEsSUFBSSxFQUFFQyxNQUREO0FBRUxDLElBQUFBLFFBQVEsRUFBRTtBQUZMLEdBckJUO0FBeUJFTSxFQUFBQSxLQUFLLEVBQUU7QUFDTFIsSUFBQUEsSUFBSSxFQUFFUyxNQUREO0FBRUxQLElBQUFBLFFBQVEsRUFBRTtBQUZMLEdBekJUO0FBNkJFUSxFQUFBQSxPQUFPLEVBQUU7QUFDUFYsSUFBQUEsSUFBSSxFQUFFQztBQURDLEdBN0JYO0FBZ0NFVSxFQUFBQSxXQUFXLEVBQUU7QUFDWFgsSUFBQUEsSUFBSSxFQUFFQyxNQURLO0FBRVhDLElBQUFBLFFBQVEsRUFBRTtBQUZDLEdBaENmO0FBb0NFVSxFQUFBQSxPQUFPLEVBQUU7QUFDUFosSUFBQUEsSUFBSSxFQUFFQyxNQURDO0FBRVBDLElBQUFBLFFBQVEsRUFBRTtBQUZILEdBcENYO0FBd0NFVyxFQUFBQSxRQUFRLEVBQUU7QUFDUmIsSUFBQUEsSUFBSSxFQUFFQztBQURFLEdBeENaO0FBMkNFYSxFQUFBQSxPQUFPLEVBQUU7QUFDUGQsSUFBQUEsSUFBSSxFQUFFQztBQURDLEdBM0NYO0FBOENFYyxFQUFBQSxNQUFNLEVBQUU7QUFDTmYsSUFBQUEsSUFBSSxFQUFFQztBQURBLEdBOUNWO0FBaURFZSxFQUFBQSxLQUFLLEVBQUU7QUFDTGhCLElBQUFBLElBQUksRUFBRUM7QUFERDtBQWpEVCxDQURvQixFQXNEcEI7QUFDRWdCLEVBQUFBLFVBQVUsRUFBRTtBQURkLENBdERvQixDQUF0QjtBQTJEQSxNQUFNQyxPQUFPLEdBQ1h0QixnRUFBQSxJQUEyQkEscURBQUEsQ0FBZSxTQUFmLEVBQTBCRSxhQUExQixDQUQ3QjtBQUVBLGlFQUFlb0IsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zpb3hlbi8uL3NyYy9tb2RlbHMvbGlzdGluZ01vZGVsLmpzP2NkMWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYSB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuY29uc3QgbGlzdGluZ1NjaGVtYSA9IG5ldyBTY2hlbWEoXHJcbiAge1xyXG4gICAgcGxhY2VOYW1lOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgY2F0ZWdvcnk6IHtcclxuICAgICAgdHlwZTogW1N0cmluZ10sXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIGtleXdvcmRzOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgZGVzY3JpcHRpb246IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBuYW1lOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgZW1haWw6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBwaG9uZToge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHdlYnNpdGU6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgfSxcclxuICAgIGRlc2lnbmF0aW9uOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgY29tcGFueToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIGZhY2Vib29rOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgIH0sXHJcbiAgICB0d2l0dGVyOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgIH0sXHJcbiAgICBsaW5rZWQ6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgfSxcclxuICAgIHNreXBlOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aW1lc3RhbXBzOiB0cnVlLFxyXG4gIH1cclxuKTtcclxuXHJcbmNvbnN0IExpc3RpbmcgPVxyXG4gIG1vbmdvb3NlLm1vZGVscy5MaXN0aW5nIHx8IG1vbmdvb3NlLm1vZGVsKFwiTGlzdGluZ1wiLCBsaXN0aW5nU2NoZW1hKTtcclxuZXhwb3J0IGRlZmF1bHQgTGlzdGluZztcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiU2NoZW1hIiwibGlzdGluZ1NjaGVtYSIsInBsYWNlTmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImNhdGVnb3J5Iiwia2V5d29yZHMiLCJkZXNjcmlwdGlvbiIsIm5hbWUiLCJlbWFpbCIsInBob25lIiwiTnVtYmVyIiwid2Vic2l0ZSIsImRlc2lnbmF0aW9uIiwiY29tcGFueSIsImZhY2Vib29rIiwidHdpdHRlciIsImxpbmtlZCIsInNreXBlIiwidGltZXN0YW1wcyIsIkxpc3RpbmciLCJtb2RlbHMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/models/listingModel.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/listing/get-all-listings.js"));
module.exports = __webpack_exports__;

})();