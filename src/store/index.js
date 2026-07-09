import {createStore} from 'redux';

const counterReducer = (state = {
    counter: 0,
    isVisible: true,
}, action) => {

    if (action.type === 'increment') {
        return {
            state,
            counter: state.counter + 1,
        }
    }

    if (action.type === 'decrement') {
        return {
            ...state,
            counter: state.counter - 1,
        }
    }

    if (action.type === 'increaseBy') {
        return {
            ...state,
            counter: state.counter + action.value,
        }
    }

    if (action.type === 'toggleVisibility') {
        return {
            ...state,
            isVisible: !state.isVisible
        }
    }

    return state;
}

const store = createStore(counterReducer);

export default store;