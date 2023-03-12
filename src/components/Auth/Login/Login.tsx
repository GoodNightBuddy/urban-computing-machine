import React from 'react';
import styles from './Login.module.css'
import {useAuthState, useSignInWithGoogle} from "react-firebase-hooks/auth";
import {auth} from "../../../firebase/firebaseconfig";
import {signOut} from 'firebase/auth'
import { Link } from 'react-router-dom';
import { RoutePath } from '../../../types/RouteTypes';

const Login = React.memo(() => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth)
    const [loggedUser] = useAuthState(auth)

    const logOut = async () => {
        await signOut(auth)
    }

    return (
        <div className={styles.login}>
            {loggedUser ?
                <div className={styles.signOut} onClick={logOut}>Sign out</div>
                :
                <Link to={RoutePath.SIGN_IN} className={styles.google}>
                    
                    <span>Get authenticated</span>
                </Link>
            }
            {loggedUser && user && <div className={styles.userInfo}>
                <img className={styles.userAvatar} src={user.user.photoURL!} alt="User avatar"/>
                <div>{user.user.displayName}</div>
            </div>}
        </div>
    );
});

export default Login;