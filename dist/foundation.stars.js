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
            value: function _init() {

                this.rating = this.options.rating;
                this.$starsWrapper = $('<div class="stars">');

                if (this.options.editable) {

                    this.rating = parseInt(this.$element.val());

                    this.$element.after(this.$starsWrapper);

                    for (var i = 0; i < this.options.maxStars; i++) {
                        var $star = $('<a class="star" data-rate="' + (i + 1) + '"><i class="' + (this.rating < i + 1 ? this.options.emptyStar : this.options.filledStar) + '"></i></a>');
                        this.$starsWrapper.append($star);
                    }

                    this._events();
                } else {}
            }

            /**
             * Adds event listeners to the element utilizing the triggers utility library.
             * @function
             * @private
             */

        }, {
            key: '_events',
            value: function _events() {
                var _this = this;
                this.$starsWrapper.find('.star').each(function (index, star) {
                    $(star).on('mouseover', function (e) {
                        _this.onHover(e, index);
                    }).on('mouseout', _this.onOut.bind(_this)).on('click', _this.onClick.bind(_this));
                });
            }
        }, {
            key: 'onHover',
            value: function onHover(e, index) {
                var _this = this,
                    $star = $(e.currentTarget);

                this.$starsWrapper.find('.star').each(function (_index, _star) {
                    if (_index <= index) $(_star).find('i').removeClass(_this.options.emptyStar).addClass(_this.options.filledStar);else $(_star).find('i').removeClass(_this.options.filledStar).addClass(_this.options.emptyStar);
                });
            }
        }, {
            key: 'onOut',
            value: function onOut() {
                var _this2 = this;

                var _this = this;

                this.$starsWrapper.find('.star').each(function (_index, _star) {
                    if (_index >= _this2.options.rating) $(_star).find('i').removeClass(_this.options.filledStar).addClass(_this.options.emptyStar);else $(_star).find('i').removeClass(_this.options.emptyStar).addClass(_this.options.filledStar);
                });
            }
        }, {
            key: 'onClick',
            value: function onClick(e) {
                var $star = $(e.currentTarget),
                    rating = $star.data('rate');

                this.$element.val(rating);
                this.options.rating = rating;
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
                    maxStars: 5,
                    emptyStar: 'fa fa-star-o',
                    filledStar: 'fa fa-star',
                    editable: true,
                    rating: 0
                };
            }
        }]);

        return Stars;
    }();

    // Window exports


    Foundation.plugin(Stars, 'Stars');
}(jQuery);