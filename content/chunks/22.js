(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/bnc-onboard/dist/esm/content-eeaca1cc.js":
/*!***************************************************************!*\
  !*** ./node_modules/bnc-onboard/dist/esm/content-eeaca1cc.js ***!
  \***************************************************************/
/*! exports provided: e, m */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"e\", function() { return extensionInstallMessage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"m\", function() { return mobileWalletInstallMessage; });\nvar extensionInstallMessage = function extensionInstallMessage(helpers) {\n  var currentWallet = helpers.currentWallet,\n      selectedWallet = helpers.selectedWallet;\n\n  if (currentWallet) {\n    return \"\\n    <p style=\\\"font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;\\\">\\n    We have detected that you already have\\n    <b>\".concat(currentWallet, \"</b>\\n    installed. If you would prefer to use\\n    <b>\").concat(selectedWallet, \"</b>\\n    instead, then click below to install.\\n    </p>\\n    <p style=\\\"font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;\\\">\\n    <b>Tip:</b>\\n    If you already have \").concat(selectedWallet, \" installed, check your\\n    browser extension settings to make sure that you have it enabled\\n    and that you have disabled any other browser extension wallets.\\n    <span\\n      class=\\\"bn-onboard-clickable\\\"\\n      style=\\\"color: #4a90e2; font-size: 0.889rem; font-family: inherit;\\\"\\n      onclick=\\\"window.location.reload();\\\">\\n      Then refresh the page.\\n    </span>\\n    </p>\\n    \");\n  } else {\n    return \"\\n    <p style=\\\"font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;\\\">\\n    You'll need to install <b>\".concat(selectedWallet, \"</b> to continue. Once you have it installed, go ahead and\\n    <span\\n    class=\\\"bn-onboard-clickable\\\"\\n      style=\\\"color: #4a90e2; font-size: 0.889rem; font-family: inherit;\\\"\\n      onclick={window.location.reload();}>\\n      refresh the page.\\n    </span>\\n    \").concat(selectedWallet === 'Opera' ? '<br><br><i>Hint: If you already have Opera installed, make sure that your web3 wallet is <a style=\"color: #4a90e2; font-size: 0.889rem; font-family: inherit;\" class=\"bn-onboard-clickable\" href=\"https://help.opera.com/en/touch/crypto-wallet/\" rel=\"noreferrer noopener\" target=\"_blank\">enabled</a></i>' : '', \"\\n    </p>\\n    \");\n  }\n};\n\nvar mobileWalletInstallMessage = function mobileWalletInstallMessage(helpers) {\n  var selectedWallet = helpers.selectedWallet;\n  return \"\\n  <p style=\\\"font-size: 0.889rem;\\\">\\n    You'll need to install <b>\".concat(selectedWallet, \"</b> to continue. Click below to install and then load this Dapp with <b>\").concat(selectedWallet, \"</b>.\\n  </p>\\n  \");\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYm5jLW9uYm9hcmQvZGlzdC9lc20vY29udGVudC1lZWFjYTFjYy5qcz9kZmE2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlEQUFpRCxzQkFBc0Isb0JBQW9CLGtRQUFrUSxzQkFBc0Isb0JBQW9CLDBUQUEwVCxxQkFBcUIsc0JBQXNCLDZDQUE2QztBQUN6eEIsR0FBRztBQUNILGlEQUFpRCxzQkFBc0Isb0JBQW9CLHFNQUFxTSxxQkFBcUIsc0JBQXNCLG1CQUFtQiwwQkFBMEIsdU1BQXVNLHFCQUFxQixzQkFBc0I7QUFDMW1CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZDQUE2QztBQUM3QyIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9ibmMtb25ib2FyZC9kaXN0L2VzbS9jb250ZW50LWVlYWNhMWNjLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGV4dGVuc2lvbkluc3RhbGxNZXNzYWdlID0gZnVuY3Rpb24gZXh0ZW5zaW9uSW5zdGFsbE1lc3NhZ2UoaGVscGVycykge1xuICB2YXIgY3VycmVudFdhbGxldCA9IGhlbHBlcnMuY3VycmVudFdhbGxldCxcbiAgICAgIHNlbGVjdGVkV2FsbGV0ID0gaGVscGVycy5zZWxlY3RlZFdhbGxldDtcblxuICBpZiAoY3VycmVudFdhbGxldCkge1xuICAgIHJldHVybiBcIlxcbiAgICA8cCBzdHlsZT1cXFwiZm9udC1zaXplOiAwLjg4OXJlbTsgZm9udC1mYW1pbHk6IGluaGVyaXQ7IG1hcmdpbjogMC44ODlyZW0gMDtcXFwiPlxcbiAgICBXZSBoYXZlIGRldGVjdGVkIHRoYXQgeW91IGFscmVhZHkgaGF2ZVxcbiAgICA8Yj5cIi5jb25jYXQoY3VycmVudFdhbGxldCwgXCI8L2I+XFxuICAgIGluc3RhbGxlZC4gSWYgeW91IHdvdWxkIHByZWZlciB0byB1c2VcXG4gICAgPGI+XCIpLmNvbmNhdChzZWxlY3RlZFdhbGxldCwgXCI8L2I+XFxuICAgIGluc3RlYWQsIHRoZW4gY2xpY2sgYmVsb3cgdG8gaW5zdGFsbC5cXG4gICAgPC9wPlxcbiAgICA8cCBzdHlsZT1cXFwiZm9udC1zaXplOiAwLjg4OXJlbTsgZm9udC1mYW1pbHk6IGluaGVyaXQ7IG1hcmdpbjogMC44ODlyZW0gMDtcXFwiPlxcbiAgICA8Yj5UaXA6PC9iPlxcbiAgICBJZiB5b3UgYWxyZWFkeSBoYXZlIFwiKS5jb25jYXQoc2VsZWN0ZWRXYWxsZXQsIFwiIGluc3RhbGxlZCwgY2hlY2sgeW91clxcbiAgICBicm93c2VyIGV4dGVuc2lvbiBzZXR0aW5ncyB0byBtYWtlIHN1cmUgdGhhdCB5b3UgaGF2ZSBpdCBlbmFibGVkXFxuICAgIGFuZCB0aGF0IHlvdSBoYXZlIGRpc2FibGVkIGFueSBvdGhlciBicm93c2VyIGV4dGVuc2lvbiB3YWxsZXRzLlxcbiAgICA8c3BhblxcbiAgICAgIGNsYXNzPVxcXCJibi1vbmJvYXJkLWNsaWNrYWJsZVxcXCJcXG4gICAgICBzdHlsZT1cXFwiY29sb3I6ICM0YTkwZTI7IGZvbnQtc2l6ZTogMC44ODlyZW07IGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcXCJcXG4gICAgICBvbmNsaWNrPVxcXCJ3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XFxcIj5cXG4gICAgICBUaGVuIHJlZnJlc2ggdGhlIHBhZ2UuXFxuICAgIDwvc3Bhbj5cXG4gICAgPC9wPlxcbiAgICBcIik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFwiXFxuICAgIDxwIHN0eWxlPVxcXCJmb250LXNpemU6IDAuODg5cmVtOyBmb250LWZhbWlseTogaW5oZXJpdDsgbWFyZ2luOiAwLjg4OXJlbSAwO1xcXCI+XFxuICAgIFlvdSdsbCBuZWVkIHRvIGluc3RhbGwgPGI+XCIuY29uY2F0KHNlbGVjdGVkV2FsbGV0LCBcIjwvYj4gdG8gY29udGludWUuIE9uY2UgeW91IGhhdmUgaXQgaW5zdGFsbGVkLCBnbyBhaGVhZCBhbmRcXG4gICAgPHNwYW5cXG4gICAgY2xhc3M9XFxcImJuLW9uYm9hcmQtY2xpY2thYmxlXFxcIlxcbiAgICAgIHN0eWxlPVxcXCJjb2xvcjogIzRhOTBlMjsgZm9udC1zaXplOiAwLjg4OXJlbTsgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxcIlxcbiAgICAgIG9uY2xpY2s9e3dpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTt9PlxcbiAgICAgIHJlZnJlc2ggdGhlIHBhZ2UuXFxuICAgIDwvc3Bhbj5cXG4gICAgXCIpLmNvbmNhdChzZWxlY3RlZFdhbGxldCA9PT0gJ09wZXJhJyA/ICc8YnI+PGJyPjxpPkhpbnQ6IElmIHlvdSBhbHJlYWR5IGhhdmUgT3BlcmEgaW5zdGFsbGVkLCBtYWtlIHN1cmUgdGhhdCB5b3VyIHdlYjMgd2FsbGV0IGlzIDxhIHN0eWxlPVwiY29sb3I6ICM0YTkwZTI7IGZvbnQtc2l6ZTogMC44ODlyZW07IGZvbnQtZmFtaWx5OiBpbmhlcml0O1wiIGNsYXNzPVwiYm4tb25ib2FyZC1jbGlja2FibGVcIiBocmVmPVwiaHR0cHM6Ly9oZWxwLm9wZXJhLmNvbS9lbi90b3VjaC9jcnlwdG8td2FsbGV0L1wiIHJlbD1cIm5vcmVmZXJyZXIgbm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj5lbmFibGVkPC9hPjwvaT4nIDogJycsIFwiXFxuICAgIDwvcD5cXG4gICAgXCIpO1xuICB9XG59O1xuXG52YXIgbW9iaWxlV2FsbGV0SW5zdGFsbE1lc3NhZ2UgPSBmdW5jdGlvbiBtb2JpbGVXYWxsZXRJbnN0YWxsTWVzc2FnZShoZWxwZXJzKSB7XG4gIHZhciBzZWxlY3RlZFdhbGxldCA9IGhlbHBlcnMuc2VsZWN0ZWRXYWxsZXQ7XG4gIHJldHVybiBcIlxcbiAgPHAgc3R5bGU9XFxcImZvbnQtc2l6ZTogMC44ODlyZW07XFxcIj5cXG4gICAgWW91J2xsIG5lZWQgdG8gaW5zdGFsbCA8Yj5cIi5jb25jYXQoc2VsZWN0ZWRXYWxsZXQsIFwiPC9iPiB0byBjb250aW51ZS4gQ2xpY2sgYmVsb3cgdG8gaW5zdGFsbCBhbmQgdGhlbiBsb2FkIHRoaXMgRGFwcCB3aXRoIDxiPlwiKS5jb25jYXQoc2VsZWN0ZWRXYWxsZXQsIFwiPC9iPi5cXG4gIDwvcD5cXG4gIFwiKTtcbn07XG5cbmV4cG9ydCB7IGV4dGVuc2lvbkluc3RhbGxNZXNzYWdlIGFzIGUsIG1vYmlsZVdhbGxldEluc3RhbGxNZXNzYWdlIGFzIG0gfTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/bnc-onboard/dist/esm/content-eeaca1cc.js\n");

