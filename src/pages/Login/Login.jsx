import { Link } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = (event) => {
    setError("");
    setSuccess("");
    event.preventDefault();
    const form = event.target;
    const password = form.password.value;
    const email = form.email.value;
    signIn(email,password)
    .then((result)=>{
      const loggedUser=result.user;
      console.log(loggedUser)
      setSuccess("You are valid User")
      form.reset();
    })
    .catch((error)=>setError(error.message))
  };

  return (
    <div className="hero min-h-screen bg-gray-400">
      <div className="w-full flex items-center justify-center">
        <img
          src="https://brandio.io/envato/iofrm/html/images/graphic1.svg"
          alt=""
          className=" w-[50%]"
        />
        <form className="card-body " onSubmit={handleLogin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
              name="email"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              name="password"
              className="input input-bordered"
            />
          </div>

          <label className="label">
            <span className="label-text font-bold text-2xl ">
              Are You New? <Link to="/register">Register</Link>{" "}
            </span>
          </label>

          {error && (
            <div className="alert mt-3 alert-error shadow-lg">
              <div>
                <span>Error! {error}</span>
              </div>
            </div>
          )}

          {success && (
            <div className="alert alert-success shadow-lg">
              <div>
                <span>{success}</span>
              </div>
            </div>
          )}

          <div className="form-control mt-6 ">
            <input
              type="submit"
              value="Login"
              className="btn btn-primary text-xl"
            />
          </div>
          <SocialLogin></SocialLogin>
        </form>
      </div>
    </div>
  );
};

export default Login;
