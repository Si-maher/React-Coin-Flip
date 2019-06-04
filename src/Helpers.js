import React from "react"
const choice = (array) => {
    let randomIndex = Math.floor(Math.random() * array.length)
    return array[randomIndex]
}
export { choice }