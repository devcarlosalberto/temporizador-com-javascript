export default function Controls({
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
}) {
    function play() {
        showPauseButton()
        showStopButton()
    }

    function pause() {
        showPlayButton()
    }

    function stop() {
        showPlayButton()
        showSetButton()
    }

    function showPlayButton() {
        buttonPlay.classList.remove("hide")
        buttonPause.classList.add("hide")
    }

    function showPauseButton() {
        buttonPause.classList.remove("hide")
        buttonPlay.classList.add("hide")
    }

    function showStopButton() {
        buttonStop.classList.remove("hide")
        buttonSet.classList.add("hide")
    }

    function showSetButton() {
        buttonSet.classList.remove("hide")
        buttonStop.classList.add("hide")
    }

    return {
        play,
        pause,
        stop,
    }
}
