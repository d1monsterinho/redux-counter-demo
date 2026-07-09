import {createSlice, configureStore} from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counterSlice',
    initialState: {
        counter: 0,
        isVisible: true,
    },
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increaseBy(state, action) {
            state.counter += action.payload;
        },
        toggleVisibility(state) {
            state.isVisible = !state.isVisible;
        }
    }
});

export const store = configureStore({
    reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;