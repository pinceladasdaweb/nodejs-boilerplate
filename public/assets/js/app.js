var App = (function () {
    "use strict";
    var module = {
        hasClass: function (el, name) {
            return new RegExp('(\\s|^)' + name + '(\\s|$)').test(el.className);
        },
        addClass: function (el, name) {
            var self = this;

            if (!self.hasClass(el, name)) {
                el.className += (el.className ? ' ' : '') + name;
            }
        },
        currentLink: function () {
            var a = document.getElementsByTagName("A"),
                i,
                len,
                self = this;

            for (i = 0, len = a.length; i < len; i += 1) {
                if (a[i].href === window.location.href) {
                    self.addClass(a[i].parentNode, 'active');
                }
            }
        },
        ready: function () {
            module.currentLink();
        }
    };

    return {
        ready: module.ready
    };
}());

App.ready();