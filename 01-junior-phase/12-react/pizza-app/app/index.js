import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Topping from './topping';

class ToppingList extends Component {
    constructor(){
        super()
        this.state ={
            toppings: ['Broccoli', 'Cheese', 'Mushrooms'],
            favorite: ''
        }
        this.favoriteTopping = this.favoriteTopping.bind(this)
    }

    favoriteTopping(topping){
        this.setState((oldState) => ({
            toppings: oldState.toppings,
            favorite: topping
        }))
    }

    render(){
        return(
            <div id="container">
                <h1>Your favorite pizza topping: {this.state.favorite}</h1>
                <ul>
                    {
                        this.state.toppings.map((topping) => (
                            <Topping myClickFunction={this.favoriteTopping} type={topping}/>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

ReactDOM.render(<ToppingList />, document.getElementById('app'))