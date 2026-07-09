import classes from './Header.module.css';
import {authActions} from "../store";
import {useDispatch, useSelector} from "react-redux";

const Header = () => {
    const isAuthenticated = useSelector(state => state.authReducer.isAuthenticated);
    const dispatch = useDispatch();

    const handleLogoutClick = () => {
        dispatch(authActions.logout());
    }

    return (
        <header className={classes.header}>
            <h1>Redux Auth</h1>
            <nav>
                <ul>
                    <li>
                        <a href='/'>My Products</a>
                    </li>
                    <li>
                        <a href='/'>My Sales</a>
                    </li>
                    {isAuthenticated && (
                        <li>
                            <button onClick={handleLogoutClick}>Logout</button>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
