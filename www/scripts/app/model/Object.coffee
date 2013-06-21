'use strict'

define () ->
  class Object
    constructor: ( options ) ->
      # need to tidy up constructor
      @x = 0
      @y = 0
      @width = 50
      @height = 50
      @ctx = options.ctx
      # move this to child class
      @loaded = false
      @img = null

    draw: () ->
      that = @
      do ( that ) ->
        that.img.onload = () ->
          that.ctx.drawImage that.img, that.x, that.y, that.width, that.height

    # move this to child class
    loadImage: () ->
      @img = new Image()
      @img.src = 'images/icon_branding.png'

    imageLoaded: () ->
      # @draw()
      # @loaded = true
