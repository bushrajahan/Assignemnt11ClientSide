import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthProvider, { AuthContext } from '../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';

import { updateProfile } from 'firebase/auth';
import {FaEye,FaEyeSlash} from "react-icons/fa";
const Register = () => {
  const [showpassword,setShowassword] = useState(false)
  const [photos,setPhoto] = useState([])
   console.log(photos)
  // const [password,setPassword] = useState('')
  const handlePassword = () =>{
    setShowassword(!showpassword)
    
  }

  const { register, handleUpdateProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const img = form.photo.value;
    console.log(img)
    const password = form.password.value;

    const pattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>?]).{6,}$/;

    if (pattern.test(password)) {
      register(email, password)
      .then(async(res) => {

        const user = res.user;
        console.log(user)
        await updateProfile(user,{
          displayName:name,
          photoURL:photos
        })
          
            toast.success('Congratess!! Welcome to shopping')
            
            
        })
        .catch((error) => {console.error(error)
           if(error.code === 'auth/email-already-in-use'){
            toast.error('Email already is used ')
           }
        });
    } else {
      toast.error('Password must contain at least one uppercase letter, one special character, and be a minimum of 6 characters in length');
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-cover mt-20 bg-no-repeat" style={{ backgroundImage: `url('https://i.ibb.co/hWkKpLd/Untitled-design.jpg')` }}>
      <div className="rounded-xl bg-gray-80 px-16 py-10 shadow-lg max-sm:px-8">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center">
            <img src="/public/sitelogo.png" width="150" alt="" />
            <h1 className="mb-2 text-2xl">Gadgetbd</h1>
            <span className="text-white">Enter Register Details</span>
          </div>
          <form action="#" onSubmit={handleSubmit}>
            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-green-300 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="text"
                name="name"
                placeholder="Name"
                required
              />
            </div>
            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-green-300 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="email" // Changed to "email"
                name="email"
                placeholder="id@email.com"
                required
              />
            </div>
            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-green-300 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="text"
                onChange={(e)=>setPhoto(e.target.value)}
                name="photo"
                placeholder="Enter photo URL"
                required
              />
            </div>
            <div className="relative mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-green-300 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type={showpassword? 'text' :'password'}
                name="password"
            
                placeholder="*********"
                required
            
              />
          <span
          className="absolute right-4 top-2 text-black "
          onClick={handlePassword}
      
        >{
          showpassword ? 
          
          <FaEyeSlash></FaEyeSlash>:
          <FaEye></FaEye>
        }
       
         
        
        </span>
            </div>
            <div className="mt-8 flex justify-center text-lg text-black">
              <button
                type="submit"
                className="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
              >
                Register
              </button>
            </div>
            <p className='text-center'>Already have an account? <Link to='/login' className='border-b-2 border-b-white'>Login</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
