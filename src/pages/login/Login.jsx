import React from "react";
import { useRef } from "react";
import "./Login.css";

export default function Login() {
  const email = useRef();
  const password = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email.current.value);
    console.log(password.current.value);
  };
  return (
    <div className='login'>
      <div className='loginWrapper'>
        <div className='loginLeft'>
          <h3 className='loginLogo'>MERN_01</h3>
          <span className='loginDesc'>MERNスタックエンジニア</span>
        </div>
        <div className='loginRight'>
          <form className='loginBox' onSubmit={(e) => handleSubmit(e)}>
            <p className='loginMsg'>ログインはこちら</p>
            <input
              type='email'
              className='loginInput'
              placeholder='Eメール'
              required
              ref={email}
            />
            <input
              type='password'
              className='loginInput'
              placeholder='パスワード'
              required
              minLength='6'
              ref={password}
              autoComplete='off'
            />
            <button className='loginButton'>ログイン</button>
            <span className='loginForgot'>パスワードを忘れた方へ</span>
            <button className='loginRegisterButton'>アカウント作成</button>
          </form>
        </div>
      </div>
    </div>
  );
}
