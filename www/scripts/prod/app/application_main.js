(function() {
  'use strict';
  define(['./model/CanvasDrawing', './model/ImageObject'], function(CanvasDrawing, ImageObject) {
    var addNewImageObject, canvas, canvasCtx, canvasHeight, canvasLeftPos, canvasTopPos, canvasWidth, elBtn1, elCanvas, elCanvasContainer, getPosInCanvas, mouseDownInCanvas, mouseMoveInCanvas, mouseUpInCanvas, optionsCanvasDrawing;
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
    mouseDownInCanvas = function(ev) {
      var posInCanvas;
      posInCanvas = getPosInCanvas(ev);
      return canvas.checkCollision(posInCanvas.x, posInCanvas.y);
    };
    mouseMoveInCanvas = function(ev) {
      var activeObject, posInCanvas;
      activeObject = canvas.getActiveObjectID();
      if (activeObject > -1) {
        canvas.resetCanvas();
        posInCanvas = getPosInCanvas(ev);
        canvas.moveObject(activeObject, posInCanvas.x, posInCanvas.y);
        return canvas.redrawCanvas();
      }
    };
    mouseUpInCanvas = function() {
      return canvas.setActiveObjectID(-1);
    };
    elCanvas.addEventListener('mousedown', mouseDownInCanvas, false);
    elCanvas.addEventListener('mousemove', mouseMoveInCanvas, false);
    elCanvas.addEventListener('mouseup', mouseUpInCanvas, false);
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
    elBtn1.addEventListener('click', addNewImageObject, false);
    return getPosInCanvas = function(ev) {
      return {
        x: ev.x - canvasLeftPos,
        y: ev.y - canvasTopPos
      };
    };
  });

}).call(this);

/*
//# sourceMappingURL=application_main.js.map
*/