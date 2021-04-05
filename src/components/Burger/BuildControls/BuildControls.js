import react from 'react'
import BuildControl from './BuildControl/BuildControl';
import './BuildControls.css'


const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'},
];
const buildControls = (props) => {
    
    return (<div class="BuildControls">
        {
        controls.map(ctrl => (
            <BuildControl key={ctrl.label} 
            added = {() => {props.addIngredients(ctrl.type)}} 
            removed = {() => {props.removeIngredients(ctrl.type)}} 
            disable = {props.ingredients[ctrl.type] == 0}
            type={ctrl.type} 
            label={ctrl.label}
            count={ props.ingredients[ctrl.type] }/>      
        ))
        }
        <button className='OrderButton' disabled={props.purchasable}>ORDER NOW</button>
    </div>)
}


export  default buildControls;