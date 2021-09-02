input.onButtonPressed(Button.A, function () {
    Count = 0
})
let Count = 0
basic.showIcon(IconNames.SmallSquare)
startbit.startbit_Init()
startbit.startbit_digitaltube(startbit.startbit_digitaltubePort.port1, 7, 4)
Count = 0
let Step = 0
basic.forever(function () {
    if (Step == 0) {
        if (startbit.startbit_avoidSensor(startbit.startbit_touchKeyPort.port2)) {
            Step = 1
        }
    } else {
        if (!(startbit.startbit_avoidSensor(startbit.startbit_touchKeyPort.port2))) {
            Count += 1
            if (Count > 9999) {
                Count = 1
            }
            Step = 0
        }
    }
    startbit.startbit_showNumber(Count)
})
