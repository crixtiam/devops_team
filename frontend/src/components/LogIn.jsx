import axios from "axios";
import { GoogleLogin } from "react-google-login";

const LogIn = ({ setUser }) => {
  const responseGoogle = async (response) => {
    await axios
      .post("https://devops-api-dccj.herokuapp.com/usuarios", {
        nombre: response.profileObj.name,
        email: response.profileObj.email,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    await axios
      .get(
        `https://devops-api-dccj.herokuapp.com/usuarios/${response.profileObj.email}`
      )
      .then((res) =>
        setUser({
          ...response.profileObj,
          rol: res.data[0].rol,
          estado: res.data[0].estado,
        })
      )
      .catch((err) => console.log(err));
  };
  return (
    <div style={{ margin: "auto", width: "25%", marginTop: "100px" }}>
      <p>Por favor haga Login para acceder a la aplicación</p>
      <div style={{ margin: "auto", width: "25%" }}>
        <GoogleLogin
          clientId="916918962607-1vhsbmn9k2ashc40afbqmj627um3u43h.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </div>
  );
};

export default LogIn;
