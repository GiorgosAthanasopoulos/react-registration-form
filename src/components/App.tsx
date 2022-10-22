import React from "react";

import "../stylesheets/App.css";

export default function App(): JSX.Element {
    function submit(): void {
        const firstName: string = (document.getElementById("firstName") as HTMLInputElement).value.toLowerCase();
        const lastName: string = (document.getElementById("lastName") as HTMLInputElement).value.toLowerCase();
        const email: string = (document.getElementById("email") as HTMLInputElement).value.toLowerCase();

        const firstNameError: Element = document.getElementById("firstName-error") as HTMLHeadingElement;
        const lastNameError: Element = document.getElementById("lastName-error") as HTMLHeadingElement;
        const emailError: Element = document.getElementById("email-error") as HTMLHeadingElement;

        const nameRegex: string = "/\\d/";
        const emailRegex: string = "/^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/";

        if(firstName.match(nameRegex)) {
            firstNameError.innerHTML = "First name cannot contain numbers!";
            firstNameError.setAttribute("visibility", "visible");
        } else {
            firstNameError.setAttribute("visibility", "hidden");
        }

        if(lastName.match(nameRegex)) {
            lastNameError.innerHTML = "Last name cannot contain numbers!";
            lastNameError.setAttribute("visibility", "visible");
        } else {
            lastNameError.setAttribute("visibility", "hidden");
        }

        if(!email.match(emailRegex)) {
            emailError.innerHTML = "Invalid email address!";
            emailError.setAttribute("visibility", "visible");
        } else {
            emailError.setAttribute("visibility", "hidden");
        }
    }

    return (
        <>
            <div id={"form"}>
                <h1>Register</h1>

                <label htmlFor={"firstName"}>First Name</label>
                <input id={"firstName"} name={"firstName"} autoComplete={"off"} placeholder={"Enter first name..."} type={"text"} pattern={"[A-Za-z]"} required/>
                {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
                <h3 className={"error"} id={"firstName-error"}></h3>

                <label htmlFor={"lastName"}>Last Name</label>
                <input id={"lastName"} name={"lastName"} autoComplete={"off"} placeholder={"Enter last name..."} type={"text"} pattern={"[A-Za-z]"} required/>
                {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
                <h3 className={"error"} id={"lastName-error"}></h3>

                <label htmlFor={"email"}>Email</label>
                <input id={"email"} name={"email"} autoComplete={"off"} placeholder={"Enter email..."} type={"email"} pattern={"\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$\""} required/>
                {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
                <h3 className={"error"} id={"email-error"}></h3>

                <button className={"button"} onClick={submit}>Submit</button>
            </div>
        </>
    );
};