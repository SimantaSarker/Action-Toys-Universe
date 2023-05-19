import { useContext } from "react";
import loginImage from "../../../assets/search (1).png";
import { AuthContext } from "../../../providers/AuthProvider";
const SocialLogin = () => {
  const {registerWithGoogle}=useContext(AuthContext);


  const handleGoogleBtn=()=>{
    registerWithGoogle()
    .then((result)=>{
      const user=result.user;
      console.log(user)
    })
    .catch((error)=>{
      console.log(error.message)
    })
  }
  return (
    <div className="flex flex-col w-full border-opacity-50">
            <div className="divider">OR</div>
           <div className="text-center">
           <button className="w-14 "  onClick={handleGoogleBtn}>
           <img src={loginImage} alt=""/>
            </button>
           </div>
          </div>
  );
};

export default SocialLogin;