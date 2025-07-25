import { useState } from "react";
import {Link } from "react-router";
import useLogin from "../hooks/useLogin";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });




  const {isPending,error,loginMutation}=useLogin();

  const handleLogin = (e) => {
    e.preventDefault();
    loginMutation(loginData);
  };

  return (
    <div
      className="h-screen flex items-center justify-center p-4 sm:p-4 md:p-8"
      data-theme="dark"
    >
      <div className="border border-primary/25 flex flex-col lg:flex-row w-full max-w-5xl mx-auto bg-base-100 rounded-xl shadow-lg overflow-hidden">
        {/* login form section */}
        <div className="w-full lg:w-1/2 p-4 sm:p-8 flex flex-col ">
          {/* logo  */}
          <div className="mb-4 flex items-center justify-start gap-2">
            <img
              src="/logo.png"
              alt="BuddyChat Logo"
              className="w-12 h-14 mb-4"
            />
            <span className="text-5xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary tracking-wider">
              BuddyChat
            </span>
          </div>

          {error && (
            <div className="alert alert-error mb-4 ">
              <span>{error.response.data.message} </span>
            </div>
          )}

          <div className="w-full">
            <form onSubmit={handleLogin}>
              <div className="space-y-4">
                <div>
                  <h2 className="text-xl font-semibold">Welcome Back </h2>
                  <p className="text-sm opacity-70">
                    Sign in to your account to continue chat
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="form-control w-full space-y-2">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="abhi@gmail.com"
                      className="input input-bordered w-full"
                      value={loginData.email}
                      onChange={(e) =>
                        setLoginData({ ...loginData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="form-control w-full space-y-2">
                    <label className="label">
                      <span className="label-text">password</span>
                    </label>
                    <input
                      type="password "
                      placeholder="*********"
                      className="input input-bordered w-full"
                      value={loginData.password}
                      onChange={(e) =>
                        setLoginData({ ...loginData, password: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-full "
                  disabled={isPending}
                >
                  {isPending ? (
                    <>
                      <span className="loading loading-spinner loading-xs">
                        Signing in....
                      </span>
                    </>
                  ) : (
                    "Sign In "
                  )}
                </button>

                <div className="text-center mt-4 ">
                  <p className="text-sm">
                    Don't have an account ?{" "}
                    <Link to="/signup" className="text-primary hover:underline ">First , Create an Account buddy </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
        
        <div className="hidden lg:flex w-full lg:w-1/2 bg-primary/10 items-center justify-center">
        <div className="max-w-md p-8">
          <div className="relative aspect-square max-w-sm mx-auto">
            <img src="/i2.webp" alt="Language " className="w-full h-full" />
          </div>
          <div className="text-center space-y-3 mt-6">
            <h2 className="text-xl font-semibold">Connect with language buddy partners worldwide</h2>
            <p className="opacity-78">
              Practice conversations, make friends ,and improve your language skills and have fun together 
            </p>
          </div>
          </div>
          </div>
      </div>
    </div>
  );
};

export default LoginPage;
