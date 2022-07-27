import { FormEvent } from 'react';
import './styles/LoginPage.scss';

export default function LoginPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log(e);
  };

  return (
    <div className='container login-page'>
      <form className='login-page__form' onSubmit={handleSubmit}>
        <div className='login-page__form-title'>
          <h1>Log In</h1>
        </div>
        <div className='login-page__form-email'>
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' name='email' />
        </div>
        <div className='login-page__form-pass'>
          <label htmlFor='password'>Pass:</label>
          <input type='password' id='password' name='password' />
        </div>
        <button className='login-page__form-button'>Login</button>
      </form>
    </div>
  );
}
