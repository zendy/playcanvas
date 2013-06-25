'use strict'

define [ './model/CanvasDrawing', './model/ImageObject' ], ( CanvasDrawing, ImageObject ) ->

  # set up canvas
  elCanvasContainer = document.querySelector '.mainContainer'
  elCanvas = document.querySelector '.mainContainer__canvas'
  canvasLeftPos = elCanvas.offsetLeft
  canvasTopPos = elCanvas.offsetTop
  canvasHeight = elCanvasContainer.offsetHeight
  canvasWidth = elCanvasContainer.offsetWidth
  canvasCtx = elCanvas.getContext '2d'

  optionsCanvasDrawing =
    canvasContainer: elCanvasContainer
    canvasElement: elCanvas
    canvasLeftPos: canvasLeftPos
    canvasTopPos: canvasTopPos
    canvasHeight: canvasHeight
    canvasWidth: canvasWidth
    canvasCtx: canvasCtx

  canvas = new CanvasDrawing optionsCanvasDrawing

  window.onresize = () ->
    canvas.resizeCanvas()
    canvas.redrawCanvas()

  mouseDownInCanvas = ( ev ) ->
    posInCanvas = getPosInCanvas( ev )
    canvas.checkCollision posInCanvas.x, posInCanvas.y

  mouseMoveInCanvas = ( ev ) ->
    activeObject = canvas.getActiveObjectID()
    if activeObject > -1
      canvas.resetCanvas()
      posInCanvas = getPosInCanvas( ev )

      canvas.moveObject activeObject, posInCanvas.x, posInCanvas.y
      canvas.redrawCanvas()

  mouseUpInCanvas = () ->
    canvas.setActiveObjectID -1

  elCanvas.addEventListener 'mousedown', mouseDownInCanvas, false
  elCanvas.addEventListener 'mousemove', mouseMoveInCanvas, false
  elCanvas.addEventListener 'mouseup', mouseUpInCanvas, false

  addNewImageObject = () ->
    # set up object
    options =
      ctx: canvasCtx
      height: 50
      width: 50
    canvas.addObject( new ImageObject options )

  elBtn1 = document.querySelector '.btn1'
  elBtn1.addEventListener 'click', addNewImageObject, false

  getPosInCanvas = ( ev ) ->
    {
      x: ev.x - canvasLeftPos
      y: ev.y - canvasTopPos
    }
