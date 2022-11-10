import Events from "./events.js"
import Timer from "./timer.js"
import Control from "./controls.js"
import Sound from "./sounds.js"
import {
    displayMinutes,
    displaySeconds,
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
} from "./elements.js"

const controls = Control({
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
})

const timer = Timer({
    displayMinutes,
    displaySeconds,
    controls,
})

const sound = Sound()

Events({ controls, timer, sound })
