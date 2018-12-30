"use strict";function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})));for(var r=o,s=0;s<r.length;s++)i=r[s],_defineProperty(e,i,n[i])}var i;return e}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e,t){"function"==typeof define&&define.amd?define(["b"],t):"object"===("undefined"==typeof module?"undefined":_typeof(module))&&module.exports?module.exports=t(require("b")):e.JsDropdownMenu=t(e.b)}("undefined"!=typeof self?self:void 0,function(e){return function(){function t(e){_classCallCheck(this,t),this.options=_objectSpread({},{class:"dropdown-menu",openClass:"dropdown-menu-show"},e),this.init()}return _createClass(t,[{key:"init",value:function(){var t=this;document.addEventListener("click",function(e){t.handleClick(e)})}},{key:"handleClick",value:function(e){e.target.classList.contains(this.options.class+"-button")||e.target.closest("."+this.options.class+"-button")?this.handleDropdown(e.target):this.handleClose(e.target)}},{key:"handleDropdown",value:function(e){var t=e.closest("."+this.options.class);t.classList.toggle(this.options.openClass),this.handleClose(t)}},{key:"handleClose",value:function(e){for(var t,n=this,o=document.getElementsByClassName(this.options.class),r=0;r<o.length;r++)(t=o[r])!==e&&n.removeClass(t)}},{key:"removeClass",value:function(e){e.classList.remove(this.options.openClass)}}]),t}()});