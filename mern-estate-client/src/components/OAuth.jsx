import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
					name: result.user.displayName,
					email: result.user.email,
					avatar: result.user.photoURL,
				}),
      });

      const data = await res.json();
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      console.log("Couldn't sign in with Google", error);
    }
  };

  return (
    <button
      type="button"
      className="px-4 py-2 bg-red-700 text-white rounded-md uppercase hover:opacity-90"
      onClick={handleGoogleClick}
    >
      Continue with Google
    </button>
  );
}

export default OAuth;
