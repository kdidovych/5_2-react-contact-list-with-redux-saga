import {put} from 'redux-saga/effects';
import api from '../api/contact-service';
import {CONTACTS_STORAGE_NAME} from '../constants';
import {
    getContactsRequest,
    getContactsSuccess,
    getContactsError,
    addContactRequest,
    addContactSuccess,
    addContactError,
    updateContactRequest,
    updateContactSuccess,
    updateContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError
} from '../store/actions/contactActions';
import {setEditableContact} from "../store/actions/editableContacctActions.js";

export function* getContactsSaga() {
    yield put(getContactsRequest());
    try {
        const contacts = yield api.get(CONTACTS_STORAGE_NAME).then(({data}) => data);
        yield put(getContactsSuccess(contacts));
    } catch (error) {
        yield put(getContactsError(error))
    }
}

export function* addContactSaga({payload}) {
    yield put(addContactRequest());
    try {
        const newContact = yield api.post(CONTACTS_STORAGE_NAME, payload).then(({data}) => data);
        yield put(addContactSuccess(newContact));
    } catch (error) {
        yield put(addContactError(error))
    }
}

export function* updateContactSaga({payload}) {
    yield put(updateContactRequest());
    try {
        const updatedContact = yield api.put(`${CONTACTS_STORAGE_NAME}/${payload.id}`, payload)
            .then(({data}) => data);
        yield put(updateContactSuccess(updatedContact));
    } catch (error) {
        yield put(updateContactError(error))
    }
}

export function* deleteContactSaga({payload}) {
    yield put(deleteContactRequest());
    try {
        yield api.delete(`${CONTACTS_STORAGE_NAME}/${payload}`);
        yield put(deleteContactSuccess(payload))
    } catch (error) {
        yield put(deleteContactError(error))
    }
}