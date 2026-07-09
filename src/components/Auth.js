import classes from './Auth.module.css';
import {useDispatch, useSelector} from "react-redux";
import {authActions} from "../store";

const Auth = () => {
    const isAuthenticated = useSelector(state => state.authReducer.isAuthenticated);
    const dispatch = useDispatch();

    console.log(isAuthenticated);

    const handleLoginClick = () => {
        console.log('login...');
        dispatch(authActions.authenticate());
    }
    return (
        <main className={classes.auth}>
            <section>
                <form>
                    <div className={classes.control}>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email'/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password'/>
                    </div>
                    <button onClick={handleLoginClick} type="button">Login</button>
                </form>
            </section>
        </main>
    );
};

export default Auth;
