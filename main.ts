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
    ano = 0
    music.ringTone(988)
    list[i] = 1
    i += 1
    youm = 5
    led.plot(2, 2)
    ano += 1
    basic.pause(200)
    if (input.logoIsPressed()) {
        led.plot(1, 2)
        led.plot(2, 2)
        led.plot(3, 2)
        list[i - 1] = 2
        youm = 10
    }
})
input.onLogoEvent(TouchButtonEvent.Released, function () {
	
})
let ano = 0
let asdf = 0
let youm = 0
let list: number[] = []
let i = 0
i = 0
list = [0]
let text_list = [""]
youm = 0
basic.forever(function () {
	
})
