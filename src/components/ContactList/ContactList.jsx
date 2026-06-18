import {connect} from 'react-redux';
import ContactItem from '../ContactItem/ContactItem.jsx';
import {useEffect} from 'react';
import {setEditableContact} from '../../store/actions/editableContacctActions.js';
import './ContactList.css';
import {EMPTY_CONTACT} from "../../constants.js";
import {getContactsAction} from "../../store/actions/contactActions.js";

function ContactList({contacts, setEditableContact, getContactsAction}) {
    useEffect(() => {
        getContactsAction();
    }, [getContactsAction]);

    const cleanForm = () => {
        setEditableContact(EMPTY_CONTACT);
    }

    return (
        <section className="contact-list-section">
            <div className="contact-list-items">
                {contacts.items.map(
                    item => <ContactItem key={'contactId-' + item.id} contact={item}/>
                )}
            </div>
            <div className='contact-list-buttons'>
                <button onClick={cleanForm}>New</button>
            </div>
        </section>
    );
}

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts
    };
};
const mapActionsToProps = {
    setEditableContact,
    getContactsAction
}
export default connect(mapStateToProps, mapActionsToProps)(ContactList);