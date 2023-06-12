input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Environment.octopus_BME280(Environment.BME280_state.BME280_humidity))
})
