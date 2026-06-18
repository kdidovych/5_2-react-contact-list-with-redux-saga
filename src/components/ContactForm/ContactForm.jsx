import './ContactForm.css';
import {connect, useDispatch} from "react-redux";
import {addContactAction, deleteContactAction, updateContactAction} from "../../store/actions/contactActions.js";
import {useInput} from "../../hooks/form.jsx";
import {useEffect, useState} from "react";

function ContactForm({contact}) {
    const firstName = useInput(contact.firstName);
    const lastName = useInput(contact.lastName);
    const email = useInput(contact.email);
    const phone = useInput(contact.phone);

    useEffect(() => {
        firstName.setValue(contact.firstName);
        lastName.setValue(contact.lastName);
        email.setValue(contact.email);
        phone.setValue(contact.phone);
    }, [contact]);

    const dispatch = useDispatch();

    /** @param {Event} event */
    const onFormSubmit = (event) => {
        event.preventDefault();
        const updatedContact = {
            ...contact,
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            phone: phone.value,
        }
        if (contact.id) {
            dispatch(updateContactAction(updatedContact));
        } else {
            dispatch(addContactAction(updatedContact));
        }
    }

    const onContactDelete = () => {
        dispatch(deleteContactAction(contact.id));
    }

    return (
        <section className="contact-form-section">
            <form className="contact-form" onSubmit={onFormSubmit}>
                <div className="inputs-container">
                    <input
                        type="hidden"
                        name="id"
                        value={contact.id}/>
                    <label>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="FirstName"
                            value={firstName.value}
                            onChange={firstName.onChange}
                            required/>
                        <span className='X' onClick={firstName.doClean}></span>
                    </label>
                    <label>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="LastName"
                            value={lastName.value}
                            onChange={lastName.onChange}
                            required/>
                        <span className='X' onClick={lastName.doClean}></span>
                    </label>
                    <label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={email.value}
                            onChange={email.onChange}
                            autoComplete="on"
                            required/>
                        <span className='X' onClick={email.doClean}></span>
                    </label>
                    <label>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            value={phone.value}
                            onChange={phone.onChange}
                            autoComplete="on"
                            required/>
                        <span className='X' onClick={phone.doClean}></span>
                    </label>
                </div>
                <div className="form-buttons">
                    <button type="submit">Save</button>
                    {contact.id
                        ? <button type="button" onClick={onContactDelete}>Delete</button>
                        : ""
                    }
                </div>
            </form>
        </section>
    );
}

const mapStateToProps = (state) => {
    return {
        contact: state.editableContact
    };
};
export default connect(mapStateToProps)(ContactForm);