import React from 'react'
import './index.css'

const Login = () => {
    return (
        <div className='login'>
            <div className='loginWrapper'>
                <div className='loginLeft'>
                    <h3 className='loginLogo'> DT</h3>
                    <span className='loginDesc'>Connect with friend and the world around you on DT</span>
                </div>
                <div className='loginRight'>
                    <div className='loginBox'>
                        <input placeholder='Email' className='loginInput' />
                        <input placeholder='Password' className='loginInput' />
                        <button className='loginButton'>Login</button>
                        <span className='loginForgot'>Forgot Password?</span>
                        <button className="loginRegisterButton">Create a new Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
