input.onButtonPressed(Button.A, function () {
    servos.P0.run(50)
    basic.pause(1000)
    servos.P0.run(0)
    basic.pause(100)
    servos.P0.run(-50)
    basic.pause(1000)
    servos.P0.run(0)
})
basic.forever(function () {
	
})
