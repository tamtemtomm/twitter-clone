//Import Style
import "./Login.css";
import FacebookIcon from "../../assets/facebook.png";

// Import Dependencies
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// Import Firebase Config
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";

// Import Props Context and Routes
import { AccountInterface } from "../../Interface/AccountInterface";
import { addAccountRoute } from "../../api/AccountAPI";

// Import Icon and Styling
import { GoogleIconComponent } from "../../components/IconList";

const Login = ({ setIsAuth }: any) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Set variable to local storage so the user don't have to login multiple times
  const saveAuthLocalStorage = (result: any) => {
    localStorage.setItem("twitter-clone-isAuth", "true");
    localStorage.setItem("twitter-clone-auth-uid", result.user.uid);
    localStorage.setItem(
      "twitter-clone-auth-username",
      result.user.displayName || "defaultusername"
    );
    localStorage.setItem(
      "twitter-clone-auth-usertag",
      result.user.displayName || "defaultusertag"
    );
    localStorage.setItem(
      "twitter-clone-auth-email",
      result.user.email || "defaultemail"
    );
    localStorage.setItem(
      "twitter-clone-auth-photoURL",
      result.user.photoURL || ""
    );
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      saveAuthLocalStorage(result);

      // Add new account to database
      const newRecord: AccountInterface = {
        _id: result.user.uid || "randomuid823i4ydsfmh",
        username: result.user.displayName || "defaultusername",
        usertag: result.user.displayName || "defaulttag",
        email: result.user.email || "defaultemail@gmail.com",
        profilePicture: result.user.photoURL || "",
      };
      addAccountRoute(newRecord);

      setIsAuth(true);
      navigate("/");
    });
  };

  const handleSubmit = () => {
    return;
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

          <form action="" className="login-input-form" onSubmit={handleSubmit}>
            <div className="login-input-container">
              <label htmlFor="">Email Address</label>
              <input
                type="text"
                placeholder="JohnDue@gmail.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="login-input-container">
              <label htmlFor="">Password</label>
              <input
                type="text"
                placeholder="8 characters including capital letters, number, and symbol"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <button type="submit" className="login-input-form-submit">
              Sign In
            </button>
          </form>
          <h5>Forgot your password?</h5>
        </div>
      </div>
    </>
  );
};

export default Login;
