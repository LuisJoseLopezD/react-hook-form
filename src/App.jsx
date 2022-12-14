import React, { useState, useEffect } from "react";
import useForm from "./hooks/useForm";

const App = () => {

    const { formState, onInputChange } = useForm({
        username: '',
        email: '',
        password: ''
    });

    const { username, email, password } = formState;

    return (
        <>

            <div className="container">

                <input
                    className="form-control mt-2"
                    type="text" placeholder="username"
                    name="username" value={username}
                    onChange={onInputChange}
                />
                <input
                    className="form-control mt-2"
                    type="email" placeholder="email"
                    name="email" value={email}
                    onChange={onInputChange}
                />
                <input
                    className="form-control mt-2"
                    type="password" placeholder="password"
                    name="password" value={password}
                    onChange={onInputChange}
                />

                <button className="btn btn-primary mt-4">SEND</button>

            </div>

        </>
    )
}

export default App;
