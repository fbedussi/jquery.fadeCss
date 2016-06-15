(function ($) {

    $.fn.fadeCss = function (action, customOptions) {
        try {
            var defaultOptions = {
                hideClass: 'hide',
                fadeInClass: 'fadeIn',
                fadeOutClass: 'fadeOut',
                zeroOpacityClass: 'transparent',
                fullOpacityClass: 'opaque',
                transitionDuration: 500
            };

            var options = $.extend({}, defaultOptions, customOptions);
            var self = this;

            if (action === 'in') {
                this.removeClass(options.hideClass).addClass(options.zeroOpacityClass);
                setTimeout(function() {
                    self.addClass(options.fadeInClass);
                }, 1);
                setTimeout(function() {
                    self.removeClass(options.fadeInClass + ' ' + options.zeroOpacityClass);
                }, options.transitionDuration + 1);

                return this;
            }

            if (action === 'out') {
                this.addClass(options.fullOpacityClass).addClass(options.fadeOutClass);
                setTimeout(function() {
                    self.addClass(options.hideClass).removeClass(options.fadeOutClass + ' ' + options.fullOpacityClass);
                }, options.transitionDuration);

                return this
            }

            throw(
                new Error('Only "in" or "out" actinons allowed'));
        } catch (e) {

        }
        return this;
    };

}(jQuery));
