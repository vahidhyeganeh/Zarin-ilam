import React, {createContext, useReducer,useContext} from 'react';

var CounterStateContext = createContext();
var CounterDispatchContext = createContext();


function counterProvider({children}) {
    var [state, dispatch] = useReducer(counterReducer, {
        counter: 0,
    });
    return (
        <CounterStateContextContext.Provider value={state}>
            <CounterDispatchContext.Provider value={dispatch}>
                {children}
            </CounterDispatchContext.Provider>
        </CounterStateContextContext.Provider>
    )
}


function counterReducer(state, action) {

    switch (action.type) {
        case "INC":
            return {...state, counter: state.counter + 1}
        default:{
            throw new Error (`Unhandled action type : ${action.type}`)
        }
    }
}


function useCounterState() {
    var context = useContext(CounterStateContext);
    if (context === undefined){
        throw new  Error ('خطا در دریافت State')
    }
    return context;
}


function useCounterDispatch() {
    var context = useContext(CounterDispatchContext)
    if (context === undefined){
        throw new Error('خطا ')
    }
    return context
}

/*********************** function ****************************/

export {
    counterProvider,counterReducer,useCounterState,useCounterDispatch
    ,plusCounter
}


function plusCounter(e) {
    dispatch({
        type:"INC"
    })
}
