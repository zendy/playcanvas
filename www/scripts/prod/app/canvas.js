(function() {
  'use strict';
  define([], function() {
    var canvas, canvasContainer, ctx, drawPNG, drawSVG, resizeCanvas, setCanvas;
    canvasContainer = document.querySelector('.mainContainer');
    canvas = document.querySelector('.mainContainer__canvas');
    ctx = canvas.getContext('2d');
    window.onresize = function() {
      return resizeCanvas();
    };
    drawSVG = function() {};
    drawPNG = function() {
      var img1;
      if (ctx) {
        img1 = new Image();
        img1.src = '../images/icon_branding.png';
        return img1.onload = function() {
          return ctx.drawImage(img1, 0, 0);
        };
      }
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