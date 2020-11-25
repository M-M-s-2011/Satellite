import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// let myPTag = React.createElement('p', null, 'Hello React App');
// console.log(myPTag, 'myPtag')

// //Multiple Children
// const pone = React.createElement('p', null, 'P1')
// const ptwo = React.createElement('p', null, 'P2')
// const pthree = React.createElement('p', null, 'P3')

// //Parent Child Container
// const wrapper = React.createElement('div', null, [pone, ptwo, pthree])

// ReactDOM.render(wrapper, document.getElementById('app'))


// ---------- --------- JSX
// const myElement = <h1>Hello World</h1> 

// ReactDOM.render(myElement, document.getElementById('app'))



// ---------- --------- Component Intro

// class Workshops extends Component {
//     render(){
//         return(
//             <div>
//                 <LearnDotWorkshop heading="Solo Project: Fitness Tracker Pro 3" description="Some Description"/>
//                 <LearnDotWorkshop heading="Lab 1" description="Some Description 1 "/>
//                 <LearnDotWorkshop heading="Lab 3" description="Some Description 2 "/>
//                 <LearnDotWorkshop heading="Other Workshop" description="Some Description 3"/>
//             </div>
//         )
//     }
// }

// class LearnDotWorkshop extends Component {
//     constructor(){
//         super()
//     }

//     render(){
//         return (
//             <div>
//                 <Title title={this.props.heading} /> 
//                 <p> {this.props.description} </p>
//             </div>
//         )
//     }
// }

class Title extends Component {
    render(){
        return(
            <h1> {this.props.title} </h1>
        )
    }
}




// ReactDOM.render(<Workshops/> , document.getElementById('app'))


// ---------- --------- State Intro

// class Counter extends Component{
//     constructor(){
//         super()
//         this.state = {
//             count: 0
//         }
//         this.increment = this.increment.bind(this)
//     }

//     render(){
//         console.log(this.state)
//         return(
//             <div>
//                 <p>My Count: {this.state.count}</p>
//                 <button onClick={this.increment}>Increment</button>
//             </div>
//         )
//     }

//     increment(){
//         this.setState((oldState) => ({
//             count: oldState.count + 1
//         }))
//     }

// }

// ReactDOM.render(<Counter/> , document.getElementById('app'))




// -- Click Handler Passing

class TopLevelClassComponent extends Component {
    constructor(){
        super()
        this.state = {
            name: ''
        }
    }

    someFunc(someArg){
        console.log(someArg)
    }

    render(){
        return(
            <div>
                <FunctionalComponent myFunctionFromTopLevel={this.someFunc} />
            </div>
        )
    }
}





let FunctionalComponent = (props) => {
    console.log(props)
    return(
        <button onClick={() => {props.myFunctionFromTopLevel('This is my arg')}}> Click Me </button>
    )
}

ReactDOM.render(<TopLevelClassComponent/> , document.getElementById('app'))







//props.myFunctionFromTopLevel
//props.myFunctionFromTopLevel() -> Invokes instantly
//What if we wanted to pass params into the function? Need to wrap it in a callback


