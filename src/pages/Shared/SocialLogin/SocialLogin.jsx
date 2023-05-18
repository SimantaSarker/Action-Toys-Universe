import loginImage from "../../../assets/search (1).png";
const SocialLogin = () => {
  return (
    <div className="flex flex-col w-full border-opacity-50">
            <div className="divider">OR</div>
           <div className="text-center">
           <button className="btn btn-circle btn-outline">
           <img src={loginImage} alt="" />
            </button>
           </div>
          </div>
  );
};

export default SocialLogin;