'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Foundation select by Samuel Moncarey
 * Version 0.0.0
 * Licensed under MIT Open Source
 */

!function ($) {
    "use strict";

    /**
     * Stars module.
     * @module foundation.stars
     * @requires foundation.util.keyboard
     */

    var Stars = function () {
        function Stars(element, options) {
            _classCallCheck(this, Stars);

            this.$element = element;

            this.options = $.extend({}, Stars.defaults, this.$element.data(), options);

            this._init();

            Foundation.registerPlugin(this, 'Stars');
            Foundation.Keyboard.register('Stars', {
                'ARROW_UP': 'rate_up',
                'ARROW_DOWN': 'rate_down'
            });
        }

        _createClass(Stars, [{
            key: '_init',
            value: function _init() {}

            /**
             * Adds event listeners to the element utilizing the triggers utility library.
             * @function
             * @private
             */

        }, {
            key: '_events',
            value: function _events() {
                var _this = this;
            }

            /**
             * Destroys the select.
             * @function
             */

        }, {
            key: 'destroy',
            value: function destroy() {
                Foundation.unregisterPlugin(this);
            }
        }], [{
            key: 'defaults',
            get: function get() {
                return {
                    iconClass: 'fa-caret-down',
                    placeholder: '',
                    value: ''
                };
            }
        }]);

        return Stars;
    }();

    // Window exports


    Foundation.plugin(Stars, 'Stars');
}(jQuery);