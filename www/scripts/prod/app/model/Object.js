(function() {
  'use strict';
  define(function() {
    var Object;
    return Object = (function() {
      function Object(options) {
        this.x = options.hasOwnProperty('x') ? options.x : 0;
        this.y = options.hasOwnProperty('y') ? options.y : 0;
        this.width = options.hasOwnProperty('width') ? options.width : 0;
        this.height = options.hasOwnProperty('height') ? options.height : 0;
        this.active = false;
        this.ctx = options.ctx;
      }

      Object.prototype.draw = function() {};

      Object.prototype.move = function(x, y) {
        this.x = x;
        return this.y = y;
      };

      Object.prototype.grab = function(bool) {
        return this.active = bool;
      };

      Object.prototype.isActive = function() {
        return this.active;
      };

      return Object;

    })();
  });

}).call(this);

/*
//# sourceMappingURL=Object.js.map
*/