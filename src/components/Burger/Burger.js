import react from 'react';
import './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    console.log(props.ingredients);
    let ingredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey}/>
        });
    }).reduce((arr, el) => {
        return arr.concat(el);
    }, []);
    
    console.log(ingredients);
    if (ingredients.length === 0) {
        ingredients = "Please Start Adding Ingredients!!!!"
    }
    return (
        
        <div className='Burger'>
            <BurgerIngredient type='bread-top'/>
            {ingredients}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    );

}


export default burger;