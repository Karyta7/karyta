controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.stringPlayable("B A G A A G A E ", 500), music.PlaybackMode.UntilDone)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 2 2 9 9 9 2 2 2 2 2 9 . . . 
    . 2 2 2 2 2 2 2 9 9 2 2 9 9 . . 
    . 2 2 2 2 2 2 9 2 2 2 2 9 9 . . 
    . f f . . . . . . . . . f f . . 
    . f f . . . . . . . . . f f . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
