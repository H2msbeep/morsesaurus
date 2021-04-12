input.onButtonPressed(Button.A, function () {
    while (!(asdf == list.length)) {
        basic.showString("" + (list[asdf]))
        asdf += 1
        basic.showString(",")
    }
    asdf = 0
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
	
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.clearScreen()
    led.plot(2, 2)
    music.ringTone(988)
    list[i] = 1
    basic.pause(100)
    if (input.logoIsPressed()) {
        led.plot(1, 2)
        led.plot(2, 2)
        led.plot(3, 2)
        list[i] = 2
    }
})
input.onLogoEvent(TouchButtonEvent.Released, function () {
    if (!(input.logoIsPressed())) {
        i += 1
        led.unplot(1, 2)
        led.unplot(2, 2)
        led.unplot(3, 2)
        basic.pause(1000)
        basic.showIcon(IconNames.Square)
        list[i] = 0
        i += 1
        music.rest(music.beat(BeatFraction.Sixteenth))
    }
})
let asdf = 0
let list: number[] = []
let i = 0
i = 0
list = [0]
let text_list = [""]
