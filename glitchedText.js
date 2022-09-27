const glitchText = document.querySelectorAll(".glitchedText")
const characters = "0!#$%&/0123456789<=>?@QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm█"

let glitchLoop = setInterval(glitchLetters, 250)

function glitchLetters() {
    for (let i = 0; i < glitchText.length; i++) {
        if (glitchText[i].classList.contains("actGl")) {
            glitchText[i].innerText = glitchText[i].dataset.letter
            glitchText[i].classList.remove("actGl")
        } else {
            let coin = Math.ceil(Math.random() * 12)
            if (coin == 12) {
                if (!glitchText[i].dataset.letter) {
                    glitchText[i].dataset.letter = glitchText[i].innerText
                }
                glitchText[i].innerText = characters[Math.ceil(Math.random() * characters.length)]
                glitchText[i].classList.add("actGl")
            }
        }
    }
}