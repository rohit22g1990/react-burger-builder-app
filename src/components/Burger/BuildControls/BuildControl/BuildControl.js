import react from 'react';
import './BuildControl.css'

const buildControl = (props) => (
    <div className="BuildControl">
        <div className="Label"> {props.label} </div>
        <button className="btn btn-success" onClick={props.removed} disabled={props.disable}>Less</button>
        <button className="More" onClick={props.added}>More</button>
        <div class= {props.count==0 ? 'btn-danger Count' : 'btn-success Count'}> {props.count} </div>
    </div>
);

export default buildControl;