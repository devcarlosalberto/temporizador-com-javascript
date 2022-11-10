import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    buttonSoundOn,
    buttonSoundOff,
} from "./elements.js"

export default function ({ controls, timer, sound }) {
    buttonPlay.addEventListener("click", () => {
        timer.play()
        sound.pressButton()
    })

    buttonPause.addEventListener("click", () => {
        timer.pause()
        sound.pressButton()
    })

    buttonStop.addEventListener("click", () => {
        timer.stop()
        sound.pressButton()
    })

    buttonSet.addEventListener("click", () => {
        timer.set()
    })

    buttonSoundOn.addEventListener("click", () => {
        buttonSoundOn.classList.add("hide")
        buttonSoundOff.classList.remove("hide")
        sound.bgAudioPause()
    })

    buttonSoundOff.addEventListener("click", () => {
        buttonSoundOff.classList.add("hide")
        buttonSoundOn.classList.remove("hide")
        sound.bgAudioStart()
    })
}
