import {CONTACT_ACTION_TYPES} from "./actionTypes";

/**
 * @returns {{type: string}}
 */
export const getContactsAction = () => {
    return {
        type: CONTACT_ACTION_TYPES.GET.ACTION
    }
}
/**
 * @returns {{type: string}}
 */
export const getContactsRequest = () => {
    return {
        type: CONTACT_ACTION_TYPES.GET.REQUEST
    }
}
/**
 * @param {Array} contacts
 * @returns {{type: string, payload: Array}}
 */
export const getContactsSuccess = (contacts) => {
    return {
        type: CONTACT_ACTION_TYPES.GET.SUCCESS,
        payload: contacts
    }
}
/**
 * @param {Error} error
 * @returns {{type: string, payload: Error}}
 */
export const getContactsError = (error) => {
    return {
        type: CONTACT_ACTION_TYPES.GET.ERROR,
        payload: error
    }
}

/**
 * @param {Object} contact
 * @returns {{type: string, payload: Object}}
 */
export const addContactAction = (contact) => {
    return {
        type: CONTACT_ACTION_TYPES.ADD.ACTION,
        payload: contact
    }
}
/**
 * @returns {{type: string}}
 */
export const addContactRequest = () => {
    return {
        type: CONTACT_ACTION_TYPES.ADD.REQUEST,
    }
}
/**
 * @param {Object} contact
 * @returns {{type: string, payload: Object}}
 */
export const addContactSuccess = (contact) => {
    return {
        type: CONTACT_ACTION_TYPES.ADD.SUCCESS,
        payload: contact,
    }
}
/**
 * @param {Error} error
 * @returns {{type: string, payload: Error}}
 */
export const addContactError = (error) => {
    return {
        type: CONTACT_ACTION_TYPES.ADD.ERROR,
        payload: error,
    }
}

/**
 * @param {Object} contact
 * @returns {{type: string, payload: Object}}
 */
export const updateContactAction = (contact) => {
    return {
        type: CONTACT_ACTION_TYPES.UPDATE.ACTION,
        payload: contact,
    }
}
/**
 * @returns {{type: string}}
 */
export const updateContactRequest = () => {
    return {
        type: CONTACT_ACTION_TYPES.UPDATE.REQUEST,
    }
}
/**
 * @param {Object} contact
 * @returns {{type: string, payload: Object}}
 */
export const updateContactSuccess = (contact) => {
    return {
        type: CONTACT_ACTION_TYPES.UPDATE.SUCCESS,
        payload: contact,
    }
}
/**
 * @param {Error} error
 * @returns {{type: string, payload: Error}}
 */
export const updateContactError = (error) => {
    return {
        type: CONTACT_ACTION_TYPES.UPDATE.ERROR,
        payload: error,
    }
}

/**
 * @param {string} id
 * @returns {{type: string, payload: string}}
 */
export const deleteContactAction = (id) => {
    return {
        type: CONTACT_ACTION_TYPES.DELETE.ACTION,
        payload: id,
    }
}
/**
 * @returns {{type: string}}
 */
export const deleteContactRequest = () => {
    return {
        type: CONTACT_ACTION_TYPES.DELETE.REQUEST,
    }
}
/**
 * @param {Object} payload
 * @returns {{type: string, payload: Object}}
 */
export const deleteContactSuccess = (payload) => {
    return {
        type: CONTACT_ACTION_TYPES.DELETE.SUCCESS,
        payload: payload,
    }
}
/**
 * @param {Error} error
 * @returns {{type: string, payload: Error}}
 */
export const deleteContactError = (error) => {
    return {
        type: CONTACT_ACTION_TYPES.DELETE.ERROR,
        payload: error,
    }
}