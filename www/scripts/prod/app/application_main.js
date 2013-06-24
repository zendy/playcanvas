(function() {
  'use strict';
  define(['./model/CanvasDrawing', './model/ImageObject'], function(CanvasDrawing, ImageObject) {
    var addNewImageObject, canvas, canvasCtx, canvasHeight, canvasLeftPos, canvasTopPos, canvasWidth, checkCollision, dragObject, elBtn1, elCanvas, elCanvasContainer, grabObject, optionsCanvasDrawing, releaseObject;
    elCanvasContainer = document.querySelector('.mainContainer');
    elCanvas = document.querySelector('.mainContainer__canvas');
    canvasLeftPos = elCanvas.offsetLeft;
    canvasTopPos = elCanvas.offsetTop;
    canvasHeight = elCanvasContainer.offsetHeight;
    canvasWidth = elCanvasContainer.offsetWidth;
    canvasCtx = elCanvas.getContext('2d');
    optionsCanvasDrawing = {
      canvasContainer: elCanvasContainer,
      canvasElement: elCanvas,
      canvasLeftPos: canvasLeftPos,
      canvasTopPos: canvasTopPos,
      canvasHeight: canvasHeight,
      canvasWidth: canvasWidth,
      canvasCtx: canvasCtx
    };
    canvas = new CanvasDrawing(optionsCanvasDrawing);
    window.onresize = function() {
      canvas.resizeCanvas();
      return canvas.redrawCanvas();
    };
    checkCollision = function(ev) {};
    dragObject = function(ev) {
      var activeObject, pointerX, pointerY;
      ev.preventDefault();
      activeObject = canvas.getActiveObject();
      if (~activeObject) {
        canvas.resetCanvas();
        pointerX = ev.x - canvasLeftPos;
        pointerY = ev.y - canvasTopPos;
        canvas.moveObject(activeObject, pointerX, pointerY);
        return canvas.redrawCanvas();
      }
    };
    grabObject = function() {
      return canvas.setActiveObject(0);
    };
    releaseObject = function() {
      return canvas.setActiveObject(-1);
    };
    canvas.addEventListener('click', checkCollision, false);
    elCanvas.addEventListener('mousemove', dragObject, false);
    elCanvas.addEventListener('mouseup', releaseObject, false);
    addNewImageObject = function() {
      var options;
      options = {
        ctx: canvasCtx,
        height: 50,
        width: 50
      };
      return canvas.addObject(new ImageObject(options));
    };
    elBtn1 = document.querySelector('.btn1');
    return elBtn1.addEventListener('click', addNewImageObject, false);
  });

}).call(this);

/*
//# sourceMappingURL=application_main.js.map
*/