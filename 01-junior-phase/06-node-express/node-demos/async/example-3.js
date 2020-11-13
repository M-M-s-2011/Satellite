
setTimeout(
    () => {
        setTimeout(
            () => {
                console.log('Inner Set Timeout')
            },
            0
        )
        console.log('Outer Set Timeout')
    },
    3000
)

console.log('Yo, I am here!')