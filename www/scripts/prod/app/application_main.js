(function() {
  'use strict';
  define(['./model/CanvasDrawing', './model/ImageObject'], function(CanvasDrawing, ImageObject) {
    var addNewImageObject, canvas, canvasCtx, canvasHeight, canvasLeftPos, canvasTopPos, canvasWidth, elBtn1, elCanvas, elCanvasContainer, elObjectOverlay, elObjectOverlayTranslate, getPosInCanvas, mouseClickInCanvas, mouseDownInCanvas, mouseMoveInCanvas, mouseUpInCanvas, optionsCanvasDrawing;
    elCanvasContainer = document.querySelector('.mainContainer');
    elCanvas = document.querySelector('.mainContainer__canvas');
    canvasLeftPos = elCanvasContainer.offsetLeft;
    canvasTopPos = elCanvasContainer.offsetTop;
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
    mouseClickInCanvas = function(ev) {
      var activeObjectDimension, activeObjectID, posInCanvas;
      posInCanvas = getPosInCanvas(ev);
      canvas.checkCollision(posInCanvas.x, posInCanvas.y);
      activeObjectID = canvas.getActiveObjectID();
      if (activeObjectID > -1) {
        activeObjectDimension = canvas.getActiveObjectDimension();
        elObjectOverlay.style.left = activeObjectDimension.x + 'px';
        elObjectOverlay.style.top = activeObjectDimension.y + 'px';
        elObjectOverlay.style.height = activeObjectDimension.height + 'px';
        elObjectOverlay.style.width = activeObjectDimension.width + 'px';
        return elObjectOverlay.classList.add('objectOverlay--active');
      } else {
        return elObjectOverlay.classList.remove('objectOverlay--active');
      }
    };
    elCanvas.addEventListener('click', mouseClickInCanvas, false);
    getPosInCanvas = function(ev) {
      return {
        x: ev.x - canvasLeftPos,
        y: ev.y - canvasTopPos
      };
    };
    elObjectOverlay = document.querySelector('.objectOverlay');
    elObjectOverlayTranslate = document.querySelector('.objectOverlay__translate');
    mouseDownInCanvas = function(ev) {
      var posInCanvas;
      posInCanvas = getPosInCanvas(ev);
      return canvas.checkCollision(posInCanvas.x, posInCanvas.y);
    };
    mouseMoveInCanvas = function(ev) {
      var activeObjectID, posInCanvas;
      activeObjectID = canvas.getActiveObjectID();
      if (activeObjectID > -1) {
        canvas.resetCanvas();
        posInCanvas = getPosInCanvas(ev);
        canvas.moveObject(activeObjectID, posInCanvas.x, posInCanvas.y);
        return canvas.redrawCanvas();
      }
    };
    mouseUpInCanvas = function() {
      return canvas.setActiveObjectID(-1);
    };
    elObjectOverlayTranslate.addEventListener('mousedown', mouseDownInCanvas, false);
    elObjectOverlayTranslate.addEventListener('mousemove', mouseMoveInCanvas, false);
    elObjectOverlayTranslate.addEventListener('mouseup', mouseUpInCanvas, false);
    addNewImageObject = function() {
      var options;
      options = {
        ctx: canvasCtx,
        x: 100,
        y: 100,
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