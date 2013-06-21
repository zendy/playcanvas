'use strict'

define [ './model/Object' ], ( Object ) ->

  # set up canvas
  canvasContainer = document.querySelector '.mainContainer'
  canvas = document.querySelector '.mainContainer__canvas'
  ctx = canvas.getContext '2d'

  # set up object
  options =
    ctx: ctx
  object1 = new Object options
  object1.loadImage()

  window.onresize = () ->
    resizeCanvas()

  drawSVG = () ->

  drawPNG = () ->
    object1.draw()

  setCanvas = () ->
    canvas.height = canvasContainer.offsetHeight
    canvas.width = canvasContainer.offsetWidth

  resizeCanvas = () ->
    setCanvas()

  setCanvas()
  drawPNG()
