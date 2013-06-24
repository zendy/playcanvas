'use strict'

define [ './Object' ], ( Object ) ->
  class TextObject extends Object
    constructor: ( options ) ->
      # need to tidy up constructor
      @x = 0
      @y = 0
      @width = 50
      @height = 50
      @ctx = options.ctx
      @text = options.text

    draw: () ->
      @ctx.fillStyle = 'rgba(0, 0, 0, 1)'
      @ctx.font = 'italic 40pt Calibri';
      @ctx.fillText @text, @x+0, @y+100
