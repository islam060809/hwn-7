const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"
const input = document.querySelector("input")
const btn = document.querySelector("button")
const text = document.querySelector("p")

btn.onclick = () => {
    fetch(url + input.value)
        .then((rest) => rest.json())
        .then((data) => {
            showDef(data)
        }
        )
}

function showDef(word) {
    text.innerHTML = ''
    if (!word || !word.length) {
        text.innerHTML = 'No found'
        console.log("No");
    } else {
        text.innerHTML = `${word[0].word}: ${word[0].meanings[0].definitions[0].definition}`
        console.log(word[0])
        console.log(word[0].word)
        console.log(word[0].meanings[0].definitions[0].definition)
    }
}