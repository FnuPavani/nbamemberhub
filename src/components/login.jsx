import React, { useState } from 'react';
import "../css/login.css";
import MemberHub from './memberhub';
// import { GET_COOKIE_ENDPOINT } from '../config/service-config';

function Login(){
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const database = [
        {
            username: "angela.washington@willowtreeapps.com",
            password: "Hello123"
        },
        {
            username: "user1",
            password: "pass1"
        },
        {
            username: "user2",
            password: "pass2"
        }
    ];

    const errors = {
        uname: "Invalid username",
        pass: "Invalid password"
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        var {uname, pass} = document.forms[0];
        const userData = database.find((user)=> user.username === uname.value);
        if(userData) {
            if(userData.password !== pass.value) {
                setErrorMessages({name: "pass", message:errors.pass})
            } else {
                setIsSubmitted(true);
                 (async () => {
                    loginUser(uname, pass);
                    // verifyCookieForUser(uname, pass);
                 })();
            }
        } else {
            setErrorMessages({name:"uname", message:errors.uname})
        }
    }

    const loginUser = (userName,password) => {
        console.log(userName)
        const data = {
            'email': userName.value,
            'password': password.value
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
                    <label>Username</label>
                    <input type="text" name="uname" required />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <label>Password</label>
                    <input type="password" name="pass" required />
                    {renderErrorMessage("pass")}
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
            <div>
                {isSubmitted ?  <MemberHub /> : renderForm }  
            </div>
        </div>
    );

}

export default Login;