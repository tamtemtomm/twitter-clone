import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { useNavigate } from "react-router-dom";

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

  return (
    <div>
      <button onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
  );
};

export default Login;
