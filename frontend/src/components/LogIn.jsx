import { useState } from 'react';
import { GoogleLogin } from 'react-google-login';

const LogIn = ({ setUser }) => {
  const responseGoogle = (response) => {
    setUser(response.profileObj);
  };

  return (
    <div style={{ margin: 'auto', width: '25%', marginTop: '100px' }}>
      <p>Por favor haga Login para acceder a la aplicación</p>
      <div style={{ margin: 'auto', width: '25%' }}>
        <GoogleLogin
          clientId='1033523848815-sq6ukknhlfk22kh6osn1nbrt28krj8o2.apps.googleusercontent.com'
          buttonText='Login'
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    </div>
  );
};

export default LogIn;
