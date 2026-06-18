import {CONTACT_ACTION_TYPES, EDITABLE_CONTACT_ACTION_TYPE} from "../actions/actionTypes";
import {EMPTY_CONTACT} from "../../constants";

const initialState = EMPTY_CONTACT;

export default function editableContactsReducer(state = initialState, {type, payload}) {
    switch (type) {
        case EDITABLE_CONTACT_ACTION_TYPE:
        case CONTACT_ACTION_TYPES.ADD.ACTION:
            return payload;
        case CONTACT_ACTION_TYPES.ADD.SUCCESS:
        case CONTACT_ACTION_TYPES.DELETE.SUCCESS:
            return EMPTY_CONTACT;
        default:
            return state;
    }
}
