import axios from 'axios';
import { GoogleLogin } from 'react-google-login';

const LogIn = ({ setUser }) => {
  const responseGoogle = async (response) => {
    await axios
      .post('http://localhost:3001/usuarios', {
        nombre: response.profileObj.name,
        email: response.profileObj.email,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    await axios
      .get(`http://localhost:3001/usuarios/${response.profileObj.email}`)
      .then((res) =>
        setUser({ ...response.profileObj, rol: res.data[0].rol, estado: res.data[0].estado })
      )
      .catch((err) => console.log(err));
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
