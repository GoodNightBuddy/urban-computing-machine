import { getAuth } from 'firebase/auth';
import { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { RoutePath } from '../../../types/RouteTypes';
import Loader from '../../Loader/Loader';
import TextLink from '../../TextLink/TextLink';
import './SignInPage.css';

const SignInPage: React.FC = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const auth = getAuth();

  const [signInWithGoogle, , googleLoading, googleError] = useSignInWithGoogle(auth);
  const [signInWithFacebook, , facebookLoading, facebookError] = useSignInWithFacebook(auth);
  const [signInWithGithub, , githubLoading, githubError] = useSignInWithGithub(auth);
  const [signInWithEmailAndPassword, , emPassLoading, emPassError,] = useSignInWithEmailAndPassword(auth);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    if (password.length >= 3) {
      signInWithEmailAndPassword(email, password)
        .catch((error) => {
          console.log(error.message);
        });
    }
  }

  if (googleLoading || facebookLoading || githubLoading || emPassLoading) {
    return (
      <Loader />
    )
  }

  const error = googleError || facebookError || githubError || emPassError

  if (error) {
    if (error.code === 'auth/account-exists-with-different-credential') {
      alert(`It seems you try to sign to a provider (such as GitHub) with an email that already exists for another Firebase user's provider (such as Google). Unfortunately, you can sign in only with one provider. If you want to change provider (to Google or Facebook or another) you should autoritze with prevent provider and delete your account in chat tab`);   
    } else {
      console.log(error, error.code, error.message);
    }
  }

  return (
    <main className="sign-in-page">
      <form className="sign-in-form" autoComplete="off" onSubmit={handleSubmit}>
        <h2 className="sign-in-form__title">Sign In</h2>
        <label className="trip-popup__input input">
          <span className="input__heading">Email</span>
          <input name="email" type="email" required onChange={e => setEmail(e.target.value)} />
        </label>
        <label className="trip-popup__input input">
          <span className="input__heading">Password</span>
          <input name="password" type="password" autoComplete="new-password" required onChange={e => setPassword(e.target.value)} />
        </label>
        <button className="button" type="submit">Sign In</button>
        <button className="button" type='button' onClick={() => signInWithGoogle()} >Sign in with Google</button>
        <button className="button" type='button' onClick={() => signInWithFacebook()} >Sign in with Facebook</button>
        <button className="button" type='button' onClick={() => signInWithGithub()} >Sign in with GitHub</button>
      </form>
      <TextLink to={RoutePath.SIGN_UP} plainText={`Don't have an account?`} linkText={'Sign Up'}/>
      <TextLink to={RoutePath.ROOT} plainText={'Or go back to'} linkText={'Home'}/>
    </main>
  )
};

export default SignInPage