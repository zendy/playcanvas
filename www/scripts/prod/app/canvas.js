(function() {
  'use strict';
  define(['./model/ImageObject'], function(ImageObject) {
    var canvas, canvasContainer, canvasHeight, canvasLeft, canvasTop, canvasWidth, clickedCanvas, ctx, draggedObject, grabbedObject, object1, options, redrawCanvas, releasedObject, resetCanvas, resizeCanvas, setCanvas;
    canvasContainer = document.querySelector('.mainContainer');
    canvas = document.querySelector('.mainContainer__canvas');
    canvasLeft = canvas.offsetLeft;
    canvasTop = canvas.offsetTop;
    canvasHeight = canvasContainer.offsetHeight;
    canvasWidth = canvasContainer.offsetWidth;
    ctx = canvas.getContext('2d');
    options = {
      ctx: ctx,
      height: 50,
      width: 50
    };
    object1 = new ImageObject(options);
    clickedCanvas = function(ev) {
      var pointerX, pointerY;
      resetCanvas();
      pointerX = ev.x - canvasLeft;
      pointerY = ev.y - canvasTop;
      return object1.move(pointerX, pointerY);
    };
    draggedObject = function(ev) {
      var pointerX, pointerY;
      if (object1.isActive()) {
        resetCanvas();
        pointerX = ev.x - canvasLeft;
        pointerY = ev.y - canvasTop;
        object1.move(pointerX, pointerY);
        return redrawCanvas();
      }
    };
    grabbedObject = function() {
      return object1.grab(true);
    };
    releasedObject = function() {
      return object1.grab(false);
    };
    resetCanvas = function() {
      ctx.fillStyle = 'rgba(255, 255, 255, 1)';
      return ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    };
    redrawCanvas = function() {
      return object1.draw();
    };
    window.onresize = function() {
      resizeCanvas();
      return redrawCanvas();
    };
    setCanvas = function() {
      canvas.height = canvasHeight;
      return canvas.width = canvasWidth;
    };
    resizeCanvas = function() {
      return setCanvas();
    };
    setCanvas();
    canvas.addEventListener('mousemove', draggedObject, false);
    canvas.addEventListener('mousedown', grabbedObject, false);
    return canvas.addEventListener('mouseup', releasedObject, false);
  });

}).call(this);

/*
//# sourceMappingURL=canvas.js.map
*/