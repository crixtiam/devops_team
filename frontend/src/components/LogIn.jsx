// import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const LogIn = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div style={{ margin: 'auto', width: '25%', marginTop: '60px' }}>
      <p>Por favor ingrese para hacer uso de la aplicación</p>
      <div className='d-flex justify-content-center'>
        <button
          style={{ padding: '15px 30px', fontSize: '18px', fontWeight: 'bold' }}
          onClick={() => loginWithRedirect()}
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default LogIn;
