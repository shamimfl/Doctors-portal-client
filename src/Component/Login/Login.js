import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='flex justify-center items-center p-5'>
            <div className='lg:w-2/5 rounded-xl shadow-2xl w-full  p-10'>
                <h1 className='font-semibold text-center text-2xl'>Login</h1>
                <form>
                    <p className='font-semibold text-xl mt-5'>Email</p>
                    <input className='border-2 rounded-md  p-2  w-full' type="text" name="email" id="email" />
                    <p className='font-semibold text-xl mt-3'>Password</p>
                    <input className='border-2 rounded-md  p-2  w-full' type="Password" name="Password" id="Password" />
                    <Link to='/reset'><small className='font-semibold'>Forgote Password ?</small></Link>
                    <input className='block mt-5 text-center btn w-full' type="submit" value="LOGIN" />
                </form>
                <p className='font-semibold mt-2'>
                    <small>New to Doctors Portal?</small>
                    <Link className='text-primary p-2' to='/singup'>Create new account</Link>
                </p>
                <div class="divider">OR</div>
                <button className='bg-white border-gray-200 text-black font-bold border-2 rounded-xl p-2 hover:bg-slate-700 ease-in-out duration-1000 btn hover:text-white w-full'>Google</button>
            </div>
        </div>
    );
};

export default Login;