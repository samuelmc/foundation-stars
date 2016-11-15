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

    class Stars {

        constructor(element, options) {
            this.$element = element;

            this.options = $.extend({}, Stars.defaults, this.$element.data(), options);

            this._init();

            Foundation.registerPlugin(this, 'Stars');
            Foundation.Keyboard.register('Stars', {
                'ARROW_UP': 'rate_up',
                'ARROW_DOWN': 'rate_down',
            });

        }

        _init() {

        }

        /**
         * Adds event listeners to the element utilizing the triggers utility library.
         * @function
         * @private
         */
        _events() {
            const _this = this;

        }

        /**
         * Destroys the select.
         * @function
         */
        destroy() {
            Foundation.unregisterPlugin(this);
        }

        static get defaults() {
            return {
                iconClass: 'fa-caret-down',
                placeholder: '',
                value: ''
            };
        }
    }

    // Window exports
    Foundation.plugin(Stars, 'Stars');

} (jQuery);
