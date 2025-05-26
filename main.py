Soil_moisture = 0
OLED.init(128, 64)

def on_forever():
    global Soil_moisture
    Soil_moisture = Environment.read_soil_humidity(AnalogPin.P1)
    OLED.clear()
    OLED.write_string("Soil Moisture:")
    OLED.write_num(Soil_moisture)
    basic.pause(1000)
    if Soil_moisture < 30:
        basic.show_string("you failure! water your plant now")
        basic.clear_screen()
    else:
        basic.show_leds("""
            . # . # .
            . . . . .
            # . . . #
            # . . . #
            # # # # #
            """)
basic.forever(on_forever)
