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

  checkCollision = ( ev ) ->
    # implement this

  dragObject = ( ev ) ->
    ev.preventDefault()
    activeObject = canvas.getActiveObject()
    if ~activeObject
      canvas.resetCanvas()
      pointerX = ev.x - canvasLeftPos
      pointerY = ev.y - canvasTopPos

      canvas.moveObject activeObject, pointerX, pointerY
      canvas.redrawCanvas()

  grabObject = () ->
    canvas.setActiveObject 0

  releaseObject = () ->
    canvas.setActiveObject -1

  canvas.addEventListener 'click', checkCollision, false
  elCanvas.addEventListener 'mousemove', dragObject, false
  elCanvas.addEventListener 'mouseup', releaseObject, false

  addNewImageObject = () ->
    # set up object
    options =
      ctx: canvasCtx
      height: 50
      width: 50
    canvas.addObject( new ImageObject options )

  elBtn1 = document.querySelector '.btn1'
  elBtn1.addEventListener 'click', addNewImageObject, false