/***/ }),

/***/ "./node_modules/bnc-onboard/dist/esm/opera-touch-f1bf8727.js":
/*!*******************************************************************!*\
  !*** ./node_modules/bnc-onboard/dist/esm/opera-touch-f1bf8727.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _content_eeaca1cc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content-eeaca1cc.js */ \"./node_modules/bnc-onboard/dist/esm/content-eeaca1cc.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\nvar img = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAGJUlEQVR4AcWZc3yjSRyHe7ZvbZtxUtt203ht27Zte9P9VGvbtq26QZW5frPMZd4iyX3uj6dJ5jdv5hlPpnZePf0tZmxcwletE3MrsZenObVc9VTBTszpD1pveSoVJugFiCGPNWVY9BAK5yXmjRIkF+7gJWpv8lL06dxkneFzeEm6NF6S9hryQLrlrNNt/lPBQNb+7xy35gUK12kSRVv0GfYJReQDws06E5DmsJOY4Li7IA2y+A60qk0F0YXOy/S7XZYXEpcNRcRxmcaMz2P8YecJJy6JNHWYZQLSuINOFbpOz9qMXrBasKt35o+uM7WDXWdk6SHgOltDBTHk4YVsIy1qDyQNv40tEeRhuS157dDjZAeUYZFguPjpX6ip17RC4jFRSwUxYGyZCr1etfxefhLgfdsKPQgTrX9uZwTvOfVGL+JX6PRzuQQh5zdYr/YdW0S8R2ioIOY7PIu4OK3fy7UTS9z+7FYT4xSgQOeKA9ycKg1cAVmHSgOJqGI/c/7qbXxFPiZJardCLmiAgfj301AxxvpkZvs4q/vQvvjzSQBRn2qjznlVHUU8qgylghgk8VypgsFddKMhENRNy0hwz4Ks4LCL/mWdiWhdSAZUH0tKIrLWwM4lCoYpdJ6hKp2hNCKlekl51zNZxYHNImtOeRxZayqJqDXJDKTH1RmT5l1hK5cqiK6NjNadiJIZSHi8hgpikfG69ZbuDu1qzIqV1JlJmGhfbwFpX39eEsaxmSBaJTaikERFaktA91LprG9g6bYIIACRkuhZf42HiSCM0XoQjAnWUEEs2j1jIvJbAwrv0XilpnuDpYQJVMJEUOaU5R3np9fG+moJE3F+2lyp6GUrawVvRU79aUDjNccGNllP+jVebQbSUYF51VM4HwUVIv08qbeBxHtoqCAmddYdpq76FjCo6brRY5pvI8OabqCCGPIYBVEoCpe5FxGJi4YKYgqhbpJlQvRuHtdsuw4iNKa0TCTjmqlTMfTs0G1yofal1FFLSkLJT5fYSnBOm4SqU1okPoQIE4jvYR1ubhfFvaaU8/UFMpGWMCHna3MVDm+EthLEbJ7ZOvXMrNY7CTMpmcv5uzraoesUgvxiCQ2ND4Jp9OXFcla2Pbp1Qdu9pCRWso9OMU6QkgSVfL1RUMXVVLe14CrOUbKMdZCR1ezjS/9XwXXcUwSSNBCDIL2LKYK27mI1/1zKFt45soF7khFjF2N2YpJAhhnbT5Idgssn1IKLBkjS2Mw7m4VJ8nGZKakVUQFbLjOPIrZX3y688DxReJlA8t+8S79w27jMYKEubqETSkEho6BKaLDpQr3X9ZznBxEae+zvEAwBtPTHrQ4SJQlit/lwDLKWFNH1MZBIFl6lghjymBwWSh+HtjksoMcw/iCRKrpOZZfoWtZxv+Nck+OWnJ190jgOeTlUMARs0c3o3kMul/P2OZ8jNE55njXscbpketwCmARGQW4WVRCtiMlkzXKDMXU4YE8qJI56HiU0EEMlqEd+tCLWPUjSQEzGfrvJ0iP//oCDnc4G7CVMXA0+QlABnBnNBD+ORax53PRioTQGsiw62WDJuBae9OJKWCJhAnGMvRJ/duJYDwkZ6yUd9hsiZqVnzPe45FOede+hZMOZB+Jt5HbsJiqIvWm3pEOZfrijGyEia/uYCkSVrMdZ6LIP3cFEWoeVTpB7pVpPHslWUkHsqXz1EgydMl99yFtcV0NG2uo2I6o2d41jBjVHK0H2AxB702nBkred56a97biQvOww3wyk5/eeVfy6aC1TRfGnRMn4pleJtPl5KoiBlT6JBCL6XlOuFfSddgSvad2nGbK6TydMQAyv91WLlpTUC6VeWiqbHhgma3QwS9LoAGEipM4x0qn5PrI1YBGBmGHoKFISyLMvatEbHAZK253K/CNHWld9UFJ7KymJwCo7jK/jeMuNssfjppLzignkgnKi8T3SEFPWWZ2CKw6bXwHj6gJfHllhXkZ85dmEidA/FpiBZwJ+X6Z2/WFdQHn2dIt2g/YVB3Kkf3QfL/59YIr4t343xb/2zRD/1qfoc5CGGPJIfx86DM9Yf4luoazqjy4KCEt/7bQY4D3ScKNl7b8h/gGlc8526KioZAAAAABJRU5ErkJggg==\";\nvar img$1 = \"data:image/png;base64,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\";\n\nfunction operaTouch(options) {\n  var preferred = options.preferred,\n      label = options.label,\n      iconSrc = options.iconSrc,\n      svg = options.svg;\n  return {\n    name: label || 'Opera Touch',\n    iconSrc: iconSrc || img,\n    iconSrcSet: iconSrc || img$1,\n    svg: svg,\n    wallet: function () {\n      var _wallet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(helpers) {\n        var getProviderName, getAddress, getBalance, getNetwork, provider, enabled;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                getProviderName = helpers.getProviderName, getAddress = helpers.getAddress, getBalance = helpers.getBalance, getNetwork = helpers.getNetwork;\n                provider = window.ethereum || window.web3 && window.web3.currentProvider;\n                enabled = false;\n                return _context.abrupt(\"return\", {\n                  provider: provider,\n                  \"interface\": provider && getProviderName(provider) === undefined ? {\n                    name: 'Opera Touch',\n                    connect: function connect() {\n                      return provider.enable().then(function (res) {\n                        enabled = true;\n                        return res;\n                      });\n                    },\n                    address: {\n                      get: function get() {\n                        return enabled ? getAddress(provider) : Promise.resolve(null);\n                      }\n                    },\n                    network: {\n                      get: function get() {\n                        return enabled ? getNetwork(provider) : Promise.resolve(null);\n                      }\n                    },\n                    balance: {\n                      get: function get() {\n                        return enabled ? getBalance(provider) : Promise.resolve(null);\n                      }\n                    }\n                  } : null\n                });\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function wallet(_x) {\n        return _wallet.apply(this, arguments);\n      }\n\n      return wallet;\n    }(),\n    type: 'injected',\n    link: 'https://www.opera.com/mobile/touch',\n    installMessage: _content_eeaca1cc_js__WEBPACK_IMPORTED_MODULE_0__[\"e\"],\n    mobile: true,\n    preferred: preferred,\n    osExclusions: ['Android']\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (operaTouch);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYm5jLW9uYm9hcmQvZGlzdC9lc20vb3BlcmEtdG91Y2gtZjFiZjg3MjcuanM/YWZhMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUEsNEVBQTRFLE1BQU0sMEJBQTBCLHdCQUF3QixFQUFFLGdCQUFnQixlQUFlLFFBQVEsRUFBRSxpQkFBaUIsZ0JBQWdCLEVBQUUsT0FBTyw0Q0FBNEMsRUFBRTs7QUFFdlEsZ0NBQWdDLHFCQUFxQixtQ0FBbUMsZ0RBQWdELGdDQUFnQyx3QkFBd0Isd0VBQXdFLEVBQUUsdUJBQXVCLHVFQUF1RSxFQUFFLGtCQUFrQixFQUFFLEVBQUUsR0FBRzs7QUFFOVQ7QUFDckUsMEJBQTBCO0FBQzFCLDRCQUE0Qjs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxvQkFBb0Isc0RBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUseUVBQVUiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYm5jLW9uYm9hcmQvZGlzdC9lc20vb3BlcmEtdG91Y2gtZjFiZjg3MjcuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7IHRyeSB7IHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTsgdmFyIHZhbHVlID0gaW5mby52YWx1ZTsgfSBjYXRjaCAoZXJyb3IpIHsgcmVqZWN0KGVycm9yKTsgcmV0dXJuOyB9IGlmIChpbmZvLmRvbmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0gZWxzZSB7IFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTsgfSB9XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7IHJldHVybiBmdW5jdGlvbiAoKSB7IHZhciBzZWxmID0gdGhpcywgYXJncyA9IGFyZ3VtZW50czsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpOyBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkgeyBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7IH0gZnVuY3Rpb24gX3Rocm93KGVycikgeyBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTsgfSBfbmV4dCh1bmRlZmluZWQpOyB9KTsgfTsgfVxuXG5pbXBvcnQgeyBlIGFzIGV4dGVuc2lvbkluc3RhbGxNZXNzYWdlIH0gZnJvbSAnLi9jb250ZW50LWVlYWNhMWNjLmpzJztcbnZhciBpbWcgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ2dBQUFBb0NBWUFBQUNNL3JodEFBQUdKVWxFUVZSNEFjV1pjM3lqU1J5SGU3WnZiWnR4VXR0MjAzaHQyN1p0ZTlQOVZHdmJ0cTI2UVpXNWZyUE1aZDRpeVgzdWo2ZEo1amR2NWhsUHBuWmVQZjB0Wm14Y3dsZXRFM01yc1plbk9iVmM5VlRCVHN6cEQxcHZlU29WSnVnRmlDR1BOV1ZZOUJBSzV5WG1qUklrRis3Z0pXcHY4bEwwNmR4a25lRnplRW02TkY2UzlocnlRTHJsck5OdC9sUEJRTmIrN3h5MzVnVUsxMmtTUlZ2MEdmWUpSZVFEd3MwNkU1RG1zSk9ZNExpN0lBMnkrQTYwcWswRjBZWE95L1M3WFpZWEVwY05SY1J4bWNhTXoyUDhZZWNKSnk2Sk5IV1laUUxTdUlOT0ZicE96OXFNWHJCYXNLdDM1byt1TTdXRFhXZGs2U0hnT2x0REJUSGs0WVZzSXkxcUR5UU52NDB0RWVSaHVTMTU3ZERqWkFlVVlaRmd1UGpwWDZpcDE3UkM0akZSU3dVeFlHeVpDcjFldGZ4ZWZoTGdmZHNLUFFnVHJYOXVad1R2T2ZWR0wrSlg2UFJ6dVFRaDV6ZFlyL1lkVzBTOFIyaW9JT1k3UEl1NE9LM2Z5N1VUUzl6KzdGWVQ0eFNnUU9lS0E5eWNLZzFjQVZtSFNnT0pxR0kvYy83cWJYeEZQaVpKYXJkQ0xtaUFnZmozMDFBeHh2cGtadnM0cS92UXZ2anpTUUJSbjJxanpubFZIVVU4cWd5bGdoZ2s4VnlwZ3NGZGRLTWhFTlJOeTBod3o0S3M0TENML21XZGlXaGRTQVpVSDB0S0lyTFd3TTRsQ29ZcGRKNmhLcDJoTkNLbGVrbDUxek5aeFlITkltdE9lUnhaYXlxSnFEWEpES1RIMVJtVDVsMWhLNWNxaUs2TmpOYWRpSklaU0hpOGhncGlrZkc2OVpidUR1MXF6SXFWMUpsSm1HaGZid0ZwWDM5ZUVzYXhtU0JhSlRhaWtFUkZha3RBOTFMcHJHOWc2YllJSUFDUmt1aFpmNDJIaVNDTTBYb1FqQW5XVUVFczJqMWpJdkpiQXdydjBYaWxwbnVEcFlRSlZNSkVVT2FVNVIzbnA5ZkcrbW9KRTNGKzJseXA2R1VyYXdWdlJVNzlhVURqTmNjR05sbFAralZlYlFiU1VZRjUxVk00SHdVVkl2MDhxYmVCeEh0b3FDQW1kZFlkcHE3NkZqQ282YnJSWTVwdkk4T2FicUNDR1BJWUJWRW9DcGU1RnhHSmk0WUtZZ3FoYnBKbFF2UnVIdGRzdXc0aU5LYTBUQ1RqbXFsVE1mVHMwRzF5b2ZhbDFGRkxTa0xKVDVmWVNuQk9tNFNxVTFva1BvUUlFNGp2WVIxdWJoZkZ2YWFVOC9VRk1wR1dNQ0huYTNNVkRtK0V0aExFYko3Wk92WE1yTlk3Q1RNcG1jdjV1enJhb2VzVWd2eGlDUTJORDRKcDlPWEZjbGEyUGJwMVFkdTlwQ1JXc285T01VNlFrZ1NWZkwxUlVNWFZWTGUxNENyT1ViS01kWkNSMWV6alMvOVh3WFhjVXdTU05CQ0RJTDJMS1lLMjdtSTEvMXpLRnQ0NXNvRjdraEZqRjJOMllwSkFoaG5iVDVJZGdzc24xSUtMQmtqUzJNdzdtNFZKOG5HWktha1ZVUUZiTGpPUElyWlgzeTY4OER4UmVKbEE4dCs4Uzc5dzI3ak1ZS0V1YnFFVFNrRWhvNkJLYUxEcFFyM1g5WnpuQnhFYWUrenZFQXdCdFBUSHJRNFNKUWxpdC9sd0RMS1dGTkgxTVpCSUZsNmxnaGp5bUJ3V1NoK0h0amtzb01jdy9pQ1JLcnBPWlpmb1d0Wnh2K05jaytPV25KMTkwamdPZVRsVU1BUnMwYzNvM2tNdWwvUDJPWjhqTkU1NW5qWHNjYnBrZXR3Q21BUkdRVzRXVlJDdGlNbGt6WEtETVhVNFlFOHFKSTU2SGlVMEVFTWxxRWQrdENMV1BValNRRXpHZnJ2SjBpUC8vb0NEbmM0RzdDVk1YQTArUWxBQm5Cbk5CRCtPUmF4NTNQUmlvVFFHc2l3NjJXREp1QmFlOU9KS1dDSmhBbkdNdlJKL2R1SllEd2taNnlVZDloc2lacVZuelBlNDVGT2VkZStoWk1PWkIrSnQ1SGJzSmlxSXZXbTNwRU9aZnJpakd5RWlhL3VZQ2tTVnJNZFo2TElQM2NGRVdvZVZUcEI3cFZwUEhzbFdVa0hzcVh6MUVneWRNbDk5eUZ0Y1YwTkcydW8ySTZvMmQ0MWpCalZISzBIMkF4QjcwMm5Ca3JlZDU2YTk3YmlRdk93dzN3eWs1L2VlVmZ5NmFDMVRSZkduUk1uNHBsZUp0UGw1S29pQmxUNkpCQ0w2WGxPdUZmU2RkZ1N2YWQybkdiSzZUeWRNUUF5djkxV0xscFRVQzZWZVdpcWJIaGdtYTNRd1M5TG9BR0VpcE00eDBxbjVQckkxWUJHQm1HSG9LRklTeUxNdmF0RWJIQVpLMjUzSy9DTkhXbGQ5VUZKN0t5bUp3Q283aksvamVNdU5zc2ZqcHBMemlnbmtnbktpOFQzU0VGUFdXWjJDS3c2Ylh3SGo2Z0pmSGxsaFhrWjg1ZG1FaWRBL0ZwaUJad0orWDZaMi9XRmRRSG4yZEl0MmcvWVZCM0trZjNRZkwvNTlZSXI0dDM0M3hiLzJ6UkQvMXFmb2M1Q0dHUEpJZng4NkRNOVlmNGx1b2F6cWp5NEtDRXQvN2JRWTREM1NjS05sN2I4aC9nR2xjODUyNktpb1pBQUFBQUJKUlU1RXJrSmdnZz09XCI7XG52YXIgaW1nJDEgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRkFBQUFCUUNBTUFBQUM1endLZkFBQUMvVkJNVkVWSGNFek9Ucmx0UE9sUlZQQmhINHk3UGRKNE9NUmhOY2xaRm90bE9lL1ZUN3BqUFBWaE8vaGZPdmRnT2ZaaEs4bFdGNEEwbStiaFlhRlBISlJZR0h4TURwTlBidlZrUGZQTFJyYy9vZTFoTi9WYVV2QkFHbnhpUVBOQW12QnhJcHM0cC9GZEVuUmJGb1p5RzV1eE9kQ1ZNYnRuT3ZLM1A4eGtPUFZmTU9BNHFmQmREVzNmWGErNU5ObWpOc2ZBUGRCbE9mRGpZcUU3cVBkNE44S2pNY1pkRG5DeVVaMjFPdFZpRW5BNHNQWTFwKzJsTk1mY1hhZkhTc0ZoTk5kTWVQaGhPdk5OZFBhNE85RS9HSGpvWXA1a0pLU0pOYjd3YlpFNHIvajdkWW8zcy9lbFNKaFhWZmRWV3ZLYU43OXFKNXZXVmJJNnRQcFdJSksxTzg5YU5lc3VMb2MzRkhEeGE1UllMK2FWTDdsaEZHOXlOZEUwc2ZDaE04Wm9KS2hXV3ZSV1cvanJhNUM0UHMxN0o2ZERqZk43SzZkbUk1dytrZXhxSktlWkw3cERVOEdKS3JKY0hZMnROODd3YTVRMnRQVXhXN0ZrSTVocUpwbE1jZmRoT3ZQSFJjZTJPdFhLU3NIVlZMRmRFRzVOWE9WU1l2ZFhMN2ZVWEtWTUhaczdzL3RrTi9YclpwdGROdk05aXVYalk1ODJGRzg2RVd0TUdvdXFOOHlQTDdjN2V0SllGcEpWWFBaZ0o4Uk9HWWN3RFdZeVM2U05MclJ0RzQyS0xMSmFHWVJPRnFkSGFOcyt0djg1dGZ3NEdYYzhGSFUxS0laaE9mZGhPUFZoTi9SaE5leTNPOVZoTnZEWldhcVJNTGprWTV6RVJzWFJVclMxT3RSZ0w5dGdNdU9wTjhxdk9jK2dNOE9YTWJ6MGNvZGJFSHRpT2ZsZk5PaGRIWjljRjQ2ck9NM3BaNVdjTTcvdmJKRDllSUtuTnNoZEg2bXpPdExJU3IvZlg2S01MN05mTE5GZks4eGZLY1plSnJ5aU5jVmVJckh4Ym95L1Fjdi9mMzIvV0pCT0ZxaFdIN1Y1THBsT0g4ZU5PNXhWS05OTUt1alZaWXZvYllaRWkvWStvL2d1UTVsSGp2eFVYUFlzRVdoQW12YzFiY05hU2ZWU1pmWkNrL1V5Rlc5d0pwNTJKNkphVHZZOW52VjZLYVpYVnZaZElJOVlVZlpjUmZVa0FWTTVqdUJQYlBaL0txbE9ISVFuQ2w5U1l2WkxkL2FJTGJCSWdQVktlL1ZtSTVkZVFQWTRzL2c4Rm5WTWN2WkZHWHhmUFBWWEg0cUVMYTVnSXBGdEpabzZxdlZIaHZZcVJ0UVRBQUFBbkhSU1RsTUEvaDBNRi80REJnd3NHSC9lOHRmQVJURmlKVEQrZnowS0Y4MDBZMkFqVUVqdWtpTEg3S1ZtYmZDRTJSQXJlRVpRS1d2K2g4UDkzV1hEV0xxejFIaHhzK3lUc1VRM3FlaWQxZEg3OHJqTndvdndnYW5rL0ptWC9XT28vclhnb2kzWTlYbDB2dkRVbG80L3ZKRDExckQ3K3VmenhzRHY2c3J4ZjFqMWNOQmI1SkhQL2VYcjlzN042c0grNHB6cDlkMzkxR0Rpdk92Ky90WHN1YkNLR1BXU0FBQUc1MGxFUVZSNFhxVFNXMnNpU1JpQTRjS1dhbmMxWUJOSkVFM0h6VUlJa292Z25ibHhSUUlTSXFLZ01JTkVJVVluSmhBbnljMGtRMXdJaVNCaFlqTEx6RGp6cnp5ZnpmbDhQczNza1MxYjJlMHFOVzEybitxaVFicGY2cU1GZ21pV1lUVERpSVpobEJEOFAwcEdvOU9hWFhyOUtLSjN1Y3hhbEtYQWZ3T1ZMSmZUZndyWlpqbTIwQ2hLNmpRTSsveVRRa2l4T3JQZWRzOHpXNy9aWE5waEpmWE1KS3Z4aDJ4L05yai95Sm0xZmRJeVN0QTJtdFdPaG13N2lkcENGN2VycGNUT2NjMk9MYVRYdFRzNG8vSHJxeDBlcm5rY3llV0MwU1FTalFaemtSV3ZWc01DWWJSU1o4NGl4U3dQeWhVandhU2psRG5uWkRLT1pEUzM0aDhXUGlURmVJdlpJaTZSeUVhaWpzd1JjbDUzVkZWS0J2MUNSVmEzRXNjVlU5bmpYRExESFl1QWZsb05MRDc1Y1JpRE4wNUlwZERwWWh0VnF5VWtnM2J0eGhVZFg5U2RvQlZJR2J4LzhWeWpIWS9mUkdNYmF5YW4wMmxhMjRpaEpzOURxWFJlTXFrbG9BV3F5M2hOU0YxL2lEbmxpdG9yWW9YNjgrcERnMWlyb3NwZ3ZNRmRwajRFN0FxeGhBWWNTRXZFeTg2MXhtTHpxVm5EL0NYaHhoaDRLOGNINnBTL0NYOGxtZFRpSnZPaTNpUHUwaGlRTno0cFZvZGpSUERNdEF3QmdWWVpUd2lQUm9zWWdrWlFiWHAzaG5zWGJuaFNORS9rQ2lmR0xoRm9pcGIzblpIRmw4UW9xcTZsUXVFQ3JkckZNYmhwMEp4RThjdXZoQitXc1E5RExWb0tGN2lDUjBXQkZxREVQa01FOS92ay9LSGQ2eGZwZEpxLzAwczlXSThBd3pQN3VCazdmK2gxVHhyWjQrMGxDdzJlMHV2N25XQzEvenVCMnpPMlIvQU1nU2RKeG4yM3VEbWYrSi9nWWtOdnpDSUNUNEpiMWx2QzZ4RUlhaWpMQVdsQkNnUjBicFgvd00yOW91czkxZGcyNFdEQURZU01XTXVFMS9WL3QwaTZuU2ZJdW1rZ1JEeFJxWlFyUE9XNUY5OXpRZmRQZVpMbE95Qm9jR3F5d3JkYnFVei9DQkRZTFR2RTVmTlNFUkFFUmI1ZDNLbFZBYXNUOStUSllFYzNCWVFOamsrZTRpWjdKU2c0OVBQMkhhNURKb0pBR0QzeC9qZmMxY1FJQUhDZy94RHZIWFlzVUtBTmRPL21GUkdjN29XQWxpN2MzWDNEbHF5L3JTQ2MycndpL0YxNi9mNmtkY1VCSEw0YmVJRUw5MHJBUmNKaWpFaUZSaEdNUWtta3hoQit4Smc0TWt6UU5tdUNTUnViRFpNbDFCOUpYYVl4V1UzVEpkM1dkeGVRMWc1MUhRUG5sT3JhYmxNbldyVDJIOWdmc0pmYkc5UDRZZ2VVZXM5WEpxZnh1VGNoNGNVbjUrUnd6N2w0K3FXVXVvRkxIUWlob0Z4Q2tSQlBQd2VtMFRxN3d5d0lwcmdhc3FERTgrMGozSDNQVGNxaWpTQUgrU3Q2VVBqa09RdE5FZm4wUGdoZW1PNm5hamdlUmREOTl1SzExWVRCdHA1SFAySXU5UFJUUmdXZnp3bHBaYVRCZGhCYzdtbW01SXBVTklJaER6YTNMd09mdEpVSVJ0OGgrR1Q1Q1FZRnp6ZkNkYnkzZnU0UnJ1T2VvcUR4SENNY2FIOEtoSnJ6UHhzOEdFMXAwZlpLZ203VEx5eGd2VHQ2QTJYaDRJeFR4RDlzWjJnQmx3OVdoMWtlTHhJL2VyVC96aEl1NURkVDd6Y29VaUNvNkNBTE11MUxQMkNXOUU1VGZ2dUtBQ3paOWtXWjlTaUk4UnMwK1EwVzlIakNEWlkyaE5ZQXA1bk9Id0U4WEJheUk0QnV2cFRBZTRrQlUrR1FTb0ZlaE95UTB2aUhFMnNKZ2JXRXVRa0ZKZFdLU1ZRUjRGbXlZL1RTV21KR0dKelJtd296azNXaUhxNlQ1S0EzRHlkbVRxQjBoZE4wL0NyQzQ3bklKTW1yQ0RPQWVwZ0tBM1A4c3NSR0FkNVlmb2dtZlFVd1hGeExhU2VMelRrZTVjUHlzajNEbjdqSHQ1eWE0dWxsWWZsNDlPUkNTVFpjYmxrTS9zZkFyWnQwY2Ixa0hCc1hqaERkbktYTWtqZ3Z3OTRJUTczVndNWGpzYmdRR3o1N1djeVhmd1ZHQnFnVHNpL2pRSXc5ODIrRlpPUTl5TWNJZ3FLYXpuZ000TTU0WEpwOG85OERQak0ySlprOEJrMGFaZlQvOVZvY3NEZXFhZ0hQa1RhTjk5S3hYamxUdXFkeCtSNENvdzdtMU4vYjNuUjYvdVJHK25vYlNoZFZqb2ZRT0VOVGdNZ1lUczlqMG4wWFBhN1R5U2JWK05RendLRkNQY2pVRVo3SDlhR2l3YVhCY294TE5USDdiQmJkQWc1VnlhbDgySEZ4RGpmLzZtcVByNlZKY3p3ZG10WXdyc0RFTERSVlhCQ0FGc0hpaTdsWGM2MVRBVmRMY1hGVlE4RmZnSlVWcjBvd0NWaXNmQUhzN1YyMWVidTZoZ0tCd05DRTF4dGN3U1V6SzBOWUR4UmxIWlcvQVh0N3JiYXN0d3Z4QmpkeFNTVG9BUE1GMUxmdi9RN2tjcTNQczV2SlRDWUpvYStDNC8xbHRpV1J1L0xlSDBBdWwzdGoyODlzSVpsalczbXZzOTJlK3JKYnUwUjgrOXJHenM2RzBBNnk4WGQzZHY5MWNxc2drOXpQMm5hdkQzNGhKamx2M2JYWGJxd0NPOXVycTMrOTNPMjJaWTkwNys1ZS8yaFFxYWFJaU5TRE56NWZoTGFSeFg4T1h5S0hoNHNQSG56MU1ab3VzWHFsN3U1blA1LzJ3Wkd2NytyY1l1cGQwQktwMnE2ejF2MVVRdDEzdW0vcXBUUk5rQUdybzY2cUhkTmRzVGJXMVJYQzZLUFJlbVhNcnF5cUIydEJqQlpYMWRwUjB0cFlZRDNLU2FuemtFaXJsSGI3V0lIZHJsUkx5NDN0UDQydUUxMUtwZjAyQUFBQUFFbEZUa1N1UW1DQ1wiO1xuXG5mdW5jdGlvbiBvcGVyYVRvdWNoKG9wdGlvbnMpIHtcbiAgdmFyIHByZWZlcnJlZCA9IG9wdGlvbnMucHJlZmVycmVkLFxuICAgICAgbGFiZWwgPSBvcHRpb25zLmxhYmVsLFxuICAgICAgaWNvblNyYyA9IG9wdGlvbnMuaWNvblNyYyxcbiAgICAgIHN2ZyA9IG9wdGlvbnMuc3ZnO1xuICByZXR1cm4ge1xuICAgIG5hbWU6IGxhYmVsIHx8ICdPcGVyYSBUb3VjaCcsXG4gICAgaWNvblNyYzogaWNvblNyYyB8fCBpbWcsXG4gICAgaWNvblNyY1NldDogaWNvblNyYyB8fCBpbWckMSxcbiAgICBzdmc6IHN2ZyxcbiAgICB3YWxsZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfd2FsbGV0ID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlKGhlbHBlcnMpIHtcbiAgICAgICAgdmFyIGdldFByb3ZpZGVyTmFtZSwgZ2V0QWRkcmVzcywgZ2V0QmFsYW5jZSwgZ2V0TmV0d29yaywgcHJvdmlkZXIsIGVuYWJsZWQ7XG4gICAgICAgIHJldHVybiByZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBnZXRQcm92aWRlck5hbWUgPSBoZWxwZXJzLmdldFByb3ZpZGVyTmFtZSwgZ2V0QWRkcmVzcyA9IGhlbHBlcnMuZ2V0QWRkcmVzcywgZ2V0QmFsYW5jZSA9IGhlbHBlcnMuZ2V0QmFsYW5jZSwgZ2V0TmV0d29yayA9IGhlbHBlcnMuZ2V0TmV0d29yaztcbiAgICAgICAgICAgICAgICBwcm92aWRlciA9IHdpbmRvdy5ldGhlcmV1bSB8fCB3aW5kb3cud2ViMyAmJiB3aW5kb3cud2ViMy5jdXJyZW50UHJvdmlkZXI7XG4gICAgICAgICAgICAgICAgZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwge1xuICAgICAgICAgICAgICAgICAgcHJvdmlkZXI6IHByb3ZpZGVyLFxuICAgICAgICAgICAgICAgICAgXCJpbnRlcmZhY2VcIjogcHJvdmlkZXIgJiYgZ2V0UHJvdmlkZXJOYW1lKHByb3ZpZGVyKSA9PT0gdW5kZWZpbmVkID8ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnT3BlcmEgVG91Y2gnLFxuICAgICAgICAgICAgICAgICAgICBjb25uZWN0OiBmdW5jdGlvbiBjb25uZWN0KCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm92aWRlci5lbmFibGUoKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczoge1xuICAgICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVuYWJsZWQgPyBnZXRBZGRyZXNzKHByb3ZpZGVyKSA6IFByb21pc2UucmVzb2x2ZShudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG5ldHdvcms6IHtcbiAgICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbmFibGVkID8gZ2V0TmV0d29yayhwcm92aWRlcikgOiBQcm9taXNlLnJlc29sdmUobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBiYWxhbmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW5hYmxlZCA/IGdldEJhbGFuY2UocHJvdmlkZXIpIDogUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSA6IG51bGxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZSk7XG4gICAgICB9KSk7XG5cbiAgICAgIGZ1bmN0aW9uIHdhbGxldChfeCkge1xuICAgICAgICByZXR1cm4gX3dhbGxldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gd2FsbGV0O1xuICAgIH0oKSxcbiAgICB0eXBlOiAnaW5qZWN0ZWQnLFxuICAgIGxpbms6ICdodHRwczovL3d3dy5vcGVyYS5jb20vbW9iaWxlL3RvdWNoJyxcbiAgICBpbnN0YWxsTWVzc2FnZTogZXh0ZW5zaW9uSW5zdGFsbE1lc3NhZ2UsXG4gICAgbW9iaWxlOiB0cnVlLFxuICAgIHByZWZlcnJlZDogcHJlZmVycmVkLFxuICAgIG9zRXhjbHVzaW9uczogWydBbmRyb2lkJ11cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgb3BlcmFUb3VjaDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/bnc-onboard/dist/esm/opera-touch-f1bf8727.js\n");

/***/ })

}]);