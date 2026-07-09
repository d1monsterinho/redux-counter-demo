import classes from './Counter.module.css';
import {useDispatch, useSelector} from "react-redux";

const Counter = () => {
    const counter = useSelector(state => state.counter);
    const counterVisibility = useSelector(state => state.isVisible);
    const dispatch = useDispatch();

    const toggleCounterHandler = () => {
        dispatch({
            type: 'toggleVisibility',
        });
    };

    const handleIncrementClick = () => {
        dispatch({
            type: 'increment',
        });
    }

    const handleDecrementClick = () => {
        dispatch({
            type: 'decrement',
        });
    }

    const handleIncreaseBy5Click = () => {
        dispatch({
            type: 'increaseBy',
            value: 5,
        });
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