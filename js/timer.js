import Controls from "./controls.js"
import Sound from "./sounds.js"

let defaultMinutes = 25
let timerTimeOut

export default function Timer({ displayMinutes, displaySeconds, controls }) {
    function play() {
        controls.play()
        countDown()
    }

    function pause() {
        clearTimeout(timerTimeOut)
        controls.pause()
    }

    function stop() {
        clearTimeout(timerTimeOut)
        updateDisplay(defaultMinutes, 0)
        controls.stop()
    }

    function set() {
        let newDefaultMinutes = prompt("Digite quantos minutos")

        if (
            isNaN(newDefaultMinutes) ||
            newDefaultMinutes.replace(/ /g, "") == "" ||
            Number(newDefaultMinutes) == 0
        ) {
            alert("Digite apenas números e que seja ao menos um minuto.")
        } else {
            defaultMinutes = newDefaultMinutes
            updateDisplay(defaultMinutes, 0)
        }
    }

    function countDown() {
        timerTimeOut = setTimeout(() => {
            let minutes = Number(displayMinutes.textContent)
            let seconds = Number(displaySeconds.textContent)

            --seconds

            if (seconds < 0) {
                --minutes
                seconds = 59
            }

            let isFinished = minutes < 0
            if (isFinished) {
                Sound().timeEnd()
                stop()
                return
            }

            updateDisplay(minutes, seconds)
            countDown()
        }, 1000)
    }

    function updateDisplay(minutes, seconds) {
        displayMinutes.textContent = String(minutes).padStart(2, "0")
        displaySeconds.textContent = String(seconds).padStart(2, "0")
    }

    return {
        play,
        pause,
        stop,
        set,
    }
}
