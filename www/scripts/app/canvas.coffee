'use strict'

define [ './model/ImageObject' ], ( ImageObject ) ->

  # set up canvas
  canvasContainer = document.querySelector '.mainContainer'
  canvas = document.querySelector '.mainContainer__canvas'
  canvasLeft = canvas.offsetLeft
  canvasTop = canvas.offsetTop
  canvasHeight = canvasContainer.offsetHeight
  canvasWidth = canvasContainer.offsetWidth
  ctx = canvas.getContext '2d'

  # set up object
  options =
    ctx: ctx
    height: 50
    width: 50
  object1 = new ImageObject options
  # object1.loadImage()
  # options.text = "This is a test 2"
  # object2 = new Object options

  clickedCanvas = ( ev ) ->
    resetCanvas()
    pointerX = ev.x - canvasLeft
    pointerY = ev.y - canvasTop

    object1.move pointerX, pointerY

  draggedObject = ( ev ) ->
    if object1.isActive()
      resetCanvas()
      pointerX = ev.x - canvasLeft
      pointerY = ev.y - canvasTop

      object1.move pointerX, pointerY
      # object2.move pointerX, pointerY
      redrawCanvas()

  grabbedObject = () ->
    object1.grab true

  releasedObject = () ->
    object1.grab false

  resetCanvas = () ->
    #reset canvas
    ctx.fillStyle = 'rgba(255, 255, 255, 1)'
    ctx.fillRect 0, 0, canvasWidth, canvasHeight

  redrawCanvas = () ->
    object1.draw()
    # object2.drawText()

  window.onresize = () ->
    resizeCanvas()
    redrawCanvas()

  setCanvas = () ->
    canvas.height = canvasHeight
    canvas.width = canvasWidth

  resizeCanvas = () ->
    setCanvas()

  # drawText = () ->
  #   object2.drawText()

  setCanvas()
  # drawText()

  # canvas.addEventListener 'click', clickedCanvas, false
  canvas.addEventListener 'mousemove', draggedObject, false
  canvas.addEventListener 'mousedown', grabbedObject, false
  canvas.addEventListener 'mouseup', releasedObject, false

