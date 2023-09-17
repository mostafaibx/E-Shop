import {
  createUserWithEmailAndPassword,
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  browserLocalPersistence,
} from "firebase/auth";
import { setIsLogin } from "./AuthSlice";
import { setError, setIsLoading } from "./Loading-ErrorSlice";

export const signupAction = (signupCred) => {
  return async (dispatch) => {
    //validation of inputs
    // NOT SURE TO USE CHAINED IF ELSE OR INDPENDENT IF STATMENTS
    dispatch(setIsLogin(true));
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
      dispatch(setIsLoading(false));
    }
  };
};

export const loginAction = (loginCred) => {
  return async (dispatch) => {
    dispatch(setIsLogin(true));

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
      //need to check updated docs to see what changed about responses of invalid cred
      switch (errorCode) {
        case "auth/user-not-found":
          dispatch(setError("Your Email is Invalid."));
        case "auth/wrong-password":
          dispatch(setError("Your Password is Incorrect."));
        case "auth/invalid-login-credentials":
          dispatch(setError("Invalid Login Credentials."));
      }
    } finally {
      dispatch(setIsLoading(false));
    }
  };
};

export const logoutAction = () => {
  return async (dispatch) => {
    dispatch(setIsLogin(true));

    const auth = getAuth();
    try {
      signOut(auth);
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setIsLoading(false));
    }
  };
};
