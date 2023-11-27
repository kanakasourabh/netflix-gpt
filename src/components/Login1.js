import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = (e) => {
    setIsSignInForm(!isSignInForm);
    e.preventDefault();
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form className="text-white w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text "
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email or Phone Number"
          className="p-4 my-4 w-full bg-gray-700"
        />

        <input
          type="password "
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />

        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {isSignInForm ? (
          <p className="py-4 font-thin">
            New to Netflix?
            <button className="font-bold" onClick={toggleSignInForm}>
              Sign Up now
            </button>
          </p>
        ) : (
          <p className="py-4 font-thin">
            Already registered!.
            <button className="font-bold" onClick={toggleSignInForm}>
              Sign In now
            </button>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
