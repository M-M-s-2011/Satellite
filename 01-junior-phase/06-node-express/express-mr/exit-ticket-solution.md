# Day 06: Express, `Async/Await`

Credit: Noelle Laureano

**You should be able to:**

- Describe the role of a client, a server, and HTTP
- Describe Express middleware, requests, and responses
- Handle URL params in an Express route
- Know when and why you would use app.use and next in your Express app
- Explain the purpose of using async/await & promises

## In your own words, what is a server?

- **A HTTP server listens for HTTP requests and sends HTTP responses.**
- ***Reference:***
  - [MDN: What is a web server?](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_web_server)

## What is the purpose of the `package.json` file in a Node project?

- Store a list of dependencies for the project
- Give the project a name
- Store metadata about the project
- **All of the above** ☑️
- None of the above
- ***Reference:***
  - See the section "Properties of a package.json file" [here](https://dev.to/easybuoy/understanding-the-package-json-file-3fdg).
  - [Node: What is the file `package.json`?](https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/)

## What is Express?

- **Node web framework for handling requests** ☑️
  - _Provides mechanisms to:_
    - Write handlers for requests with different HTTP verbs at different URL paths (routes)
    - Set common web application settings like the port to use for connecting
    - Add additional request processing “middleware” at any point within the request handling pipeline
- JavaScript runtime environment
- JavaScript library for building user interfaces
- An ORM
- ***References:***
  - [Express.js documentation](https://expressjs.com/)
  - [MDN: Express/Node introduction](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)
  - [tutorialspoint: ExpressJS Overview](https://www.tutorialspoint.com/expressjs/expressjs_overview.htm)

## Which of the following statements are true about Express Middleware?

- **An example of it could be app.use** ☑️
- **It happens between the request and response** ☑️
- Only one middleware function can be called per request-response cycle
- **An example of it could be app.get**
- It sometimes runs after the response is sent
- ***References:***
  - [Express: Using middleware](https://expressjs.com/en/guide/using-middleware.html)
  - [Express: Writing middleware for use in Express apps](https://expressjs.com/en/guide/writing-middleware.html)
  - [Express: `app.use()`](https://expressjs.com/en/4x/api.html#app.use)
  - ***A function that receives the request and response objects of an HTTP request/response cycle (i.e. `(req, res, next) => {...}`).***

## What is a Promise?

- A function that runs asynchronous code
- A keyword that marks a function as having asynchronous code
- A callback function that executes after an asynchronous operation finishes
- **An object that represents the eventual completion of an asynchronous operation and its resulting value** ☑️
- ***Reference:***
  - [MDN: Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)

--------------

# Extra Questions

## What is a good resource to look up express commands/functionality?

The [Express documentation](https://expressjs.com/en/4x/api.html) is a good first-stop to look these things up. This is where you can find all the different methods available to you, along with descriptions of how they work, and little code snippets to reference as examples.

## What is an example of a client-server relationship in a real web app?

Further detail asked in this question:

> I'm thinking of something like Netflix-- is the content on a streaming service stored in a server and delivered to the client by a server, in a similar (of course, orders of magnitude more complicated) way to the code we've been writing? And so when a client requests some TV show by clicking on its image, the server responds by getting the requested content and rendering it on the screen?

This is a pretty good example! Netflix is definitely very complex (and actually, you can read up on how they build it on [their blog](https://netflixtechblog.com/)). But you're right that there is a lot of client-server relationship actions happening here. I like the example of a client clicking on some TV show image - that very well may send a request to Netflix's server saying "GET /shows/123", Netflix's server then finds the show with id # 123, and sends it back to the client to view.

In real life, there are _tons_ of these client-server requests happening all over the place. Check out the network tab sometime on a website you visit frequently, and see what's there. Social media is a cool example to look at. How many requests are happening? Dozens, sometimes even _hundreds_. Many many resources are stored on the server, and the client asks for them all as needed. These requests the client is making can be kicked off by anything from simply loading the page, to clicking on things, to typing in a certain keystroke, and so on. When we finish our server-side content, we'll be jumping back to the front-end and seeing how the client makes these requests and what it does with the response.

## What is the purpose of middleware, and when would I use it?

In Express, middleware is anything that executes in between the incoming request and the outgoing response.

A very popular usage of middleware are functions that will execute for every incoming request. Examples are this are loggers (`morgan`), middleware that serves static resources (`express.static`), authentication (checking if a user is logged in before processing the request), and much more.

Middlewares that run on every request are defined with `app.use`. You can build your own custom middleware by doing something like this:

```js
app.use((req, res, next) => {
  console.log('my custom middleware');
  next();
});
```

Or you can install middleware libraries from `npm` to use in your code. Something like these:

```js
app.use(morgan('dev')); // logger
app.use(express.static('your_path_here')); // static resources
app.use(someInstalledMiddleware()); // anything else!
```

## What is the difference between `app.get` and `app.use`?

Recall that there are a few different **verbs** in HTTP, like: GET, POST, PUT, DELETE. Each incoming request will have a verb.

Express allows you to create route handlers that are _specific_ to requests of a certain verb, ie:
- Use `app.get` for handling GET requests (all other verbs will be ignored)
- Use `app.post` for handling POST requests (all other verbs will be ignored)
- etc

All of those are great when you want to cater to a specific type of request. But if you want to write a route handler that will work for _all_ verbs, you'd use `app.use`. This is a "catch all" for any-verb requests. No matter the verb, `app.use` will be a match.

## How do you use `path` and `__dirname`?

Node has a built-in module called `path`, which provides some helpful functions about file paths. By "built-in", this means that you don't need to _install_ anything, but you do still need to _require_ it:

```js
const path = require('path'); // can do this without needing to install anything
```

A `path` method you will see frequently is `path.join`, which is a "safer" way to concatonate strings used to construct a file path.

`__dirname` is a "global" Node variable, which means it's available to you natively without needing to install or require anything. It represents to current directory. Often you will use this in conjunction with the `path.join` method above to construct a file path!

## How does `express.static` work?

This is a middleware to serve static resources. A **static resource** is something that isn't generated dynamically... Think: your CSS files, maybe HTML, images... Static resources remain the same for each and every request while your server is running.

Your client will likely request some/all of these resources at some point. Instead of writing a separate route for _each_ resource to send to the client, we can use `express.static` middleware to simplify this process:

```js
app.use(express.static(path.join(__dirname, '/public')))
// ^ this assumes all my static resources are located in a folder called "public"
// that's at the top-level directory of my project
```

With this middleware in place, now for _every_ incoming request, the static middleware will execute: it will check to see if the requested resource is located in the "public" folder. If it is, send it back to the client. If it's not, it will move on and search for the next matching route.

## Overview: Errors, `try/catch`, Express error-handling, HTTP status codes for errors

### Errors (JavaScript Object)

You can find more detail on the JS Error Object in the [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error). In a nutshell, an `Error` is an object that is created and thrown when runtime errors occur.

Lots of the code you already use throw Errors. You've probably seen them a hundred times! But you can also create them yourself if needed:

```js
let myError = new Error(); // simply creating a new Error will not crash your code...
throw myError; // ... "throwing" the error is what crashes it
```

### Try...Catch (Handling JS Errors)

When your program detects that an Error has been thrown, it will crash unless you have "error handling" written. To handle errors in JavaScript, we use `try/catch` ([docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)):

```js
try {
  // if anything within this "try" block throws an error, jump to the "catch"
  let f = foo();
  let b = bar();
  console.log(f, b);
}
catch(err) {
  // only run this code if an error was thrown in the "try" block above
  console.log('uh oh...', err);
}
```

### Express Error-handling

"Express error-handling" specifically means: writing an **Express route** that is meant to send a response to the client that an error has occurred. This is _not the same_ as try/catch, though while using Express, you will likely have a mix of both!

This topic will be covered more on Friday, but if you're curious, [here are the docs](https://expressjs.com/en/guide/error-handling.html) on how to write "error-handling middleware" in Express. Note that Express does have built-in error-handling (scroll to "the default error handler"), but you can also write your own custom error-handlers (scroll down to "writing error handlers").

### HTTP status codes for errors

When you're writing an API, you want to send back accurate, _meaningful_ status codes with your responses. For example, `200` is the default status code for success, but provides no further context other than "the request has succeeded". This is ok in some cases, but sometimes we can be more specific: `201` is the success code for "Created", which is used for POST requests. All 200-level codes indicate success.

400-level codes indicate "client error". There are different 400-level codes to represent different problems; here are a couple:
- `404: Not Found` - the client requested a resource that does not exist (typo in the URL bar can trigger this)
- `403: Forbidden` - the client is logged in, but is not allowed to view the requested resource (think of sites that have "admin only" sections)

The goal here is to be as clear as possible when sending reponses from your server. Part of that means setting meaningful status codes! Check out the [HTTP status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) for a list of what's available.


## Overview: Promises & `async`/`await`

### Promises

A Promise is a JS object that represents the eventual completion of an asynchronous operation. [The documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) describes it as a "proxy" for a value that is not necessarily known when the promise is created (ie: when you first call the asynchronous function).

A `Promise` object has a **status** and a **value**.

The **status** of a Promise can be 1 of the following:
- _pending_: initial state, neither fulfilled or rejected (async operation has not yet completed)
- _fulfilled_: the async operation was completed successfully
- _rejected_: the async operation failed

### Handling Promises with `async/await`

Any function that returns a Promise must be handled with async/await:

```js
const doAsyncThings = async () => {
  let puppies = await db.query('SELECT * FROM puppies');
  console.log('here are the pups:', puppies);
}

doAsyncThings();
```

The `async` keyword marks a function as containing asynchronous code. Inside an `async` function, you can use the `await` keyword, which will "pause" on that line of code until the Promise is no longer pending (ie: fulfilled or rejected). Once the promise has resolved/rejected, the next line of code in the `async` function will execute.

## Overview: Event Loop

I'll always suggest this talk by Philip Roberts, ["What the heck is the event loop anyway?"](https://www.youtube.com/watch?v=8aGhZQkoFbQ&vl=en).

_But if I WERE to try to put it in a nutshell...._ JavaScript can basically only do 1 thing at a time. The event loop helps JS stay organized with it's to-do list of code it needs to run, and when.

Here's a story about a guy named JS, trying to use a microwave:

_Once upon a time, a guy named JS had a long to-do list. For each task he was working on, he added it to the **call stack**. That's where he kept track of what he was currently working on._

_One day, JS came across this task on his list: "microwave the leftovers". Now, I don't know about you, but when I put food in the microwave, I don't just want to stare at it while it cooks... I want to multi-task and go do other things. JS would like to do something else while his food cooks. So, JS calls up his friend **Worker Thread** (strange name, I know), and says "hey man, do you mind staring at the microwave while I go through the rest of my to-do list?". Worker Thread agrees. JS says, "thanks man. By the way, let me know when it's done, because I gotta execute this **callback function** called `eatFood()` when it's done." "All good," says Worker Thread._

_While Worker Thread stares at the microwave, JS goes through the rest of his to-do list, adding things to the call stack while he's working on them. Eventually, Worker Thread yells across the room, "the microwave is done!!" JS is supposed to execute that `eatFood()` callback now, but there's just oooooone more thing left in the call stack that he's finishing up before he can `eatFood()`. It gets jot down on the **callback queue** stationary, reminding JS that as soon as that call stack is empty, he can check that stationary and remember "ah yes, time to `eatFood()`!"_
