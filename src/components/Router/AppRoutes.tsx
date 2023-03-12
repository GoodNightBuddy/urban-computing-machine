import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from "../../pages/Home/Home";
import Character from "../../pages/Character/Character";
import SignInPage from '../Auth/SignInPage/SignInPage';
import { RoutePath } from '../../types/RouteTypes';
import SignUpPage from '../Auth/SignUpPage/SignUpPage';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import Loader from '../Loader/Loader';

const AppRoutes: React.FC = () => {
  const auth = getAuth();
  const [authUser, loading, error] = useAuthState(auth);

  if(loading) {
    return (
      <Loader />
    )
  }

  if(error) {
    console.log(error);
  }

    return (
        <Routes>
            <Route path={RoutePath.ROOT}>
                <Route index element={<Home />} />
                <Route path={RoutePath.CHARACTER} element={<Character />} />
                {!authUser && <Route path={RoutePath.SIGN_IN} element={<SignInPage />} />}
                {!authUser && <Route path={RoutePath.SIGN_UP} element={<SignUpPage />} />}
                <Route path={RoutePath.ANY} element={<Navigate to={RoutePath.ROOT} replace />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;