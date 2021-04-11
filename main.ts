input.onLogoEvent(TouchButtonEvent.Touched, function () {
    led.plot(2, 2)
    music.playTone(262, music.beat(BeatFraction.Whole))
    list[i] = 1
    basic.pause(500)
    if (input.logoIsPressed()) {
        led.plot(1, 2)
        led.plot(2, 2)
        led.plot(3, 2)
        music.playTone(262, music.beat(BeatFraction.Whole))
        list[i] = 2
    }
    i += 1
    led.unplot(1, 2)
    led.unplot(2, 2)
    led.unplot(3, 2)
    if (!(input.logoIsPressed())) {
        if (list[0] == 1) {
            text_list[i - 1] = "E"
        } else if (list[0] == 2) {
            text_list[i - 1] = "T"
        }
        basic.showString("" + (text_list[0]))
    }
})
input.onLogoEvent(TouchButtonEvent.Released, function () {
	
})
let text_list: string[] = []
let list: number[] = []
let i = 0
i = 0
list = [0, 0, 0, 0, 0]
text_list = ["", "", "", ""]
