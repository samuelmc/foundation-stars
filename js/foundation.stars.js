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
            this.$starsWrapper = $(`<div class="stars">`);

            if (this.options.editable) {

                this.rating = parseInt(this.$element.val());

                this.$element.after(this.$starsWrapper);

                for (let i = 0; i < this.options.maxStars; i++) {
                    let $star = $(`<a class="star" data-rate="${(i+1)}"><i class="${this.rating < (i+1) ? this.options.emptyStar : this.options.filledStar}"></i></a>`);
                    this.$starsWrapper.append($star);
                }

                this._events();
            }

            else {

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
                    .on('mouseout', (e) => {_this.onOut(e, index)});
            });
        }

        onHover(e, index) {
            const _this = this,
                $star = $(e.currentTarget);
            this.$starsWrapper.find('.star').each((_index, _star) => {
                if (_index <= index) $(_star).removeClass(_this.options.emptyStar).addClass(_this.options.filledStar);
                else $(_star).removeClass(_this.options.filledStar).addClass(_this.options.emptyStar);
            });
        }

        onOut(e, index) {
            const _this = this,
                $star = $(e.currentTarget);
            this.$starsWrapper.find('.star').each((_index, _star) => {
                if (_index > this.options.rating) $(_star).removeClass(_this.options.filledStar).addClass(_this.options.emptyStar);
                else $(_star).removeClass(_this.options.emptyStar).addClass(_this.options.filledStar);
            });
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
                editable: true,
                rating: 0
            };
        }
    }

    // Window exports
    Foundation.plugin(Stars, 'Stars');

} (jQuery);
