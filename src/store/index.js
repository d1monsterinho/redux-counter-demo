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

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
    },
    reducers: {
        authenticate(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    },
})

export const store = configureStore({
    reducer: {
        counterReducer: counterSlice.reducer,
        authReducer: authSlice.reducer,
    },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;