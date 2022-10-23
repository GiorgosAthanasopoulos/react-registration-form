import React from "react";

import "../stylesheets/App.css";
import {fireChangeForInputTimeIfValid} from "@testing-library/user-event/dist/keyboard/shared";

export default function App(): JSX.Element {
    function submit(): void {
        const firstName: string = (document.getElementById("firstName") as HTMLInputElement).value.toLowerCase();
        const lastName: string = (document.getElementById("lastName") as HTMLInputElement).value.toLowerCase();
        const email: string = (document.getElementById("email") as HTMLInputElement).value.toLowerCase();

        const firstNameError: HTMLHeadingElement = document.getElementById("firstName-error") as HTMLHeadingElement;
        const lastNameError: HTMLHeadingElement = document.getElementById("lastName-error") as HTMLHeadingElement;
        const emailError: HTMLHeadingElement = document.getElementById("email-error") as HTMLHeadingElement;

        const nameRegex = /\d/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        firstNameError.hidden = !nameRegex.test(firstName);
        lastNameError.hidden = !nameRegex.test(lastName);
        emailError.hidden = emailRegex.test(email);
    }

    return (
        <>
            <div id={"form"}>
                <h1>Register</h1>

                <label htmlFor={"firstName"}>First Name</label>
                <input id={"firstName"} name={"firstName"} autoComplete={"off"} placeholder={"Enter first name..."}
                       type={"text"} pattern={"[A-Za-z]"} required/>
                <h3 className={"error"} id={"firstName-error"} hidden={true}>First name cannot contain numbers!</h3>

                <label htmlFor={"lastName"}>Last Name</label>
                <input id={"lastName"} name={"lastName"} autoComplete={"off"} placeholder={"Enter last name..."}
                       type={"text"} pattern={"[A-Za-z]"} required/>
                <h3 className={"error"} id={"lastName-error"} hidden={true}>Last name cannot contain numbers!</h3>

                <label htmlFor={"email"}>Email</label>
                <input id={"email"} name={"email"} autoComplete={"off"} placeholder={"Enter email..."} type={"email"}
                       pattern={"\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$\""} required/>
                <h3 className={"error"} id={"email-error"} hidden={true}>Invalid email address!</h3>

                <button className={"button"} onClick={submit}>Submit</button>
            </div>
        </>
    );
};