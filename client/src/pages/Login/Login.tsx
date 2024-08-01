import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { useNavigate } from "react-router-dom";

import { GoogleIconComponent } from "../../components/IconList";
import FacebookIcon from "../../assets/facebook.png";
import "./Login.css";

const Login = ({ setIsAuth }: any) => {
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("twitter-clone-isAuth", "true");

      auth.currentUser &&
        auth.currentUser.photoURL &&
        localStorage.setItem(
          "twitter-clone-auth-photoURL",
          auth.currentUser?.photoURL
        );

      setIsAuth(true);
      navigate("/");
    });
  };

  const signInWithFacebook = () => {
    return;
  };

  return (
    <>
      <div className="login-page">
        <div className="login-container">
          <h3 className="login-title">Sign In to Continue</h3>

          <div className="button-container">
            <button onClick={signInWithGoogle}>
              <GoogleIconComponent width="1.2rem" />
              Sign In With Google
            </button>
            <button onClick={signInWithFacebook}>
              <div
                className="facebook-icon-container"
                style={{ width: "1.2rem" }}
              >
                <img
                  src={FacebookIcon}
                  alt=""
                  style={{ objectFit: "contain", width: "100%" }}
                />
              </div>
              Sign In With Facebook
            </button>
          </div>

          <h4 className="login-subtitle">or continue with</h4>

          <form action="" className="login-input-form">
            <div className="login-input-container">
              <label htmlFor="">Email Address</label>
              <input type="text" placeholder="JohnDue@gmail.com" />
            </div>
            <div className="login-input-container">
              <label htmlFor="">Password</label>
              <input
                type="text"
                placeholder="8 characters including capital letters, number, and symbol"
              />
            </div>
            <button type="submit" className="login-input-form-submit">Sign In</button>
          </form>
          <h5>Forgot your password?</h5>
        </div>
      </div>
    </>
  );
};

export default Login;
