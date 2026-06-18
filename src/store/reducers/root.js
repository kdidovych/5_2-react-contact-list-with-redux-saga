import {combineReducers} from 'redux';
import contactsReducer from './contactReducer';
import editableContactReducer from './editableContactReducer';

export default combineReducers({
    contacts: contactsReducer,
    editableContact: editableContactReducer,
});