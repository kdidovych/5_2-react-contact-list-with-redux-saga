import {takeLatest} from 'redux-saga/effects';
import {CONTACT_ACTION_TYPES} from '../store/actions/actionTypes';
import {getContactsSaga, addContactSaga, updateContactSaga, deleteContactSaga} from './contactSagas';

function* rootSaga() {
    yield takeLatest(CONTACT_ACTION_TYPES.GET.ACTION, getContactsSaga);
    yield takeLatest(CONTACT_ACTION_TYPES.ADD.ACTION, addContactSaga);
    yield takeLatest(CONTACT_ACTION_TYPES.UPDATE.ACTION, updateContactSaga);
    yield takeLatest(CONTACT_ACTION_TYPES.DELETE.ACTION, deleteContactSaga);
}

export default rootSaga;