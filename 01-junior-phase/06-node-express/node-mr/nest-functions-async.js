const hello = () => {
    awesome()
    console.log('hello')
}

const awesome = () => {
    console.log('coolio')
    food()
    setTimeout(() => {
        console.log('I want a cookie!')
    }, 3000)
    console.log('awesome')
}

const food = () => {
    console.log('pbj')
    console.log('waffles')
}

hello()