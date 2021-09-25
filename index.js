// Write your solution here!
const cats=[
    "Milo",
    "Otis",
    "Garfield"
]

function destructivelyAppendCat(Felix) {
    return cats.push(Felix)
}

function destructivelyPrependCat(Spot) {
    return cats.unshift(Spot)
}

function destructivelyRemoveLastCat() {
    return cats.pop()
}

function destructivelyRemoveFirstCat() {
    return cats.shift()
}

function appendCat(Broom){
    const moreCats = [...cats, "Broom"]
    return moreCats
}

function prependCat(Arnold) {
    const someMoreCats = ["Arnold", ...cats]
    return someMoreCats
}

function removeLastCat() {
    const lessCats = [...cats]
    lessCats.pop()
    return lessCats
}

function removeFirstCat() {
    const lessCats = [...cats]
    lessCats.shift()
    return lessCats
}