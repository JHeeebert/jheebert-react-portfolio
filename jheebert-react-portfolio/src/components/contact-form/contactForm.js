import React, { useState } from "react";
import "./contactForm.css";
import Swal from "sweetalert2";
// Define input fields dynamically
const inputFields = [
    {
        name: "name",
        type: "text",
        placeholder: "Name",
    },
    {
        name: "email",
        type: "email",
        placeholder: "Email",
    },
    {
        name: "phoneNumber",
        type: "tel",
        placeholder: "Phone Number",
    },
    {
        name: "message",
        type: "text",
        placeholder: "Message",
    },
];
// Create a Resusable error message component
const ErrorMessage = ({ message }) => {
    return message ? <p className="errorMessage">{message}</p> : null;
};
// Create ContactForm
const ContactForm = () => {
    const initialState = {
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
        file: null,
    };
    // Set formState to initial state
    const [formState, setFormState] = useState(initialState);
    const [errorMessage, setErrorMessage] = useState("");
    // Handle input changes
    const handleInputChange = (e) => {
        // Get name and value from target
        const { name, value, type } = e.target;
        const inputValue = type === "file" ? e.target.files[0] : value;
        // Update formState
        setFormState({
            ...formState,
            [name]: inputValue,
        });
    };
    // Reset formState to initial state
    const resetForm = () => {
        setFormState(initialState);
        setErrorMessage("");
    };
    // Handle form submit
    const handleFormSubmit = (e) => {
        e.preventDefault();
    }
        const { name, email, phoneNumber, message } = formState;
        // Check if form has everything
        if (!name || !email || !message) {
            setErrorMessage("Please fill out all required fields.");
            return;
        }
        // Check if email is valid
        if (!validateEmail(email)) {
            setErrorMessage("Please enter a valid email address.");
            return;
        }
        // Check if phone number is valid
        if (phoneNumber.length !== 10) {
            setErrorMessage("Please enter a valid phone number.");
            return;
        }
        // Check if message is valid
        if (message.length < 10) {
            setErrorMessage("Please enter a valid message.");
            return;
        }
        // If all is well, send the data to the server
        setErrorMessage("");
        resetForm();
        Swal.fire({
            title: "Thank you!",
            text: "Thank you for contacting us. We will get back to you as soon as possible.",
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Close",
        });
        return (
            <div className="contact-form">
                <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
                <form id="contact-form" onSubmit={handleFormSubmit}>
                    {inputFields.map((inputField) => (
                        <div className="form-group" key={inputField.name}>
                        <label htmlFor={inputField.name}>{inputField.label}</label>
                        {inputField.type === "textarea" ? (
                            <textarea className="form-control" name={inputField.name} rows="5" value={formState[inputField.name]} onBlur={handleInputChange} />
                        ) : (
                            <input type={inputField.type} className="form-control" name={inputField.name} value={formState[inputField.name]} onBlur={handleInputChange} />
                        )}
                        </div>
                    ))}
                    <ErrorMessage message={errorMessage} />
                    <button type="submit" className="btn btn-primary btn-lg btn-block">Submit</button>
                </form>
            </div>
        );
    };
// Validate email address
const validateEmail = (email) => {
    const re = /^(([^<>()\\.,;:\s@"]+(\.[^<>()\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

export default ContactForm;
