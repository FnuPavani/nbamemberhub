import React, { useState } from 'react';
import "../css/login.css";
// import MemberHub from './memberhub';
import MemHub from './memHub';
// import { GET_COOKIE_ENDPOINT } from '../config/service-config';

function LoginForm(){
    const [userDetails, setuserDetails] = useState({'email':null, 'password': null});
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validEmailRegex = RegExp(
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      );
      const validateForm = errors => {
        let valid = true;
        Object.values(errors).forEach(val => val.length > 0 && (valid = false));
        return valid;
      };

      const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = errorMessages;
    
        switch (name) {
          case 'email': 
          console.log("hey")
            errors.email = 
              validEmailRegex.test(value)
                ? ''
                : 'Email is not valid!';
            break;
          case 'password': 
          console.log("pass")
            errors.password = 
              value.length < 8
                ? 'Password must be at least 8 characters long!'
                : '';
            break;
          default:
            break;
        }
        setuserDetails(prevState => {
            return {...prevState, [name]: value}
        });
        console.log('userDetails')
        console.log(userDetails)
        setErrorMessages({errors});
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        if(validateForm(errorMessages)) {
          console.info('Valid Form');
          setIsSubmitted(true);
          loginUser();
        }else{
          console.error('Invalid Form')
        }
      }

    const loginUser = () => {
        console.log(userDetails.email)
        const data = {
            'email': userDetails.email,
            'password': userDetails.password
        }
        console.log(data)
        fetch('/auth', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'X-Client-Platform': 'web'
            },
            body: JSON.stringify(data),
          }).then(
            response => {
                const cookie = response.headers.get('set-cookie');
                console.log(...response.headers);
                console.log(cookie);
                console.log(response);
                return response.json() 
            }
        ).then(data => {
            console.log(data);
        })
        .catch(error => console.log(error));
    };

    // const verifyCookieForUser = () => {
    //     fetch('/web/cookie/token', {
    //         method: 'GET',
    //         headers:{
    //             'Content-Type': 'application/json',
    //             'X-Client-Platform': 'web'
    //         },
    //       }).then(
    //         response => {
    //             console.log(...response.headers);
    //             console.log(response);
    //             return response.json() 
    //         }
    //     ).then(data => {
    //         console.log(data);
    //     })
    //     .catch(error => console.log(error));
    // }

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        )

    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Email</label>
                    <input type="text" name="email" onChange={handleChange} required />
                    {renderErrorMessage("email")}
                </div>
                <div className="input-container">
                    <label>Password</label>
                    <input type="password" name="password" onChange={handleChange} required />
                    {renderErrorMessage("password")}
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    );

    return(
        // <div className="app">
        //     <div className="login-form">
        //         <div className="title"> Sign In</div>
        //         {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
        
      <div>
          {isSubmitted ?  <MemHub /> : renderForm }  
      </div>
    );

}

export default LoginForm;