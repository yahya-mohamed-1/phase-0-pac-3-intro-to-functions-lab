function shout(greeting) {
    return greeting.toUpperCase()
}

function whisper(greeting) {
    return greeting.toLowerCase()
}

function logShout(greeting) {
    console.log(greeting.toUpperCase())
}

function logWhisper(greeting) {
    console.log(greeting.toLowerCase())
}

function sayHiToHeadphonedRoommate(greeting) {
    if (greeting == greeting.toLowerCase()) {
        return "I can\'t hear you!"
    }
    else if (greeting == greeting.toUpperCase()) {
        return "YES INDEED!"
    }
    else {
        if (greeting == "Let\'s have dinner together!") {
            return "I would love to!"
        }
    }
}