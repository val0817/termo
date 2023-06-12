input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(input.temperature() + 273)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Environment.octopus_BME280(Environment.BME280_state.BME280_humidity))
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature() * (9 / (5 + 32)))
})
