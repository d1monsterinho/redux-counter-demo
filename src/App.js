import Counter from './components/Counter';
import React, {Fragment} from "react";
import UserProfile from "./components/UserProfile";
import Auth from "./components/Auth";
import Header from "./components/Header";
import {useSelector} from "react-redux";


function App() {
    const isAuthenticated = useSelector(state => state.authReducer.isAuthenticated);

    return (
        <Fragment>
            <Header/>
            {!isAuthenticated && <Auth/>}
            {isAuthenticated && <UserProfile/>}
            <Counter/>
        </Fragment>
    );
}

export default App;
