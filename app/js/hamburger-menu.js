(function() {
  var HamburgerMenu;

  HamburgerMenu = (function() {
    function HamburgerMenu(button, options) {
      var defaultOptions;
      defaultOptions = {
        activeClass: 'active'
      };
      // merge defaultOptions and options into this.options
      this.options = $.extend({}, defaultOptions, options);
      this.button = $(button);
      // use _this to pass local scope
      this.button.click((function(_this) {
        return function() {
          return _this.toggle();
        };
      })(this));
    }

    HamburgerMenu.prototype.toggle = function() {
      if (this.expanded) {
        return this.collapse();
      } else {
        return this.expand();
      }
    };

    HamburgerMenu.prototype.expand = function() {
      var _ref;
      this.expanded = true;
      return (_ref = this.button.attr('aria-expanded', true).attr('aria-label', 'Close menu').parent()) != null ? _ref.addClass(this.options.activeClass) : void 0;
    };

    HamburgerMenu.prototype.collapse = function() {
      var _ref;
      this.expanded = false;
      return (_ref = this.button.attr('aria-expanded', false).attr('aria-label', 'Open menu').parent()) != null ? _ref.removeClass(this.options.activeClass) : void 0;
    };

    return HamburgerMenu;

  })();

  window.HamburgerMenu = HamburgerMenu;

}).call(this);
