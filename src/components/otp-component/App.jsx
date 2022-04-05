import React, { useEffect, useState } from "react";
// import "./App.css";
import './Main.css';
// import firebase from "firebase/app";
import firebase from 'firebase/compat/app'
import "firebase/compat/auth";

// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//components
// import SignIn from "./components/SignIn";
import SignIn from "./Login";
import Home from "./Home";

const Apps = () => {
  const [viewOtpForm, setViewOtpForm] = useState(false);
  const [user, setUser] = useState(false);
  const firebaseConfig = {
    apiKey: "AIzaSyDaARZ7wAL-2Q_E8xKHnnYLdAZ1Y1EwIG0",
    authDomain: "otp-react-dd941.firebaseapp.com",
    projectId: "otp-react-dd941",
    storageBucket: "otp-react-dd941.appspot.com",
    messagingSenderId: "1070751005554",
    appId: "1:1070751005554:web:37e90480b04e6e712f7beb",
    measurementId: "G-4KD8SSZD7M"
  };

  useEffect(() => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: function (response) {
          console.log("Captcha Resolved");
          this.onSignInSubmit();
        },
        defaultCountry: "IN",
      }
    );
  }, []);

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }

  const auth = firebase.auth();

  auth.onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
    }
  });

  const loginSubmit = (e) => {
    e.preventDefault();

    let phone_number = "+91" + e.target.phone.value;
    const appVerifier = window.recaptchaVerifier;

    auth
      .signInWithPhoneNumber(phone_number, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        console.log("otp sent");
        setViewOtpForm(true);
        window.confirmationResult = confirmationResult;
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        alert(error.message);
      });
  };

  const otpSubmit = (e) => {
    e.preventDefault();

    let opt_number = e.target.otp_value.value;

    window.confirmationResult
      .confirm(opt_number)
      .then((confirmationResult) => {
        console.log(confirmationResult);
        console.log("success");
        window.open("/", "_self");
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        alert(error.message);
      });
  };

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        window.open("/signin", "_self");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <Router>
      <div id="recaptcha-container"></div>
      <Switch>
        <Route path="/" exact>
          <Home signOut={signOut} user={user} />
        </Route>
        <Route path="/signin" exact>
          <SignIn
            loginSubmit={loginSubmit}
            otpSubmit={otpSubmit}
            viewOtpForm={viewOtpForm}
          />
        </Route>
      </Switch>
    </Router>
  );
};

export default Apps;