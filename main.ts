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
    list[i] = 1
    led.plot(2, 2)
    music.ringTone(988)
})
input.onLogoEvent(TouchButtonEvent.Released, function () {
    basic.clearScreen()
    i += 1
    music.rest(music.beat(BeatFraction.Sixteenth))
    basic.pause(500)
    basic.showIcon(IconNames.Square)
    list[i] = 0
    i += 1
})
let asdf = 0
let list: number[] = []
let i = 0
i = 0
list = [0]
let text_list = [""]
