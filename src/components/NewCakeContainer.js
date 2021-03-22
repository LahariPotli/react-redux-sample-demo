import React , { useState }from 'react';

import { connect } from 'react-redux';
import { buyCake } from '../redux';


function CakeContainer(props) {
    const [number , setNumber] = useState(1);
    return(
        <div>
            <h2>Number of cakes -{props.numOfCakes}</h2>
            <input type='text' value={number} onChange={e => setNumber(e.target.value)}></input>
            <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
        </div>
    )
}

const mapStateToProps = state => { // accepts state as input and return an object
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps= dispatch =>{
    return {
        buyCake: number  => dispatch(buyCake(number))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps

)(CakeContainer);


    