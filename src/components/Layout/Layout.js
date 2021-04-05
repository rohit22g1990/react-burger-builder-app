import react from 'react';
import Aux from '../../hoc/Aux';
import './Layout.css';

const layout = (props) => (
    <Aux>
        <div>
            <h1>Burger Builder</h1> 
        </div>
        <main className='Content'>
            {props.children}
        </main>

    </Aux>
);

export default layout;