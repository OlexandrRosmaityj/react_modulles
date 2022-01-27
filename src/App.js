import React, {useReducer} from 'react';

const App = () => {

    const reducer = (state, action) => {
        switch (action.type){

            case 'inc1':
                return {  ...state,  count1:state.count1 + 1}

            case 'dec1':
                return {...state, count1:state.count1- 1}

            case 'reset1':
                return {...state, count1:0}


            case 'inc2':
                return {  ...state,  count2:state.count2 + 1}


            case 'dec2':
                return {...state, count2:state.count2 - 1}

            case 'reset2':
                return {...state, count2:0}


            case 'inc3':
                return {  ...state,  count3:state.count3 + 1}


            case 'dec3':
                return {...state, count3:state.count3- 1}

            case 'reset3':
                return {...state, count3:0}


           default:
                throw new Error("Erora")
        }

    }

    const [state, dispatch] = useReducer(reducer,
        {
        count1: 1,
        count2: 2,
        count3: 3
    });


    return (
        <div >

            <div style={{display:'flex'}}>
                <h1 style={{textAlign: "center"}}>{state.count1}</h1>
                <button onClick={()=>dispatch({type:'inc1'})}>INC1</button>
                <button onClick={()=>dispatch({type:'dec1'})}>DEC1</button>
                <button onClick={()=>dispatch({type:'reset1'})}>RESET1</button>
            </div>

            <div  style={{display:'flex'}}>
                <h1 style={{textAlign: "center"}}>{state.count2}</h1>
                <button onClick={()=>dispatch({type:'inc2'})}>INC2</button>
                <button onClick={()=>dispatch({type:'dec2'})}>DEC2</button>
                <button onClick={()=>dispatch({type: 'reset2'})}>RESET2</button>
            </div>

            <div  style={{display:'flex'}}>
                <h1 style={{textAlign: "center"}}>{state.count3}</h1>
                <button onClick={()=>dispatch({type:'inc3'})}>INC3</button>
                <button onClick={()=>dispatch({type:'dec3'})}>DEC3</button>
                <button onClick={()=>dispatch({type: 'reset3'})}>RESET3</button>
            </div>

        </div>
    );
};


export default App;