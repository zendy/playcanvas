'use strict'

define [], () ->

  canvasContainer = document.querySelector '.mainContainer'
  canvas = document.querySelector '.mainContainer__canvas'
  ctx = canvas.getContext '2d'

  window.onresize = () ->
    resizeCanvas()

  drawSVG = () ->

  drawPNG = () ->
    if ctx
      img1 = new Image()
      img1.src = '../images/icon_branding.png'
      img1.onload = () ->
        ctx.drawImage img1, 0, 0

  setCanvas = () ->
    canvas.height = canvasContainer.offsetHeight
    canvas.width = canvasContainer.offsetWidth

  resizeCanvas = () ->
    setCanvas()

  setCanvas()
  drawPNG()
