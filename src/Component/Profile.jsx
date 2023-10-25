

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Profile = () => {
 const [loading,setLoading] = useState(true)
const {user,logOut} = useContext(AuthContext)

 const handleClick = () =>{
  logOut();

}
   useEffect(()=>{
    setLoading(!user.photoURL)
  
  },[user.photoURL])
  return (
    <div>
     <div className="dropdown lg:dropdown-end md:dropdown-bottom">

        
  <label tabIndex={0} className=" m-1">
    {

    loading?

<span className="loading loading-spinner loading-lg"></span>:
     <img src={user.photoURL}  alt=""  className='rounded-lg w-10'/> 
 
      
    }
    
  </label>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box ">
     <li><a href="">
    {user.displayName}
     </a></li>
    <li><a>{user.email}</a></li>
    <li><button  onClick={handleClick}>Logout</button></li>
  </ul>
  

</div>
    </div>
  );
};

export default Profile;