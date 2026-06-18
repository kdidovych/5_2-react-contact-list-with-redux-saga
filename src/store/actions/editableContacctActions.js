import {EDITABLE_CONTACT_ACTION_TYPE} from "./actionTypes.js";
import {EMPTY_CONTACT} from "../../constants.js";

/**
 * @param {Object} editableContact
 * @returns {{type: string, payload: Object}}
 */
export const setEditableContact = (editableContact = EMPTY_CONTACT) => {
    return {
        'type': EDITABLE_CONTACT_ACTION_TYPE,
        'payload': editableContact
    }
}
