function renderCard(arr) {
    document.getElementById("numSec").innerHTML = ""
    arr.forEach((num) => {
        const numCard = document.createElement("div")
        numCard.innerText = num.val
        numCard.classList.add(num.class)
        document.getElementById("numSec").appendChild(numCard)
    })
}
const numArr = [
    {
        val: 1,
        class: "one",
    },
    {
        val: 2,
        class: "two",
    },
    {
        val: 3,
        class: "three",
    },
    {
        val: 4,
        class: "four",
    },
    {
        val: 5,
        class: "five",
    },
    {
        val: 6,
        class: "six",
    },
    {
        val: 7,
        class: "seven",
    },
    {
        val: 8,
        class: "eight",
    },
    {
        val: 9,
        class: "nine",
    },
]
window.addEventListener("onload", renderCard(numArr))

function sortFunc() {
    const sortedArr = numArr.sort((a, b) => a.val - b.val)
    renderCard(sortedArr)
}

function shuffleFunc() {
    const shuffledArr = [...numArr]
    for (let i = 0; i < shuffledArr.length; i++) {
        let randIndex = Math.floor(Math.random() * (i + 1))
        ;[shuffledArr[i], shuffledArr[randIndex]] = [
            shuffledArr[randIndex],
            shuffledArr[i],
        ]
    }
    renderCard(shuffledArr)
}
