import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { login } from '../slices/userSlice';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isSignupForm, setIsSignupForm] = React.useState(false);
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
        firstName: '',
        email: '',
        password: ''
    }
  })

    const formChangeHandler = () => {
       
        setIsSignupForm((prev) => !prev);
    }
    const onSubmit = (data) => {
        dispatch(login(data));
        navigate('/home');
          }
  return (
    <div>
        <form className="bg-black bg-opacity-75 p-8 rounded-lg" onSubmit={handleSubmit(onSubmit)} noValidate>
          <h2 className="text-2xl font-bold mb-6">Sign In</h2>
          { isSignupForm && <div>
            <label htmlFor="username" className="block text-sm font-medium text-white">Username</label>
            <input type="text" id="username" className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-white" {...register("firstName", { required: {
                value: true,
                message: "First name is required"
            }, maxLength: {
                value: 20,
                message: "First name cannot exceed 20 characters"
            } })} />
            {errors.firstName && <p className='text-red-500'>{errors.firstName.message}</p>}
          </div>}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
            <input type="email" id="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-white" {...register("email", { required: {
                value: true,
                message: "Email is required"
            }, pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Email is not valid"
            } })} />
             {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
            <input type="password" id="password" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" {...register("password", { required: {
                value: true,
                message: "Password is required"
            }, minLength: {
                value: 6,
                message: "Password must be at least 6 characters"
            } })} />
            {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
          </div>
          <div onClick={formChangeHandler} className="mb-6 text-sm text-gray-400 cursor-pointer">
            {isSignupForm ? 'Already have an account? Sign In' : "New to Netflix? Sign Up Now"}
          </div>
          <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">{isSignupForm ? 'Sign Up' : 'Login'}</button>
        </form>
    </div>
  )
}

export default LoginForm