import { Link } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useTitle from "../../hooks/useTitle";

const Register = () => {
  const { createUser, updateProfileAndPhoto } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  useTitle("Action Universe | Register")

  const handleRegister = (event) => {
    setError("");
    setSuccess("");
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const password = form.password.value;
    const email = form.email.value;
    const photo = form.photo.value;
    if (password.length < 6) {
      setError("Provide Password with six character");
      return;
    } else if (!/(?=.*[!@#$%^&*])/.test(password)) {
      setError("Add at Least one special character");
      return;
    }

    if (email) {
      createUser(email, password)
        .then((result) => {
          const loggedUser = result.user;
          loggedUser.displayName = name;
          loggedUser.photoURL = photo;
          form.reset();
          setSuccess("Successfully Register");
          upDateUserData(loggedUser, name, photo);
        })
        .catch((error) => {
          setError(error.message);
        });
    } else {
      setError("Provide Email address");
    }
  };

  const upDateUserData = (user, name, photo) => {
    updateProfileAndPhoto(user, name, photo)
      .then(() => {
        console.log("Successfully update");
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div
      className="hero min-h-screen bg-gray-400"
      // style={{ backgroundImage: `url(${loginImage})` }}
    >
      <div className="w-full flex gap-4 items-center justify-center">
        <img
          src="https://brandio.io/envato/iofrm/html/images/graphic1.svg"
          alt=""
          className=" w-[50%]"
        />
        <div className="flex flex-col items-center justify-center">
          <form className="card-body p-4" onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
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
                <span className="label-text font-bold">Photo</span>
              </label>
              <input
                type="text"
                placeholder="Enter Photo Url"
                name="photo"
                className="input input-bordered"
              />
            </div>
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

            <label className="label">
              <span className="label-text font-bold text-2xl">
                Already Have an account? <Link to="/login">Login</Link>{" "}
              </span>
            </label>

            <div className="form-control mt-6 ">
              <input
                type="submit"
                value="Register"
                className="btn btn-primary text-xl"
              />
            </div>
          </form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Register;
