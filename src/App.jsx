import React from "react";
import useForm from "./hooks/useForm";

const App = () => {

    // hook form
    const { onInputChange, resetVariables, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    });

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

                <button
                    onClick={resetVariables}
                    className="btn btn-primary mt-4">
                    SEND
                </button>

            </div>

        </>
    )
}

export default App;
