import React, { useState } from "react";
import { LoginForm } from "../../Components/Login/Login";
import { ResetPassword } from "../../Components/Password-reset/passwordReset";

import "./Entry.style.css";
export const Entry = () => {
    const [frmLoad, setFrmLoad] = useState("login");
    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const { email, password } = { ...data };
    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(data);

        if (!email || !password) {
            alert("Fill up all the form details");
        }
    };

    const handleOnResetSubmit = (e) => {
        e.preventDefault();

        if (!email) {
            alert("Please fill up Email correctly");
            console.log(email);
        }
    };

    const formSwitcher = (frmType) => {
        setFrmLoad(frmType);
    };

    return (
        <div className="Entry-page bg-info">
            <div style={{ width: "20%" }} className="container">
                {frmLoad === "login" && (
                    <LoginForm changeHandler={changeHandler} email={email} pass={password} submitHandler={submitHandler} formSwitcher={formSwitcher} />
                )}

                {frmLoad === "reset" && (
                    <ResetPassword
                        changeHandler={changeHandler}
                        email={email}
                        handleOnResetSubmit={handleOnResetSubmit}
                        formSwitcher={formSwitcher}
                    />
                )}
            </div>
        </div>
    );
};
