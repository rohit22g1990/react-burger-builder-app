import react, { Component } from 'react';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
import OrderSummaryModal from '../../components/UI/Modal/OrderSummaryModal';
import Aux from '../../hoc/Aux'

const INGREDIENT_PRICE = {
    salad: 10,
    bacon: 20,
    cheese: 10,
    meat: 40 
}
const BASE_PRICE = 30;
const ADD_OPERATION = 'add';
const REMOVE_OPERATION = 'remove';

class BurgerBuilder extends Component {

    

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0 
        },
        totalPrice: BASE_PRICE,
        showOrderSummary: false,
    };

    handleModalClose = () => {
        this.setState({
            showOrderSummary: false
        });
    };

    handleModalShow = () => {
        this.setState({
            showOrderSummary: true
        });
        console.log(this.state);
    };

    addIngredeintHandler = (type) => {
        this.updateIngredient(ADD_OPERATION, type);
    }

    removeIngredeintHandler = (type) => {
        this.updateIngredient(REMOVE_OPERATION, type);
    }

    updateIngredient = (operation, type) => {
        let oldIngredientCount = this.state.ingredients[type];
        let updatedIngredientCount = operation === ADD_OPERATION ?  oldIngredientCount + 1 : oldIngredientCount - 1;
        let updatedIngredient = {...this.state.ingredients};
        updatedIngredient[type] = updatedIngredientCount > 0 ? updatedIngredientCount : 0;

        let price = INGREDIENT_PRICE[type];
        let oldPrice = this.state.totalPrice;
        
        let updatedPrice = operation === ADD_OPERATION ? parseInt(oldPrice) + parseInt(price)
                                            : parseInt(oldPrice) - parseInt(price); 

        let newPrice = updatedPrice > BASE_PRICE ? updatedPrice : BASE_PRICE;

        this.setState({ingredients: updatedIngredient, totalPrice: newPrice});
    }


    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <h3>Price: {this.state.totalPrice}</h3>
                
                <BuildControls
                ingredients = {this.state.ingredients}
                addIngredients = {this.addIngredeintHandler} 
                removeIngredients = {this.removeIngredeintHandler} 
                purchasable = {BASE_PRICE === this.state.totalPrice}
                showModal={this.handleModalShow}
                />

                <OrderSummaryModal 
                    showModal={this.state.showOrderSummary} 
                    hideModal={this.handleModalClose}
                    ingredients={this.state.ingredients}
                    totalPrice={this.state.totalPrice}
                    />
            </Aux>    
        )
    }
}

export default BurgerBuilder;