/* global define */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['b'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('b'));
    } else {
        // Browser globals (root is window)
        root.JsDropdownMenu = factory(root.b);
    }
}(typeof self !== 'undefined' ? self : this, function (b) {
    class JsDropdownMenu {
        constructor(options) {
            this.options = {
                ...{
                    'class': 'dropdown-menu',
                    'openClass': 'dropdown-menu-show'
                },
                ...options
            };
            this.init();
        }
        init() {
            document.addEventListener('click', (e) => {
                this.handleClick(e);
            });
        }
        handleClick(e) {
            if (e.target.classList.contains(this.options.class + '-button') || e.target.closest('.' + this.options.class + '-button')) {
                this.handleDropdown(e.target);
            } else {
                this.handleClose(e.target);
            }
        }
        handleDropdown(e) {
            const el = e.closest('.' + this.options.class);
            el.classList.toggle(this.options.openClass);
            this.handleClose(el);
        }
        handleClose(elTarget) {
            const elements = document.getElementsByClassName(this.options.class);
            elements.forEach((el) => {
                if (el !== elTarget) {
                    this.removeClass(el);
                }
            });
        }

        removeClass(el) {
            el.classList.remove(this.options.openClass);
        }
    }
    return JsDropdownMenu;
}));