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
            this.rating = this.options.rating;

            if (this.options.editable) {
                this.rating = parseInt(this.$element.val());
                this.$starsWrapper = $(`<div class="stars">`);

                this.$element.after(this.$starsWrapper);
                for (let i = 0; i < this.options.maxStars; i++) {
                    let $star = $(`<a class="star" data-rate="${(i+1)}"><i class="${this.rating < (i+1) ? this.options.emptyStar : this.options.filledStar}"></i></a>`);
                    this.$starsWrapper.append($star);
                }
                this._events();
            }
            else {
                this.$element.addClass('stars');
                for (let i = 0; i < this.options.maxStars; i++) {
                    let $star = $(`<span class="star" data-rate="${(i+1)}"><i class="${this.rating < (i+1) ? this.options.emptyStar : this.options.filledStar}"></i></span>`);
                    this.$element.append($star);
                }
            }
        }

        /**
         * Adds event listeners to the element utilizing the triggers utility library.
         * @function
         * @private
         */
        _events() {
            const _this = this;
            this.$starsWrapper.find('.star').each((index, star) => {
                $(star)
                    .on('mouseover', (e) => {_this.onHover(e, index)})
                    .on('mouseout', _this.onOut.bind(_this))
                    .on('click', _this.onClick.bind(_this));
            });
        }

        onHover(e, index) {
            const _this = this,
                $star = $(e.currentTarget);

            this.$starsWrapper.find('.star').each((_index, _star) => {
                if (_index <= index) $(_star).find('i').removeClass(_this.options.emptyStar).addClass(_this.options.filledStar);
                else $(_star).find('i').removeClass(_this.options.filledStar).addClass(_this.options.emptyStar);
            });
        }

        onOut() {
            const _this = this;

            this.$starsWrapper.find('.star').each((_index, _star) => {
                if (_index >= this.options.rating) $(_star).find('i').removeClass(_this.options.filledStar).addClass(_this.options.emptyStar);
                else $(_star).find('i').removeClass(_this.options.emptyStar).addClass(_this.options.filledStar);
            });
        }

        onClick(e) {
            const $star = $(e.currentTarget),
                rating = $star.data('rate');

            this.$element.val(rating);
            this.options.rating = rating;
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
                maxStars: 5,
                emptyStar: 'fa fa-star-o',
                filledStar: 'fa fa-star',
                editable: false,
                rating: 0
            };
        }
    }

    // Window exports
    Foundation.plugin(Stars, 'Stars');

} (jQuery);
