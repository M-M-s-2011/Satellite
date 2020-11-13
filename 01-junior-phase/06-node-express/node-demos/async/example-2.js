let start = new Date

/*
The setTimeout will only execute after the program has finished executing
the non async code in line 12
*/
setTimeout(
    () => {
        let end = new Date
        console.log('End Time: ', end)
        console.log('Time elapsed: ', end - start, ' ms')
    }, 500
)

/*
This code will loop until the elapsed time is 1000ms or more
It will block the above async code from executing until it is done looping
*/
while (new Date - start < 1000 ) {}
