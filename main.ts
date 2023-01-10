basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
        basic.showLeds(`
            . # . # .
            # # . # #
            . . . . .
            . . # . .
            . # . # .
            `)
        basic.showLeds(`
            # . . . #
            # # . # #
            . . . . .
            . . # . .
            . # . # .
            `)
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.showLeds(`
            # . . . #
            # # . # #
            . . . . .
            . # # # .
            # . . . #
            `)
    } else {
        basic.showLeds(`
            # . . . #
            # # . # #
            . . . . .
            . # # # .
            # . . . #
            `)
    }
})
