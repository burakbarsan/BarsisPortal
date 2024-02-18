//Include Both Helper File with needed methods
import { getFirebaseBackend } from "../../../helpers/firebase_helper";
import {
  postApiLogin,
  postJwtLogin,
} from "../../../helpers/barsisbackend_helper";

import {
  loginSuccess,
  logoutUserSuccess,
  apiError,
  apiError2,
  reset_login_flag,
} from "./reducer";

export const loginUser = (user: any, history: any) => async (dispatch: any) => {
  try {
    let response = postApiLogin({
      email: user.email,
      password: user.password,
      language: localStorage.getItem("I18N_LANGUAGE"),
      ipAdress: "10.10.11.22",
    });

    var data = await response;
    if (data) {
      sessionStorage.setItem("authUser", JSON.stringify(data));
      var finallogin: any = JSON.stringify(data);
      finallogin = JSON.parse(finallogin);
      data = finallogin.data;
      if (finallogin.status === "success") {
        dispatch(loginSuccess(data));
      } else {
        dispatch(apiError2(finallogin.messages));
      }
    }
  } catch (error: any) {
    dispatch(apiError(error));
  }
};

export const logoutUser = () => async (dispatch: any) => {
  try {
    sessionStorage.removeItem("authUser");
    dispatch(logoutUserSuccess(true));
  } catch (error: any) {
    dispatch(apiError(error));
  }
};

export const socialLogin =
  (type: any, history: any) => async (dispatch: any) => {
    try {
      let response;

      if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
        const fireBaseBackend: any = getFirebaseBackend();
        response = fireBaseBackend.socialLoginUser(type);
      }
      //  else {
      //   response = postSocialLogin(data);
      // }

      const socialdata = await response;
      if (socialdata) {
        sessionStorage.setItem("authUser", JSON.stringify(response));
        dispatch(loginSuccess(response));
        history("/dashboard");
      }
    } catch (error: any) {
      dispatch(apiError(error));
    }
  };

export const resetLoginFlag = () => async (dispatch: any) => {
  try {
    const response = dispatch(reset_login_flag());
    return response;
  } catch (error: any) {
    dispatch(apiError(error));
  }
};
