(function() {
  'use strict';
  define(['./model/Object'], function(Object) {
    var canvas, canvasContainer, ctx, drawPNG, drawSVG, object1, options, resizeCanvas, setCanvas;
    canvasContainer = document.querySelector('.mainContainer');
    canvas = document.querySelector('.mainContainer__canvas');
    ctx = canvas.getContext('2d');
    options = {
      ctx: ctx
    };
    object1 = new Object(options);
    object1.loadImage();
    window.onresize = function() {
      return resizeCanvas();
    };
    drawSVG = function() {};
    drawPNG = function() {
      return object1.draw();
    };
    setCanvas = function() {
      canvas.height = canvasContainer.offsetHeight;
      return canvas.width = canvasContainer.offsetWidth;
    };
    resizeCanvas = function() {
      return setCanvas();
    };
    setCanvas();
    return drawPNG();
  });

}).call(this);

/*
//# sourceMappingURL=canvas.js.map
*/