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
          <label htmlFor='email' style={{ fontWeight: 'normal' }}>
            Email
          </label>
          <br />
          <input type='email' name='email' id='email' style={{ marginBottom: '15px' }} />
          <br />
          <label htmlFor='password' style={{ fontWeight: 'normal' }}>
            Password
          </label>
          <br />
          <input type='password' name='password' id='password' />
          <br />
          <br />
          <button style={{ display: 'block', width: '100%' }}>Log in</button>
        </form>
      </div>
      <br />
      <div className='d-flex justify-content-center'>Or continue with your Gmail account</div>
      <div className='d-flex justify-content-center'>
        <img src='/google_sign_up.png' alt='Google' height='100px' />
        <br />
      </div>
      <div className='d-flex justify-content-center'>
        <Link to='/'>Sign up</Link> | <Link to=''>Forgot Password</Link>
      </div>
    </div>
  );
};

export default LogIn;
