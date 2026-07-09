import classes from './Counter.module.css';
import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "../store";

const Counter = () => {
    const counter = useSelector(state => state.counterReducer.counter);
    const counterVisibility = useSelector(state => state.counterReducer.isVisible);
    const dispatch = useDispatch();

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggleVisibility());
    };

    const handleIncrementClick = () => {
        dispatch(counterActions.increment());
    }

    const handleDecrementClick = () => {
        dispatch(counterActions.decrement());
    }

    const handleIncreaseBy5Click = () => {
        dispatch(counterActions.increaseBy(10));
    }

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {counterVisibility && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={handleIncrementClick}>Increment</button>
                <button onClick={handleDecrementClick}>Decrement</button>
                <button onClick={handleIncreaseBy5Click}>Increase by 5</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;