function outer() {
    let counter = 0
    function increment() {
        return counter += 1
    }
    return increment
}

let newInstance = outer()

console.log(newInstance())
console.log(newInstance())