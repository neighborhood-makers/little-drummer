hummingbird.startHummingbird()
basic.forever(function () {
    hummingbird.setPositionServo(FourPort.One, 140)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        # # # # #
        # # # # #
        `)
    hummingbird.setPositionServo(FourPort.One, 180)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.pause(200)
})
