import React from 'react';
import styles from './Login.module.css'
import { useAuthState} from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/firebaseconfig";
import { deleteUser, signOut } from 'firebase/auth'
import { Link } from 'react-router-dom';
import { RoutePath } from '../../../types/RouteTypes';

const Login = () => {
    const [authUser] = useAuthState(auth);

    const signOutHandler = async () => {
        await signOut(auth)
    }

    const deleteHandler = async () => {
        if(authUser) {
            await deleteUser(authUser)
            .catch((error: any) => {
                console.log(error);
            });
        }
    };

    return (
        <div className={styles.login}>
            {authUser ?
                <div className={styles.btn_group}>
                    <button className={styles.sign_btn} onClick={signOutHandler}>Sign out</button>
                    <button className={styles.sign_btn} onClick={deleteHandler}>Delete acc</button>
                </div>
                :
                <Link to={RoutePath.SIGN_IN} className={styles.google}>
                    <span>Get authenticated</span>
                </Link>
            }
            {authUser && <div className={styles.userInfo}>
                <img className={styles.userAvatar} src={authUser.photoURL!} alt="User avatar"/>
                <div>{authUser.displayName}</div>
            </div>}
        </div>
    );
};

export default Login;