(function() {
  'use strict';
  define(function() {
    var Object;
    return Object = (function() {
      function Object(options) {
        this.x = 0;
        this.y = 0;
        this.width = 50;
        this.height = 50;
        this.ctx = options.ctx;
        this.loaded = false;
        this.img = null;
      }

      Object.prototype.draw = function() {
        var that;
        that = this;
        return (function(that) {
          return that.img.onload = function() {
            return that.ctx.drawImage(that.img, that.x, that.y, that.width, that.height);
          };
        })(that);
      };

      Object.prototype.loadImage = function() {
        this.img = new Image();
        return this.img.src = 'images/icon_branding.png';
      };

      Object.prototype.imageLoaded = function() {};

      return Object;

    })();
  });

}).call(this);

/*
//# sourceMappingURL=Object.js.map
*/