'use strict'

define [ './model/CanvasDrawing', './model/ImageObject' ], ( CanvasDrawing, ImageObject ) ->

  # set up canvas
  elCanvasContainer = document.querySelector '.mainContainer'
  elCanvas = document.querySelector '.mainContainer__canvas'
  canvasLeftPos = elCanvasContainer.offsetLeft
  canvasTopPos = elCanvasContainer.offsetTop
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

  mouseClickInCanvas = ( ev ) ->
    posInCanvas = getPosInCanvas( ev )
    canvas.checkCollision posInCanvas.x, posInCanvas.y
    activeObjectID = canvas.getActiveObjectID()

    if activeObjectID > -1
      activeObjectDimension = canvas.getActiveObjectDimension()
      elObjectOverlay.style.left = activeObjectDimension.x + 'px'
      elObjectOverlay.style.top = activeObjectDimension.y + 'px'
      elObjectOverlay.style.height = activeObjectDimension.height + 'px'
      elObjectOverlay.style.width = activeObjectDimension.width + 'px'
      elObjectOverlay.classList.add 'objectOverlay--active'
    else
      elObjectOverlay.classList.remove 'objectOverlay--active'

  elCanvas.addEventListener 'click', mouseClickInCanvas, false

  getPosInCanvas = ( ev ) ->
      x: ev.x - canvasLeftPos
      y: ev.y - canvasTopPos

  # set up object overlay
  elObjectOverlay = document.querySelector '.objectOverlay'
  elObjectOverlayTranslate = document.querySelector '.objectOverlay__translate'

  mouseDownInCanvas = ( ev ) ->
    elObjectOverlayTranslate.dataset.dragable = true

  mouseMoveInCanvas = ( ev ) ->
    activeObjectID = canvas.getActiveObjectID()
    if activeObjectID > -1
      canvas.resetCanvas()
      posInCanvas = getPosInCanvas( ev )

      canvas.moveObject activeObjectID, posInCanvas.x, posInCanvas.y
      canvas.redrawCanvas()

  mouseUpInCanvas = () ->


  elObjectOverlayTranslate.addEventListener 'mousedown', mouseDownInCanvas, false
  elObjectOverlayTranslate.addEventListener 'mousemove', mouseMoveInCanvas, false
  elObjectOverlayTranslate.addEventListener 'mouseup', mouseUpInCanvas, false

  addNewImageObject = () ->
    # set up object
    options =
      ctx: canvasCtx
      x: 100
      y: 100
      height: 50
      width: 50
    canvas.addObject( new ImageObject options )

  elBtn1 = document.querySelector '.btn1'
  elBtn1.addEventListener 'click', addNewImageObject, false
