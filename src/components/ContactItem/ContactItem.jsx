import './ContactItem.css';
import {useDispatch} from 'react-redux';
import {deleteContactAction} from "../../store/actions/contactActions.js";
import {setEditableContact} from "../../store/actions/editableContacctActions.js";

function ContactItem({contact}) {
    const dispatch = useDispatch();
    const onContactDelete = () => {
        dispatch(deleteContactAction(contact.id));
    };
    const onDoubleClick = () => {
        dispatch(setEditableContact(contact));
    };

    return (
        <div className="contact" onDoubleClick={onDoubleClick}>
            {`${contact.firstName} ${contact.lastName}`}
            <span className="X" onClick={onContactDelete}></span>
        </div>
    );
}

export default ContactItem;