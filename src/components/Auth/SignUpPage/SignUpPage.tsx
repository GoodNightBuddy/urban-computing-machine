import { getAuth } from 'firebase/auth';
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { RoutePath } from '../../../types/RouteTypes';
import Loader from '../../Loader/Loader';
import TextLink from '../../TextLink/TextLink';
import '../SignPage.css';

const SignUpPage: React.FC = () => {

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const auth = getAuth();

  const [createUserWithEmailAndPassword, , loading, error,] = useCreateUserWithEmailAndPassword(auth);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault()
    if (password.length >= 3) {
      createUserWithEmailAndPassword(email, password)
      if (error) {
        console.log(error.message);
      }
    };
  };

  if (loading) {
    return (
      <Loader />
    )
  }

  return (
    <main className="sign-page">
      <form className="sign-form" autoComplete="off" onSubmit={handleSubmit}>
        <h2 className="sign-form__title">Sign Up</h2>
        <label className="trip-popup__input input">
          <span className="input__heading">Email</span>
          <input name="email" type="email" required onChange={e => setEmail(e.target.value)} />
        </label>
        <label className="trip-popup__input input">
          <span className="input__heading">Password</span>
          <input name="password" type="password" autoComplete="new-password" required onChange={e => setPassword(e.target.value)} />
        </label>
        <button className="button" type="submit">Sign Up</button>
      </form>
      <TextLink to={RoutePath.SIGN_IN} plainText={'Already have an account?'} linkText={'Sign In'}/>
      <TextLink to={RoutePath.ROOT} plainText={'Or go back to'} linkText={'Home'}/>
    </main>
  )
};

export default SignUpPage;