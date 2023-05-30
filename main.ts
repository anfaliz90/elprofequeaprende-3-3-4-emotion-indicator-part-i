let Emotion = 0
input.onButtonPressed(Button.A, function () {
    if (Emotion < 4) {
        Emotion += 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (Emotion > 0) {
        Emotion += -1
    }
})
basic.forever(function () {
    if (Emotion == 1) {
        basic.showIcon(IconNames.Happy)
    } else if (Emotion == 2) {
        basic.showIcon(IconNames.Angry)
    } else if (Emotion == 3) {
        basic.showIcon(IconNames.Sad)
    } else if (Emotion == 4) {
        basic.showIcon(IconNames.Confused)
    } else {
    	
    }
})
