let Soil_moisture = 0
OLED.init(128, 64)
basic.forever(function () {
    Soil_moisture = Environment.ReadSoilHumidity(AnalogPin.P1)
    OLED.clear()
    OLED.writeString("Soil Moisture:")
    OLED.writeNum(Soil_moisture)
    basic.pause(1000)
    if (Soil_moisture < 30) {
        music.play(music.stringPlayable("C5 B A A B C5 B A ", 169), music.PlaybackMode.UntilDone)
        basic.showString("me failure! watering my plant now")
        basic.showIcon(IconNames.Skull)
        basic.clearScreen()
    } else {
        basic.showLeds(`
            . # . # .
            . # . # .
            # . . . #
            # . . . #
            # # # # #
            `)
    }
})
