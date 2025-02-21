import React from 'react';
// import '../../assets/css/login.css';

export const Login = () => {
  return (
    <>
      <>
        <div className="container">
          {/* Hidden Checkbox */}
          <input type="checkbox" id="flip" />
          {/* The 3D Card */}
          <div className="card">
            {/* FRONT: Login Form */}
            <div className="front">
              <h2>Login</h2>
              <input type="text" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>Sign In</button>
              <div className="toggle-link">
                Don't have an account?
                {/* Clicking this flips the card (check the hidden checkbox) */}
                <label htmlFor="flip">
                  <a>Sign Up</a>
                </label>
              </div>
            </div>
            {/* BACK: Sign Up Form */}
            <div className="back">
              <h2>Sign Up</h2>
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>Create Account</button>
              <div className="toggle-link">
                Already have an account?
                {/* Clicking this flips back to the front */}
                <label htmlFor="flip">
                  <a>Sign In</a>
                </label>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};
