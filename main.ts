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
    music.ringTone(988)
    list[i] = 1
    i += 1
    led.plot(2, 2)
    basic.clearScreen()
    ano += 1
})
input.onLogoEvent(TouchButtonEvent.Released, function () {
    music.rest(music.beat(BeatFraction.Sixteenth))
})
let ano = 0
let asdf = 0
let list: number[] = []
let i = 0
i = 0
list = [0]
let text_list = [""]
basic.forever(function () {
    if (ano == 1 && !(input.logoIsPressed())) {
        music.rest(music.beat(BeatFraction.Sixteenth))
        basic.pause(200)
        if (!(input.logoIsPressed())) {
            list[i] = 0
            i += 1
        }
        ano = 0
        basic.showIcon(IconNames.Square)
    }
})
