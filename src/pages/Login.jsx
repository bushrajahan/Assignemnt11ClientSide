import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handlePassword = () => {
    setShowPassword(!showPassword);
  }

  const { signIn, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = () =>{
    googleLogin()
    .then(res =>
       toast.success('Congratess !! welcome to our shop ')
       
      )

  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await signIn(email, password);
      navigate('/');
    } catch (error) {
      console.log(error.code)
      if (error.code === 'auth/invalid-login-credentials') {
        toast.error('Your email or password is wrong');
      }
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-cover bg-no-repeat" style={{ backgroundImage: `url('https://i.ibb.co/hWkKpLd/Untitled-design.jpg')` }}>
      <div className="rounded-xl  px-4 py-4 sm:px-8 md:px-16 lg:px-32 sm:py-6 md:py-8 lg:py-10 shadow-lg max-w-md">
        <div className="text-white">
          <div className="mb-4 flex flex-col items-center">
            <img src="/public/sitelogo.png" width="150" alt="" />
            <h1 className="my-2 text-2xl">Gadgetbd</h1>
            <span className="text-white">Enter Register Details</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                className="w-full rounded-3xl border-none bg-green-300 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="email"
                name="email"
                placeholder="id@email.com"
                required
              />
            </div>
            <div className="relative mb-4">
              <input
                className="w-full rounded-3xl border-none bg-green-300 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="*********"
                required
              />
              <span
                className="absolute right-4 top-2 text-black cursor-pointer"
                onClick={handlePassword}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full rounded-3xl bg-yellow-400 bg-opacity-50 px-4 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
              >
                Login
              </button>
            </div>
       
          </form>
          <div className="mt-4">
              <button
                onClick={handleClick}
                className="w-full rounded-3xl bg-yellow-400 bg-opacity-50 px-4 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
              >
                Login with Google
              </button>
            </div>
            <p className='mt-4 text-center text-white'>
              Don't have an account? <Link to='/register' className='border-b-2 border-b-white'>Register</Link>
            </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
