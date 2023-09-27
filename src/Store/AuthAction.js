import {
  createUserWithEmailAndPassword,
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  browserLocalPersistence,
  onAuthStateChanged,
} from "firebase/auth";
import { setCurrentUser, setIsLogin } from "./AuthSlice";
import { setnotification } from "./notificationsSlice";
import { setError, setIsLoading } from "./Loading-ErrorSlice";
import { redirect } from "react-router-dom";
import { resetCart, setIsAdded } from "./CartSlice";
import { logoutReducer } from "./reducers";
import { resetFav } from "./Fav/FavSlice";

export const signupAction = (signupCred) => {
  return async (dispatch) => {
    //validation of inputs
    dispatch(setIsLoading(true));
    if (signupCred.username.trim().length === 0) {
      dispatch(setError("Please Enter a Username"));
      return;
    }
    if (signupCred.email.trim().length === 0) {
      dispatch(setError("Please Enter your Email"));
      return;
    }
    if (signupCred.pw !== signupCred.pw2) {
      dispatch(setError("The repeated password doesn't match"));
      return;
    }
    if (signupCred.pw.trim().length === 0) {
      dispatch(setError("Please Enter a Password"));
      return;
    }
    const auth = getAuth();

    try {
      await createUserWithEmailAndPassword(
        auth,
        signupCred.email,
        signupCred.pw
      );
      await updateProfile(auth.currentUser, {
        displayName: signupCred.username,
      });
    } catch (error) {
      const errorCode = error.code;
      switch (errorCode) {
        case "auth/missing-email":
          dispatch(setError("Please Enter Your Email."));
        case "auth/email-already-in-use":
          dispatch(setError("This Email is Already in Use."));
      }
    } finally {
      dispatch(setIsAdded(true));
      dispatch(
        setnotification({
          title: "notification",
          msg: "You are Signed up successfully!",
        })
      );
      dispatch(setIsLoading(false));
      redirect("/");
    }
  };
};

export const loginAction = (loginCred) => {
  return async (dispatch) => {
    dispatch(setIsLoading(true));

    if (loginCred.email.trim().length === 0) {
      dispatch(setError("Please Enter your Email."));
      return;
    }
    if (loginCred.pw.trim().length === 0) {
      dispatch(setError("Please Enter Your Password."));
      return;
    }
    const auth = getAuth();

    try {
      await setPersistence(auth, browserLocalPersistence);
      await signInWithEmailAndPassword(auth, loginCred.email, loginCred.pw);
    } catch (error) {
      const errorCode = error.code;
      switch (errorCode) {
        case "auth/user-not-found":
          dispatch(setError("Your Email is Invalid."));
        case "auth/wrong-password":
          dispatch(setError("Your Password is Incorrect."));
        case "auth/invalid-login-credentials":
          dispatch(setError("Invalid Login Credentials."));
      }
    } finally {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch(
            setCurrentUser({
              uid: user.uid,
              email: user.email,
              username: user.displayName,
            })
          );
          dispatch(setIsLogin(true));
          redirect("/");
        } else {
          dispatch(setCurrentUser(user));
          dispatch(setIsLogin(false));
        }
      });
      dispatch(setIsAdded(true));
      dispatch(
        setnotification({
          title: "notification",
          msg: "You are logged in successfully!",
        })
      );
      dispatch(setIsLoading(false));
    }
  };
};

export const logoutAction = () => {
  return async (dispatch) => {
    dispatch(setIsLoading(true));

    const auth = getAuth();
    try {
      signOut(auth);
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setIsAdded(true));
      dispatch(
        setnotification({
          title: "notification",
          msg: "Item is removed successfully",
        })
      );
      dispatch(setIsAdded(true));
      dispatch(
        setnotification({
          title: "notification",
          msg: "Now you are Logged out!",
        })
      );
      dispatch(setIsLoading(false));
      dispatch(resetCart());
      dispatch(resetFav());
      redirect("/");
    }
  };
};
