import React, { useState, useEffect } from "react";

// Login/Register feature uses localStorage in this context, as accessing Ecotourism Australia's actual users database is obviousy out of the scope of this project.

function LoginInputs(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (

        // insert Ellen's login page

        <div className="login-grid">
            <input className="login1"
                aria-labelledby="loginbutton"
                name="email"
                id="email"
                placeholder="Email"
                type="text"
                value={email}
                onChange={event => {
                    const { value } = event.target;
                    setEmail(value);
                }}
            />

            <input className="login2"
                aria-labelledby="loginbutton"
                name="password"
                id="password"
                placeholder="Password"
                type="password"
                value={password}
                onChange={event => {
                    const { value } = event.target;
                    setPassword(value);
                }}
            />

            <button className="login3"
                id="loginbutton"
                type="button"
                color="#6c757d"
                onClick={() => props.onSubmit([email, password])}
            >Submit
            </button>
        </div>

    )

}

export default function LoginRegister() {
    const [submitted, setSubmitted] = useState([])
    const [status, setStatus] = useState("")

    var mode;
    if (window.location.pathname === "/login") {
        mode = "Login";
    } else if (window.location.pathname === "/register") {
        mode = "Register";
    }

    function BottomMessage() {
        if (localStorage.getItem("token")) {
            return <p>You're already logged in! <a href="/logout">Logout here.</a></p>
        } else if (mode === "Login") {
            return <p>Don't have an account? <a href="/register">Register here.</a></p>
        } else if (mode === "Register") {
            return <p>Already have an account? <a href="/login">Login here.</a></p>
        }
    }

    function JWT(email, password, type) {
        // var url = "localhost:3000"
        // if (type === 'Login') url = `${url}/login`
        // else if (type === 'Register') url = `${url}/register`

        // if (window.location.href.includes("?redirect=")) {
        //     var redirect = window.location.href.split("=").pop();
        // }

        if (!email && !password) return 0;

        fetch(url, {
            method: "POST",
            headers: { accept: "application/json", "Content-Type": "application/json" },
            body: JSON.stringify({ email: email, password: password })
        })
            .then((res) => res.json())
            .then(res => {
                if (res.error) {
                    setStatus("Something went wrong: " + res.message)
                } else {
                    if (type === 'Login') {
                        localStorage.setItem("token", res.token)
                        setStatus("Logged in!")
                        // if (redirect) {
                        //     window.location.href = `/${redirect}`
                        // } else window.location.href = "/home"
                    } else if (type === 'Register') {
                        setStatus('Registered!')
                        window.location.href = "/login";
                    }
                }
            })
    }

    useEffect(() => {
        JWT(submitted[0], submitted[1], mode);
    }, [submitted, mode])

    return (
        <div className="centered">

            <h1 align="left">{mode}</h1>
            <LoginInputs onSubmit={setSubmitted} />
            <BottomMessage />

            <p>{status}</p>
        </div>
    )
}