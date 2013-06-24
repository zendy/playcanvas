(function() {
  'use strict';
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['./Object'], function(Object) {
    var TextObject;
    return TextObject = (function(_super) {
      __extends(TextObject, _super);

      function TextObject(options) {
        this.x = 0;
        this.y = 0;
        this.width = 50;
        this.height = 50;
        this.ctx = options.ctx;
        this.text = options.text;
      }

      TextObject.prototype.draw = function() {
        this.ctx.fillStyle = 'rgba(0, 0, 0, 1)';
        this.ctx.font = 'italic 40pt Calibri';
        return this.ctx.fillText(this.text, this.x + 0, this.y + 100);
      };

      return TextObject;

    })(Object);
  });

}).call(this);

/*
//# sourceMappingURL=TextObject.js.map
*/