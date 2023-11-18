const redux = require('redux');
//console.log(redux);

//state
const initialState = {
    counter: 0
}

//reducer
const rootReducer = (state = initialState, action) => {
    if(action.type === 'INC_COUNTER'){ //action.type is a convention
        return {
            ...state, //copy the old state
            counter: state.counter + 1
        }
    }
    if(action.type === 'ADD_COUNTER'){
        return {
            ...state, //copy the old state
            counter: state.counter + action.value
        }
    }
    return state;
}

//store
const store = redux.createStore(rootReducer);
console.log(store.getState());

//subscribe
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});

//dispatching action (Something is sending)
store.dispatch({
    type: 'INC_COUNTER'
});

store.dispatch({
    type: 'ADD_COUNTER',
    value: 10
});
//console.log(store.getState());
