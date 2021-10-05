import { Link } from 'react-router-dom';

const LogIn = () => {
  return (
    <div className='container mt-4'>
      <div className='d-flex justify-content-center'>
        <h1>Welcome</h1>
      </div>
      <div className='d-flex justify-content-center'>
        <br />
        <form>
          <label htmlFor='email'>Email</label>
          <br />
          <input type='email' name='email' id='email' />
          <br />
          <br />
          <label htmlFor='password'>Password</label>
          <br />
          <input type='password' name='password' id='password' />
          <br />
          <br />
          <button>Log in</button>
          <br />
          <br />
          <div>Or continue with your Gmail account</div>
          <img src='/google_sign_up.png' alt='Google' height='100px' />
          <br />
          <Link to='/'>Sign up</Link> | <Link to=''>Forgot Password</Link>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
